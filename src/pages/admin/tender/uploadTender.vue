<template>
  <view class="content">
    <u-navbar title="上传投标文件" :fixed="true" :autoBack="true"></u-navbar>

    <view class="padding-tb" :style="'margin-top:' + CustomBar + 'px;padding-bottom: 120rpx'">
      <view class="whiteBoxShadow">
        <boxTitle title="上传投标文件"></boxTitle>
        <view class="padding-sm text-red" style="background-color: rgba(229,77,66,0.05)">
          <view class="text-bold margin-bottom">温馨提示：</view>
          <view class="text-sm">1、投标文件命名“公司名称+投标文件”；</view>
          <view class="text-sm margin-top-sm">2、投标文件请按照招标文件所需要的内容规范进行添加；</view>
        </view>
        <view>
          <view class="flex justify-between align-center margin-top padding-top" style="border-top: 1px solid #F1F1F1">
            <view>上传文件</view>
            <view class="cuIcon-roundadd text-red" style="font-size: 40rpx"></view>
          </view>
        </view>
        <view class="margin-top text-blue">东方国宾尊致条码招商政策.word</view>
      </view>
    </view>

    <view class="botBtn padding-lr-sm padding-tb-xs bg-white">
      <button style="width: 100%"
              class="cu-btn bg-red radius lg">确认添加
      </button>
    </view>
  </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
  name: "uploadTender",
  components:{
    boxTitle
  }
}
</script>

<style lang="scss" scoped>
.botBtn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>