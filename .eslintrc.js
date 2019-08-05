module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "mocha": true
    },
    "extends": ["plugin:vue/essential", "standard"],
    "plugins": [
        "vue"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
    },
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        //'eslint-disable-next-line': 'off',
        'indent': ['error', 4],
        'no-console': 'off',
        'comma-dangle': ['error', {
            'arrays': 'ignore',
            'objects': 'ignore',
            'imports': 'never',
            'exports': 'never',
            'functions': 'ignore'
        }],
        'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 2 }],
        //'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never' }],
        'space-before-function-paren': 'off',
        'spaced-comment': 'off',
        'brace-style': ['error', 'stroustrup'],
        'padded-blocks': 'off',
        'no-constant-condition': 'off',
        'camelcase': 'off',
        'no-new': 'off',
        'prefer-const': 'off',
        'quote-props': ['error', 'consistent'],
    }
};