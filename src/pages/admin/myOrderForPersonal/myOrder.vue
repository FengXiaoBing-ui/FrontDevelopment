<template>
    <view>
        <u-navbar :autoBack="true" :title="status==0?'我的订单':'提交订单'"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`" class="padding-tb-sm">
            <!--收货地址-->
            <!--                        <addressBox-->
            <!--                            def border icon :addressInfo="addressInfo" :select="true"></addressBox>-->

            <view v-if="status==0" @click="gotoPath('/pages/admin/myOrderForPersonal/selectHarvestAddress')" class="whiteBoxShadow margin-bottom-sm">
                <addressBox def border icon :addressInfo="addressInfo" :select="true"></addressBox>

                <!--                <view class=" flex align-center">-->
<!--                    <view>-->
<!--                        <view class="flex  align-center">-->
<!--                            <view class="text-red radius text-sm text-center"-->
<!--                                  style=" width: 40px;height: 20px;background-color: rgba(255,0,0,0.1)">默认-->
<!--                            </view>-->
<!--                            <view class="margin-left-sm"> 张晓丹</view>-->
<!--                            <view class="flex margin-left-sm">-->
<!--                                <view class="cuIcon-mobilefill" style=" color: #F37B1D"></view>-->
<!--                                <text class="margin-left-sm">18926726786</text>-->
<!--                            </view>-->
<!--                        </view>-->
<!--                        <view class="flex align-center margin-top-sm">-->
<!--                            <view class="cuIcon-location text-orange"></view>-->
<!--                            <view class="margin-left-sm text-bold">贵州省贵阳市观山湖区德福中心A3栋6楼10号</view>-->
<!--                        </view>-->
<!--                    </view>-->
<!--                    <view class="cuIcon-right margin-left-sm"></view>-->
<!--                </view>-->
<!--                <view v-if="border" class="imgBottom margin-top-xl"></view>-->
            </view>
            <view class="whiteBoxShadow">
                <view>
                    好酒选电子商务有限公司
                </view>
                <view class="u-border-bottom margin-tb-sm"></view>
                <view class=" margin-top-xs"
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
                <view class="margin-top-sm">
                    <view class="flex justify-between">
                        <view class="text-gray">金额合计</view>
                        <view>￥2590.00</view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">快递</view>
                        <view class="flex">
                            <view class="text-red radius text-sm text-center"
                                  style=" width: 40px;height: 20px;background-color: rgba(255,0,0,0.1)">默认
                            </view>
                            <view class=" margin-left-sm text-bold">中通快递</view>
                        </view>
                    </view>
                    <view v-if="status==0" class="u-border-bottom  margin-top-sm"></view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">备注</view>
                        <input type="text" placeholder="请输入您的备注" style="width: 98px;font-size: 14px">
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <view>
                    好酒选电子商务有限公司
                </view>
                <view class="u-border-bottom margin-tb-sm"></view>
                <view class=" margin-top-xs"
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
                <view class="margin-top-sm">
                    <view class="flex justify-between">
                        <view class="text-gray">金额合计</view>
                        <view>￥2590.00</view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">快递</view>
                        <view class="flex">
                            <view class="text-red radius text-sm text-center"
                                  style=" width: 40px;height: 20px;background-color: rgba(255,0,0,0.1)">默认
                            </view>
                            <view class=" margin-left-sm text-bold">中通快递</view>
                        </view>
                    </view>
                    <view v-if="status==0" class="u-border-bottom  margin-top-sm"></view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">备注</view>
                        <input type="text" placeholder="请输入您的备注" style="width: 98px;font-size: 14px">
                    </view>
                </view>
            </view>
            <view v-if="status==1" class="whiteBoxShadow margin-top-sm">
                <boxTitle title="配送信息"></boxTitle>
                <view class="margin-top-sm flex ">
                    <view style="width: 60px" class="text-gray">配送方式</view>
                    <view class="margin-left-lg">中通快递</view>
                </view>
                <view class="flex  margin-top-sm">
                    <view style="width: 60px" class="text-gray">收货信息</view>
                    <view class="margin-left-lg">
                        <view class=" flex">
                            <view> 张晓丹</view>
                            <view class="flex margin-left-sm align-start">
                                <view class="cuIcon-mobile" style=" color: #F37B1D"></view>
                                <text>18926726786</text>
                            </view>
                        </view>
                        <view class="margin-top-sm">贵州省贵阳市观山湖区德福中心A3栋6楼10号</view>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <view class="flex justify-between">
                    <view class="text-gray">{{status==0?"商品数量":"商品总额"}}</view>
                    <view>{{status==0?"12":"￥518.00"}}</view>
                </view>
                <view v-if="status==0" class="flex justify-between margin-top-sm">
                    <view class="text-gray">商品金额</view>
                    <view>￥2590.00</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">运费</view>
                    <view>￥518</view>
                </view>
                <view v-if="status==1" class="flex justify-between margin-top-sm">
                    <view class="text-gray">实付款</view>
                    <view>￥518</view>
                </view>
                <view v-if="status==0" class="u-border-bottom margin-tb-sm"></view>
                <view v-if="status==0" class="flex justify-between">
                    <view class="text-bold">合计</view>
                    <view class="text-red">￥2518.00</view>
                </view>
            </view>
            <view v-if="status==1" class="whiteBoxShadow margin-top-sm">
                <view class="flex justify-between">
                    <view class="text-gray">订单编号</view>
                    <view class="flex">
                        <view>12789678245721863</view>
                        <view class=" margin-left-sm radius text-sm text-center"
                              style="color: #F37B1D ;background-color:rgba(255,165,0,0.2)">复制
                        </view>
                    </view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">申请时间</view>
                    <view>2022-08-31 12:23</view>
                </view>
            </view>

        </view>
        <view class=" flex justify-between foot bg-white padding-sm w100">
            <view>
                <view class="flex">
                    <view class="text-bold">合计：</view>
                    <view class="text-red margin-left-sm">￥2518.00</view>
                </view>
            </view>
            <view v-if="status==0"  @click.stop="gotoPath('/pages/admin/myOrderForPersonal/myOrder?status=1')" class="cu-btn bg-red radius">
                提交订单
            </view>
            <view v-if="status==1" class="flex">
                <view class="cu-btn bg-gray radius">
                    取消订单
                </view>
                <view @click="gotoPath('/pages/admin/myOrderForPersonal/paymentMethod')"
                      class="cu-btn bg-red radius margin-left-sm">
                    确认支付
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import addressBox from "/src/pages/index/applicationSample/addressBox";

export default {
    name: "myOrder",
    components: {
        fxbImage,
        boxTitle,
        addressBox
    },
    data() {
        return {
            status:0,
            border: true,
            // 地址信息
            addressInfo: {
                name: "张晓丹",
                phone: "18878855878",
                address: "贵州省贵阳市观山湖区金融城金融城MAX·C座21楼24号"
            }
        };
    },
    methods: {
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        }
    },
    onLoad(options) {
        this.status=options.status
    },
};
</script>

<style scoped>
.imgBottom {
    height: 4px;
    width: 100%;
    overflow: hidden;
    background-image: url("/static/img/index/samp_order_line.png");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>