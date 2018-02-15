/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <code@svengreb.de>
 *
 * Project:    Arctic Ice Studio remark-lint Preset
 * Repository: https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio
 * License:    MIT
 */

/**
 * @file Official remark-lint core rules for string document nodes.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @see {@link https://github.com/remarkjs/remark-lint/blob/master/doc/rules.md#list-of-rules remark-lint Core Rules}
 */

/**
 * Enforce double quotes for link titles.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-link-title-style link-title-style}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/strings.html#quotes Style Guide: "Strings - Quotes"}
 */
const linkTitleStyle = require("remark-lint-link-title-style");

module.exports = {
  plugins: [
    [linkTitleStyle, ["error", "\""]]
  ]
};
