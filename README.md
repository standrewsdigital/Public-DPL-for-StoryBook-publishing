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

To check the SCSS to CSS compiler, use the scripts defined in [package.json](package.json). These commands compile the `scss-styles/` directory into `compiled-css/`.

Watch mode (recommended while developing):

```bash
npm run dev
# or
npm run scss:watch
```

One-time build (compressed output):

```bash
npm run scss:build
```

While watch mode is running, make a small change to any file in `scss-styles/` and save. You should see output in your terminal and the files in `compiled-css/` update.

By following these steps, you should have a working setup of the `sta-dpl-npm` package, ready for development. If you encounter any issues, refer to the project's README file or contact the repository maintainers for further assistance.


# Development guide:
This guide outlines the process of developing, building, and deploying CSS styling using SCSS, HTML examples, and integrating these changes into a Node package, GitLab repository, and CDN through FTPS.

## Overview
The development process involves several key steps, from writing styles in SCSS, compiling them to CSS, testing them with HTML pages, and then managing version control and deployment through GitLab and npm, ultimately ensuring the styling is distributed via CDN.

## Development and Compilation
### SCSS to CSS Compilation

Use SCSS (Sassy CSS) to write your styling code in `scss-styles/`. Compile to CSS using the npm scripts:

```bash
npm run dev           # Watch SCSS → CSS (alias for scss:watch)
npm run scss:watch    # Watch SCSS → CSS with live compilation
npm run scss:build    # One-time SCSS to CSS compilation (compressed output)
```

Compiled output is written to `compiled-css/`.

### HTML Page Examples

Use the HTML examples in `html-examples/` to test components. Each file mirrors a component name (e.g., `form-elements.html` tests `form-elements.scss`).

### Vite JavaScript Build

Only `scripts/form-elements.js` is bundled by Vite. Use:

```bash
npm run dev-vite      # Start Vite dev server
npm run build-vite    # Build to dist-vite/ with sourcemaps
```

## Version Control and Collaboration
### GitLab Repository Workflow

Create a new branch for your changes: This ensures that the main branch remains stable while development continues on feature or bug-fix branches.
After making changes and compiling SCSS to CSS, push your branch and create a pull request.
Once reviewed and approved, merge your changes into the main branch.

### Version Management and npm

Update the version using npm (also updates `NPMVERSION.md`), then publish:

```bash
npm version [major|minor|patch]
npm publish
```

## Deployment
### CDN Deployment via FTPS

Publish compiled CSS to the CDN via FTPS using:

```bash
node uploadToFtps.cjs
```

Requires a `.env` file with: `FTP_HOST`, `FTP_PORT`, `FTP_USER`, `FTP_PASSWORD`, `FTP_SECURE=true`. The script uses the version from `package.json` to create `/delta/cdn/dpl/new/{version}/`.

## Integration and Automation Considerations
### Referencing CSS in T4 Page Layouts

When updating the DPL version, ensure T4 page layouts reference the new CDN path. Consider using a single version variable to simplify updates across templates.

## Conclusion
Following this guide will help ensure a streamlined process for developing, deploying, and maintaining styling with DPL.