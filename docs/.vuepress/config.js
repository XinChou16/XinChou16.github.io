module.exports = {
    base: '/',
    title: 'Violet',
    evergreen: true,
    themeConfig: {
        search: false,
        lastUpdated: '上次更新于',
        nextLinks: true,
        prevLinks: true,
        smoothScroll: true,
        nav: [
            { text: 'Home', link: '/' },
        ],
        sidebar: [
            {
                title: 'Tools',
                collapseable: false,
                children: [
                    'utils/git',
                    'utils/github-actions',
                    'utils/husky'
                ]
            }
        ]
    }
}