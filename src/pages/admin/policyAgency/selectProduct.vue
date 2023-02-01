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
                                placeholder="请输入商品名称进行搜索"
                                confirm-type="search"
                            />
                        </view>
                    </view>
                    <!--综合筛选-->
                    <view class="filter flex justify-between padding-bottom" v-show="statusIndex===0">
                        <view class="root">
                            <ren-dropdown-filter :filterData="filterData" :defaultIndex="defaultIndex" @ed="ed"
                                                 @onSelected="onSelected" @screenChange="screenChange">
                            </ren-dropdown-filter>
                        </view>
                    </view>
                </view>
            </view>
        </u-navbar>
        <!--内容-->
        <view class="">
            <view class="padding-lr-sm contentBox">
                <!--商品列表-->
                <view class="product">
                    <view class="whiteBoxShadow margin-top-sm" v-for="item in productList" :key="item.id" @click="addPolicy(item.id)">
                        <twoGoodsInfoCard
                            :goodsDegrees="item.goodsInfo?item.goodsInfo.controNetContent:''"
                            :goodsName="item.goodsName"
                            :goodsType="item.goodsInfo?item.goodsInfo.controAromaticType:'香型'"
                            :goodsVolume="item.goodsInfo?item.goodsInfo.controAlcohol:''"
                            :img-url="item.image[0]"
                            :retailPrice="item.goodsInfo?(item.goodsRetailPrice+''):'365'"
                            namePrice="零售价："
                        >
                        </twoGoodsInfoCard>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import twoGoodsInfoCard from "../../../components/erp/twoGoodsInfoCard";
import renDropdownFilter from "../../../components/ren-dropdown-filter/ren-dropdown-filter";
export default {
    name: "selectProduct",
    components: {
        renDropdownFilter,
        twoGoodsInfoCard,
    },
    data() {
        return {
            value: 0,
            selectShow: false,
            statusIndex: 0,
            popupIndex: 0,
            screenResult: "",
            filterData: [
                [
                    { text: "商品分类", value: "" },
                    { text: "白酒", value: 1 },
                    { text: "啤酒", value: 2 },
                    { text: "黄酒", value: 3 },
                    { text: "葡萄酒", value: 4 },
                    { text: "洋酒", value: 5 },
                    { text: "收藏酒", value: 6 }
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
        };
    },
    onLoad(option) {
    },
    onShow() {
        this.getProductList();
    },
    methods: {
        addPolicy(id){
            uni.navigateTo({
                url: `/pages/admin/policyAgency/addPolicy?goodsId=${id}`
            });
        },
       async getProductList(count = 4) {
            const res = await this.$http.getGoodList();
            this.productList = res.data;
        },
        ed(res) {
            console.log(res);
        },
        onSelected(e) {
            this.getProductList(Math.floor(Math.random()*8)+1);
        },
        screenChange(e){
            this.getProductList(Math.floor(Math.random()*8)+1);
            console.log(e);
        },
        jumpDetails() {
            uni.navigateTo({
                url: "/pages/admin/adminProduct/productDetails"
            });
        },
        selectProduct(){
            console.log('ok');
            uni.navigateTo({
                url: "/pages/admin/policyAgency/addPolicy"
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.whiteBoxShadow{
    padding: 12rpx 24rpx;
}
.contentBox {
    position: relative;
    top: calc(var(--status-bar-height) + 240rpx);
    padding-bottom: 100rpx;
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