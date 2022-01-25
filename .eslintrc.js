module.exports = {
    root: true,
    extends: 'standard',
    env: {
        es6: true,
        'jest': true
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 8,
    },
    globals: {
        jasmine: 'readonly'
    },
    rules: {
        indent: ['error', 4],
        'no-trailing-spaces': ['error', {
            'skipBlankLines': false,
            'ignoreComments': false
        }],
        'no-prototype-builtins': 0,
        'arrow-parens': [2, 'as-needed']
    }
}
