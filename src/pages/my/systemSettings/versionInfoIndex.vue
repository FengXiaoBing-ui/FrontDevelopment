<template>
    <view>
        <u-navbar :autoBack="true" title="版本"></u-navbar>
        <view :style="`margin-top:${CustomBar}px;height:calc(100vh - ${CustomBar}px )`" class="flex justify-center bg-white flex-direction align-center">
            <view class="headBox">
                <image src="/static/logo.png" style="width: 100%" mode="widthFix"></image>
            </view>
            <view class="text-gray margin-tb-sm">版本号V1.0</view>
            <view style="height: 20vh;width:100%" class="flex justify-between padding-sm align-center padding-sm margin-top-xl ">
                <view class="text-bold">检测更新</view>
                <button v-if="!isNew" class="cu-btn sm bg-green" @click="getVersion">检测更新</button>
                <view v-else  class="text-gray">已是最新版</view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "versionInfoIndex",
    data(){
        return{
            isNew:false
        }
    },
    methods:{
        getVersion(){
            this.isNew=true
        }
    }
};
</script>
<style scoped lang="scss">
.headBox{
    width: 150rpx;
    height: 150rpx;
    border-radius: 50%;
    padding: 15rpx;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

}
</style>