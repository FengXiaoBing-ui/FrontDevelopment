<template>
  <view>
    <u-navbar title="订单详情" :autoBack="true" rightText="联系商家"></u-navbar>
    <view :style="'margin-top:' + CustomBar + 'px;'" class="padding-bottom">
      <fxbStatusCard :status="statusArr[status]" :tips="status==0||status === 1||status === 2?'剩余23小时58分':status==5||status==6||status==3||status==4?'剩余23小时58分':status==9||status==10||status==7||status==8?'已发货，等待买家收货':'订单已完成'" icon="daishenhe"></fxbStatusCard>

      <!--      产品信息-->
      <view class="whiteBoxShadow" style="transform: translateY(-20rpx)">
        <!--        <view class="flex align-center" style="padding-bottom: 25rpx" v-if="status == 3">-->
        <!--          <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>-->
        <!--          <view class="text-bold text-xl">商品信息</view>-->
        <!--        </view>-->
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
            </view>
          </view>
        </view>
      </view>


      <!--      合计-->
      <view class="bg-white padding-tb padding-lr-sm">
        <view class="flex align-center justify-between margin-top-sm padding-right-xs" style="padding-bottom: 10rpx">
          <view class="text-grey">成交价</view>
          <view class="">￥300.00</view>
        </view>
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
      <view class="bg-white padding-tb margin-top-sm" v-if="status == 11||status == 10||status == 7||status == 8||status == 9||status == 12">
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
            <view>
              <view class="cu-btn sm bg-red text-white margin-right" @click="go()">{{status==11||status==12?"申请售后":"确认收货"}}</view>
              <view class="cu-btn sm line-black ">查看物流</view>
            </view>
          </view>
        </view>
      </view>

      <!--      配送信息-->
      <view class="bg-white padding-tb margin-top-sm">
        <view class="flex align-center" style="padding-bottom: 15rpx">
          <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>
          <view class="text-bold text-lg">配送信息</view>
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
      <view class="bg-white padding-tb margin-top-sm">
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
          <view class="flex align-center justify-between margin-top-sm padding-right-xs"
                v-if="status==0||status==1||status==2"
                style="padding-bottom: 10rpx">
            <view class="text-grey">申请时间</view>
            <view class="flex">
              <view class="padding-right-xs">2022-08-30</view>
              <view>12:23:45</view>
            </view>
          </view>
          <view class="flex align-center justify-between margin-top-sm padding-right-xs"
                v-if="status != 0&&status != 1&&status != 2" style="padding-bottom: 10rpx">
            <view class="text-grey">提交时间</view>
            <view class="flex">
              <view class="padding-right-xs">2022-08-30</view>
              <view>12:23:45</view>
            </view>
          </view>
          <view class="flex align-center justify-between margin-top-sm padding-right-xs"
                v-if="status != 0&&status != 1&&status != 2" style="padding-bottom: 10rpx">
            <view class="text-grey">订单来源</view>
            <view>分销伙伴-王刚</view>
          </view>
          <view class="flex align-center justify-between margin-top-sm padding-right-xs"
                v-if="status != 0&&status != 1&&status != 2"
                style="padding-bottom: 10rpx">
            <view class="text-grey">支付状态</view>
            <view>已支付</view>
          </view>


          <view class="flex align-center justify-between margin-top-sm padding-right-xs"
                style="padding-bottom: 10rpx"
                v-if="status != 0&&status != 1&&status != 2"
          >
            <view class="text-grey">支付金额</view>
            <view class="">530.00</view>
          </view>


          <view class="flex align-center justify-between margin-top-sm padding-right-xs"
                style="padding-bottom: 10rpx"
                v-if="status != 0&&status != 1&&status != 2"
          >
            <view class="text-grey">支付方式</view>
            <view class="">微信支付</view>
          </view>


          <view class="flex align-center justify-between margin-top-sm padding-right-xs"
                style="padding-bottom: 10rpx"
                v-if="status != 0&&status != 1&&status != 2"
          >
            <view class="text-grey">支付时间</view>
            <view class="flex">
              <view class="padding-right-xs">2022-08-30</view>
              <view>12:23:45</view>
            </view>
          </view>


          <view class="flex align-center justify-between margin-top-sm padding-right-xs"
                style="padding-bottom: 10rpx"
                v-if="status == 10||status == 7||status == 8||status == 9"
          >
            <view class="text-grey">发货时间</view>
            <view class="flex">
              <view class="padding-right-xs">2022-08-30</view>
              <view>12:23:45</view>
            </view>
          </view>


          <view class="flex align-center justify-between margin-top-sm padding-right-xs"
                style="padding-bottom: 10rpx"
                v-if="status == 11||status==12"
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
    <view class="botBtn bg-white padding-lr padding-tb-xs" v-if="status==0||status==1||status==2">
      <view class="flex justify-between align-center">
        <view class="text-left">合计：
          <text class="text-red">￥2000.00</text>
        </view>
        <view>
          <button class="cu-btn w20 text-black" style="background-color:#F7F7F7" @click="goToItems(item)">取消订单</button>
          <button class="cu-btn bg-red w20 margin-left-sm" @click="goToItem()">确认支付</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbStatusCard from "/src/components/fxb/fxb-status-card";
export default {
  name: "orderTwo",
  components:{
    boxTitle,
    fxbStatusCard
  },
  data(){
    return{
      status: 1,
      statusArr: [
        "待支付",
        "待支付",
        "待支付",
        "待发货",
        "待发货",
        "待发货",
        "待发货",
        "待收货",
        "待收货",
        "待收货",
        "待收货",
        "已完成",
        "已完成"
      ],
    }
  },
  onLoad(options) {
    this.status = options.status;
  },
  methods:{
    go(){
      if(this.status==11||this.status==12){
        uni.navigateTo({
          url: "pages/admin/orderOne/afterSales"
        });
      }
    }
  }
}
</script>

<style scoped>
img{
  width: 150rpx;
  height: 86px;
}
.botBtn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
}
</style>