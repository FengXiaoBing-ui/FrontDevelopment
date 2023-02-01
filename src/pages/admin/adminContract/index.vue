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
                <view class="text-lg">合同管理</view>
                <view style="width:750rpx" class="search bg-white">
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
                        <!--                        滚动标签-->
                        <u-tabs itemStyle="height:88rpx;white-space:nowrap" :scrollable="false"
                                activeStyle="font-weight:bold"
                                inactiveStyle="color:gray;" lineColor="#E54D42" :list="activityList"
                                @click="tabSelect"></u-tabs>
                    </view>
                </view>
            </view>
        </u-navbar>
        <!--头部-->
        <view class="wrap">
            <view class="padding-lr-sm contentBox">
                <!--商品列表-->
                <view class="product margin-top-sm">
                    <view class="flex flex-wrap justify-between">
                        <view @click="jumpDetails(item.standard,item.status)" v-for="(item,index) in productList" :key="index"
                              style="width: 100%" class="whiteBoxShadow margin-bottom-sm">
                            <view class="flex justify-between">
                                <view class="text-bold flex align-center">
                                    <view class="textBorderLeft"></view>
                                    <view style="transform: translateX(-10rpx)">{{ item.title }}</view>
                                </view>
                                <button class="cu-btn round line-red sm" :class="{'line-green':item.status==1,'line-red':item.status==2,'line-gray':item.status==3}">{{ activityList[item.status].status }}</button>
                            </view>
                            <view class="u-border-bottom margin-tb"></view>
                            <view class="flex align-center margin-bottom-xs">
                                <view class="text-gray">申请商品：</view>
                                <view>{{ item.agentProduct }}</view>
                            </view>
                            <view class="flex justify-between">
                                <view class="flex align-center margin-bottom-xs">
                                    <view class="text-gray">代理等级：</view>
                                    <view>{{ item.grad }}</view>
                                </view>
                                <view class="flex align-center margin-bottom-xs">
                                    <view class="text-gray">结算方式：</view>
                                    <view>{{ item.function }}</view>
                                </view>
                            </view>

                            <view class="flex justify-between align-center">
                                <view class="flex flex-sub align-center margin-bottom-xs">
                                    <view class="text-gray">代理区域：</view>
                                    <view>{{ item.region }}</view>
                                </view>
                                <view @click.stop="more(index)" style="font-size: 34rpx" :class="item.moreShow?'':'cuIcon-unfold'"></view>
                            </view>

                            <template v-if="item.moreShow">
                                <view class="flex justify-between align-center">
                                    <view class="flex flex-sub align-center margin-bottom-xs">
                                        <view class="text-gray">合同商品数量：</view>
                                        <view>{{ item.num }}</view>
                                    </view>
                                </view>
                                <view class="flex justify-between align-center">
                                    <view class="flex flex-sub align-center margin-bottom-xs">
                                        <view class="text-gray">合同金额：</view>
                                        <view class="text-red">￥{{ item.price }}</view>
                                    </view>
                                    <view @click.stop="more(index)" style="font-size: 34rpx" :class="item.moreShow?'cuIcon-fold':''"></view>
                                </view>
                            </template>

                            <view class="u-border-bottom margin-tb"></view>
                            <view class="flex justify-between align-center">
                                <!--                                <view class="text-gray">签约时间：{{ item.date }}</view>-->
                                <view v-if="!$store.state.index.agentAndService" class="flex align-stretch">
                                    <u-avatar :src="$config.IMG_SERVER+'/user/userImg.png'"></u-avatar>
                                    <view class="margin-left-sm flex flex-direction justify-between">
                                        <view>华中烟酒小卖部</view>
                                        <view class="text-gray">{{ item.date }}</view>
                                    </view>
                                </view>
                                <view v-else>
                                    <text class="text-gray">签约时间：2022-08-30 12:23:23</text>
                                </view>
                                <button class="cu-btn bg-red radius">
                                    <text class="cuIcon-attention"></text>
                                    <text class="margin-left-xs">查看详情</text>
                                </button>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import infoCard from "/src/components/fxb/fxb-info-card";
import boxTitle from "/src/pages/agent/components/fxb-box-title";

export default {
    name: "productList",
    components: {
        boxTitle,
        infoCard
    },
    data() {
        return {
            selectShow: false,
            statusIndex: 0,
            screenResult: "",
            activityList: [
                {
                    name: "全部",
                    status:"全部"
                },
                {
                    name: "进行中(31)",
                    status:"进行中"
                },
                {
                    name: "异常(3)",
                    status:"异常"
                },
                {
                    name: "已结束(13)",
                    status:"已结束"
                }
            ],
            productList: []
        };
    },
    onLoad(option) {
        this.getProductList(5);
    },
    onShow() {

    },
    methods: {
        more(index){
            this.productList[index].moreShow = !this.productList[index].moreShow
        },
        getProductList(count) {
            this.productList = [];
            for (let i = 0; i <= count; i++) {
                this.productList.push({
                    title: "合同编号：156464131231321",
                    num: "4800瓶",
                    unit: "贵阳市万隆烟酒小卖部（张东）",
                    grad: "区/县级代理",
                    function:"现结",
                    price:"983900.00",
                    agentProduct: "区东方国宾·尊致500ml",
                    region: "贵州省贵阳市关山湖区世纪城街道",
                    term: "2022-08-30 至 2025-08-29",
                    date: "2022-08-30 12:23:23",
                    status: this.statusIndex==0?(Math.floor(Math.random() * 3)+1):this.statusIndex,
                    standard: i % 2,
                    moreShow:false
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
            let count = Math.floor(Math.random() * 8);
            this.getProductList(count);
        },
        selectClick(e) {
            console.log(e.name);
        },
        jumpDetails(standard,status) {
            console.log(status);
            uni.navigateTo({
                url: "/pages/admin/adminContract/contractDetail?status=" + (status-1) + "&standard=" + standard
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.search {
    position: fixed;
    width: 100%;
    top: var(--CustomBar-1) !important;
    left: 0;
}
.textBorderLeft{
    width:8rpx;
    height: 30rpx;
    background: #E54D42;
    border-radius: 8rpx;
    transform: translateX(-26rpx);
}
/deep/.u-tabs__wrapper__nav__line{
    bottom: 0;
    height: 4px !important;
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
    top: calc(var(--status-bar-height) + 260rpx);
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
</style>
