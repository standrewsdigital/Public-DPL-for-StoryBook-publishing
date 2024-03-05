# sta-dpl-npm



## Getting started
To set up and start using the npm package from the repository `sta-dpl-npm`, please follow these steps carefully. This guide assumes you have Git installed on your system. If you don't have Git, please download and install it from [git-scm.com](https://git-scm.com/).

### Step 1: Clone the Repository

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command:

```bash
git clone https://gitlab-its.st-andrews.ac.uk/digital-communications/standards/sta-dpl-npm.git
```

This command clones the `sta-dpl-npm` repository to your local machine.

### Step 2: Ensure Node.js is Installed

Before proceeding, you must have Node.js installed on your computer. To check if you already have Node.js and npm (Node Package Manager) installed, run the following commands in your terminal:

```bash
node -v
npm -v
```

If these commands return version numbers, it means Node.js and npm are already installed, and you can move on to the next step. If not, you need to download and install Node.js. Please visit [nodejs.org](https://nodejs.org/) to download the installer for your operating system. Installing Node.js will automatically install npm as well.

### Step 3: Install Dependencies

After cloning the repository and ensuring Node.js is installed, navigate to the project directory:

```bash
cd sta-dpl-npm
```

Then, install the necessary npm packages by running:

```bash
npm install
```

### Step 4: Compile SCSS to CSS

To check if the SCSS to CSS compiler is working, use the following npm script command provided in your instructions. This command watches the `scss-styles/` directory for changes and compiles the SCSS files into CSS, outputting them to the `compiled-css/` directory.

First, ensure your `package.json` file includes the following script:

```json
"scripts": {
  "compile-scss": "node-sass -w scss-styles/ -o compiled-css/"
}
```

If the script is in place, you can run the compiler with:

```bash
npm run compile-scss
```

To make sure the previous command worked, while the command is running, make a small change to one of the files in the scss-styles and save it, you should see it working in your terminal, and the files in compiled-css changing.

This command starts the SCSS to CSS compilation process. It will continue to watch for any changes in your SCSS files and recompile them as needed.

By following these steps, you should have a working setup of the `sta-dpl-npm` package, ready for development. If you encounter any issues, refer to the project's README file or contact the repository maintainers for further assistance.