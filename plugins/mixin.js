import Vue from 'vue'
import { MSG_UNLOGING, MSG_EVENT_EXPRIED } from '@/constants/common'
// import obStatic from '~/plugins/obStatic'
if (!Vue.__global_mixin) {
    Vue.__global_mixin = true
    Vue.mixin({
        data() {
            return {
                body_finished_class: 'finished',
                body_loadingfinished_class: 'loading-finished',
                body_loadingfinished_header_class: 'loading-finished_header',
                routerBeforeChange_class: 'routerBeforeChange',
                headerTitle: this.title,
                msgText: '',
                msgType: '',
                showMsg: false,
                showMsgTrigger: false,
                showMsgPopupClass: false,
                popupSettimeout: null,
                baseUrl: process.env.baseUrl,
                mbMediaWidth: 768,
            }
        },
        computed: {
            title() {
                const self = this
                const hrefString = self.$route.query.store
                return hrefString != 'MarkUp' && hrefString ? 'OB嚴選｜【18歲門市限定】試手氣！登入點蠟燭抽過夜包' : 'OB嚴選｜18歲生日慶點蠟燭抽熊幣'
            },
            pageLoading() {
                return this.$store.state.pageLoading
            },
            isLoadingDone() {
                return this.$store.state.isLoadingDone
            },
            isloadingAnimationDone() {
                return this.$store.state.loadingAnimationDone
            },
            isPageLoadFinishedAfter() {
                return this.$store.state.isLoadingDone && this.$store.state.PagesLoadFinished
            },
            // 偵測螢幕滾輪事件
            screenScrollState() {
                return this.$store.state.screenScroll
            },
            // 偵測螢幕滾輪向下事件
            screenScrollDown() {
                const self = this
                return this.$store.state.screenScroll_Down
            },
            // 偵測螢幕滾輪向上事件
            screenScrollUp() {
                const self = this
                return this.$store.state.screenScroll_Up
            },
            // 偵測螢幕寬
            screenWidthState() {
                return this.$store.state.screenWidth
            },
            // 偵測螢幕寬
            ScreenResizeState() {
                return this.$store.state.ScreenResize
            },
            // 偵測螢幕寬
            afterScreenResizeState() {
                return this.$store.state.afterScreenResize
            },
            // 偵測是否正在瀏覽網頁
            isPageFocus() {
                return this.$store.state.isPageFocus
            },
            isMobile() {
                let result = !this.screenWidthState ? true : this.screenWidthState && this.screenWidthState <= this.mbMediaWidth
                if (process.client && this.screenWidthState > this.mbMediaWidth) {
                    result = window.OB_STATIC.isMobile()
                }
                return result
            },
            isSupportPace() {
                const self = this
                const deviceType = self.$ua.deviceType()
                const browserVendor = self.$ua.browserVendor()
                const isFromIos = self.$ua.isFromIos()
                const notSupportBrowser = ['Internet Explorer', 'Firefox', 'Safari']
                const notSupportExtraDevice = deviceType === 'smartphone' && browserVendor === 'Google'

                if (notSupportBrowser.includes(self.$store.state.deviceBrowser) || notSupportExtraDevice) {
                    return false
                }
                return true
            },
            isLogin() {
                return this.$store.state.userData.IsLogin
            },
            //活動是否過期
            eventIsExpired() {
                const str_expiredDate = process.env.eventExpiredDate
                if (str_expiredDate === '') return false

                const endDate = new Date(str_expiredDate)
                const nowDate = new Date()
                if (nowDate.getTime() >= endDate.getTime()) {
                    return true
                }
                return false
            },
        },
        watch: {
            showMsgPopup(newValue, oldValue) {
                clearTimeout(this.popupSettimeout)
                if (newValue) {
                    this.hideMsgPopupClass = false
                    this.showMsgTrigger = this.showMsg
                    this.$nextTick(function () {
                        setTimeout(() => {
                            this.showMsgPopupClass = true
                        }, 1)
                    })
                } else {
                    this.showMsgPopupClass = false
                }
            },
            showMsgPopupClass(newValue, oldValue) {
                if (!newValue) {
                    this.hideMsgPopupClass = true
                    this.popupSettimeout = setTimeout(() => {
                        this.showMsgTrigger = this.showMsg
                    }, 300)
                }
            },
            msgType(newValue, oldValue) {
                switch (newValue) {
                    case MSG_UNLOGING:
                        this.msgText = '尚未登入，請重新登入'
                        break
                    case MSG_EVENT_EXPRIED:
                        this.msgText = '活動已結束!'
                        break
                    default:
                        break
                }
            },
        },
        methods: {
            //注入css style :root --vh
            setVH() {
                let vh = window.innerHeight * 0.01
                document.documentElement.style.setProperty('--vh', `${vh}px`)
            },
            //注入css style :root --scaleobj
            setScale() {
                //客製化 section scale

                //section banner scale
                let scaleobj_banner = this.isMobile ? window.innerWidth / 640 : window.innerWidth / 1550
                if (!this.isMobile) scaleobj_banner = scaleobj_banner > 1 ? 1 : scaleobj_banner
                document.documentElement.style.setProperty('--scaleobj_banner', `${scaleobj_banner}`)
            },
            getCurentImgPath(img) {
                return `${process.env.imgCdnPath}${img}`
            },
            // 等待所有圖片載入 urlList:array
            loadImage(urlList) {
                return new Promise((resolve, reject) => {
                    const imageCount = urlList.length
                    if (imageCount <= 0) resolve(true)

                    let imagesLoadedSuccess = 0
                    let imagesLoadedFail = 0
                    for (let i = 0; i < imageCount; i++) {
                        const image = new Image()
                        image.onload = function (elem) {
                            imagesLoadedSuccess++
                            if (imagesLoadedFail + imagesLoadedSuccess == imageCount) {
                                resolve(true)
                            }
                        }
                        image.onerror = function (elem) {
                            imagesLoadedFail++
                            if (imagesLoadedFail + imagesLoadedSuccess == imageCount) {
                                resolve(true)
                            }
                        }
                        image.src = urlList[i]
                    }
                })
            },
            msgConfirm() {
                const self = this
                switch (self.msgType) {
                    case MSG_UNLOGING:
                        self.gotoLogin()
                        break
                    default:
                        self.showMsg = false
                        break
                }
            },
            //因應各裝置瀏覽器轉化成有效日期格式
            getCorrectDate(date) {
                const self = this
                const isFromIos = self.$ua.isFromIos()

                const notSupportExtraDevice = isFromIos === true
                const notSupportBrowser = ['Internet Explorer', 'Safari']
                if (notSupportBrowser.includes(this.$store.state.deviceBrowser) || notSupportExtraDevice) {
                    date = date.replace(/-/g, '/')
                }
                return date
            },
            //前往錨點
            gotoSection(selector) {
                window.OB_gotoSection(selector)
            },
            goTop() {
                window.OB_gotoSection(0)
            },
        },
    })
}
