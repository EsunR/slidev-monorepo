---
layout: section
---

# 前端工程化

---

# JavaScript 的模块化

## 概述

一种语言的强大与否、发展前景如何，离不开这种语言对模块复用的支持如何，如果一门预言连模块复用都做不到，那何谈工程化与社区生态。

但是不得不承认的一个事实是，JavaScript 在设计之初并不支持模块化。因此人们做了近 10 年的努力，才勉强补齐了 JavaScript 模块化的短板。

目前，主流的模块化方案如下：

- IIFE

```js
(function(){
  var jQuery = {
    // ... ...
  }
  window.jQuery = window.$ = jQuery
})()
```

---

- <span class="text-green-500">CommonJS：Nodejs 采用的模块化方案</span>

```js
const Axios = require("axios")
```

- AMD：浏览器环境下的模块化方案，基于 require.js 的实现
- CMD: 与 AMD 类似，基于 sea.js 的实现
- UMD：同时支持 Node 与浏览器环境的模块化方案，融合了 CommonJS 与 AMD
- <span class="text-green-500">ES Module：ES6 提出的标准化模块方案</span>

```js
import { cloneDeep } from "lodash-es"
```

<div class="mt-40"></div>

> 了解更多：[《令人头大的ES Module 与 CommonJS》](https://blog.esunr.xyz/2021/07/2553002dd4f2.html)

---

# CSS 预处理

## 概述

CSS 预编译处理，从字面上理解，就是预先编译处理CSS。它扩展了 CSS 语言，增加了变量、Mixin、函数等编程的特性，使 CSS 更易维护和扩展。CSS预编译的工作原理是提供便捷的语法和特性供开发者编写源代码，随后经过专门的编译工具将源码转化为CSS语法。

常用的预处理器：

- sass/scss
- less
- stylus

---

# CSS 预处理

## Sass 示例

<div class="grid grid-cols-2 gap-2">
<div>
```scss
$app-width: 1200px;
$theme-color: #c6538c;

@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.container {
  @include theme($theme-color);
  .button {
    &:hover {
      background: $theme-color
    }
  }
}
```
</div>
<div>
```css
.container {
  background: #c6538c;
  box-shadow: 0 0 1px rgba(198, 83, 140, 0.25);
  color: #fff;
}
.container .button:hover {
  background: #c6538c;
}
```
</div>
</div>

---

# 我们为什么需要打包工具/构建工具(Bundler)？

前面我们已经展示了 JS 的模块化以及 CSS 的预处理器。如果我们构建的 Web 应用需要正这两样技术，就需要解决如下两个问题：

- 如果我们采用 ES 模块的规范去编写 JavaScript，那么我们需要一个工具将其转化为 AMD 模块让不支持 ES Module 的浏览器可以运行我们的代码；
- 如果我们使用 sass 去写样式，那么我们需要后台需要时时刻刻使用 sass 的编译器将 scss 文件转为 css 文件，以供浏览器识别。

这样的问题还有很多，比如编译 `.vue` 文件、编译 `.jsx` 文件、为高级语法添加 polyfill，等等 ... ... 随着我们用的技术越来越多，那我们面临的问题自然也就会越来越多。

因此我们必须要有一个『工具』来帮我们把代码进行编译、拆分、压缩、合并等一系列工程化的任务，将这些代码『打包』为最纯朴的 .js、.css、.html 文件，让它在浏览器环境下运行起来。

---
layout: two-cols
---

# 打包工具

## WebPack

Webpack 致力于构建复杂的 SPA 应用，`create-react-app`、`vue-cli` 都是基于 Webpack 来搭建 React/Vue 项目的，它有以下几个特性：

- 通过 loader 加载文件并对其进行编译，通过 plugin 可以直接触及到 Webpack 的编译过程，这是 Webpack 最基础的工作方式；
- 内置了 devServer，用以实现代码的热更新以及跨域代理；
- Webpack 会对模块进行智能解析，磨平了 CommonJS 与 ES Module 的差异

::right::

<img class="mt-30 ml-10" width="400" src="https://s2.loli.net/2022/07/24/8BUfg4uTPXVbOZH.png" />

---
layout: two-cols
---

# 打包工具

## WebPack

Webpack 通过 loader 来加载文件并对其进行实时编译，同时采用一种『流』的方式来逐步处理代码，举例来说：

- `vue-loader` 可以读取 `.vue` 文件，剥离出其中的 template、js、css 部分
  - 被剥离出的 js 代码会流向 `babel-loader` 对其进行兼容性处理
  - 被剥离出的 css 代码会流向 `postcss-loader` 对 css 属性添加浏览器前缀
    - 处理后的 css 流向 `css-loader` 将其编译为 `.css` 文件

::right::

<style scoped>
pre {
  height: 460px;
  overflow-y: auto;
}
</style>

```js {7-23}
// webpack.config.js
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
```

---
layout: two-cols
---

# 打包工具
## Rollup

Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码，例如 library 或应用程序。与 Webpack 的区别：

- rollup 配置简单，配置比 Webpack 轻很多；
- ES Module 驱动，但最终可以将代码打包为各种各样的模块规范；
- 支持代码静态分析，天然支持 tree-shake；
- 没有 devServer、热更新等特性；
- 构件的代码没有像 Webpack 那样加入很多运行时依赖，构建出的代码更加易读、更加轻量；

因此，如果你需要做一个轻量的 lib 库或者组件库，rollup 是很不错的选择。

::right::

<img class="mt-30" src="https://s2.loli.net/2022/07/29/rioqJgy7OIVvuNd.png">

---

# 打包工具
## Gulp

Gulp 之前被定义为 `一个基于流的自动化构建工具`，但逐渐被功能更强大的 Webpack 所取代。因此 Gulp 现在的被重新定义为 `一个自动化和增强工作流的工具包`。

Gulp 的优秀之处在于它的『流』是高效可控的，你可以自由的创建并行或者串行任务。因此你可以将其理解为它是一个复杂的构建工程中，使用 Javascript 来进行任务调度作用的工具。

最好的一个应用示例就是在 Element-Plus 中，Gulp 被用来编译 css 文件以及调度 Rollup 任务。

## Parcel

Parcel 是 Web 应用打包工具，适用于经验不同的开发者。它利用多核处理提供了极快的速度，并且不需要任何配置。

如果你不想考虑那么多，Parcel 可以让你开箱即用，帮助你快速搭建一个使用了各种各样新技术的 Web 应用，你可以将其视作一个简化版的 Webpack。

---

# 其他工程化工具

- Babel: 将高级 Javascript 语法进行转换的编译器
- PostCSS：是一个用 JavaScript 工具和插件转换 CSS 代码的工具
- ESBuild: 基于 Go 编写的高效率 Javascript/Typescript 打包器
- ESLint: 采用静态分析方式对代码进行风格校验，及时发现代码中的错误
- StyleLint: 对样式文件进行代码风格校验

<div class="mt-50"></div>

> [了解更多 JavaScript 工程化生态](https://mubu.com/doc/uTsWM9Vgg0#m)
