<template>
    <view class="content" :style="'padding-bottom:'+CustomBar+'px;'">
        <!-- 下拉刷新 -->
        <z-paging refresher-threshold="140px"
                  :refresher-img-style="{'width':'30px','height':'30px','color':'white'}"
                  refresher-complete-delay="500"
                  refresher-fixed-bac-height="200"
                  :refresher-default-img="defaultImg"
                  :refresher-pulling-img="defaultImg"
                  :refresher-refreshing-img="defaultImg"
                  :refresher-complete-img="defaultImg"
                  refresher-vibrate
                  :refresher-title-style="{'color':'white'}"
                  refresher-background="linear-gradient(to right,#FD8B24,#FF4C41)"
                  refresher-fixed-background="linear-gradient(to right,#FD8B24,#FF4C41)"
                  ref="paging"
                  v-model="dataList"
                  :auto-clean-list-when-reload="false"
                  :auto-scroll-to-top-when-reload="false"
                  :refresher-status.sync="refresherStatus"
                  @query="queryList"
                  style="background: rgba(243,123,29,0.1);"
        >
            <!--顶部标题-->
            <mainNavBar title="好酒选"></mainNavBar>
            <!--        <u-navbar title="好酒列表" @rightClick="show = true" :autoBack="true"></u-navbar>-->
            <!--头部-->
            <view class="bgBox padding-lr-sm" :style="'padding-top:'+((CustomBar+10)*2)+'rpx'">
                <!--    搜索框-->
                <view class="flex align-center text-white searchBox" @click="gotoPath('searchPage')">
                    <view class="cuIcon-search padding-lr-sm text-white"></view>
                    <input disabled class="w100 text-sm padding-tb-sm" type="text"
                           :placeholder="placeholderText"
                           :placeholder-class="placeholderAnime?'placeholderRollClass placeholderClass text-df text-gray':'placeholderClass text-df text-gray'">
                </view>
                <u-tabs itemStyle="padding-left: 15px; padding-right: 15px; height: 80rpx;" :list="list1"
                        lineColor="#ffffff" inactiveStyle="color:#eeeeee;" activeStyle="color:#ffffff;font-size:36rpx">
<!--                    <view slot="right" class="text-white flex align-center">-->
<!--                        <text class="cuIcon-filter"></text>-->
<!--                        <view>筛选</view>-->
<!--                    </view>-->
                </u-tabs>
                <view v-if="false" class="grid col-4 margin-top">
                    <view class="flex flex-direction align-center">
                        <view class="t-icon t-icon-a-zu415"
                              style="background-repeat: no-repeat;width: 60rpx;height: 60rpx"></view>
                        <text class="text-white margin-top-xs">品牌加盟</text>
                    </view>
                    <view class="flex flex-direction align-center">
                        <view class="t-icon t-icon-a-zu416"
                              style="background-repeat: no-repeat;width: 60rpx;height: 60rpx"></view>
                        <text class="text-white margin-top-xs">品牌认证</text>
                    </view>
                    <view class="flex flex-direction align-center">
                        <view class="t-icon t-icon-a-zu418"
                              style="background-repeat: no-repeat;width: 60rpx;height: 60rpx"></view>
                        <text class="text-white margin-top-xs">资源代理</text>
                    </view>
                    <view class="flex flex-direction align-center">
                        <view class="t-icon t-icon-a-zu420"
                              style="background-repeat: no-repeat;width: 60rpx;height: 60rpx"></view>
                        <text class="text-white margin-top-xs">酒数据云</text>
                    </view>
                </view>
                <view class="typeBox margin-top">
                    <view class="w100 grid col-4">
                        <view class="text-center padding-lr-sm">
                            <view style="width: 40rpx;height: 40rpx;background-repeat: no-repeat" class="t-icon t-icon-koubeiceping"></view>
                            <view class="margin-top-xs">口碑测评</view>
                        </view>
                        <view class="text-center padding-lr-sm">
                            <view style="width: 40rpx;height: 40rpx;background-repeat: no-repeat" class="t-icon t-icon-pinpaituijian"></view>
                            <view class="margin-top-xs">帮我选酒</view>
                        </view>
                        <view class="text-center padding-lr-sm">
                            <view style="width: 40rpx;height: 40rpx;background-repeat: no-repeat" class="t-icon t-icon-bangninxuanjiu"></view>
                            <view class="margin-top-xs">收藏酒</view>
                        </view>
                        <view class="text-center padding-lr-sm">
                            <view style="width: 40rpx;height: 40rpx;background-repeat: no-repeat" class="t-icon t-icon-jiuleiceping"></view>
                            <view class="margin-top-xs">酒类测评</view>
                        </view>
                    </view>
                    <view class="margin-top padding-top grid col-4 u-border-top">
                        <view class="text-center padding-lr-sm u-border-right">
                            <view class="text-orange text-bold text-xl">2365</view>
                            <view class="margin-top-xs">当前库存</view>
                        </view>
                        <view class="text-center padding-lr-sm u-border-right">
                            <view class="text-orange text-bold text-xl">23</view>
                            <view class="margin-top-xs">当前合同</view>
                        </view>
                        <view class="text-center padding-lr-sm u-border-right">
                            <view class="text-orange text-bold text-xl">2312</view>
                            <view class="margin-top-xs">订货统计</view>
                        </view>
                        <view class="text-center padding-lr-sm" @click="goto('point')">
                            <view class="text-orange text-bold text-xl">65</view>
                            <view class="margin-top-xs">我的积分</view>
                        </view>
                    </view>
                </view>
            </view>

            <view class="wrap margin-top padding-lr-sm">
                <view class="flex align-end justify-between">
                    <image class="" src="/static/images/pingtaituijian.png" style="width:260rpx" mode="widthFix"></image>
<!--                    <view class="flex align-center">-->
<!--                        <image class="margin-left-sm" v-for="item in iconList"-->
<!--                               :key="item.url" :src="item.img"-->
<!--                               style="width:40rpx;height: 40rpx" mode="widthFix">-->
<!--                        </image>-->
<!--                    </view>-->
                    <view class="flex align-end margin-left-sm text-lg"><view class="cuIcon-filter"></view>筛选</view>
                </view>
                <view class="margin-top padding-bottom">
                    <view v-if="isLoading" class="cu-load loading"></view>
                    <platformRecommend v-if="recommendList.length>0" :goodWineList="true"
                                       :recommendList="recommendList.slice(0,3)"
                                       :horizontal="false"></platformRecommend>
                    <platformRecommend v-if="recommendList.length>0" :goodWineList="true"
                                       :recommendList="recommendList.slice(3,recommendList.length)"
                                       :horizontal="true"></platformRecommend>
                    <u-empty v-else mode="data" icon="http://cdn.uviewui.com/uview/empty/car.png"></u-empty>
                    <u-loading-icon text="加载中" textSize="14"></u-loading-icon>
                </view>


            </view>

        </z-paging>
        <fxbBackTop></fxbBackTop>
        <win-tab-bar />
    </view>
</template>

<script>
import fxbBackTop from "/src/components/fxb/fxb-back-top"
import topSearchNav from "/src/pages/index/components/topSearchNav";
import winTabBar from "/src/components/win/win-tab-bar";
import mainNavBar from "/src/components/common/mainNavBar";
import platformRecommend from "/src/pages/index/components/platformRecommend";
import fxbImage from "/src/components/fxb/fxb-image";
import { mapMutations } from "vuex";

export default {
    name: "recommend",
    components: {
        topSearchNav,
        winTabBar,
        mainNavBar,
        fxbImage,
        platformRecommend,
        fxbBackTop
    },
    data() {
        return {
            list: [
                "飞天 53%vol 500ml 贵州茅台",
                "国酱1925 贵州茅台镇酱香型白酒53度粮",
                "汾酒 黄盖玻汾 53度 475ml*6",
                "琅琊台52度海派香型固态法白酒山东名酒",
                "赖醉君贵州茅台镇酱香型白酒53度国酱",
                "茅台集团贵州老窖酒53度柔和酱香型粮食",
                "金门高粱酒 台商精选 清香型 白酒 50度",
                "贵州茅台集团贵州老窖 柔和酱香型白酒",
                "茅台 茅台王子酒 金王子 酱香",
                "茅台 茅台王子酒 珍品王子 酱",
                "贵州茅台集团贵州老窖 柔和酱香型白酒"
            ],
            timeIndex: 0,
            placeholderAnime: 0,
            placeholderText: "飞天 53%vol 500ml 贵州茅台",
            timeout: null,
            defaultImg: this.$config.IMG_SERVER + "/gif/loading.gif",
            pullingImg: this.$config.IMG_SERVER + "/gif/loading.gif",
            refreshingImg: this.$config.IMG_SERVER + "/gif/loading.gif",
            completeImg: this.$config.IMG_SERVER + "/gif/loading.gif",
            dataList: [],
            tabList: ["测试1", "测试2", "测试3", "测试4"],
            tabIndex: 0,
            refresherStatus: 0,
            isLoading: true,
            iconList: [
                {
                    url: "1",
                    img: "/static/images/logo (1).png"
                },
                {
                    url: "2",
                    img: "/static/images/logo (2).png"
                },
                {
                    url: "3",
                    img: "/static/images/logo (3).png"
                },
                {
                    url: "4",
                    img: "/static/images/logo (4).png"
                }
            ],
            list1: [{
                name: "白酒"
            }, {
                name: "啤酒"
            }, {
                name: "黄酒"
            }, {
                name: "葡萄酒"
            }, {
                name: "洋酒"
            }, {
                name: "收藏酒"
            }],
            recommendList: [
                // {
                //     id: "1",
                //     title: "东方国宾·尊致",
                //     label: ["酱香型", "53°","四川"],
                //     info: ["成交榜NO.1", "新品首发"],
                //     price: "499.00元",
                //     agentPrice: "259.00元",
                //     introduce:"东方国宾·尊致 国之礼序 首单进货300箱",
                //     imgUrl: "https://dev-vue-1313145053.cos.ap-chongqing.myqcloud.com/front_end/static/img/index/img_17%402x.png",
                //     rank: 1,
                //     transaction: "https://dev-vue-1313145053.cos.ap-chongqing.myqcloud.com/front_end/static/img/index/%E6%A6%9C1%402x.png"
                // },
            ]
        };
    },
    onLoad(option) {
        this.tabCurrent = option.index;
        this.getRecommendList();
        clearInterval(this.timeout);
        this.rollText();
    },
    onShow() {
        this.setBottomBarIndex(2);
    },
    methods: {
        ...mapMutations("index", ["setBottomBarIndex"]),
        gotoPath(path) {
            if (path==='searchPage') {
                uni.navigateTo({
                    url: '/pages/searchPage/searchPage' + `?placeholderText=${this.placeholderText}`
                })
            }
        },
        goto(path) {
            if (path === "point") {
                uni.navigateTo({
                    url: "pages/admin/integralForPerson/integralIndex"
                });
            }
        },
        rollText() {
            this.timeout = setInterval(() => {
                this.placeholderAnime = 1;
                // this.placeholderAnime ? this.placeholderAnime = 0 : this.placeholderAnime = 1;
                this.timeIndex++;
                if (this.timeIndex >= this.list.length) {
                    this.timeIndex = 0;
                }
                setTimeout(() => {
                    this.placeholderText = this.list[this.timeIndex];
                    this.placeholderAnime = 0;
                }, 300);
            }, 3000);
        },
        tabChange(index) {
            this.tabIndex = index;
            //当切换tab时请调用组件的reload方法，请勿直接调用：queryList方法！！
            this.$refs.paging.reload();
        },
        queryList(pageNo, pageSize) {
            //组件加载时会自动触发此方法，因此默认页面加载时会自动触发，无需手动调用
            //这里的pageNo和pageSize会自动计算好，直接传给服务器即可
            //模拟请求服务器获取分页数据，请替换成自己的网络请求
            const params = {
                pageNo: pageNo,
                pageSize: pageSize,
                type: this.tabIndex + 1
            };
            this.$refs.paging.complete([
                {
                    detail: "111",
                    title: "1"
                },
                {
                    detail: "111",
                    title: "1"
                },
                {
                    detail: "111",
                    title: "1"
                }
            ]);
        },
        async getRecommendList() {
            let res = await this.$http.getGoodList();
            if (res) {
                this.isLoading = false;
                this.recommendList = res.data;
            }
        },
        ed(res) {
            console.log(res);
        },
        dateChange(d) {
            uni.showToast({
                icon: "none",
                title: d
            });
        },
        tabSelect(e) {
            console.log(e.currentTarget.dataset.id);
        },
        close() {
            this.show = false;
        },
        selectClick(e) {
            console.log(e.name);
        },
        recommend() {
        },
        //跳转会员入驻协议
        Agent() {
            uni.navigateTo({
                url: "pages/memberPayment/memberAgreement"
            });
        },
        //跳转付费
        agentPolicy() {
            uni.navigateTo({
                url: "pages/memberPayment/memberPay"
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.backTop {
    position: fixed;
    z-index: 999999999;
    width: 40px;
    height: 40px;
    box-shadow: 2rpx 2rpx 4px 1rpx rgba(213,51,51,0.7);
}
.typeBox{
    background: white;
    padding: 26rpx 28rpx;
    border-radius: 8rpx;
    border: 2rpx solid rgba(229, 77, 66, 0.5);
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
.commodityColor {
    color: red;
}

.placeholderClass {
    color: white;
    transition: all 0.3s;
    transform: translateY(0);
    opacity: 1;
}

.placeholderRollClass {
    opacity: 0;
    transform: translateY(-50rpx);
}

.searchBox {
    border-radius: 0.5rem;
    padding: 0.3rem 0;
    border: white 1.5px solid;
    opacity: 0.8;
}

.searchInput {
    width: 100%;
    height: 68rpx;
    background-color: white;
    border: 2rpx solid #F37B1D;
    border-radius: 34rpx;
    padding: 0 110rpx 0 32rpx;
}

.bgBox {
    background-image: url('http://124.220.219.72:8084/static/img/index/pic_bg.png');
    background-repeat: no-repeat;
    background-size: 750rpx 560rpx;
    background-position: 0 0;
    border-bottom: 0;
}
</style>
