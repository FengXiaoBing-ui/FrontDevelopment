<template>
    <view>
        <u-navbar :autoBack="true" title="选择商品"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`" class="bg-white padding-tb">
            <view class="padding-lr">
                <u--input
                    border="false"
                    class="bg-gray"
                    placeholder="请输入商品名称进行搜索"
                    prefixIcon="search"
                    prefixIconStyle="font-size: 22px;color: #909399"
                ></u--input>
            </view>
        </view>
        <view class="margin-tb padding-lr">
            <view v-for="item in List" :key="item.goodsID" class="whiteBoxShadow  flex justify-between align-stretch  margin-top "
                  @click="selectGood">
                <view>
                    <view class="flex align-center">
                        <view class="">
                            <fxbImage
                                src="/productDetails/Slice%201.png"
                                style="width:130rpx;height:130rpx"></fxbImage>
                        </view>
                        <view class="w100 margin-left-sm">
                            <view class="text-bold">{{ item.goods }}</view>
                            <view class="flex  text-sm  text-gray margin-top">
                                <view class="nowrap margin-right-sm w-third"> 香型：{{ item.goodsType }}</view>
                                <view class="nowrap margin-right-sm w-third">度数：{{ item.degrees }}</view>
                                <view class="nowrap w-third text-sm">容量：{{ item.volume }}</view>
                            </view>
                            <view class="text-gray flex align-center margin-top">代理价：<text class="text-red">￥{{ item.gPrice }}.00</text></view>

                        </view>
                    </view>
<!--                    <view class="flex w100 justify-between margin-top">-->
<!--                        <view class="text-gray flex align-center">零售价：-->
<!--                            <view class="text-red">￥{{ item.price }}.00</view>-->
<!--                        </view>-->
<!--                        <view class="text-gray flex align-center">代理价：-->
<!--                            <view class="text-red">￥{{ item.gPrice }}.00</view>-->
<!--                        </view>-->
<!--                    </view>-->
<!--                    <view class="u-border-bottom margin-tb"></view>-->
<!--                    <view class="flex justify-around margin-top ">-->
<!--                        <view class="text-center flex align-center">-->
<!--                            <view class="text-gray margin-tb-sm">发布代理：</view>-->
<!--                            <view class="text-bold">46</view>-->
<!--                        </view>-->
<!--                        <view class="text-center flex align-center">-->
<!--                            <view class="text-gray margin-tb-sm">已代理：</view>-->
<!--                            <view class="text-bold">22</view>-->
<!--                        </view>-->
<!--                        <view class="text-center flex align-center">-->
<!--                            <view class="text-gray margin-tb-sm">剩余代理：</view>-->
<!--                            <view class="text-bold">2315</view>-->
<!--                        </view>-->
<!--                    </view>-->
                </view>
                <view class="cuIcon-right  flex flex-direction justify-center" style="font-size: 20px;"
                      @click="selectGood"></view>
            </view>
        </view>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
export default {
    name: "selectGoods",
    components:{
        fxbImage
    },
    onLoad(option) { //option为object类型，会序列化上个页面传递的参数
        this.type = option.type;
    },

    data() {
        return {
            type: "",
            List: [
                {
                    goodsID: "4837487",
                    goods: "飞天茅台53°瓶装酱香型 500ml",
                    goodsType: "酱香型",
                    degrees: "53°", //度数
                    volume: "500ml",//容量
                    price: "448",
                    gPrice: "365"
                },
                {
                    goodsID: "4871487",
                    goods: "飞天茅台53°瓶装酱香型 500ml",
                    goodsType: "酱型",
                    degrees: "53°", //度数
                    volume: "1000ml",//容量
                    price: "448",
                    gPrice: "365"
                },
                {
                    goodsID: "4874487",
                    goods: "飞天茅台53°瓶装酱香型 500ml",
                    goodsType: "酱香型",
                    degrees: "53°", //度数
                    volume: "500ml",//容量
                    price: "448",
                    gPrice: "365"
                }
            ]
        };
    },
    methods: {
        selectGood(option) {
            if (this.type === "policy") {
                uni.navigateTo({
                    url: "pages/admin/dataForService/selectPolicy?id=123"
                });
            } else {
                uni.navigateBack({
                    delta: 1
                });
                let pages = getCurrentPages()
                let prevPage = pages[pages.length -2]
                prevPage.$vm.getGoodsInfo({ id:'18594' })
            }

        }
    }
};
</script>

<style scoped>
.nowrap {
    white-space: nowrap;
}
</style>