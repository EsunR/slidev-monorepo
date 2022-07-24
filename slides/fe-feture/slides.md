---
theme: apple-basic
layout: intro-image
image: https://images.unsplash.com/photo-1547499681-28dece7dba00?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHw5NDczNDU2Nnx8fHx8fHwxNjU4MjQyNzUz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920
---

<div class="absolute top-10">
  <span class="font-700">
    SANG.姬广锐
  </span>
</div>

<div class="absolute bottom-10">
  <h1>论前端技术的发展现状与未来</h1>
  <p>FE technology status & future</p>
</div>


---
layout: intro-image-right
image: https://avatars.githubusercontent.com/u/30311024?v=4
---

# 个人介绍

- 姬广锐
- Base: 百度·北京
- Job Title: FE

<br/>

# Follow me

- <mdi-blog /> <a href="https://www.esunr.xyz">EsunR Index</a>
- <mdi-github /> <a href="https://github.com/EsunR">Github</a>

---
layout: quote
---

# Part 1. 进击的 JavaScript
# Part 2. 前端工程化
# Part 3. DevOps 与 SeverLess

---
layout: section
---

# 进击的 JavaScript

---

# JavaScript 的规范化

- **1995 Netscape 公司 Brendan Eich 在十天时间内设计出的**
  - 确定了语法结构，借鉴 C 语言和 Java
  - 将值分为原始值和对象两大类，确定了原型继承模式
  - 确立了函数式的编程方式、闭包特性
  - 支持正则、字符串和数组的处理

- **Netscape 将 JavaScript 提交给国际标准化组织 ECMA，以抵抗微软**
  - 1997 年发布 ECMAScript 1.0
  - ...
  - 2009 年发布 ES 5.0，过于激进以及目前不可实行的草案被定义为 JavaScript.next；2011 年发布 ES 5.1，主流浏览器都对其进行了适配
  - 2015 年发布 ES 6.0，重新规范版本号命名为 ES 2015，带来了大量的新特性，特别是对异步编程、函数类、模块化提供了标准的规范

---

# ECMA 与 W3C

ECMAScript 只用来标准化 JavaScript 这种语言的基本语法结构，与部署环境相关的标准都由其他标准规定，比如 DOM 的标准就是由 W3C组织（World Wide Web Consortium）制定的。

> DOM API: `document.getElementById("oh-my-gosh")`

---
layout: quote
---

# “Any application that can be written in JavaScript, will eventually be written in JavaScript.”

— Jeff Atwood, Author, Entrepreneur, Cofounder of StackOverflow. [Ref](https://blog.codinghorror.com/the-principle-of-least-power/)

---

# 服务端领域的发展
## NodeJS

2008年，V8 编译器诞生。这是 Google 公司为 Chrome 浏览器而开发的，它的特点是让 JavaScript 的运行变得非常快，它提高了 JavaScript 的性能，为 JavaScript 跨端奠定了基础。

2009年，Node.js 项目诞生，它标志着 JavaScript 可以用于服务器端编程。NodeJS 将 V8 作为执行 JavaScript 的基础环境，自身实现了文件 IO、网络请求等接口。

<p class="text-green-500">Fit for:</p>

- 构建网站: Express、Koa、Egg.js
- 工具：less、puppeteer
- 其他：SSR、Socket、客户端编译 Javascript、Mock 服务

<p class="text-red-500">Unfit:</p>

- CPU 密集型任务，如机器学习
- 大内存应用，很容易内存溢出

---

# 服务端领域的发展

## [Deno](https://deno.land/)

Deno 是一个类似于 Node.js 的 JavaScript 和 TypeScript 运行时，基于 Rust 和 V8 JavaScript 引擎构建。它是由 Node.js 的最初发明者 Ryan Dahl 创建的，以应对他在 2009 年最初设计和发布 Node.js 时所犯的错误。

- 一流的 Typescript 支持
- 更加安全，比如可以拒绝脚本内的网络请求
- 兼容浏览器的 API，比如 fetch api
- 采用更加以浏览器为中心的方式来使用第三方包：URL
- 内置了单元测试

## [Bun](https://bun.sh/)

- 启动速度快，性能好
- ... ...

---

# 桌面端领域的发展

## Electron

Electron 基于 Chromium 和 Node.js, 让你可以使用 HTML, CSS 和 JavaScript 构建应用。

<img width="500" src="https://s2.loli.net/2022/07/24/PEJXQkAZ4FsVrYn.png" />

这些 APP 都是由 Electron 开发的

- VSCode
- Facebook Twitch
- Twitch
- 钉钉

---

# 移动端领域的发展

历史的进程正如阿特伍德定律所预言的那样，在移动端时代到来之后，面对 Android 和 iOS 两大平台开发所带来的压力，人们又开始考虑一种可能性，那就是 **是否可以用 Javascript 来编写一个通用的移动端 APP？**

好在移动端时代带来的不仅有智能手机的普及，还带来了 HTML5，于是就开始有一大批应用开始使用在原生 APP 中嵌套 Webview 的方式来编写应用。

但是这种行为终究不是正道，所带来的性能问题、用户体验问题、权限问题等始终无法解决。于是随着技术的发展，另外的一批人再考虑真真正正的用 JavaScript 去开发原生应用。

---

# 移动端领域的发展

## React Native

React Native 使用了 Virtual DOM(虚拟 DOM)，只需编写一套代码，便可以将代码打包成不同平台的 App，极大提高了开发效率，并且相对全部原生开发的应用来说，维护成本也相对更低。

<img width="400" src="https://s2.loli.net/2022/07/24/fjl7p6Z4wRLGqyF.png"/>

---

<style scoped>
pre {
  height: 460px;
  overflow-y: auto;
}
</style>

<div class="flex">
<div class="flex-1 mr-5">
```jsx {all|13-18}
import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = "This is not really a bird nest.";

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default TextInANest;
```
</div>

<div class="flex-1">
```js
React.createElement(
  Text,
  {
    style: styles.baseText,
  },
  React.createElement(
    Text,
    {
      style: styles.titleText,
      onPress: onPressTitle,
    },
    titleText
  ),
  React.createElement(
    Text,
    {
      numberOfLines: 5,
    },
    bodyText
  )
);
```
</div>
</div>

---

# 面向未来的编程方式
## TypeScript

为什么要用 Typescript？

- TypeScript 是添加了类型系统的 JavaScript，适用于任何规模的项目，增加了代码的可读性和可维护性
  ```js
  let a = 100
  a = '100' // ✅
  let count = a + 1 // '1001'
  ```
  ```js
  let a:number = 100
  a = '100' // ❌ 变量 a 必须是 number 类型
  let count = a + 1 // 拒绝执行
  ```
- TypeScript 是一门静态类型、弱类型的语言，它是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性
- TypeScript 增强了编辑器（IDE）的功能，提供了代码补全、接口提示、跳转到定义、代码重构等能力
- TypeScript 与标准同步发展，符合最新的 ECMAScript 标准（stage 3）
- TypeScript 可以和 JavaScript 共存，这意味着 JavaScript 项目能够渐进式的迁移到 TypeScript



---
layout: section
---

# 前端工程化

---

# JavaScript 的模块化

一种语言的强大与否、发展前景如何，离不开这种语言对模块复用的支持如何，如果一门预言连模块复用都做不到，那何谈工程化与社区生态。

但是不得不承认的一个事实是，JavaScript 在设计之初并不支持模块化。因此人们做了近 10 年的准备，才勉强补齐了 JavaScript 模块化的短板。

目前，主流的模块化方案如下：

- CommonJS：Nodejs 采用的模块化方案
- AMD：浏览器环境下的模块化方案
- UMD：同时支持 Node 与浏览器环境的模块化方案
- ES Module：ES6 提出的标准化模块方案

---

# CSS 预处理

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
layout: two-cols
---

# 工程化工具
## WebPack


::right::

<img class="mt-30" width="400" src="https://s2.loli.net/2022/07/24/8BUfg4uTPXVbOZH.png" />

---

# 工程化工具
## Gulp

---

# 工程化工具
## Rollup

---