export default {
    extends: [
        '@front-factory/stylelint-config'
    ],
    rules: {
        'at-rule-name-space-after': 'always',
        'at-rule-no-unknown': null,
        'at-rule-no-vendor-prefix': true,
        'at-rule-semicolon-space-before': 'never',
        'block-closing-brace-newline-after': [
            'always',
            {
                'ignoreAtRules': [
                    'if',
                    'else'
                ]
            }
        ],
        'declaration-property-unit-allowed-list': {
            'font-size': [
                'em',
                'rem',
                'px',
                '%'
            ]
        },
        'function-parentheses-newline-inside': 'never-multi-line',
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
        ]
    }
};
