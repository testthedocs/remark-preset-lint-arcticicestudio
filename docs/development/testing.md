> Please make sure to complete the [requirement][getting-started-requirements] and [installation][getting-started-installation] steps first in order to test the project!

> Continuous integration builds are running at [Circle CI][ci-circle].

## Linting

The package *"lints itself"* using and extending the defined rules:

```sh
npm run lint:md
```

### JavaScript

[ESLint][eslint] is used in order to check all JavaScript sources using the [Arctic Ice Studio ESLint Base Config][eslint-config-arcticicestudio-base-ghio]:

```sh
npm run lint:js
```

[getting-started-installation]: ../getting-started/installation.md
[getting-started-requirements]: ../getting-started/requirements.md

[ci-circle]: https://circleci.com/gh/arcticicestudio/eslint-config-arcticicestudio
[eslint]: https://eslint.org
[eslint-config-arcticicestudio-base-ghio]: https://arcticicestudio.github.io/eslint-config-arcticicestudio-base/
