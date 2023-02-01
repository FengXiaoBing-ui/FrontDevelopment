<template>
  <view>
    <u-navbar title="填写订单" :autoBack="true"></u-navbar>
    <view :style="'margin-top:' + CustomBar + 'px;'" style="padding-bottom: 120rpx">
      <view class="padding-top-sm">
        <view class="bg-white" v-if="status==0">
          <view style="height: 200rpx;line-height: 200rpx" class="text-center">您还未添加收货地址，请
            <text class="text-red" @click="go()">添加地址</text>
          </view>
        </view>
        <view class="bg-white padding-tb" v-if="status==1">
          <view class="padding-lr-sm margin-top-sm">
            <view class="flex align-center">
              <view class="w25 text-gray">收货人：</view>
              <view>
                <text>张晓丹</text>
                <text class="cuIcon-mobile text-yellow padding-left"></text>
                <text>18690726598</text>
              </view>
            </view>
            <view class="flex align-start margin-tb-sm">
              <view class="w25 text-gray">收货地址：</view>
              <view class="w75 flex align-start">
                <view>贵州省贵阳市关山湖区德福中心A3栋6楼10-13号</view>
              </view>
            </view>
          </view>
        </view>
        <view class="margin-top-sm bg-white padding-lr-sm padding-tb">
          <view class="text-lg text-bold">龙王烟酒店</view>
          <view class="padding-tb margin-top" style="border-top: 1px solid #F1F1F1;border-bottom: 1px solid #F1F1F1;">
            <view class="flex align-center">
              <fxbImage width="140" height="140" src="/productDetails/Slice%201.png" mode="aspectFill"></fxbImage>
              <view class="margin-left-sm flex flex-treble flex-direction">
                <view class="text-bold text-lg">东方国宾53°瓶装500ml</view>
                <view class="text-sm flex align-center margin-tb-xs">
                  <text class="text-gray">香型:酱香型</text>
                  <text class="text-gray margin-lr-xl">度数:53°</text>
                  <text class="text-gray">容量:500ml</text>
                </view>
                <view class="flex justify-between align-center">
                    <view>
                      <text>购买价：</text>
                      <text class="text-red">￥365.00
                        <text class="text-gray">/瓶</text>
                      </text>
                    </view>
                    <view>10</view>
                </view>
              </view>
            </view>
          </view>
          <view class="margin-top">
            <view class="flex align-center justify-between margin-top-sm padding-right-xs" style="padding-bottom: 10rpx">
              <view class="text-grey">快递</view>
              <view>
                <view class="cu-btn sm bg-red light">默认</view>
                <text class="padding-right-xs margin-left">中通快递</text>
              </view>
            </view>
            <view class="flex align-center justify-between margin-top-sm padding-right-xs" style="padding-bottom: 10rpx">
              <view class="text-grey">备注</view>
              <view class="text-right">
                <input type="text" placeholder="请输入您的备注">
              </view>
            </view>
          </view>
        </view>

        <view class="margin-top-sm bg-white padding-lr-sm padding-tb">
          <view class="text-lg text-bold">龙王烟酒店</view>
          <view class="padding-tb margin-top" style="border-top: 1px solid #F1F1F1;border-bottom: 1px solid #F1F1F1;">
            <view class="flex align-center">
              <fxbImage width="140" height="140" src="/productDetails/Slice%201.png" mode="aspectFill"></fxbImage>
              <view class="margin-left-sm flex flex-treble flex-direction">
                <view class="text-bold text-lg">东方国宾53°瓶装500ml</view>
                <view class="text-sm flex align-center margin-tb-xs">
                  <text class="text-gray">香型:酱香型</text>
                  <text class="text-gray margin-lr-xl">度数:53°</text>
                  <text class="text-gray">容量:500ml</text>
                </view>
                <view class="flex justify-between align-center">
                  <view>
                    <text>购买价：</text>
                    <text class="text-red">￥365.00
                      <text class="text-gray">/瓶</text>
                    </text>
                  </view>
                  <view>10</view>
                </view>
              </view>
            </view>
            <view class="flex align-center justify-between margin-top-sm padding-right-xs" style="padding-bottom: 10rpx">
              <view class="text-grey">快递</view>
              <view>
                <view class="cu-btn sm bg-red light">默认</view>
                <text class="padding-right-xs margin-left">中通快递</text>
              </view>
            </view>
          </view>
          <view class="margin-top">
            <view class="flex align-center justify-between margin-top-sm padding-right-xs" style="padding-bottom: 10rpx">
              <view class="text-grey">备注</view>
              <view class="text-right">
                <input type="text" placeholder="请输入您的备注">
              </view>
            </view>
          </view>
        </view>

        <view class="bg-white padding-tb padding-lr-sm margin-top-sm">
          <view class="flex align-center justify-between margin-top-sm padding-right-xs" style="padding-bottom: 10rpx">
            <view class="text-grey">商品数量</view>
            <view class="">20</view>
          </view>
          <view class="flex align-center justify-between margin-top-sm padding-right-xs" style="padding-bottom: 10rpx">
            <view class="text-grey">商品金额</view>
            <view class="">¥6000.00</view>
          </view>
          <view class="flex align-center justify-between margin-top-sm padding-bottom" style="border-bottom: 1px solid #F1F1F1">
            <view class="text-grey text-lg">运费</view>
            <view class="text-price text-lg">¥24.00</view>
          </view>
          <view class="flex align-center justify-between margin-top">
            <view class="text-lg text-bold">合计</view>
            <view class="text-price text-red text-xl text-bold">530.00</view>
          </view>
        </view>
      </view>
    </view>
    <view class="botBtn bg-white padding-lr padding-tb-xs">
      <view class="flex justify-between align-center">
        <view class="text-left">合计：
          <text class="text-red">￥2000.00</text>
        </view>
        <button class="cu-btn bg-red w30" @click="goToItem()">提交订单</button>
      </view>
    </view>
  </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
export default {
  name: "fillOrder",
  components:{
    fxbImage
  },
  data(){
    return{
      status:2
    }
  },
  onLoad(options) {
    this.status = options.item;
  },
  methods:{
    goToItem(){
      uni.navigateTo({
        url: "pages/admin/orderOne/submitList"
      });
    },
    go(){
      uni.navigateTo({
        url: "pages/admin/orderOne/selectAddress"
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.botBtn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
}
</style>