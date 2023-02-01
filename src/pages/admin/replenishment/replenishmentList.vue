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
<!--                <view class="text-lg">补货申请</view>-->
                <u-search style="width: 500rpx" placeholder="输入代理商名称、手机号进行搜索" :showAction="false"></u-search>
                <view style="width:750rpx" class="search bg-white">
                    <view class="bg-white padding-lr padding-tb-sm">
<!--                        &lt;!&ndash;产品列表导航&ndash;&gt;-->
<!--                        <u-tabs itemStyle="height:88rpx;white-space:nowrap;"-->
<!--                                activeStyle="font-weight:bold"-->
<!--                                :scrollable="false"-->
<!--                                inactiveStyle="color:gray;" lineColor="#E54D42" :list="activityList"-->
<!--                                @click="tabSelect"></u-tabs>-->
                        <view class="flex justify-between align-center">
                            <view v-for="(item,index) in activityList" :key="index+'a'" @click="tabSelect(index)" class="padding-lr-sm flex flex-direction align-center">
                                <view style="width: 50rpx;height: 50rpx" class="t-icon" :class="'t-icon-'+item.icon"></view>
                                <view class="margin-top-xs" :class="statusIndex===index?'text-red':''">{{ item.name }}</view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view slot="right" class="u-nav-slot text-gray">
                <text class="cuIcon-filter"></text>
                <text>筛选</text>
            </view>
        </u-navbar>
        <!--头部-->
        <view class="wrap">
            <view class="padding-tb-sm contentBox">
                <!--商品列表-->
                <view class="product margin-top-sm">
                    <view class="flex flex-wrap justify-between">
                        <view @click="jumpDetails(item.status)" v-for="(item,index) in productList" :key="index" class="whiteBoxShadow w100 margin-bottom-sm">
                            <view class="flex justify-between margin-bottom">
                                <view class="flex align-center text-gray">
                                    <view>{{ item.title }}</view>
                                    <text @click.stop="copy(item.title)" class="cuIcon-copy"></text>
                                </view>
                                <button class="cu-btn round line-red sm" :class="{
                                    'line-orange':item.status==1,
                                    'line-green':item.status==2,
                                    'line-orange':activityList[item.status].name=='待审核',
                                    'line-red':activityList[item.status].name=='未通过',
                                    'line-blue':activityList[item.status].name=='待支付',
                                    'line-green':activityList[item.status].name=='已完成',
                                }">{{ activityList[item.status].name }}</button>
                            </view>
                            <view class="flex align-center margin-bottom-xs">
                                <view class="text-gray"> <text class="cuIcon-goods margin-right-xs"></text> 补货商品：</view>
                                <view>{{ item.product }}</view>
                            </view>
                            <view class="flex align-center margin-bottom-xs">
                                <view class="text-gray">补货数量：</view>
                                <view>{{ item.grad }}</view>
                            </view>
                            <view v-if="!$store.state.index.agentAndService" class="flex align-center margin-bottom-xs">
                                <view class="text-gray">申请人：</view>
                                <view>{{ item.region }}</view>
                            </view>
                            <view class="flex align-center margin-bottom-xs">
                                <view class="text-gray">提交时间：</view>
                                <view>{{ item.region }}</view>
                            </view>
                            <view class="margin-top-sm">
                                <view>
                                    <text class="text-df">共计:</text>
                                    <text class="text-red text-lg">￥500000.00</text>
                                </view>
                                <view class="text-gray text-sm" >2022-08-31 12:12:56</view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view v-if="$store.state.index.agentAndService" class="botBtn padding bg-white">
            <button @click="addGoods" class="cu-btn bg-red radius w100">新增补货</button>
        </view>
    </view>
</template>

<script>
import convertCurrency from "/src/utils/dataFormat/convertCurrency"
import { mapState } from "vuex"
export default {
    name:"replenishmentList",
    data() {
        return {
            selectShow: false,
            statusIndex: 0,
            screenResult: "",
            activityList: [
                {
                    name: "全部",
                    icon:"quanbu"
                },
                {
                    name: "进行中",
                    icon:"jinhangzhong1"
                },
                {
                    name:"已完成",
                    icon:"yiwancheng"
                },
            ],
            productList: []
        };
    },
    computed:{
    ...mapState('index',['agentAndService']),
    },
    onLoad(option) {
        if (this.agentAndService){
            this.activityList = [
                {
                    name: "全部",
                    icon:"quanbu"
                },
                {
                    name: "进行中",
                    icon:"jinhangzhong1"
                },
                {
                    name:"已完成",
                    icon:"yiwancheng"
                },
            ]
        }else {
            this.activityList = [
                {
                    name: "全部",
                    icon:"quanbu"
                },
                {
                    name: "待审核",
                    icon:"jinhangzhong1"
                },
                {
                    name:"未通过",
                    icon:"weitongguo1"
                },
                {
                    name: "待支付",
                    icon:"daizhifu"
                },
                {
                    name:"已完成",
                    icon:"yiwancheng"
                },
            ]
        }
    },
    onShow() {
        this.getProductList();
    },
    methods: {
        convertCurrency,
        copy(text){
          uni.setClipboardData({
              data:text,
              success:(res) => {
                  uni.showToast({
                      title:"内容已复制",
                      icon:"none"
                  })
              }
          })
        },
        getProductList(count = 2) {
            let num = this.agentAndService?2:4
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
                    status: this.statusIndex==0?(Math.floor(Math.random() * num)+1):this.statusIndex
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
            this.statusIndex = e;
            this.getProductList(Math.ceil(Math.random() * 6));
        },
        selectClick(e) {
            console.log(e.name);
        },
        addGoods() {
            uni.navigateTo({
                url:"/pages/admin/agentContractDeliverGoods/deliverGoodsToExamine"
            })
        },
        jumpDetails(status) {
            if (this.agentAndService){
                uni.navigateTo({
                    url: "/pages/admin/replenishment/replenishmentDetails?status=" + status,
                    fail: (err => {
                        console.log(err);
                    })
                });
                return
            }
            uni.navigateTo({
                url: "/pages/admin/replenishment/sunOrderDetails?status=" + (status-1)
            });

        }
    }
};
</script>

<style lang="scss" scoped>
.botBtn{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
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
    top: calc(var(--status-bar-height) + 190rpx);
    padding-bottom: 80rpx;
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
