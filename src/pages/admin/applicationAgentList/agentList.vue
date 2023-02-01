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
                <view class="text-lg">申请列表</view>
                <view style="width:750rpx" class="search bg-white">
                    <view class="bg-white padding-lr">
                        <!--产品列表导航-->
                        <u-tabs itemStyle="width:20%;height:88rpx;white-space:nowrap;" activeStyle="font-size:30rpx;font-weight:bold" inactiveStyle="color:gray;font-size:24rpx" lineColor="red" :list="activityList" @click="tabSelect"></u-tabs>

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
                        <view @click="jumpDetails" v-for="(item,index) in productList" :key="index" style="width: 100%" class="whiteBoxShadow margin-bottom-sm">
                            <view class="text-bold flex justify-between">
                                <view style="width: 80%">{{ item.title }}</view>
                                <view class="text-red">{{ activityList[item.status].name }}</view>
                            </view>
                            <view class="u-border-bottom margin-tb"></view>
                            <view class="flex align-center margin-bottom-xs">
                                <view class="text-gray">代理商品：</view>
                                <view>{{ item.product }}</view>
                            </view>
                            <view class="flex align-center justify-between margin-bottom-xs">
                                <view class="flex align-center">
                                    <view class="text-gray">代理等级： </view>
                                    <view>{{ item.grad }}</view>
                                </view>
                                <view class="flex align-center">
                                    <view class="text-gray">代理商品：</view>
                                    <view>{{ item.agentProduct }}</view>
                                </view>
                            </view>
                            <view class="flex align-center margin-bottom-xs">
                                <view class="text-gray">代理区域：</view>
                                <view>{{ item.region }}</view>
                            </view>
                            <view class="u-border-bottom margin-tb"></view>
                            <view class="flex justify-between align-center">
                                <view class="text-gray">签约时间：{{ item.date }}</view>
                                <button class="cu-btn bg-white u-border radius">查看详情</button>
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
    name: "agentList",
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
                    name: "待审核"
                },
                {
                    name: "未通过"
                },
                {
                    name: "待签约"
                },
                {
                    name: "全部"
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
        getProductList(count = 2){
            this.productList = []
            for (let i = 0; i < count; i++){
                this.productList.push({
                    title: "东方国宾·尊致53°酒500ml酱香型代理申请",
                    num:"213234233543",
                    product:"东方国宾·尊致53°酱香型白酒500ml瓶装",
                    grad:"区/县级代理",
                    agentProduct:"3种",
                    region:"区贵州省贵阳市观山湖区世纪城街道",
                    term:"2022-08-30 至 2025-08-29",
                    date:"2022-08-30 12:23:23",
                    status:this.statusIndex
                })
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
            this.getProductList(Math.ceil(Math.random()*6))
        },
        selectClick(e) {
            console.log(e.name);
        },
        jumpDetails(){
            uni.navigateTo({
                url:"/pages/admin/applicationAgentList/details?status="+this.statusIndex,
                fail:(err => {
                    console.log(err);
                })
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
