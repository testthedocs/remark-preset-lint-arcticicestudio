/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <code@svengreb.de>
 *
 * Project:    Arctic Ice Studio remark-lint Preset
 * Repository: https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio
 * License:    MIT
 */

/**
 * @file Official remark-lint core rules for whitespaces.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @see {@link https://github.com/remarkjs/remark-lint/blob/master/doc/rules.md#list-of-rules remark-lint Core Rules}
 */

/**
 * Enforce a newline at the end of a file. Empty files are allowed.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-final-newline final-newline}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/whitespace.html#newline Style Guide: "Whitespace - Newline"}
 */
const finalNewline = require("remark-lint-final-newline");
/**
 * Enforce a consistent number of trailing whitespaces for line breaks.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-hard-break-spaces hard-break-spaces}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/whitespace.html#trailing Style Guide: "Whitespace - Trailing"}
 */
const hardBreakSpaces = require("remark-lint-hard-break-spaces");
/**
 * Enforce unix-style linebreaks.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-linebreak-style linebreak-style}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/whitespace.html#newline Style Guide: "Whitespace - Newline"}
 */
const linebreakStyle = require("remark-lint-linebreak-style");
/**
 * Enforce a maximum line length.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-maximum-line-length maximum-line-length}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/whitespace.html#maximum-line-length Style Guide: "Whitespace - Maximum Line Length"}
 */
const maximumLineLength = require("remark-lint-maximum-line-length");
/**
 * Disallow more than one (1) blank line after and before each block.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-consecutive-blank-lines no-consecutive-blank-lines}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/whitespace.html#after-blocks Style Guide: "Whitespace - After Blocks"}
 */
const noConsecutiveBlankLines = require("remark-lint-no-consecutive-blank-lines");
/**
 * Warn when missing blank line before a block node.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-missing-blank-lines no-missing-blank-lines}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/whitespace.html#before-blocks Style Guide: "Whitespace - Before Blocks"}
 */
const noMissingBlankLines = require("remark-lint-no-missing-blank-lines");
/**
 * Disallow tabs and enforce to use whitespaces.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-tabs no-tabs}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/whitespace.html#indentation-character Style Guide: "Whitespace - Indentation Character"}
 */
const noTabs = require("remark-lint-no-tabs");

module.exports = {
  plugins: [
    [finalNewline, ["error"]],
    [hardBreakSpaces, ["error"]],
    [linebreakStyle, ["error", "unix"]],
    [maximumLineLength, false],
    [noConsecutiveBlankLines, ["warn"]],
    [noMissingBlankLines, ["warn", { exceptTightLists: true }]],
    [noTabs, ["error"]]
  ]
};
