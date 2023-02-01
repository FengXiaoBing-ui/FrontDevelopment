<template>
<view>
  <u-navbar title="售后详情" rightText="联系客服" :autoBack="true"></u-navbar>

  <view :style="'margin-top:' + CustomBar + 'px;'+(status==3||status==4||status==5||status==0?'padding-bottom:130rpx':'padding-bottom:20rpx')">

    <fxbStatusCard :status="statusArr[status]" :tips="status==0?'剩余23小时58分':status==1?'商家已驳回您的售后申请':status==2||status==3||status==4||status==5||status==6?'您已同意售后，正在处理':'您的售后已处理完成'" icon="daishenhe"></fxbStatusCard>
    <view style="transform: translateY(-20rpx)">

      <view class="bg-white padding-tb" style="border-radius: 10rpx 10rpx 0 0" v-if="status==1">
        <view class="text-red padding-lr-sm">您的商品经查看暂无质量问题，因此驳回您的售后申请</view>
      </view>

      <view class="bg-white padding-tb" style="border-radius: 10rpx 10rpx 0 0" v-if="status==2||status==7">
        <view class="flex align-center margin-bottom" style="padding-bottom: 15rpx">
          <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>
          <view class="text-bold text-lg">处理进度</view>
        </view>
        <u-steps current="1" dot inactiveColor="#AFAFAF" activeColor="#F37B1D">
          <u-steps-item title="商家同意"></u-steps-item>
          <u-steps-item title="银行处理"></u-steps-item>
          <u-steps-item title="退款成功"></u-steps-item>
        </u-steps>
        <view class="padding-lr-sm padding-tb">
          <button class="bg-red text-white adjustment" @click="toChange()">查看钱款去向</button>
        </view>
      </view>

      <view class="bg-white padding-tb" style="border-radius: 10rpx 10rpx 0 0" v-if="status==3||status==4||status==5||status==6||status==8||status==9">
        <view class="flex align-center margin-bottom" style="padding-bottom: 15rpx">
          <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>
          <view class="text-bold text-lg">处理进度</view>
        </view>
        <u-steps current="1" dot inactiveColor="#AFAFAF" activeColor="#F37B1D">
          <u-steps-item title="预约取件"></u-steps-item>
          <u-steps-item title="商家收货"></u-steps-item>
          <u-steps-item title="商家退款" v-if="status==3||status==8"></u-steps-item>
          <u-steps-item title="银行处理" v-if="status==3||status==8"></u-steps-item>
          <u-steps-item title="商家重发" v-if="status==4||status==5||status==6||status==9"></u-steps-item>
          <u-steps-item title="退款成功"></u-steps-item>
        </u-steps>
        <view class="padding-lr-sm" v-if="status!=8">
          <view class="text-red padding-top" v-if="status==3||status==4">您已同意退货退款，等待客户将商品寄回</view>
          <view>
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
        <view class="padding-lr-sm padding-tb" v-if="status==8">
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
            <view class="">未收货</view>
          </view>
          <view class="flex align-center justify-between margin-top-sm" style="padding-bottom: 10rpx">
            <view class="text-grey">售后类型</view>
            <view class="">退款</view>
          </view>
          <view class="flex align-center justify-between margin-top-sm" style="padding-bottom: 10rpx">
            <view class="text-grey">退款原因</view>
            <view class="">商品破损</view>
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

<!--&lt;!&ndash;      售后状态&ndash;&gt;-->
<!--    <view class="whiteBoxShadow" v-if="status == 2||status == 3">-->
<!--      <view class="flex align-center justify-between margin-top-sm" style="padding-bottom: 10rpx">-->
<!--        <view class="text-grey">售后状态</view>-->
<!--        <view class="text-orange text-bold text-lg">未通过</view>-->
<!--      </view>-->
<!--      <view class="flex align-center justify-between margin-top-sm" style="padding-bottom: 10rpx">-->
<!--        <view class="text-grey">未通过原因</view>-->
<!--        <view class="">这是未通过原因说明</view>-->
<!--      </view>-->
<!--      <view class="flex align-center justify-between margin-top-sm" style="padding-bottom: 10rpx">-->
<!--        <view class="text-grey">审核时间</view>-->
<!--        <view>-->
<!--          <text class="margin-right-xs">2022-02-23</text>-->
<!--          <text>15:23:23</text>-->
<!--        </view>-->
<!--      </view>-->
<!--    </view>-->


<!--      进度详情-->
<!--    <view class="whiteBoxShadow margin-top-sm" v-if="status == 6||status == 4||status == 5">-->
<!--      <boxTitle title="进度查询" class="text-lg margin-bottom-sm"></boxTitle>-->
<!--      <view class="flex align-center justify-between margin-top-sm" style="padding-bottom: 10rpx">-->
<!--        <view>-->
<!--          <view class="text-bold text-xl text-red margin-bottom-sm">退款中</view>-->
<!--          <view class="text-grey">-->
<!--            <text class="margin-right-xs">2022-02-23</text>-->
<!--            <text>15:23:23</text>-->
<!--          </view>-->
<!--        </view>-->
<!--        <view class="text-price text-red text-bold text-xxl">530.00</view>-->
<!--      </view>-->
<!--      <view class="flex margin-top-sm text-sm" style="padding-bottom: 10rpx">-->
<!--        <view class="margin-right-xs">退回账号</view>-->
<!--        <view>（微信账号：23927397）</view>-->
<!--      </view>-->
<!--      <view class="margin-top-sm">-->
<!--        <button style="width: 100%"-->
<!--                class="cu-btn bg-red radius">进度详情-->
<!--        </button>-->
<!--      </view>-->
<!--    </view>-->


<!--&lt;!&ndash;      物流信息&ndash;&gt;-->
<!--    <view class="whiteBoxShadow margin-top-sm" v-if="status == 5">-->
<!--      <boxTitle title="物流信息" class="text-lg margin-bottom-sm"></boxTitle>-->
<!--      <view class="flex align-center justify-between margin-top-sm" style="padding-bottom: 10rpx">-->
<!--        <view class="text-grey">物流状态</view>-->
<!--        <view>等待买家寄回</view>-->
<!--      </view>-->
<!--    </view>-->



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
    <view class="bg-white padding-tb margin-top-sm" v-if="status==5||status==6||status==9">
      <view class="flex align-center" style="padding-bottom: 15rpx">
        <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>
        <view class="text-bold text-lg">换货地址</view>
      </view>
      <view class="padding-lr-sm margin-top-sm">
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
      </view>
    </view>


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
              v-if="status==1||status==2||status==3||status==4||status==5||status==6"
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

        >
          <view class="text-grey">审核人</view>
          <view class="">王刚</view>
        </view>


        <view class="flex align-center justify-between margin-top-sm padding-right-xs"
              style="padding-bottom: 10rpx"
        >
          <view class="text-grey">审核时间</view>
          <view class="flex">
            <view class="padding-right-xs">2022-08-30</view>
            <view>12:23:45</view>
          </view>
        </view>
      </view>
    </view>


<!--      按钮-->
    <view class="flex foot bg-white padding justify-between botBtn" v-if="status == 0">
      <button class="cu-btn w50 bg-gray margin-right-sm radius" @click="register">驳回申请</button>
      <button class="cu-btn w50 bg-red radius">审核通过</button>
    </view>

    <view class="botBtn padding bg-white" v-if="status == 4||status==3||status==5">

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
              class="cu-btn bg-red radius lg">{{status==3?'确认发货并退款':status==4?'确认收货':'确认发货'}}
      </button>
    </view>

  </view>
</view>
</template>

<script>
import boxTitle from "../../agent/components/fxb-box-title";
import fxbStatusCard from "/src/components/fxb/fxb-status-card"
export default {
  name: "afterSales",
  components:{
    boxTitle,
    fxbStatusCard
  },
  data(){
    return{
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