<template>
  <view class="content">
    <u-navbar title="记录详情" :autoBack="true"></u-navbar>
    <view  :style="'' + CustomBar + 'px;'+('padding-bottom: 100px')">
  <view class="whiteBoxShadow " style="transform: translateY(20px);background-color: gray;">
    <view class="flex justify-between padding-bottom" >
      <view class="">
        <view class="text-white margin-bottom margin-top-xl"  >已发布</view>
        <view class="text-white margin-bottom margin-top-sm" >该补货订单已完成</view>
      </view>
      <view class="margin-top">
        <fxbImage width="120" height="120" src="/productDetails/Slice%201.png" mode="aspectFill"></fxbImage>
      </view>
    </view>
  </view>
    <view class="whiteBoxShadow" style="transform: translateY(-10px)">
      <view style="font-size: 18px" class="text-black ">东方国宾尊致酒500ml酱香酒型合同</view>
      <view class="flex margin-top border-bottom padding-bottom">
        <view class="text-gray">结算方式：先款后结</view>
        <view class="margin-left-xl text-gray">合同编号：231325342</view>
      </view>

      <view class="margin-top" v-for="item in 2" :key="item">
        <view class="flex align-center">
          <image style="width: 140rpx;height: 140rpx;" :src="require('/src/static/01.jpg')" mode="aspectFill"></image>
          <view style="height: 140rpx;width: 75%" class="margin-left-sm flex flex-direction justify-between">
            <view class="text-black ">东方国宾·尊致酒53°瓶装500ml</view>
            <view class="text-sm flex justify-between align-center">
              <text>规格:酱香型</text>
              <text>度数:53°</text>
              <text>容量:500ml</text>
            </view>

            <view class="flex align-center">
              <text>代理价：</text>
              <text class="text-red">￥365.00/瓶</text>
            </view>

          </view>
        </view>
        <view class="flex justify-between align-center margin-top-sm">
          <view class="flex align-center">
            <text class="text-gray">补货数量：</text>
            <text>720瓶</text>
          </view>
          <view class="flex align-center">
            <text class="text-red ">￥59000.00</text>
          </view>
        </view>
      </view>
    </view>
<view class="whiteBoxShadow">
  <view class="flex  justify-between">
    <view class="text-gray">数量合计</view>
    <view>240瓶</view>
  </view>
  <view class="flex margin-top justify-between">
    <view class="text-gray">金额合计</view>
    <view>￥59000.00</view>
  </view>
  <view class="flex margin-top justify-between border-bottom padding-bottom">
    <view class="text-gray">优惠折扣</view>
    <view>-￥9000.00</view>
  </view>
<view class="flex margin-top justify-between">
  <view class="text-black text-bold" style="font-size: 18px">合计金额</view>
  <view class=" ">
    <view class="text-red" style="font-size: 18px">￥5000.00</view>
  <view class="text-gray text-sm margin-top-xs " style="font-style: oblique">伍拾万陆仟叁佰元整</view>
  </view>
</view>
</view>
    <view class="whiteBoxShadow margin-top">
      <boxTitle title="我的利润"></boxTitle>
      <view class="flex margin-top justify-between">
        <view class="text-gray">金额合计</view>
        <view>￥59000.00</view>
      </view>
      <view class="flex margin-top justify-between">
        <view class="text-gray">我的占比</view>
        <view>20%</view>
      </view>
      <view class="flex margin-top justify-between">
        <view class="text-gray">我的利润</view>
        <view>￥1000.00</view>
      </view>
      <view class="flex margin-top justify-between">
        <view class="text-gray">是否转账</view>
        <view>￥59000.00</view>
      </view>
      <view class="flex margin-top justify-between">
        <view class="text-gray">转账时间</view>
        <view>2022-08-31 12:12:45</view>
      </view>
    </view>
    </view>
  </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image";
import boxTitle from "../../agent/components/fxb-box-title";
import copyButton from "../../../components/common/copyButton";
import addressBox from "../../index/applicationSample/addressBox";
import goodsInfoCard from "../../../components/erp/goodsInfoCard";
export default {
  name: "recordDetails",
  components: {
    fxbImage,
    boxTitle
  },
};
</script>

<style scoped>

</style>