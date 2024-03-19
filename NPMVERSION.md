# NPM versioning

This project is managed using npm versioning. Below are the commands you can use to manage versions and publish the [@stadigicomms/dpl](https://www.npmjs.com/package/@stadigicomms/dpl) package.


## Installation

To get started, make sure you have npm installed. You can install npm by [downloading and installing Node.js](https://nodejs.org/).

## NPM login
Make sure you are logged in to npm by running:
```bash
npm login
```
You should login with the digicomms email address and password found in Thycotic.

## Updating the version
When you're ready to update your package version, you can use the following command:

```bash
npm version [<newversion> | major | minor | patch]
```
Replace <newversion> with the version number you want to set, or use major, minor, or patch to automatically increment the corresponding version segment.

## Publishing the package
Once you've updated the version, you can publish your package to npm's registry using:
```bash
npm publish
```

## Additional options
### Tags
By default, npm publish will publish the latest tag. If you want to publish a different tag, such as next or beta, you can specify it like this:

```bash
npm publish --tag <tagname>
```

### Managing Tags
To add or remove tags from versions, you can use the npm dist-tag command. For example, to add a latest tag to a specific version:

```bash
npm dist-tag add <pkg>@<version> [<tag>]
```
To remove a tag:

```bash
npm dist-tag rm <pkg> <tag>
```

### Additional Resources
For more information on npm versioning and publishing, you can refer to the official [npm documentation](https://docs.npmjs.com/cli/v7/commands/npm-version).