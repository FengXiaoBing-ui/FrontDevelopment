<template>
    <view class="content" :class="isSetting?'tl-show':''">
        <u-navbar :border="false" :fixed="true"
                  :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
                  :safeAreaInsetTop="false">
            <view slot="left" class="u-nav-slot text-white">
                <view class="flex align-center" @click="gotoPath('/pages/appCenter/selectCity/selectArea')">
                    <view class="cuIcon-mark" style="font-size: 38rpx"></view>
<!--                    <view>观山湖区</view>-->
                </view>
            </view>
            <view slot="center" class="u-nav-slot text-white">
                <view class="text-xl">SaaS功能</view>
                <view class="search padding-lr padding-tb-sm">
                    <!--    搜索框-->
                    <view class="flex align-center text-white searchBox"
                          @click="gotoPath('/pages/searchPage/searchPage')">
                        <view class="cuIcon-search padding-lr-sm text-grey "
                              style="font-size: 1rem;color: white;"></view>
                        <input class="text-grey text-sm" placeholder="找商品、查库存、找功能" type="text"
                               placeholder-class="placeholder">
                    </view>
                    <view class="flex align-center justify-between margin-top">
                        <view class="text-white">
                            <view class="margin-top-xs text-xl">好酒选电子商务有限公司</view>
                            <view>
                                <text class="text-lg margin-right-sm">张晓刚</text>
                                <text style="opacity: 0.8;">服务商</text>
                            </view>
                        </view>
                        <button class="cu-btn line-white radius">切换身份
                            <text class="cuIcon-order"></text>
                        </button>
                    </view>
                </view>
            </view>
            <view slot="right" class="u-nav-slot text-white">
                <view class="addView">
                    <view class="cuIcon-add" style="font-size: 24px" @click="showAddView"></view>
                    <view class="addInfo">
                        <u-transition :show="show" mode="fade-down">
                            <view class="transition">
                                <view
                                    class="padding-sm margin-top-sm bg-white flex justify-around align-center triangle">
                                    <view class="cuIcon-scan text-bold"></view>
                                    <view>扫一扫</view>
                                </view>
                            </view>
                        </u-transition>
                    </view>
                </view>
            </view>
        </u-navbar>
        <view :style="`margin-top:${CustomBar + 140}px`">
            <!--            StatusBar-->
            <!--            <view class="flex justify-between align-center bg-red light padding-sm">-->
            <!--                <view class="flex align-center" @click="gotoPath('/pages/messageCenter/discussionGroup')">-->
            <!--                    <text class="cuIcon-service margin-right-sm"></text>-->
            <!--                    <view>不会用系统，点击联系您的专属顾问...</view>-->
            <!--                </view>-->
            <!--                <text class="cuIcon-right"></text>-->
            <!--            </view>-->
            <view class="whiteCard bg-white padding-tb padding-lr-sm flex align-center justify-between"
                  :style="'--top:'+(CustomBar+130)+'px'">
                <view class="flex align-center">
                    <u-icon name="volume" color="#E54D42" size="22"></u-icon>
                    <text>当前版本还有9日过期，请及时续费私有版！！！</text>
                </view>
                <text class="cuIcon-right text-gray"></text>
            </view>
            <view>
                <view :style="'position: relative;top:100rpx'">
                    <view class="padding-sm">
                        <view>
                            <boxTitle title="今日概况" rightIcon="attention"></boxTitle>
                            <view class="w100">
                                <view class="flex justify-between align-stretch">
<!--                                    <fxbImage class="round " width="104" height="104" src="/user/tongji.png"></fxbImage>-->
                                    <view class="flex align-stretch">
                                        <cmd-progress type="circle" stroke-color="#FFAC04FF" :showInfo="false" :stroke-width="10" :percent="75"></cmd-progress>
                                        <view class="margin-left-sm flex basis-xl flex-direction justify-around">
                                            <view class="flex justify-between align-center">
                                                <text class="text-bold text-red text-xl">15200瓶</text>
                                            </view>
                                            <view class="flex justify-between align-center">
                                                <text class="text-gray">发货统计</text>
                                            </view>
                                        </view>
                                    </view>
                                    <view class="flex align-stretch">
                                        <cmd-progress type="circle" stroke-color="#C9E32FFF" :showInfo="false" :stroke-width="10" :percent="75"></cmd-progress>
                                        <view class="margin-left-sm flex basis-xl flex-direction justify-around">
                                            <view class="flex justify-between align-center">
                                                <text class="text-bold text-green text-xl">520瓶</text>
                                            </view>
                                            <view class="flex justify-between align-center">
                                                <text class="text-gray">样品订单</text>
                                            </view>
                                        </view>
                                    </view>
                                </view>
                                <view class="flex justify-between align-center margin-top-sm">
                                    <view>今日浏览</view>
                                    <view class="flex align-center">
                                        <view>2320人</view>
                                        <view class="text-gray margin-lr-xs">较昨日</view>
                                        <view class="text-green">↓3%</view>
                                    </view>
                                </view>
                                <cmd-progress :percent="50" :showInfo="false" stroke-color="#FFAC04FF"></cmd-progress>
                            </view>
                        </view>
                        <view class="margin-tb-sm flex justify-between align-center">
                            <view class="whiteBoxShadow flex-sub" style="background: rgba(141, 198, 63, 0.06)">
                                <view class="flex basis-xl flex-direction justify-around">
                                    <view class="flex justify-between align-center">
                                        <text>代理人数</text>
                                        <view class="flex align-center">
                                            <text class="text-gray">较昨日</text>
                                            <view class="text-blue flex align-center"><view style="height: 28rpx" class="t-icon t-icon-xiangshangjiantou"></view>12%</view>
                                        </view>
                                    </view>
                                    <view class="margin-top-sm flex justify-between align-center">
                                        <text class="text-bold">代理 24人</text>
                                        <text class="text-red">申请 26人</text>
                                    </view>
                                </view>
                            </view>
                            <view class="whiteBoxShadow flex-sub margin-left-sm" style="background: rgba(0, 129, 255, 0.06)">
                                <view class="flex basis-xl flex-direction justify-around">
                                    <view class="flex justify-between align-center">
                                        <text>样品订单</text>
                                        <view class="flex align-center">
                                            <text class="text-gray">较昨日</text>
                                            <view class="text-blue flex align-center"><view style="height: 28rpx" class="t-icon t-icon-xiangshangjiantou"></view>12%</view>
                                        </view>
                                    </view>
                                    <view class="margin-top-sm flex justify-between align-center">
                                        <text class="text-bold">256瓶</text>
                                        <text class="text-red">共123单</text>
                                    </view>
                                </view>
                            </view>
                        </view>
                        <u-swiper :list="bannerList" @change="e => current = e.current" @click="edition">
                            <view
                                slot="indicator"
                                class="indicator"
                            >
                                <view
                                    class="indicator__dot"
                                    v-for="(item, index) in bannerList"
                                    :key="index"
                                    :class="[index === current && 'indicator__dot--active']"
                                >
                                </view>
                            </view>
                        </u-swiper>
                    </view>
                    <view class="flex" style="padding-bottom: 50px">
                        <view class="leftBox">
                            <scroll-view class="" scroll-y :style="'height:'+ scrollHeight() +'px;background: linear-gradient(90deg, #F86A3B 0%, #F48836 100%);'">
                                <view class="flex bg-white flex-direction">
                                    <view class="padding-lr-sm padding-tb-lg text-center text-white"
                                          :style="activeIndex==index?'':'background: linear-gradient(90deg, #F86A3B 0%, #F48836 100%);'"
                                          @click="choiceFn(index)"
                                          :class="activeIndex==index?'active text-red':(activeIndex-1)==index?'funBotBox':(activeIndex+1)==index?'funTopBox':''"
                                          v-for="(item,index) in appListJson[agentAndService]" :key="index">{{ item.name }}
                                    </view>
                                </view>
                            </scroll-view>
                        </view>
                        <view class="rightBox bg-white" :style="'height:'+ scrollHeight() +'px'">
                            <view class="text-right margin-tb-lg padding-lr-sm">
                                <text @click="setting">
                                    <text class="text-gray margin-right-xs">{{ icon == "" ? "" : "(长按可拖拽排序)" }}</text>
                                    {{ icon == "" ? "设置" : "保存" }}
                                </text>
                            </view>
                            <!--                    <movable-area>-->
                            <!--                        <view class="grid col-3">-->
                            <!--                            <iconBox v-for="(child,indexes) in fnChildrenList" :key="indexes" :imgUrl="child.imgUrl"-->
                            <!--                                     @change="gotoPath(child.path)" :icon="icon" :title="child.tips"></iconBox>-->
                            <!--                        </view>-->
                            <!--                    </movable-area>-->
                            <appList :listData="appList.childrenList" :isSetting="isSetting" @listChange="listChange"
                                     :key="appList.id+isSetting"></appList>
                            <view class="copyright text-center text-xs">
                                本APP版权归属贵州好酒选科技有限公司
                                Copyright ©2022-2022好酒选
                            </view>
                        </view>
                    </view>
                </view>

            </view>

        </view>
        <view class="switchBtn" @click="switchAgentService">
            <u-avatar
                :text="agentAndService===0?'服':agentAndService===1?'代':'合'"
                fontSize="18"
                randomBgColor
            ></u-avatar>
        </view>
        <win-tab-bar />
    </view>
</template>

<script>
import cmdProgress from "@/components/cmd-progress/cmd-progress.vue"
import winTabBar from "/src/components/win/win-tab-bar";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import iconBox from "/src/pages/admin/components/iconBox.vue";
import appList from "/src/components/healer-dragList/AppList.vue";
import fxbImage from "/src/components/fxb/fxb-image";
import appListJson from "/src/pages/admin/appList"
import {
    mapMutations
} from "vuex";

export default {
    name: "Administration",
    components: {
        winTabBar,
        boxTitle,
        iconBox,
        appList,
        fxbImage,
        cmdProgress
    },
    data() {
        return {
            appListJson,
            current: 0,
            bannerList: [
                this.$config.IMG_SERVER + "/user/fnBanner.png",
                this.$config.IMG_SERVER + "/user/fnBanner.png",
                this.$config.IMG_SERVER + "/user/fnBanner.png"
            ],
            searchHeight: 0,
            agentAndService: 1,//服务商和代理商的状态和个人合作伙伴 0:服务商,1:代理商,2:个人合作伙伴
            appList: [],
            isSetting: false,
            icon: "",
            activeIndex: 0,
            show: false,
        };
    },
    onLoad() {
        this.setBottomBarIndex(1);
        this.setAgentAndService(this.agentAndService);
        this.activeIndex = 0;
        let adminList = this.appListJson[this.agentAndService];
        this.appList = adminList[0];
    },
    mounted() {
        let _this = this;
        setTimeout(() => {
            uni.createSelectorQuery().in(this).select(".search").boundingClientRect(data => {
                _this.searchHeight = data.height;
            }).exec();
        }, 300);
    },
    methods: {
        ...mapMutations("index", ["setBottomBarIndex"]),
        ...mapMutations("index", ["setAgentAndService"]),
        scrollHeight() {
            return this.ScreenHeight - (this.CustomBar + this.searchHeight + 80);
        },
        switchAgentService() {
            this.activeIndex = 0
            this.agentAndService++;
            if (this.agentAndService>2){
                this.agentAndService = 0
            }
            this.setAgentAndService(this.agentAndService);
            this.appList = this.appListJson[this.agentAndService][this.activeIndex];
        },
        listChange(option) {

        },
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        },
        showAddView() {
            this.show = !this.show;
        },
        choiceFn(index) {
            this.activeIndex = index;
            this.appList = this.appListJson[this.agentAndService][index];
        },
        setting() {
            if (this.icon === "minus") {
                this.icon = "";
                this.isSetting = false;
            } else {
                this.icon = "minus";
                this.isSetting = true;
            }

        },
        edition() {
        // console.log(e);
        // return;
        // '/pages/admin/afterSales/afterSalesDetails?status=1?&listStatus=1')"
        uni.navigateTo({
          url: "pages/admin/versionManagement/application"
          });
        },
    }
};
</script>

<style lang="scss" scoped>
.tl-show {
    overflow: hidden;
    position: fixed;
    width: 100%;
    bottom: 0;
}

.switchBtn {
    position: fixed;
    right: 50rpx;
    bottom: 150rpx;
}

.searchBox {
    position: relative;
    border-radius: 0.5rem;
    padding: 0.3rem 0;
    border: white 1.5px solid;
    opacity: 0.8;
}

.whiteCard {
    position: fixed;
    z-index: 99;
    width: 100%;
    top: var(--top);
    border-radius: 20rpx 20rpx 0 0;
}

.placeholder {
    color: white !important;
    opacity: 1;
    bottom: 0;
    left: 0;
}

.search {
    position: fixed;
    width: 100%;
    height: 280rpx;
    top: var(--CustomBar) !important;
    left: 0;
    background-image: url('/static/images/nava-BG.png');
    background-repeat: no-repeat;
    background-size: 750rpx 400rpx;
    background-position: 0 0;
}

.infoBox {
    position: absolute;
    bottom: -3rem;
    border-radius: 0.3rem;
    width: 90%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-left: 5%;
}

.mt {
    margin-top: 2rem;
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

.leftBox {
    width: 200rpx;
}

.copyright{
    position: absolute;
    bottom: 40rpx;
    left: 50%;
    transform: translateX(-50%);
    width: 360rpx;
}

.rightBox {
    position: relative;
    width: 550rpx;
}

.funBotBox {
    border-radius: 0 0 24rpx 0 !important;
}

.funTopBox {
    border-radius: 0 24rpx 0 0 !important;
}

.active {
    background-color: white;
    border-radius: 0;
}

.triangle::before {
    position: absolute;
    right: 0.3rem;
    top: -0.4rem;
    content: "";
    height: 0;
    width: 0;
    border: 0.5rem solid white;
    border-top: 0.5rem solid transparent;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
}

.bgImg {

}

/deep/ .u-navbar {
    .u-navbar__content {
        background-image: url('/static/images/nava-BG.png');
        background-repeat: no-repeat;
        background-size: 750rpx 400rpx;
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

.indicator {
    @include flex(row);
    justify-content: center;

    &__dot {
        height: 18rpx;
        width: 18rpx;
        border-radius: 100px;
        background-color: rgba(200, 200, 200, 0.35);
        margin: 0 5px;
        transition: background-color 0.3s;

        &--active {
            background-color: #ffffff;
            border: 1rpx solid #F37B1D;
        }
    }
}

.indicator-num {
    padding: 2px 0;
    background-color: rgba(0, 0, 0, 0.35);
    border-radius: 100px;
    width: 35px;
    @include flex;
    justify-content: center;

    &__text {
        color: #FFFFFF;
        font-size: 12px;
    }
}

/deep/ .u-swiper {
    border-radius: 0 !important;
    height: 93px !important;

    .u-swiper__wrapper {
        height: 93px !important;

        .u-swiper__wrapper__item__wrapper__image {
            border-radius: 0 !important;
            height: 93px !important;
        }
    }
}
</style>
