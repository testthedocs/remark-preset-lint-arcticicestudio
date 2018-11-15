<p align="center"><img src="https://rawgit.com/arcticicestudio/remark-preset-lint-arcticicestudio/develop/assets/remark-preset-lint-arcticicestudio-banner-typography.svg"/></p>

<p align="center">The <a href="https://arcticicestudio.github.io/styleguide-markdown">Arctic Ice Studio Markdown Style Guide</a> rules as <a href="https://github.com/remarkjs/remark-lint">remark-lint</a> configuration preset</p>

<p align="center"><img src="https://assets-cdn.github.com/favicon.ico" width=24 height=24/> <a href="https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/remark-preset-lint-arcticicestudio.svg?style=flat-square"/></a> <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg?sanitize=true" width=24 height=24/> <a href="https://www.npmjs.com/package/remark-preset-lint-arcticicestudio"><img src="https://img.shields.io/npm/v/remark-preset-lint-arcticicestudio.svg?style=flat-square"/></a> <a href="https://www.npmjs.com/package/remark-preset-lint-arcticicestudio"><img src="https://img.shields.io/npm/dt/remark-preset-lint-arcticicestudio.svg?style=flat-square"/></a> <a href="https://www.npmjs.com/package/remark-preset-lint-arcticicestudio"><img src="https://img.shields.io/npm/dm/remark-preset-lint-arcticicestudio.svg?style=flat-square"/></a></p>

<p align="center"><img src="https://circleci.com/favicon.ico" width=24 height=24/> <a href="https://circleci.com/gh/arcticicestudio/remark-preset-lint-arcticicestudio"><img src="https://img.shields.io/circleci/project/github/arcticicestudio/remark-preset-lint-arcticicestudio/develop.svg?style=flat-square"/></a></p>

<p align="center"><a href="https://arcticicestudio.github.io/remark-preset-lint-arcticicestudio"><img src="https://img.shields.io/badge/Docs-0.2.0-5E81AC.svg?style=flat-square"/></a> <a href="https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio/blob/develop/CHANGELOG.md#020"><img src="https://img.shields.io/badge/Changelog-0.2.0-5E81AC.svg?style=flat-square"/></a> <a href="https://github.com/arcticicestudio/styleguide-markdown"><img src="https://img.shields.io/badge/Markdown_Style_Guide-0.2.0-88C0D0.svg?style=flat-square&colorA=2E3440&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOSIgaGVpZ2h0PSIzOSIgdmlld0JveD0iMCAwIDM5IDM5Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNEOERFRTkiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMS41IDEuNWgzNnYzNmgtMzZ6Ii8%2BPHBhdGggZmlsbD0iI0Q4REVFOSIgZD0iTTIwLjY4MyAyNS42NTVsNS44NzItMTMuNDhoLjU2Nmw1Ljg3MyAxMy40OGgtMS45OTZsLTQuMTU5LTEwLjA1Ni00LjE2MSAxMC4wNTZoLTEuOTk1em0tMi42OTYgMGwtMTMuNDgtNS44NzJ2LS41NjZsMTMuNDgtNS44NzJ2MS45OTVMNy45MzEgMTkuNWwxMC4wNTYgNC4xNnoiLz48L3N2Zz4%3D"/></a></p>

## Getting Started

The documentation provides chapters to learn about the [requirements][ghio-docs-getting-started-requirements], the [installation][ghio-docs-getting-started-installation] and [how to use][ghio-docs-getting-started-usage] the package. You can learn [how to build][ghio-docs-dev-building] the project and [run the tests][ghio-docs-dev-testing] in the development chapters.

The package includes support for all [official core rules][remark-lint-gh-doc-rules].

### Quick Start

#### Installation

Add the package as development dependency to your project:

```sh
npm install --save-dev remark-preset-lint-arcticicestudio
```

*remark-lint* can be used to process markdown using plugins with the CLI for *remark*. Therefore this package depends on the [remark-cli][npm-remark-cli] package defined as [peer dependency][nodejs-blog-peerdeps].

Run `npm install` from within the project root to bootstrap the project and install the development- and runtime dependencies. The peer dependency can now be easily installed using **npm 5+** with [npx][npm-npx]:

```sh
npx install-peerdeps --dev remark-preset-lint-arcticicestudio
```

Please read the documentation on [how to install the peer dependencies][ghio-docs-getting-started-installation-peer_deps] if using **npm < 5**.

#### Usage

This remark-lint configuration preset can be used by adding it to the plugins within the [remark-lint configuration file][remark-lint-doc-conf] of your project.

Add `remark-preset-lint-arcticicestudio` to the `plugins` array in your `.remarkrc.js` or `.remarkrc` file:

```js
module.exports = {
  plugins: ["remark-preset-lint-arcticicestudio"]
};
```

## Contributing

Read the [contributing guide][ghio-docs-dev-contributing] to learn about the development process and how to propose [enhancement suggestions][ghio-docs-dev-contributing-enhancements] and [report bugs][ghio-docs-dev-contributing-bug-reports], how to [submit pull requests][ghio-docs-dev-contributing-pr] and the project's [styleguides][ghio-docs-dev-contributing-styleguides], [branch organization][ghio-docs-dev-contributing-branch-org] and [versioning][ghio-docs-dev-contributing-versioning] model.

The guide also includes information about [minimal, complete, and verifiable examples][ghio-docs-dev-contributing-mcve] and other ways to contribute to the project like [improving existing issues][ghio-docs-dev-contributing-other-improve-issues] and [giving feedback on issues and pull requests][ghio-docs-dev-contributing-other-feedback].

<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/banner-footer-mountains.svg" /></p>

<p align="center">Copyright &copy; 2018-present Arctic Ice Studio & Sven Greb</p>

<p align="center"><a href="https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio/blob/develop/LICENSE.md"><img src="https://img.shields.io/badge/License-MIT-5E81AC.svg?style=flat-square"/></a></p>

[ghio-docs-dev-building]: https://arcticicestudio.github.io/remark-preset-lint-arcticicestudio/development/building.html
[ghio-docs-dev-contributing]: https://arcticicestudio.github.io/remark-preset-lint-arcticicestudio/development/contributing.html
[ghio-docs-dev-contributing-branch-org]: https://arcticicestudio.github.io/remark-preset-lint-arcticicestudio/development/contributing.html#branch-organization
[ghio-docs-dev-contributing-bug-reports]: https://arcticicestudio.github.io/remark-preset-lint-arcticicestudio/development/contributing.html#bug-reports
[ghio-docs-dev-contributing-enhancements]: https://arcticicestudio.github.io/remark-preset-lint-arcticicestudio/development/contributing.html#enhancement-suggestions
[ghio-docs-dev-contributing-mcve]: https://arcticicestudio.github.io/remark-preset-lint-arcticicestudio/development/contributing.html#mcve
[ghio-docs-dev-contributing-other-feedback]: https://arcticicestudio.github.io/remark-preset-lint-arcticicestudio/development/contributing.html#give-feedback-on-issues-and-pull-requests
[ghio-docs-dev-contributing-other-improve-issues]: https://arcticicestudio.github.io/remark-preset-lint-arcticicestudio/development/contributing.html#improve-issues
[ghio-docs-dev-contributing-pr]: https://arcticicestudio.github.io/remark-preset-lint-arcticicestudio/development/contributing.html#pull-requests
[ghio-docs-dev-contributing-styleguides]: https://arcticicestudio.github.io/remark-preset-lint-arcticicestudio/development/contributing.html#styleguides
[ghio-docs-dev-contributing-versioning]: https://arcticicestudio.github.io/remark-preset-lint-arcticicestudio/development/contributing.html#versioning
[ghio-docs-dev-testing]: https://arcticicestudio.github.io/remark-preset-lint-arcticicestudio/development/testing.html
[ghio-docs-getting-started-installation]: https://arcticicestudio.github.io/remark-preset-lint-arcticicestudio/getting-started/installation.html
[ghio-docs-getting-started-installation-peer_deps]: https://arcticicestudio.github.io/remark-preset-lint-arcticicestudio/getting-started/installation.html
[ghio-docs-getting-started-requirements]: https://arcticicestudio.github.io/remark-preset-lint-arcticicestudio/development/requirements.html
[ghio-docs-getting-started-usage]: https://arcticicestudio.github.io/remark-preset-lint-arcticicestudio/getting-started/usage.html
[nodejs-blog-peerdeps]: https://nodejs.org/en/blog/npm/peer-dependencies
[npm-npx]: https://www.npmjs.com/package/npx
[npm-remark-cli]: https://www.npmjs.com/package/remark-cli
[remark-lint-doc-conf]: https://github.com/remarkjs/remark-lint#configuring-remark-lint
[remark-lint-gh-doc-rules]: https://github.com/remarkjs/remark-lint/blob/master/doc/rules.md#list-of-rules
