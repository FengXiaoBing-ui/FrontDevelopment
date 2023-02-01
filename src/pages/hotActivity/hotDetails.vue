<template>
    <view>
        <u-navbar :height="CustomBar+StatusBar" leftIconColor="#ffffff" :autoBack="true" bgColor="#ffffff00" :border="false"
                  :fixed="true"
                  :safeAreaInsetTop="false">
<!--            <view slot="left">-->
<!--                <text class="cuIcon-back"></text>-->
<!--            </view>-->
            <view slot="right">
                <text class="cuIcon-share text-white" style="font-size: 40rpx"></text>
            </view>
        </u-navbar>
        <fxbImage width="750" height="584" src="/img/index/Slice60.png"></fxbImage>
        <view style="background-color: #F94C2A" class="padding-lr-sm padding-bottom">
            <view class="activityBox flex flex-direction align-center">
                <view class="titleBox flex justify-center align-center text-white">
                    <view class="titleBoxSun"></view>
                    <text class="titleText text-lg">活动商品</text>
                </view>
                <fxbProductCard class="padding-lr-sm margin-top-sm"></fxbProductCard>
            </view>
            <view class="activityBox flex flex-direction align-center margin-top">
                <view class="titleBox flex justify-center align-center text-white">
                    <view class="titleBoxSun"></view>
                    <text class="titleText text-lg">发布区域</text>
                </view>
                <view class="text-bold text-lg margin-top-sm">贵州省 贵阳市</view>
                <u-tabs itemStyle="height: 34px;" :list="list1" @click=""></u-tabs>
                <view class="flex align-center margin-top">
                    <view class="text-center">
                        <view>3</view>
                        <view class="text-gray">发布代理</view>
                    </view>
                    <view class="text-center margin-lr-xl">
                        <view>3</view>
                        <view class="text-gray">已代理</view>
                    </view>
                    <view class="text-center">
                        <view>0</view>
                        <view class="text-gray">剩余代理</view>
                    </view>
                </view>
            </view>
            <view class="activityBox flex flex-direction align-center margin-top">
                <view class="titleBox flex justify-center align-center text-white">
                    <view class="titleBoxSun"></view>
                    <text class="titleText text-lg">代理政策</text>
                </view>
                <u-read-more class="margin-top-sm w100 padding-lr-sm" ref="uReadMore" textIndent="0" :toggle="true" color="gray" openText="向上收起" closeText="查看更多">
                    <view class="text-bold margin-top-sm">合同金额</view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">合同商品总量</view>
                        <view class="flex flex-direction align-end">
                            <view>3600瓶</view>
                            <view class="text-gray text-sm" style="font-style: oblique">600件</view>
                        </view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">合同商品总额</view>
                        <view class="flex flex-direction align-end">
                            <view class="text-red text-bold">¥932600.00</view>
                            <view class="text-gray text-sm" style="font-style: oblique">玖拾叁万贰仟陆佰元整</view>
                        </view>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">合同期限</text>
                        <text>1年</text>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">结算方式</text>
                        <text>现结</text>
                    </view>


                    <view class="text-bold padding-top margin-top u-border-top">首单进货</view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">首单进货商品数量</view>
                        <view class="flex flex-direction align-end">
                            <view>600瓶</view>
                            <view class="text-gray text-sm" style="font-style: oblique">100件</view>
                        </view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">首单进货金额</view>
                        <view class="flex flex-direction align-end">
                            <view class="text-red text-bold">¥155400.00</view>
                            <view class="text-gray text-sm" style="font-style: oblique">拾伍万伍仟肆佰元整</view>
                        </view>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">首单随货支持(百分比)</text>
                        <text>20%</text>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">支持商品数量</view>
                        <view class="flex flex-direction align-end">
                            <view>120瓶</view>
                            <view class="text-gray text-sm" style="font-style: oblique">20件</view>
                        </view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">支持商品金额</view>
                        <view class="flex flex-direction align-end">
                            <view class="text-red text-bold">¥31080.00</view>
                            <view class="text-gray text-sm" style="font-style: oblique">拾伍万伍仟肆佰元整</view>
                        </view>
                    </view>

                    <view class="text-bold padding-top margin-top u-border-top">返佣奖励</view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">完成合同任务量</view>
                        <view class="flex flex-direction align-end">
                            <view>3600瓶</view>
                            <view class="text-gray text-sm" style="font-style: oblique">600件</view>
                        </view>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">返佣方式</text>
                        <text>商品</text>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">返佣商品数量</view>
                        <view class="flex flex-direction align-end">
                            <view>600瓶</view>
                            <view class="text-gray text-sm" style="font-style: oblique">100件</view>
                        </view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">返佣商品金额合计</view>
                        <view class="flex flex-direction align-end">
                            <view class="text-red text-bold">¥155400.00</view>
                            <view class="text-gray text-sm" style="font-style: oblique">拾伍万伍仟肆佰元整</view>
                        </view>
                    </view>


                    <view class="text-bold padding-top margin-top u-border-top">品鉴会支持</view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">单场支持金额</text>
                        <text class="text-red">¥1500.00/场</text>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">单场支持酒水</text>
                        <text>2瓶/场</text>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">单场支持统计(含酒水)</text>
                        <text class="text-red">¥2018.00/场</text>
                    </view>


                    <view class="text-bold padding-top margin-top u-border-top">保证金减免</view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">免保证金</view>
                        <view class="flex flex-direction align-end">
                            <view class="text-red text-bold">¥100900.00</view>
                            <view class="text-gray text-sm" style="font-style: oblique">拾万零玖佰元整</view>
                        </view>
                    </view>


                    <view class="text-bold padding-top margin-top u-border-top">合同生效条件</view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">商品首付款</text>
                        <text class="text-red">需支付首单付款</text>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm margin-bottom padding-bottom u-border-bottom">
                        <text class="text-gray">保证金</text>
                        <text>需缴纳保证金</text>
                    </view>
                </u-read-more>
            </view>
        </view>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image";
import fxbProductCard from "/src/components/fxb/fxb-product-card"
export default {
    name: "hotDetails",
    components: {
        fxbImage,
        fxbProductCard
    },
    data(){
        return{
            list1:[
                {
                    name:"观山湖区"
                },
                {
                    name:"云岩区"
                },
                {
                    name:"南明区"
                },
            ]
        }
    }
};
</script>

<style lang="scss" scoped>
.activityBox {
    position: relative;
    top: -10rpx;
    width: 710rpx;
    padding-bottom: 32rpx;
    background: #FFFFFF;
    border-radius: 0px 16px 0px 16px;
    box-shadow: -10rpx 10rpx 10rpx 0 #ff3d18;
}
/deep/.u-tabs__wrapper__nav__line{
    background: linear-gradient(135deg, #F37B1D 0%, #E54D42 100%) !important;
}

.titleBox {
    width: 362rpx;
    height: 80rpx;
    background: linear-gradient(180deg, #FFC9C6 0%, #E54D42 16%);
    opacity: 1;
    border-radius: 0 0 40rpx 40rpx;
    position: relative;

    .titleBoxSun {
        position: absolute;
        width: 432rpx;
        height: 40rpx;
        background: linear-gradient(180deg, #FFC9C6 0%, #E54D42 16%);
        left: -40rpx;
        top: 0;
    }

    .titleText {
        position: relative;
        z-index: 1;
    }

    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: -40rpx;
        width: 40rpx;
        height: 40rpx;
        background-color: white;
        border-top-right-radius: 40rpx;
        z-index: 1;
    }

    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: -40rpx;
        width: 40rpx;
        height: 40rpx;
        background-color: white;
        border-top-left-radius: 40rpx;
        z-index: 1;
    }
}
</style>