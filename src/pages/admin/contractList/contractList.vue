<template>
  <view>
    <u-navbar :border="false" :fixed="true" title="退换货详情" :autoBack="true">
    </u-navbar>
    <view class="padding-bottom" :style="'margin-top:'+ CustomBar + 'px'">
      <fxbStatusCard :status="statusArr[status]" :tips="status==1?'商家已驳回您的售后申请':status==3?'退货申请':'剩余23小时58分'" icon="daishenhe"></fxbStatusCard>

      <view style="transform: translateY(-20rpx)">

        <!--        状态1     -->
        <view v-if="status==2||status==3" class="bg-white" style="border-radius: 10rpx 10rpx 0 0">
          <view class="flex align-center padding-tb">
            <view class="cuIcon-titles text-red" style="font-size: 38rpx"></view>
            <text class="text-xl text-bold">处理进度</text>
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

        <!--        状态2     -->
        <view v-if="status==0||status==2" class="bg-white" style="border-radius: 10rpx 10rpx 0 0" :class="status==2||status==3?'margin-top-sm':''">
          <view class="flex align-center padding-tb">
            <view class="cuIcon-titles text-red margin-left-sm" style="font-size: 38rpx"></view>
            <text class="text-xl text-bold">退货商品</text>
          </view>
          <view class="flex align-center padding-lr-sm">
            <image src="../returnExchange/picture/alcohol.png" style="width: 135rpx;height: 135rpx"></image>
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

        <!--        状态3     -->
        <view v-if="status==1||status==3" class="bg-white" style="border-radius: 10rpx 10rpx 0 0" :class="status==2||status==3?'margin-top-sm':''">
          <view class="flex align-center padding-tb">
            <view class="cuIcon-titles text-red" style="font-size: 38rpx"></view>
            <text class="text-xl text-bold">换货明细</text>
          </view>
          <view>
            <view class="color margin-left-sm padding-bottom">合同商品</view>
          </view>
          <view class="flex align-center padding-lr-sm">
            <image src="../returnExchange/picture/alcohol.png" style="width: 135rpx;height: 135rpx"></image>
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
              <text class="text-lg color">100瓶</text>
            </view>
            <view class="flex justify-between align-center">
              <text class="text-gray text-df">库存商品总价</text>
              <text class="text-red text-xl">￥36500.00</text>
            </view>
          </view>

          <view>
            <view class="flex justify-between align-center">
              <view class="color margin-left-sm padding-tb">换货商品</view>
              <view></view>
            </view>
            <view class="flex align-center padding-lr-sm">
              <image src="../returnExchange/picture/alcohol.png" style="width: 135rpx;height: 135rpx"></image>
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
                <text class="text-lg color">100瓶</text>
              </view>
              <view class="flex justify-between align-center">
                <text class="text-gray text-df">可换商品金额</text>
                <text class="text-red text-xl">￥36500.00</text>
              </view>
            </view>
          </view>
        </view>

        <view class="bg-white padding-bottom-sm margin-top-sm" v-if="status==0">
          <view class="flex align-center padding-tb">
            <view class="cuIcon-titles text-red" style="font-size: 38rpx"></view>
            <text class="text-xl text-bold">申请信息</text>
          </view>
          <view class="padding-left padding-right-sm">
            <view class="flex justify-between align-center margin-bottom">
              <text class="text-gray">申请类型</text>
              <text>退货</text>
            </view>
            <view class="margin-bottom">
              <text class="text-gray">退货原因</text>
            </view>
            <view class="margin-bottom-sm">
              <text>因经营不善导致门店关闭，现阶段我无法继续销售商品希望能够将商品退回</text>
            </view>
            <view class="margin-bottom">
              <text class="text-gray">图片凭证</text>
            </view>
            <view>
              <image src="../returnExchange/picture/alcohol.png" style="width: 150rpx;height: 150rpx" class="margin-right"></image>
              <image src="../returnExchange/picture/alcohol.png" style="width: 150rpx;height: 150rpx" class="margin-right"></image>
              <image src="../returnExchange/picture/alcohol.png" style="width: 150rpx;height: 150rpx" class="margin-right"></image>
              <image src="../returnExchange/picture/alcohol.png" style="width: 150rpx;height: 150rpx"></image>
            </view>
          </view>
          <view>

          </view>
        </view>

        <view class="bg-white margin-top-sm padding-bottom-sm" v-if="status==0||status==2||status==3">
          <view class="flex align-center padding-tb">
            <view class="cuIcon-titles text-red" style="font-size: 38rpx"></view>
            <text class="text-xl text-bold">退货明细</text>
          </view>
          <view class="padding-lr-sm">
            <view class="flex justify-between align-center margin-bottom-sm">
              <text>退货数量</text>
              <text class="text-gray">100瓶</text>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm">
              <text>退货总价</text>
              <text class="text-gray">￥36500.00</text>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm">
              <text>退货服务费</text>
              <text class="text-gray">-￥1500.00</text>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm">
              <text>退货金额合计</text>
              <text class="text-red text-lg">￥36500.00</text>
            </view>
          </view>
        </view>

        <view class="bg-white margin-top-sm padding-bottom-sm">
          <view class="flex align-center padding-tb justify-between">
            <view class="flex align-center">
              <view class="cuIcon-titles text-red" style="font-size: 38rpx"></view>
              <text class="text-xl text-bold">合同信息</text>
            </view>
            <view>
              <view class="cu-btn round sm margin-right-sm colors">合同详情</view>
            </view>
          </view>
          <view class="padding-lr-sm text-gray">
            <view class="flex justify-between align-center margin-bottom-sm">
              <text>合同编号</text>
              <text>1224234234234</text>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm">
              <text>合同期限</text>
              <text>1年</text>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm">
              <text>结算方式</text>
              <text>现结</text>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm">
              <text>甲方单位</text>
              <text>贵州好酒选电子商务有限公司</text>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm">
              <text>乙方单位</text>
              <text>贵阳市万隆烟酒行</text>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm">
              <text>合同任务总数</text>
              <text>1800瓶</text>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm">
              <text>当前完成任务总数</text>
              <text>1800瓶</text>
            </view>
          </view>
        </view>

        <view class="bg-white margin-top-sm padding-bottom-sm">
          <view class="flex align-center padding-tb">
            <view class="cuIcon-titles text-red" style="font-size: 38rpx"></view>
            <text class="text-xl text-bold">申请信息</text>
          </view>
          <view class="text-gray padding-lr-sm">
            <view class="flex justify-between align-center margin-bottom-sm">
              <text>申请单位</text>
              <text>贵州好酒选小卖部</text>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm">
              <text>申请人</text>
              <text>王晓刚</text>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm">
              <text>申请时间</text>
              <text>2022-08-31 12:56:12</text>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm" v-if="status==2||status==3">
              <text>审核人</text>
              <text>王晓刚</text>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm" v-if="status==1||status==2||status==3">
              <text>审核时间</text>
              <text>2022-08-31 12:56:12</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <u-popup :show="show" mode="bottom"  @close="close" @open="open" :closeable="true">
      <view>
        <view class="text-center text-lg padding">钱款去向详情</view>
        <view class="flex justify-between align-center text-xl text-red padding-lr-sm text-bold">
          <view>退款金额</view>
          <view>¥516.00</view>
        </view>
        <view class="flex justify-between align-center padding-lr-sm margin-top-sm">
          <view class="text-gray">退回账号</view>
          <view>(微信账号:54542121)</view>
        </view>

        <view v-for="(item,index) in expressInfo" :key="item.id" class="cu-timeline">
          <view class="cu-time">{{ item.date }}</view>
          <view :class="index==0?'text-blue':''" class="cu-item">
            <view class="cu-item ">
              <view :class="index==0?'text-black':'text-gray'" class="content  padding-sm"
                    style="background:#F7F7F7 ;">
                <text>{{ item.time }}</text>
                {{ item.content }}
              </view>
            </view>
          </view>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
import fxbStatusCard from "/src/components/fxb/fxb-status-card"
export default {
  name: "contractList",
  components:{
    fxbStatusCard
  },
  data(){
    return{
      show:false,
      status:1,
      statusArr: [
        "待审核",
        "未通过",
        "待支付",
        "已完成"
      ],
      expressInfo: [
        { time: "02:26", date: "今天", content: "【退款成功】已退款成功", id: "0" },
        { time: "02:26", date: "6.17", content: "【银行受理】银行已受理,钱款已成功退回到您的付款账户。", id: "1" },
        { time: "02:26", date: "6.17", content: "【卖家退款】商家退款已提交至银行处理，退款通常将原路退回，预计1~5个工作日到账。", id: "2" },
      ]
    }
  },
  onLoad(options){
    this.status = options.status;
  },
  props:{
    progress:{
      default:0,
      type:Number,
    },
    basicsList: {
      type:Array,
      default: () => {
        return [{
          cuIcon: 'profile',
          name: '商家同意'
        }, {
          cuIcon: 'taoxiaopu',
          name: '银行处理'
        }, {
          cuIcon: 'card',
          name: '退款成功'
        },  ]
      }
    },
  },
  methods:{
    toChange(){
      this.show = true
    },
    open() {
      // console.log('open');
    },
    close() {
      this.show = false
      // console.log('close');
    }
  }
}
</script>

<style lang="scss" scoped>
.colors{
  background-color: #DDECFF;
  color: #2680EB ;
}
.color{
  color: #F37B1D;
}
.adjustment{
  height: 70rpx;
  line-height: 70rpx;
  font-size: 32rpx;
}
</style>