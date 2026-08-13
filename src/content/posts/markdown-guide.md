---
title: Markdown 写作指南
description: 一篇演示本站 Markdown 渲染效果的示例文章，涵盖标题、代码、表格、引用等。
date: 2026-08-13
tags: [教程, Markdown]
---

# Markdown 写作指南

这篇文章演示本站在 Markdown 下的渲染效果，也是你写作时的参考。

## 标题层级

使用 `#` 到 `####` 表示不同层级，正文用 `##` 作为小节最舒服。

### 三级标题

#### 四级标题

## 文本样式

**加粗**、*斜体*、~~删除线~~、`行内代码`，以及[链接](https://astro.build)。

## 列表

- 无序列表项一
- 无序列表项二
  - 嵌套项

1. 有序列表项一
2. 有序列表项二

## 引用

> 引用用来强调一句话，或者引用他人的观点。
>
> 可以多行。

## 代码块

```js
// JavaScript 示例
function hello(name) {
  return `你好，${name}`;
}
console.log(hello('青创科云'));
```

```python
# Python 示例
def hello(name: str) -> str:
    return f"你好，{name}"
```

## 表格

| 功能 | 是否支持 | 说明 |
| ---- | :------: | ---- |
| 标题 | ✅ | 多级标题 |
| 代码 | ✅ | 语法高亮 |
| 表格 | ✅ | 支持对齐 |
| 图片 | ✅ | 本地或外链 |

## 图片

支持插入图片，例如：

![青创科云](https://placehold.co/600x300/0b0b0e/37ff8b?text=QINGCHUANG+KEYUN)

## 分割线

---

以上就是全部常用语法。现在，去写你的第一篇吧。
