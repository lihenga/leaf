# LEAF

**Learning, Exploration And Findings · 学习、探索与发现**

> 日有所读，心有所获。把零散的书页，积成自己的森林。

这里存放我的阅读、思考与实践记录。从每天读到的一点启发开始，慢慢积累值得留下的东西。

LEAF 是叶子，也是书页。希望每一次记录，都能成为下一次理解的起点。

**[打开文档网站 →](https://lihenga.github.io/leaf/)**

## 从这里开始

| 栏目 | 内容 |
| --- | --- |
| [日拾书页 · Daily Leaves](daily-leaves/README.md) | 可独立阅读的文章导读与分析，包含背景、机制、例子与限制 |

后续有新的记录类型时，再新增同级目录。

## 仓库结构

```text
leaf/
├── README.md
└── daily-leaves/
    ├── README.md       # 阅读区说明
    ├── TEMPLATE.md     # 每日记录模板
    └── 2026/           # 按阅读年份归档
```

## 写下一页

1. 复制 [每日阅读模板](daily-leaves/TEMPLATE.md)，放入 `daily-leaves/年份/` 目录；目录不存在时再创建。
2. 用日期命名，例如 `daily-leaves/2026/2026-11-02.md`。
3. 保留来源，讲清背景、机制与证据边界；模板中用不到的部分直接删掉。AI 分析与个人读后感分开表述。

同一天读到多篇内容，可以记在同一份文件中。写好后通过 Git 提交并推送到自己的远程仓库。

## 文档网站

网站使用 VitePress，将仓库里的 Markdown 直接生成阅读页面，提供全文搜索、章节目录、数学公式与深浅色切换。每次推送到 `main`，GitHub Actions 会自动构建并发布到 GitHub Pages。

新增 `daily-leaves/年份/YYYY-MM-DD.md` 后，网站侧栏会自动按日期倒序收录，标题取文件中的一级标题。阅读区 README 中的索引作为内容导航，由整理时同步维护。

本地预览需要 Node.js 22 或更新版本，在仓库根目录执行：

```sh
npm ci
npm run docs:dev
```

发布前可以运行 `npm run docs:build` 检查构建，运行 `npm run docs:preview` 预览生成结果。

## 关于分享

这些笔记记录的是我在阅读当下的理解，也会随着新的学习继续修订。

引用时保留作者与来源链接，摘录保持简短，主要用自己的话总结。转载、图片和长篇原文仍以原作者的授权为准。
