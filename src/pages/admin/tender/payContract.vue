<template>
  <view class="content">
    <u-navbar title="缴纳保证金" :fixed="true" :autoBack="true"></u-navbar>

    <view class="padding-tb" :style="'margin-top:' + CustomBar + 'px;padding-bottom: 120rpx'">
      <view class="whiteBoxShadow">
        <boxTitle title="合同金额"></boxTitle>
        <view>
          <view class="flex justify-between align-center margin-bottom-sm">
            <view class="text-gray">商品名称</view>
            <view>东方国宾·工匠酒</view>
          </view>
          <view class="flex justify-between align-center margin-bottom-sm">
            <view class="text-gray">商品条码</view>
            <view>1545645121354455</view>
          </view>
          <view class="flex justify-between align-center margin-bottom-sm">
            <view class="text-gray">商品总量</view>
            <view>21000瓶</view>
          </view>
          <view class="flex justify-between align-center margin-bottom-sm">
            <view class="text-gray">商品总额</view>
            <view class="text-red">¥5000000.00</view>
          </view>
          <view class="flex justify-between align-center margin-bottom-sm">
            <view class="text-gray">我的占比</view>
            <view>10%</view>
          </view>
          <view class="flex justify-between align-center margin-bottom-sm">
            <view class="text-gray">应付金额</view>
            <view class="text-red">¥500000.00</view>
          </view>
        </view>
      </view>
      <view class="whiteBoxShadow margin-top-sm">
        <boxTitle title="交易方式"></boxTitle>
        <view class="flex justify-between align-start margin-tb margin-left-sm">
          <text class="text-gray">交易方式</text>
          <view class="flex flex-direction align-end">
            <text class="text-orange">平台托管</text>
          </view>

        </view>
        <view class="padding-sm text-red" style="background-color: rgba(229,77,66,0.05)">
          <view class="text-bold margin-bottom">温馨提示：</view>
          <view class="text-sm" style="line-height: 48rpx">平台托管交易方式是指您购买的商品放于平台销售，该商品为平台独家代理，所得收益通过平台按照您的收益占比支付给您</view>
        </view>
      </view>

    </view>
    <view class="padding-lr padding-tb-xs bg-white botBtn flex justify-between align-center">
      <view class="flex flex-direction align-end">
        <text><text class="text-red">¥50000.00</text></text>
        <!--        <view style="font-style: oblique" class="text-gray text-xs">伍万元整</view>-->
      </view>
      <button @click="gotoPay" class="cu-btn bg-red radius margin-left-sm">确认支付</button>
    </view>
  </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import paySelect from "/src/components/fxb-pay-select/paySelect";
import { mapMutations } from "vuex"
export default {
  name: "payContract",
  components: {
    boxTitle,
    paySelect
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapMutations('index',['setPayResultType']),
    gotoPay(){
      this.setPayResultType('payContract');
      uni.redirectTo({
        url:"/pages/admin/adminContract/surePay"
      })
    },
    jumpAgreement() {
      uni.navigateTo({
        url: "/pages/memberPayment/memberAgreement"
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
  box-shadow: 10rpx 0rpx 20rpx #dbdbdb;
}
</style>
