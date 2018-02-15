/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <code@svengreb.de>
 *
 * Project:    Arctic Ice Studio remark-lint Preset
 * Repository: https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio
 * License:    MIT
 */

/**
 * @file Official remark-lint core rules for horizontal rule document nodes.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @see {@link https://github.com/remarkjs/remark-lint/blob/master/doc/rules.md#list-of-rules remark-lint Core Rules}
 */

/**
 * Enforce the character style for horizontal rule markers.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-rule-style rule-style}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/horizontal-rules.html#marker-character-style Style Guide: "Horizontal Rules - Marker Character Style"}
 */
const ruleStyle = require("remark-lint-rule-style");

module.exports = {
  plugins: [
    [ruleStyle, ["error", "---"]]
  ]
};
