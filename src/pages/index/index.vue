<template>
    <view id="wrap">
<!--        <mainNavBar title="推荐"></mainNavBar>-->
        <view>
            <u-navbar :safeAreaInsetTop="false"
                      :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px'}">
                <view slot="left" class="u-nav-slot text-white">
                    <!--                <view class="flex align-center" @click="pageTo('/pages/appCenter/selectCity/selectArea')">-->
                    <!--                    <view>观山湖区</view>-->
                    <!--                    <view class="cuIcon-triangledownfill" style="font-size: 24px"></view>-->
                    <!--                </view>-->
                    <u-icon @click="gotoMessage" name="chat" size="24" color="#FFFFFF"></u-icon>
                </view>
                <view slot="center" class="u-nav-slot text-xl text-white">
                    <view>好酒选</view>
                </view>
                <view slot="right" class="u-nav-slot text-white">
                    <view class="addView">
                        <view class="cuIcon-add" style="font-size: 24px" @click="showMenu"></view>
                        <view class="addInfo">
                            <u-transition :show="viewMenu" mode="fade-down">
                                <view class="transition">
                                    <view class="padding-sm margin-top-sm bg-white flex justify-around align-center triangle" v-for="(item,index) in  menuList"  :key="index" @click="$emit(item.event)">
                                        <view class=" text-bold" :class="item.icon"></view>
                                        <view>{{ item.text }}</view>
                                    </view>
                                </view>
                            </u-transition>
                        </view>
                    </view>
                </view>
            </u-navbar>
            <view v-if="viewMenu" class="clickBackground" @click="viewMenu=false" ></view>
        </view>
        <!-- 顶部搜索框+图标+信息 -->
        <topSearchNav ref="topSearchNav" class="banner-view" :style="'margin-top: '+CustomBar+'px'"></topSearchNav>
        <!-- 图标列表+热点头条+轮播图-->
        <!--        <bannerIconHot></bannerIconHot>-->
        <!--品牌专区-->
        <brand></brand>
        <!-- 热门活动 -->

        <view @click="gotoPath('pages/hotActivity/hotEvents')">
            <hotActivity></hotActivity>
        </view>
        <!-- 排行榜 -->
        <template v-if="flag">
            <rankingList></rankingList>
            <!--             测试酒 -->
            <view class="padding-lr-sm">
                <view :style="'--url:url('+$config.IMG_SERVER+'/img/index/cejiu.png)'" class="cejiu radius"></view>
                <view class="flex flex-wrap justify-between">
                    <view :style="'--url:url('+$config.IMG_SERVER+'/img/index/bannerceshi%20%283%29.png)'" class="cejiubottom1 margin-top-sm"></view>
                    <view :style="'--url:url('+$config.IMG_SERVER+'/img/index/bannerceshi%20%282%29.png)'" class="cejiubottom2 margin-top-sm"></view>
                    <view :style="'--url:url('+$config.IMG_SERVER+'/img/index/bannerceshi%20%283%29.png)'" class="cejiubottom2 margin-top-sm"></view>
                    <view :style="'--url:url('+$config.IMG_SERVER+'/img/index/bannerceshi%20%282%29.png)'" class="cejiubottom1 margin-top-sm"></view>
                </view>
            </view>

        </template>
        <!-- 平台推荐 -->
        <!--            <recommend></recommend>-->

        <fxbBackTop></fxbBackTop>
        <win-tab-bar />
    </view>
</template>

<script>
import fxbBackTop from "/src/components/fxb/fxb-back-top"
import mainNavBar from "/src/components/common/mainNavBar";
import topSearchNav from "/src/pages/index/components/topSearchNav";
import bannerIconHot from "/src/pages/index/components/bannerIconHot";
import brand from "/src/pages/index/components/brand";
import rankingList from "/src/pages/index/components/rankingList";
import hotActivity from "/src/pages/index/components/hotActivity";
import winTabBar from "/src/components/win/win-tab-bar";
import recommend from "/src/pages/index/components/recommend";
import { mapMutations } from "vuex";

export default {
    name: "index",
    components: {
        mainNavBar,
        topSearchNav,
        bannerIconHot,
        brand,
        rankingList,
        hotActivity,
        winTabBar,
        recommend,
        fxbBackTop
    },
    data: function() {
        return {
            flag: false,
            viewMenu:false,
            menuList:[
                {icon:'cuIcon-scan',text:'扫一扫',event:'Scan'}
            ],
            iconStyle: {
                fontSize: "32rpx",
                color: "#ffffff"
            },
            lazyShow: 1,
            scrollTop: 0,
            headInfo: [
                {
                    title: "当前库存",
                    value: "kucun",
                    unit: "瓶",
                    number: 1998
                },
                {
                    title: "当前合同",
                    value: "hetong",
                    number: 1998
                },
                {
                    title: "订货统计",
                    value: "dinghuotongji",
                    unit: "件",
                    number: 1998
                },
                {
                    title: "我的积分",
                    value: "jifen",
                    number: 1998
                }
            ]
        };
    },
    onPageScroll(e) {
        this.scrollTop = e.scrollTop;
    },
    onLoad() {
        setTimeout(() => {
            this.flag = true;
        }, 1000);
    },
    onShow() {
        this.setBottomBarIndex(0);
		uni.request({
			url:"http://192.168.2.181:3001/platform/homepage/homeImgList",
			method:"GET",
			header:{
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
			},
			dataType: "json",
			success(res) {
				console.log(666,res)
			},
			fail(err) {
				console.log('err',err)
			}
		})
    },
    methods: {
        ...mapMutations("index", ["setBottomBarIndex"]),
        showAddView() {
            this.show = !this.show;
        },
        gotoPath(url) {
            uni.navigateTo({ url });
        },
        showMenu(){
            this.viewMenu = !this.viewMenu
        },
        pageTo(url){
            uni.navigateTo({
                url
            })
        },
        gotoMessage(){
            uni.navigateTo({
                url:"/pages/messageCenter/messageIndex"
            })
        }
    }
};
</script>

<style lang="scss" scoped>
#wrap{
    background: rgba(243, 123, 29, 0.1);
}
.touchend{
    transition: all 0.3s;
}
.backTopRight{
    right: 320px !important;
}
.backTopLeft{
    left: 0px !important;
}
.searchBox {
    position: relative;
}

.addInfo {
    position: absolute;
    width: 25vw;
    right: 0;
    /*border-radius: 0.3rem;*/
    overflow: hidden;
}

.triangle::before {
    position: absolute;
    right: 0.3rem;
    top: -0.4rem;
    content: "";
    height: 0;
    width: 0;
    border: 0.5rem solid transparent;
    border-bottom-color: white;
}

.cejiu {
    background-image: var(--url);
    background-size: cover;
    height: 150rpx;
    background-position: center;
    overflow: hidden;
    width: 100%;
}

.cejiubottom1 {
    background-image: var(--url);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 160rpx;
    background-position: center;
    overflow: hidden;
    width: 344rpx;
}

.cejiubottom2 {
    background-image: var(--url);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 160rpx;
    background-position: center;
    overflow: hidden;
    width: 344rpx;
}

/deep/ .u-back-top {
    background-color: #E54D42;
}

.clickBackground {
    width: 100vw;
    height: 100vh;
    background: red;
    opacity: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
}

.addView {
    position: relative;
}

.addInfo {
    position: absolute;
    width: 25vw;
    right: 0;
    /*border-radius: 0.3rem;*/
    overflow: hidden;
}

.triangle::before {
    position: absolute;
    right: 0.2rem;
    top: -0.35rem;
    content: "";
    height: 0;
    width: 0;
    border-radius: 0.1rem;
    border: 0.5rem solid transparent;
    border-bottom-color: white;
}

/deep/ .u-navbar {
    .u-navbar__content {
        background-image: url('http://124.220.219.72:8084/static/img/index/pic_bg.png');
        background-repeat: no-repeat;
        background-size: 750rpx 560rpx;
        background-position: 0 0;
        height: var(--CustomBar) !important;
        padding-top: var(--StatusBar);
        border-bottom: 0;


        .u-navbar__content__left,
        .u-navbar__content__right {
            margin-top: var(--StatusBar);
        }

    }
}
</style>
