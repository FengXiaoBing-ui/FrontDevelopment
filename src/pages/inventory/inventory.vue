<template>
  <view >
    <u-navbar
        title="库存"
        :autoBack="true"
    >
    </u-navbar>
    <view :style="`margin-top:${CustomBar}px`">
      <view class="flex justify-around padding marginHeader "  >
        <view class="" @click="go('pages/searchPage/searchPage')">搜索页</view>
        <view @click="go('pages/appCenter/attestation/basicInfo')">认证页</view>
        <view @click="go('pages/appCenter/selectCity/selectArea')">地图页</view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "inventory",
  components:{

  },
  methods: {
    go(url) {
      uni.navigateTo({url})
    },
    back() {
      uni.navigateBack({
        delta: 1
      });
    },
  }
}
</script>
<style scoped>
.marginH{
  margin-top: 5vh;
}
</style>
