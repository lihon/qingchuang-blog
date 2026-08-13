# 青创科云 · QINGCHUANG KEYUN

一个朋克简约风的个人博客，作者 **ZM.熵增**。基于 [Astro](https://astro.build) 构建，部署在 GitHub Pages。

## 特性

- 🖤 朋克简约风：深色底 + 荧光霓虹 + 等宽字体 + 故障效果
- ✍️ 支持 Markdown 写作，`src/content/posts/` 里放 `.md` 即可发布
- 🧪 内置在线编辑器（`/write/`）：实时预览、一键导出 `.md`
- ⚡ 纯静态输出，GitHub Actions 自动部署

## 本地开发

```bash
npm install
npm run dev        # 本地预览 http://localhost:4321
npm run build      # 构建到 dist/
```

## 写文章

方式一：在线编辑器
打开站内 `/write/`，写完点「下载 .md」。

方式二：直接写文件
在 `src/content/posts/` 新建 `xxx.md`，格式如下：

```markdown
---
title: 文章标题
description: 一句话简介（可选）
date: 2026-08-13
tags: [技术, 随笔]
---

正文内容（Markdown）……
```

推到 `main` 分支，GitHub Actions 会自动构建并部署。

## 生成 logo 资源

```bash
npm run gen-logo   # 用项目根目录外的 logo.png 生成各尺寸资源
```

## 部署配置

`astro.config.mjs` 里的 `GITHUB_USER` 与 `REPO_NAME` 决定了站点地址
（`https://<GITHUB_USER>.github.io/<REPO_NAME>/`）。
