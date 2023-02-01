<template>
    <view class="content">
        <!--顶部标题-->
        <u-navbar title="库存详情" :autoBack="true"></u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ CustomBar + 'px'">
            <!--库存记录-->
            <view class="whiteBoxShadow ">
                <boxTitle title="库存记录"></boxTitle>
                <view class="flex justify-between">
                    <view class="text-gray">库存类型</view>
                    <view v-if="status==0">出库</view>
                    <view v-if="status==1||status==2">入库</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">入库类型</view>
                    <view v-if="status==0">云库存提货</view>
                    <view v-if="status==1">合同补货</view>
                    <view v-if="status==2">退换货入库</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">关联订单</view>
                    <view>HJXCGD20220901001</view>
                </view>
                <view class="flex justify-between">
                    <view></view>
                    <view class="cu-btn bg-white radius border">查看订单</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">入库时间</view>
                    <text>2022-10-27 12:30</text>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="入库商品"></boxTitle>
                <view class="flex">
                    <fxbImage class="radius" style="width: 140rpx;height: 140rpx;"
                              src="/productDetails/Slice%201.png"
                              mode="aspectFill"></fxbImage>
                    <view class="margin-left-sm">
                        <view class="text-bold text-lg">东方国宾·尊致酒53°瓶装500ml</view>
                        <view class="flex justify-between text-gray margin-top-sm">
                            <view>香型:酱香型</view>
                            <view>度数:53°</view>
                            <view>容量:500ml</view>
                        </view>
                        <view class="margin-top-sm">代理价：<text class="text-red">￥365.00/瓶</text> </view>
                    </view>
                </view>
                <view class="margin-top-sm">
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">入库数量</view>
                        <view>263瓶</view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">金额合计</view>
                        <view>￥26535.00</view>
                    </view>
                </view>
            </view>
        </view>

    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbImage from "/src/components/fxb/fxb-image";

export default {
    name: "inventoryDetails",
    data(){
        return{
            status:0
        }
    },
    components:{
        boxTitle,
        fxbImage
    },
    methods:{
        onLoad(options) {
            this.status = options.status;
        }
    }
};
</script>

<style scoped>

</style>