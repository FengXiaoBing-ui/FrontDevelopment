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
                <view class="text-lg">我的代理商</view>
                <view style="width:750rpx" class="search bg-white">
                    <view class="bg-white padding-lr-sm">
                        <view class="flex align-center margin-tb-sm bg-gray" style="border-radius: 4px">
                            <text class="cuIcon-search text-gray"
                                  style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
                            <input
                                class="text-df"
                                type="text"
                                placeholder-class="text-gray"
                                placeholder="输入代理商名称、手机号进行搜索"
                               style="min-width: 78%;"
                                confirm-type="search"
                            />
                        </view>
                        <view class="margin-top">
                            <boxTitle title="销售统计"></boxTitle>
                          <view class="try" >
                            <view class="flex justify-between">
                              <view class="text-center margin-top   padding-lr">
                                <view class="text-white text-lg margin-top-xs">3200瓶</view>
                                <view class="margin-top-sm text-white" style="white-space: nowrap">本月成交总量</view>
                              </view>
                              <view style="width: 1rpx;height: 27px;margin-left: 10px;margin-top: 30px" class="bg-gray margin-lr-xs margin-left"></view>
                              <view class="text-center margin-top   padding-lr">
                                <view class="text-white text-lg margin-top-xs">3.8万元</view>
                                <view class="margin-top-sm text-white"  style="white-space: nowrap">本月成交总量</view>
                              </view>
                              <view style="width: 1rpx;height: 27px;margin-top: 30px" class="bg-gray margin-right "></view>
                              <view class="text-center margin-top margin-right ">
                                <view class="text-white text-lg margin-top-xs">34人</view>
                                <view class="margin-top-sm text-white"  style="white-space: nowrap">本月新增代理</view>
                              </view>
                            </view>
                            <view>
                            </view>
                          </view>

                        </view>
                    </view>
                </view>
            </view>
        </u-navbar>
        <!--内容-->
        <view class="wrap " style="margin-top: 45px">
            <view class="padding-lr contentBox">
              <view class="w100 flex justify-between align-start ">
                <view class="text-xl " >2022年9月<text class="cuIcon-unfold text-bold margin-left-xs" style="font-size: 20px"></text>
                </view>
                <view>
                  <text class="cuIcon-filter text-gray"></text>
                  筛选 · 已选 0
                </view>
              </view>
            </view>
        </view>
                <!--商品列表-->
              <view class="wrap">
                <view class="padding-lr contentBox">
                <view class="product margin-top-sm">
                    <view class="whiteBoxShadow flex flex-wrap justify-between">
<!--                        <view class="w100 flex justify-between align-center padding-bottom">-->
<!--                            <view>2022年9月 <text class="cuIcon-unfold margin-left-xs"></text> </view>-->
<!--                            <view> <text class="cuIcon-filter"></text> 筛选 · 已选 0</view>-->
<!--                        </view>-->
                        <view class="w100 u-border-bottom padding-tb" @click="" v-for="item in 6" :key="item" @click="clickCard"  style="transform: translateY(-10px)">
                            <view class="flex align-center justify-between">
                                <view class="flex align-center justify-between">
                                  <image src="/static/integralCommutation/friend.png" style="width: 12px;height: 13px"  mode="aspectFill"></image>
                                    <text class="username text-lg text-bold margin-left-xs">王晓刚</text>
                                    <view class="userphone text-gray">
                                      <image src="/static/integralCommutation/mobilefill.png" style="width: 7px;height: 11.73px;margin-top:8rpx"></image>
                                      <text class="margin-left-xs text-black">18690728686</text>
                                    </view>
                                </view>
                                <text class="text-gray">入驻时间：2022-01-25</text>
                            </view>
                            <view class="flex margin-tb">
                              <image src="/static/integralCommutation/fangzi.png" style="width: 14px;height: 15px"  mode="aspectFill"></image>
                                <view style="width: 24%;" class="text-gray margin-left-xs">公司名称：</view>
                                <view style="width: 74%;">贵州好酒选电子商务有限公司</view>
                            </view>
                            <view class="flex justify-between align-center">
                              <image src="/static/integralCommutation/fuzi.png" style="width: 14px;height: 15px"  mode="aspectFill"></image>
                                <view style="margin-right: 120rpx" class="text-gray">已签合同：<text class="text-black" style="margin-right: 45px"> 3份</text></view>
                                <view class="text-black">成交数：<text class="text-orange text-lg"> 2536瓶 </text></view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>

import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "myAgent-index",
    components: {
        boxTitle
    },
    data() {
        return {
            selectShow: false,
            statusIndex:0,
            screenResult: "",
            productList: []
        };
    },
    onLoad(option) {
    },
    onShow() {
        this.getProductList()
    },
    methods: {
        clickCard(){
            uni.navigateTo({
                url:'pages/admin/myAgent/agentInfo'
            })
        },
        getProductList(){
            this.productList = [
                {
                    title: "飞天茅台53°瓶装酱香型 500ml",
                    alcohol:"53℃",
                    price: "365.00",
                    capacity:"500ml",
                    num:"2300",
                    imgUrl: require("/src/static/bottle/99.jpeg")
                },
                {
                    title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
                    aromaticType: "酱香型",
                    alcohol:"53℃",
                    price: "365.00",
                    capacity:"500ml",
                    num:"2300",
                    imgUrl: require("/src/static/bottle/88.jpeg")
                },
                {
                    title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
                    aromaticType: "酱香型",
                    alcohol:"53℃",
                    price: "365.00",
                    capacity:"500ml",
                    num:"2300",
                    imgUrl: require("/src/static/bottle/99.jpeg")
                },
                {
                    title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
                    aromaticType: "酱香型",
                    alcohol:"53℃",
                    price: "365.00",
                    capacity:"500ml",
                    num:"2300",
                    imgUrl: require("/src/static/bottle/88.jpeg")
                }
            ]
        },
        addProduct(){
            uni.navigateTo({
                url:"/pages/admin/adminProduct/addProduct"
            })
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
        selectClick(e) {
            console.log(e.name);
        },
        jumpDetails(){
            uni.navigateTo({
                url:"/pages/admin/adminProduct/productDetails"
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.userphone {
    padding: 10rpx;
    border-radius: 20rpx 0 20rpx 0;
    margin-left: 12rpx;
}
.try {
  width: 715rpx;
  height: 180rpx;
  background: linear-gradient(360deg, #F37B1D 0%, #FFD581 100%);
  box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.16);
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
}
.rightTag {
    padding: 4rpx 16rpx;
    border-radius: 20rpx 0 0 0;
    transform: translateX(20rpx);
}
    .contentBox {
        position: relative;
        top: calc(var(--status-bar-height) + 360rpx);
        padding-bottom: 20rpx;
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
</style>
