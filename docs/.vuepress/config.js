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
                    'build/build-with-file',
                    'build/env-setting',
                    'build/webpack5-config',
                    'build/webpack5-plus',
                    'whistle/tutorial',
                    'build/insert-content-html-plugin',
                    'build/vite-plugin-html-insert',
                ]
            },
            {
                title: 'js',
                children: [
                    'js/promise',
                    'ts/interface',
                    'js/clone',
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
                    'vue2/init-state-compute',
                    'vue2/init-state-data',
                    'vue2/init-state-props',
                    'vue2/instance/api'
                ]
            },
            {
                title: 'Vue reactive',
                collapseable: true,
                children: [
                    'vue2/reactive/reactive-intro',
                    'vue2/reactive/reactive-1-start',
                    'vue2/reactive/reactive-2-instance',
                    'vue2/reactive/reactive-3-state',
                    'vue2/reactive/reactive-4-dep',
                    'vue2/reactive/reactive-5-observer',
                    'vue2/reactive/reactive-6-watcher',
                ]
            },
            {
                title: 'Vuex',
                collapseable: true,
                children: [
                    'vuex/vuex-intro',
                    'vuex/vuex-install',
                    'vuex/vuex-commit',
                    'vuex/vuex-dispatch',
                    'vuex/vuex-subscribe',
                    'vuex/vuex-core',
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