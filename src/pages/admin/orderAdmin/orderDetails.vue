<template>
  <view>
    <u-navbar title="订单详情" :autoBack="true"></u-navbar>
    <view :style="'margin-top:' + CustomBar + 'px;'+(status==1||status==2?'padding-bottom:160rpx':'')">
      <fxbStatusCard :status="statusArr[status]" :tips="status==0?'剩余23小时58分':status==1||status==2||status==3||status==4?'商家已备货，等待发货':status==5||status==6||status==7||status==8?'已发货，等待买家收货':'订单已完成'" icon="daishenhe"></fxbStatusCard>


<!--      预约取件-->
<!--      <view class="whiteBoxShadow" v-if="status == 3">-->
<!--        <view class="flex align-center" style="padding-bottom: 25rpx">-->
<!--          <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>-->
<!--          <view class="text-bold text-xl">预约取件</view>-->
<!--        </view>-->
<!--        <view class="flex justify-between">-->
<!--          <view>-->
<!--            <text class="text-red padding-top">*</text>-->
<!--            <text>选择快递</text>-->
<!--          </view>-->
<!--          <view>-->
<!--            <text class="text-grey padding-right">请选择快递</text>-->
<!--            <text class="cuIcon-right"></text>-->
<!--          </view>-->
<!--        </view>-->
<!--        <view class="u-border-bottom margin-tb-lg"></view>-->

<!--        <view class="flex">-->
<!--          <u-avatar class="flex-sub" bg-color="#008DFF" font-size="14" text="寄"></u-avatar>-->
<!--          <view class="margin-left-sm flex-treble">-->
<!--            <view class="flex align-center">-->
<!--              <text class="margin-right">张晓丹</text>-->
<!--              <text class="cuIcon-mobile text-orange"></text>-->
<!--              <text>18690726598</text>-->
<!--            </view>-->
<!--            <view class="text-bold text-lg flex justify-between margin-top-sm">-->
<!--              <view class="flex-treble">贵州省贵阳市观山湖区德福中心A3栋6楼10号</view>-->
<!--              <view class="flex-sub text-right">-->
<!--                <text v-if="false" class="cuIcon-right text-gray" style="font-size: 32rpx"></text>-->
<!--              </view>-->
<!--            </view>-->
<!--          </view>-->
<!--        </view>-->
<!--        <view class="flex margin-top">-->
<!--          <u-avatar class="flex-sub" bg-color="#00C800" font-size="14" text="收"></u-avatar>-->
<!--          <view class="margin-left-sm flex-treble">-->
<!--            <view class="flex align-center">-->
<!--              <text class="margin-right">张晓丹</text>-->
<!--              <text class="cuIcon-mobile text-orange"></text>-->
<!--              <text>18690726598</text>-->
<!--            </view>-->
<!--            <view class="text-bold text-lg flex justify-between margin-top-sm">-->
<!--              <view class="flex-treble">贵州省贵阳市观山湖区德福中心A3栋6楼10号</view>-->
<!--              <text class="flex-sub cuIcon-right text-right text-gray" style="font-size: 32rpx"></text>-->
<!--            </view>-->
<!--          </view>-->
<!--        </view>-->

<!--        <view class="u-border-bottom margin-tb-lg"></view>-->
<!--        <view class="flex justify-between">-->
<!--          <view>-->
<!--            <text class="text-red padding-top">*</text>-->
<!--            <text>预约时间</text>-->
<!--          </view>-->
<!--          <view>-->
<!--            <text class="text-grey padding-right">请选择时间</text>-->
<!--            <text class="cuIcon-right"></text>-->
<!--          </view>-->
<!--        </view>-->
<!--      </view>-->


<!--      收货人信息-->
<!--      <view class="whiteBoxShadow margin-top-sm" v-if="status == 2||status == 1||status == 4||status == 5||status == 6">-->
<!--        <view class="flex align-center" style="padding-bottom: 15rpx">-->
<!--          <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>-->
<!--          <view class="text-bold text-xl">收货人信息</view>-->
<!--        </view>-->
<!--        <view class="flex align-center justify-start margin-top-sm" style="padding-bottom: 10rpx">-->
<!--          <text class="text-gray">张晓丹</text>-->
<!--          <text class="cuIcon-mobile text-yellow padding-left"></text>-->
<!--          <text>18690726598</text>-->
<!--        </view>-->
<!--        <view class="flex align-start justify-start margin-top-sm">-->
<!--          <text class="text-orange cuIcon-locationfill  padding-right-sm" style="font-size:40rpx"></text>-->
<!--          <text class="text-xl text-bold">贵州省贵阳市观山湖区德福中心A3栋6楼10号</text>-->
<!--        </view>-->
<!--      </view>-->


<!--      产品信息-->
      <view class="whiteBoxShadow" style="transform: translateY(-20rpx)">
<!--        <view class="flex align-center" style="padding-bottom: 25rpx" v-if="status == 3">-->
<!--          <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>-->
<!--          <view class="text-bold text-xl">商品信息</view>-->
<!--        </view>-->
        <view class="flex padding-bottom-sm">
          <view class="flex-sub">
            <img src="http://124.220.219.72:8084/static/productDetails/Slice%201.png">
          </view>
          <view class="padding-left-sm flex-treble">
            <text class="text-lg text-bold">东方国宾·尊致酒酱香型白酒</text>
            <view class="text-gray text-df padding-top-sm flex align-center">
              <view class="margin-right-sm">香型:酱香型</view>
              <view class="margin-right-sm">度数:53度</view>
              <view>容量:500ml</view>
            </view>
            <view class="flex justify-between padding-top-sm">
              <view class="text-bold">
                <text>代理价:</text>
                <text class="text-red">￥361.00</text>
              </view>
              <text class="text-lg">2</text>
            </view>
          </view>
        </view>

        <view class="flex">
          <view class="flex-sub">
            <img src="http://124.220.219.72:8084/static/productDetails/Slice%201.png">
          </view>
          <view class="padding-left-sm flex-treble">
            <text class="text-lg text-bold">东方国宾·尊致酒酱香型白酒</text>
            <view class="text-gray text-df padding-top-sm flex align-center">
              <view class="margin-right-sm">香型:酱香型</view>
              <view class="margin-right-sm">度数:53度</view>
              <view>容量:500ml</view>
            </view>
            <view class="flex justify-between padding-top-sm">
              <view class="text-bold">
                <text>代理价:</text>
                <text class="text-red">￥361.00</text>
              </view>
              <text class="text-lg">2</text>
            </view>
          </view>
        </view>
      </view>


<!--      合计-->
      <view class="bg-white padding-tb margin-top-sm padding-lr-sm margin-top-xs">
        <view class="flex align-center justify-between margin-top-sm padding-right-xs" style="padding-bottom: 10rpx">
          <view class="text-grey">商品总数</view>
          <view class="">2</view>
        </view>
        <view class="flex align-center justify-between margin-top-sm padding-bottom" style="border-bottom: 1px solid #F1F1F1">
          <view class="text-grey text-lg">运费</view>
          <view class="text-price text-lg">0.00</view>
        </view>
        <view class="flex align-center justify-between margin-top">
          <view class="text-xl">合计</view>
          <view class="text-price text-red text-xl text-bold">530.00</view>
        </view>
      </view>

<!--      物流信息-->
      <view class="bg-white padding-tb margin-top-sm" v-if="status == 3||status == 4||status == 5">
        <view class="flex justify-between">
          <view class="flex align-center">
            <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>
            <view class="text-bold text-xl">物流信息</view>
          </view>
          <view class="text-red margin-right-sm">联系物流</view>
        </view>
        <view class="padding-lr-sm">
          <view class="flex align-center justify-between margin-top" style="padding-bottom: 10rpx">
            <view class="text-grey">物流公司</view>
            <view class="">中通快递</view>
          </view>
          <view class="flex align-center justify-between margin-top-sm" style="padding-bottom: 10rpx">
            <view class="text-grey">物流单号</view>
            <view>
              <text class="padding-right-xs">16456548947</text>
              <view class="cu-btn sm bg-orange light">复制</view>
            </view>
          </view>
          <view class="flex align-center justify-between margin-top-sm" style="padding-bottom: 20rpx">
            <view></view>
            <view class="cu-btn sm line-black ">查看物流</view>
          </view>
        </view>
      </view>

<!--      配送信息-->
      <view class="bg-white padding-tb margin-top-sm">
        <view class="flex align-center" style="padding-bottom: 15rpx">
          <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>
          <view class="text-bold text-xl">配送信息</view>
        </view>
        <view class="padding-lr-sm">
          <view class="flex align-center">
            <view class="w25 text-gray">配送方式</view>
            <view >中通快递</view>
          </view>
          <view class="flex align-start margin-tb-sm">
            <view class="w25 text-gray">收货信息</view>
            <view>
              <view>
                <text>张晓丹</text>
                <text class="cuIcon-mobile text-yellow padding-left"></text>
                <text>18690726598</text>
              </view>
            </view>
          </view>
          <view class="flex margin-bottom-sm">
            <view class="w25"></view>
            <view class="w75">贵州省贵阳市关山湖区德福中心A3栋6楼10-13号</view>
          </view>
          <view class="flex align-center">
            <view class="w25 text-gray">备注</view>
            <view>这是备注的信息，这是备注的信息</view>
          </view>
        </view>
      </view>

<!--      订单信息-->
      <view class="bg-white padding-tb margin-top-sm" v-if="status == 2||status == 1||status == 3||status == 4||status == 5">
        <view class="flex align-center" style="padding-bottom: 15rpx">
          <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>
          <view class="text-bold text-xl">订单信息</view>
        </view>
        <view class="padding-lr-sm">
          <view class="flex align-center justify-between margin-top-sm padding-right-xs" style="padding-bottom: 10rpx">
            <view class="text-grey">订单编号</view>
            <view>
              <text class="padding-right-xs">51579527895728</text>
              <view class="cu-btn sm bg-orange light">复制</view>
            </view>
          </view>

          <view class="flex align-center justify-between margin-top-sm padding-right-xs" style="padding-bottom: 10rpx">
            <view class="text-grey">申请时间</view>
            <view class="flex">
              <view class="padding-right-xs">2022-08-30</view>
              <view>12:23:45</view>
            </view>
          </view>


          <view class="flex align-center justify-between margin-top-sm padding-right-xs"
                style="padding-bottom: 10rpx"
                v-if="status == 2||status == 3||status == 4||status == 5||status == 1"
          >
            <view class="text-grey">支付金额</view>
            <view class="">530.00</view>
          </view>


          <view class="flex align-center justify-between margin-top-sm padding-right-xs"
                style="padding-bottom: 10rpx"
                v-if="status == 2||status == 3||status == 4||status == 5||status == 1"
          >
            <view class="text-grey">支付方式</view>
            <view class="">微信支付</view>
          </view>


          <view class="flex align-center justify-between margin-top-sm padding-right-xs"
                style="padding-bottom: 10rpx"
                v-if="status == 2||status == 3||status == 4||status == 5||status == 1"
          >
            <view class="text-grey">支付时间</view>
            <view class="flex">
              <view class="padding-right-xs">2022-08-30</view>
              <view>12:23:45</view>
            </view>
          </view>


          <view class="flex align-center justify-between margin-top-sm padding-right-xs"
                style="padding-bottom: 10rpx"
                v-if="status == 3 || status == 4"
          >
            <view class="text-grey">发货时间</view>
            <view class="flex">
              <view class="padding-right-xs">2022-08-30</view>
              <view>12:23:45</view>
            </view>
          </view>


          <view class="flex align-center justify-between margin-top-sm padding-right-xs"
                style="padding-bottom: 10rpx"
                v-if="status == 5"
          >
            <view class="text-grey">完成时间</view>
            <view class="flex">
              <view class="padding-right-xs">2022-08-30</view>
              <view>12:23:45</view>
            </view>
          </view>
        </view>
      </view>

    </view>
    <view v-if="status == 1||status == 2" class="botBtn padding bg-white">

      <!--      <u-popup :show="SignIn" :round="10" mode="center" @close="close" @open="open">-->
      <!--        <view class="margin-xl text-center">-->
      <!--          <view class="text-bold text-lg">确认签收</view>-->
      <!--          <view>确保签收成功后换货/退货商品</view>-->
      <!--          <view>自动补入代理商云库存</view>-->
      <!--        </view>-->
      <!--        <view class="flex">-->
      <!--          <view class="cu-btn w50 bg-gray">取消</view>-->
      <!--          <view class="cu-btn w50 bg-red text-white">确认签收</view>-->
      <!--        </view>-->
      <!--      </u-popup>-->
      <button @click="SignIn = true" style="width: 100%"
              class="cu-btn bg-red radius lg">确认发货
      </button>
    </view>
  </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbStatusCard from "/src/components/fxb/fxb-status-card";
export default {
  name: "orderDetails",
  components:{
    boxTitle,
    fxbStatusCard
  },
  data(){
    return{
      status: 1,
      statusArr: [
        "待支付",
        "待发货",
        "待发货",
        "待发货",
        "待发货",
        "待收货",
        "待收货",
        "待收货",
        "待收货",
        "已完成"
      ],
    }
  },
  methods:{
    onLoad(options) {
      this.status = options.status;
    }
  }
}
</script>

<style scoped>
.botBtn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
img{
  width: 150rpx;
  height: 86px;
}
</style>