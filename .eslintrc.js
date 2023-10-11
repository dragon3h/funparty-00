module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        'plugin:i18next/recommended'
    ],
    parser: '@typescript-eslint/parser',
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            },
            "rules": {
                "semi": ["error", "always"],
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        ecmaFeatures: {
            jsx: true,
          },
    },
    "plugins": [
        "react",
        '@typescript-eslint',
        'i18next',
    ],
    "rules": {
        "semi": ["error", "always"],
        '@typescript-eslint/semi': 'off',
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "react/jsx-props-no-spreading": "warn",
        'no-underscore-dangle': 'off',
        '@typescript-eslint/comma-dangle': ["error", {
            "arrays": "never",
            "objects": "always",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/strict-boolean-expressions": "warn",
        'no-unused-vars': 'warn',
        "@typescript-eslint/naming-convention": "warn",
        "i18next/no-literal-string": ['error', {markupOnly: true}]
    },
    globals: {
        __IS_DEV__: true,
    },
}
