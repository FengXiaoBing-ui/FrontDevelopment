<!--wjx 20220830-->
<template>
    <view>
        <u-navbar :autoBack="true" title="订单详情"></u-navbar>
<!--        <view v-if="false" :style="`margin-top:${(CustomBar +10)*2}rpx`" class="padding-lr-sm padding-bottom">-->
<!--            <view class="whiteBoxShadow">-->
<!--                <view class="flex justify-between">-->
<!--                    <view>订单状态</view>-->
<!--                    <view-->
<!--                        :class="`${status==1?'text-orange':status==2?'text-cyan':status==3?'text-blue':status==4?'text-green':''}`">-->
<!--                        {{ status == 1 ? "待支付" : status == 2 ? "待发货" : status == 3 ? "待收货" : status == 4 ? "已完成" : "" }}-->
<!--                    </view>-->
<!--                </view>-->
<!--            </view>-->

<!--            <view class="whiteBoxShadow margin-top-sm">-->
<!--                <boxTitle title="收货人信息"></boxTitle>-->
<!--                <view class="flex justify-start">-->
<!--                    <view>张晓丹</view>-->
<!--                    <view class="cuIcon-mobile margin-left-sm text-orange">-->
<!--                        <text class="text-black">185406824504</text>-->
<!--                    </view>-->
<!--                </view>-->
<!--                <view class="cuIcon-locationfill text-orange margin-top-sm">-->
<!--                    <text class="margin-left-sm text-black">贵州省贵阳市观山湖区德福中心</text>-->
<!--                </view>-->
<!--            </view>-->

<!--            <view class="whiteBoxShadow margin-top-sm">-->
<!--                <view class="flex align-center">-->
<!--                    <fxbImage width="80" height="80" src="/productDetails/Slice%201.png"-->
<!--                              mode="aspectFill"></fxbImage>-->
<!--                    <view class="margin-left-sm">东方国宾·尊致酒53°瓶装500ml</view>-->
<!--                </view>-->
<!--                <view class="flex justify-between margin-top-sm">-->
<!--                    <view class="text-gray">单价</view>-->
<!--                    <view>￥259.00</view>-->
<!--                </view>-->
<!--                <view class="flex justify-between margin-top-sm">-->
<!--                    <view class="text-gray">样品数量</view>-->
<!--                    <view>2</view>-->
<!--                </view>-->
<!--                <view class="flex justify-between margin-top-sm">-->
<!--                    <view class="text-gray">运费</view>-->
<!--                    <view>￥0.00</view>-->
<!--                </view>-->
<!--                <view class="u-border-bottom margin-tb-sm"></view>-->
<!--                <view class="flex justify-between margin-top-sm">-->
<!--                    <view class="text-bold">合计</view>-->
<!--                    <view class="text-red">￥518.00</view>-->
<!--                </view>-->
<!--            </view>-->
<!--            <view class="whiteBoxShadow margin-top-sm">-->
<!--                <boxTitle title="订单信息"></boxTitle>-->
<!--                <view class="flex align-center justify-between ">-->
<!--                    <view class="text-gray">订单编号</view>-->
<!--                    <view class="flex align-center">-->
<!--                        <view class="margin-right-sm">4856874887</view>-->
<!--                        <copyButton value="4856874887"></copyButton>-->
<!--                    </view>-->
<!--                </view>-->
<!--                <view class="flex align-center  justify-between margin-top-sm">-->
<!--                    <view class="text-gray">申请时间</view>-->
<!--                    <view class="">2022-08-22 12:23:26</view>-->
<!--                </view>-->
<!--                <view v-if="status==2||status==3||status==4" class="flex align-center  justify-between margin-top-sm">-->
<!--                    <view class="text-gray">支付金额</view>-->
<!--                    <view class="">￥530.00</view>-->
<!--                </view>-->
<!--                <view v-if="status==2||status==3||status==4" class="flex align-center  justify-between margin-top-sm">-->
<!--                    <view class="text-gray">支付方式</view>-->
<!--                    <view class="">微信支付</view>-->
<!--                </view>-->
<!--                <view v-if="status==2||status==3||status==4" class="flex align-center  justify-between margin-top-sm">-->
<!--                    <view class="text-gray">支付时间</view>-->
<!--                    <view class="">2022-08-22 12:23:26</view>-->
<!--                </view>-->
<!--                <view v-if="status==3||status==4" class="flex align-center  justify-between margin-top-sm">-->
<!--                    <view class="text-gray">发货时间</view>-->
<!--                    <view class="">2022-08-22 12:23:26</view>-->
<!--                </view>-->
<!--                <view v-if="status==4" class="flex align-center  justify-between margin-top-sm">-->
<!--                    <view class="text-gray">完成时间</view>-->
<!--                    <view class="">2022-08-22 12:23:26</view>-->
<!--                </view>-->
<!--            </view>-->
<!--        </view>-->
<!--        <view v-if="false" class="botBtn foot bg-white padding-lr-sm padding-top-sm padding-bottom-xl">-->
<!--            <view class="cu-btn w100 bg-red radius" @click="">确认发货</view>-->
<!--        </view>-->
        <view :style="`margin-top:${(CustomBar +10)*1.5}rpx`" class="padding-bottom-sm">
            <!--顶部状态-->
            <view class="">
                <fxb-status-card :status="localStatus.status" :tips="localStatus.tips"
                                 :icon="localStatus.icon"></fxb-status-card>
                <view class="padding-bottom-sm whiteBoxShadow" style="transform: translateY(-20rpx)">
                    <view class="flex align-start  padding-sm">
                        <fxbImage width="150" height="150" src="/productDetails/Slice%201.png"
                                  mode="aspectFill"></fxbImage>
                        <view class="margin-left-sm w75">
                            <view>东方国宾·尊致酒53°瓶装500ml</view>
                            <view class="flex margin-top-sm align-center">数量：
                                <text class="margin-left-sm">2</text>
                            </view>
                            <view class="flex margin-top-sm">代理价
                                <text class="margin-left-sm">￥259.00</text>
                            </view>
                        </view>
                    </view>
                    <view v-if="agentAndService &&(status==3||status==4)" class="flex justify-end ">
                        <view @click="Jump" class="cu-btn bg-white border">申请售后</view>
                        <view @click="gotoPath('/pages/index/applicationSample/expressDetailsIndex')"
                              class="cu-btn bg-white border margin-left-sm">查看物流
                        </view>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow">
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
            <!--            <addressBox v-if="agentAndService&&status==1" def border :addressInfo="addressInfo" :select="true"-->
            <!--                        class="margin-tb-sm"-->
            <!--            ></addressBox>-->
            <view v-if="!agentAndService && (status==3||status==4)" class="whiteBoxShadow margin-top-sm">
                <boxTitle title="物流信息" right-text="联系物流" right-text-class="text-red"></boxTitle>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">物流公司</view>
                    <view>中通快递</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">物流单号</view>
                    <view class="flex">
                        <view>12789678245721863</view>
                        <view class=" margin-left-sm radius text-sm text-center"
                              style="color: #F37B1D ;background-color:rgba(255,165,0,0.2)">复制
                        </view>
                    </view>
                </view>
                <view class="flex justify-end margin-top-sm">
                    <view @click="gotoPath('/pages/index/applicationSample/expressDetailsIndex')"
                          class="cu-btn bg-white border"> 查看物流
                    </view>
                </view>
            </view>
            <view class="bg-white padding radius margin-tb-sm">
                <boxTitle title="配送信息"></boxTitle>
                <view class="flex align-center margin-tb-sm">
                    <view class="text-gray w25">配送方式</view>
                    <view class="margin-left-sm">中通快递</view>
                </view>
                <view class="flex align-top margin-top-sm">
                    <view class="text-gray w25">收货信息</view>
                    <view class="margin-left-sm">
                        <view class="flex align-center">
                            <view class="margin-right-sm">张强</view>
                            <view class="cuIcon-mobile flex align-center text-orange">
                                <text class="text-black">1869178548</text>
                            </view>
                        </view>
                        <view class="margin-top">贵阳市观山湖区金融城maxC座2124</view>
                    </view>
                </view>
                <view class="flex align-center margin-top-sm">
                    <view class="text-gray w25">备注</view>
                    <input type="text" class="margin-left-sm" placeholder="这是备注信息" style="font-size: 14px">
                </view>
            </view>
            <view class="bg-white padding radius margin-tb-sm">
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
                <view v-if="status==2||status==3||status==4"
                      class="flex align-center  justify-between margin-top-sm">
                    <view class="text-gray">支付方式</view>
                    <view class="text-red">微信支付</view>
                </view>
                <view v-if="status==2||status==3||status==4"
                      class="flex align-center  justify-between margin-top-sm">
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
        </view>
        <!--        <view v-if="agentAndService&&(status==0||status==1)"-->
        <!--              class="flex justify-between foot bg-white padding-lr-sm w100 padding-top-sm padding-bottom-xl">-->
        <!--            <view>-->
        <!--                <view class="flex">-->
        <!--                    <view class="text-bold">合计：</view>-->
        <!--                    <view class="text-red margin-left-sm">￥2518.00</view>-->
        <!--                </view>-->
        <!--            </view>-->
        <!--            <view class="flex">-->
        <!--                <view class="cu-btn bg-gray radius">-->
        <!--                    取消订单-->
        <!--                </view>-->
        <!--                <view @click="gotoPath('/pages/admin/myOrderForPersonal/paymentMethod')"-->
        <!--                      class="cu-btn bg-red radius margin-left-sm">-->
        <!--                    确认支付-->
        <!--                </view>-->
        <!--            </view>-->
        <!--        </view>-->
        <view v-if="agentAndService && (status==1)"
              class="flex justify-end foot bg-white padding w100">
            <view class="cu-btn bg-gray radius">
                取消订单
            </view>
            <view @click="gotoPath('pages/index/applicationSample/payment')"
                  class="cu-btn bg-red radius margin-left-sm">
                去付款
            </view>
        </view>
        <view v-if="!agentAndService && status==2"
              class="foot bg-white padding w100 ">
            <view class="cu-btn bg-red w100 radius">确认发货</view>
        </view>
    </view>
</template>
<script>
import fxbStatusCard from "/src/components/fxb/fxb-status-card";
import copyButton from "/src/components/common/copyButton";
import addressBox from "./addressBox";
import fxbImage from "/src/components/fxb/fxb-image";
import { mapState } from "vuex";
import boxTitle from "/src/pages/agent/components/fxb-box-title";

export default {
    onLoad(option) {
        console.log(option);
        this.status = option.status || 0;
    },
    computed: {
        ...mapState("index", ["agentAndService"]),
        //agentAndService：服务商和代理商的状态 false:服务商,true:代理商
        localStatus() {
            const tempArr = ["待支付", "待发货", "待收货", "已完成"];
            const tipsArr = ["剩余23小时58分", "商家已备货，等待发货", "商家已发货，等待收货", "订单已完成"];
            const iconArr = ["jinhangzhong", "daifahuo", "daishouhuo", "a-zu699"];
            return {
                status: tempArr[this.status - 1],
                tips: tipsArr[this.status - 1],
                icon: iconArr[this.status - 1]
            };
        }
    },
    name: "orderDetailsIndex",
    components: { addressBox, copyButton, fxbImage, boxTitle, fxbStatusCard },
    data() {
        return {
            statusList: 1,
            status: 0,//待支付,0 未支付，1已支付，2已发货
            addressInfo: {
                name: "张傲",
                phone: "18878855878",
                address: "贵州省贵阳市观山湖区金融城金融城MAX·C座21楼24号"
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
        },
        Jump() {
            let statusList = this.statusList;
            uni.navigateTo({
                url: "/pages/admin/orderSample/afterMarket?statusList=" + statusList
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.icon-position {
    position: relative;
    right: 50px;
    bottom: 1px;
}

.top-background-image {
    background-image: url('/static/orderDetails-bg/pic_bg.png');
    background-size: 100% 100px;
    background-repeat: no-repeat;
}

.redBlock {
    width: 0.25rem;
    height: 20px;
    background: red;
    border-radius: 0.2rem;
}

.foot {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>
