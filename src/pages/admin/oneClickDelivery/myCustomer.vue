<template>
    <view class="content bg-gray">
        <!--顶部标题-->
        <u-navbar :border="false" :fixed="true" :autoBack="true" @rightClick="addCustomer"
                  :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
                  :safeAreaInsetTop="false">
            <view slot="left" class="u-nav-slot">
                <text style="font-size: 36rpx" class="cuIcon-back"></text>
            </view>
            <view slot="center" class="u-nav-slot">
                <view class="text-lg">我的客户</view>
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
                    </view>
                </view>
            </view>
            <view slot="right" class="u-nav-slot">
                <text>新增客户</text>
            </view>
        </u-navbar>
        <!--内容-->
        <view class="wrap">
            <view class="padding-lr contentBox">
                <!--商品列表-->
                <view class="product">
                    <view class="flex flex-wrap justify-between">
                        <view class="boxShadow margin-bottom-sm" @click="" v-for="item in 6" :key="item">
                            <view class="flex align-center justify-between">
                                <view class="flex align-center">
                                    <text class="username text-lg text-bold">王晓刚</text>
                                    <view class="userPhone bg-gray">
                                        <text class="cuIcon-mobile"></text>
                                        <text class="text-gray">18690728686</text>
                                    </view>
                                </view>
                                <text class="text-gray">录入时间：2022-01-25</text>
                            </view>
                            <view class="flex margin-top">
                                <view style="width: 26%;" class="text-gray">收货地址：</view>
                                <view style="width: 74%;">贵州省贵阳市观山湖区千灵山路德福中心A3栋6楼10号</view>
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
    name: "myCustomer",
    components: {
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
        tabSelect(e) {
            this.statusIndex = e.index
            if (e.index==0){
                this.getProductList()
            }
            if (e.index==1){
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
                ]
            }
        },
        selectClick(e) {
            console.log(e.name);
        },
        jumpDetails(){
            uni.navigateTo({
                url:"/pages/admin/adminProduct/productDetails"
            })
        },
        addCustomer(){
            uni.navigateTo({
                url:"/pages/admin/oneClickDelivery/addCustomer"
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.userPhone {
    padding: 10rpx;
    border-radius: 20rpx 0 20rpx 0;
    margin-left: 12rpx;
}

.rightTag {
    padding: 4rpx 16rpx;
    border-radius: 20rpx 0 0 0;
    transform: translateX(20rpx);
}
.contentBox {
    position: relative;
    top: calc(var(--status-bar-height) + 180rpx);
    padding-bottom: 40rpx;
}
.boxShadow {
    padding: 30rpx 20rpx;
    background: white;
    border-radius: 10rpx;
    box-shadow: 4rpx 4rpx 16rpx #e6dee6;
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
