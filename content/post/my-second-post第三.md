---
title: 'Agentic Company Researcher'
authors:
    - ViiTetrix
date: '2025-05-03T20:37:25+08:00'
hero: /images/post/hero-3.jpg
excerpt: 给大家推荐使用 Agentic Company Researcher 这个开源项目，一键自动生成全面公司研究报告。
draft: false
---

![00](/images/00.jpg)

通常我们在面试前，会对即将面试的公司进行了解，在国内可使用天眼查，但想查看完整信息需要支付高额费用，而自己去查又费时费力。

给大家推荐使用 Agentic Company Researcher 这个开源项目，一键自动生成全面公司研究报告。

它集成多个 AI 智能体分别从公司网站、新闻、财报等多种来源收集信息，并结合 Gemini 和 ChatGPT 大模型进行内容筛选与合成，生成一份高质量报告。

GitHub：github.com/pogjester/company-research-agent

主要功能：

- 多源数据自动收集，整合公司网站、新闻和财报信息；
- 基于 Tavily 的 AI 内容筛选，确保信息相关性；
- 实时进度流式传输，随时查看研究进展；
- 双模型架构，Gemini 处理大量数据，GPT-4.1 负责精确排版；
- 现代化 React 前端界面，支持实时更新和下载；
- 模块化智能体架构，支持灵活扩展和定制。

可通过克隆代码到本地，并简单配置下 API Key，即可使用。