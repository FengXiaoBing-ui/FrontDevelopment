<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="处理进度" :autoBack="true">
        </u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ CustomBar + 'px;'">
            <view class="margin-bottom padding bg-white radius">
                <boxTitle title="处理进度"></boxTitle>
                <view class="cu-time margin-bottom margin-left">今天</view>
                <view v-for="(item,index) in expressList" :key="item.id" class="cu-timeline">
                    <view class="cu-time">{{ item.date }}</view>
                    <view :class="index==0?'text-blue':''" class="cu-item">
                        <view class="cu-item ">
                            <view :class="index==0?'text-black':'text-gray'" class="content  padding-sm"
                                  style="background:#F7F7F7 ;">
                                <text>{{ item.time }}</text>
                                <text :class="item.status=='审核通过'?'text-green':item.status=='审核未通过'?'text-red':'text-gray'">【{{ item.status }}】</text>
                                {{ item.content }}
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "handleProgress",
    components:{
        boxTitle
    },
    computed: {
        expressList() {
            return this.expressInfo.reverse();
        }
    },
    data() {
        return {
            expressInfo: [
                { time: "02:26", date: "08.31",status:"", content: "贵阳金阳三部的王晓刚[18565235646]正在为您派件。", id: "3" },
                { time: "02:26", date: "08.31",status:"申诉已提交", content: "您的申诉请求已提交服务商，等待服务商复审。", id: "2" },
                { time: "02:26", date: "08.31",status:"审核未通过", content: "未通过原因，根据调查取证，确实存在串货现象，给予不通过处理，您可以联系【平台客服介入】", id: "1" },
                { time: "02:26", date: "08.31",status:"审核通过", content: "您的申诉审核已通过请等待服务商处理", id: "0" },
            ]
        };
    }
};
</script>

<style scoped>

</style>