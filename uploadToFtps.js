const fs = require('fs');
const path = require('path');
const ftp = require('basic-ftp');
require('dotenv').config();

const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const version = packageJson.version;

// FTPS configuration
// Add your credentials to the .env file before running this script.
// Command to run script: node uploadToFtps.js
const ftpConfig = {
    host: process.env.FTP_HOST,
    port: process.env.FTP_PORT, // Default FTPS port
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    secure: process.env.FTP_SECURE === 'true' // Enable FTPS
};

async function checkAndCreateFolder(client, folderPath) {
    try {
        await client.cd('/'); // Go to root directory
        const parts = folderPath.split('/').filter(p => p.length > 0);
        let currentPath = '';

        for (const part of parts) {
            currentPath += '/' + part;
            try {
                await client.cd(currentPath); // Try to navigate to the directory
            } catch (err) {
                await client.makeDir(currentPath); // Adjusted to the correct method name
                await client.cd(currentPath); // Navigate into the new directory
                console.log(`Created directory: ${currentPath}`);
            }
        }
    } catch (err) {
        console.error(`Error in checking or creating folder ${folderPath}:`, err.message);
    }

}

async function uploadDirectory(client, localDirPath, remoteDirPath) {
    try {
        let localFiles = fs.readdirSync(localDirPath);
        await client.ensureDir(remoteDirPath);
        await client.cd(remoteDirPath);

        for (const localFile of localFiles) {
            const localFilePath = path.join(localDirPath, localFile);

            if (fs.statSync(localFilePath).isDirectory()) {
                // THIS LINE IS THE FIXED ONE:
                await uploadDirectory(client, localFilePath, path.join(remoteDirPath, localFile));
            } else {
                const remoteFilePath = localFile;
                await client.uploadFrom(localFilePath, remoteFilePath);
                console.log(`Uploaded ${localFile}`);
            }
        }
        await client.cd('..');
    } catch (err) {
        console.error(`Error uploading directory ${localDirPath}:`, err.message);
    }
}


async function uploadFiles(version) {
    const client = new ftp.Client();
    client.ftp.verbose = true; // Enable verbose logging

    try {
        await client.access(ftpConfig);

        const remoteFolderPath = `/delta/cdn/dpl/new/${version}`;
        await checkAndCreateFolder(client, remoteFolderPath);

        const localCssFolderPath = path.join(__dirname, './compiled-css');
        await uploadDirectory(client, localCssFolderPath, remoteFolderPath);

        console.log(`Uploaded directory: ${localCssFolderPath}`);
    } catch (err) {
        console.error('FTPS Operation Error:', err.message);
    } finally {
        client.close();
    }
}

uploadFiles(version);
