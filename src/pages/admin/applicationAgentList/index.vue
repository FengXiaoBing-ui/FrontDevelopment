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
                <view class="text-lg">代理申请管理</view>
                <view style="width:750rpx" class="search bg-white">
                    <view class="bg-white padding-lr">
                        <view class="flex align-center margin-tb-sm bg-gray" style="border-radius: 4px">
                            <text class="cuIcon-search text-red"
                                  style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
                            <input
                                class="text-df w75"
                                type="text"
                                placeholder-class="text-gray"
                                placeholder="请输入政策、商品名称进行名搜索"
                                confirm-type="search"

                            />
                        </view>
                        <!--产品列表导航-->
                        <u-tabs itemStyle="height:88rpx;white-space:nowrap;"
                                activeStyle="font-weight:bold"
                                :scrollable="false"
                                inactiveStyle="color:gray;" lineColor="#E54D42" :list="activityList"
                                @click="tabSelect"></u-tabs>
                    </view>
                </view>
            </view>
        </u-navbar>
        <!--头部-->
        <view class="wrap" >
            <view     class="padding-lr-sm contentBox">
                <!--商品列表-->
                <view class="product margin-top-sm">
                    <view class="flex flex-wrap justify-between">
                        <view @click="jumpDetails(item.status)" v-for="(item,index) in productList" :key="index" class="whiteBoxShadow w100 margin-bottom-sm">
                            <view class="flex justify-between">
                                <view class="text-bold flex align-center">
                                    <view class="textBorderLeft"></view>
                                    <view style="transform: translateX(-10rpx)">{{ item.title }}</view>
                                </view>
                                <view class="text-bold" :class="{'text-orange':item.status==1,'text-red':item.status==2,'text-blue':item.status==3,'text-gray':item.status==4}">{{ activityList[item.status].name }}</view>
                            </view>
                            <view class="u-border-bottom margin-tb"></view>
                            <view class="flex align-center margin-bottom-xs">
                                <view class="text-gray">代理商品：</view>
                                <view>{{ item.product }}</view>
                            </view>
                            <view class="flex align-center justify-between margin-bottom-xs">
                                <view class="flex align-center">
                                    <view class="text-gray">代理等级：</view>
                                    <view>{{ item.grad }}</view>
                                </view>
                                <view class="flex align-center">
                                    <view class="text-gray">结算方式：</view>
                                    <view>{{ item.agentProduct }}</view>
                                </view>
                            </view>
                            <view class="flex align-center margin-bottom-xs">
                                <view class="text-gray">代理区域：</view>
                                <view>{{ item.region }}</view>
                            </view>
                            <view class="u-border-bottom margin-tb"></view>
                            <view class="flex justify-between align-center">
                                <view class="text-gray text-sm">申请时间：{{ item.date }}</view>
                                <button class="cu-btn bg-red radius sm">
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

export default {
    data() {
        return {
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
                    name: "待激活"
                },
                {
                    name:"已过期"
                },
            ],
            productList: []
        };
    },
    onLoad(option) {
    },
    onShow() {
        this.getProductList();
    },
    methods: {
        getProductList(count = 2) {
            this.productList = [];
            for (let i = 0; i < count; i++) {
                this.productList.push({
                    title: "申请编号：156464131231321",
                    num: "213234233543",
                    product: "东方国宾·尊致53°",
                    grad: "镇/街道代理",
                    agentProduct: "现结",
                    region: "贵州省贵阳市关山湖区世纪城街道",
                    term: "2022-08-30 至 2025-08-29",
                    date: "2022-08-30 12:23:23",
                    status: this.statusIndex==0?(Math.floor(Math.random() * 4)+1):this.statusIndex
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
            this.statusIndex = e.index;
            this.getProductList(Math.ceil(Math.random() * 6));
        },
        selectClick(e) {
            console.log(e.name);
        },
        jumpDetails(status) {
            uni.navigateTo({
                url: "/pages/admin/applicationAgentList/details?status=" + (status-1),
                fail: (err => {
                    console.log(err);
                })
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
</style>
