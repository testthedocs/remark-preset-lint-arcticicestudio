/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <code@svengreb.de>
 *
 * Project:    Arctic Ice Studio remark-lint Preset
 * Repository: https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio
 * License:    MIT
 */

/**
 * @file Official remark-lint core rules for naming conventions.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @see {@link https://github.com/remarkjs/remark-lint/blob/master/doc/rules.md#list-of-rules remark-lint Core Rules}
 */

/**
 * Enforce a consistent file extension.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-file-extension file-extension}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/naming-conventions.html#file-extension Style Guide: "Naming Conventions - File Extension"}
 */
const fileExtension = require("remark-lint-file-extension");
/**
 * Warn when file name start with an article.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-file-name-articles no-file-name-articles}
 */
const noFileNameArticles = require("remark-lint-no-file-name-articles");
/**
 * Warn when file names contain consecutive dashes.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-file-name-consecutive-dashes no-file-name-consecutive-dashes}
 */
const noFileNameConsecutiveDashes = require("remark-lint-no-file-name-consecutive-dashes");
/**
 * Warn when file names contain irregular characters other than alpha-numericals, dashes, and dots.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-file-name-irregular-characters no-file-name-irregular-characters}
 */
const noFileNameIrregularCharacters = require("remark-lint-no-file-name-irregular-characters");
/**
 * Disallow file names with mixed letter case: both upper- and lower case characters.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-file-name-mixed-case no-file-name-mixed-case}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/naming-conventions.html#file-naming Style Guide: "Naming Conventions - File Naming"}
 */
const noFileNameMixedCase = require("remark-lint-no-file-name-mixed-case");
/**
 * Warn when file names contain initial or final dashes.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-file-name-outer-dashes no-file-name-outer-dashes}
 */
const noFileNameOuterDashes = require("remark-lint-no-file-name-outer-dashes");

module.exports = {
  plugins: [
    [fileExtension, ["error", "md"]],
    [noFileNameArticles, false],
    [noFileNameConsecutiveDashes, ["warn"]],
    [noFileNameIrregularCharacters, false],
    [noFileNameMixedCase, ["error"]],
    [noFileNameOuterDashes, ["warn"]]
  ]
};
