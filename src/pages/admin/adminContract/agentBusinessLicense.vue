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
            <boxTitle title="营业执照"></boxTitle>
            <view class="flex justify-between margin-top-sm" :class="(item.wrapContent||item.wrapContentGray||item.isImage)?'flex-direction align-start':'align-center'" v-for="(item,index) in list" :key="index">
                <view class="text-gray">{{ item.title }}</view>
                <rich-text class="text-sm" style="line-height: 50rpx" v-if="item.content" :class="item.wrapContentGray?'bg-gray padding-sm radius margin-top-sm':item.wrapContent?'margin-top-sm':''" :nodes="item.content"></rich-text>
                <fxbImage v-if="item.isImage" width="200" height="200" class="radius margin-top-sm" :src="item.isImage"></fxbImage>
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
    name: "agentBusinessLicense",
    components:{
        boxTitle,
        fxbImage,
        fxbStatusCard
    },
    data(){
        return{
            list:[
                {
                    title:"营业执照图片",
                    isImage:"/productDetails/Slice%201.png"
                },
                {
                    title:"统一社会信用代码",
                    content:"ASDF79887SDFA67538"
                },
                {
                    title:"公司名称",
                    content:"贵阳市万隆烟酒行"
                },
                {
                    title:"注册资本",
                    content:"人民币叁佰万元整"
                },
                {
                    title:"公司类型",
                    content:"个体工商户"
                },
                {
                    title:"成立日期",
                    content:"2022-10-15"
                },
                {
                    title:"法定代表人",
                    content:"张东"
                },
                {
                    title:"营业期限",
                    content:"长期"
                },
                {
                    title:"经营范围",
                    wrapContentGray:true,
                    content:"(一)经营范围中的一般经营项目，因法律、行政法规国务院决定调整为许可经营项目后，企业未按有关规定申请办理审批手续并获得批准的；<br/>(二)经营范围中的许可经营项目，法律、行政法规、国务院决定要求重新办理审批，企业未按有关规定申请办理审批手续并获得批准的；<br/>(三)经营范围中的许可经营项目，审批机关批准的经营期限届满企业未重新申请办理审批手续并获得批准的；<br/>(四)经营范围中的许可经营项目被审批机关取消的。"
                },
                {
                    title:"经营场所",
                    wrapContent:true,
                    content:"贵州省贵阳市观山湖区德福中心A3栋6楼10号"
                },
                {
                    title:"发证日期",
                    content:"2022-10-15"
                },
                {
                    title:"登记机关",
                    content:"贵阳市观山湖区工商管理局"
                }
            ]
        }
    }
};
</script>

<style scoped>

</style>