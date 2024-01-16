
module.exports = {
    base: '/leetcode/',
    title: 'LeetCode',
    description: '算法学习',
    // markdown 设置
    markdown: {
        // 行号
        lineNumbers: true,
        // markdown-it-anchor 的选项
        anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' },
        // markdown-it-toc 的选项
        toc: { includeLevel: [2, 3] },
        // 外部链接
        // externalLinks: { target: '_target', rel: 'noopener noreferrer' },
    },
    // 主题设置
    themeConfig: {
        search: true,
        // 可以禁用导航栏
        // navbar: false,
        nav: [
            { text: '首页', link: '/' },
            { text: '算法', link: '/question/' },
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'English', link: '/language/english/' }
                ]
            }
        ],
        lastUpdated: '上次更新', // string | boolean
        // 自动生成侧边栏
        sidebar: 'auto',
        // 假定是 GitHub. 同时也可以是一个完整的 GitHab URL
        repo: 'rgkjhshi/leetcode',
    },
    plugins: ['@vuepress/back-to-top']
}
