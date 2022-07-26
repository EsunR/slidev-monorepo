---
layout: section
---

# DevOps 与 ServerLess

---

# DevOps
## 软件交付的压力

在传统的软件交付流程中通常是这样的：

- 前端开发人员编写代码，将 `html`、`css`、`js` 这些静态资源交付给运维人员；
- 运维人员将静态资源部署到对应的服务器上；
- 后台开发人员编写代码，交付 `container` 或者源代码，运维人员部署后台服务；
- 设置一个用来转发静态资源和服务接口的网关；

<span class="text-red-500">每次应用发布时候，上面的流程都需要反复重复。</span>

更为令人头疼的是，在一个标准的软件开发流程中，不仅有线上环境，还有提供给开发人员的联调环境、提供给测试人员的测试环境、进行上线前检查的预发布(pre-online)环境。

并且随着敏捷开发模式的逐渐流行，软件上线周期逐渐被压缩，甚至每天都可能会有上线任务。

---
layout: two-cols
---

# DevOps
## 什么是 DevOps ?

为了解决软件交付的压力（主要是运维人员的压力），DevOps 概念出现了，它是一种方法论，目的是为了用于促进应用开发（Dev）、应用运维（Ops）和质量保障（QA）部门之间的沟通、协作与整合。以期打破传统开发和运营之间的壁垒和鸿沟。

实现这一方法论需要用到各种各样的工具，比如：

- 在交付代码前使用 lint 工具进行代码风格校验；
- 代码到 git 仓库之后，自动的让一台机器去拉取最新的代码进行对代码进行单元测试；
- 如果代码进入了 master 分支，就会有一台机器主动对代码进行编译，将编译好的静态资源推送到静态资源服务器上；

::right::

<img class="h-120 ml-20" src="https://s2.loli.net/2022/07/29/tcbFfWlhkKnQTro.png">

---

# DevOps
## DevOps 的实现 —— CI/CD

CI 被称作**持续集成(Continuous Integration)**，CD 被称作**持续交付(Continuous Delivery)**，亦或是**持续部署(Continuous Deployment)**，他是对 DevOps 这一方法论的具体实践，但并不是 DevOps 的全部。

如上一页中我们说的，**实现代码上传到 git 仓库后自动执行代码扫描、单元测试、测试构建**，这一过程就是**持续集成**的过程；

那么对通过一系列测试的代码，并达到了一定的条件后，自动进行交付（交付指的是上线、上传静态资源、或者是部署镜像等一系列有产出的行为）的过程，就叫做**持续交付**。

CI/CD 工具:

- Jenkins（免费开源，比较稳定，因此被很多公司使用）
- Github Action（与 Github 深度绑定，拥有很多的社区插件，因此被很多开源项目常用）
- Travis CI（Github Action 出现之前的替代品）

---

# DevOps
## 实践

参考文章：[《Hexo 快速搭建指南》](https://blog.esunr.xyz/2022/06/64163235c30f.html)

---

# ServerLess
## 什么是 ServerLess ？

Web 应用部署经历了如下几个技术历程：

- 物理机时代，Web 应用方需要搭建自己的实体服务器来运营 Web 应用；
- 虚拟机时代，一台物理机可以很泛化出多个虚拟机，这些虚拟机可以随意的安装操作系统与环境
- 容器化时代，一切应用和服务都被容器化，很容易的被部署到单个服务器或者集群上
- ServerLess，无服务的时代

ServerLess 是一个很泛化的概念，它是随着云原生技术不断发展而来的，并且是许多云原生技术的合集。它并不意味着没有服务器，而是去弱化服务器的概念，减少 Web 应用部署带来的业务干扰，而只专注于业务本身。

举例来说，ServerLess 就好像是一个水龙头，当你拧开水龙头的时候你会理所当然的觉得有水会出来，但是这背后是却是复杂的城市管道、自来水厂、净化设备、循环系统等一系列公共设施调度的结果。

---

# ServerLess
## FaaS: Function as a service

传统的服务器端软件不同是经应用程序部署到拥有操作系统的虚拟机或者容器中，一般需要长时间驻留在操作系统中运行，而 FaaS 是直接将程序部署上到平台上即可，当有事件到来时触发执行，执行完了就可以卸载掉。

举例来说：假如小明需要一个网页截图服务，对目标网站进行截图并输出图片

- 按照传统的服务部署方案，首先他要使用 NodeJS 搭建一个 Web 应用框架，编写一个接口，当访问该接口时调用 puppeteer（一个服务端运行的无头浏览器）来对对应页面进行截图并输出；完成了业务实现阶段之后，他还要去挑选一台轻量型云服务器，在服务器中装好 NodeJS 环境，并将他的网页截图服务部署到该服务器并启动。
- 假如说小明使用 FaaS，只需要在某个 FaaS 平台上编写好截图功能的实现（通常 FaaS 都会支持 NodeJS），然后设置一个 http 触发器，就可以一键部署，无需关心服务器与环境，用的时候直接调用该接口就可以了；同时 FaaS 服务的提供方只会按照函数的调用此数收费，这个成本比单独的一台云服务器要低的多。

---

# ServerLess
## 实践

云平台：

- [百度云 CFC 函数计算](https://cloud.baidu.com/product/cfc.html)
- [腾讯云 ServerLess 应用](https://cloud.tencent.com/product/sls)
- [腾讯云 SFC 云函数](https://cloud.tencent.com/product/scf)
- [Vercel](https://vercel.com/)

项目参考：

- [Blog-Index](https://github.com/EsunR/Blog-Index)
- [slidev-monorepo](https://github.com/EsunR/slidev-monorepo)