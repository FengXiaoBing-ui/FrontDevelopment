<template>
  <view>
      <u-navbar title="对公账号" :autoBack="true"> </u-navbar>
    <view :style="`margin-top: ${CustomBar}px`" class=" padding-top" >
          <view class="margin-xs">
              <view class="bg-white padding flex justify-between align-center margin-top-xs">
                  <view class="flex align-center">
                    <view style="width: 50rpx;height: 50rpx;background-repeat: no-repeat" class="t-icon margin-right-xs t-icon-jiaotongyinhang"></view>
                    <view class="margin-left"> 建设银行</view>
                  </view>
                  <view>****8848</view>
              </view>
              <view class="margin-top ">
                  <button style="width: 100%" class="cu-btn bg-red sm text-white  padding-tb" @click="pageTo">添加对公账户</button>
              </view>
          </view>
      </view>
  </view>
</template>

<script>



export default {

    name: "publicAccountIndex",

    methods:{
        pageTo(){
            uni.navigateTo({
                url:'pages/my/paySetting/addAccount'
            })
        }
    }
};
</script>

<style scoped lang="scss">
.grayRound{
    background: #999999;
    border-radius: 50%;
    height: 60rpx;
    width: 60rpx;
    overflow: hidden;
}
</style>