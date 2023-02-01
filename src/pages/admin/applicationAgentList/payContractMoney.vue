<template>
  <view class="content">
    <u-navbar :border="false" :fixed="true" title="支付首付款" :autoBack="true"></u-navbar>
    <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ CustomBar + 'px;padding-bottom:100rpx'">
      <view class="whiteBoxShadow margin-bottom-sm">
        <boxTitle title="合同发货商品"></boxTitle>
          <view class="radius margin-top-sm u-border" v-for="item in 2" :key="item">
            <view class="flex align-center padding-lr-sm margin-top">
              <image src="../returnExchange/picture/alcohol.png" style="width: 135rpx;height: 135rpx"></image>
              <view class="margin-left">
                <view class="text-bold text-lg margin-bottom-xs">东方国宾53°瓶装500ml</view>
                <view class="flex justify-between align-center text-gray margin-bottom-xs text-df">
                  <text class="margin-right">香型:酱香型</text>
                  <text class="margin-right">度数:53°</text>
                  <text>容量:500ml</text>
                </view>
                <view class="text-lg">
                  <text class="text-red">￥365.00</text>
                  <text>/瓶</text>
                </view>
              </view>
            </view>
            <view class="padding-top margin-lr-sm text-lg">
              <view class="flex justify-between align-center margin-bottom-sm">
                <text>合同首单进货商品</text>
                <text>600瓶</text>
              </view>
              <view class="flex justify-between align-center">
                <text>随货支持商品数量</text>
                <text>120瓶</text>
              </view>
            </view>
              <view class="padding-lr-sm padding-bottom">
<!--                  <view class="flex justify-between">-->
<!--                      <view class="text-gray">首单进货数量</view>-->
<!--                      <view class="flex flex-direction align-end">-->
<!--                          <view class="text-bold">600瓶</view>-->
<!--                          <view class="text-gray text-sm" style="font-style: oblique">100件</view>-->
<!--                      </view>-->
<!--                  </view>-->
<!--                  <view class="flex justify-between margin-top-sm">-->
<!--                      <view class="text-gray">随货支持商品数量</view>-->
<!--                      <view class="flex flex-direction align-end">-->
<!--                          <view class="text-bold">120瓶</view>-->
<!--                          <view class="text-gray text-sm" style="font-style: oblique">20件</view>-->
<!--                      </view>-->
<!--                  </view>-->
                  <view class="u-border-top margin-tb"></view>
                  <view class="flex justify-between text-lg">
                      <view class="text-bold">合计发货</view>
                      <view>
                          <view class="text-bold">720瓶</view>
                      </view>
                  </view>
              </view>
          </view>
<!--          <view class="flex justify-between margin-top-sm">-->
<!--              <view class="text-gray">发货总数：</view>-->
<!--              <view class="flex flex-direction align-end">-->
<!--                  <view class="text-bold">7200瓶</view>-->
<!--                  <view class="text-gray text-sm" style="font-style: oblique">120件</view>-->
<!--              </view>-->
<!--          </view>-->
      </view>
        <view class="whiteBoxShadow margin-bottom-sm">
            <boxTitle title="合计金额"></boxTitle>
            <view class="flex justify-between margin-top-sm">
                <view class="text-gray">合计金额</view>
                <view class="flex flex-direction align-end">
                    <view class="text-red text-bold">¥982600.00</view>
                    <view class="text-gray text-sm" style="font-style: oblique">玖拾捌万贰仟陆佰元整</view>
                </view>
            </view>
        </view>
    </view>
    <view class="botBtn bg-white flex justify-end align-center" @click="">
        <view class="flex flex-direction align-end">
            <view class="text-bold text-lg">
              <text class="margin-right-sm">合计:</text>
              <text class="text-red">¥982600.00</text>
            </view>
            <view class="text-gray text-sm" style="font-style: oblique">玖拾捌万贰仟陆佰元整</view>
        </view>
      <button class="cu-btn bg-red radius margin-left" @click="payResult">确认支付</button>
    </view>
  </view>
</template>

<script>
import paySelect from "/src/components/fxb-pay-select/paySelect";
import boxTitle from "/src/pages/agent/components/fxb-box-title";

export default {
  name: "payContractMoney",
  components: {
    boxTitle,
    paySelect
  },
  data() {
    return {
      isInvoicingIndex: 0,
      isInvoicing: ['是', '否'],
      invoiceTypeIndex: 0,
      invoiceType: ['普通发票', '增值税发票'],
      //弹出层的内容信息
      billInfo: [
        {title: "公司名称", value: "贵州好酒选电子商务有限公司"},
        {title: "统一社会信用代码", value: "JKIEDG125462ECD452"}
      ],
      Notice: false,
      showBill: false,
      dataList: [
        {
          icon: 'weixinzhifu',
          logoRight: "微信支付"
        },
        {
          icon: 'zhifubao',
          logoRight: "支付宝支付"
        },
        {
          icon: 'zhuanzhang',
          logoRight: "银行转账"
        }
      ]
    }
  },
  methods: {
    payResult() {
        uni.redirectTo({
            url: "/pages/admin/adminContract/surePay",
        });
    },
    // 发票须知
    showNotice() {
      this.Notice = !this.Notice;
      this.showBill = false;
    },
    closeNotice() {
      this.Notice = !this.Notice;
      this.showBill = true;
    },
    gotoPath(path) {
      // uni.navigateTo({
      //     url:path
      // })
    },
    //发票弹出层的两个方法
    open(res) {
      this.showBill = true
    },
    close() {
      this.showBill = false
    },
  }
};
</script>

<style lang="scss" scoped>
.botBtn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12rpx;
}
</style>