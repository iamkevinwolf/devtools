<p align="center">
<!-- START social-badges -->
<a href="https://github.com/kevinwolfcr/devtools/watchers"><img src="https://img.shields.io/github/watchers/kevinwolfcr/devtools.svg?style=social" alt="Watch on GitHub" /></a>
<a href="https://github.com/kevinwolfcr/devtools/stargazers"><img src="https://img.shields.io/github/stars/kevinwolfcr/devtools.svg?style=social" alt="Star on GitHub" /></a>
<a href="https://twitter.com/intent/tweet?text=Check out @kevinwolfcr devtools! https://github.com/kevinwolfcr/devtools"><img src="https://img.shields.io/twitter/url/https/github.com/kevinwolfcr/devtools.svg?style=social" alt="Tweet!" /></a>
<!-- END social-badges -->
</p>

<p align="center">
<!-- START banner -->
<img alt="Kevin Wolf Devtools" src="./other/banner.png" width="600" height="200" />
<!-- END banner -->
</p>

<p align="center">
<!-- START description -->
<strong>Opinionated</strong> set of common scripts, configurations and<br />
tools for my JavaScript and TypeScript projects.
<!-- END description -->
</p>

<p align="center">
<!-- START status-badges -->
<a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" /></a>
<a href="https://travis-ci.org/kevinwolfcr/devtools"><img src="https://img.shields.io/travis/kevinwolfcr/devtools.svg?style=flat-square" alt="Build Status" /></a>
<a href="https://greenkeeper.io"><img src="https://badges.greenkeeper.io/kevinwolfcr/devtools.svg?style=flat-square" alt="Greenkeeper" /></a>
<!-- <a href="https://codecov.io/github/kevinwolfcr/devtools"><img src="https://img.shields.io/codecov/c/github/kevinwolfcr/devtools.svg?style=flat-square" alt="Code Coverage" /></a> -->
<!-- END status-badges -->
</p>

<p align="center">
<!-- START packages-versions -->
<a href="./packages/kw-scripts#readme"><img src="https://img.shields.io/npm/v/@kevinwolf/kw-scripts.svg?label=%40kevinwolf%2Fkw-scripts&style=flat-square" alt="@kevinwolf/kw-scripts"></a>
<!-- END packages-versions -->
</p>

## 🤔 Problem

<!-- START the-problem -->

Whenever I start a new project, I usually repeat configuration files or common tasks like testing, building, linting, deploying and code generation. It **sucks** to repeat and maintain all those tasks on all the projects.

<!-- END the-problem -->

## 🤓 Solution

<!-- START the-solution -->

I have created this _monorepo_ powered by [Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) to share those common tasks and configuration files across my projects. The idea of creating a monorepo it's because if I ever want only an _eslint configuration_, _typescript configuration_, or _code generator_, I just have to install the required package rather than all the devtools, if this were a monolith.

<!-- END the-solution -->

## 📚 Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [📝 Usage](#-usage)
- [📦 Included packages](#-included-packages)
- [🍻 Contributors](#-contributors)
- [✅ Other solutions](#-other-solutions)
- [❤️ Inspiration and special thanks](#-inspiration-and-special-thanks)
- [📄 License](#-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 📝 Usage

<!-- START usage -->

Usage instructions are different depending on the [package](#-included-packages) you want to install. This is a _selfdogfooded_ monorepo, so every script, every generator and every configuration file, is loaded from here (cool, isn't it? 🤘🏻).

<!-- END usage -->

## 📦 Included packages

<!-- START included-packages -->

- [@kevinwolf/kw-scripts](./packages/kw-scripts#readme)

  <!-- END included-packages -->

## 🍻 Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://kevinwolf.me"><img src="https://avatars2.githubusercontent.com/u/3157426?v=4" width="100px;" alt="Kevin Wolf"/><br /><sub><b>Kevin Wolf</b></sub></a><br /><a href="https://github.com/kevinwolfcr/devtools/commits?author=kevinwolfcr" title="Code">💻</a> <a href="#content-kevinwolfcr" title="Content">🖋</a> <a href="#design-kevinwolfcr" title="Design">🎨</a> <a href="https://github.com/kevinwolfcr/devtools/commits?author=kevinwolfcr" title="Documentation">📖</a> <a href="#example-kevinwolfcr" title="Examples">💡</a> <a href="#infra-kevinwolfcr" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#tool-kevinwolfcr" title="Tools">🔧</a> <a href="#tutorial-kevinwolfcr" title="Tutorials">✅</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## ✅ Other solutions

If you have any similar solution, feel free to open a PR.

- [kcd-scripts](https://github.com/kentcdodds/kcd-scripts)

## ❤️ Inspiration and special thanks

This project is heavily inspired by [kcd-scripts](https://github.com/kentcdodds/kcd-scripts) and [react-scripts](https://github.com/facebook/create-react-app).

## 📄 License

[MIT](./LICENSE)
