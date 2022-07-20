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

# JavaScript 的发展历程

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
## Deno

