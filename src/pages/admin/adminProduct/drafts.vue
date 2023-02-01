<template>
  <view class="content" style="padding-bottom: 120rpx">
    <u-navbar title="草稿箱" :fixed="true" :autoBack="true"></u-navbar>
    <view :style="`margin-top:${CustomBar}px`" class="padding-sm" style="padding-bottom: 120rpx">
      <view class="whiteBoxShadow margin-top" v-for="(site,index) in 4" :key="index">
        <view class="flex ">
          <fxbImage width="140" height="140" mode="aspectFill" class=""
                    src="/productDetails/Slice%201.png"></fxbImage>
          <view class="">
          <view class="margin-left-sm">东方国宾·尊致500ml瓶装</view>
          <view class="flex justify-between margin-top-sm">
            <view class="text-gray margin-left-sm">香型:酱香型</view>
            <view class="text-gray margin-left">度数:53度</view>
            <view class="text-gray margin-left">容量:500ml</view>
          </view>
            <view class="flex justify-between margin-top-sm">
              <view class="text-black margin-left-sm ">建议零售价:<text class="text-red">￥3625.00</text></view>
              <view class="text-black margin-left-sm">代理价:<text class="text-red">￥3651.00</text></view>
            </view>
        </view>
        </view>
        <view class="flex justify-end margin-top">
        <view class="cu-btn round text-black line-gray" style="font-size: 12px;width: 70px;height: 28px">删除</view>
          <view class="cu-btn round line-gray text-black  margin-left" style="font-size: 12px;width: 70px;height: 28px">编辑</view>
        </view>
      </view>
    </view>
    <view class="botBtn padding-xs bg-white">
      <button  class="cu-btn bg-red radius" style="width: 100%">新增商品</button>
    </view>
</view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image";
import boxTitle from "../../agent/components/fxb-box-title";
import fxbSelectHighlight from "../../systemRecommend/componetns/fxb-select-highlight";
export default {
  name: "drafts",
  components: {
    fxbImage
  },
};
</script>

<style lang="scss" scoped>
.botBtn{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.hp{
  margin-top: 58px;
}
</style>