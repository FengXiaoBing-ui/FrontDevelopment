<template>
  <view>
    <u-navbar title="支付密码" :autoBack="true" :safeAreaInsetTop="true"></u-navbar>
    <view :style="`margin-top: ${CustomBar}px`" class=" padding-top" >
    <view class="whiteBoxShadow" >
      <view class="bg-white Menuactive ">
        <view class=" flex justify-between " @click="pageTo('pages/my/paySetting/changePasswordIndex?type=1')">
          <view>修改支付密码</view>
          <view class="cuIcon-right"></view>
        </view>
      </view>
    </view>
    <view class="whiteBoxShadow padding-sm bg-white Menuactive margin-top">
      <view class="  flex justify-between " @click="pageTo('pages/my/paySetting/retrievePasswordIndex')">
        <view>忘记支付密码</view>
        <view class="cuIcon-right"></view>
      </view>
    </view>
  </view>
  </view>
</template>
<script>
export default {
  name: "passwordSettingIndex",
  methods: {
    pageTo(url) {
      uni.navigateTo({
        url
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.Menuactive:hover {
  background: rgba(232, 232, 233, 0.2);
}
</style>