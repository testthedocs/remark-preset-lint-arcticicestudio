/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ice Studio remark-lint Preset
 * Repository: https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio
 * License:    MIT
 */

/**
 * @file Support for rules of specification addons and additions.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 */

/**
 * Add support for YAML and TOML frontmatter.
 *
 * @since 0.3.0
 * @see http://yaml.org
 * @see https://github.com/toml-lang/toml
 */
const frontmatter = require("remark-frontmatter");

module.exports = {
  plugins: [
    [frontmatter, ["yaml", "toml"]]
  ]
};
