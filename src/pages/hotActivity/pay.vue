<template>
    <view class="content">
        <u-navbar title="确认信息" :fixed="true" :autoBack="true"></u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:' + CustomBar +'px;padding-bottom:100rpx'">
            <view class="whiteBoxShadow">
                <boxTitle title="品鉴会信息"></boxTitle>
                <view class="flex justify-between align-center">
                    <view class="text-gray">品鉴会名称</view>
                    <view>2022观山湖区白酒品鉴会</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">举办地址</view>
                    <view>贵州省贵阳市观山湖区黔灵山路</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">酒店名称</view>
                    <view>世纪金源大酒店</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">举办日期</view>
                    <view>2022-08-10 15:30~17:30</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">收取金额</view>
                    <view>¥250.00</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">品鉴会流程</view>
                </view>
                <view class="padding-sm bg-gray margin-top-sm">
                    <text>一、签到：15:00~15:30嘉宾签到。
                        二、进场分组：2-3人一组，方便交流、互动、PK。
                        三、开场：破冰游戏
                        四、环节一：观看产品视频+现场有奖问答互动（奖一名）
                        五、环节二：现场产品讲解+现场有奖问答互动（奖两名）
                        六、环节三：现场产品体验+朋友圈点赞互动（奖三名）
                        七、环节四：现场产品预订（或销售）+买赠活动（现场所
                        有参与者）
                        八、环节五：活动大合影+幸运粉丝抽奖（抽一名）</text>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top">
                <boxTitle title="报名费用"></boxTitle>
                <view class="flex justify-between align-center">
                    <view class="text-gray">参会费用</view>
                    <view class="text-red">¥500.00</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">优惠券减免</view>
                    <view class="cuIcon-right"></view>
                </view>
                <view class="flex align-center justify-between u-border-top margin-top padding-top">
                    <view class="text-bold text-lg">费用合计</view>
                    <view class="text-red">¥450.00</view>
                </view>
            </view>
            <view class="fixed padding-xs bg-white flex align-center justify-between padding-lr w100">
                <view>合计：<text class="text-red">¥3000.00</text></view>
                <button class="cu-btn bg-red radius">去支付</button>
            </view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "pay",
    components:{
        boxTitle
    }
};
</script>

<style scoped>

</style>