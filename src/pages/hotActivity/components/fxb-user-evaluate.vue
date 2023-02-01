<template>
  <view>
    <view class="evaluateBox padding-tb u-border-bottom" v-for="item in 5" :key="item">
      <view class="flex align-center">
        <u-avatar text="酒" shape="square"></u-avatar>
        <view class="margin-left-sm">
          <view class="text-bold">我是大酒盅</view>
          <view class="text-gray">代理商</view>
        </view>
      </view>
      <view class="tagList margin-tb-sm">
        <text class="bg-gray text-gray radius margin-right-sm" style="padding: 6rpx">口感醇香</text>
        <text class="bg-gray text-gray radius margin-right-sm" style="padding: 6rpx">度数适中</text>
        <text class="bg-gray text-gray radius margin-right-sm" style="padding: 6rpx">价格适中</text>
      </view>
      <view class="text-lg">
        和朋友聚会经常喝的都是这款酒，口感醇香，回味无穷，三个人每次都能喝个两瓶
      </view>
      <view class="flex justify-between margin-top">
        <image class="evaluateImg" v-for="(item,index) in list" :key="index" :src="item" mode="aspectFill"></image>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "fxb-user-evaluate",
  data() {
    return {
      list: [
        require("/src/static/bottle/77.jpeg"),
        require("/src/static/bottle/88.jpeg"),
        require("/src/static/bottle/11.jpeg")
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.evaluateBox {
  &:last-child {
    border: none;
  }
}

.evaluateImg {
  width: 30%;
  height: 150rpx;
}
</style>
