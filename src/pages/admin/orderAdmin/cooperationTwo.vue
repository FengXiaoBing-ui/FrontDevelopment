<template>
  <view>
    <u-navbar title="售后详情" rightText="联系客服" :autoBack="true"></u-navbar>

    <view :style="'margin-top:' + CustomBar + 'px;'" class="padding-bottom">

      <fxbStatusCard :status="statusArr[status]" :tips="status==0||status==1||status==2?'剩余23小时58分':status==3?'商家已驳回您的售后申请':status==4||status==5||status==6||status==7||status==8?'您已同意售后，正在处理':'您的售后已处理完成'" icon="daishenhe"></fxbStatusCard>
      <view style="transform: translateY(-20rpx)">

        <view class="bg-white padding-tb" style="border-radius: 10rpx 10rpx 0 0" v-if="status==3">
          <view class="text-red padding-lr-sm">您的商品经查看暂无质量问题，因此驳回您的售后申请</view>
        </view>

<!--        <view class="bg-white padding-tb" style="border-radius: 10rpx 10rpx 0 0" v-if="status==7">-->
<!--          <view class="flex align-center margin-bottom" style="padding-bottom: 15rpx">-->
<!--            <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>-->
<!--            <view class="text-bold text-lg">处理进度</view>-->
<!--          </view>-->
<!--          <u-steps current="1" dot inactiveColor="#AFAFAF" activeColor="#F37B1D">-->
<!--            <u-steps-item title="商家同意"></u-steps-item>-->
<!--            <u-steps-item title="银行处理"></u-steps-item>-->
<!--            <u-steps-item title="退款成功"></u-steps-item>-->
<!--          </u-steps>-->
<!--          <view class="padding-lr-sm padding-tb">-->
<!--            <button class="bg-red text-white adjustment" @click="toChange()">查看钱款去向</button>-->
<!--          </view>-->
<!--        </view>-->

        <view class="bg-white padding-tb" style="border-radius: 10rpx 10rpx 0 0" v-if="status==4||status==5||status==6||status==8||status==9||status==7">
          <view class="flex align-center margin-bottom" style="padding-bottom: 15rpx">
            <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>
            <view class="text-bold text-lg">处理进度</view>
          </view>
          <u-steps current="1" dot inactiveColor="#AFAFAF" activeColor="#F37B1D">
            <u-steps-item :title="title"></u-steps-item>
            <u-steps-item :title="titles"></u-steps-item>
            <u-steps-item title="商家退款"></u-steps-item>
            <u-steps-item title="银行处理"></u-steps-item>
            <u-steps-item title="退款成功"></u-steps-item>
          </u-steps>
          <view class="padding-lr-sm">
            <view class="text-red padding-top" v-if="status==8||status==6||status==7">您已同意退货退款，等待客户将商品寄回</view>
            <view v-if="status==7||status==8">
              <view class="flex align-center justify-between margin-top-sm" style="padding-bottom: 10rpx">
                <view class="text-grey">快递</view>
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
          <view class="padding-lr-sm padding-tb" v-if="status==4||status==5||status==9">
            <button class="bg-red text-white adjustment" @click="toChange()">查看钱款去向</button>
          </view>
        </view>

        <!--      售后信息-->
        <view class="bg-white padding-tb" :style="status==0?'border-radius: 10rpx 10rpx 0 0':''" :class="status==0?'':'margin-top-sm'">
          <view class="flex align-center margin-bottom" style="padding-bottom: 15rpx">
            <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>
            <view class="text-bold text-lg">售后信息</view>
          </view>
          <view class="padding-lr-sm">
            <view class="flex align-center justify-between margin-top-sm" style="padding-bottom: 10rpx">
              <view class="text-grey">是否收货</view>
              <view class="">{{status==0||status==3||status==4||status==5||status==9?"未收货":"已收货"}}</view>
            </view>
            <view class="flex align-center justify-between margin-top-sm" style="padding-bottom: 10rpx">
              <view class="text-grey">售后类型</view>
              <view class="">{{status!=2?"退款":"换货"}}</view>
            </view>
            <view class="flex align-center justify-between margin-top-sm" style="padding-bottom: 10rpx">
              <view class="text-grey">退款原因</view>
              <view class="">商品损坏</view>
            </view>
            <view class="flex align-center justify-between margin-top-sm" style="padding-bottom: 10rpx">
              <view class="text-grey">退款凭证和描述</view>
              <view></view>
            </view>
            <view class="margin-top-sm" style="padding-bottom: 10rpx">
              <view class="padding-bottom-sm">这是退款描述，这是退款描述，这是退款描述，这是退款描述</view>
              <view class="flex">
                <image src="../returnExchange/picture/alcohol.png" style="width: 120rpx;height: 120rpx" class="margin-right"></image>
                <image src="../returnExchange/picture/alcohol.png" style="width: 120rpx;height: 120rpx" class="margin-right"></image>
                <image src="../returnExchange/picture/alcohol.png" style="width: 120rpx;height: 120rpx" class="margin-right"></image>
                <image src="../returnExchange/picture/alcohol.png" style="width: 120rpx;height: 120rpx" class="margin-right"></image>
                <image src="../returnExchange/picture/alcohol.png" style="width: 120rpx;height: 120rpx"></image>
              </view>
            </view>
          </view>
        </view>
      </view>


      <!--      退款商品-->
      <view class="bg-white padding-tb">
        <view class="flex align-center margin-bottom" style="padding-bottom: 15rpx">
          <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>
          <view class="text-bold text-lg">{{status==9||status==4||status==5||status==6?'换货商品':'退货商品'}}</view>
        </view>
        <view class="padding-lr-sm">
          <view class="flex padding-bottom">
            <view class="flex-sub">
              <image src="../returnExchange/picture/alcohol.png" style="width: 136rpx;height: 136rpx"></image>
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
              <image src="../returnExchange/picture/alcohol.png" style="width: 136rpx;height: 136rpx"></image>
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
      </view>


      <!--      合计-->
      <view class="bg-white padding-tb margin-top-sm">
        <view class="padding-lr-sm">
          <view class="flex align-center justify-between padding-right-xs" style="padding-bottom: 10rpx">
            <view class="text-grey">数量合计</view>
            <view class="">12</view>
          </view>
          <view class="flex align-center justify-between margin-top-sm padding-bottom" style="border-bottom: 1px solid #F1F1F1">
            <view class="text-grey">金额合计</view>
            <view>¥3000.00</view>
          </view>
          <view class="flex align-center justify-between margin-top">
            <view class="text-bold">退款金额</view>
            <view class="text-red text-bold">¥2518.00</view>
          </view>
        </view>
      </view>

      <!--    换货地址-->
<!--      <view class="bg-white padding-tb margin-top-sm" v-if="status==5||status==6||status==9">-->
<!--        <view class="flex align-center" style="padding-bottom: 15rpx">-->
<!--          <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>-->
<!--          <view class="text-bold text-lg">换货地址</view>-->
<!--        </view>-->
<!--        <view class="padding-lr-sm margin-top-sm">-->
<!--          <view class="flex align-center">-->
<!--            <view class="w25 text-gray">配送方式</view>-->
<!--            <view >中通快递</view>-->
<!--          </view>-->
<!--          <view class="flex align-start margin-tb-sm">-->
<!--            <view class="w25 text-gray">收货信息</view>-->
<!--            <view>-->
<!--              <view>-->
<!--                <text>张晓丹</text>-->
<!--                <text class="cuIcon-mobile text-yellow padding-left"></text>-->
<!--                <text>18690726598</text>-->
<!--              </view>-->
<!--            </view>-->
<!--          </view>-->
<!--          <view class="flex margin-bottom-sm">-->
<!--            <view class="w25"></view>-->
<!--            <view class="w75">贵州省贵阳市关山湖区德福中心A3栋6楼10-13号</view>-->
<!--          </view>-->
<!--        </view>-->
<!--      </view>-->


      <!--      订单信息-->
      <view class="bg-white padding-tb margin-top-sm">
        <view class="flex align-center" style="padding-bottom: 15rpx">
          <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>
          <view class="text-bold text-lg">订单信息</view>
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
                style="padding-bottom: 10rpx"
          >
            <view class="text-grey">下单时间</view>
            <view class="flex">
              <view class="padding-right-xs">2022-08-30</view>
              <view>12:23:45</view>
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
                v-if="status!=0&&status!=1&&status!=2"
          >
            <view class="text-grey">审核人</view>
            <view class="">王刚</view>
          </view>


          <view class="flex align-center justify-between margin-top-sm padding-right-xs"
                style="padding-bottom: 10rpx"
                v-if="status!=0&&status!=1&&status!=2"
          >
            <view class="text-grey">审核时间</view>
            <view class="flex">
              <view class="padding-right-xs">2022-08-30</view>
              <view>12:23:45</view>
            </view>
          </view>
          <view class="flex align-center justify-between margin-top-sm padding-right-xs"
                style="padding-bottom: 10rpx"
                v-if="status==9"
          >
            <view class="text-grey">退款时间</view>
            <view class="flex">
              <view class="padding-right-xs">2022-08-30</view>
              <view>12:23:45</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import boxTitle from "../../agent/components/fxb-box-title";
import fxbStatusCard from "/src/components/fxb/fxb-status-card"
export default {
  name: "cooperationTwo",
  components:{
    boxTitle,
    fxbStatusCard
  },
  data(){
    return{
      titles:'',
      title:"",
      status: 1,
      statusArr: [
        "待审核",
        "未通过",
        "进行中",
        "已完成",
        "进行中",
        "已完成",
        "进行中",
        "进行中",
        "进行中",
        "已完成",
      ],
    }
  },
  onLoad(options) {
    this.status = options.status;
    if(options.status==4||options.status==5){
      this.title = '商家同意'
    }else {
      this.title = '预约取件'
    }
    if(options.status==4||options.status==5){
      this.titles = '确认退款'
    }else {
      this.titles = '商家收货'
    }
  },
  methods:{
    register(){
      uni.navigateTo({
        url:"/pages/admin/contractDeliverGoods/toExamineFailed"
      })
    },
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
}
.adjustment{
  height: 70rpx;
  line-height: 70rpx;
  font-size: 32rpx;
}
</style>