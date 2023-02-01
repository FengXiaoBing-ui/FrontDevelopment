<template>
    <view>
        <u-navbar :autoBack="true" title="预约取件"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`" class="padding-sm">
            <view class="whiteBoxShadow">
                <boxTitle title="预约取件"></boxTitle>
                <view class="flex align-center justify-between padding-tb u-border-bottom">
                    <view>
                        <text class="text-red">*</text>
                        选择快递
                    </view>
                    <view>
                        <text class="text-gray margin-right-sm">请选择快递</text>
                        <text class="cuIcon-right text-gray" style="font-size: 38rpx;"></text>
                    </view>
                </view>
                <view class="flex align-center  margin-top">
                    <view class="flex align-start">
                        <view>
                            <u-avatar
                                text="寄"
                                fontSize="18"
                                randomBgColor
                            ></u-avatar>
                        </view>
                        <view class="margin-left-sm">
                            <view class="flex  align-center">
                                <view> 张晓丹</view>
                                <view class="flex margin-left-sm">
                                    <view class="cuIcon-mobilefill text-yellow"></view>
                                    <text class="margin-left-sm">18926726786</text>
                                </view>
                            </view>
                            <view class=" text-bold margin-top-sm w75">贵州省贵阳市观山湖区德福中心A3栋6楼10号</view>
                        </view>
                    </view>
                </view>
                <view class="flex align-center  margin-top">
                    <view class="flex align-start">
                        <view>
                            <u-avatar
                                text="收"
                                fontSize="18"
                                randomBgColor
                            ></u-avatar>
                        </view>
                        <view class="margin-left-sm">
                            <view class="flex  align-center">
                                <view> 张晓丹</view>
                                <view class="flex margin-left-sm">
                                    <view class="cuIcon-mobilefill text-yellow"></view>
                                    <text class="margin-left-sm">18926726786</text>
                                </view>
                            </view>
                            <view class=" text-bold margin-top-sm w75">贵州省贵阳市观山湖区德福中心A3栋6楼10号</view>
                        </view>
                    </view>
                    <text class="cuIcon-right text-gray" style="font-size: 38rpx;"></text>
                </view>
                <view class="flex align-center justify-between padding-top margin-top-sm u-border-top">
                    <view>
                        <text class="text-red">*</text>
                        预约取件
                    </view>
                    <view>
                        <text class="text-gray margin-right-sm">请选择时间</text>
                        <text class="cuIcon-right text-gray" style="font-size: 38rpx;"></text>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="商品信息"></boxTitle>
                <view v-if="status==1" class=" margin-top-xs"
                      v-for="item in 2"
                      :key="item">
                    <view class="flex align-start margin-top-lg">
                        <fxbImage width="150" height="150" src="/productDetails/Slice%201.png"
                                  mode="aspectFill"></fxbImage>
                        <view class="margin-left-sm flex flex-treble flex-direction">
                            <view class="text-bold text-lg">东方国宾53°瓶装500ml</view>
                            <view class="text-sm flex align-center margin-top-sm">
                                <text class="text-gray"
                                      style="color: #F37B1D ;background-color:rgba(255,165,0,0.2)">
                                    香型:酱香型
                                </text>
                                <text class="text-gray margin-left-sm"
                                      style="color: #E54D42;background-color:rgba(255,0,0,0.2)">
                                    度数:53°
                                </text>
                                <text class="text-gray margin-left-sm"
                                      style="color: #0081FF;background-color:rgba(0,0,255,0.1)">
                                    容量:500ml
                                </text>
                            </view>
                            <view class="text-sm flex justify-between align-center margin-top-sm">
                                <view class="flex align-center">
                                    <text>代理价：</text>
                                    <view class="text-red">￥365.00</view>
                                </view>
                                <text>2</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view v-if="status==2">
                    <view class="flex align-center">
                        <fxbImage width="120" height="120" src="/productDetails/Slice%201.png"
                                  mode="aspectFill"></fxbImage>
                        <text class="margin-left-sm">东方国宾·尊致酒53°瓶装500ml</text>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">单价</view>
                        <view>￥259.00</view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">样品数量</view>
                        <view>2</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="botBtn foot bg-white padding ">
            <view class="cu-btn bg-red radius w100">提交</view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbImage from "/src/components/fxb/fxb-image";

export default {
    name: "appointmentPickup",
    components: {
        boxTitle,
        fxbImage
    },
    data() {
        return {
            status:0
        };
    },
    methods: {

    },
    onLoad(options) {
        this.status = options.status;
    }
};
</script>

<style scoped>
.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>