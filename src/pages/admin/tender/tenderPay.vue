<template>
  <view class="content">
    <u-navbar title="缴纳保证金" :fixed="true" :autoBack="true"></u-navbar>

    <view class="padding-tb" :style="'margin-top:' + CustomBar + 'px;padding-bottom: 120rpx'">
      <view class="whiteBoxShadow">
        <boxTitle title="缴纳保证金"></boxTitle>
        <view class="tick flex align-start margin-top margin-left-sm">
          <u-checkbox-group>
            <u-checkbox activeColor="red" size="12"></u-checkbox>
          </u-checkbox-group>
          <view style="transform: translateY(-2px)">
            <text class="text-sm">我已同意并阅读</text>
            <text class="text-sm text-blue" @click="jumpAgreement">《好酒选招投标保证金缴纳协议》</text>
          </view>
        </view>
        <view class="flex justify-between align-start margin-tb margin-left-sm">
          <text>保证金</text>
          <view class="flex flex-direction align-end">
            <text class="text-red text-lg text-bold">￥50000.0</text>
<!--            <view style="font-style: oblique" class="text-gray text-sm">伍万元整</view>-->
          </view>

        </view>
        <view class="padding-sm text-red" style="background-color: rgba(229,77,66,0.05)">
          <view class="text-bold margin-bottom">温馨提示：</view>
          <view class="text-sm">1、保证金是保证投标人中标后能按照合同履行相应的条款；</view>
          <view class="text-sm margin-top-sm">2、保证金缴纳后，中标合同签署后5个工作日内进行退回；</view>
        </view>
      </view>

      <!--            <view class="invoice whiteBoxShadow margin-top-sm flex justify-between">-->
      <!--                <text class="text-gray">开具发票</text>-->
      <!--                <view @click="jumpVoucher">-->
      <!--                    <text>不开发票</text>-->
      <!--                    <text class="cuIcon-right margin-left"></text>-->
      <!--                </view>-->
      <!--            </view>-->
      <!--            <view class="whiteBoxShadow margin-top-sm">-->
      <!--                <boxTitle title="结算方式"></boxTitle>-->

      <!--                <paySelect :dataList="dataList"></paySelect>-->
      <!--            </view>-->

      <!--            <view class="botPayBtn flex justify-end align-center padding-tb-sm padding-right">-->
      <!--                <text class="text-red text-bold">¥50000.00</text>-->
      <!--                <button class="margin-left cu-btn bg-red" @click="surePay">确认支付</button>-->
      <!--            </view>-->
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
  name: "pay",
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
      this.setPayResultType('tenderPay');
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
};
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
