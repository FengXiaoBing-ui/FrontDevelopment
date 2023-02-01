<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="报名详情" :autoBack="true"></u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ CustomBar + 'px'">
            <view class="whiteBoxShadow">
                <boxTitle title="基本信息"></boxTitle>
                <view class="flex justify-between align-center">
                    <view class="text-gray">头像</view>
                    <u-avatar src="https://cdn.uviewui.com/uview/album/1.jpg" size="50"></u-avatar>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">姓名</view>
                    <view>王刚</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">联系电话</view>
                    <view>18690728989</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">公司名称</view>
                    <view>贵州好酒选电子商务有限公司</view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="报名信息"></boxTitle>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">报名编号</view>
                    <view>15962714564534</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">报名时间</view>
                    <view>2022-08-30 15:23:56</view>
                </view>
                <view v-if="status==4" class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">用户来源</view>
                    <view>平台</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">支付状态</view>
                    <view>{{status==4&&type==0?"未支付":"已支付"}}</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">支付金额</view>
                    <view>¥450.00</view>
                </view>
                <view v-if="!(status==4&&type==0)" class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">优惠券使用</view>
                    <view>¥50.00</view>
                </view>
                <view v-if="!(status==4&&type==0)" class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">支付方式</view>
                    <view>微信支付</view>
                </view>
                <view v-if="!(status==4&&type==0)" class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">支付时间</view>
                    <view>2022-08-30 15:23:56</view>
                </view>
                <view v-if="status==5||status==6" class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">参会状态</view>
                    <view :class="(status==5||status==6)&&type==0?'text-red':''">{{(status==5||status==6)&&type==0?"未参会":"已参会"}}</view>
                </view>
                <view v-if="(status==5||status==6)&&type==1" class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">参会时间</view>
                    <view>2022-08-30 15:23:56</view>
                </view>
            </view>
        </view>
        <view v-if="(status==5||status==6)&&type==0" class="fixed w100 padding-xs bg-white">
            <button class="cu-btn bg-red radius w100">退报名费</button>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "enrollDetails",
    components:{
        boxTitle
    },
    data(){
        return{
            type:0,
            status:0,
            list:[
                {
                    name:"报名编号",
                    value:"1542457545727"
                },
                {
                    name:"报名时间",
                    value:"2022-08-30 12:30"
                },
                {
                    name:"支付状态",
                    value:"已支付"
                },
                {
                    name:"支付金额",
                    value:"￥210.00"
                },
                {
                    name:"优惠券使用",
                    value:"￥50.00"
                },
                {
                    name:"支付方式",
                    value:"微信支付"
                },
                {
                    name:"支付时间",
                    value:"2022-08-30 12:30"
                },
                {
                    name:"参会状态",
                    value:status==0?"未参会":status==1?"已参会":""
                }
            ]
        }
    },
    onLoad(options){
        this.status = options.status
        this.type = options.type;// this.status === 4&&this.type===0:未支付 (this.status === 5||this.status === 6)&&this.type===0:未参会
    }
};
</script>

<style scoped>

</style>