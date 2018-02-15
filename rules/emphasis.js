/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <code@svengreb.de>
 *
 * Project:    Arctic Ice Studio remark-lint Preset
 * Repository: https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio
 * License:    MIT
 */

/**
 * @file Official remark-lint core rules for emphasis document nodes.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @see {@link https://github.com/remarkjs/remark-lint/blob/master/doc/rules.md#list-of-rules remark-lint Core Rules}
 */

/**
 * Enforce a consistent character style for emphasis marker.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-code-block-style code-block-style}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/emphasis.html#italic Style Guide: "Emphasis - Italic"}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/emphasis.html#bold Style Guide: "Emphasis - Bold"}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/emphasis.html#strikethrough Style Guide: "Emphasis - Strikethrough"}
 */
const emphasisMarker = require("remark-lint-emphasis-marker");
/**
 * Warn when using emphasis elements (bold or italics) as replacement for headings.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-emphasis-as-heading no-emphasis-as-heading}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/emphasis.html#no-header-replacement Style Guide: "Emphasis - No Header Replacement"}
 */
const noEmphasisAsHeading = require("remark-lint-no-emphasis-as-heading");
/**
 * Disallow inner padding within emphasis marker, code marker and link IDs.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-inline-padding no-inline-padding}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/emphasis.html#no-inner-spacing Style Guide: "Emphasis - No Inner Spacing"}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/links.html#no-id-inner-spacing Style Guide: "Links - No ID Inner Spacing"}
 */
const noInlinePadding = require("remark-lint-no-inline-padding");
/**
 * Enforce the character style for strong (bold) emphasis markers.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-strong-marker strong-marker}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/emphasis.html#bold Style Guide: "Emphasis - Bold"}
 */
const strongMarker = require("remark-lint-strong-marker");

module.exports = {
  plugins: [
    [emphasisMarker, ["warn", "consistent"]],
    [noEmphasisAsHeading, ["warn"]],
    [noInlinePadding, ["error"]],
    [strongMarker, ["error", "*"]]
  ]
};
