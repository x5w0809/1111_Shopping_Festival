<template>
    <div id="main">
        <div class="container">
            <section class="banner">
                <div class="floorLight">
                    <div class="floorLight-anime">
                        <div class="floorLight-anime-obj"></div>
                    </div>
                </div>
                <div class="floorShine">
                    <div :class="`floorShine__${index + 1}`" v-for="(item, index) in 10" :key="'floorShine' + index" data-anime>
                        <div :class="`floorShine__${index + 1}-anime floorShineAnime`">
                            <div :class="`floorShine__${index + 1}-anime-obj`"></div>
                        </div>
                    </div>
                </div>
                <div class="particlesLight">
                    <div class="particlesLight-anime">
                        <div class="particlesLight-anime-obj"></div>
                    </div>
                </div>
                <div class="box">
                    <div :class="`box__${index + 1}`" v-for="(item, index) in 12" :key="'box' + index" data-anime>
                        <div :class="`box__${index + 1}-anime boxAnime`">
                            <div :class="`box__${index + 1}-anime-obj`"></div>
                        </div>
                    </div>
                </div>
                <div class="model">
                    <div class="model-anime">
                        <div class="model-anime-obj"></div>
                    </div>
                </div>
                <div class="bg2">
                    <div class="bg2-anime">
                        <div class="bg2-anime-obj"></div>
                    </div>
                </div>
                <div class="title">
                    <div :class="`title__${index + 1}`" v-for="(item, index) in 3" :key="'title' + index" data-anime>
                        <div :class="`title__${index + 1}-anime titleAnime`">
                            <div :class="`title__${index + 1}-anime-obj`"></div>
                        </div>
                    </div>
                </div>
                <div class="titleShine">
                    <div :class="`titleShine__${index + 1}`" v-for="(item, index) in 3" :key="'titleShine' + index" data-anime>
                        <div :class="`titleShine__${index + 1}-anime titleShineAnime`">
                            <div :class="`titleShine__${index + 1}-anime-obj`"></div>
                        </div>
                    </div>
                </div>
                <div class="spotlight">
                    <div :class="`spotlight__${index + 1}`" v-for="(item, index) in 2" :key="'spotlight' + index" data-anime>
                        <div :class="`spotlight__${index + 1}-anime spotlightAnime`">
                            <div :class="`spotlight__${index + 1}-anime-obj`"></div>
                        </div>
                    </div>
                </div>
                <div class="height"></div>
            </section>
            <div class="content">
                <section class="schedule" id="schedule" data-anchor-offset-y="50">
                    <div class="dateImg">
                        <div class="dateImg-anime">
                            <div class="dateImg-anime-obj"></div>
                        </div>
                    </div>
                    <div class="dateTitle">
                        <div :class="`dateTitle__${index + 1}`" v-for="(item, index) in 2" :key="'dateTitle' + index" data-anime>
                            <div :class="`dateTitle__${index + 1}-anime dateTitleAnime`">
                                <div :class="`dateTitle__${index + 1}-anime-obj`"></div>
                            </div>
                        </div>
                    </div>
                    <div class="height"></div>
                </section>
                <section class="coupon" id="coupon" data-anchor-offset-y="50">
                    <div class="couponTitle">
                        <div class="couponTitle-anime">
                            <div class="couponTitle-anime-obj"></div>
                        </div>
                    </div>
                    <a href="/inpage.aspx?no=143893" target="_blank"><div class="seeMore">活動說明 SEE MORE+</div></a>
                    <div class="couponTitleShadow">
                        <div class="couponTitleShadow-anime">
                            <div class="couponTitleShadow-anime-obj"></div>
                        </div>
                    </div>
                    <div class="couponTitle2">
                        <div class="couponTitle2-anime">
                            <div class="couponTitle2-anime-obj"></div>
                        </div>
                    </div>
                    <div class="couponIcon">
                        <div :class="`couponIcon__${index + 1}`" v-for="(item, index) in 2" :key="'couponIcon' + index" data-anime>
                            <div :class="`couponIcon__${index + 1}-anime couponIconAnime`">
                                <div :class="`couponIcon__${index + 1}-anime-obj`"></div>
                            </div>
                        </div>
                    </div>
                    <div class="couponBtn">
                        <div :class="`couponBtn__${index + 1}`" v-for="(item, index) in 5" :key="'couponBtn' + index" data-anime>
                            <div :class="`couponBtn__${index + 1}-anime couponBtnAnime`">
                                <div :class="`couponBtn__${index + 1}-anime-obj`">
                                    <div class="clickBtn">
                                        <div :class="`clickBtn__${index + 1}-anime`">
                                            <div :class="`clickBtn__${index + 1}-anime-obj`"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="getCoupon">
                        <div :class="`getCoupon__${index + 1}`" v-for="(item, index) in couponData" :key="'getCoupon' + index" data-anime>
                            <div :class="`getCoupon__${index + 1}-anime getCouponAnime`" @click="clickListen(`getCoupon__${index + 1}-anime`)">
                                <img :class="`getCoupon__${index + 1}-anime-obj`" :src="!isMobileMedia ? item.done : item.mbDone" v-if="item.isDone" />
                                <img :class="`getCoupon__${index + 1}-anime-obj`" :src="!isMobileMedia ? item.erroTime : item.mbErroTime" v-else-if="item.isErroTime" />
                                <img :class="`getCoupon__${index + 1}-anime-obj`" :src="!isMobileMedia ? item.normal : item.mbNormal" v-else />
                                <div class="clickBtn" v-if="!item.isErroTime && !item.isDone">
                                    <div :class="`clickBtn__${index + 1}-anime`">
                                        <div :class="`clickBtn__${index + 1}-anime-obj`"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="height"></div>
                </section>
                <section class="gift" id="gift" data-anchor-offset-y="50">
                    <div class="giftTitle">
                        <div class="giftTitle-anime">
                            <div class="giftTitle-anime-obj"></div>
                        </div>
                    </div>
                    <a href="/inpage.aspx?no=143893" target="_blank"><div class="seeMore">活動說明 SEE MORE+</div></a>
                    <div class="giftDes">
                        <div :class="`giftDes__${index + 1}`" v-for="(item, index) in 2" :key="'giftDes' + index" data-anime>
                            <div :class="`giftDes__${index + 1}-anime giftDesAnime`" @click="clickListen(`giftBtn__${index + 1}-anime`)">
                                <div :class="`giftDes__${index + 1}-anime-obj`">
                                    <div class="giftBtn">
                                        <div :class="`giftBtn__${index + 1}-anime`">
                                            <div :class="`giftBtn__${index + 1}-anime-obj`"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="giftIcon">
                        <div :class="`giftIcon__${index + 1}`" v-for="(item, index) in 4" :key="'giftIcon' + index" data-anime>
                            <div :class="`giftIcon__${index + 1}-anime giftIconAnime`">
                                <div :class="`giftIcon__${index + 1}-anime-obj`"></div>
                            </div>
                        </div>
                    </div>
                    <div class="leftLight">
                        <div :class="`leftLight__${index + 1}`" v-for="(item, index) in 15" :key="'leftLight' + index" data-anime>
                            <div :class="`leftLight__${index + 1}-anime leftLightAnime`">
                                <div :class="`leftLight__${index + 1}-anime-obj`"></div>
                            </div>
                        </div>
                    </div>
                    <div class="rightLight">
                        <div :class="`rightLight__${index + 1}`" v-for="(item, index) in 15" :key="'rightLight' + index" data-anime>
                            <div :class="`rightLight__${index + 1}-anime rightLightAnime`">
                                <div :class="`rightLight__${index + 1}-anime-obj`"></div>
                            </div>
                        </div>
                    </div>
                    <div class="height"></div>
                </section>
                <section class="limit" id="limit" data-anchor-offset-y="50">
                    <div class="limitTitle">
                        <div class="limitTitle-anime">
                            <div class="limitTitle-anime-obj"></div>
                        </div>
                    </div>
                    <a href="/inpage.aspx?no=143893" target="_blank"><div class="seeMore">活動說明 SEE MORE+</div></a>
                    <div class="limitDes">
                        <div :class="`limitDes__${index + 1}`" v-for="(item, index) in 4" :key="'limitDes' + index" data-anime>
                            <div :class="`limitDes__${index + 1}-anime limitDesAnime`" @click="clickListen(`limitDes__${index + 1}-anime`)">
                                <div :class="`limitDes__${index + 1}-anime-obj`">
                                    <div class="limitDesBtn">
                                        <div :class="`limitDesBtn__${index + 1}-anime`" @click="clickListen(`limitDesBtn__${index + 1}-anime`)">
                                            <div :class="`limitDesBtn__${index + 1}-anime-obj`"></div>
                                        </div>
                                        <a href="/inpage.aspx?no=143867" target="_blank">
                                            <div :class="`limitDesBtn__${index + 1}-anime2`">
                                                <div :class="`limitDesBtn__${index + 1}-anime2-obj`"></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="!limitBegin" class="limitDesImg">
                            <img :src="limitBeginSrc" alt="" />
                        </div>
                        <div v-if="limitEnd" class="limitDesImg">
                            <img :src="limitEndSrc" alt="" />
                        </div>
                    </div>
                    <div class="height"></div>
                </section>
                <section class="flashSale" id="flashSale" data-anchor-offset-y="50">
                    <div class="flashSaleTitle">
                        <div class="flashSaleTitle-anime">
                            <div class="flashSaleTitle-anime-obj"></div>
                        </div>
                    </div>
                    <div class="flashBtnContain embla" v-if="!isMobileMedia">
                        <div class="flashBtnBox embla__container">
                            <div :class="`flashBtn__${index + 1} flashBtn  embla__slide`" v-for="(item, index) in flashSaleBtnTitle" :key="'flashBtn' + index" data-anime>
                                <div :class="`flashBtn__${index + 1}-anime flashBtnAnime`" @click="flashBtnClick(item.type)">
                                    <a href="javascript:void(0)">
                                        <img :src="item.type === flashSaleType ? item.title2 : item.title1" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flashBtnContain" v-if="isMobileMedia">
                        <div class="flashBtnBox">
                            <div :class="`flashBtn__${index + 1} flashBtn`" v-for="(item, index) in flashSaleBtnTitle.slice(0, 3)" :key="'flashBtn' + index" data-anime>
                                <div :class="`flashBtn__${index + 1}-anime flashBtnAnime`" @click="flashBtnClick(item.type)">
                                    <a href="javascript:void(0)">
                                        <img :src="item.type === flashSaleType ? item.title2_mb : item.title1_mb" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="flashBtnBox">
                            <div :class="`flashBtn__${index + 4} flashBtn`" v-for="(item, index) in flashSaleBtnTitle.slice(3, 7)" :key="'flashBtn' + index" data-anime>
                                <div :class="`flashBtn__${index + 4}-anime flashBtnAnime`" @click="flashBtnClick(item.type)">
                                    <a href="javascript:void(0)">
                                        <img :src="item.type === flashSaleType ? item.title2_mb : item.title1_mb" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flashproduct">
                        <div class="mirroFloor">
                            <div class="mirroFloor-anime">
                                <div class="mirroFloor-anime-obj"></div>
                            </div>
                        </div>
                        <div class="modelBg">
                            <div class="modelBg-anime">
                                <div class="modelBg-anime-obj"></div>
                            </div>
                        </div>
                        <div class="podium">
                            <div class="podium-anime">
                                <div class="podium-anime-obj"></div>
                            </div>
                        </div>
                        <div class="flashIcon">
                            <div :class="`flashIcon__${index + 1}`" v-for="(item, index) in 5" :key="'flashIcon' + index" data-anime>
                                <div :class="`flashIcon__${index + 1}-anime flashIconAnime`">
                                    <div :class="`flashIcon__${index + 1}-anime-obj`"></div>
                                </div>
                            </div>
                        </div>
                        <div class="discount">
                            <div :class="`discount__${index + 1}`" v-for="(item, index) in 2" :key="'discount' + index" data-anime>
                                <div :class="`discount__${index + 1}-anime discountAnime`">
                                    <div :class="`discount__${index + 1}-anime-obj`"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flashDesBg" v-if="isMobileMedia">
                            <div class="flashDesBg-anime">右滑看更多秒殺品>></div>
                        </div>
                        <div :class="`flashproductBox flashproduct__${index + 1}`" v-for="(item, index) in flashSaleData" :key="'flashproduct' + index" data-anime>
                            <div class="flashproductType" v-if="item.type === flashSaleType">
                                <div class="flashproductImgBox" v-if="!isMobileMedia">
                                    <div :class="`flashproduct__${index2 + 1}_img flashproductImg `" v-for="(listItem, index2) in item.list" :key="'flashproductImg' + index2">
                                        <a :href="listItem.url" target="_blank">
                                            <img :src="listItem.src" alt="" />
                                        </a>
                                        <div class="flashproductIcon">
                                            <div :class="`flashproductIcon__${index2 + 1} flashproductIcon-anime`">
                                                <div class="flashproductIcon-anime-obj"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flashModel">
                                    <a :href="item.modelUrl" target="_blank">
                                        <img :src="item.modelSrc" alt="" />
                                    </a>
                                </div>
                                <div class="flashDes">
                                    <img class="flashDesImg" :src="item.title" alt="" />
                                </div>
                            </div>
                            <div class="flashproductType_mb emblaM" v-if="item.type === flashSaleType && isMobileMedia">
                                <div class="flashproductImgBox embla__container">
                                    <div :class="`flashproduct__${index2 + 1}_img flashproductImg embla__slide`" v-for="(listItem, index2) in item.list" :key="'flashproductImg' + index2">
                                        <a :href="listItem.url" target="_blank">
                                            <img :src="listItem.src" alt="" />
                                        </a>
                                        <div class="flashproductIcon">
                                            <div :class="`flashproductIcon__${index2 + 1} flashproductIcon-anime`">
                                                <div class="flashproductIcon-anime-obj"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flashBlur" v-if="item.type === flashSaleType">
                                <div :class="`flashBlur__${index + 1}`" v-if="!item.unlock && !item.end">
                                    <div :class="`flashBlur__${index + 1}-anime flashBlurAnime`">
                                        <div :class="`flashBlur__${index + 1}-anime-obj`">
                                            <img :src="flashLockImg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div :class="`flashEnd__${index + 1}`" v-if="item.end">
                                    <div :class="`flashEnd__${index + 1}-anime flashEndAnime`">
                                        <div :class="`flashEnd__${index + 1}-anime-obj`">
                                            <img :src="flashEndImg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="height"></div>
                </section>
                <section class="topic" id="topic" data-anchor-offset-y="50">
                    <div class="topicTitle">
                        <div class="topicTitle-anime">
                            <div class="topicTitle-anime-obj"></div>
                        </div>
                    </div>
                    <div class="topicIcon">
                        <div :class="`topicIcon__${index + 1}`" v-for="(item, index) in 3" :key="'topicIcon' + index" data-anime>
                            <div :class="`topicIcon__${index + 1}-anime topicIconAnime`">
                                <div :class="`topicIcon__${index + 1}-anime-obj`"></div>
                            </div>
                        </div>
                    </div>
                    <div class="topicFristBg">
                        <div :class="`topicFristBg__${index + 1}`" v-for="(item, index) in 3" :key="'topicFristBg' + index" data-anime>
                            <div :class="`topicFristBg__${index + 1}-anime topicFristBgAnime`">
                                <div :class="`topicFristBg__${index + 1}-anime-obj`">
                                    <div class="topicFrist">
                                        <a :href="acticityUrl.topic[index]" target="_blank">
                                            <div :class="`topicFrist__${index + 1}-anime topicFristAnime`">
                                                <div :class="`topicFrist__${index + 1}-anime-obj`">
                                                    <div class="clickBtn">
                                                        <div :class="`clickBtn__${index + 1}-anime`">
                                                            <div :class="`clickBtn__${index + 1}-anime-obj`"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="activityTime">
                        <div class="activityTime-anime">
                            <div class="activityTime-anime-obj"></div>
                        </div>
                    </div>
                    <div class="topicSecondBg">
                        <div :class="`topicSecondBg__${index + 1}`" v-for="(item, index) in 4" :key="'topicSecondBg' + index" data-anime>
                            <div :class="`topicSecondBg__${index + 1}-anime topicSecondBgAnime`">
                                <div :class="`topicSecondBg__${index + 1}-anime-obj`">
                                    <div class="topicSecond">
                                        <a :href="acticityUrl.topic2" target="_blank">
                                            <div :class="`topicSecond__${index + 1}-anime topicSecondAnime`">
                                                <div :class="`topicSecond__${index + 1}-anime-obj`">
                                                    <div class="clickBtn">
                                                        <div :class="`clickBtn__${index + 1}-anime`">
                                                            <div :class="`clickBtn__${index + 1}-anime-obj`"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="topicSecondBgBlur" v-if="topicSecondBgBlur">
                        <div class="topicSecondBgBlur-anime">
                            <div class="topicSecondBgBlur-anime-obj"></div>
                        </div>
                    </div>
                    <div class="height"></div>
                </section>
                <section class="diversion" id="diversion" data-anchor-offset-y="50">
                    <div class="card">
                        <div :class="`card__${index + 1}`" v-for="(item, index) in 4" :key="'card' + index" data-anime>
                            <a :href="acticityUrl.diversion[index]" target="_blank">
                                <div :class="`card__${index + 1}-anime cardAnime`">
                                    <div :class="`card__${index + 1}-anime-obj`">
                                        <div class="clickBtn">
                                            <div :class="`clickBtn__${index + 1}-anime`">
                                                <div :class="`clickBtn__${index + 1}-anime-obj`"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="height"></div>
                </section>
            </div>
            <section class="sideBar" v-if="!isMobileMedia">
                <a href="javascript:void(0)">
                    <div class="sideBarImg" @click="sideBarToGo('banner')"><img :src="acticityUrl.sideBar" alt="" /></div>
                </a>
                <div class="sideBarBtn">
                    <a href="javascript:void(0)"><div class="toSchedule toGoBtn" @click="sideBarToGo('schedule')">優惠行事曆</div></a>
                    <div class="btnHr"></div>
                    <a href="javascript:void(0)"><div class="toCoupon toGoBtn" @click="sideBarToGo('coupon')">狂歡領神券</div></a>
                    <div class="btnHr"></div>
                    <a href="javascript:void(0)">
                        <div class="toGift toGoBtn" @click="sideBarToGo('gift')">
                            <span>下單抽<br /></span>iPhone14
                        </div>
                    </a>
                    <div class="btnHr"></div>
                    <a href="javascript:void(0)">
                        <div class="toLimit toGoBtn" @click="sideBarToGo('limit')">限時抽<br />萬元熊幣</div>
                    </a>
                    <div class="btnHr"></div>
                    <a href="javascript:void(0)">
                        <div class="toFlashSale toGoBtn" @click="sideBarToGo('flashSale')">七大主題<br /><span>現折111</span></div>
                    </a>
                    <div class="btnHr"></div>
                    <a href="javascript:void(0)">
                        <div class="toTopic toGoBtn" @click="sideBarToGo('topic')">年度爆款<br /><span>11元</span>UP</div>
                    </a>
                    <!-- <div class="btnHr"></div>
                    <a href="/?cbv=logo" target="_blank">
                        <div class="toOfficial toGoBtn">購衣節<br />主場</div>
                    </a> -->
                </div>
            </section>
            <section class="menuBox" v-if="isMobileMedia">
                <div class="menuBox_flex">
                    <div class="btn btn-1" data-anchor-id="schedule">
                        <a class="btn-anime" @click="sideBarToGo('schedule')">優惠日曆</a>
                    </div>
                    <div class="btn btn-2" data-anchor-id="coupon">
                        <a class="btn-anime" @click="sideBarToGo('coupon')">領神券</a>
                    </div>
                    <div class="btn btn-3" data-anchor-id="gift">
                        <a class="btn-anime" @click="sideBarToGo('gift')">抽iPhone14</a>
                    </div>
                    <div class="btn btn-4" data-anchor-id="limit">
                        <a class="btn-anime" @click="sideBarToGo('limit')">抽萬元熊幣</a>
                    </div>
                    <div class="btn btn-5" data-anchor-id="flashSale">
                        <a class="btn-anime" @click="sideBarToGo('flashSale')">天天折111</a>
                    </div>
                    <div class="btn btn-6" data-anchor-id="topic">
                        <a class="btn-anime" @click="sideBarToGo('topic')">爆款$11起</a>
                    </div>
                    <!-- <div class="btn btn-6">
                        <a class="btn-anime" href="/?cbv=logo" target="_blank">購衣節必買</a>
                    </div> -->
                </div>
            </section>
            <canvas id="canvas_confetti" v-if="!isMobileMedia"></canvas>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap'
import anime from 'animejs'
import * as apiRoulette from '@/api/roulette'
import * as commonMsg from '@/constants/common'

export default {
    data() {
        return {
            loading: false,
            MGMActivityId: 'fc9ca1b7-8eef-4a44-bace-ea2e4eec5b61',
            isLogined: false,
            isBannerAnimeFinished: false,
            //其他元素客製化動畫
            customAnime: {
                sunCubicAnimate: null,
                sunAnimeJs: null,
                sunSpeedDefault: 0,
                sunSpeedMax: 5,
                sunTimeManager: null,
                sunstartStemp: null,
                suntimestamp: null,
                sunNewPos: null,
                sunLastPos: null,
                sunDelta: 0,
                duration: null,
            },
            Roulette: {
                PlayCount: 0,
                RouletteID: '',
                RouletteRewardList: [],
            },
            gameSetting: {
                lock: false, // 遊戲運行時鎖定按鈕
            },
            playNum: 1,
            flashSaleBtnTitle: [
                {
                    date: '11/1',
                    title1: `${process.env.imgCdnPath}pc/flashSaleBtn/11_1_new.png`,
                    title2: `${process.env.imgCdnPath}pc/flashSaleBtn/11_1-2_new.png`,
                    title1_mb: `${process.env.imgCdnPath}mb/flashSaleBtn_new/11_1_MB.png`,
                    title2_mb: `${process.env.imgCdnPath}mb/flashSaleBtn_new/11_1_MB-2.png`,
                    type: 1,
                },
                {
                    date: '11/3',
                    title1: `${process.env.imgCdnPath}pc/flashSaleBtn/11_3.png`,
                    title2: `${process.env.imgCdnPath}pc/flashSaleBtn/11_3-2.png`,
                    title1_mb: `${process.env.imgCdnPath}mb/flashSaleBtn_new/11_3_MB.png`,
                    title2_mb: `${process.env.imgCdnPath}mb/flashSaleBtn_new/11_3_MB-2.png`,
                    type: 2,
                },
                {
                    date: '11/4',
                    title1: `${process.env.imgCdnPath}pc/flashSaleBtn/11_4.png`,
                    title2: `${process.env.imgCdnPath}pc/flashSaleBtn/11_4-2.png`,
                    title1_mb: `${process.env.imgCdnPath}mb/flashSaleBtn_new/11_4_MB.png`,
                    title2_mb: `${process.env.imgCdnPath}mb/flashSaleBtn_new/11_4_MB-2.png`,
                    type: 3,
                },
                {
                    date: '11/6',
                    title1: `${process.env.imgCdnPath}pc/flashSaleBtn/11_6.png`,
                    title2: `${process.env.imgCdnPath}pc/flashSaleBtn/11_6-2.png`,
                    title1_mb: `${process.env.imgCdnPath}mb/flashSaleBtn_new/11_6_MB.png`,
                    title2_mb: `${process.env.imgCdnPath}mb/flashSaleBtn_new/11_6_MB-2.png`,
                    type: 4,
                },
                {
                    date: '11/8',
                    title1: `${process.env.imgCdnPath}pc/flashSaleBtn/11_8.png`,
                    title2: `${process.env.imgCdnPath}pc/flashSaleBtn/11_8-2.png`,
                    title1_mb: `${process.env.imgCdnPath}mb/flashSaleBtn_new/11_8_MB.png`,
                    title2_mb: `${process.env.imgCdnPath}mb/flashSaleBtn_new/11_8_MB-2.png`,
                    type: 5,
                },
                {
                    date: '11/10',
                    title1: `${process.env.imgCdnPath}pc/flashSaleBtn/11_10.png`,
                    title2: `${process.env.imgCdnPath}pc/flashSaleBtn/11_10-2.png`,
                    title1_mb: `${process.env.imgCdnPath}mb/flashSaleBtn_new/11_10_MB.png`,
                    title2_mb: `${process.env.imgCdnPath}mb/flashSaleBtn_new/11_10_MB-2.png`,
                    type: 6,
                },
                {
                    date: '11/12',
                    title1: `${process.env.imgCdnPath}pc/flashSaleBtn/11_12_new.png`,
                    title2: `${process.env.imgCdnPath}pc/flashSaleBtn/11_12-2_new.png`,
                    title1_mb: `${process.env.imgCdnPath}mb/flashSaleBtn_new/11_12_MB.png`,
                    title2_mb: `${process.env.imgCdnPath}mb/flashSaleBtn_new/11_12_MB-2.png`,
                    type: 7,
                },
            ],
            flashSaleData: [
                {
                    type: 1,
                    title: `${process.env.imgCdnPath}pc/1101/cloud_t_new.png`,
                    list: [
                        {
                            src: `${process.env.imgCdnPath}pc/1101/1.png`,
                            url: '/product.aspx?seriesID=AB16385',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1101/2.png`,
                            url: '/product.aspx?seriesID=CA2505',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1101/3.png`,
                            url: '/product.aspx?seriesID=DA9091',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1101/4.png`,
                            url: '/product.aspx?seriesID=AB16374',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1101/5.png`,
                            url: '/product.aspx?seriesID=AB16291',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1101/6.png`,
                            url: null,
                        },
                    ],
                    modelSrc: `${process.env.imgCdnPath}pc/1101/model.png`,
                    modelUrl: '/product.aspx?seriesID=AB16385',
                    unlock: false,
                    end: false,
                },
                {
                    type: 2,
                    title: `${process.env.imgCdnPath}pc/1103/t-5.png`,
                    list: [
                        {
                            src: `${process.env.imgCdnPath}pc/1103/1.png`,
                            url: '/product.aspx?seriesID=KL1162',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1103/2.png`,
                            url: '/product.aspx?seriesID=KL1189',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1103/3.png`,
                            url: '/product.aspx?seriesID=KL1352',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1103/4.png`,
                            url: '/product.aspx?seriesID=KL1406',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1103/5.png`,
                            url: '/product.aspx?seriesID=KL1434',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1103/6.png`,
                            url: null,
                        },
                    ],
                    modelSrc: `${process.env.imgCdnPath}pc/1103/model-5.png`,
                    modelUrl: '/product.aspx?seriesID=KL1162',
                    unlock: false,
                    end: false,
                },
                {
                    type: 3,
                    title: `${process.env.imgCdnPath}pc/1104/t-4.png`,
                    list: [
                        {
                            src: `${process.env.imgCdnPath}pc/1104/1.png`,
                            url: '/product.aspx?seriesID=MA0260',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1104/2.png`,
                            url: '/product.aspx?seriesID=QA1188',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1104/3.png`,
                            url: '/product.aspx?seriesID=QA1191',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1104/4.png`,
                            url: '/product.aspx?seriesID=MA0455',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1104/5.png`,
                            url: '/product.aspx?seriesID=MA0465',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1104/6.png`,
                            url: null,
                        },
                    ],
                    modelSrc: `${process.env.imgCdnPath}pc/1104/model-4.png`,
                    modelUrl: '/product.aspx?seriesID=MA0260',
                    unlock: false,
                    end: false,
                },
                {
                    type: 4,
                    title: `${process.env.imgCdnPath}pc/1106/t-3.png`,
                    list: [
                        {
                            src: `${process.env.imgCdnPath}pc/1106/1.png`,
                            url: '/product.aspx?seriesID=DA9051',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1106/2.png`,
                            url: '/product.aspx?seriesID=DA9046',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1106/3.png`,
                            url: '/product.aspx?seriesID=DA9068',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1106/4.png`,
                            url: '/product.aspx?seriesID=DA8285',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1106/5.png`,
                            url: '/product.aspx?seriesID=DA8955',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1106/6.png`,
                            url: null,
                        },
                    ],
                    modelSrc: `${process.env.imgCdnPath}pc/1106/model-3.png`,
                    modelUrl: '/product.aspx?seriesID=DA9068',
                    unlock: false,
                    end: false,
                },
                {
                    type: 5,
                    title: `${process.env.imgCdnPath}pc/1108/t-2.png`,
                    list: [
                        {
                            src: `${process.env.imgCdnPath}pc/1108/1.png`,
                            url: '/product.aspx?seriesID=BA6495',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1108/2.png`,
                            url: '/product.aspx?seriesID=BA6802',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1108/3.png`,
                            url: '/product.aspx?seriesID=BA6458',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1108/4.png`,
                            url: '/product.aspx?seriesID=BA6678',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1108/5.png`,
                            url: '/product.aspx?seriesID=BA6434',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1108/6.png`,
                            url: null,
                        },
                    ],
                    modelSrc: `${process.env.imgCdnPath}pc/1108/model-2.png`,
                    modelUrl: '/product.aspx?seriesID=BA6495',
                    unlock: false,
                    end: false,
                },
                {
                    type: 6,
                    title: `${process.env.imgCdnPath}pc/1110/t-1.png`,
                    list: [
                        {
                            src: `${process.env.imgCdnPath}pc/1110/1.png`,
                            url: '/product.aspx?seriesID=FA2506',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1110/2.png`,
                            url: '/product.aspx?seriesID=FA2503',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1110/3.png`,
                            url: '/product.aspx?seriesID=FA2504',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1110/4.png`,
                            url: '/product.aspx?seriesID=FA2487',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1110/5.png`,
                            url: '/product.aspx?seriesID=FA2523',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1110/6.png`,
                            url: null,
                        },
                    ],
                    modelSrc: `${process.env.imgCdnPath}pc/1110/model-1.png`,
                    modelUrl: '/product.aspx?seriesID=FA2197',
                    unlock: false,
                    end: false,
                },
                {
                    type: 7,
                    title: `${process.env.imgCdnPath}pc/1112/TS-t_new.png`,
                    list: [
                        {
                            src: `${process.env.imgCdnPath}pc/1112/1.png`,
                            url: '/product.aspx?seriesID=AB16524',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1112/2.png`,
                            url: '/product.aspx?seriesID=AB16372',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1112/3.png`,
                            url: '/product.aspx?seriesID=AB16302',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1112/4.png`,
                            url: '/product.aspx?seriesID=AB16644',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1112/5.png`,
                            url: '/product.aspx?seriesID=AB16648',
                        },
                        {
                            src: `${process.env.imgCdnPath}pc/1112/6.png`,
                            url: null,
                        },
                    ],
                    modelSrc: `${process.env.imgCdnPath}pc/1112/model.png`,
                    modelUrl: '/product.aspx?seriesID=AB16644',
                    unlock: false,
                    end: false,
                },
            ],
            flashSaleType: 1,
            acticityUrl: {
                gift: '/inpage.aspx?no=6964',
                limit: '/inpage.aspx?no=1762',
                topic: ['/inpage.aspx?no=129115', '/evpage.aspx?no=128909', '/inpage.aspx?no=142240'],
                topic2: '/inpage.aspx?no=1762',
                diversion: ['/evpage.aspx?no=128913', '/inpage.aspx?no=141712', '/inpage.aspx?no=128912', '/evpage.aspx?no=128893'],
                sideBar: `${process.env.imgCdnPath}pc/sideBarTitle.png`,
            },
            sideBarIn: false,
            giftLight: false,
            couponData: [
                {
                    //折60
                    normal: `${process.env.imgCdnPath}pc/coupon1.png`,
                    done: `${process.env.imgCdnPath}pc/coupon1-2.png`,
                    erroTime: `${process.env.imgCdnPath}pc/coupon1-3.png`,
                    mbNormal: `${process.env.imgCdnPath}mb/coupon/coupon1.png`,
                    mbDone: `${process.env.imgCdnPath}mb/coupon/coupon1-2.png`,
                    mbErroTime: `${process.env.imgCdnPath}mb/coupon/coupon1-3.png`,
                    isDone: false,
                    isErroTime: false,
                },
                {
                    //折70
                    normal: `${process.env.imgCdnPath}pc/coupon2.png`,
                    done: `${process.env.imgCdnPath}pc/coupon2-2.png`,
                    erroTime: null,
                    mbNormal: `${process.env.imgCdnPath}mb/coupon/coupon2.png`,
                    mbDone: `${process.env.imgCdnPath}mb/coupon/coupon2-2.png`,
                    mbErroTime: null,
                    isDone: false,
                    isErroTime: false,
                },
                {
                    //折200
                    normal: `${process.env.imgCdnPath}pc/coupon3.png`,
                    done: `${process.env.imgCdnPath}pc/coupon3-2.png`,
                    erroTime: null,
                    mbNormal: `${process.env.imgCdnPath}mb/coupon/coupon3.png`,
                    mbDone: `${process.env.imgCdnPath}mb/coupon/coupon3-2.png`,
                    mbErroTime: null,
                    isDone: false,
                    isErroTime: false,
                },
                {
                    //折280
                    normal: `${process.env.imgCdnPath}pc/coupon4.png`,
                    done: `${process.env.imgCdnPath}pc/coupon4-2.png`,
                    erroTime: null,
                    mbNormal: `${process.env.imgCdnPath}mb/coupon/coupon4.png`,
                    mbDone: `${process.env.imgCdnPath}mb/coupon/coupon4-2.png`,
                    mbErroTime: null,
                    isDone: false,
                    isErroTime: false,
                },
                {
                    //新註冊
                    normal: `${process.env.imgCdnPath}pc/coupon5.png`,
                    done: `${process.env.imgCdnPath}pc/coupon5-2.png`,
                    erroTime: null,
                    mbNormal: `${process.env.imgCdnPath}mb/coupon/coupon5.png`,
                    mbDone: `${process.env.imgCdnPath}mb/coupon/coupon5-2.png`,
                    mbErroTime: null,
                    isDone: false,
                    isErroTime: false,
                },
            ],
            limitBegin: false,
            limitBeginSrc: `${process.env.imgCdnPath}pc/limitDes4_coming.png`,
            limitEnd: false,
            limitEndSrc: `${process.env.imgCdnPath}pc/limitDes4_end.png`,
            coupon1LotteryList: [
                'db0bb191-021e-448c-b4da-1d6e2ab60d01',
                'db0bb191-021e-448c-b4da-1d6e2ab60d02',
                'db0bb191-021e-448c-b4da-1d6e2ab60d03',
                'db0bb191-021e-448c-b4da-1d6e2ab60d04',
                'db0bb191-021e-448c-b4da-1d6e2ab60d05',
                'db0bb191-021e-448c-b4da-1d6e2ab60d06',
                'db0bb191-021e-448c-b4da-1d6e2ab60d07',
                'db0bb191-021e-448c-b4da-1d6e2ab60d08',
                'db0bb191-021e-448c-b4da-1d6e2ab60d09',
                'db0bb191-021e-448c-b4da-1d6e2ab60d10',
                'db0bb191-021e-448c-b4da-1d6e2ab60d11',
                'db0bb191-021e-448c-b4da-1d6e2ab60d12',
                'db0bb191-021e-448c-b4da-1d6e2ab60d13',
            ],
            coupon1LotteryId: 'db0bb191-021e-448c-b4da-1d6e2ab60d01',
            coupon2LotteryId: 'e60dbc7e-3a15-41e4-99cf-8d24cc63392e',
            coupon3LotteryId: '3cae7c10-cc7c-4833-9e49-b55e8da2eeaf',
            coupon4LotteryId: 'b4799f0f-cd49-42f2-8054-decd454543b4',
            isMobileMedia: false,
            flashLockImg: `${process.env.imgCdnPath}pc/flashSaleBtn/tt-Lock.png`,
            flashEndImg: `${process.env.imgCdnPath}pc/flashSaleBtn/tt-end.png`,
            flashDay: [
                new Date(2022, 10, 1, 11),
                new Date(2022, 10, 3, 11),
                new Date(2022, 10, 4, 11),
                new Date(2022, 10, 6, 11),
                new Date(2022, 10, 8, 11),
                new Date(2022, 10, 10, 11),
                new Date(2022, 10, 12, 11),
                new Date(2022, 10, 14, 11),
            ],
            schedulePopped: false,
            topicSecondBgBlur: false,
        }
    },
    computed: {
        playBol() {
            return this.playNum !== 0
        },
        canRunFlag() {
            const self = this
            return self.isLogined === true && self.isBannerAnimeFinished === true
        },
        isMarkUp() {
            const self = this
            if (self.storeId && self.storeId == 'MarkUp') {
                return true
            } else {
                return false
            }
        },
        isStoreActivity() {
            const self = this
            if (self.storeId && self.storeId != 'MarkUp') {
                return true
            } else {
                return false
            }
        },
    },
    watch: {
        isloadingAnimationDone(newValue) {
            const self = this
            //banner Anime
            self.$nextTick(function () {
                self.resetBannerAnimePC()
                self.productSlider()
            })
        },
        afterScreenResizeState(newValue) {
            const self = this
            self.decideMobile()
            self.productSlider()
        },
        screenScrollState(newValue, oldValue) {
            const self = this
            if (self.isMobileMedia) {
                self.detectAnchorHighlight()
            }
        },
        // 偵測螢幕滾輪向下事件
        screenScrollDown(newValue, oldValue) {
            const self = this
            let bannerOffset = document.getElementsByClassName('banner')[0]
            let giftOffset = document.getElementsByClassName('gift')[0]
            let scheduleOffset = document.getElementsByClassName('schedule')[0]
            if (newValue > bannerOffset.offsetTop + bannerOffset.offsetHeight / 2 && !self.sideBarIn) {
                self.sideBarIn = true
                window.OB_sideBarIn()
            }
            if (newValue > giftOffset.offsetTop + giftOffset.offsetHeight * 0.75 && !self.giftLight) {
                self.giftLight = true
                window.OB_giftLight(self.isMobileMedia)
            }
            if (newValue > scheduleOffset.offsetTop + scheduleOffset.offsetHeight * 0.85 && !self.schedulePopped) {
                self.schedulePopped = true
                window.OB_schedulePop()
            }
        },
        // 偵測螢幕滾輪向上事件
        screenScrollUp(newValue, oldValue) {
            const self = this
            let bannerOffset = document.getElementsByClassName('banner')[0]
            if (newValue < bannerOffset.offsetTop + bannerOffset.offsetHeight / 2 && self.sideBarIn) {
                self.sideBarIn = false
                window.OB_sideBarOut()
            }
        },
        //After 呼叫判斷是否登入API
        isLogin(newValue, oldValue) {
            const self = this
            if (typeof oldValue === 'undefined' && !newValue) {
                //尚未登入
            }
            if (typeof oldValue === 'undefined' && newValue) {
                //有登入
                //進頁面 偵測是否領取過
                self.$nextTick(function () {
                    let rouletteIDList = [self.coupon1LotteryId, self.coupon2LotteryId, self.coupon3LotteryId, self.coupon4LotteryId]
                    rouletteIDList.forEach((item, index) => {
                        self.getRoulettePlayCount(item, index)
                        // if (!self.playBol) {
                        //     self.couponData[index].isDone = true
                        // }
                    })
                })
            }
        },
        flashSaleType() {
            const self = this
            self.productSlider()
        },
    },
    created() {
        const self = this
    },
    mounted() {
        const self = this
        self.decideMobile()
        //判斷coupon時段
        self.$nextTick(function () {
            self.checkCouponTime()
        })
    },
    destroyed() {},
    methods: {
        decideMobile() {
            const self = this
            if (window.innerWidth <= 765) {
                self.isMobileMedia = true
            } else {
                self.isMobileMedia = false
            }
        },
        flashBtnClick(item) {
            const self = this
            window.OB_flashSaleDesAnime(item)
            setTimeout(() => {
                self.flashSaleType = item
            }, 1200)
        },
        async checkCouponTime() {
            //判斷每天coupon1開放的時間
            const self = this
            const timeYear = new Date().getFullYear()
            const timeDate = new Date().getDate()
            const timeMonth = new Date().getMonth()
            const dateNow = new Date()
            const startTime = new Date(timeYear, timeMonth, timeDate, 0, 0, 0)
            const endTime = new Date(timeYear, timeMonth, timeDate, 13, 11)
            if (dateNow > startTime && dateNow <= endTime) {
                self.couponData[0].isErroTime = false
            } else {
                self.couponData[0].isErroTime = true
            }
            //判斷更換coupon1 id
            switch (true) {
                case dateNow < new Date(2022, 10, 2):
                    self.coupon1LotteryId = self.coupon1LotteryList[0]
                    break
                case dateNow >= new Date(2022, 10, 2) && dateNow < new Date(2022, 10, 3):
                    self.coupon1LotteryId = self.coupon1LotteryList[1]
                    break
                case dateNow >= new Date(2022, 10, 3) && dateNow < new Date(2022, 10, 4):
                    self.coupon1LotteryId = self.coupon1LotteryList[2]
                    break
                case dateNow >= new Date(2022, 10, 4) && dateNow < new Date(2022, 10, 5):
                    self.coupon1LotteryId = self.coupon1LotteryList[3]
                    break
                case dateNow >= new Date(2022, 10, 5) && dateNow < new Date(2022, 10, 6):
                    self.coupon1LotteryId = self.coupon1LotteryList[4]
                    break
                case dateNow >= new Date(2022, 10, 6) && dateNow < new Date(2022, 10, 7):
                    self.coupon1LotteryId = self.coupon1LotteryList[5]
                    break
                case dateNow >= new Date(2022, 10, 7) && dateNow < new Date(2022, 10, 8):
                    self.coupon1LotteryId = self.coupon1LotteryList[6]
                    break
                case dateNow >= new Date(2022, 10, 8) && dateNow < new Date(2022, 10, 9):
                    self.coupon1LotteryId = self.coupon1LotteryList[7]
                    break
                case dateNow >= new Date(2022, 10, 9) && dateNow < new Date(2022, 10, 10):
                    self.coupon1LotteryId = self.coupon1LotteryList[8]
                    break
                case dateNow >= new Date(2022, 10, 10) && dateNow < new Date(2022, 10, 11):
                    self.coupon1LotteryId = self.coupon1LotteryList[9]
                    break
                case dateNow >= new Date(2022, 10, 11) && dateNow < new Date(2022, 10, 12):
                    self.coupon1LotteryId = self.coupon1LotteryList[10]
                    break
                case dateNow >= new Date(2022, 10, 12) && dateNow < new Date(2022, 10, 13):
                    self.coupon1LotteryId = self.coupon1LotteryList[11]
                    break
                case dateNow >= new Date(2022, 10, 13) && dateNow < new Date(2022, 10, 14):
                    self.coupon1LotteryId = self.coupon1LotteryList[12]
                    break
            }
            //判斷11.8限定登入抽熊幣
            if (dateNow >= new Date(2022, 10, 8)) {
                self.limitBegin = true
            } else {
                self.limitBegin = false
            }
            if (dateNow >= new Date(2022, 10, 11)) {
                self.limitEnd = true
            } else {
                self.limitEnd = false
            }
            //進頁面 偵測是否領取過
            const isLogin = await self.$store.dispatch('CHECKLOGIN')
            if (isLogin) {
                let rouletteIDList = [self.coupon1LotteryId, self.coupon2LotteryId, self.coupon3LotteryId, self.coupon4LotteryId]
                rouletteIDList.forEach((item, index) => {
                    self.getRoulettePlayCount(item, index)
                })
                self.couponData[4].isDone = true
            }
            //判斷flashsale時間
            switch (true) {
                case dateNow >= self.flashDay[0] && dateNow < self.flashDay[1]:
                    self.flashSaleData[0].unlock = true
                    self.flashSaleType = 1
                    break
                case dateNow >= self.flashDay[1] && dateNow < self.flashDay[2]:
                    self.flashSaleData[0].end = true
                    self.flashSaleData[1].unlock = true
                    self.flashSaleType = 2
                    break
                case dateNow >= self.flashDay[2] && dateNow < self.flashDay[3]:
                    self.flashSaleData.forEach((item, index) => {
                        if (index < 2) {
                            item.end = true
                        }
                    })
                    self.flashSaleData[2].unlock = true
                    self.flashSaleType = 3
                    break
                case dateNow >= self.flashDay[3] && dateNow < self.flashDay[4]:
                    self.flashSaleData.forEach((item, index) => {
                        if (index < 3) {
                            item.end = true
                        }
                    })
                    self.flashSaleData[3].unlock = true
                    self.flashSaleType = 4
                    break
                case dateNow >= self.flashDay[4] && dateNow < self.flashDay[5]:
                    self.flashSaleData.forEach((item, index) => {
                        if (index < 4) {
                            item.end = true
                        }
                    })
                    self.flashSaleData[4].unlock = true
                    self.flashSaleType = 5
                    break
                case dateNow >= self.flashDay[5] && dateNow < self.flashDay[6]:
                    self.flashSaleData.forEach((item, index) => {
                        if (index < 5) {
                            item.end = true
                        }
                    })
                    self.flashSaleData[5].unlock = true
                    self.flashSaleType = 6
                    break
                case dateNow >= self.flashDay[6] && dateNow < self.flashDay[7]:
                    self.flashSaleData.forEach((item, index) => {
                        if (index < 6) {
                            item.end = true
                        }
                    })
                    self.flashSaleData[6].unlock = true
                    self.flashSaleType = 7
                    break
                case dateNow >= self.flashDay[7]:
                    self.flashSaleData.forEach((item, index) => {
                        item.end = true
                    })
                    break
            }
            //判斷topic 11/7
            if (dateNow > new Date(2022, 10, 7, 11)) {
                self.topicSecondBgBlur = false
            } else {
                self.topicSecondBgBlur = true
            }
        },
        clickListen(item) {
            const self = this
            if (item === '') return
            switch (item) {
                //299免運
                case 'limitDes__3-anime':
                    window.open(self.acticityUrl.limit)
                    break
                //抽iphone
                case 'giftBtn__1-anime':
                    window.open(self.acticityUrl.gift)
                    break
                //夜貓不眠抽熊幣
                case 'limitDesBtn__4-anime':
                    self.gotoLogin()
                    break
                //折60
                case 'getCoupon__1-anime':
                    if (!self.couponData[0].isDone && !self.couponData[0].isErroTime) {
                        self.Roulette.RouletteID = self.coupon1LotteryId
                        self.playLottery(0)
                    }
                    break
                //折70
                case 'getCoupon__2-anime':
                    if (!self.couponData[1].isDone && !self.couponData[1].isErroTime) {
                        self.Roulette.RouletteID = self.coupon2LotteryId
                        self.playLottery(1)
                    }
                    break
                //折200
                case 'getCoupon__3-anime':
                    if (!self.couponData[2].isDone && !self.couponData[2].isErroTime) {
                        self.Roulette.RouletteID = self.coupon3LotteryId
                        self.playLottery(2)
                    }
                    break
                //折280
                case 'getCoupon__4-anime':
                    if (!self.couponData[3].isDone && !self.couponData[3].isErroTime) {
                        self.Roulette.RouletteID = self.coupon4LotteryId
                        self.playLottery(3)
                    }
                    break
                //折100
                case 'getCoupon__5-anime':
                    if (!self.couponData[4].isDone) {
                        self.gotoRegister()
                    }
                    break
                default:
                    break
            }
        },
        sideBarToGo(item) {
            var scrollDiv = document.getElementsByClassName(item)[0]
            scrollDiv.scrollIntoView({ behavior: 'smooth' })
        },
        productSlider() {
            const self = this
            if (!self.isMobileMedia) {
                self.$nextTick(() => {
                    setTimeout(() => {
                        let emblaNode = document.querySelector('.embla')
                        let options = {
                            dragFree: true,
                            containScroll: 'trimSnaps',
                        }
                        let plugins = [] // Plugins
                        let embla = EmblaCarousel(emblaNode, options, plugins)
                    }, 200)
                })
            } else {
                self.$nextTick(() => {
                    setTimeout(() => {
                        let emblaNode = document.querySelector('.emblaM')
                        let options = {
                            align: 'center',
                            slidesToScroll: 2,
                            dragFree: true,
                            containScroll: 'trimSnaps',
                        }
                        let plugins = [] // Plugins

                        let embla = EmblaCarousel(emblaNode, options, plugins)
                    }, 200)
                })
            }
        },
        async playLottery(index) {
            const self = this

            if (self.gameSetting.lock) {
                return
            }

            //活動結束
            if (self.eventIsExpired) {
                self.$Swal2.fire({
                    text: commonMsg.MSG_EVENT_EXPRIED,
                })
                self.$store.commit('SET_PAGELOADING', false)
                return
            }
            self.$store.commit('SET_PAGELOADING', true)

            const isLogin = await self.$store.dispatch('CHECKLOGIN')
            if (!isLogin) {
                self.$Swal2.fire({
                    text: commonMsg.MSG_UNLOGING,
                })
                self.$store.commit('SET_PAGELOADING', false)
                return
            }

            //檢查次數
            await self.getRoulettePlayCount(self.Roulette.RouletteID, index)

            if (!self.playBol) {
                self.$Swal2.fire({
                    text: '您已經抽過了',
                })
                self.$store.commit('SET_PAGELOADING', false)
                return
            }

            //取得中獎結果
            self.getRouletteGift()
        },
        //取得中獎結果
        async getRouletteGift() {
            const self = this
            if (self.gameSetting.lock) {
                return
            }
            self.gameSetting.lock = true
            const data = await apiRoulette.apiGetGiftPackage(this.Roulette.RouletteID, self)

            if (data.ResultCode === 1) {
                //const _LotteryDetailId = data.Result.LotteryDetailId
                //取得次數
                this.playNum = !!data.Result && data.Result != null ? data.Result.PlayCount : 0

                //秀得獎結果
                self.customPopup(data.Message, this.Roulette.RouletteID)
            } else {
                // self.$Swal2.fire({
                //   text: '系統維護中',
                // })
                //Message
                self.$Swal2.fire({
                    text: data.Message,
                })
            }
            self.gameSetting.lock = false
            self.$store.commit('SET_PAGELOADING', false)
        },
        //取得可玩次數
        async getRoulettePlayCount(RouletteID, index) {
            const self = this
            const data = await apiRoulette.checkGiftPackageReceived(RouletteID, self)
            if (data.ResultCode === 1) {
                //self.playNum = 0
                self.couponData[index].isDone = true
            }
            // else {
            //     //Message
            //     self.$Swal2.fire({
            //         text: data.Message,
            //     })
            // }
        },
        customPopup(message, id) {
            const self = this
            let amount = ''
            //let _templatePopupHtml = ''
            //const _id = id.toLocaleUpperCase()
            //const _id = self.Roulette.RouletteID
            switch (id) {
                case 'db0bb191-021e-448c-b4da-1d6e2ab60d01':
                case 'db0bb191-021e-448c-b4da-1d6e2ab60d02':
                case 'db0bb191-021e-448c-b4da-1d6e2ab60d03':
                case 'db0bb191-021e-448c-b4da-1d6e2ab60d04':
                case 'db0bb191-021e-448c-b4da-1d6e2ab60d05':
                case 'db0bb191-021e-448c-b4da-1d6e2ab60d06':
                case 'db0bb191-021e-448c-b4da-1d6e2ab60d07':
                case 'db0bb191-021e-448c-b4da-1d6e2ab60d08':
                case 'db0bb191-021e-448c-b4da-1d6e2ab60d09':
                case 'db0bb191-021e-448c-b4da-1d6e2ab60d10':
                case 'db0bb191-021e-448c-b4da-1d6e2ab60d11':
                case 'db0bb191-021e-448c-b4da-1d6e2ab60d12':
                case 'db0bb191-021e-448c-b4da-1d6e2ab60d13':
                    // 滿999折60
                    amount = '60'
                    break
                case 'e60dbc7e-3a15-41e4-99cf-8d24cc63392e':
                    // 滿1111折70
                    amount = '70'
                    break
                case '3cae7c10-cc7c-4833-9e49-b55e8da2eeaf':
                    // 滿2511折200
                    amount = '200'
                    break
                case 'b4799f0f-cd49-42f2-8054-decd454543b4':
                    // 滿3511折280
                    amount = '280'
                    break
                default:
                    break
            }
            setTimeout(() => {
                //偵測是否領取過
                let rouletteIDList = [self.coupon1LotteryId, self.coupon2LotteryId, self.coupon3LotteryId, self.coupon4LotteryId]
                rouletteIDList.forEach((item, index) => {
                    self.getRoulettePlayCount(item, index)
                })
                self.$Swal2
                    .fire({
                        // confirmButtonText: '確認',
                        // showCancelButton: false,
                        text: message,
                    })
                    .then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        // if (result.isConfirmed) {
                        // }
                    })
            }, 1000)
        },
        resetBannerAnimePC() {
            const self = this
            self.$nextTick(function () {
                if (!self.isMobileMedia) {
                    setTimeout(() => {
                        window.OB_confettiAnime('canvas_confetti')
                        gsap.to(document.querySelector('#canvas_confetti'), {
                            opacity: 1,
                            duration: 1,
                        })
                    }, 2000)
                }
                if (self.isMobileMedia) {
                    self.setStickyBar()
                }
                const urlParams = new URLSearchParams(window.location.search);
                const scrollString = urlParams.get('scrollTo')
                if (scrollString) {
                    self.sideBarToGo(scrollString)
                } else {
                    document.body.style.overflow = 'hidden'
                }
                window.OB_bannerAnime(self.isMobileMedia, self.storeId)
            })
        },
        detectAnchorHighlight() {
            const self = this
            const activeClass = 'active'
            const anchorEls = document.querySelectorAll('[data-anchor-id]')
            anchorEls.forEach((e) => {
                const targetEl = document.getElementById(e.dataset.anchorId)
                const rectTarget = targetEl.getBoundingClientRect()
                const y = rectTarget.y - targetEl.dataset.anchorOffsetY - 1
                if (y <= 0 && Math.abs(y) <= rectTarget.height) {
                    e.classList.add(activeClass)
                } else {
                    e.classList.remove(activeClass)
                }
            })
        },
        setStickyBar() {
            const self = this
            const elemAnchor = document.querySelector('.banner')
            const rectAnchor = elemAnchor.getBoundingClientRect()
            const elemNavBar = document.querySelector('.menuBox')
            const stickyClassName = 'show'
            window.addEventListener('scroll', function () {
                if (window.scrollY > rectAnchor.top + rectAnchor.height) {
                    if (!elemNavBar.classList.contains(stickyClassName)) elemNavBar.classList.add(stickyClassName)
                } else {
                    if (elemNavBar.classList.contains(stickyClassName)) elemNavBar.classList.remove(stickyClassName)
                }
            })
        },
    },
}
</script>

<style lang="scss"></style>
