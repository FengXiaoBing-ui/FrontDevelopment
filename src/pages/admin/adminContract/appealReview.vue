<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="申述复审" :autoBack="true">
        </u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ CustomBar + 'px;padding-bottom:100rpx'">
            <view class="whiteBoxShadow">
                <boxTitle title="申述复审"></boxTitle>
                <inputCell label="是否通过" text="是" icon="cuIcon-right" border="none"></inputCell>
            </view>
            <button @click="sure" class="cu-btn bg-red radius w100 margin-top">确定</button>
        </view>
    </view>
</template>

<script>
import inputCell from "/src/components/common/form/inputCell";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "appealReview",
    components:{
        boxTitle,
        inputCell
    },
    methods:{
        sure(){
            uni.showToast({
                title:"提交成功"
            })
            setTimeout(() => {
                uni.navigateBack({
                    delta:2
                })
            },500)
        }
    }
};
</script>

<style scoped>

</style>