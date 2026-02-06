# sta-dpl-npm Copilot Instructions

## Project Overview
**sta-dpl-npm** (`@stadigicomms/dpl`) is a CSS component library for the University of St Andrews website. It provides reusable styling components distributed via npm and CDN, supporting both light and dark themes.

## Architecture & Components

### SCSS Organization (scss-styles/)
- **main.scss**: Central import file that orchestrates all styles in dependency order
- **_variables.scss**: Global color variables, typography, and breakpoints imported from `variables/`
- **_themes.scss**: Theme management using CSS custom properties (`--var-name`) with `@mixin apply-theme()` for light/dark mode support
- **_global.scss**: Base typography and responsive font-size calculations via mixins
- **Component files**: One .scss file per UI component (e.g., `form-elements.scss`, `tabs.scss`)
- **_mixins.scss**: Reusable utility mixins for responsive design and common patterns

### CSS Output (compiled-css/)
Auto-generated from SCSS compilation. Reflects component styles organized by their feature area.

### Distribution Pipeline
1. **Development**: Write SCSS in `scss-styles/`
2. **Compilation**: `npm run compile-scss` watches for changes and outputs to `compiled-css/`
3. **npm Package**: Published to [@stadigicomms/dpl](https://www.npmjs.com/package/@stadigicomms/dpl)
4. **CDN Upload**: `uploadToFtps.cjs` pushes versioned CSS to FTPS at `/delta/cdn/dpl/new/{version}/` using credentials from .env

## Key Patterns & Conventions

### Theme System
- CSS custom properties are conditionally set at `:root` via `prefers-color-scheme: dark` media query
- Theme maps defined in `_light-theme.scss` and `_dark-theme.scss`
- Themes applied with `@include apply-theme($theme-map)` mixin, generates `--key: value` pairs
- Use `.dark` class to force dark theme in light mode (currently broken with grid layouts per TODO)

### Responsive Design
- Breakpoints defined in `variables/_breakpoints.scss`
- Use `@include responsive-font-size(base, increment, min-viewport, max-viewport)` mixin
- Typography scales using SCSS `@each` loop for fluid sizing

### Color System
- Main colors in `variables/_main-colors.scss` (blue, orange, green, purple, burgundy, greys, etc.)
- Tints/shades generated for each color (e.g., `$blue-primary`, `$blue-25-tint`, `$blue-25-shade`)
- Color utility classes auto-generated in `_variables.scss` using `@each` loop: `.bg-{color}`, `.text-{color}`

## Workflow & Commands

### Development
```bash
npm install           # Install dependencies
npm run dev           # Watch SCSS → CSS (alias for npm run scss:watch)
npm run scss:watch    # Watch SCSS → CSS with live compilation
npm run scss:build    # One-time SCSS to CSS compilation (compressed output)
npm run dev-vite      # Start Vite dev server for JS (scripts/form-elements.js entry)
npm run build-vite    # Build Vite output with sourcemaps to dist-vite/
npm run build         # Full build: scss:build + build-vite
```

### Version & Publish
```bash
npm version [major|minor|patch]  # Update version in package.json and NPMVERSION.md
npm login                        # Login with digicomms email (credentials in Thycotic)
npm publish                      # Publish to npm registry
npm publish --tag beta           # Publish to beta tag if needed
```

### CDN Deployment
```bash
node uploadToFtps.cjs  # Upload compiled-css/ to FTPS
# Requires .env with: FTP_HOST, FTP_PORT, FTP_USER, FTP_PASSWORD, FTP_SECURE=true
# Script automatically uses version from package.json for CDN path
```

## Important Implementation Details

### Import Order Matters
In `main.scss`, imports follow a strict sequence:
1. Themes and variables (foundation)
2. Typography and mixins
3. Global styles
4. Layout patterns (grid, header, footer)
5. UI components
6. Utility classes (margins, padding, alignment)

### No Empty index.js
The [index.js](index.js) file is intentionally empty—this is an SCSS library, not a JS module export.

### Vite Build Entry Point
Only [scripts/form-elements.js](scripts/form-elements.js) is configured as the build entry point in `vite.config.js`. Other scripts (nav-toggle.js, tabs.js) exist but are not bundled by default.

### Version in CDN Path
The FTPS upload script reads version from `package.json` and creates version-specific directories: `/delta/cdn/dpl/new/1.4.1/` format. Version must be updated before CDN deployment.

## HTML Examples (html-examples/)
Reference implementations for each component—use these to test SCSS changes before publishing. File structure mirrors component names (e.g., `form-elements.html` tests `form-elements.scss`).

## Common Tasks

**Adding a new component**:
1. Create `scss-styles/component-name.scss`
2. Import in `scss-styles/main.scss` in appropriate location
3. Create test HTML in `html-examples/component-name.html`
4. Run `npm run scss:build` to verify output

**Updating theme colors**:
1. Modify `scss-styles/variables/_light-theme.scss` and/or `_dark-theme.scss`
2. CSS custom properties automatically update
3. Verify with HTML examples using both light and dark modes

**Publishing changes**:
1. Update SCSS and compile
2. Test with HTML examples
3. `npm version [major|minor|patch]`
4. `npm publish`
5. `node uploadToFtps.cjs` (after confirming .env is configured)
6. Reference new CDN version in T4 page layouts

## External Dependencies
- **sass**: SCSS compilation
- **dotenv**: Environment variables for FTPS credentials
- **basic-ftp**: FTPS file upload
- **ssh2-sftp-client**: SFTP alternative (installed but uploadToFtps uses basic-ftp)
- **vite**: Build bundler for JavaScript

## GitLab Repository
Hosted at `https://gitlab-its.st-andrews.ac.uk/digital-communications/standards/sta-dpl-npm.git`
Workflow: feature branch → MR review → merge to main → npm publish + CDN deploy
