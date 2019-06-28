const utils = require('./utils')

const ifTs = (...arg) => utils.ifDevDep('typescript', ...arg)
const ifJest = (...arg) => utils.ifDevDep('jest', ...arg)
const ifReact = (...arg) => utils.ifAnyDep('react', ...arg)
const ifReactTs = (...arg) => ifReact(ifTs(...arg))
const ifReactNative = (...arg) => utils.ifAnyDep('react-native', ...arg)
const ifReactNativeTs = (...arg) => ifReactNative(ifTs(...arg))

const config = {
  parser: ifTs('@typescript-eslint/parser', 'babel-eslint'),

  extends: [
    ifTs('plugin:@typescript-eslint/recommended'),
    ifReact('airbnb', 'airbnb-base'),
    'plugin:prettier/recommended',
    ifTs('prettier/@typescript-eslint'),
    ifReact('prettier/react'),
  ].filter(Boolean),

  plugins: [
    ifTs('@typescript-eslint'),
    ifReact('react'),
    ifReact('react-hooks'),
    ifReactNative('react-native'),
    'prettier',
  ].filter(Boolean),

  env: [
    'es6',
    'node',
    ifJest('jest'),
    ifReactNative('react-native/react-native'),
  ]
    .filter(Boolean)
    .reduce((p, c) => ({ ...p, [c]: true }), {}),

  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          ifTs('.ts'),
          ifReact('.jsx'),
          ifReactTs('.tsx'),
          ifReactNative('.native.js'),
          ifReactNative('.android.js'),
          ifReactNative('.ios.js'),
          ifReactNative('.native.jsx'),
          ifReactNative('.android.jsx'),
          ifReactNative('.ios.jsx'),
          ifReactNativeTs('.native.ts'),
          ifReactNativeTs('.android.ts'),
          ifReactNativeTs('.ios.ts'),
          ifReactNativeTs('.native.tsx'),
          ifReactNativeTs('.android.tsx'),
          ifReactNativeTs('.ios.tsx'),
        ].filter(Boolean),
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },

  rules: [
    ['no-console', 'warn'],
    ['no-use-before-define', ['error', { functions: false }]],
    ['import/prefer-default-export', 'off'],
    ifTs(['@typescript-eslint/explicit-function-return-type', 'off']),
    ifTs(['@typescript-eslint/no-unused-vars', 'error']),
    ifTs(['@typescript-eslint/no-use-before-define', 'off']),
    ifReact([
      'react/jsx-filename-extension',
      ['error', { extensions: ['.jsx', ifReactTs('.tsx')].filter(Boolean) }],
    ]),
    ifReact(['react/prop-types', ifReactTs('off', 'error')]),
    ifReact(['react-hooks/exhaustive-deps', 'error']),
    ifReact(['react-hooks/rules-of-hooks', 'error']),
    [
      'prettier/prettier',
      [
        'error',
        {
          arrowParens: 'always',
          semi: false,
          singleQuote: true,
          trailingComma: 'es5',
        },
      ],
    ],
  ]
    .filter(Boolean)
    .reduce((p, [r, c]) => ({ ...p, [r]: c }), {}),
}

module.exports = config
