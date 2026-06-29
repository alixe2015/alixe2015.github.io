+++
date = '2026-06-29T19:16:06+08:00'
draft = false
title = 'Hello World —— 用 Hugo 搭建个人博客'
tags = ['博客', 'Hugo', '教程']
categories = ['技术']
+++

## 为什么选择 Hugo + GitHub Pages？

[Hugo](https://gohugo.io/) 是世界上最快的静态网站生成器，配合 GitHub Pages 可以实现：

- **零成本**：完全免费，无限流量
- **极速加载**：纯静态 HTML，秒开
- **Markdown 写作**：用熟悉的 Markdown 格式写文章
- **自动部署**：推送代码到 GitHub 即自动发布

## 这篇博客的诞生

这篇博客就是基于 Hugo + [PaperMod](https://github.com/adityatelange/hugo-PaperMod) 主题搭建的，整个搭建过程不到 10 分钟。

### 技术栈

| 组件 | 用途 |
|------|------|
| Hugo | 静态网站生成器 |
| PaperMod | 博客主题 |
| GitHub Pages | 免费托管 |
| GitHub Actions | 自动部署 |
| Markdown | 内容写作 |

### 工作流程

```mermaid
graph LR
    A[本地写 Markdown] --> B[git push]
    B --> C[GitHub Actions]
    C --> D[自动构建部署]
    D --> E[博客更新]
```

## 后续计划

这里会分享我在 AI 工具使用、个人知识管理等方面的心得体会，希望能帮助到同样对这些领域感兴趣的朋友。

Stay tuned! 🚀
