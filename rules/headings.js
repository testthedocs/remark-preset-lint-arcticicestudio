/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <code@svengreb.de>
 *
 * Project:    Arctic Ice Studio remark-lint Preset
 * Repository: https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio
 * License:    MIT
 */

/**
 * @file Official remark-lint core rules for heading document nodes.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @see {@link https://github.com/remarkjs/remark-lint/blob/master/doc/rules.md#list-of-rules remark-lint Core Rules}
 */

/**
 * Enforce a specific level for the first heading.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-first-heading-level first-heading-level}
 */
const firstHeadingLevel = require("remark-lint-first-heading-level");
/**
 * Enforce headings to only increment by one at a time.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-heading-increment heading-increment}
 */
const headingIncrement = require("remark-lint-heading-increment");
/**
 * Enforce ATX style headings.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-heading-style heading-style}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/headings.html#atx-style Style Guide: "Headings - ATX Style"}
 */
const headingStyle = require("remark-lint-heading-style");
/**
 * Warn if a maximum length for headings is exceeded.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-maximum-heading-length maximum-heading-length}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/headings.html#length Style Guide: "Headings - Length"}
 */
const maximumHeadingLength = require("remark-lint-maximum-heading-length");
/**
 * Warn when using two or more headers with the same content in the same markdown file.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-duplicate-headings no-duplicate-headings}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/headings.html#no-duplicate Style Guide: "Headings - No Duplicate"}
 */
const noDuplicateHeadings = require("remark-lint-no-duplicate-headings");
/**
 * Warn when using two or more headers with the same content in the same section.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-duplicate-headings-in-section no-duplicate-headings-in-section}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/headings.html#no-duplicate Style Guide: "Headings - No Duplicate"}
 */
const noDuplicateHeadingsInSection = require("remark-lint-no-duplicate-headings-in-section");
/**
 * Disallow invalid indention of headings content.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-heading-content-indent no-heading-content-indent}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/headings.html#content-spacing Style Guide: "Headings - Content Spacing"}
 */
const noHeadingContentIndent = require("remark-lint-no-heading-content-indent");
/**
 * Disallow indention and any content (including whitespaces) before headings.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-heading-indent no-heading-indent}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/headings.html#no-content-before Style Guide: "Headings - No Content Before"}
 */
const noHeadingIndent = require("remark-lint-no-heading-indent");
/**
 * Disallow using level 7+ "headings".
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-heading-like-paragraph no-heading-like-paragraph}
 */
const noHeadingLikeParagraph = require("remark-lint-no-heading-like-paragraph");
/**
 * Warn when ending a heading content with a punctuation character.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-heading-punctuation no-heading-punctuation}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/headings.html#punctuation-after-content Style Guide: "Headings - Punctuation After Content"}
 */
const noHeadingPunctuation = require("remark-lint-no-heading-punctuation");
/**
 * Disallow multiple toplevel headings.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-multiple-toplevel-headings no-multiple-toplevel-headings}
 */
const noMultipleToplevelHeadings = require("remark-lint-no-multiple-toplevel-headings");

module.exports = {
  plugins: [
    [firstHeadingLevel, false],
    [headingIncrement, false],
    [headingStyle, ["error", "atx"]],
    [maximumHeadingLength, ["warn", 80]],
    [noDuplicateHeadings, ["warn"]],
    [noDuplicateHeadingsInSection, ["warn"]],
    [noHeadingContentIndent, ["error"]],
    [noHeadingIndent, ["error"]],
    [noHeadingLikeParagraph, ["error"]],
    [noHeadingPunctuation, ["warn"]],
    [noMultipleToplevelHeadings, false]
  ]
};
