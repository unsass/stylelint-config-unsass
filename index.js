export default {
    plugins: [
        '@stylistic/stylelint-plugin'
    ],
    extends: [
        '@front-factory/stylelint-config'
    ],
    rules: {
        'at-rule-no-unknown': null,
        'at-rule-no-vendor-prefix': true,
        'declaration-property-unit-allowed-list': {
            'font-size': [
                'em',
                'rem',
                'px',
                '%'
            ]
        },
        'function-url-quotes': [
            'always',
            {
                'except': [
                    'empty'
                ]
            }
        ],
        'max-nesting-depth': [
            3,
            {
                'ignoreAtRules': [
                    'media',
                    'include'
                ]
            }
        ],
        '@stylistic/at-rule-name-space-after': 'always',
        '@stylistic/at-rule-semicolon-space-before': 'never',
        '@stylistic/block-closing-brace-newline-after': [
            'always',
            {
                'ignoreAtRules': [
                    'if',
                    'else'
                ]
            }
        ],
        '@stylistic/function-parentheses-newline-inside': 'never-multi-line'
    }
};
