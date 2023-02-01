<template>
<view class="content">
    <!--顶部标题-->
    <u-navbar :border="false" :fixed="true" :autoBack="true"
              :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
              :safeAreaInsetTop="false">
        <view slot="left" class="u-nav-slot">
            <text style="font-size: 36rpx" class="cuIcon-back"></text>
        </view>
        <view slot="center" class="u-nav-slot">
            <view class="text-lg">合同商品列表</view>
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
    </u-navbar>
    <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ (CustomBar+31) + 'px;padding-bottom:140rpx'">
        <view class="whiteBoxShadow margin-top-sm">
            <view class="flex align-center justify-between">
                <view style="width: 70%" class="text-bold text-lg text-cut">东方国宾·尊致酒53°瓶装500ml酱香型合同</view>
                <view style="border-color: #3c9cff" class="bg-blue light radius u-border">合同详情</view>
            </view>
            <view class="flex justify-between align-center text-gray margin-top-sm">
                <view>合同编号：213234233543</view>
                <view>结算方式：现结</view>
            </view>
            <view class="u-border-top margin-top"></view>
            <view class="margin-top" v-for="item in 2" :key="item">
                <view class="flex align-center">
                    <fxbImage class="radius" width="140" height="140" src="/productDetails/Slice%201.png" mode="aspectFill"></fxbImage>
                    <view style="height: 140rpx;width: 75%" class="margin-left-sm flex flex-direction justify-around">
                        <view class="text-bold">东方国宾53°瓶装500ml</view>
                        <view class="text-sm text-gray flex justify-between align-center">
                            <view>香型:酱香型</view>
                            <view>度数:53°</view>
                            <view>容量:500ml</view>
                        </view>
                        <view class="text-sm text-gray flex align-center">
                            <text class="text-black text-df">代理价：</text>
                            <view class="flex align-center">
                                <text class="text-red">￥365.00</text>
                                <text class="text-gray">/瓶</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="flex align-center">
                        <text class="text-gray">¥0.00</text>
                    </view>
                    <view class="flex align-center">
                        <u-icon class="margin-right-sm" v-show="value>0" @click="move" size="19" name="minus-circle"></u-icon>
                        <input v-show="value>0" style="width: 50rpx" type="number" :value="value">
                        <text @click="add" style="font-size: 38rpx" class="cuIcon-roundaddfill text-red margin-right-sm"></text>
                    </view>
                </view>
            </view>
        </view>
        <view class="whiteBoxShadow margin-top-sm">
            <view class="flex align-center justify-between">
                <text class="text-sm text-red">该合同有货款未结清，请结清货款后再补货</text>
                <button class="cu-btn bg-red radius sm">结清货款</button>
            </view>
            <view class="flex justify-between margin-top-sm">
                <view class="cuIcon-roundcheck text-red" style="font-size: 36rpx"></view>
                <view>
                    <view class="flex align-center justify-between">
                        <view class="basis-xl text-bold text-lg text-cut">东方国宾·尊致酒53°瓶装500ml酱香型合同</view>
                        <view style="border-color: #3c9cff" class="basis-xs bg-blue light radius text-center">合同详情</view>
                    </view>
                    <view class="flex justify-between align-center text-gray margin-top-sm">
                        <view>合同编号：213234233543</view>
                        <view>结算方式：现结</view>
                    </view>
                </view>
            </view>


            <view class="u-border-top margin-top"></view>
            <view class="margin-top" v-for="item in 2" :key="item">
                <view class="flex align-center">
                    <fxbImage class="radius" width="140" height="140" src="/productDetails/Slice%201.png" mode="aspectFill"></fxbImage>
                    <view style="height: 140rpx;width: 75%" class="margin-left-sm flex flex-direction justify-around">
                        <view class="text-bold">东方国宾53°瓶装500ml</view>
                        <view class="text-sm text-gray flex justify-between align-center">
                            <view>香型:酱香型</view>
                            <view>度数:53°</view>
                            <view>容量:500ml</view>
                        </view>
                        <view class="text-sm text-gray flex align-center">
                            <text class="text-black text-df">代理价：</text>
                            <view class="flex align-center">
                                <text class="text-red">￥365.00</text>
                                <text class="text-gray">/瓶</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="flex align-center">
                        <text class="text-gray">¥0.00</text>
                    </view>
                    <view class="flex align-center">
                        <u-icon class="margin-right-sm" v-show="value>0" @click="move" size="19" name="minus-circle"></u-icon>
                        <input v-show="value>0" style="width: 50rpx" type="number" :value="value">
                        <text @click="add" style="font-size: 38rpx" class="cuIcon-roundaddfill text-red margin-right-sm"></text>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <u-popup :show="show" mode="bottom" @close="close" @open="open">
        <view class="padding bg-gray" style="padding-bottom: 140rpx">
            <view class="grid col-3 padding-bottom">
                <view></view>
                <view class="text-center text-lg">已选合同商品</view>
                <view class="text-gray text-right">清空商品</view>
            </view>
            <scroll-view style="width: 100%;height: 700rpx" scroll-y>
                <view class="whiteBoxShadow margin-top" v-for="item in 2" :key="item">
                    <view class="flex align-center justify-between">
                        <view style="width: 70%" class="text-bold text-lg text-cut">东方国宾·尊致酒53°瓶装500ml酱香型合同</view>
                        <view style="font-size: 36rpx" class="cuIcon-deletefill text-gray"></view>
                    </view>
                    <view class="flex justify-between align-center text-gray margin-top-sm">
                        <view>合同编号：213234233543</view>
                        <view>结算方式：现结</view>
                    </view>
                    <view class="u-border-top margin-top"></view>
                    <view class="margin-top" v-for="item in 2" :key="item">
                        <view class="flex align-center">
                            <fxbImage class="radius" width="140" height="140" src="/productDetails/Slice%201.png" mode="aspectFill"></fxbImage>
                            <view style="height: 140rpx;width: 75%" class="margin-left-sm flex flex-direction justify-around">
                                <view class="text-bold">东方国宾53°瓶装500ml</view>
                                <view class="text-sm text-gray flex justify-between align-center">
                                    <view>香型:酱香型</view>
                                    <view>度数:53°</view>
                                    <view>容量:500ml</view>
                                </view>
                                <view class="text-sm text-gray flex align-center">
                                    <text class="text-black text-df">代理价：</text>
                                    <view class="flex align-center">
                                        <text class="text-red">￥365.00</text>
                                        <text class="text-gray">/瓶</text>
                                    </view>
                                </view>
                            </view>
                        </view>
                        <view class="flex justify-between align-center margin-top-sm">
                            <view class="flex align-center">
                                <text class="text-gray">¥0.00</text>
                            </view>
                            <view class="flex align-center">
                                <u-icon class="margin-right-sm" v-show="value>0" @click="move" size="19" name="minus-circle"></u-icon>
                                <input v-show="value>0" style="width: 50rpx" type="number" :value="value">
                                <text @click="add" style="font-size: 38rpx" class="cuIcon-roundaddfill text-red margin-right-sm"></text>
                            </view>
                        </view>
                    </view>
                </view>
            </scroll-view>

        </view>
    </u-popup>
    <view class="botBtn padding-sm bg-white flex justify-between">
        <view @click="show = !show">
            <view class="flex align-center">
                <text>合计：</text>
                <text class="text-red">￥20000.00</text>
            </view>
            <view class="text-gray">已选：3种商品(120瓶)</view>
        </view>
        <button @click="sure" class="cu-btn bg-red radius padding-lr-xl">确认</button>
    </view>
</view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
export default {
    name: "productList",
    components:{
        fxbImage
    },
    data(){
        return{
            value:0,
            show:false
        }
    },
    methods:{
        add(){
            this.value++
        },
        move(){
            if (this.value>0){
                this.value--
            }
        },
        open() {
            // console.log('open');
        },
        close() {
            this.show = false
            // console.log('close');
        },
        sure(){
          uni.navigateBack({
              delta:1
          })
        },
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
.botBtn{
    position: fixed;
    z-index: 99999999999;
    bottom: 0;
    left: 0;
    width: 100%;
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