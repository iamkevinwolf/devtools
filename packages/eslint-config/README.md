<!-- START package-name -->
<h3 align="center">🔦 @kevinwolf/eslint-config</h3>
<!-- END package-name -->

<p align="center">
<!-- START description -->
Opinionated shareable ESLint configuration with automatic dependency detection.
<!-- END description -->
</p>

<p align="center">
<small><em>(part of <a href="https://github.com/iamkevinwolf/devtools">@kevinwolf/devtools</a>)</em></small>
</p>

<p align="center">
<!-- START npm-badges -->
<a href="https://npmjs.com/package/@kevinwolf/eslint-config"><img src="https://img.shields.io/npm/v/@kevinwolf/eslint-config.svg?label=npm&style=flat-square" alt="@kevinwolf/eslint-config"></a>
<a href="https://npmjs.com/package/@kevinwolf/eslint-config"><img src="https://img.shields.io/npm/dm/@kevinwolf/eslint-config.svg?label=downloads&style=flat-square" alt="@kevinwolf/eslint-config"></a>
<!-- END npm-badges -->
</p>

## 🤔 Problem

<!-- START the-problem -->

I share almost the same ESLint configuration between all my projects, with variations depending if the project uses typescript, jest, react, etc. Whenever a new configuration or plugin gets upgraded, I have to go through **all** the projects and upgrade the dependencies.

<!-- END the-problem -->

## 🤓 Solution

<!-- START the-solution -->

This opinionated ESLint configuration automatically detects what dependencies my project depends on and dynamically generates configs, plugins and rules configuration. So now my projects rather than depending on a lot of eslint-\* packages, only depends on this one.

<!-- END the-solution -->

## 📚 Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [⬇️ Installation](#-installation)
- [📝 Usage](#-usage)
  - [ESLint config file](#eslint-config-file)
  - [`package.json` script](#packagejson-script)
  - [Auto formatting](#auto-formatting)
  - [Overriding configuration](#overriding-configuration)
- [📦 What's included?](#-whats-included)
  - [Vanilla JS](#vanilla-js)
    - [parser](#parser)
    - [extends](#extends)
    - [plugins](#plugins)
    - [env](#env)
    - [`import/resolver` plugin settings](#importresolver-plugin-settings)
    - [Rules](#rules)
  - [Jest](#jest)
    - [env](#env-1)
  - [TypeScript](#typescript)
    - [parser](#parser-1)
    - [extends](#extends-1)
    - [plugins](#plugins-1)
    - [`import/resolver` plugin settings](#importresolver-plugin-settings-1)
    - [rules](#rules)
  - [React](#react)
    - [extends](#extends-2)
    - [plugins](#plugins-2)
    - [env](#env-2)
    - [`import/resolver` plugin settings](#importresolver-plugin-settings-2)
    - [rules](#rules-1)
  - [React with TypeScript](#react-with-typescript)
    - [`import/resolver` plugin settings](#importresolver-plugin-settings-3)
    - [rules](#rules-2)
  - [React Native](#react-native)
    - [plugins](#plugins-3)
    - [env](#env-3)
    - [`import/resolver` plugin settings](#importresolver-plugin-settings-4)
  - [React Native with TypeScript](#react-native-with-typescript)
    - [`import/resolver` plugin settings](#importresolver-plugin-settings-5)
- [📄 License](#-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## ⬇️ Installation

Add this package to the `devDependencies` section of your `package.json`. Since this package is part of a Yarn workspaces powered monorepo, I encourage you to install it via `yarn`.

```bash
yarn add -D @kevinwolf/eslint-config
```

<!-- END installation -->

## 📝 Usage

<!-- START usage -->

### ESLint config file

Create a new `.eslintrc.js` file on the root of your project and just extend my configuration.

```js
module.exports = {
  extends: "@kevinwolf"
};
```

### `package.json` script

Add a new script to your `package.json` in order to run `eslint`.

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx"
  }
}
```

**NOTE:** Since this package has an explicit dependency on `eslint` and the supporting packages, you won't need to install them separately.

### Auto formatting

You get auto formatting out-of-the-box if your code editor supports eslint formatting or you have prettier configured to format using ESLint rules.

### Overriding configuration

Thanks to the awesome config system of ESLint, you can override any rule, add extra plugins and whatever you want on the same `.eslintrc.js` file.

## 📦 What's included?

The generated rules vary depending on your project type, they can and will be combined depending on your dependencies.

### Vanilla JS

All projects will inherit this configurations, except on typescript projects, on which the parser will be different.

#### parser

- `babel-eslint`

#### extends

- `airbnb-base`
- `plugin:prettier/recommended`

#### plugins

- `prettier`

#### env

- `es6`
- `node`

#### `import/resolver` plugin settings

- Allows importing `.js` files
- Allows absolute imports from `src` folder

#### Rules

- `no-console`: generates warning when using `console`
- `no-use-before-define`: generates error when using a variable before its definition. It won't display an error when using a function before its definition
- `import/prefer-default-export`: off
- `prettier/prettier`: enforces parenthesis on all arrow function arguments, disables the use of semicolons, enforces single quote and enforces adding a trailing comma for multiline arrays and objects

### Jest

This rules will apply if you have `jest` installed as a devDependency.

#### env

- `jest`

### TypeScript

This rules will apply if you have `typescript` installed as a devDependency.

#### parser

- `@typescript-eslint/parser`

#### extends

- `plugin:@typescript-eslint/recommended`
- `prettier/@typescript-eslint`

#### plugins

- `@typescript-eslint`

#### `import/resolver` plugin settings

- Allows importing `.ts` files

#### rules

- `@typescript-eslint/explicit-function-return-type`: disabled
- `@typescript-eslint/no-unused-vars`: error when broken
- `@typescript-eslint/no-use-before-define`: disabled

### React

This rules will apply if you have `react` installed in any dependency group.

#### extends

- `airbnb`
- `prettier/react`

#### plugins

- `react`
- `react-hooks`

#### env

- `browser` (if `react-dom` is installed in any dependency group)

#### `import/resolver` plugin settings

- Allows importing `.jsx` files

#### rules

- `react/jsx-filename-extension`: only allows jsx on `.jsx` files
- `react/prop-types`: will throw error if not checking the prop types
- `react-hooks/exhaustive-deps`: error when broken
- `react-hooks/rules-of-hooks`: error when broken

### React with TypeScript

This rules will apply if you have `react` installed in any dependency group and `typescript` installed as a devDependency.

#### `import/resolver` plugin settings

- Allows importing `.tsx` files

#### rules

- `react/jsx-filename-extension`: only allows jsx on `.jsx` and `.tsx` files

### React Native

This rules will apply if you have `react-native` installed in any dependency group.

#### plugins

- `react-native`

#### env

- `react-native/react-native`

#### `import/resolver` plugin settings

- Allows importing `.native.js`, `.android.js`, `.ios.js`, `.native.jsx`, `.android.jsx` and `.ios.jsx` files

### React Native with TypeScript

This rules will apply if you have `react-native` installed in any dependency group and `typescript` installed as a devDependency.

#### `import/resolver` plugin settings

- Allows importing `.native.ts`, `.android.ts`, `.ios.ts`, `.native.tsx`, `.android.tsx` and `.ios.tsx` files

## 📄 License

[MIT](../../LICENSE)
