/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <code@svengreb.de>
 *
 * Project:    Arctic Ice Studio remark-lint Preset
 * Repository: https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio
 * License:    MIT
 */

/**
 * @file Official remark-lint core rules for list document nodes.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @see {@link https://github.com/remarkjs/remark-lint/blob/master/doc/rules.md#list-of-rules remark-lint Core Rules}
 */

/**
 * Enforce a valid character style for ticked list item checkboxes.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-checkbox-character-style checkbox-character-style}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/lists.html#checkbox-character-style Style Guide: "Lists - Checkbox Character Style"}
 */
const checkboxCharacterStyle = require("remark-lint-checkbox-character-style");
/**
 * Allow only one whitespace after list item checkboxes.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-checkbox-content-indent checkbox-content-indent}
 */
const checkboxContentIndent = require("remark-lint-checkbox-content-indent");
/**
 * Disallow that list item bullets are indented.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-list-item-bullet-indent list-item-bullet-indent}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/lists.html#no-content-before Style Guide: "Lists - No Content Before"}
 */
const listItemBulletIndent = require("remark-lint-list-item-bullet-indent");
/**
 * Enforce two (2) whitespaces for continuous content indentation of nested items.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-list-item-content-indent list-item-content-indent}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/lists.html#continuous-indentation Style Guide: "Lists - Continuous Indentation"}
 */
const listItemContentIndent = require("remark-lint-list-item-content-indent");
/**
 * Enforce two (2) whitespaces for continuous indentation of nested items.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-list-item-indent list-item-indent}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/lists.html#continuous-indentation Style Guide: "Lists - Continuous Indentation"}
 */
const listItemIndent = require("remark-lint-list-item-indent");
/**
 * Disallow blank lines between list items.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-list-item-spacing list-item-spacing}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/lists.html#empty-lines Style Guide: "Lists - Empty Lines"}
 */
const listItemSpacing = require("remark-lint-list-item-spacing");
/**
 * Enforce the dot (".") marker character style for ordered list items.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-ordered-list-marker-style ordered-list-marker-style}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/lists.html#ordered-marker Style Guide: "Lists - Ordered Marker"}
 */
const orderedListMarkerStyle = require("remark-lint-ordered-list-marker-style");
/**
 * Enforce continuous numerating for markers of ordered list items.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-ordered-list-marker-value ordered-list-marker-value}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/lists.html#ordered-marker Style Guide: "Lists - Ordered Marker"}
 */
const orderedListMarkerValue = require("remark-lint-ordered-list-marker-value");
/**
 * Enforce dash (`-`) marker character style for unordered list items.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-unordered-list-marker-style unordered-list-marker-style}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/lists.html#unordered-marker Style Guide: "Lists - Unordered Marker"}
 */
const unorderedListMarkerStyle = require("remark-lint-unordered-list-marker-style");

module.exports = {
  plugins: [
    [checkboxCharacterStyle, ["error", {
      checked: "x",
      unchecked: " "
    }]],
    [checkboxContentIndent, ["error"]],
    [listItemBulletIndent, ["error"]],
    [listItemContentIndent, ["error"]],
    [listItemIndent, ["error", "space"]],
    [listItemSpacing, false],
    [orderedListMarkerStyle, ["error", "."]],
    [orderedListMarkerValue, ["error", "ordered"]],
    [unorderedListMarkerStyle, ["error", "-"]]
  ]
};
