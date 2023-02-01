<template>
  <view>
    <u-navbar title="保证金" :fixed="true" :autoBack="true"></u-navbar>
    <view :style="'margin-top:'+ CustomBar + 'px'" class="padding-top-sm">
      <view class="bg-white padding-tb">
        <view class="flex align-center padding-bottom">
          <view class="cuIcon-titles text-red" style="font-size: 30rpx"></view>
          <text class="text-lg text-bold">合同金额</text>
        </view>
        <view class="padding-lr-sm">
          <view class="flex justify-between align-center margin-bottom-sm">
            <view>商品总量</view>
            <view>8吨</view>
          </view>
          <view class="flex justify-between align-center margin-bottom-sm">
            <view>商品单价</view>
            <view>100000.00/吨</view>
          </view>
          <view class="flex justify-between align-center">
            <view>商品总额</view>
            <view>50000000.00</view>
          </view>
        </view>
      </view>
      <view class="bg-white padding-tb margin-top-sm">
        <view class="flex align-center padding-bottom">
          <view class="cuIcon-titles text-red" style="font-size: 30rpx"></view>
          <text class="text-lg text-bold">包装设计</text>
        </view>
        <view class="padding-lr-sm">
          <view class="flex justify-between align-start margin-bottom-sm">
            <view>是否需要包装设计</view>
            <view>
              <u-radio-group
                  placement="row"
              >
                <u-radio
                    :customStyle="{marginBottom: '8px'}"
                    v-for="(item, index) in radiolist"
                    :key="index"
                    :label="item.name"
                    activeColor="red"
                    :name="item.name"
                >
                </u-radio>
              </u-radio-group>
            </view>
          </view>
          <view class="flex justify-between align-center">
            <view>包装费用</view>
            <view>¥50000.00</view>
          </view>
        </view>
      </view>

      <view class="bg-white padding-tb margin-top-sm">
        <view class="flex align-center padding-bottom">
          <view class="cuIcon-titles text-red" style="font-size: 30rpx"></view>
          <text class="text-lg text-bold">收货方式</text>
        </view>
        <view class="margin-lr-sm padding-bottom-xl">
          <view class="flex justify-between align-start margin-bottom-sm">
            <view>选择收获方式计</view>
            <view>
              <u-radio-group
                  placement="row"
              >
                <u-radio
                    :customStyle="{marginBottom: '8px'}"
                    v-for="(item, index) in radioslist"
                    :key="index"
                    :label="item.name"
                    activeColor="red"
                    :name="item.name"
                >
                </u-radio>
              </u-radio-group>
            </view>
          </view>
          <view class="padding-sm bg-red light radius">
            <view class="text-sm">选择平台销售后，您的条码商品好酒选平台为您打理销售，您只管收取分红即可</view>
          </view>
        </view>
        <view class="flex justify-center align-center" style="width: 100%;height: 260rpx">
          <view>您还未添加收货地址，请</view>
          <view class="text-red">添加地址</view>
        </view>
      </view>
    </view>
    <view class="padding-lr padding-tb-xs bg-white botBtn flex justify-end align-center">
      <view class="flex flex-direction align-end">
        <text class="text-bold"><text class="text-red">¥50000.00</text> </text>
        <!--        <view style="font-style: oblique" class="text-gray text-xs">伍万元整</view>-->
      </view>
      <button @click="gotoPay" class="cu-btn bg-red radius margin-left-sm">确认支付</button>
    </view>
  </view>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "contractPayment",
  data(){
    return{
      radiolist: [
        {
        name: '是',
        disabled: false
        },
        {
          name: '否',
          disabled: false
        },
      ],
      radioslist: [
        {
          name: '自己收获',
          disabled: false
        },
        {
          name: '平台销售',
          disabled: false
        },
      ],
    }
  },
  methods:{
    ...mapMutations('index',['setPayResultType']),
    gotoPay(){
      this.setPayResultType('tendersPay');
      uni.redirectTo({
        url:"/pages/admin/adminContract/surePay"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .u-radio {
  .u-radio__icon-wrap{
    margin-left: 100rpx !important;
  }
}
.botBtn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: 10rpx 0rpx 20rpx #dbdbdb;
}
</style>