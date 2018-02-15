> Please make sure to complete the [requirement][requirements] steps first in order to install the project!

Add the package as development dependency to your project:

```sh
npm install --save-dev remark-preset-lint-arcticicestudio
```

Run `npm install` from within the project root to bootstrap the project and install the development- and runtime dependencies.
Note that **this will not install the required package for the remark CLI** which is defined as [peer dependency][nodejs-blog-peerdeps]. It must be installed separately as described below.

## Peer Dependencies

*remark-lint* can be used to process markdown using plugins with the CLI for *remark*. Therefore this package depends on the [remark-cli][npm-remark-cli] package defined as [peer dependency][nodejs-blog-peerdeps].

If using **npm 5** or higher (prebundled with [Node.js 8+][nodejs-download]), all peer dependencies can be easily installed using the [npx][npm-npx] tool which comes prebundled with **npm 5+**:

```sh
npx install-peerdeps --dev remark-preset-lint-arcticicestudio
```

If using **npm < 5**, the *npx* tool is not prebundled, but users can either simply install [npx][npm-npx] globally and then run the above command or just install the [install-peerdeps][npm-install-peerdeps] package locally/globally to let it handle the installation of all peer dependencies.

```sh
npm install install-peerdeps
./node_modules/.bin/install-peerdeps --dev remark-preset-lint-arcticicestudio
```

Or via global installation:

```sh
npm install -g install-peerdeps
install-peerdeps --dev remark-preset-lint-arcticicestudio
```

Linux & macOS user can install all peer dependencies can be simply installed using the new [npx][npm-npx] tool which comes prebundled with **npm 5+**:

```sh
npx install-peerdeps --dev remark-preset-lint-arcticicestudio
```

### Manually

All peer dependencies can also be installed manually by installing the correct version of each package:

```sh
npm info "remark-preset-lint-arcticicestudio@latest" peerDependencies
```

[requirements]: requirements.md

[nodejs-blog-peerdeps]: https://nodejs.org/en/blog/npm/peer-dependencies
[nodejs-download]: https://nodejs.org/en/download
[npm-install-peerdeps]: https://www.npmjs.com/package/install-peerdeps
[npm-npx]: https://www.npmjs.com/package/npx
[npm-remark-cli]: https://www.npmjs.com/package/remark-cli
