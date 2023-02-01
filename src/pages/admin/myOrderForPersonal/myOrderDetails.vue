<template>
    <view>
        <u-navbar :autoBack="true" title="订单详情"></u-navbar>
        <view :style="`margin-top:${(CustomBar +10)*1.5}rpx;${status==1?'padding-bottom: 80px':'padding-bottom: 10px'}`" :class="">
            <fxb-status-card :status="localStatus.status" :tips="localStatus.tips"
                             :icon="localStatus.icon"></fxb-status-card>
            <view class="whiteBoxShadow"  style="transform: translateY(-20rpx)">
                <view v-for="item in 2"
                      :key="item">
                    <view class="flex align-start margin-top-sm">
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
                <view v-if="status==3||status==4" class="flex justify-end margin-top-sm">
                    <view @click="toAfterSales" class="cu-btn radius">
                        申请售后
                    </view>
                    <view @click="gotoPath('pages/index/applicationSample/expressDetailsIndex')"
                          class="cu-btn radius margin-left-sm">
                        查看物流
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-bottom-sm">
                <view class="flex align-center  justify-between">
                    <view class="text-gray">商品总额</view>
                    <view class="">￥610.00</view>
                </view>
                <view class="flex align-center margin-tb-sm justify-between">
                    <view class="text-gray">运费</view>
                    <view class="">￥10.00</view>
                </view>
                <view class="flex align-center  justify-between">
                    <view class="text-gray">实付款</view>
                    <view class=" ">￥620.00</view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
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
                <view class="margin-top-sm flex ">
                    <view style="width: 60px" class="text-gray">备注</view>
                    <input type="text" placeholder="这是备注的信息" class="margin-left-lg" style="font-size: 14px">
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <view class="flex align-center justify-between ">
                    <view class="text-gray">订单编号</view>
                    <view class="flex align-center">
                        <view class="margin-right-sm">4856874887</view>
                        <copyButton value="4856874887"></copyButton>
                    </view>
                </view>
                <view class="flex align-center  justify-between margin-top-sm">
                    <view class="text-gray">申请时间</view>
                    <view class="">2022-08-22 12:23:26</view>
                </view>
                <view class="flex align-center  justify-between margin-top-sm">
                    <view class="text-gray">支付方式</view>
                    <view class="text-red">微信支付</view>
                </view>
                <view class="flex align-center  justify-between margin-top-sm">
                    <view class="text-gray">支付时间</view>
                    <view class="">2022-08-22 12:23:26</view>
                </view>
                <view v-if="status==3||status==4" class="flex align-center  justify-between margin-top-sm">
                    <view class="text-gray">发货时间</view>
                    <view class="">2022-08-22 12:23:26</view>
                </view>
                <view v-if="status==4" class="flex align-center  justify-between margin-top-sm">
                    <view class="text-gray">完成时间</view>
                    <view class="">2022-08-22 12:23:26</view>
                </view>
            </view>
<!--            <view class="whiteBoxShadow margin-top-sm flex justify-between align-center" >-->
<!--                <view class="text-gray">开具发票</view>-->
<!--                <view class="flex align-center">-->
<!--                    <view>普通发票</view>-->
<!--                    <view class="cuIcon-right margin-left-sm" style="font-size: 16px"></view>-->
<!--                </view>-->
<!--            </view>-->
        </view>
        <view v-if="status==1" class="flex justify-between foot bg-white padding w100">
            <view>
                <view class="flex">
                    <view class="text-bold">合计：</view>
                    <view class="text-red margin-left-sm">￥2518.00</view>
                </view>
            </view>
            <view class="flex">
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
import copyButton from "/src/components/common/copyButton";
import addressBox from "/src/pages/index/applicationSample/addressBox";
import fxbImage from "/src/components/fxb/fxb-image";
import fxbStatusCard from "/src/components/fxb/fxb-status-card";
import boxTitle from "/src/pages/agent/components/fxb-box-title";

export default {
    onLoad(option) {
        console.log(option);
        this.status = option.status || 0;
        console.log(this.status);
    },
    name: "myOrderDetails",
    components: { addressBox, copyButton, fxbImage ,fxbStatusCard,boxTitle},
    data() {
        return {
            status: 0,//待支付,0 未支付，1已支付，2已发货
            addressInfo: {
                name: "张傲",
                phone: "18878855878",
                address: "贵州省贵阳市观山湖区金融城金融城MAX·C座21楼24号",
            }
        };
    },
    methods: {
        toExpress() {
            uni.navigateTo({
                url: "pages/index/applicationSample/expressDetailsIndex"
            });
        },
        openBill() {
            uni.navigateTo({
                url: "pages/index/applicationSample/billDetailsIndex?=1235"
            });
        },
        toAfterSales() {
            uni.navigateTo({
                url: "/pages/admin/orderSample/afterMarket"
            });
        },
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        }
    },
    computed: {
        localStatus() {
            const tempArr = ["待支付", "待发货", "待收货", "已完成"];
            const tipsArr = ["剩余23小时58分", "商家已备货，等待发货", "商家已发货，等待收货", "订单已完成"];
            const iconArr = ["daishenhe", "daifahuo", "daishouhuo", "a-zu699"];
            return {
                status: tempArr[this.status - 1],
                tips: tipsArr[this.status - 1],
                icon: iconArr[this.status - 1]
            };
        }
    },
};
</script>

<style lang="scss" scoped>
.redBlock {
    width: 0.25rem;
    height: 20px;
    background: red;
    border-radius: 0.2rem;
}
.foot{
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>