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
                <view class="text-lg">选择商品</view>
                <view style="width:750rpx" class="search bg-white">
                    <view class="bg-white padding-lr">
                        <view class="flex align-center margin-tb-sm bg-gray" style="border-radius: 4px">
                            <text class="cuIcon-search text-red"
                                  style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
                            <input
                                class="text-df"
                                type="text"
                                placeholder-class="text-gray"
                                placeholder="请输入商品名称、编号进行名搜索"
                                confirm-type="search"
                               style="min-width: 100%;"
                            />
                        </view>
                    </view>
                    <!--综合筛选-->
                    <view class="filter flex justify-between padding-bottom" v-show="statusIndex===0">
                        <view class="root">
                            <ren-dropdown-filter :filterData="filterData" :defaultIndex="defaultIndex" @ed="ed"
                                                 @dateChange="dateChange">
                            </ren-dropdown-filter>
                        </view>
                    </view>
                </view>
            </view>
        </u-navbar>
        <!--内容-->
        <view class="wrap">
            <view class="padding-sm contentBox">
                <!--商品列表-->
                <view class="product margin-top-sm">
                    <view class="flex flex-wrap justify-between">
                        <u-checkbox-group class="w100" placement="column">
                            <view v-for="(item,index) in productList" :key="index"
                                  class="whiteBoxShadow margin-bottom-sm flex align-center w100">
                                    <twoGoodsInfoCard
                                        goods-name="飞天茅台53°瓶装酱香型 500ml"
                                        goods-type="酱香型"
                                        goodsDegrees="49"
                                        goodsVolume="500"
                                        img-url="/productDetails/Slice%201.png"
                                        retail-price="389"
                                        name-price="代理价："
                                    >
                                    </twoGoodsInfoCard>
                                    <u-checkbox shape="circle" activeColor="red"></u-checkbox>
                            </view>
                        </u-checkbox-group>

                    </view>
                </view>

<!--                <view class="botBtn bg-white padding-xs flex justify-between align-center">-->
<!--                    <view class="flex-treble">已选：10</view>-->
<!--                    <button class="cu-btn bg-red radius flex-sub">确认</button>-->
<!--                </view>-->
            </view>
        </view>
      <view class="">
        <view class="flex justify-between padding-tb botPayBtn ">
          <view class="text-lg">合计：<text class="text-red">￥450.00</text></view>
          <button  class="cu-btn bg-red margin-right try">确认支付</button>
        </view>
      </view>
    </view>
</template>

<script>
import twoGoodsInfoCard from "/src/components/erp/twoGoodsInfoCard";

export default {
    name: "selectProduct",
    components: {
        twoGoodsInfoCard
    },
    data() {
        return {
            value: 0,
            selectShow: false,
            statusIndex: 0,
            popupIndex: 0,
            screenResult: "",
            activityList: [
                {
                    name: "已添加"
                },
                {
                    name: "待审核"
                },
                {
                    name: "未通过"
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
            productList: [],
            show: false
        };
    },
    onLoad(option) {
    },
    onShow() {
        this.getProductList();
    },
    methods: {
        open() {
            this.show = true;
        },
        close() {
            this.show = false;
            // console.log('close');
        },
        deleteProduct() {
            this.show = false;
        },
        operationProduct(index) {
            this.popupIndex = index;
            this.show = true;
        },
        getProductList() {
            this.productList = [
                {
                    title: "飞天茅台53°瓶装酱香型 500ml",
                    aromaticType: "酱香型",
                    alcohol: "53℃",
                    price: "365.00",
                    capacity: "500ml",
                    num: "2300",
                    imgUrl: require("/src/static/bottle/99.jpeg")
                },
                {
                    title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
                    aromaticType: "酱香型",
                    alcohol: "53℃",
                    price: "365.00",
                    capacity: "500ml",
                    num: "2300",
                    imgUrl: require("/src/static/bottle/88.jpeg")
                },
                {
                    title: "飞天茅台53°瓶装酱香型 500ml",
                    aromaticType: "酱香型",
                    alcohol: "53℃",
                    price: "365.00",
                    capacity: "500ml",
                    num: "2300",
                    imgUrl: require("/src/static/bottle/99.jpeg")
                },
                {
                    title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
                    aromaticType: "酱香型",
                    alcohol: "53℃",
                    price: "365.00",
                    capacity: "500ml",
                    num: "2300",
                    imgUrl: require("/src/static/bottle/99.jpeg")
                },
                {
                    title: "飞天茅台53°瓶装酱香型 500ml",
                    aromaticType: "酱香型",
                    alcohol: "53℃",
                    price: "365.00",
                    capacity: "500ml",
                    num: "2300",
                    imgUrl: require("/src/static/bottle/99.jpeg")
                },
                {
                    title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
                    aromaticType: "酱香型",
                    alcohol: "53℃",
                    price: "365.00",
                    capacity: "500ml",
                    num: "2300",
                    imgUrl: require("/src/static/bottle/88.jpeg")
                }
            ];
        },
        addProduct() {
            uni.navigateTo({
                url: "/pages/admin/adminProduct/addProduct"
            });
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
            if (e.index == 0) {
                this.getProductList();
            }
            if (e.index == 1) {
                this.productList = [
                    {
                        title: "飞天茅台53°瓶装酱香型 500ml",
                        alcohol: "53℃",
                        price: "365.00",
                        capacity: "500ml",
                        num: "2300",
                        imgUrl: require("/src/static/bottle/99.jpeg")
                    },
                    {
                        title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
                        aromaticType: "酱香型",
                        alcohol: "53℃",
                        price: "365.00",
                        capacity: "500ml",
                        num: "2300",
                        imgUrl: require("/src/static/bottle/88.jpeg")
                    }
                ];
            }
        },
        selectClick(e) {
            console.log(e.name);
        },
        jumpDetails() {
            uni.navigateTo({
                url: "/pages/admin/adminProduct/productDetails"
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.contentBox {
    position: relative;
    top: calc(var(--status-bar-height) + 240rpx);
    padding-bottom: 150rpx;
}
.botBtn{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
}

.search {
    position: fixed;
    width: 100%;
    top: var(--CustomBar-1) !important;
    left: 0;
}
.botPayBtn {
  width: 100%;
  height: 69px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: white;
  z-index: 1;
  box-shadow: 4px 4px 14px #cccccc;
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
