<template>
    <view class="content bg-gray">
        <!--顶部标题-->
        <u-navbar title="好酒列表" @rightClick="show = true" :autoBack="true"></u-navbar>
        <!--头部-->
        <view class="wrap">
            <view style="width: 750rpx" class="header bg-white" :style="'top:' + (CustomBar - 1) + 'px'">
                <view class="bg-white padding-lr">
                    <view class="flex align-center margin-tb-sm bg-gray" style="border-radius: 4px">
                        <text class="cuIcon-search text-red"
                              style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
                        <input
                            class="text-df"
                            type="text"
                            placeholder-class="text-gray"
                            placeholder="请输入商品名称进行搜索"
                            confirm-type="search"
                        />
                    </view>

                    <!--产品列表导航-->
                    <view>
                        <fxb-scroll-view @tabSelect="tabSelect" :activityList="list"></fxb-scroll-view>
                    </view>
                </view>

                <!--综合筛选-->
                <!--		<fxbScreen></fxbScreen>-->
                <view class="filter flex justify-between padding-bottom">
                    <view class="root">
                        <ren-dropdown-filter :filterData="filterData" :defaultIndex="defaultIndex" @ed="ed"
                                             @dateChange="dateChange">
                        </ren-dropdown-filter>
                    </view>
                </view>
            </view>

            <view class="padding-lr-sm contentBox">
                <scroll-view scroll-x>
                    <view v-if="selectShow" class="priceSection flex align-center margin-bottom-sm">
                        <view
                            v-for="(item, index) in price"
                            :key="index"
                            class="sectionBox shadow-warp text-sm flex flex-direction align-center bg-white radius"
                        >
                            <text class="text-black text-bold">{{ item.num }}元</text>
                            <text class="text-gray">{{ item.selectNum }}选择</text>
                        </view>
                    </view>
                </scroll-view>
                <scroll-view scroll-x>

                    <view v-if="selectShow" class="priceSection flex align-center margin-bottom-sm">
                        <view
                            v-for="(item, index) in activityList"
                            :key="index"
                            class="selectAlcohol shadow-warp text-sm flex flex-direction justify-between align-center bg-white radius"
                        >
                            <fxbImage :src="item.imgUrl"></fxbImage>
                            <text class="margin-top-sm text-gray">{{ item.title }}</text>
                        </view>
                    </view>
                </scroll-view>

                <!--价格区间标签-->
                <fxbPriceTag class="margin-bottom-sm"></fxbPriceTag>

                <!--商品列表-->

                <!--                <view class="product margin-top-sm">-->
                <!--                    <view class="flex flex-wrap justify-between">-->
                <!--                        <view v-for="(item, index) in productList" :key="index">-->
                <!--                            <fxbProductList-->
                <!--                                :title="item.title"-->
                <!--                                :infoText="item.infoText"-->
                <!--                                :price="item.price"-->
                <!--                                :img-url="item.imgUrl"-->
                <!--                            ></fxbProductList>-->
                <!--                        </view>-->
                <!--                    </view>-->
                <!--                </view>-->
                <view>
                    <platformRecommend v-if="recommendList.length>0" :goodWineList="true" :recommendList="recommendList" :horizontal="false"></platformRecommend>
                    <u-empty v-else mode="data" icon="http://cdn.uviewui.com/uview/empty/car.png"></u-empty>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import fxbScrollView from "/src/pages/agent/components/fxb-scroll-view";
import fxbPriceTag from "/src/pages/agent/components/fxb-price-tag";
import fxbProductList from "/src/pages/agent/components/fxb-product-list";
import fxbScreen from "/src/pages/agent/components/fxb-screen";
import renDropdownFilter from "/src/components/ren-dropdown-filter/ren-dropdown-filter";
import platformRecommend from "/src/pages/index/components/platformRecommend";
import fxbImage from "/src/components/fxb/fxb-image"

export default {
    name: "commodityList",
    components: {
        fxbImage,
        fxbScrollView,
        fxbPriceTag,
        fxbProductList,
        fxbScreen,
        renDropdownFilter,
        platformRecommend
    },
    data() {
        return {
            selectShow: true,
            price: [
                {
                    num: "1~99",
                    selectNum: "5%"
                },
                {
                    num: "100~299",
                    selectNum: "20%"
                },
                {
                    num: "300~599",
                    selectNum: "30%"
                },
                {
                    num: "600~999",
                    selectNum: "15%"
                },
                {
                    num: "600~999",
                    selectNum: "15%"
                }
            ],
            screenResult: "",
            columns: [["茅台", "五粮液", "习酒", "赖茅", "国窖"]],
            list: [
                {
                    title: "白酒"
                },
                {
                    title: "啤酒"
                },
                {
                    title: "葡萄酒"
                },
                {
                    title: "洋酒"
                },
                {
                    title: "黄酒"
                },
                {
                    title: "收藏酒"
                }
            ],
            show: false,
            tabCurrent: 0,
            activityList: [
                {
                    title: "东方国宾",
                    imgUrl:"/img/index/img_17%402x.png"
                },
                {
                    title: "红花郎",
                    imgUrl:"/img/index/img_18%402x.png"
                },
                {
                    title: "茅台",
                    imgUrl:"/img/index/img_19%402x.png"
                },
                {
                    title: "五粮液",
                    imgUrl:"/img/index/img_20%402x.png"
                },
                {
                    title: "黄酒",
                    imgUrl:"/img/index/img_21%402x.png"
                },
                {
                    title: "收藏酒",
                    imgUrl:"/img/index/img_22%402x.png"
                }
            ],
            filterData: [
                [
                    { text: "智能排序", value: "" },
                    { text: "剩余代理量", value: 1 },
                    { text: "价格最低", value: 2 },
                    { text: "价格最高", value: 3 },
                    { text: "最新发布", value: 4 }
                ],
                [{ text: "品牌", value: "" }],
                [
                    { text: "价格", value: "" },
                    { text: "不限", value: 1 },
                    { text: "1~99元", value: 2 },
                    { text: "100~299元", value: 3 },
                    { text: "300~599元", value: 4 },
                    { text: "600~999元", value: 5 },
                    { text: "1000~1999元", value: 6 }
                ],
                [
                    { text: "香型", value: "" },
                    { text: "不限", value: 1 },
                    { text: "酱香型", value: 2 },
                    { text: "浓香型", value: 3 },
                    { text: "清香型", value: 4 },
                    { text: "兼香型", value: 5 },
                    { text: "米香型", value: 6 },
                    { text: "凤香型", value: 7 },
                    { text: "特香型", value: 8 },
                    { text: "药香型", value: 9 },
                    { text: "老白干香型", value: 10 },
                    { text: "其他", value: 11 }
                ],
                [
                    {
                        text: "筛选",
                        value: ""
                    }
                ]
            ],
            defaultIndex: [0, 0, 0, 0, 0],
            productList: [
                {
                    title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
                    infoText: "成交榜NO1/剩余代理32/新品首新品首",
                    price: "365.00",
                    imgUrl: require("/src/static/bottle/99.jpeg")
                },
                {
                    title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
                    infoText: "成交榜NO1/剩余代理32/新品首新品首",
                    price: "125.00",
                    imgUrl: require("/src/static/bottle/88.jpeg")
                },
                {
                    title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
                    infoText: "成交榜NO1/剩余代理32/新品首新品首",
                    price: "365.00",
                    imgUrl: require("/src/static/bottle/99.jpeg")
                },
                {
                    title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
                    infoText: "成交榜NO1/剩余代理32/新品首新品首",
                    price: "125.00",
                    imgUrl: require("/src/static/bottle/88.jpeg")
                }
            ],
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
            ],
        };
    },
    onLoad(option) {
        this.tabCurrent = option.index;
        let _this = this;
        let res = this.$http.getGoodList()
        res.then(data => {
            _this.recommendList = data.data
        })
    },
    onShow() {
    },
    methods: {
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
.commodityColor {
    color: red;
}

.wrap {
    .contentBox {
        position: relative;
        top: calc(var(--status-bar-height) + 370rpx);
        padding-bottom: 20rpx;
    }

    .header {
        position: fixed;
        left: 0;
        z-index: 1;
    }

    .scroll {
        padding: 470rpx 0 100rpx 0;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        overflow: hidden;
        overflow-y: scroll;
    }

    .gray {
        color: #737373;
    }

    .priceSection {
        width: 100%;

        .sectionBox {
            padding: 10rpx 24rpx;
            margin-right: 20rpx;
            white-space: nowrap;
        }

        .selectAlcohol {
            padding: 10rpx 20rpx;
            margin-right: 20rpx;
            white-space: nowrap;
            image{
                width: 100rpx;
                height: 100rpx;
            }
        }
    }

    .scrollView {
        width: 600rpx;
    }
}
</style>
