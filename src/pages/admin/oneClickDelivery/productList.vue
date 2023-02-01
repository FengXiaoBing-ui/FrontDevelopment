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
                <view class="text-lg">商品列表</view>
                <view style="width:750rpx" class="search bg-white">
                    <view class="bg-white padding-lr ">
                        <view class="flex align-center margin-top-sm margin-tb-sm bg-gray" style="border-radius: 4px">
                            <text class="cuIcon-search text-gray"
                                  style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
                            <input
                                class="text-df"
                                type="text"
                                placeholder-class="text-gray"
                                placeholder="请输入商品名称进行搜索"
                                confirm-type="search"
                            />
                        </view>
                        <!--产品列表导航-->

                    </view>
                </view>
            </view>
        </u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ (CustomBar+20) + 'px;padding-bottom:120rpx'">
            <view class="whiteBoxShadow margin-top" v-for="item in 6" :key="item">
                <view class="flex align-center">
                    <fxbImage class="flex-sub" width="140" height="140" src="/productDetails/Slice%201.png" mode="aspectFill"></fxbImage>
                    <view class="margin-left-sm flex flex-treble flex-direction">
                        <view class="text-bold">东方国宾53°瓶装500ml</view>
                        <view class="text-sm flex justify-between align-center">
                            <text class="text-gray">香型:酱香型</text>
                            <text class="text-gray">度数:53°</text>
                            <text class="text-gray">容量:500ml</text>
                        </view>
                        <view class="text-sm flex justify-between align-center">
                            <view class="flex align-center">
                                <text>代理价：</text>
                                <view class="text-red">￥365.00
                                    <text class="text-gray">/瓶</text>
                                </view>
                            </view>
                        </view>
                        <view class="flex justify-between">
                            <view>￥0.00</view>
                            <u-number-box v-model="value">
                                <view slot="minus" class="minus">
                                    <u-icon class="padding-xs" name="minus" size="12"></u-icon>
                                </view>
                                <input class="input" slot="input" v-model="value"
                                       style="width: 100rpx;text-align: center;"
                                       type="number" />
                                <view slot="plus" class="plus">
                                    <u-icon class="padding-xs" name="plus" color="#FFFFFF" size="12"></u-icon>
                                </view>
                            </u-number-box>
                        </view>
                    </view>
                </view>
            </view>
        </view>


        <u-popup :show="show" :round="10" mode="bottom" @close="close" @open="open">
            <view style="width: 600rpx;padding-bottom: 100rpx">
                <view class="bg-gray" style="width: 125%">
                    <view class="grid col-3 padding">
                        <view></view>
                        <view class="text-lg text-center">已选合同商品</view>
                        <view class="text-right">清空商品</view>
                    </view>
                </view>

                <view class=" margin-top-xs u-border-bottom padding-tb padding-lr" style="width: 120%" v-for="item in 2"
                      :key="item">
                    <view class="flex align-center">
                        <fxbImage width="140" height="140" src="/productDetails/Slice%201.png" mode="aspectFill"></fxbImage>
                        <view class="margin-left-sm flex flex-treble flex-direction">
                            <view class="text-bold">东方国宾53°瓶装500ml</view>
                            <view class="text-sm flex justify-between align-center">
                                <text class="text-gray">香型:酱香型</text>
                                <text class="text-gray">度数:53°</text>
                                <text class="text-gray">容量:500ml</text>
                            </view>
                            <view class="text-sm flex justify-between align-center">
                                <view class="flex align-center">
                                    <text>代理价：</text>
                                    <view class="text-red">￥365.00
                                        <text class="text-gray">/瓶</text>
                                    </view>
                                </view>
                            </view>
                            <view class="flex justify-between">
                                <view>￥0.00</view>
                                <u-number-box v-model="value">
                                    <view slot="minus" class="minus">
                                        <u-icon class="padding-xs" name="minus" size="12"></u-icon>
                                    </view>
                                    <input class="input" slot="input" v-model="value"
                                           style="width: 100rpx;text-align: center;"
                                           type="number" />
                                    <view slot="plus" class="plus">
                                        <u-icon class="padding-xs" name="plus" color="#FFFFFF" size="12"></u-icon>
                                    </view>
                                </u-number-box>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </u-popup>
        <view class="botBtn bg-white padding-lr padding-tb-xs">
            <view @click="show = !show" class="flex justify-between align-center">
                <view class="">
                    <view class="text-left">合计：
                        <text class="text-red">￥2000.00</text>
                    </view>
                    <view class="margin-top-xs">已选：3种商品(120瓶)</view>
                </view>
                <button class="cu-btn bg-red w30">确认</button>
            </view>
        </view>
    </view>

</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
export default {
    components:{
        fxbImage
    },
    data() {
        return {
            value: 1,
            show: false,
            name: "productList"
        };
    },
    methods: {
        open() {
            // console.log('open');
        },
        close() {
            this.show = false;
            // console.log('close');
        }
    }
};
</script>

<style lang="scss" scoped>
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

.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 99999;
}

.search {
    position: fixed;
    width: 100%;
    top: var(--CustomBar-1) !important;
    left: 0;
}

.contentBox {
    position: relative;
    top: calc(var(--status-bar-height) + 260rpx);
    padding-bottom: 80 rpx;
}

.ellipse {
    width: 10px;
    height: 14px;
    margin: 3px;
    bottom: 2px;
    background: white;
    border-radius: 50% / 50%;
}

.header {
    position: fixed;
    left: 0;
    z-index: 1;
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

.input {
    padding: 0 10 rpx;
    font-size: 32 rpx;
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
</style>