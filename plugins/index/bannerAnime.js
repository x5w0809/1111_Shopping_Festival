import Animejs from 'animejs'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import anime from 'animejs'
gsap.registerPlugin(ScrollToPlugin)

if (process.client) {
    const _cusEase1 = 'cusEase1'
    const _cusEase2 = 'cusEase2'
    const easePower1In = 'power1.in'
    const easePower1InOut = 'power1.inOut'
    const _preventOverlaps = 'group1'
    const _anticipatePin = 1
    const merge = (target, source) => {
        // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
        for (const key of Object.keys(source)) {
            if (source[key] instanceof Object) Object.assign(source[key], merge(target[key], source[key]))
        }

        // Join `target` and modified `source`
        Object.assign(target || {}, source)
        return target
    }
    var random = function (min, max) {
        return Math.random() * (max - min) + min
    }
    window.OB_bannerAnime = function (_isMobile, storeId) {
        var bannerAnime = function () {
            async function animePromise() {
                var topAnime = anime.timeline({})
                const anime1 = topAnime.add({
                    targets: '.box__1-anime',
                    keyframes: [
                        {
                            opacity: 0,
                            duration: 0,
                            translateY: 70,
                        },
                        {
                            opacity: 1,
                            duration: 800,
                            translateY: 0,
                            easing: 'cubicBezier(.25,.1,.25,1)',
                        },
                    ],
                    delay: 200,
                }).finished
                const anime3 = topAnime.add(
                    {
                        targets: '.particlesLight-anime, .floorLight-anime',
                        keyframes: [
                            {
                                opacity: 0,
                                duration: 0,
                            },
                            {
                                opacity: 1,
                                duration: 1000,
                                easing: 'cubicBezier(.25,.1,.25,1)',
                            },
                        ],
                        //delay: anime.stagger(150),
                    },
                    '-=400'
                ).finished
                const anime4 = topAnime.add(
                    {
                        targets: '.model-anime',
                        keyframes: [
                            {
                                opacity: 0,
                                duration: 0,
                                translateY: 80,
                            },
                            {
                                opacity: 1,
                                duration: 800,
                                translateY: 0,
                                easing: 'cubicBezier(.25,.1,.25,1)',
                            },
                        ],
                        //delay: anime.stagger(150),
                    },
                    '-=700'
                ).finished
                const anime5 = topAnime.add(
                    {
                        targets: '.title__1-anime',
                        keyframes: [
                            {
                                opacity: 0,
                                duration: 0,
                                translateY: 100,
                                scale: 0,
                            },
                            {
                                opacity: 1,
                                duration: 500,
                                translateY: 0,
                                scale: 1,
                                easing: 'cubicBezier(.45,.22,.46,1.3)',
                            },
                        ],
                        //delay: anime.stagger(150),
                    },
                    '-=400'
                ).finished
                const anime6 = topAnime.add(
                    {
                        targets: '.title__2-anime',
                        keyframes: [
                            {
                                opacity: 0,
                                duration: 0,
                                translateY: 100,
                                scale: 0,
                            },
                            {
                                opacity: 1,
                                duration: 500,
                                translateY: 0,
                                scale: 1,
                                easing: 'cubicBezier(.45,.22,.46,1.3)',
                            },
                        ],
                        //delay: anime.stagger(150),
                    },
                    '-=300'
                ).finished
                const anime7 = topAnime.add(
                    {
                        targets: '.title__3-anime',
                        keyframes: [
                            {
                                opacity: 0,
                                duration: 0,
                                scale: 1,
                            },
                            {
                                opacity: 1,
                                scale: 1.1,
                            },
                            {
                                opacity: 1,
                                scale: 0.7,
                            },
                            {
                                opacity: 1,
                                scale: 1.05,
                            },
                            {
                                opacity: 1,
                                scale: 0.95,
                            },
                            {
                                opacity: 1,
                                scale: 1,
                            },
                        ],
                        duration: 1500,
                        easing: 'cubicBezier(.45,.22,.46,1.2)',
                        //delay: anime.stagger(150),
                    },
                    '-=300'
                ).finished
                await Promise.all([anime1, anime3, anime4, anime5, anime6, anime7])
            }
            animePromise().then(() => {})
        }
        var leftBoxAnime = function () {
            async function animePromise() {
                var topAnime = anime.timeline({})
                const anime1 = topAnime.add({
                    targets: '.box__2-anime',
                    keyframes: [
                        {
                            opacity: 0,
                            duration: 0,
                            translateY: -200,
                        },
                        {
                            opacity: 1,
                            duration: 700,
                            translateY: 0,
                            easing: 'cubicBezier(.25,.1,.25,1)',
                        },
                    ],
                    delay: 1200,
                }).finished
                const anime2 = topAnime.add(
                    {
                        targets: '.box__7-anime, .box__5-anime, .box__3-anime',
                        keyframes: [
                            {
                                opacity: 0,
                                duration: 0,
                                translateY: 600,
                            },
                            {
                                opacity: 1,
                                duration: 500,
                                translateY: 0,
                                easing: 'cubicBezier(.25,.1,.25,1)',
                            },
                        ],
                        delay: anime.stagger(250),
                    },
                    '-=300'
                ).finished
                const anime3 = topAnime.add(
                    {
                        targets: '.box__4-anime',
                        keyframes: [
                            {
                                opacity: 0,
                                duration: 0,
                                translateX: -150,
                            },
                            {
                                opacity: 1,
                                duration: 700,
                                translateX: 0,
                                easing: 'cubicBezier(.25,.1,.25,1)',
                            },
                        ],
                        //delay: anime.stagger(150),
                    },
                    '-=300'
                ).finished
                const anime4 = topAnime.add(
                    {
                        targets: '.box__6-anime',
                        keyframes: [
                            {
                                opacity: 0,
                                duration: 0,
                                translateY: 200,
                            },
                            {
                                opacity: 1,
                                duration: 700,
                                translateY: 0,
                                easing: 'cubicBezier(.25,.1,.25,1)',
                            },
                        ],
                        //delay: anime.stagger(150),
                    },
                    '-=500'
                ).finished
                await Promise.all([anime1, anime2, anime3, anime4])
            }
            animePromise().then(() => {
                titleShine()
                floorShine()
                spotlight()
                document.body.style.overflow = ''
            })
        }
        var rightBoxAnime = function () {
            async function animePromise() {
                var topAnime = anime.timeline({})
                const anime1 = topAnime.add({
                    targets: '.box__8-anime',
                    keyframes: [
                        {
                            opacity: 0,
                            duration: 0,
                            translateX: 500,
                        },
                        {
                            opacity: 1,
                            duration: 500,
                            translateX: 0,
                            easing: 'cubicBezier(.25,.1,.25,1)',
                        },
                    ],
                    delay: 1200,
                }).finished
                const anime2 = topAnime.add(
                    {
                        targets: '.box__9-anime',
                        keyframes: [
                            {
                                opacity: 0,
                                duration: 0,
                                translateY: 500,
                            },
                            {
                                opacity: 1,
                                duration: 500,
                                translateY: 0,
                                easing: 'cubicBezier(.25,.1,.25,1)',
                            },
                        ],
                    },
                    '-=300'
                ).finished
                const anime3 = topAnime.add(
                    {
                        targets: '.box__10-anime, .box__11-anime, .box__12-anime',
                        keyframes: [
                            {
                                opacity: 0,
                                duration: 0,
                                translateX: 200,
                            },
                            {
                                opacity: 1,
                                duration: 500,
                                translateX: 0,
                                easing: 'cubicBezier(.25,.1,.25,1)',
                            },
                        ],
                        delay: anime.stagger(200),
                    },
                    '-=300'
                ).finished
                await Promise.all([anime1, anime2, anime3])
            }
            animePromise().then(() => {})
        }
        var titleShine = function () {
            for (let f = 0; f < 4; f++) {
                anime({
                    targets: '.titleShine__' + f + '-anime',
                    keyframes: [
                        {
                            opacity: 0,
                            duration: 0,
                            scale: 0,
                        },
                        {
                            opacity: 1,
                            scale: 1,
                        },
                        {
                            opacity: 0,
                            scale: 0,
                        },
                    ],
                    duration: 2000,
                    easing: 'cubicBezier(.32,.81,.3,.96)',
                    delay: anime.random(300, 1200),
                    loop: true,
                })
            }
        }
        var floorShine = function () {
            for (let f = 0; f < 11; f++) {
                anime({
                    targets: '.floorShine__' + f + '-anime',
                    keyframes: [
                        {
                            opacity: 0,
                            duration: 0,
                            scale: 0,
                        },
                        {
                            opacity: 1,
                            scale: 1,
                        },
                        {
                            opacity: 0,
                            scale: 0,
                        },
                    ],
                    duration: 3000,
                    easing: 'cubicBezier(.32,.81,.3,.96)',
                    delay: anime.random(300, 1200),
                    loop: true,
                })
            }
        }
        var spotlight = function () {
            anime({
                targets: '.spotlightAnime',
                keyframes: [
                    {
                        opacity: 0,
                        duration: 0,
                    },
                    {
                        opacity: 1,
                    },
                    {
                        opacity: 0,
                    },
                ],
                duration: 2000,
                easing: 'cubicBezier(.32,.81,.3,.96)',
                delay: anime.stagger(500),
                loop: true,
            })
        }
        bannerAnime()
        leftBoxAnime()
        rightBoxAnime()
    }
    var snowfall_len = 20
    var snowfall_opacity_max = 0.9
    var snowfall_opacity_min = 0.2
    var snowfall_scale_max = 0.8
    var snowfall_scale_min = 0.5
    var base_image1 = new Image()
    base_image1.src = `${process.env.imgCdnPath}pc/icon.png`
    var base_image2 = new Image()
    base_image2.src = `${process.env.imgCdnPath}pc/icon2.png`
    var base_image3 = new Image()
    base_image3.src = `${process.env.imgCdnPath}pc/icon3.png`
    var base_image4 = new Image()
    base_image4.src = `${process.env.imgCdnPath}pc/icon4.png`
    var base_image5 = new Image()
    base_image5.src = `${process.env.imgCdnPath}pc/icon5.png`
    var base_image6 = new Image()
    base_image6.src = `${process.env.imgCdnPath}pc/icon6.png`
    var base_image7 = new Image()
    base_image7.src = `${process.env.imgCdnPath}pc/icon7.png`
    var base_image8 = new Image()
    base_image8.src = `${process.env.imgCdnPath}pc/icon8.png`
    window.OB_confettiAnime = function (id) {
        //canvas init
        var canvas = document.getElementById(id)
        var ctx = canvas.getContext('2d')

        //canvas dimensions
        var W = window.innerWidth
        var H = window.innerHeight
        canvas.width = W
        canvas.height = H

        //snowflake particles
        var mp = snowfall_len //max particles
        var particles = []

        for (var i = 0; i < mp; i++) {
            var md = Math.random()
            var gType = 0
            switch (true) {
                case md <= 0.1:
                    gType = 0
                    break
                case md > 0.1 && md <= 0.25:
                    gType = 1
                    break
                case md > 0.25 && md <= 0.45:
                    gType = 2
                    break
                case md > 0.45 && md <= 0.6:
                    gType = 3
                    break
                case md > 0.6 && md <= 0.8:
                    gType = 4
                    break
                case md > 0.8 && md <= 1:
                    gType = 5
                    break
                default:
                    break
            }
            particles.push({
                x: Math.random() * W, //x-coordinate
                y: Math.random() * H, //y-coordinate
                r: Math.random() * 7 + 1, //radius
                d: Math.random() * mp, //density
                c: random(snowfall_scale_max, snowfall_scale_min), //scale
                o: random(snowfall_opacity_min, snowfall_opacity_max), //opacity
                g: gType, //20% of the special flake img
                rotate: Math.floor(random(360, 1)), //rotate
            })
        }

        //Lets draw the flakes
        var isfirst = true
        function drawSnowFlakes() {
            //ctx.beginPath();
            for (var i = 0; i < mp; i++) {
                var p = particles[i]

                ctx.beginPath()
                ctx.globalAlpha = p.o

                var img = null
                switch (p.g) {
                    case 0:
                        img = base_image2
                        break
                    case 1:
                        img = base_image2
                        break
                    case 2:
                        img = base_image3
                        break
                    case 3:
                        img = base_image4
                        break
                    case 4:
                        img = base_image5
                        break
                    case 5:
                        img = base_image6
                        break
                    case 6:
                        img = base_image7
                        break
                    case 7:
                        img = base_image8
                        break
                    default:
                        break
                }
                ctx.setTransform(p.c, 0, 0, p.c, p.x, p.y)
                ctx.rotate((p.rotate * Math.PI) / 180)
                ctx.drawImage(img, 1, 1)
                ctx.setTransform(1, 0, 0, 1, 0, 0)
                // if (p.g) {
                //   ctx.setTransform(p.c, 0, 0, p.c, p.x, p.y)
                //   ctx.rotate((p.rotate * Math.PI) / 180)
                //   ctx.drawImage(base_image, 1, 1)
                //   ctx.setTransform(1, 0, 0, 1, 0, 0)
                // } else {
                //   ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true)
                //   ctx.fillStyle = 'rgba(255, 255, 255, ' + 1 + ')'
                //   ctx.fill()
                // }
            }
        }

        //Function to move the snowflakes
        //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
        var angle = 0
        function moveSnowFlakes() {
            angle += 0.01
            for (var i = 0; i < mp; i++) {
                var p = particles[i]
                //Updating X and Y coordinates
                //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
                //Every particle has its own density which can be used to make the downward movement different for each flake
                //Lets make it more random by adding in the radius
                p.y += Math.cos(angle + p.d) + 1 + p.r / 5
                p.x += Math.sin(angle) * 1

                //Sending flakes back from the top when it exits
                //Lets make it a bit more organic and let flakes enter from the left and right also.
                if (p.x > W + 5 || p.x < -5 || p.y > H) {
                    if (i % 5 > 0) {
                        //66.67% of the flakes
                        particles[i] = {
                            x: Math.random() * W,
                            y: -10,
                            r: p.r,
                            d: p.d,
                            o: p.o,
                            g: p.g,
                            c: p.c,
                            rotate: p.rotate,
                        }
                    } else {
                        //If the flake is exitting from the right
                        if (Math.sin(angle) > 0) {
                            //Enter from the left
                            particles[i] = {
                                x: -5,
                                y: Math.random() * H,
                                r: p.r,
                                d: p.d,
                                o: p.o,
                                g: p.g,
                                c: p.c,
                                rotate: p.rotate,
                            }
                        } else {
                            //Enter from the right
                            particles[i] = {
                                x: W + 5,
                                y: Math.random() * H,
                                r: p.r,
                                d: p.d,
                                o: p.o,
                                g: p.g,
                                c: p.c,
                                rotate: p.rotate,
                            }
                        }
                    }
                }
            }
        }

        //animation loop
        function updateSnowFall() {
            ctx.clearRect(0, 0, W, H)
            drawSnowFlakes()
            moveSnowFlakes()
        }
        setInterval(updateSnowFall, 33)
    }
    window.OB_sideBarIn = function () {
        var sideBarIn = function () {
            anime({
                targets: '.sideBar',
                translateX: 0,
                duration: 500,
                easing: 'cubicBezier(.32,.81,.3,.96)',
            })
        }
        sideBarIn()
    }
    window.OB_sideBarOut = function () {
        var sideBarOut = function () {
            anime({
                targets: '.sideBar',
                translateX: 200,
                duration: 500,
                easing: 'cubicBezier(.32,.81,.3,.96)',
            })
        }
        sideBarOut()
    }
    window.OB_giftLight = function (isMobile) {
        var giftLight = function () {
            async function animePromise() {
                var topAnime = anime.timeline({})
                const anime1 = topAnime.add({
                    targets:
                        '.leftLight__11-anime, .leftLight__12-anime, .leftLight__13-anime, .leftLight__14-anime, .leftLight__15-anime, .rightLight__11-anime, .rightLight__12-anime, .rightLight__13-anime, .rightLight__14-anime, .rightLight__15-anime',
                    keyframes: [
                        {
                            opacity: 0,
                            duration: 0,
                            scale: 0,
                        },
                        {
                            opacity: 1,
                            duration: 300,
                            scale: 1,
                        },
                    ],
                    easing: 'cubicBezier(.06,.95,.45,.96)',
                }).finished
                const anime2 = topAnime.add(
                    {
                        targets:
                            '.leftLight__6-anime, .leftLight__7-anime, .leftLight__8-anime, .leftLight__9-anime, .leftLight__10-anime, .rightLight__6-anime, .rightLight__7-anime, .rightLight__8-anime, .rightLight__9-anime, .rightLight__10-anime',
                        keyframes: [
                            {
                                opacity: 0,
                                duration: 0,
                                scale: 0,
                            },
                            {
                                opacity: 1,
                                duration: 300,
                                scale: 1,
                            },
                        ],
                        easing: 'cubicBezier(.06,.95,.45,.96)',
                    },
                    '+=200'
                ).finished
                const anime3 = topAnime.add(
                    {
                        targets:
                            '.leftLight__1-anime, .leftLight__2-anime, .leftLight__3-anime, .leftLight__4-anime, .leftLight__5-anime, .rightLight__1-anime, .rightLight__2-anime, .rightLight__3-anime, .rightLight__4-anime, .rightLight__5-anime',
                        keyframes: [
                            {
                                opacity: 0,
                                duration: 0,
                                scale: 0,
                            },
                            {
                                opacity: 1,
                                duration: 300,
                                scale: 1,
                            },
                        ],
                        easing: 'cubicBezier(.06,.95,.45,.96)',
                    },
                    '+=200'
                ).finished
                const anime4 = topAnime.add(
                    {
                        targets: '.giftIcon__2-anime',
                        keyframes: [
                            {
                                opacity: 0,
                                duration: 0,
                                translateY: 50,
                            },
                            {
                                opacity: 1,
                                translateY: 0,
                                duration: 1000,
                            },
                        ],
                        easing: 'cubicBezier(.95,.72,.16,.99)',
                    },
                    '-=850'
                ).finished
                const anime5 = topAnime.add(
                    {
                        targets: '.giftIcon__3-anime, .giftIcon__4-anime',
                        keyframes: [
                            {
                                opacity: 0,
                                duration: 0,
                                translateY: 100,
                                scale: 0,
                            },
                            {
                                opacity: 1,
                                translateY: 0,
                                duration: 1200,
                                scale: 1,
                            },
                        ],
                        easing: 'cubicBezier(1,.8,.39,1.15)',
                    },
                    '-=950'
                ).finished
                await Promise.all([anime1, anime2, anime3, anime4, anime5])
            }
            animePromise().then(() => {
                giftFloat()
            })
        }
        var giftFloat = function () {
            anime({
                targets: '.giftIcon__3-anime',
                translateY: -30,
                duration: 2000,
                easing: 'cubicBezier(.25,.1,.25,1)',
                loop: true,
                direction: 'alternate',
            })
            anime({
                targets: '.giftIcon__4-anime',
                translateY: -20,
                duration: 1200,
                easing: 'cubicBezier(.25,.1,.25,1)',
                loop: true,
                direction: 'alternate',
            })
        }
        if (isMobile) {
            giftFloat()
        } else {
            giftLight()
        }
    }
    window.OB_flashSaleDesAnime = function (item) {
        var flashSaleDes = function () {
            async function animePromise() {
                var topAnime = anime.timeline({})
                const anime1 = topAnime.add({
                    targets: '.flashDesImg',
                    keyframes: [
                        {
                            opacity: 1,
                            duration: 0,
                            scale: 1,
                        },
                        {
                            opacity: 0,
                            duration: 300,
                            scale: 0,
                        },
                    ],
                    easing: 'cubicBezier(.06,.95,.45,.96)',
                }).finished
                const anime2 = topAnime.add(
                    {
                        targets: '.flashIcon__1-anime, .flashIcon__2-anime',
                        keyframes: [
                            {
                                opacity: 1,
                                duration: 0,
                                scale: 1,
                            },
                            {
                                opacity: 1,
                                duration: 300,
                                scale: 0.5,
                            },
                        ],
                        easing: 'cubicBezier(.06,.95,.45,.96)',
                    },
                    '-=200'
                ).finished
                const anime3 = topAnime.add(
                    {
                        targets: '.flashIcon__1-anime, .flashIcon__2-anime',
                        keyframes: [
                            {
                                duration: 0,
                                rotate: 0,
                            },
                            {
                                duration: 800,
                                //rotate: 384,
                                rotate: 360,
                            },
                        ],
                        easing: 'linear',
                        delay: anime.stagger(50),
                    },
                    '-=250'
                ).finished
                await Promise.all([anime1, anime2, anime3])
            }
            animePromise().then(() => {
                flashSaleDes2()
            })
        }
        var flashSaleDes2 = function () {
            async function animePromise() {
                var topAnime = anime.timeline({})
                const anime4 = topAnime.add(
                    {
                        targets: '.flashIcon__1-anime, .flashIcon__2-anime',
                        keyframes: [
                            {
                                duration: 0,
                                scale: 0.5,
                            },
                            {
                                scale: 1,
                                duration: 300,
                            },
                        ],
                        easing: 'cubicBezier(.06,.95,.45,.96)',
                    },
                    '-=50'
                ).finished
                const anime5 = topAnime.add(
                    {
                        targets: '.flashDesImg',
                        keyframes: [
                            {
                                opacity: 0,
                                duration: 0,
                                scale: 0,
                            },
                            {
                                opacity: 1,
                                duration: 400,
                                scale: 1,
                            },
                        ],
                        easing: 'cubicBezier(.06,.95,.45,.96)',
                    },
                    '-=100'
                ).finished
                await Promise.all([anime4, anime5])
            }
            animePromise().then(() => {})
        }
        flashSaleDes()
    }
    window.OB_schedulePop = function () {
        var schedulePop = function () {
            async function animePromise() {
                var topAnime = anime.timeline({})
                const anime1 = topAnime.add({
                    targets: '.dateTitle__2-anime',
                    keyframes: [
                        {
                            opacity: 0,
                            duration: 0,
                            scale: 0,
                        },
                        {
                            opacity: 1,
                            scale: 1.15,
                        },
                        {
                            opacity: 1,
                            scale: 0.9,
                        },
                        {
                            opacity: 1,
                            scale: 1.08,
                        },
                        {
                            opacity: 1,
                            scale: 1,
                        },
                    ],
                    duration: 1700,
                    easing: 'cubicBezier(.45,.22,.46,1.2)',
                }).finished
                await Promise.all([anime1])
            }
            animePromise().then(() => {
                loopPop()
            })
        }
        var loopPop = function () {
            anime({
                targets: '.dateTitle__2-anime',
                keyframes: [
                    {
                        opacity: 1,
                        duration: 0,
                        scale: 1,
                    },
                    {
                        opacity: 1,
                        scale: 1.05,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                    },
                    {
                        opacity: 1,
                        scale: 1.02,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                    },
                ],
                duration: 1700,
                easing: 'cubicBezier(.45,.22,.46,1.2)',
                loop: true,
                delay: 500,
                //direction: 'alternate',
            })
        }
        schedulePop()
    }
}
