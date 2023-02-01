<template>
    <view class="content">
        <u-navbar title="预约取件" :autoBack="true"> </u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:' + CustomBar + 'px;'">
            <view class="whiteBoxShadow">
                <boxTitle title="预约取件"></boxTitle>
                <view class="flex justify-between">
                    <view class="flex align-center">
                        <text class="text-red">*</text>
                        <text>选择快递</text>
                    </view>
                    <view class="flex align-center">
                        <text class="text-gray">请选择快递</text>
                        <text class="cuIcon-right margin-left-sm" style="font-size: 32rpx"></text>
                    </view>
                </view>
                <view class="u-border-top margin-tb-sm"></view>
                <view class="flex">
                    <u-avatar class="flex-sub" bg-color="gray" font-size="14" text="收"></u-avatar>
                    <view class="margin-left-sm flex-treble">
                        <view class="text-gray">贵州省贵阳市观山湖区贵州金融城max.C座</view>
                        <view class="margin-top-sm">
                            <text class="text-bold">张晓刚</text>
                            <text class="text-bold margin-left-xl">18690728686</text>
                        </view>
                    </view>
                </view>
                <view class="flex margin-top">
                    <u-avatar class="flex-sub" bg-color="gray" font-size="14" text="取"></u-avatar>
                    <view class="margin-left-sm flex-treble">
                        <view class="text-gray">贵州省贵阳市观山湖区贵州金融城max.C座</view>
                        <view class="text-bold text-lg flex justify-between margin-top-sm">
                            <view class="margin-top-sm">
                                <text class="text-bold">张晓刚</text>
                                <text class="text-bold margin-left-xl">18690728686</text>
                            </view>
                            <text class="flex-sub cuIcon-right text-right text-gray" style="font-size: 32rpx"></text>
                        </view>
                    </view>
                </view>
                <view class="u-border-top margin-tb-sm"></view>
                <view class="flex justify-between">
                    <view class="flex align-center">
                        <text class="text-red">*</text>
                        <text>预约时间</text>
                    </view>
                    <view class="flex align-center">
                        <text class="text-gray">请选择快递</text>
                        <text class="cuIcon-right margin-left-sm" style="font-size: 32rpx"></text>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="商品信息"></boxTitle>
                <view class="margin-top" v-for="item in 2" :key="item">
                    <view class="flex align-center">
                        <image style="width: 140rpx;height: 140rpx;" :src="require('/src/static/01.jpg')" mode="aspectFill"></image>
                        <view style="height: 140rpx;width: 75%" class="margin-left-sm flex flex-direction justify-between">
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
                            <text class="text-gray">发货数量：</text>
                            <text>72瓶</text>
                        </view>
                        <view class="flex align-center">
                            <text class="text-red ">￥5300.00</text>
                        </view>
                    </view>
                </view>

            </view>
        </view>
        <view class="botBtn padding-xs bg-white">
            <button @click="submit" style="width: 100%" class="cu-btn bg-red radius">提交</button>
        </view>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "appointmentPickup",
    components:{
        boxTitle,
        fxbImage
    },
    data(){
        return{

        }
    },
    methods:{
        submit(){
            uni.redirectTo({
                url:"/pages/admin/oneClickDelivery/exchangeDetail?exchangeDetail=true"
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.botBtn{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>