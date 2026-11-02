import { readFileSync, readdirSync } from 'node:fs'
import { defineConfig } from 'vitepress'

const readingItems = readdirSync('daily-leaves', { recursive: true })
  .filter((file) => /^\d{4}[\\/]\d{4}-\d{2}-\d{2}\.md$/.test(file))
  .sort()
  .reverse()
  .map((file) => {
    const path = `daily-leaves/${file.replaceAll('\\', '/')}`
    const title = readFileSync(path, 'utf8').match(/^#\s+(.+)$/m)[1]
    return { text: title, link: `/${path.slice(0, -3)}` }
  })

export default defineConfig({
  lang: 'zh-CN',
  title: 'LEAF',
  description: '学习、探索与发现。每日阅读、思考与实践的积累。',
  base: '/leaf/',
  markdown: { math: true },
  themeConfig: {
    siteTitle: 'LEAF · 日拾书页',
    nav: [
      { text: '首页', link: '/' },
      { text: '每日阅读', link: '/daily-leaves/README' },
      { text: '关于 LEAF', link: '/README' }
    ],
    sidebar: [
      {
        text: '日拾书页',
        items: [
          { text: '阅读说明', link: '/daily-leaves/README' },
          ...readingItems,
          { text: '记录模板', link: '/daily-leaves/TEMPLATE' }
        ]
      }
    ],
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '阅读目录',
    darkModeSwitchLabel: '外观',
    editLink: {
      pattern: 'https://github.com/lihenga/leaf/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/lihenga/leaf' }],
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize: (text) => Array.from(
              new Intl.Segmenter('zh-CN', { granularity: 'word' }).segment(text),
              (part) => part.segment
            ).filter((word) => /[\p{L}\p{N}]/u.test(word))
          }
        },
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索笔记', buttonAriaLabel: '搜索笔记' },
              modal: {
                noResultsText: '没有找到相关笔记',
                resetButtonTitle: '清除搜索',
                displayDetails: '显示详细内容',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
              }
            }
          }
        }
      }
    }
  }
})
