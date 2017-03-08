module.exports = {
    env: {
        commonjs: true,
    },
    extends: 'airbnb',
    parser: 'babel-eslint',
    rules: {
        'camelcase': 0,
        'global-strict': 0,
        'max-len': [2, 120, 4, {
            "ignorePattern": "^(import\\s.+)|(\\s*(var\\s.+=\\s*)?require\\s*\\(.+)$|(jest.(un)?mock\\()"
        }],
        'no-alert': 2,
        'no-console': 2,
        'no-eq-null': 0,
        'no-duplicate-imports': 0,
        'no-extend-native': 0,
        'no-multi-spaces': 0,
        'no-octal-escape': 0,
        'no-process-exit': 2,
        'no-script-url': 0,
        'no-shadow': 0,
        'no-underscore-dangle': 0,
        'no-unused-vars': [2, {'vars': 'all', 'args': 'none', 'ignoreRestSiblings': true}],
        'quotes': [2, 'single'],
        'pinterest/sort-imports': ['error', {
            'ignoreCase': true,
            'ignoreMemberSort': false,
            'memberSyntaxSortOrder': ['none', 'all', 'single', 'multiple']
        }],
        // TODO: these are disabled failing AirBnb rules. Fix and enable.
        // Make sure to delete them in .eslintrc.json files
        'generator-star-spacing': 0,
        'import/no-extraneous-dependencies': 0,
        'import/imports-first': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'func-names': 0,
        'no-case-declarations': 0,
        // autofixer breaks code
        'prefer-template': 0,
        'no-else-return': 0,
        'no-throw-literal': 0,
        'vars-on-top': 0,
        'class-methods-use-this': 0,
        'no-mixed-operators': 0,
        'no-param-reassign': 0,
        'global-require': 0,
        'no-extra-boolean-cast': 0,
        'no-restricted-syntax': 0,
        'one-var': 0,
        'no-unsafe-finally': 0,
        'no-useless-escape': 0,
        'guard-for-in': 0,
        'no-return-await': 0,
        'import/first': 0,
        'import/no-webpack-loader-syntax': 0,
        'react/no-array-index-key': 0,
        'react/require-default-props': 0,
        'react/no-find-dom-node': 0,
        'react/jsx-filename-extension': 0,
    }
};
