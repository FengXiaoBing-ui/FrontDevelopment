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
            <ren-dropdown-filter id="box2" :defaultIndex="defaultIndex" :filterData="filterData"
                                 @ed="ed"></ren-dropdown-filter>
        </view>
        <view class=" padding-lr" :style="`margin-top:${CustomBar}px`">
            <view v-for="item in List" :key="item.goodsID"
                  class="whiteBoxShadow  flex justify-between align-stretch  margin-top "
                  @click="selectGood">
                <view>
                    <view class="flex align-start">
                        <view class="">
                            <fxbImage
                                src="/productDetails/Slice%201.png"
                                style="width:150rpx;height:150rpx"></fxbImage>
                        </view>
                        <view class="w100 margin-left-sm">
                            <view class="text-bold">{{ item.goods }}</view>
                            <view class="flex  text-sm  text-gray margin-top">
                                <view class="nowrap margin-right-sm "
                                      style="color: #F37B1D ;background-color:rgba(255,165,0,0.2)"> 香型：{{ item.goodsType
                                    }}
                                </view>
                                <view class="nowrap margin-right-sm "
                                      style="color: #E54D42;background-color:rgba(255,0,0,0.2)">度数：{{ item.degrees }}
                                </view>
                                <view class="nowrap " style="color: #0081FF;background-color:rgba(0,0,255,0.1)">
                                    容量：{{ item.volume }}
                                </view>
                            </view>
                            <view class="flex align-center margin-top-sm">代理价：
                                <view>￥{{ item.gPrice }}.00</view>
                            </view>
                            <view class="flex justify-between margin-top-sm">
                                <view class="text-red">￥0.00</view>
                                <u-number-box v-model="value">
                                    <view slot="minus" class="minus bg-gray">
                                        <u-icon class="padding-xs" name="minus" size="12"></u-icon>
                                    </view>
                                    <input class="input bg-gray margin-lr-sm" slot="input" v-model="value"
                                           style="width: 100rpx;text-align: center;"
                                           type="number" />
                                    <view slot="plus" class="plus">
                                        <u-icon class="padding-xs" name="plus" color="#FFFFFF" size="12"></u-icon>
                                    </view>
                                </u-number-box>
                            </view>
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
                <!--                <view class="cuIcon-right  flex flex-direction justify-center" style="font-size: 20px;"-->
                <!--                      @click="selectGood"></view>-->
            </view>
        </view>
        <view class="botBtn bg-white padding-lr padding-tb-xs">
            <view @click="show = !show" class="flex justify-between align-center">
                <view class="">
                    <view class="text-left">合计：
                        <text class="text-red">￥2000.00</text>
                    </view>
                    <view class=" text-gray flex">已选3种商品
                        <text class="margin-left-sm">共120瓶</text>
                    </view>
                </view>
                <button @click.stop="gotoPath('/pages/admin/myOrderForPersonal/myOrder?status=0')" class="cu-btn bg-red w30">确认选择</button>
            </view>
        </view>
        <u-popup :show="show" :round="10" mode="bottom" :closeable="true" @close="close" @open="open">
            <view style="width: 600rpx;padding-bottom: 100rpx">
                <view class="margin-top-sm" style="width: 125%">
                    <view class="text-center">已选商品</view>
                    <view class="u-border-bottom margin-tb-lg"></view>
                    <view class="border padding-sm margin-sm radius">
                        <view>
                            好酒选电子商务有限公司
                        </view>
                        <view class="u-border-bottom margin-tb-sm"></view>
                        <view class=" margin-top-xs"
                              v-for="item in 2"
                              :key="item">
                            <view class="flex align-start">
                                <fxbImage width="150" height="150" src="/productDetails/Slice%201.png"
                                          mode="aspectFill"></fxbImage>
                                <view class="margin-left-sm flex flex-treble flex-direction">
                                    <view class="text-bold text-lg">东方国宾53°瓶装500ml</view>
                                    <view class="text-sm flex justify-between align-center margin-top-sm">
                                        <text class="text-gray"
                                              style="color: #F37B1D ;background-color:rgba(255,165,0,0.2)">
                                            香型:酱香型</text>
                                        <text class="text-gray"
                                              style="color: #E54D42;background-color:rgba(255,0,0,0.2)">
                                            度数:53°</text>
                                        <text class="text-gray"
                                              style="color: #0081FF;background-color:rgba(0,0,255,0.1)">
                                            容量:500ml</text>
                                    </view>
                                    <view class="text-sm flex justify-between align-center margin-top-sm">
                                        <view class="flex align-center">
                                            <text>代理价：</text>
                                            <view class="text-red">￥365.00
                                                <text class="text-gray">/瓶</text>
                                            </view>
                                        </view>
                                    </view>
                                    <view class="flex justify-between margin-top-sm">
                                        <view class="text-red">￥0.00</view>
                                        <u-number-box v-model="value">
                                            <view slot="minus" class="minus">
                                                <u-icon class="padding-xs" name="minus" size="12"></u-icon>
                                            </view>
                                            <input class="input" slot="input" v-model="value"
                                                   style="width: 100rpx;text-align: center;"
                                                   type="number" />
                                            <view slot="plus" class="plus">
                                                <u-icon class="padding-xs" name="plus" color="#FFFFFF"
                                                        size="12"></u-icon>
                                            </view>
                                        </u-number-box>
                                    </view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>

            </view>
        </u-popup>
    </view>

</template>

<script>
import renDropdownFilter from "/src/components/ren-dropdown-filter/ren-dropdown-filter";

import fxbImage from "/src/components/fxb/fxb-image";

export default {
    name: "selectGoods",
    components: {
        fxbImage,
        renDropdownFilter
    },
    onLoad(option) { //option为object类型，会序列化上个页面传递的参数
        this.type = option.type;
    },

    data() {
        return {
            show: false,
            value: 0,
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
                    goodsType: "酱型型",
                    degrees: "53°", //度数
                    volume: "500ml",//容量
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
            ],
            defaultIndex: [0, 0, 0, 0, 0],
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
            ]
        };
    },
    methods: {
        close() {
        },
        open() {
        },
        ed() {

        },
        valChange(e) {
            console.log("当前值为: " + e.value);
        },
        selectGood(option) {
            if (this.type === "policy") {
                uni.navigateTo({
                    url: "pages/admin/dataForService/selectPolicy?id=123"
                });
            } else {
                uni.navigateBack({
                    delta: 1
                });
                let pages = getCurrentPages();
                let prevPage = pages[pages.length - 2];
                prevPage.$vm.getGoodsInfo({ id: "18594" });
            }

        },
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        },
    }
};
</script>

<style scoped>
.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 99999;
}

.plus {
    width: 40 rpx;
    height: 40 rpx;
    background-color: #FF0000;
    border-radius: 50%;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    justify-content: center;
    align-items: center;
}

.nowrap {
    white-space: nowrap;
}

.minus {
    width: 40 rpx;
    height: 40 rpx;
    border-width: 1px;
    border: 4 rpx #e6dee6 solid;
    border-radius: 50%;
    @include flex;
    justify-content: center;
    align-items: center;
}
</style>
