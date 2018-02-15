/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <code@svengreb.de>
 *
 * Project:    Arctic Ice Studio remark-lint Preset
 * Repository: https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio
 * License:    MIT
 */

/**
 * @file Official remark-lint core rules for link document nodes.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @see {@link https://github.com/remarkjs/remark-lint/blob/master/doc/rules.md#list-of-rules remark-lint Core Rules}
 */

/**
 * Enforce lower case letters for reference link IDs.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-definition-case definition-case}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/links.html#letter-case Style Guide: "Links - Letter Case"}
 */
const definitionCase = require("remark-lint-definition-case");
/**
 * Enforce a single space after the colon of reference links.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-definition-spacing definition-spacing}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/links.html#spacing-after-colon Style Guide: "Links - Spacing After Colon"}
 */
const definitionSpacing = require("remark-lint-definition-spacing");
/**
 * Enforce reference links to be placed at the bottom of the document.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-final-definition final-definition}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/links.html#definition-placement Style Guide: "Links - Definition Placement"}
 */
const finalDefinition = require("remark-lint-final-definition");
/**
 * Disallow autolinks without a valid protocols.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-auto-link-without-protocol no-auto-link-without-protocol}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/links.html#autolink-protocol Style Guide: "Links - Autolink Protocol"}
 */
const noAutoLinkWithoutProtocol = require("remark-lint-no-auto-link-without-protocol");
/**
 * Disallow duplicate reference link IDs.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-duplicate-definitions no-duplicate-definitions}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/links.html#unique-ids Style Guide: "Links - Unique IDs"}
 */
const noDuplicateDefinitions = require("remark-lint-no-duplicate-definitions");
/**
 * Disallow empty link and image URLs.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-empty-url no-empty-url}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/links.html#no-empty-url Style Guide: "Links - No Empty URL"}
 */
const noEmptyUrl = require("remark-lint-no-empty-url");
/**
 * Disallow literal URLs and enforce to always use angle-brackets ("<>") for autolinks.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-literal-urls no-literal-urls}
 */
const noLiteralUrls = require("remark-lint-no-literal-urls");
/**
 * Disallow URLs that are also defined identifiers.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-reference-like-url no-reference-like-url}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/links.html#no-reference-like-url Style Guide: "Links - No Reference Like URL"}
 */
const noReferenceLikeUrl = require("remark-lint-no-reference-like-url");
/**
 * Warn when using shortcut reference images.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-shortcut-reference-image no-shortcut-reference-image}
 */
const noShortcutReferenceImage = require("remark-lint-no-shortcut-reference-image");
/**
 * Warn when using shortcut reference links.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-shortcut-reference-link no-shortcut-reference-link}
 */
const noShortcutReferenceLink = require("remark-lint-no-shortcut-reference-link");
/**
 * Disallow the usage of references that are not defined.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-undefined-references no-undefined-references}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/links.html#no-undefined Style Guide: "Links - No Undefined"}
 */
const noUndefinedReferences = require("remark-lint-no-undefined-references");
/**
 * Warn when unused definitions are found.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-unused-definitions no-unused-definitions}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/links.html#no-unused Style Guide: "Links - No Unused"}
 */
const noUnusedDefinitions = require("remark-lint-no-unused-definitions");

module.exports = {
  plugins: [
    [definitionCase, ["error"]],
    [definitionSpacing, ["error"]],
    [finalDefinition, ["error"]],
    [noAutoLinkWithoutProtocol, ["warn"]],
    [noDuplicateDefinitions, ["error"]],
    [noEmptyUrl, ["error"]],
    [noLiteralUrls, false],
    [noReferenceLikeUrl, ["error"]],
    [noShortcutReferenceImage, false],
    [noShortcutReferenceLink, false],
    [noUndefinedReferences, ["error"]],
    [noUnusedDefinitions, ["warn"]]
  ]
};
