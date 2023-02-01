<template>
  <view>
    <u-navbar title="合作人详情" :fixed="true" :autoBack="true"></u-navbar>
    <view class="padding-tb" :style="'margin-top:' + CustomBar + 'px;padding-bottom: 120rpx'">
      <view class="whiteBoxShadow">
        <boxTitle title="合作人详情"></boxTitle>
        <view class="flex align-center">
          <u-avatar class="flex-sub" text="t"></u-avatar>
          <view class="margin-left-sm">
            <view class="flex align-center">
              <text class="text-lg text-bold">王晓刚</text>
              <view class="bg-blue light margin-left-sm" style="border-radius: 10px 0 10px 0;padding: 2px 4px">贵州守云间科技有限公司</view>
            </view>
            <view class="text-gray margin-tb-xs">2022-12-23 15:26:24</view>
          </view>
        </view>
        <view class="margin-top-sm flex align-center padding-tb" style="background-color: #F7F7FB">
          <view class="w25 text-center" style="border-right: 1px solid #DFDFDF">
            <view class="text-orange text-lg">500000</view>
            <view class="margin-top-sm text-gray text-sm">出资金额(元)</view>
          </view>
          <view class="w25 text-center" style="border-right: 1px solid #DFDFDF">
            <view class="text-orange text-lg">5%</view>
            <view class="margin-top-sm text-gray text-sm">出资占比</view>
          </view>
          <view class="w25 text-center" style="border-right: 1px solid #DFDFDF">
            <view class="text-green text-lg">5%</view>
            <view class="margin-top-sm text-gray text-sm">收益占比</view>
          </view>
          <view class="w25 text-center">
            <view class="text-green text-lg">500000</view>
            <view class="margin-top-sm text-gray text-sm">收益合计(元)</view>
          </view>
        </view>

      </view>

      <view class="whiteBoxShadow margin-top-sm">
        <boxTitle title="收益报表"></boxTitle>
        <view class="margin-top padding-lr-sm padding-tb" v-for="item in list"
              style="background-image: linear-gradient(to bottom,#FFF3E9,#FFFAFA)">
          <view class="flex justify-between align-center">
            <view class="text-xl text-bold">{{item.name}}</view>
            <view>
              <view class="cu-btn round bg-red sm margin-left">交易详情</view>
            </view>
          </view>
          <view class="bg-white padding-lr-sm padding-tb margin-top">
            <view class="flex justify-between align-center">
              <view>
                <view class="bg-red text-center" style="width: 100rpx;height: 40rpx;border-radius: 10rpx 10rpx 10rpx 0">已到账</view>
              </view>
              <view>
                <text>2500000元 * 20%=</text>
                <text class="text-orange text-xl margin-left-sm">500000元</text>
              </view>
            </view>
            <view class="margin-top">
              <view class="flex align-center">
                <view class="w50">
                  <text class="cuIcon-sponsor"></text>
                  <text class="text-gray margin-left-xs">出资金额:</text>
                  <text class="margin-left-xs">¥500000.00</text>
                </view>
                <view class="w50">
                  <text class="cuIcon-rank margin-left"></text>
                  <text class="text-gray margin-left-xs">出资占比:</text>
                  <text class="margin-left-xs">20%</text>
                </view>
              </view>
              <view class="flex align-center margin-top-sm">
                <view class="w50">
                  <text class="cuIcon-moneybag"></text>
                  <text class="text-gray margin-left-xs">当前成本:</text>
                  <text class="text-orange margin-left-xs">¥500000.00</text>
                </view>
                <view class="w50">
                  <text class="cuIcon-refund margin-left"></text>
                  <text class="text-gray margin-left-xs">净利润:</text>
                  <text class="text-red margin-left-xs">¥10000.00</text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
  name: "collaborator",
  components:{
    boxTitle
  },
  data(){
    return{
      list:[
        {
          name:'2022年12月收益'
        },
        {
          name:'2022年11月收益'
        },
        {
          name:'2022年10月收益'
        }
      ],
    }
  }
}
</script>

<style scoped>

</style>