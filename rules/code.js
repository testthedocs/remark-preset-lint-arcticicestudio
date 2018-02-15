/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <code@svengreb.de>
 *
 * Project:    Arctic Ice Studio remark-lint Preset
 * Repository: https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio
 * License:    MIT
 */

/**
 * @file Official remark-lint core rules for code document nodes.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @see {@link https://github.com/remarkjs/remark-lint/blob/master/doc/rules.md#list-of-rules remark-lint Core Rules}
 */

/**
 * Enforce fenced code blocks.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-code-block-style code-block-style}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/code.html#blocks Style Guide: "Code - Blocks"}
 */
const codeBlockStyle = require("remark-lint-code-block-style");
/**
 * Enforce language syntax flags for fenced code blocks.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-fenced-code-flag fenced-code-flag}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/code.html#syntax-highlighting Style Guide: "Code - Syntax Highlighting"}
 */
const fencedCodeFlag = require("remark-lint-fenced-code-flag");
/**
 * Enforce language syntax flags for fenced code blocks.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-fenced-code-marker fenced-code-marker}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/code.html#marker-character-style Style Guide: "Code - Marker Character Style"}
 */
const fencedCodeMarker = require("remark-lint-fenced-code-marker");
/**
 * Warn when using a dollar sign ("$") in shell code.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-shell-dollars no-shell-dollars}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/code.html#no-shell-code-dollar-sign Style Guide: "Code - No Shell Code Dollar Sign"}
 */
const noShellDollars = require("remark-lint-no-shell-dollars");

module.exports = {
  plugins: [
    [codeBlockStyle, ["error", "fenced"]],
    [fencedCodeFlag, ["error", { allowEmpty: false }]],
    [fencedCodeMarker, ["error", "`"]],
    [noShellDollars, ["warn"]]
  ]
};
