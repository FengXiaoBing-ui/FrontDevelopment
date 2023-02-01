<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="轮播图详情" :autoBack="true"></u-navbar>
        <view class=" " :style="'margin-top:'+ CustomBar + 'px;padding-bottom:120rpx'">
<!--            <view class="whiteBoxShadow">-->
<!--                <view class="flex justify-between  ">-->
<!--                    <view class="text-gray">状态</view>-->
<!--                    <view class="text-red">-->
<!--                        {{ status == 1 ? "待审核" : status == 2 ? "未通过" : status == 3 ? "待支付" : status == 4 ? "进行中" : "已结束"-->
<!--                        }}-->
<!--                    </view>-->
<!--                </view>-->
<!--                <view class="flex justify-between margin-top-xs" v-if="status==4">-->
<!--                    <text class="text-gray">剩余时间</text>-->
<!--                    <text class="margin-left-xl text-red">(剩余22日12时)</text>-->
<!--                </view>-->
<!--                <view class="flex justify-between margin-top-xs" v-if="status==2">-->
<!--                    <view class="text-gray flex justify-between" style="width: 100%">未通过原因-->
<!--                        <text class="margin-left-xl text-black">这是未通过原因，这是未通过</text>-->
<!--                    </view>-->
<!--                </view>-->
<!--                <view class="flex justify-between margin-top-xs" v-if="status==2">-->
<!--                    <view class="text-gray flex justify-between" style="width: 100%">审核时间-->
<!--                        <text class="margin-left-xl">2022-08-30 12:23:12</text>-->
<!--                    </view>-->
<!--                </view>-->
<!--            </view>-->
          <view class=" ">
            <view class="flex  ">
              <fxb-status-card :status="localStatus.status" :tips="localStatus.tips" :icon="localStatus.icon"></fxb-status-card>
            </view>
          </view>
          <view class="whiteBoxShadow margin-bottom-xl" v-if="status==2" style="transform: translateY(-10px)">
            <view class="text-red">目前轮播图排名已满</view>
          </view>

            <view v-if="status==4||status==5" class="whiteBoxShadow margin-top-sm" style="transform: translateY(-20px)">
                <boxTitle title="数据统计"></boxTitle>
                <view>
                    <view class="flex align-center justify-between">
                        <view>活动实时统计</view>
                        <view @click="seek">实时/<text class="text-gray">昨日</text><text class="cuIcon-triangledownfill"></text></view>
                    </view>
                    <view class="flex flex-wrap justify-between">
                        <view v-for="item in 4" :key="item" style="width: 48%" class="bg-gray padding-sm radius margin-top-sm">
                            <view class="flex align-center justify-between text-gray">
                                <text>浏览量</text>
                                <text>较昨日</text>
                            </view>
                            <view class="text-lg text-black text-bold margin-tb">265</view>
                            <view class="flex align-center justify-between text-gray">
                                <text>156瓶</text>
                                <text class="text-blue">⬇10%</text>
                            </view>
                        </view>
                    </view>
                    <qiun-data-charts
                        :chartData="chartData"
                        :opts="opts"
                        type="line"
                    />
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm" style="transform: translateY(-20px)">
                <boxTitle title="轮播图信息"></boxTitle>
                <fxbImage class="margin-tb-sm" style="width: 100%" mode="aspectFill" height="300" src="/productDetails/Slice%201.png"></fxbImage>
                <view class="flex justify-between  ">
                    <view class="text-gray">轮播名称：</view>
                    <text>飞飞天茅台52°推广</text>
                </view>
                <view class="flex justify-between  margin-top-sm">
                    <view class="text-gray">轮播类型：</view>
                    <text>产品推广</text>
                </view>
                <view class="flex justify-between  margin-top-sm">
                    <view class="text-gray">轮播时限：</view>
                    <text>2022-08-30 至 2022-09-30</text>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">轮播链接:</view>
                    <view class="flex align-center">
                        <text class="margin-right-lg">53°飞天茅台</text>
                        <view class="cuIcon-right" style="font-size: 36rpx"></view>
                    </view>
                </view>
                <view class="flex justify-between  margin-top-sm">
                    <view class="text-gray">轮播时长:</view>
                    <text>30日</text>
                </view>
                <view class="flex justify-between margin-top-sm padding-top-sm u-border-top">
                    <view class="text-gray text-lg">费用合计:</view>
                    <text class="text-red">￥3000.00</text>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="申请信息"></boxTitle>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">订单单号</view>
                    <text>15654646123132</text>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">申请单位</view>
                    <text>贵州好酒选科技有限公司</text>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">申请人</view>
                    <text>王晓丫</text>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">提交时间</view>
                    <text>2022-08-31 12:56:12</text>
                </view>
                <view v-if="status!=1&&status!=2" class="flex justify-between margin-top-sm">
                    <view class="text-gray">审核时间</view>
                    <text>2022-08-31 12:56:12</text>
                </view>
                <view v-if="status!=1&&status!=2&&status!=3" class="flex justify-between margin-top-sm">
                    <view class="text-gray">付款金额</view>
                    <text>￥3000.00</text>
                </view>
                <view v-if="status!=1&&status!=2&&status!=3" class="flex justify-between margin-top-sm">
                    <view class="text-gray">付款时间</view>
                    <text>2022-08-31 12:56:12</text>
                </view>
            </view>
            <view v-if="status==2||status==3||status==5" class="padding-xs bg-white botBtn flex align-center">
                <template v-if="status==2">
                    <button class="cu-btn bg-gray flex-sub">删除轮播</button>
                    <button @click="" class="cu-btn bg-red flex-sub margin-left-sm">修改</button>
                </template>
                <template v-if="status==3">
                    <view class="flex flex-twice">合计：<text class="text-red">￥2100.00</text></view>
                    <button class="cu-btn bg-gray flex-sub">取消支付</button>
                    <button @click="gotoPayment" class="cu-btn bg-red flex-sub margin-left-sm">去支付</button>
                </template>
                <template v-if="status==5">
                    <button class="cu-btn bg-red flex-sub">重新发布</button>
                </template>
            </view>
        </view>
        <uni-popup ref="popup" type="bottom">
            <view class="w100 padding-sm bg-white">
                <view class="grid col-3 padding-bottom">
                    <view></view>
                    <view class="text-center text-bold text-lg">选择时段</view>
                    <view @click="$refs.popup.close()" style="font-size: 38rpx" class="text-right cuIcon-close text-bold"></view>
                </view>
                <scroll-view scroll-y style="height: 500rpx;">
                    <u-radio-group v-model="activeName" @change="groupChange" iconPlacement="right" placement="column">
                    <view v-for="(item,index) in seekList" :key="index+'a'" class="flex flex-direction w100">
                        <view :class="activeName===item.name?'bg-red':''" class="w100 padding-sm light radius flex justify-between align-center margin-top-sm">
                            <view>
                                <view @click="seek" class="text-black">实时/<text class="text-gray">昨日</text></view>
                                <view class="text-gray">11月9日 00:00~17:55</view>
                            </view>
                            <u-radio activeColor="red" :name="item.name"></u-radio>
                        </view>
                    </view>
                    </u-radio-group>
                </scroll-view>
                <view class="padding-tb">
                    <button @click="sureSelect" class="cu-btn bg-red radius w100">选择</button>
                </view>
            </view>
        </uni-popup>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import { mapMutations } from "vuex"
import fxbStatusCard from "../../../components/fxb/fxb-status-card";
export default {
  computed: {
    localStatus() {
      const tempArr = ["待审核", "未通过", "待支付", "进行中","已结束"];
      const tipsArr = ["等待平台审核","您的申请已驳回","剩余时间：15小时23分钟","剩余5天12小时23分钟","推广已结束"]
      const iconArr = ["daishenhe","weitongguo","daizhifu1","jinhangzhong","a-zu699"]
      return {
        status:tempArr[this.status-1],
        tips:tipsArr[this.status-1],
        icon:iconArr[this.status-1]
      }
    },
  },
    name: "bannerDetails",
    components:{
        boxTitle,
        fxbImage,
      fxbStatusCard
    },
    data() {
        return {
            status: 0,
            activeName:"今日实时/较昨日",
            seekList:[
                {
                    name:"今日实时/较昨日",
                    date:"11月9日 00:00~17:55"
                },
                {
                    name:"本月至今/月同比",
                    date:"2022年11月"
                },
                {
                    name:"本季至今/季同比",
                    date:"2022年08月~11月"
                },
                {
                    name:"本年至今/年同比",
                    date:"2022"
                },
            ],
            opts: {
                color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
                padding: [15, 0, 0, 0],
                legend: {},
                xAxis: {
                    disableGrid: true
                },
                yAxis: {
                    gridType: "dash",
                    dashLength: 2
                },
                extra: {
                    line: {
                        type: "curve",
                        width: 2
                    }
                }
            },
            chartData: {
                categories: ["1号", "5号", "10号", "15号", "20号", "25号"],
                series: [
                    {
                        name: "成交额/万元",
                        data: [35, 36, 31, 33, 13, 34]
                    },
                    {
                        name: "成交量/百瓶",
                        data: [18, 27, 21, 24, 6, 28]
                    },
                    {
                        name: "利润/万元",
                        data: [18, 27, 21, 24, 6, 28]
                    }
                ]
            }
        };
    },
    onLoad(options) {
        this.status = options.status;
    },
    methods: {
        ...mapMutations('index',['setPayResultType']),
        gotoPayment() {
            this.setPayResultType('bannerPopularize')
            uni.navigateTo({
                // url: "/pages/admin/adminContract/surePay"
              url:"/pages/admin/marketing/payment"
            });
        },
        seek(){
            this.$refs.popup.open();
        },
        groupChange(e){
            console.log(e);
            this.activeName = e
        },
        sureSelect(){
            this.$refs.popup.close()
        }
    }
};
</script>

<style lang="scss" scoped>
.botBtn {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
}

</style>