<template>
    <view class="content">
        <u-navbar title="活动详情" :fixed="true" :autoBack="true"></u-navbar>
        <view class="bgImg">
            <fxbImage width="750" :style="'height:'+ScreenHeight+'px'" src="/productDetails/Slice61.png" mode="aspectFill"></fxbImage>
        </view>
        <view class="padding-lr-sm padding-bottom" :style="'top:' + CustomBar +'px;position: relative;z-index:1'">
            <view class="text-xl margin-top-xl text-center">2022观山湖区白酒品鉴会</view>
            <view class="whiteBoxShadow margin-top">
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
                <boxTitle title="优惠券"></boxTitle>
                <view class="flex justify-between align-center">
                    <view class="text-gray">优惠券金额</view>
                    <view>¥50</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">优惠券数量</view>
                    <view>50张</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">酒店名称</view>
                    <view>世纪金源大酒店</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">有效期限</view>
                    <view>2022-08-10 15:30~17:30</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">使用规则</view>
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
            <button class="cu-btn bg-orange radius w100 margin-top lg">领取优惠券</button>
            <button @click="gotoEnroll" class="cu-btn bg-red radius w100 margin-top lg">我要报名</button>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbImage from "/src/components/fxb/fxb-image"
export default {
    name: "appraiseDetails",
    components:{
        fxbImage,
        boxTitle
    },
    data(){
        return{
        }
    },
    methods:{
        gotoEnroll(){
            uni.navigateTo({
                url:"/pages/hotActivity/enroll"
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.bgImg{
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
}
</style>