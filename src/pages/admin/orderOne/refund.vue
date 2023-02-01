<template>
  <view>
    <u-navbar title="退款" :autoBack="true"></u-navbar>
    <view :style="'margin-top:' + CustomBar + 'px;'">
      <view class="padding-top-sm">
        <view class="bg-white padding-tb">
          <view class="flex align-center margin-bottom-sm" style="padding-bottom: 15rpx">
            <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>
            <view class="text-bold text-lg">退款</view>
          </view>
          <view class="padding-lr-sm">
            <view class="flex justify-between align-center padding-bottom" style="border-bottom: 1px solid #F1F1F1">
              <view class="flex align-center">
                <view class="text-red">*</view>
                <view>退款原因</view>
              </view>
              <view class="flex align-center">
                <view class="margin-right">商品破损</view>
                <view class="cuIcon-right text-gray" style="font-size: 30rpx"></view>
              </view>
            </view>
            <view class="flex justify-between align-center margin-top">
              <view class="flex align-center">
                <view class="text-red">*</view>
                <view>退款商品</view>
              </view>
              <view class="flex align-center">
                <view class="text-gray margin-right">请选择商品</view>
                <view class="cuIcon-right text-gray" style="font-size: 30rpx"></view>
              </view>
            </view>
            <view class="margin-top" style="border-bottom: 1px solid #F1F1F1 ">
              <view class="flex padding-bottom">
                <view class="flex-sub">
                  <image src="./alcohol.png" style="width: 136rpx;height: 136rpx"></image>
                </view>
                <view class="padding-left-sm flex-treble">
                  <view class="flex justify-between align-center">
                    <view class="text-lg text-bold">东方国宾·尊致酒酱香型白酒</view>
                    <view class="cuIcon-deletefill text-gray" style="font-size: 30rpx"></view>
                  </view>
                  <view class="text-gray text-df padding-tb-xs flex align-center">
                    <view class="margin-right-sm">香型:酱香型</view>
                    <view class="margin-right-sm">度数:53度</view>
                    <view>容量:500ml</view>
                  </view>
                  <view class="flex justify-between">
                    <view class="text-bold">
                      <text>代理价:</text>
                      <text class="text-red">￥361.00</text>
                    </view>
                  </view>
                </view>
              </view>
            </view>

            <view class="margin-top">
              <view class="flex padding-bottom">
                <view class="flex-sub">
                  <image src="./alcohol.png" style="width: 136rpx;height: 136rpx"></image>
                </view>
                <view class="padding-left-sm flex-treble">
                  <view class="flex justify-between align-center">
                    <view class="text-lg text-bold">东方国宾·尊致酒酱香型白酒</view>
                    <view class="cuIcon-deletefill text-gray" style="font-size: 30rpx"></view>
                  </view>
                  <view class="text-gray text-df padding-tb-xs flex align-center">
                    <view class="margin-right-sm">香型:酱香型</view>
                    <view class="margin-right-sm">度数:53度</view>
                    <view>容量:500ml</view>
                  </view>
                  <view class="flex justify-between">
                    <view class="text-bold">
                      <text>代理价:</text>
                      <text class="text-red">￥361.00</text>
                    </view>
                  </view>
                </view>
              </view>
            </view>
            <view class="flex justify-between align-center">
              <view class="flex align-center">
                <view class="text-red">*</view>
                <view>退款数量</view>
              </view>
              <view>
                <input type="text" placeholder="请输入退款商品数量">
              </view>
              <view>瓶</view>
            </view>
          </view>
        </view>
        <view class="bg-white padding-tb margin-top-sm">
          <view class="flex align-center margin-bottom-sm" style="padding-bottom: 15rpx">
            <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>
            <view class="text-bold text-lg">补充描述和凭证</view>
          </view>
          <view class="padding-lr-sm">
            <view class="margin-bottom-sm" style="border-bottom: 1px solid #F1F1F1">
              <textarea placeholder="补充描述，有助于服务商更好处理售后问题" style="width: 100%;height: 150rpx"></textarea>
            </view>
            <view class="margin-top-sm">
              <view class="flex align-center">
                <view class="text-red">*</view>
                <view>凭证图片
                  <text class="text-orange text-sm margin-left">最多上传5张图片</text>
                </view>
              </view>
              <view class="margin-top-sm">
                <view style="border: 1px solid rgba(34,34,34,0.2);width: 150rpx;height: 150rpx">
                  <view class="text-center cuIcon-camera text-gray" style="font-size: 50rpx;line-height: 150rpx"></view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="fixed btn padding-sm bg-white">
      <button class="text-white bg-red">提交</button>
    </view>
  </view>
</template>

<script>
export default {
  name: "refund"
}
</script>

<style lang="scss" scoped>
.btn{
  width: 100%;
}
</style>