# stylelint-config-unsass

[![Version](https://flat.badgen.net/npm/v/stylelint-config-unsass)](https://www.npmjs.com/package/stylelint-config-unsass)
[![Download](https://flat.badgen.net/npm/dt/stylelint-config-unsass)](https://www.npmjs.com/package/stylelint-config-unsass)
[![License](https://flat.badgen.net/npm/license/stylelint-config-unsass)](https://www.npmjs.com/package/stylelint-config-unsass)

StyleLint shareable config for the Sass style guide.

## Install

```shell
npm install stylelint stylelint-config-unsass --save-dev
```

## Usage

Create ``.stylelintrc`` file on root of your project.

```json
{
    "extends": [
        "stylelint-config-unsass"
    ]
}
```

You can extend the rules with your own config,
see [StyleLint documentation](https://stylelint.io/user-guide/configuration).
