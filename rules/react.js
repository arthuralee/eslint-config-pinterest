module.exports = {
    ecmaFeatures: {
        'jsx': true
    },
    plugins: [
        'react'
    ],
    rules: {
        // Turn off legacy rules in legacy.js.
        'pinterest/cssclassname-extends-from-parent': 0,
        'pinterest/no-accessing-private-members': 0,
        'pinterest/no-bind-within-jquery': 0,
        'pinterest/no-callbacks-where-promises': 0,
        'pinterest/no-commented-out-tests': 0,
        'pinterest/no-data-options-dot-notation': 0,
        'pinterest/no-direct-p-pubsub-subscribe-call-in-modules': 0,
        'pinterest/no-duplicate-jquery-selectors': 0,
        'pinterest/no-goog-provide': 0,
        'pinterest/no-goog-require': 0,
        'pinterest/no-invalid-binds': 0,
        'pinterest/no-jquery-outside-of-render': 0,
        'pinterest/no-jquery-var-without-$': 0,
        'pinterest/no-listen-childListen-bind': 0,
        'pinterest/no-module-member-variables': 0,
        'pinterest/no-mutable-module-options': 0,
        'pinterest/no-private-functions-without-annotation': 0,
        'pinterest/no-reassigning-keywords': 0,
        'pinterest/no-reassigning-of-pubsub-topic-in-module': 0,
        'pinterest/no-reassigning-requires': 0,
        'pinterest/no-referencing-$el': 0,
        'pinterest/no-referencing-p-properties': 0,
        'pinterest/no-this-without-bind': 0,
        'pinterest/no-translation-outside-of-function': 0,
        'pinterest/no-unassigned-requires': 0,
        'pinterest/no-unhandled-promise-errors': 0,
        // Enforce no enzyme.mount usage
        'pinterest/no-enzyme-mount': 2,
        // Enforce quote style for jsx attributes.
        // http://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': [2, 'prefer-single'],
        // Prevent missing displayName in a React component definition
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
        'react/display-name': [0, { 'ignoreTranspilerName': false }],
        // Forbid certain propTypes (any, array, object)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
        // 'react/forbid-prop-types': [2, { 'forbid': ['any', 'array', 'object'] }],
        // Enforce boolean attributes notation in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        'react/jsx-boolean-value': [2, 'never'],
        // Validate closing bracket location in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        'react/jsx-closing-bracket-location': [2, {selfClosing: 'line-aligned', nonEmpty: 'after-props'}],
        // Enforce or disallow spaces inside of curly braces in JSX attributes
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
        'react/jsx-curly-spacing': [2, 'never', { 'allowMultiline': true }],
        // Enforce or disallow spaces around equal signs in JSX attributes
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
        'react/jsx-equals-spacing': [2, 'never'],
        // Enforce event handler naming conventions in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
        'react/jsx-handler-names': [2, {
            'eventHandlerPrefix': 'handle',
            'eventHandlerPropPrefix': 'on',
        }],
        // Validate props indentation in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        'react/jsx-indent-props': [2, 4],
        // Validate JSX indentation
        //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        'react/jsx-indent': [2, 4],
        // Validate JSX has key prop when in array or iterator
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
        'react/jsx-key': 2,
        // Limit maximum of props on a single line in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
        'react/jsx-max-props-per-line': [0, { 'maximum': 1 }],
        // Prevent usage of .bind() and arrow functions in JSX props
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
        // 'react/jsx-no-bind': 2,
        // Prevent duplicate props in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
        'react/jsx-no-duplicate-props': [2, { 'ignoreCase': false }],
        // Prevent usage of unwrapped JSX strings
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
        'react/jsx-no-literals': 2,
        // Disallow undeclared variables in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
        'react/jsx-no-undef': 2,
        // Enforce PascalCase for user-defined JSX components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
        'react/jsx-pascal-case': 0,
        // Enforce propTypes declarations alphabetical sorting
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
        'react/sort-prop-types': [2, {
            'callbacksLast': false,
            'ignoreCase': true,
            'requiredFirst': false,
        }],
        // Enforce props alphabetical sorting
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
        'react/jsx-sort-props': [2, {
            'ignoreCase': true,
            'callbacksLast': false,
        }],
        // Validate spacing before closing bracket in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
        'react/jsx-space-before-closing': [2, 'always'],
        // Prevent React to be incorrectly marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
        'react/jsx-uses-react': [2, { 'pragma': 'React' }],
        // Prevent variables used in JSX to be incorrectly marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
        'react/jsx-uses-vars': 2,
        // Prevent usage of dangerous JSX properties
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
        'react/no-danger': 2,
        // Prevent usage of deprecated methods
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
        'react/no-deprecated': [2, { 'react': '0.14.0' }],
        // Prevent usage of setState in componentDidMount
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
        // 'react/no-did-mount-set-state': [2, 'allow-in-func'],
        // Prevent usage of setState in componentDidUpdate
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
        'react/no-did-update-set-state': [2, 'allow-in-func'],
        // Prevent direct mutation of this.state
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
        'react/no-direct-mutation-state': 2,
        // Prevent usage of isMounted
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
        'react/no-is-mounted': 2,
        // Prevent multiple component definition per file
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
        'react/no-multi-comp': [2, { 'ignoreStateless': true }],
        // Prevent usage of setState
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
        'react/no-set-state': 0,
        // Prevent using string references
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
        'react/no-string-refs': 2,
        // Prevent usage of unknown DOM property
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
        'react/no-unknown-property': 2,
        // Require ES6 class declarations over React.createClass
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
        'react/prefer-es6-class': [2, 'always'],
        // Prevent missing props validation in a React component definition
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        'react/prop-types': [2, { 'ignore': [], 'customValidators': [] }],
        // Prevent missing React when using JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
        'react/react-in-jsx-scope': 2,
        // Restrict file extensions that may be required
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-extension.md
        'react/require-extension': [2, { 'extensions': ['.js'] }],
        // Prevent extra closing tags for components without children
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
        'react/self-closing-comp': 2,
        // Enforce component methods order
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
        'react/sort-comp': [2, {
            'order': [
                'static-methods',
                'lifecycle',
                'handlers',
                'everything-else',
                'rendering',
            ],
            'groups': {
                'rendering': [
                    '/^render.+$/',
                    'render'
                ],
                'handlers': [
                    '/^handle.+$/',
                    '/^on.+$/',
                ]
            }
        }],
        // Prevent missing parentheses around multilines JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md
        'react/wrap-multilines': [2, {
            declaration: true,
            assignment: true,
            return: true
        }],
    }
};
