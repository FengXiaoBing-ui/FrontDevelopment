<template>
    <view class="content bg-gray">
        <!--顶部标题-->
        <u-navbar :border="false" :fixed="true" :autoBack="true"
                  :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
                  :safeAreaInsetTop="false">
            <view slot="left" class="u-nav-slot">
                <text style="font-size: 36rpx" class="cuIcon-back"></text>
            </view>
            <view slot="center" class="u-nav-slot">
                <view class="text-lg">品鉴会报销</view>
                <view style="width:750rpx" class="search bg-white">
                    <view class="bg-white padding-lr">
                        <view class="flex align-center margin-top-sm bg-gray" style="border-radius: 4px">
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
                        <u-tabs itemStyle="height:88rpx;white-space:nowrap;"
                                :scrollable="false"
                                activeStyle="font-size:34rpx;font-weight:bold" inactiveStyle=" font-size:25rpx; color:gray;"
                                lineColor="red" :list="activityList" @click="tabSelect"></u-tabs>
                    </view>
                </view>
            </view>
        </u-navbar>
        <!--头部-->
        <view class="wrap">
            <view   class="padding-lr-sm contentBox" >
                <!--商品列表-->
                <view class="product margin-top-sm">
                    <view class="product margin-top-sm">
                        <view class=" flex flex-wrap justify-between">
                            <view class="w100 flex justify-between align-center padding-bottom">
                                <view class="text-xl text-bold">9月 <text class="cuIcon-unfold margin-left-xs"></text> </view>
                                <view  @click="show=true"> <text class="cuIcon-filter"></text> 筛选 · 已选 0</view>
                            </view>
                        </view>
                    </view>
                    <view class="flex flex-wrap justify-between">
                        <view @click="jumpDetails" v-for="(item,index) in productList" :key="index" style="width: 100%"
                              class="whiteBoxShadow margin-bottom-sm">
                            <view class="text-bold flex justify-between">
                                <view class="flex">
                                    <view class="radius" style="width: 4px;height: 18px;background-color: red"></view>
                                    <view class="margin-left-sm">{{ item.title }}</view>
                                </view>
                                <view class="text-red">{{ activityList[item.status].name }}</view>
                            </view>
                            <view class="u-border-bottom margin-tb"></view>
                            <view class="flex align-center margin-bottom-sm">
                                <view class="text-gray">品鉴会名称：</view>
                                <view>{{ item.region }}</view>
                            </view>
                            <view class="flex align-center margin-bottom-sm">
                                <view class="text-gray">申请商品：</view>
                                <view>{{ item.product }}</view>
                            </view>
                            <view class="flex align-center margin-bottom-sm">
                                    <view class="text-gray">申请费用：</view>
                                    <view class="text-red">{{ item.agentProduct }}</view>
                            </view>
                            <view class="flex align-center margin-bottom-sm">
                                    <view class="text-gray">举办日期：</view>
                                    <view>{{ item.term }}</view>
                            </view>
                            <view class="flex align-center  margin-bottom-sm">
                                <view class="text-gray">剩余次数：</view>
                                <view>{{ item.Reimbursement }}</view>
                            </view>
                            <view class="u-border-bottom margin-tb"></view>
                            <view class="text-gray margin-top-sm">申请时间：{{ item.date }}</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view v-if=" agentAndService" class="bg-white w100 foot padding">
            <button @click="gotoPath('pages/admin/tastingMeeting/applyReimbursement')" class="bg-red cu-btn w100">品鉴会申请报销</button>
        </view>
        <u-popup :show="show" :round="10" mode="right" @close="close" @open="open">
            <view class="scrollViewBox" :style="'padding-top: ' + (CustomBar) + 'px;transform:rotate(360deg);'">
                <scroll-view @touchmove.stop class="scrollView" scroll-y="true" :style="{ '--ScreenHeight': (ScreenHeight-CustomBar) + 'px' }">
                    <ScreenAlcohol title="价格" @getInfo="screenData.price = $event" :alcoholList="priceList"></ScreenAlcohol>
                    <ScreenAlcohol title="香型" @getInfo="screenData.scent = $event" :alcoholList="fragranceList"></ScreenAlcohol>
                    <ScreenAlcohol title="产地" @getInfo="screenData.place = $event" :alcoholList="placeList"></ScreenAlcohol>
                    <ScreenAlcohol title="度数" @getInfo="screenData.degrees = $event" :alcoholList="degreesList"></ScreenAlcohol>
                </scroll-view>
                <view class="botBtn bg-white padding-sm flex align-center justify-between">
                    <text>已选(1)</text>
                    <view class="flex align-center">
                        <button class="cu-btn u-border bg-white radius margin-right-sm" @click="close">清空</button>
                        <button class="cu-btn bg-red radius" @click="close">确定</button>
                    </view>
                </view>
            </view>
        </u-popup>
    </view>
</template>

<script>
import ScreenAlcohol from '/src/pages/agent/components/fxb-screen-alcohol'
import { mapState } from "vuex";
export default {
    name: "adminIndex",
    components: {
        ScreenAlcohol
    },
    data() {
        return {
            screenData:{},
            priceList: [
                '不限', '0~99元', '100~299元', '300~599元', '600~999元', '1000~1999元', '2000元以上'
            ],
            fragranceList: [
                '不限', '酱香型', '浓香型', '清香型', '馥郁香型', '兼香型', '凤香型', '老白干香型'
            ],
            placeList: [
                '不限', '四川省', '陕西省', '云南省', '山东省', '北京市'
            ],
            degreesList: [
                '不限', '35°以下', '35°~39°', '40°~49°', '50°以上'
            ],
            show:false,
            status:0,
            selectShow: false,
            statusIndex: 0,
            screenResult: "",
            activityList: [
                {
                    name: "全部"
                },
                {
                    name: "待审核"
                },
                {
                    name: "未通过"
                },
                {
                    name: "进行中"
                },
                {
                    name: "已结束"
                },

            ],
            productList: [],

        };
    },
    computed: {
        ...mapState("index", ["agentAndService"])
        //agentAndService：服务商和代理商的状态 false:服务商,true:代理商
    },
    onLoad(option) {
        this.status = option.status
    },
    onShow() {
        this.getProductList();
    },
    methods: {
        close(){
            this.show=!this.show
        },
        gotoPath(path){
            uni.navigateTo({
                url:path
            })
        },
        getProductList(count = 2) {
            this.productList = [];
            for (let i = 0; i < count; i++) {
                this.productList.push({
                    title: "申请单号：156468545222",
                    num: "213234233543",
                    product: "东方国宾·尊致53°酱香型白酒500ml瓶装",
                    grad: "酱香型  53°",
                    agentProduct: "￥275.00",
                    region: "2022观山湖区白酒品鉴会",
                    name: "张某人",
                    Reimbursement: "23次",
                    term: "2022-08-30 至 2025-08-29",
                    date: "2022-08-30 12:23:23",
                    status: this.statusIndex
                });
            }
        },
        dateChange(d) {
            uni.showToast({
                icon: "none",
                title: d
            });
        },
        tabSelect(e) {
            this.statusIndex = e.index;
            this.getProductList(Math.ceil(Math.random() * 6));
        },
        selectClick(e) {
            console.log(e.name);
        },
        jumpDetails() {
            uni.navigateTo({
                url: "pages/admin/tastingMeeting/adminDetails?listStatus="+this.statusIndex
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.botBtn{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}
.search {
    position: fixed;
    width: 100%;
    top: var(--CustomBar-1) !important;
    left: 0;
}

/deep/ .u-navbar {
    .u-navbar__content {
        height: var(--CustomBar) !important;
        padding-top: var(--StatusBar);
        border-bottom: 0;

        .u-navbar__content__left,
        .u-navbar__content__right {
            margin-top: var(--StatusBar);
        }
    }
}

.contentBox {
    position: relative;
    top: calc(var(--status-bar-height) + 240rpx);
    padding-bottom: 40rpx;
}

.header {
    position: fixed;
    left: 0;
    z-index: 1;
}

.boxShadow {
    padding: 30rpx 20rpx;
    background: white;
    border-radius: 10rpx;
    box-shadow: 4rpx 4rpx 16rpx #e6dee6;
}
.foot{
    position: fixed;
    bottom: 0;
    width: 100%;
}
.scrollViewBox{
    width: 600rpx;
    box-sizing: border-box;
    .scrollView{
        height: var(--ScreenHeight) !important;
        padding-bottom: 104rpx;
    }
    .botBtn{
        width: 100%;
        position: fixed;
        bottom: 0;
        right: 0;
    }
}
</style>
