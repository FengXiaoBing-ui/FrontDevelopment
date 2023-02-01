<template>
    <view>
        <u-navbar title="积分规则" rightText="" rightClick="" :autoBack="true"></u-navbar>
        <view class="index"  :style="`margin-top:${CustomBar}px`">
            <view class="padding-lr-sm whiteBoxShadow " >
                <view class="margin-bottom"  v-for="(item,index) in list" :key="index">
                    <view class="margin-tb-sm text-orange"  style="font-weight: bold">{{item.title}}</view>
                    <view>{{item.content}}</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {
                    title: "1、积分是什么？",
                    content:"所有会员在本站购物均可获得积分，积分可以用来参与兑换活动。本站会不定期推出各类积分兑换活动，请随时关注关于积分的活动告知。详情请点击查看以下各项说明。\n"
                },
                {
                    title:"2、积分可以做什么？",
                    content:"所有会员在本站购物均可获得积分，积分可以用来参与兑换活动。本站会不定期推出各类积分兑换活动，请随时关注关于积分的活动告知。详情请点击查看以下各项说明。\n"
                },
                {
                    title:"3、积分如何兑换？",
                    content:"所有会员在本站购物均可获得积分，积分可以用来参与兑换活动。本站会不定期推出各类积分兑换活动，请随时关注关于积分的活动告知。详情请点击查看以下各项说明。\n"
                },
                {
                    title:"4、积分是否有有效期？",
                    content:"所有会员在本站购物均可获得积分，积分可以用来参与兑换活动。本站会不定期推出各类积分兑换活动，请随时关注关于积分的活动告知。详情请点击查看以下各项说明。\n"
                }
            ]
        }
    },

};
</script>

<style scoped lang="scss">
.index{
    padding: 10px;
}
.whiteBoxShadow {
    padding: 32rpx 24rpx;
    background: white;
    border-radius: 10rpx;
    box-shadow: 4rpx 4rpx 16rpx #e6dee6;
}
</style>