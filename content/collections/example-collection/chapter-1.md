---
title: "第一章：入门基础"
description: "本章介绍课程的基础知识。"
excerpt: "这是第一章的简介，学习如何开始。"
weight: 1
# draft: false # 确保不是草稿状态
---

这里是第一章的**详细内容**。
这部分文字应该通过 `{{ .Content }}` 显示出来。
可以包含段落、列表、代码块等等。
Hello World from Chapter 1.

## 🔗 链接与图片

这是一个 [ChatGPT 的链接](https://chat.openai.com)

![测试图](https://via.placeholder.com/300x100.png?text=Test+Image)

---

## 🧮 表格测试

| 项目        | 值     | 单位   |
|-------------|--------|--------|
| 字数        | 1024   | 字     |
| 浏览量      | 3.5k   | 次     |
| 平均阅读时间 | 4.2    | 分钟   |

---

## 💻 代码测试

### 行内代码

请使用 `npm install` 安装依赖。

### 多语言代码块

#### JavaScript

```js
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

#### Python

```python
def greet(name):
    print(f"Hello, {name}!")
```

#### HTML

```html
<p><strong>Hello World</strong></p>
```

---

## 📐 数学公式（需要 mathjax 支持）

行内公式：$E = mc^2$  
块级公式：

$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$

---

## 📎 水平分割线与空行

---

（以上是一个水平分隔线）

下面是一个空行测试：

  
空行上方 ↑，空行下方 ↓

---

## ✅ 总结

此文件用于全面测试 Hugo 博客对 Markdown 的支持，包括样式、列表、代码、数学公式等展示效果。
