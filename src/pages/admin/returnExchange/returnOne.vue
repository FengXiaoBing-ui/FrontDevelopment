<template>
  <view>
    <u-navbar
        :border="false"
        :fixed="true"
        title="合同详情"
        :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
        :safeAreaInsetTop="false"
        :autoBack="true"
        leftIconColor="black"
        titleStyle="color:black"
    >
    </u-navbar>
    <view :style="`margin-top:${CustomBar}px`" class="bg-white padding-top-sm padding-bottom-xs">
      <view class="modularOne text-red margin-sm">
        <view class="padding-lr-sm padding-tb">
          <view class="margin-bottom-xs">
            <image src="./picture/warning.png" style="width: 26rpx;height: 26rpx"></image>
            <text class="margin-left-xs">温馨提示</text>
          </view>
          <view class="margin-bottom-xs">若因特殊原因导致无法继续履行合同或者想更换其它商品</view>
          <view class="margin-bottom-xs">可申请退换货，平台审核通过后可进行退换货；</view>
          <view>一旦申请通过后原合同将作废，请您谨慎提交；</view>
        </view>
      </view>
    </view>
    <view class="margin-top-sm bg-white" v-if="false">
      <view class="flex align-center padding-tb">
        <view class="cuIcon-titles text-red margin-left-sm" style="font-size: 38rpx"></view>
        <text class="text-xl text-bold">退货商品</text>
      </view>
      <view class="flex align-center padding-lr-sm">
        <image src="./picture/alcohol.png" style="width: 135rpx;height: 135rpx"></image>
        <view class="margin-left">
          <view class="text-bold text-lg margin-bottom-xs">东方国宾53°瓶装500ml</view>
          <view class="flex justify-between align-center text-gray margin-bottom-xs text-df">
            <text class="margin-right-xl">香型:酱香型</text>
            <text class="margin-right-xl">度数:53°</text>
            <text>容量:500ml</text>
          </view>
          <view class="text-red text-lg">
            <text>代理价:</text>
            <text>￥365.00</text>
          </view>
        </view>
      </view>
      <view class="padding-tb margin-lr-sm">
        <view class="flex justify-between align-center margin-bottom-sm">
          <text class="text-gray text-df">当前库存剩余</text>
          <text style="color: #F37B1D" class="text-lg">100瓶</text>
        </view>
        <view class="flex justify-between align-center">
          <text class="text-gray text-df">库存商品总价</text>
          <text class="text-red text-xl">￥36500.00</text>
        </view>
      </view>
    </view>

<!--    另一个状态    -->
    <view class="margin-top-sm bg-white" v-if="true">
      <view class="flex align-center padding-tb">
        <view class="cuIcon-titles text-red margin-left-sm" style="font-size: 38rpx"></view>
        <text class="text-xl text-bold">换货商品</text>
      </view>
      <view>
        <view class="colors margin-left-sm padding-tb">合同商品</view>
      </view>
      <view class="flex align-center padding-lr-sm">
        <image src="./picture/alcohol.png" style="width: 135rpx;height: 135rpx"></image>
        <view class="margin-left">
          <view class="text-bold text-lg margin-bottom-xs">东方国宾53°瓶装500ml</view>
          <view class="flex justify-between align-center text-gray margin-bottom-xs text-df">
            <text class="margin-right-xl">香型:酱香型</text>
            <text class="margin-right-xl">度数:53°</text>
            <text>容量:500ml</text>
          </view>
          <view class="text-red text-lg">
            <text>代理价:</text>
            <text>￥365.00</text>
          </view>
        </view>
      </view>
      <view class="padding-tb margin-lr-sm" style="border-bottom: 1px solid #E9E9E9">
        <view class="flex justify-between align-center margin-bottom-sm">
          <text class="text-gray text-df">当前库存剩余</text>
          <text class="text-lg colors">100瓶</text>
        </view>
        <view class="flex justify-between align-center">
          <text class="text-gray text-df">库存商品总价</text>
          <text class="text-red text-xl">￥36500.00</text>
        </view>
      </view>

      <view>
        <view class="flex justify-between align-center">
          <view class="colors margin-left-sm padding-tb">换货商品</view>
          <view class="cuIcon-right text-gray margin-right-xs" style="font-size: 35rpx"></view>
        </view>
        <view class="flex align-center padding-lr-sm">
          <image src="./picture/alcohol.png" style="width: 135rpx;height: 135rpx"></image>
          <view class="margin-left">
            <view class="text-bold text-lg margin-bottom-xs">东方国宾53°瓶装500ml</view>
            <view class="flex justify-between align-center text-gray margin-bottom-xs text-df">
              <text class="margin-right-xl">香型:酱香型</text>
              <text class="margin-right-xl">度数:53°</text>
              <text>容量:500ml</text>
            </view>
            <view class="text-red text-lg">
              <text>代理价:</text>
              <text>￥365.00</text>
            </view>
          </view>
        </view>
        <view class="padding-tb margin-lr-sm">
          <view class="flex justify-between align-center margin-bottom-sm">
            <text class="text-gray text-df">当前可退换商品数</text>
            <text class="text-lg colors">100瓶</text>
          </view>
          <view class="flex justify-between align-center">
            <text class="text-gray text-df">可换商品金额</text>
            <text class="text-red text-xl">￥36500.00</text>
          </view>
        </view>
      </view>
    </view>


    <view class="margin-top-sm bg-white">
      <view class="flex align-center padding-tb">
        <view class="cuIcon-titles text-red margin-left-sm" style="font-size: 38rpx"></view>
        <text class="text-xl text-bold">提交资料</text>
      </view>
      <view class="margin-lr-sm">
        <inputCell  label="选择退换货">
          <view slot="center">
            <u-radio-group
                placement="row"
            >
              <u-radio
                  v-for="item in list"
                  activeColor="red"
                  class="padding-left-sm margin-left-xl"
                  :label="item.name"
                  :name="item.name"
                  iconColor="red"
              >
              </u-radio>

            </u-radio-group>
          </view>
        </inputCell>
        <inputCell  label="退货数量" placeholder="请输入数量" type="input">
        </inputCell>
        <view>
          <view class="flex align-center padding-tb">
            <view class="text-red padding-right-xs">*</view>
            <view>输入原因</view>
          </view>
          <view class="padding-bottom" style="border-bottom: 1px solid #E9E9E9">
            <input type="text" placeholder="请输入您的退货或者换货原因" class="text-gray"/>
          </view>
        </view>
        <view>
          <view class="flex align-center padding-tb">
            <view class="text-red padding-right-xs">*</view>
            <view>添加图片</view>
          </view>
          <view class="padding-bottom flex align-center" style="border-bottom: 1px solid #E9E9E9">
            <view style="width: 160rpx;height: 160rpx;border: 1px solid #E9E9E9;border-radius: 10rpx"
                  class="flex align-center justify-center margin-right-sm">
              <image src="./picture/upload.png" style="width: 58rpx;height: 54rpx"></image>
            </view>
            <image src="./picture/alcohol.png" style="width: 160rpx;height: 160rpx"></image>
          </view>
        </view>
        <view>
          <view class="flex justify-between align-center">
            <view class="flex align-center padding-tb">
              <view class="text-red padding-right-xs">*</view>
              <view>选择换货商品</view>
            </view>
            <view class="cuIcon-right text-gray margin-right-xs" style="font-size: 35rpx"></view>
          </view>
          <view class="flex align-center padding-lr-sm">
            <image src="./picture/alcohol.png" style="width: 135rpx;height: 135rpx"></image>
            <view class="margin-left">
              <view class="text-bold text-lg margin-bottom-xs">东方国宾53°瓶装500ml</view>
              <view class="flex justify-between align-center text-gray margin-bottom-xs text-df">
                <text class="margin-right-xl">香型:酱香型</text>
                <text class="margin-right-xl">度数:53°</text>
                <text>容量:500ml</text>
              </view>
              <view class="text-red text-lg">
                <text>代理价:</text>
                <text>￥365.00</text>
              </view>
            </view>
          </view>
          <view class="padding-tb margin-lr-sm">
            <view class="flex justify-between align-center margin-bottom-sm">
              <text class="text-gray text-df">当前可退换商品数</text>
              <text style="color: #F37B1D" class="text-lg">100瓶</text>
            </view>
            <view class="flex justify-between align-center">
              <text class="text-gray text-df">可换商品金额</text>
              <text class="text-red text-xl">￥36500.00</text>
            </view>
          </view>
        </view>
      </view>

    </view>

    <view style="padding-bottom: 130rpx">
      <view class="margin-top-sm padding-bottom-sm bg-white">
        <view class="flex align-center padding-tb">
          <view class="cuIcon-titles text-red margin-left-sm" style="font-size: 38rpx"></view>
          <text class="text-xl text-bold">订单信息</text>
        </view>
        <view class="padding-lr-sm">
          <view class="flex align-center justify-between margin-top-sm"
                style="padding-bottom: 10rpx">
            <view class="">退货总价</view>
            <view class="text-gray">￥36500.00</view>
          </view>
          <view class="flex align-center justify-between margin-top-sm"
                style="padding-bottom: 10rpx">
            <view class="">退货服务费</view>
            <view class="text-gray">-￥1500.00</view>
          </view>
          <view class="flex align-center justify-between margin-top-sm"
                style="padding-bottom: 10rpx">
            <view class="">退货金额合计</view>
            <view class="text-red">￥36500.00</view>
          </view>
        </view>
      </view>
    </view>
    <view class="botBtn padding-xs bg-white">
      <button @click="goPay()" style="width: 100%"
              class="cu-btn bg-red radius lg">确认付款
      </button>
    </view>
  </view>
</template>

<script>
import inputCell from "/src/components/common/form/inputCell";
import { mapMutations } from "vuex"
export default {
  name: "returnOne",
  components:{
    inputCell
  },
  data(){
    return{
      list:[{
        name:'退货',
        disabled: false
        },
        {
          name:'换货',
          disabled: false
        }]
    }
  },
  methods:{
    ...mapMutations('index',['setPayResultType']),
    goPay(){
      this.setPayResultType('returnExchange');
      uni.navigateTo({
        url:"/pages/payResult/payResult"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .u-navbar {
  .u-navbar__content {
    height: var(--CustomBar) !important;
    padding-top: var(--StatusBar);
  }

  .u-navbar__content__left,
  .u-navbar__content__right {
    margin-top: var(--StatusBar);
  }
}
/deep/.u-radio {
    .u-radio__icon-wrap{
      border-color: red !important;
    }
  }

.modularOne{
  background:rgba(#E54D42,0.1);
}
.botBtn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.colors{
  color: #F37B1D;
}
</style>