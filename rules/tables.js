/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <code@svengreb.de>
 *
 * Project:    Arctic Ice Studio remark-lint Preset
 * Repository: https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio
 * License:    MIT
 */

/**
 * @file Official remark-lint core rules for table document nodes.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @see {@link https://github.com/remarkjs/remark-lint/blob/master/doc/rules.md#list-of-rules remark-lint Core Rules}
 */

/**
 * Disallow tables to be indented.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-table-indentation no-table-indentation}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/tables.html#no-indentation Style Guide: "Tables - No Indentation"}
 */
const noTableIndentation = require("remark-lint-no-table-indentation");
/**
 * Enforces table cells to be padded correctly.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-table-cell-padding table-cell-padding}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/tables.html#header-delimiter-row-spacing Style Guide: "Tables - Header Delimiter Row Spacing"}
 */
const tableCellPadding = require("remark-lint-table-cell-padding");
/**
 * Enforces table cell header delimiter marker to be corretly aligned.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-table-pipe-alignment table-pipe-alignment}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/tables.html#header-delimiter-row-spacing Style Guide: "Tables - Header Delimiter Row Spacing"}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/tables.html#minimum-column-width Style Guide: "Tables - Minimum Column Width"}
 */
const tablePipeAlignment = require("remark-lint-table-pipe-alignment");
/**
 * Enforces table cell header delimiter marker to be corretly aligned.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-table-pipes table-pipes}
 * @see {@link https://arcticicestudio.github.io/styleguide-markdown/rules/tables.html#alignment Style Guide: "Tables - Alignment"}
 */
const tablePipes = require("remark-lint-table-pipes");

module.exports = {
  plugins: [
    [noTableIndentation, ["error"]],
    [tableCellPadding, ["error", "padded"]],
    [tablePipeAlignment, ["error"]],
    [tablePipes, ["error"]]
  ]
};
