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
                <view class="text-lg">代理商审核</view>
                <view style="width:750rpx" class="search bg-white">
                    <view class="bg-white padding-lr">
                        <!--产品列表导航-->
                        <u-tabs itemStyle="height:88rpx;white-space:nowrap;" :scrollable="false" activeStyle="" inactiveStyle="color:gray;" lineColor="red" :list="activityList" @click="tabSelect"></u-tabs>

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
                        <view @click="jumpDetails(item.status)" v-for="(item,index) in productList" :key="index" style="width: 100%" class="whiteBoxShadow margin-top-sm">
                            <view class="flex justify-between">
                                <view class="text-bold flex align-center">
                                    <view class="textBorderLeft"></view>
                                    <view style="transform: translateX(-10rpx)">申请编号：{{ item.num }}</view>
                                </view>
                                <button class="cu-btn round line-red sm" :class="{'line-orange':item.status==1,'line-red':item.status==2,'line-blue':item.status==3,'line-gray':item.status==4}">{{ activityList[item.status].name }}</button>
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
                                    <view>现结</view>
                                </view>
                            </view>

                            <view class="flex align-center margin-bottom-xs">
                                <view class="text-gray">代理区域：</view>
                                <view>{{ item.region }}</view>
                            </view>
                            <view class="u-border-bottom margin-tb"></view>
                            <view class="flex justify-between align-center">
                                <view class="flex align-stretch">
                                    <u-avatar text="酒"></u-avatar>
                                    <view class="margin-left-sm flex flex-direction justify-between">
                                        <view>华中烟酒小卖部</view>
                                        <view class="text-gray">{{ item.date }}</view>
                                    </view>
                                </view>
                                <button class="cu-btn bg-red radius">查看详情</button>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import renDropdownFilter from "/src/components/ren-dropdown-filter/ren-dropdown-filter";

export default {
    name: "agentAudit",
    components: {
        renDropdownFilter
    },
    data() {
        return {
            selectShow: false,
            statusIndex:0,
            screenResult: "",
            activityList: [
                {
                  name:"全部"
                },
                {
                    name: "待审核"
                },
                {
                    name:"未通过"
                },
                {
                    name: "待激活"
                },
                {
                    name: "已过期"
                }
            ],
            productList: []
        };
    },
    onLoad(option) {
    },
    onShow() {
        this.getProductList()
    },
    methods: {
        getProductList(count = 4) {
            this.productList = [];
            for (let i = 0; i <= count; i++) {
                this.productList.push({
                    num: "213234233543",
                    unit: "贵阳市万隆烟酒小卖部（张东）",
                    grad: "镇/街道代理",
                    agentProduct: "东方国宾·尊致53°酱香型白酒500ml瓶装",
                    region: "贵州省贵阳市观山湖区世纪城街道",
                    term: "2022-08-30 至 2025-08-29",
                    date: "2022-08-30 12:23:23",
                    status: this.statusIndex==0?(Math.floor(Math.random() * 4)+1):this.statusIndex,
                    standard: i % 2
                });
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
            this.statusIndex = e.index
            this.getProductList(Math.floor(Math.random() * 8)+1)
        },
        selectClick(e) {
            console.log(e.name);
        },
        jumpDetails(status){
            uni.navigateTo({
                url:"/pages/admin/adminContract/agentAuditDetails?status="+(status-1)
            })
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
    top: calc(var(--status-bar-height) + 140rpx);
    padding-bottom: 40rpx;
}

.header {
    position: fixed;
    left: 0;
    z-index: 1;
}
</style>
