<!-- START package-name -->
<h3 align="center">🛠 @kevinwolf/kw-scripts</h3>
<!-- END package-name -->

<p align="center">
<!-- START description -->
Command line interface for code generation, linting, testing and more.
<!-- END description -->
</p>

<p align="center">
<small><em>(part of <a href="../../">@kevinwolf/devtools</a>)</em></small>
</p>

<p align="center">
<!-- START npm-badges -->
<a href="https://npmjs.com/package/@kevinwolf/kw-scripts"><img src="https://img.shields.io/npm/v/@kevinwolf/kw-scripts.svg?label=npm&style=flat-square" alt="@kevinwolf/kw-scripts"></a>
<a href="https://npmjs.com/package/@kevinwolf/kw-scripts"><img src="https://img.shields.io/npm/dm/@kevinwolf/kw-scripts.svg?label=downloads&style=flat-square" alt="@kevinwolf/kw-scripts"></a>
<!-- END npm-badges -->
</p>

## 🤔 Problem

<!-- START the-problem -->

On my day to day, I usually repeat common tasks like linting, testing, deploying, building and code generation. With each one of those tasks having several dependencies, sometimes it gets hard to maintain them.

<!-- END the-problem -->

## 🤓 Solution

<!-- START the-solution -->

This CLI holds all the most common tasks I use across my projects, this package holds all the dependencies needed, so I only have to maintain the dependency of `@kevinwolf/kw-scripts` on my projects rather than a ton of `devDependencies`.

<!-- END the-solution -->

## 📚 Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [⬇️ Installation](#-installation)
- [📝 Usage](#-usage)
  - [Overriding configuration](#overriding-configuration)
- [💻 Available commands](#-available-commands)
- [📄 License](#-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## ⬇️ Installation

Add this package to the `devDependencies` section of your `package.json`. Since this package is part of a Yarn workspaces powered monorepo, I encourage you to install it via `yarn`.

```bash
yarn add -D @kevinwolf/kw-scripts
```

<!-- END installation -->

## 📝 Usage

<!-- START usage -->

You can either run each command with `yarn kw-scripts [options] [command]` or adding it to the `scripts` section of your `package.json`.

If you need information about each script, run `yarn kw-scripts --help`.

### Overriding configuration

This package is intended to work _out of the box_ with my favorite/opinionated set of defaults, but it is easy to extend it by creating a `kw-scripts.config.js` file on the root of your project.

<!-- END usage -->

## 💻 Available commands

🚧 Work in progress 🚧

<!-- START available-scripts -->
<!-- END available-scripts -->

## 📄 License

[MIT](../../LICENSE)
