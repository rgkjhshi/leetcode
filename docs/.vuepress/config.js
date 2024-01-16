
module.exports = {
    base: '/',
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
        // 导航栏
        navbar: true,
        lastUpdated: 'Last Updated', // string | boolean
        // 自动生成侧边栏
        sidebar: 'auto',
    },
    plugins: ['@vuepress/back-to-top']
}
