module.exports = {
  root: true,
  extends: ['@react-native-community', 'eslint:recommended'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    //    "import",
    //    "only-warn",
    //    "jsx-a11y",
    //    "react-hooks",
    //    "prettier",
    //    "redux-saga",
    'react',
    //    "@typescript-eslint"
  ],
  // parserOptions: {
  //   project: './tsconfig.json',
  // },
  env: {
    es6: true,
    browser: true,
    node: true,
  },

  rules: {
    'react-native/no-inline-styles': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/react-in-jsx-scope': 'off',
    'default-param-last': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'func-names': 0,
    'default-case': 0,
    'react-hooks/rules-of-hooks': 'error',
    'no-debugger': 'off',
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     endOfLine: 'auto',
    //   },
    // ],
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,

    // 'import/no-unresolved': [
    //   'error',
    //   {
    //     ignore: ['.'],
    //   },
    // ],

    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],

    // 'jsx-a11y/aria-props': 2,
    // 'jsx-a11y/heading-has-content': 0,
    // 'jsx-a11y/label-has-associated-control': [
    //   2,
    //   {
    //     // NOTE: If this error triggers, either disable it or add
    //     // your custom components, labels and attributes via these options
    //     // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
    //     controlComponents: ['Input'],
    //   },
    // ],
    // 'jsx-a11y/label-has-for': 0,
    // 'jsx-a11y/mouse-events-have-key-events': 2,
    // 'jsx-a11y/role-has-required-aria-props': 2,
    // 'jsx-a11y/role-supports-aria-props': 2,

    'max-len': 0,
    'no-import-assign': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-shadow': 0,
    'no-param-reassign': 0,
    'no-unused-vars': 'error',
    'no-use-before-define': 0,
    'prefer-template': 2,
    'react/destructuring-assignment': 0,
    'react/jsx-closing-tag-location': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-uses-vars': 2,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    // 'redux-saga/no-yield-in-race': 2,
    // 'redux-saga/yield-effects': 2,
    'require-yield': 0,
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     js: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never',
    //   },
    // ],
  },
};
