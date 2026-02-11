# sta-dpl-npm

**@stadigicomms/dpl** is a CSS component library for the University of St Andrews website. It provides reusable styling components distributed via npm and CDN, supporting both light and dark themes.

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Color System](#color-system)
- [Utility Classes](#utility-classes)
- [Icon Generation](#icon-generation)
- [Development Guide](#development-guide)
- [Version Control and Deployment](#version-control-and-deployment)

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

---

## Project Structure

### Key Directories

```
sta-dpl-npm/
├── scss-styles/          # Source SCSS files (edit these)
│   ├── main.scss         # Central import orchestrator
│   ├── _variables.scss   # Global variables and color definitions
│   ├── _themes.scss      # Theme management (light/dark mode)
│   ├── _global.scss      # Base typography and responsive font sizing
│   ├── _mixins.scss      # Reusable utility mixins
│   ├── _bg-colors.scss   # Background color utility classes
│   ├── _text-colors.scss # Text color utility classes
│   └── variables/        # Variable definitions (colors, breakpoints, etc.)
│       ├── _main-colors.scss      # Primary color palette with tints/shades
│       ├── _light-theme.scss      # Light mode theme variables
│       ├── _dark-theme.scss       # Dark theme variables
│       └── _breakpoints.scss      # Responsive breakpoints
│
├── compiled-css/         # Generated CSS output (don't edit directly)
│   └── main.css          # Main compiled CSS bundle (~105KB minified)
│
├── html-examples/        # Component demonstration files
│   ├── form-elements.html
│   ├── icons-grid.html
│   └── ...
│
├── assets/
│   ├── icons/
│   │   ├── icons-scripts/
│   │   │   ├── make-themable-svgs.py  # Create CSS variable templates
│   │   │   └── color-svgs.py          # Generate brand-colored icons
│   │   ├── icons-themable/            # Template SVGs with CSS variables
│   │   └── icons-colored/             # Generated brand-colored SVGs
│   └── fonts/
│
└── scripts/              # JavaScript utilities (form-elements.js, etc.)
```

### Import Order

In `main.scss`, imports follow strict dependency order:
1. Themes and variables (foundation)
2. Typography and mixins
3. Global styles
4. Layout patterns (grid, header, footer)
5. UI components
6. Utility classes (margins, padding, alignment, colors)

**⚠️ Important**: Changing import order can break the build or cause unexpected styling conflicts.

---

## Color System

### Overview

The DPL color system provides comprehensive tint and shade ranges for all brand colors:

- **Tints**: 5% increments toward white (5-95%), making colors progressively lighter
- **Shades**: 5% increments toward black (5-95%), making colors progressively darker
- **Primary Colors**: `blue`, `light-blue`, `green`, `purple`, `burgundy`

Each primary color has **40 variations**: 20 tints + 20 shades.

### Color Variable Naming

```scss
// Primary colors
$blue-primary: #00539b;
$green-primary: #008e47;
$purple-primary: #8855a0;
$burgundy-primary: #c91850;
$light-blue-primary: #33bef2;

// Tints (toward white)
$blue-5-tint: #0d5fa3;   // 5% lighter
$blue-25-tint: #4087ba;  // 25% lighter
$blue-50-tint: #809dcd;  // 50% lighter
$blue-75-tint: #bfcde6;  // 75% lighter
$blue-95-tint: #f2f5f9;  // 95% lighter

// Shades (toward black)
$blue-5-shade: #004f93;  // 5% darker
$blue-25-shade: #003f74; // 25% darker
$blue-50-shade: #002a4e; // 50% darker
$blue-75-shade: #001527; // 75% darker
$blue-95-shade: #000408; // 95% darker
```

### Legacy Background Colors

For backward compatibility with existing pages, legacy light background colors are available:

```scss
$light-blue-light-bg: #e0f2fd;  // Previously $light-blue-5-shade
$green-light-bg: #d2f9e3;       // Previously $green-5-shade
$purple-light-bg: #f4e3ff;      // Previously $purple-5-shade
$burgundy-light-bg: #ffd3e1;    // Previously $burgundy-5-shade
```

**Note**: These legacy colors are **only available for backgrounds** (`.bg-*` classes), not text colors.

### Finding Colors

All color variables are defined in [scss-styles/variables/_main-colors.scss](scss-styles/variables/_main-colors.scss). You can search for specific percentages:

```bash
# Find all 70-tint colors
grep "70-tint" scss-styles/variables/_main-colors.scss

# Find all burgundy variations
grep "burgundy-" scss-styles/variables/_main-colors.scss
```

---

## Utility Classes

### Background Colors

Apply background colors using `.bg-{color}-{level}-{type}` pattern:

```html
<!-- Primary colors -->
<div class="bg-blue-primary">Blue background</div>
<div class="bg-green-primary">Green background</div>

<!-- Tints (lighter) -->
<div class="bg-blue-25-tint">Light blue background</div>
<div class="bg-purple-50-tint">Medium light purple</div>
<div class="bg-burgundy-75-tint">Very light burgundy</div>

<!-- Shades (darker) -->
<div class="bg-green-25-shade">Dark green background</div>
<div class="bg-blue-50-shade">Medium dark blue</div>
<div class="bg-purple-75-shade">Very dark purple</div>

<!-- Legacy light backgrounds -->
<div class="bg-light-blue-light-bg">Legacy light blue</div>
<div class="bg-green-light-bg">Legacy light green</div>
```

### Text Colors

Apply text colors using `.text-{color}-{level}-{type}` pattern:

```html
<!-- Primary colors -->
<p class="text-blue-primary">Blue text</p>
<p class="text-green-primary">Green text</p>

<!-- Tints (lighter text) -->
<p class="text-burgundy-50-tint">Light burgundy text</p>

<!-- Shades (darker text) -->
<p class="text-blue-75-shade">Very dark blue text</p>
```

**Note**: Legacy `-light-bg` colors are **not available** as text colors (only backgrounds).

### Available Colors

- **blue**: 20 tints + 20 shades (40 variations)
- **light-blue**: 20 tints + 20 shades + 1 legacy bg (41 variations)
- **green**: 20 tints + 20 shades + 1 legacy bg (41 variations)
- **purple**: 20 tints + 20 shades + 1 legacy bg (41 variations)
- **burgundy**: 20 tints + 20 shades + 1 legacy bg (41 variations)

**Total**: 400+ color utility classes across `.bg-*` and `.text-*`.

### Verifying Utility Classes

Check if specific color classes exist in compiled CSS:

```bash
# PowerShell: Search for specific color class
Select-String "\.bg-blue-50-tint" compiled-css/main.css

# PowerShell: Count all background color classes
(Select-String "\.bg-.*-tint," compiled-css/main.css).Count
```

---

## Icon Generation

### Overview

The project includes Python scripts to generate brand-colored icon variations from themable SVG templates.

### Prerequisites

Ensure Python 3 is installed:

```bash
python --version
```

### Icon Scripts

Located in `assets/icons/icons-scripts/`:

1. **`make-themable-svgs.py`**: Creates themable icon templates with CSS variables
   - Converts line colors to `var(--icon-line)`
   - Converts background colors to `var(--icon-bg)`
   - Converts accent colors to `var(--icon-accent)`
   - Input: `icons-base/` (original SVGs)
   - Output: `icons-themable/` (CSS variable templates)

2. **`color-svgs.py`**: Generates concrete brand-colored icon variations
   - Replaces CSS variables with actual hex colors
   - Creates themed versions: burgundy, green, purple (blue is default)
   - Input: `icons-themable/` (templates with CSS variables)
   - Output: `icons-colored/` (brand-colored SVGs)

### Generating Icons

#### Step 1: Create Themable Templates (if needed)

Only needed when adding new icons or updating base colors:

```bash
cd assets/icons/icons-scripts
python make-themable-svgs.py
```

This processes icons from `icons-base/` and creates themable versions in `icons-themable/`.

#### Step 2: Generate Brand-Colored Icons

After updating color values in `color-svgs.py`:

```bash
cd assets/icons/icons-scripts
python color-svgs.py
```

This generates 165 icons (55 base icons × 3 color themes) in `icons-colored/`.

### Color Configuration

Edit theme colors in `color-svgs.py`:

```python
THEMES = {
    'burgundy': {
        'line': '#c91850',           # burgundy-primary
        'background': '#eeb6c8',     # burgundy-70-tint
        'accent': '#e64b7a',         # burgundy-25-tint
    },
    'green': {
        'line': '#008e47',           # green-primary
        'background': '#b3dac5',     # green-70-tint
        'accent': '#26985c',         # green-15-tint
    },
    'purple': {
        'line': '#8855a0',           # purple-primary
        'background': '#d7c7e1',     # purple-70-tint
        'accent': '#8f5fa9',         # purple-15-tint
    }
}
```

**Note**: Use color values from `_main-colors.scss` to ensure consistency across CSS and SVG assets.

### Icon Usage in HTML

```html
<!-- Default blue icon -->
<img src="assets/icons/icons-colored/icon-name.svg" alt="Icon">

<!-- Brand-colored icons -->
<img src="assets/icons/icons-colored/icon-name-burgundy.svg" alt="Burgundy icon">
<img src="assets/icons/icons-colored/icon-name-green.svg" alt="Green icon">
<img src="assets/icons/icons-colored/icon-name-purple.svg" alt="Purple icon">
```

### Icon Contrast Tips

- **Background colors**: Use 70-75% tints for sufficient contrast with primary line colors
- **Accent colors**: Use 15-25% tints to ensure visibility against tinted backgrounds
- **Testing**: View icons on `html-examples/icons-grid.html` with different background colors
- **Avoid**: Very light tints (90-95%) appear washed out; very light accents (50%+) look grey

---

# Development guide

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

### Theme System

DPL uses CSS custom properties for theme support:

```scss
// Define theme variables in _light-theme.scss and _dark-theme.scss
$light-theme: (
  'background': #ffffff,
  'text': #333333,
  // ... more variables
);

// Applied via mixin in _themes.scss
@include apply-theme($light-theme);  // Generates --background: #ffffff, etc.
```

**Dark Mode**: Automatically applied via `prefers-color-scheme: dark` media query. Also supported via `.dark` class for manual control.

### File Size Tracking

Monitor compiled CSS size after making changes:

```bash
# PowerShell
Get-ChildItem compiled-css/main.css | Select-Object Name, @{Name="Size (KB)";Expression={[math]::Round($_.Length/1KB, 2)}}

# Expected output: main.css ~105-106 KB (minified)
```

**Size History**:
- Base: ~91 KB
- +Tints: ~97 KB
- +Shades: ~105 KB
- +Legacy colors: ~105.57 KB

### HTML Page Examples

Use the HTML examples in `html-examples/` to test components. Each file mirrors a component name (e.g., `form-elements.html` tests `form-elements.scss`).

**Best Practices**:
- Test components in both light and dark modes
- Verify responsive behavior at different breakpoints
- Check color contrast using browser DevTools
- Test icon visibility with different background colors

### Vite JavaScript Build

Only `scripts/form-elements.js` is bundled by Vite. Use:

```bash
npm run dev-vite      # Start Vite dev server
npm run build-vite    # Build to dist-vite/ with sourcemaps
npm run build         # Full build: scss:build + build-vite
```

---

## Version Control and Deployment

### GitLab Repository Workflow

1. **Create a feature branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes** and compile SCSS to CSS
3. **Test** using HTML examples
4. **Commit changes**:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

5. **Push branch** and create a merge request:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Review and merge** into main branch after approval

### Version Management and npm

Update the version using npm (also updates `NPMVERSION.md`):

```bash
# Patch: Bug fixes (1.0.0 → 1.0.1)
npm version patch

# Minor: New features, backward compatible (1.0.0 → 1.1.0)
npm version minor

# Major: Breaking changes (1.0.0 → 2.0.0)
npm version major
```

### Publishing to npm

1. **Login to npm** (credentials in Thycotic):
   ```bash
   npm login
   # Use digicomms email address
   ```

2. **Publish to registry**:
   ```bash
   npm publish              # Publish to latest tag
   npm publish --tag beta   # Publish to beta tag for testing
   ```

3. **Verify publication**:
   ```bash
   npm info @stadigicomms/dpl
   ```

3. **Verify publication**:
   ```bash
   npm info @stadigicomms/dpl
   ```

### CDN Deployment via FTPS

Publish compiled CSS to the CDN via FTPS:

```bash
node uploadToFtps.cjs
```

#### Prerequisites

Create a `.env` file in the project root with FTPS credentials:

```env
FTP_HOST=your-ftp-host.com
FTP_PORT=21
FTP_USER=your-username
FTP_PASSWORD=your-password
FTP_SECURE=true
```

**⚠️ Security**: Never commit `.env` file to Git. It's already in `.gitignore`.

#### Deployment Process

1. **Ensure CSS is compiled**:
   ```bash
   npm run scss:build
   ```

2. **Verify version** in `package.json` matches your intended release

3. **Run upload script**:
   ```bash
   node uploadToFtps.cjs
   ```

4. **CDN path structure**: Files are uploaded to `/delta/cdn/dpl/new/{version}/`
   - Example: Version `1.4.5` → `/delta/cdn/dpl/new/1.4.5/main.css`

#### Referencing in T4 Page Layouts

Update T4 page layout templates to reference the new CDN version:

```html
<!-- Update version number in CDN URL -->
<link rel="stylesheet" href="https://cdn.st-andrews.ac.uk/delta/cdn/dpl/new/1.4.5/main.css">
```

**Tip**: Use a single version variable in T4 templates to simplify updates across multiple layouts.

---

## Troubleshooting

### SCSS Compilation Issues

**Problem**: `npm run scss:build` fails

**Solutions**:
- Check syntax errors in SCSS files
- Ensure all `@import` paths are correct
- Verify `sass` package is installed: `npm ls sass`
- Clear `node_modules` and reinstall: `npm ci`

### Missing Color Classes

**Problem**: `.bg-blue-50-tint` class not found in compiled CSS

**Solutions**:
1. Check if color exists in [scss-styles/variables/_main-colors.scss](scss-styles/variables/_main-colors.scss)
2. Verify color is included in `$bg-colors` map in [scss-styles/_bg-colors.scss](scss-styles/_bg-colors.scss)
3. Rebuild CSS: `npm run scss:build`
4. Search compiled CSS: `Select-String "\.bg-blue-50-tint" compiled-css/main.css`

### Icon Generation Errors

**Problem**: `python color-svgs.py` fails or generates incorrect colors

**Solutions**:
- Verify Python 3 is installed and accessible
- Check color hex values in `THEMES` dictionary match SCSS variables
- Ensure `icons-themable/` directory exists with template files
- Run `make-themable-svgs.py` first to regenerate templates if needed

### Icon Contrast Issues

**Problem**: Icons appear washed out or have poor contrast

**Solutions**:
- **Background colors**: Use 70-75% tints (e.g., `burgundy-70-tint`)
- **Accent colors**: Use 15-25% tints (e.g., `green-15-tint`)
- **Avoid**: 90-95% tints appear nearly white
- **Test**: View on [html-examples/icons-grid.html](html-examples/icons-grid.html) with different backgrounds

### FTPS Upload Fails

**Problem**: `uploadToFtps.cjs` fails to connect or upload

**Solutions**:
- Verify `.env` file exists with correct credentials
- Check `FTP_SECURE=true` for FTPS connections
- Confirm network access to FTP server
- Test credentials with FTP client (FileZilla, WinSCP)
- Check `package.json` version is valid format (e.g., `1.4.5`)

### CSS File Size Too Large

**Problem**: `main.css` exceeds expected size (~105-110 KB)

**Solutions**:
- Check for duplicate imports in `main.scss`
- Remove unused components from import list
- Verify compression is enabled: `--style=compressed` in build script
- Compare size history: `Get-ChildItem compiled-css/main.css`

---

## Quick Reference

### Common Commands

```bash
# Development
npm install                    # Install dependencies
npm run dev                    # Watch mode (SCSS → CSS)
npm run build                  # Full build (SCSS + Vite)

# Python scripts
python assets/icons/icons-scripts/color-svgs.py      # Generate colored icons
python assets/icons/icons-scripts/make-themable-svgs.py  # Create icon templates

# Version and publish
npm version patch              # Bump version (1.0.0 → 1.0.1)
npm publish                    # Publish to npm registry
node uploadToFtps.cjs          # Upload to CDN

# Verification
Get-ChildItem compiled-css/main.css | Select-Object Name, Length  # Check file size
Select-String "\.bg-blue-50-tint" compiled-css/main.css           # Find specific class
npm info @stadigicomms/dpl                                         # Check published version
```

### Color Naming Pattern

```
{color}-{percentage}-{type}

Examples:
- blue-25-tint        (25% lighter than blue-primary)
- green-50-shade      (50% darker than green-primary)
- purple-75-tint      (75% lighter than purple-primary)
- burgundy-light-bg   (legacy light background)
```

### File Locations

| What | Location |
|------|----------|
| **Edit colors** | `scss-styles/variables/_main-colors.scss` |
| **Background classes** | `scss-styles/_bg-colors.scss` |
| **Text classes** | `scss-styles/_text-colors.scss` |
| **Compiled CSS** | `compiled-css/main.css` |
| **Icon colors** | `assets/icons/icons-scripts/color-svgs.py` |
| **HTML examples** | `html-examples/*.html` |
| **Package version** | `package.json` |

---

## Deployment

---

## Complete Release Workflow

Step-by-step process for releasing a new DPL version:

### 1. Development Phase
```bash
# Create feature branch
git checkout -b feature/new-component

# Make changes to SCSS files
# Edit files in scss-styles/

# Watch mode for live compilation
npm run dev

# Test with HTML examples
# Open html-examples/*.html in browser
```

### 2. Testing Phase
```bash
# One-time build
npm run scss:build

# Check file size
Get-ChildItem compiled-css/main.css | Select-Object Name, @{Name="Size (KB)";Expression={[math]::Round($_.Length/1KB, 2)}}

# Verify color classes exist
Select-String "\.bg-your-new-color" compiled-css/main.css

# Test icon generation (if icons changed)
cd assets/icons/icons-scripts
python color-svgs.py
cd ../../..
```

### 3. Version Control
```bash
# Commit changes
git add .
git commit -m "Add new component/feature"

# Push and create merge request
git push origin feature/new-component

# After approval, merge to main
git checkout main
git pull origin main
```

### 4. Version and Publish
```bash
# Bump version (choose appropriate level)
npm version patch   # Bug fixes: 1.0.0 → 1.0.1
npm version minor   # New features: 1.0.0 → 1.1.0
npm version major   # Breaking changes: 1.0.0 → 2.0.0

# Login to npm (if not already logged in)
npm login

# Publish to npm registry
npm publish

# Verify publication
npm info @stadigicomms/dpl
```

### 5. CDN Deployment
```bash
# Verify .env file exists with FTPS credentials

# Upload to CDN
node uploadToFtps.cjs

# CDN path will be: /delta/cdn/dpl/new/{version}/main.css
```

### 6. Update T4 Templates
```html
<!-- Update version in T4 page layouts -->
<link rel="stylesheet" href="https://cdn.st-andrews.ac.uk/delta/cdn/dpl/new/1.4.5/main.css">
```

### 7. Post-Deployment Verification
1. Check npm package page: https://www.npmjs.com/package/@stadigicomms/dpl
2. Verify CDN URL loads correctly in browser
3. Test on staging environment before production
4. Monitor for any reported issues

---

## Contributing

### Code Style
- Use 2-space indentation in SCSS files
- Follow BEM naming convention for component classes
- Use mixins for reusable patterns
- Comment complex calculations or non-obvious logic
- Keep selectors specific but not overly nested (max 3 levels)

### Color Additions
When adding new colors to the system:

1. **Define in variables**:
   ```scss
   // scss-styles/variables/_main-colors.scss
   $new-color-primary: #hexvalue;
   
   // Generate tints (5-95% in 5% increments)
   $new-color-5-tint: mix($new-color-primary, white, 95%);
   // ... through ...
   $new-color-95-tint: mix($new-color-primary, white, 5%);
   
   // Generate shades (5-95% in 5% increments)
   $new-color-5-shade: mix($new-color-primary, black, 95%);
   // ... through ...
   $new-color-95-shade: mix($new-color-primary, black, 5%);
   ```

2. **Add to utility classes**:
   ```scss
   // scss-styles/_bg-colors.scss
   'new-color-primary': $new-color-primary,
   'new-color-5-tint': $new-color-5-tint,
   // ... all tints and shades ...
   
   // scss-styles/_text-colors.scss  
   // (same as above)
   ```

3. **Update icon generation** (if applicable):
   ```python
   # assets/icons/icons-scripts/color-svgs.py
   THEMES = {
       'new-color': {
           'line': '#hexvalue',        # primary color
           'background': '#hexvalue',   # 70-tint recommended
           'accent': '#hexvalue',       # 15-25% tint recommended
       }
   }
   ```

4. **Test and document**:
   - Create HTML example file
   - Add to color documentation
   - Test in both light and dark modes

---

## Conclusion

Following this guide will help ensure a streamlined process for developing, deploying, and maintaining styling with DPL.

### Key Takeaways
- ✅ **Edit SCSS**, not compiled CSS
- ✅ **Test with HTML examples** before publishing
- ✅ **Version appropriately** (major/minor/patch)
- ✅ **Publish to npm AND CDN** for complete distribution
- ✅ **Update T4 templates** after CDN deployment
- ✅ **Track file size** to monitor CSS bloat
- ✅ **Use 70-tint for icon backgrounds**, 15-25% tint for accents

### Support and Resources
- **GitLab Repository**: https://gitlab-its.st-andrews.ac.uk/digital-communications/standards/sta-dpl-npm
- **npm Package**: https://www.npmjs.com/package/@stadigicomms/dpl
- **Contact**: Digital Communications team (credentials in Thycotic)

For additional help or questions, contact the repository maintainers.