<template>
<view>
    <u-navbar title="添加对公账号" :autoBack="true"> </u-navbar>
    <view :style="`margin-top:${CustomBar}px`">
        <view class="margin-xs">
               <view class="padding-top-xl">
                   <view class="text-bold">输入对公卡号添加</view>
                   <view class="margin-top-sm">
                       <u--input
                           placeholder="请输入银行卡卡号"
                           suffixIcon="camera"
                           suffixIconStyle="color: #909399"
                           v-model="account"
                       ></u--input>
                   </view>
                
                   <view class="margin-top-sm">
                       <button class="cu-btn  bg-red" style="width:100%" @click="pageTo">提交卡号</button>
                   </view>
               </view>
        </view>
    </view>
</view>
</template>

<script>
export default {
    name: "addPublicAccountIndex",
    data:function() {
        return {
            account:""
        }
    },
    methods:{
        pageTo(){
            uni.navigateTo({
                url:'pages/my/paySetting/addPublicAccountIndex'
            })
        }
    }
};
</script>

<style scoped>

</style>