---
title: 'PocketFlow'
authors:
    - ViiTetrix
    - LetS
date: '2025-05-03T20:37:40+08:00'
hero: /images/post/hero-3.jpg
excerpt: 一个只有约100行代码的极简主义LLM框架PocketFlow。
draft: false
---

![00](/images/00.jpg)

github.com/The-Pocket/PocketFlow/
"过去一年里，我一直在使用 LangChain 等流行框架开发 AI 应用，但体验始终令人沮丧：

1.臃肿的抽象层,这些框架将简单的功能隐藏在不必要的复杂性背后。
2.实现噩梦 ：除了抽象层之外，这些框架还给开发者带来了依赖臃肿、版本冲突和不断变化的接口问题。

这让我不禁思考：我们真的需要这么多封装层吗？如果剥离所有冗余，什么才是真正最小可用的核心？

于是有了 Pocket Flow：核心抽象仅需 100 行代码
经过一年从零开始构建 LLM 应用后，我顿悟了：剥开所有复杂的外壳，LLM 系统本质上就是简单的有向图 。通过剔除不必要的层级，我创造了 Pocket Flow——一个零冗余、零依赖、零供应商锁定的框架，全部仅用 100 行代码实现。"