export default {
    data() {
        return {}
    },
    computed: {},
    watch: {},
    methods: {},
    created() {
        const self = this
        // 寫入瀏覽器
        self.$store.dispatch('getDeviceBrowser')
        // 檢查登入狀態
        if (process.client) self.$store.dispatch('CHECKLOGIN')
    },
    mounted() {
        const self = this
        var resizeTimer
        self.$store.commit('detectScreenWidth', window.OB_STATIC.GetWindowWidth())
        self.setVH()
        self.setScale()
        window.addEventListener('resize', function () {
            clearTimeout(resizeTimer)
            self.setVH()
            self.setScale()
            // 監聽視窗width
            self.$store.commit('detectScreenWidth', window.OB_STATIC.GetWindowWidth())
            // 監聽視窗resize
            self.$store.commit('detectScreenResize')
            resizeTimer = setTimeout(() => {
                // 監聽視窗after resize
                self.$store.commit('detectAfterScreenResize')

                self.setScale()
            }, 300)
        })

        // 監聽滾輪
        let W_position_pagescroll = document.documentElement.scrollTop
        window.addEventListener('scroll', function () {
            let scroll = document.documentElement.scrollTop
            self.$store.commit('detectScreenScroll', scroll)

            if (scroll <= 0) {
                // scrollUp
                self.$store.commit('detectscreenScrollUp', scroll)
            } else {
                if (scroll > W_position_pagescroll) {
                    // scrollDown
                    self.$store.commit('detectscreenScrollDown', scroll)
                } else {
                    // scrollUp
                    self.$store.commit('detectscreenScrollUp', scroll)
                }
            }
            W_position_pagescroll = scroll
        })

        // 監聽是否正在瀏覽網頁
        window.onpagehide = window.onblur = () => {
            self.$store.commit('isPageFocus', false)
        }
        window.onpageshow = window.onfocus = () => {
            self.$store.commit('isPageFocus', true)
        }
        //引入adobe字體
        ;(function (d) {
            var config = {
                    kitId: 'wif2dmx',
                    scriptTimeout: 3000,
                    async: true,
                },
                h = d.documentElement,
                t = setTimeout(function () {
                    h.className = h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive'
                }, config.scriptTimeout),
                tk = d.createElement('script'),
                f = false,
                s = d.getElementsByTagName('script')[0],
                a
            h.className += ' wf-loading'
            tk.src = 'https://use.typekit.net/' + config.kitId + '.js'
            tk.async = true
            tk.onload = tk.onreadystatechange = function () {
                a = this.readyState
                if (f || (a && a != 'complete' && a != 'loaded')) return
                f = true
                clearTimeout(t)
                try {
                    Typekit.load(config)
                } catch (e) {}
            }
            s.parentNode.insertBefore(tk, s)
        })(document)
    },
}
