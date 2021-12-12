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
            },
            {
                title: 'build',
                children: [
                    'build/rollup-plugin',
                    'build/build-with-file'
                ]
            },
            {
                title: 'js',
                children: [
                    'js/promise',
                    'ts/interface'
                ]
            },
            {
                title: 'Vue',
                collapseable: true,
                children: [
                    'vue/observer-array',
                    'vue/inject',
                    'vue/assets',
                    'vue/use',
                    'vue/mixin',
                    'vue/dep',
                ]
            },
            {
                title: 'Vuex',
                collapseable: true,
                children: [
                    'vuex/vuex-install',
                    'vuex/vuex-commit',
                    'vuex/vuex-dispatch',
                    'vuex/vuex-subscribe',
                ]
            },
            {
                title: 'Vue-router',
                collapseable: true,
                children: [
                    'vue-router/push-state'
                ]
            },
            {
                title: 'Mac',
                collapseable: true,
                children: [
                    'macos/ssh-key',
                    'macos/shortcuts'
                ]
            },
        ]
    }
}