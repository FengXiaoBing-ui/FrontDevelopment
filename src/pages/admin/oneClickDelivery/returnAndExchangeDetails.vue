<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" :title="title" :autoBack="true">
        </u-navbar>
        <view class="padding" :style="'margin-top:'+ CustomBar + 'px'">
            <view class="whiteBoxShadow">
                <boxTitle :title="title"></boxTitle>
                <view class="flex align-center justify-between padding-tb u-border-bottom">
                    <view>换货原因
                        <text class="text-red">*</text>
                    </view>
                    <view>
                        <text class="text-gray margin-right-sm">商品有瑕疵</text>
                        <text class="cuIcon-right" style="font-size: 38rpx;"></text>
                    </view>
                </view>

                <view class="flex align-center justify-between padding-tb ">
                    <view>换货商品
                        <text class="text-red">*</text>
                    </view>
                    <view>
                        <text class="text-gray margin-right-sm">选择商品</text>
                        <text class="cuIcon-right" style="font-size: 38rpx;"></text>
                    </view>

                </view>
                <view class="margin-top  u-border-bottom padding-tb" v-for="item in 2" :key="item ">
                    <view class="flex align-center">
                        <image style="width: 140rpx;height: 140rpx;" :src="require('/src/static/01.jpg')"
                               mode="aspectFill"></image>
                        <view style="height: 140rpx;width: 75%"
                              class="margin-left-sm flex flex-direction justify-between">
                            <view class="text-bold ">东方国宾·尊致酒53°瓶装500ml</view>
                            <view class="text-sm flex justify-between align-center">
                                <text>规格:酱香型</text>
                                <text>度数:53°</text>
                                <text>容量:500ml</text>
                            </view>

                            <view class="flex align-center">
                                <text>代理价：</text>
                                <text class="text-red">￥365.00/瓶</text>
                            </view>

                        </view>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <view class="flex align-center">
                            <text class="text-gray">换货数量
                                <text class="text-red">*</text>
                            </text>
                            <text class="margin-left">请输入瓶数</text>
                        </view>
                    </view>
                </view>
                <view class="flex justify-between margin-top">
                    <view>是否寄回
                        <text class="text-red">*</text>
                    </view>
                    <view @click="returnAndExchangeDetails('换货')">
                        <text class="text-gray margin-right-sm">是</text>
                        <text class="cuIcon-right" style="font-size: 38rpx;"></text>
                    </view>
                </view>

            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="补充描述和凭证"></boxTitle>
                <view class="text-gray margin-tb">补充描述，有助于服务商更好处理售后问题</view>
                <input class="u-border-bottom" type="text">
                <view class="margin-tb">
                    <text class="text-red">*</text>
                    <text>凭证图片</text>
                </view>
                <u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
                          :maxCount="5"></u-upload>
            </view>
            <button style="width: 100%;" class="cu-btn bg-red margin-top-xl lg">提交</button>
        </view>
    </view>


</template>

<script>
import boxTitle from "../../agent/components/fxb-box-title";

export default {
    data() {
        return {
            title: "",
            fileList1: []
        };
    },
    components: {
        boxTitle
    },
    onLoad(options) {
        this.title = options.type;
        console.log(this.title);
    },
    name: "returnAndExchangeDetails"
};

</script>

<style scoped>

</style>