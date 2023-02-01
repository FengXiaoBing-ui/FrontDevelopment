<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="代理商营业执照" :autoBack="true">
        </u-navbar>
        <view class="padding-bottom" :style="'margin-top:'+ CustomBar + 'px;'">
          <view>
            <fxbStatusCard status="已通过"
                           tips="已通过平台认证"
                           icon="daishenhe"></fxbStatusCard>
          </view>
            <view class="whiteBoxShadow margin-bottom-sm" style="transform: translateY(-20rpx)">
                <boxTitle title="身份认证信息"></boxTitle>
                <view class="flex justify-between margin-top-sm" :class="(item.wrapContent||item.wrapContentGray||item.isImage)?'flex-direction align-start':'align-center'" v-for="(item,index) in list" :key="index">
                    <view class="text-gray">{{ item.title }}</view>
                    <view v-if="item.content" :class="item.wrapContentGray?'bg-gray padding-sm radius margin-top-sm':item.wrapContent?'margin-top-sm':''">{{ item.content }}</view>
                    <fxbImage v-if="item.isImage" style="width: 200rpx;height: 200rpx" class="radius margin-top-sm" :src="item.isImage"></fxbImage>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbStatusCard from "/src/components/fxb/fxb-status-card";
export default {
    name: "agencyIDInfo",
    components:{
        boxTitle,
        fxbImage,
        fxbStatusCard
    },
    data(){
        return{
            list:[
                {
                    title:"身份证正面照（人像面）",
                    isImage:"/productDetails/Slice%201.png"
                },
                {
                    title:"身份证背面照（国徽面）",
                    isImage:"/productDetails/Slice%201.png"
                },
                {
                    title:"法人姓名",
                    content:"张东"
                },
                {
                    title:"法人身份证号",
                    content:"522422198912262868"
                }
            ]
        }
    }
};
</script>

<style scoped>

</style>