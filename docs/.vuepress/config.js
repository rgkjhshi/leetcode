module.exports = {
    base: '/leetcode/',
    title: '魔芋丝炒算法',
    description: '算法学习',
    // markdown 设置
    markdown: {
        // 行号
        lineNumbers: true,
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
        // 侧边栏
        sidebar: [
            {
                title: '分组一',
                //可选, 标题的跳转链接，应为绝对路径且必须存在
                path: '/question/',
                children: [
                    '/question/0001.两数之和',
                    '/question/0002.两数相加'
                ]
            },
            {
                title: '排序算法',
                path: '/排序算法/',
                children: [],
            }
        ],
        // 假定是 GitHub. 同时也可以是一个完整的 GitHab URL
        repo: 'rgkjhshi/leetcode',
    },
    plugins: ['@vuepress/back-to-top']
}
