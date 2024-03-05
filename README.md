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


# Development guide:
This guide outlines the process of developing, building, and deploying CSS styling using SCSS, HTML examples, and integrating these changes into a Node package, GitLab repository, and CDN through FTPS.

## Overview
The development process involves several key steps, from writing styles in SCSS, compiling them to CSS, testing them with HTML pages, and then managing version control and deployment through GitLab and npm, ultimately ensuring the styling is distributed via CDN.

## Development and Compilation
### SCSS to CSS Compilation

Use SCSS (Sassy CSS) to write your styling code. SCSS allows for variables, nested rules, mixins, and more, making your CSS more maintainable and easier to write.
Compile your SCSS code to CSS using a build tool or script. This process will generate .css files from your .scss files, typically in a compiled-css folder.

### HTML Page Examples

Create example HTML pages to demonstrate and test your styling. Ensure that these pages use the compiled CSS files to reflect the styling accurately.

## Version Control and Collaboration
### GitLab Repository Workflow

Create a new branch for your changes: This ensures that the main branch remains stable while development continues on feature or bug-fix branches.
After making changes and compiling SCSS to CSS, push your branch and create a pull request.
Once reviewed and approved, merge your changes into the main branch.

### Version Management and npm

Update the version of your npm package following semantic versioning principles. This update should be part of the pull request to ensure version consistency.
After merging, sync the main branch to ensure all changes are up-to-date.
Publish the new version of your package to npm, making it available for others to use.

## Deployment
### CDN Deployment via FTPS

Publish your compiled CSS files to a CDN (Content Delivery Network) through FTPS (File Transfer Protocol Secure). This step ensures that your styling is accessible and can be efficiently delivered to users worldwide.

## Pipeline Automation

We should consider automating the update of the npm package and the upload of CSS files to the CDN as part of your GitLab CI/CD pipeline. This automation can streamline the deployment process and reduce manual errors.
If VPN issues interfere with CDN uploads, manual intervention may be necessary. However, automating wherever possible is beneficial.

## Integration and Automation Considerations
### Referencing CSS in T4 Page Layouts

Explore automating the reference to new DPL CSS files in T4 page layouts. Automating this can save time and reduce the risk of human error. Consider using a variable or constant to represent the DPL version in page or component creation scripts.

### Automation and Versioning

Discuss the potential for automating the inclusion of the DPL version in web pages or components. This approach could facilitate easier updates and maintenance of web assets using DPL styling.

## Conclusion
Following this guide will help ensure a streamlined process for developing, deploying, and maintaining styling with DPL. Automation and careful version control are key to efficient workflow and consistent performance across all stages of development and deployment.