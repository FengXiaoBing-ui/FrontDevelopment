<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="品牌专区详情" :autoBack="true"></u-navbar>
        <view class=" " :style="'margin-top:'+ CustomBar + 'px;padding-bottom:100rpx'">
<!--            <view class="whiteBoxShadow">-->
<!--                <view class="flex align-center justify-between">-->
<!--                    <text class="text-gray">状态</text>-->
<!--                    <text class="text-red">-->
<!--                        {{ status == 1 ? "待审核" : status == 2 ? "未通过" : status == 3 ? "待支付" : status == 4 ? "进行中(剩余22日12时)" : "已结束"-->
<!--                        }}-->
<!--                    </text>-->
<!--                </view>-->
<!--                <template v-if="status==2">-->
<!--                    <view class="flex align-center justify-between margin-top-sm">-->
<!--                        <text class="text-gray">未通过原因</text>-->
<!--                        <text>这是未通过原因，这是未通过</text>-->
<!--                    </view>-->
<!--                    <view class="flex align-center justify-between margin-top-sm">-->
<!--                        <text class="text-gray">审核时间</text>-->
<!--                        <text>2022-08-30 12:23:12</text>-->
<!--                    </view>-->
<!--                </template>-->
<!--            </view>-->

          <view class=" ">
            <view class="flex  ">
              <fxb-status-card :status="localStatus.status" :tips="localStatus.tips" :icon="localStatus.icon"></fxb-status-card>
            </view>
          </view>
          <view class="whiteBoxShadow margin-bottom-xl" v-if="status==2" style="transform: translateY(-10px)">
            <view class="text-red">因为个人原因导致的无法退款</view>
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
            <!--品牌名称-->
            <view class="whiteBoxShadow margin-top-sm" style="transform: translateY(-20px)">
                <boxTitle title="品牌申请"></boxTitle>
                <view class="flex justify-between" :class="index==0?'':'margin-top-sm'"
                      v-for="(item,index) in (status==='5'?card2:status==='4'?card2:card)" :key="index">
                    <view class="text-gray">{{ item.title }}：</view>
                    <view>{{ item.content }}</view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="品牌商品"></boxTitle>
                <twoGoodsInfoCard goods-name="飞天茅台53°瓶装酱香型 500ml"
                                  goods-type="酱香型"
                                  goodsVolume="500ml"
                                  goodsDegrees="53°"
                                  img-url="/productDetails/Slice%201.png"
                                  retailPrice="365"
                                  namePrice="代理价"
                                  v-for="item in 2"
                                  :key="item"
                >
                </twoGoodsInfoCard>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="订单详情"></boxTitle>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">订单单号</view>
                    <view>15654646123132</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">申请人</view>
                    <view>王晓丫</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">提交时间</view>
                    <view>2022-08-31 12:56:12</view>
                </view>
                <view v-if="status==='2'">
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">审核时间</view>
                        <view>2022-08-31 12:56:12</view>
                    </view>
                </view>
                <view v-if="status==='3'">
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">审核时间</view>
                        <view>2022-08-31 12:56:12</view>
                    </view>
                </view>
                <view v-if="status==='4'">
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">审核时间</view>
                        <view>2022-08-31 12:56:12</view>
                    </view>
                </view>
            </view>
        </view>
        <view v-if="status==3||status==4||status==5" class="padding-xs bg-white botBtn flex">
            <template v-if="status==3">
                <button class="cu-btn bg-gray flex-sub">取消支付</button>
                <button @click="gotoPayment" class="cu-btn bg-red flex-sub margin-left-sm">立即支付</button>
            </template>
            <template v-if="status==4">
                <button class="cu-btn bg-red flex-sub">查看效果</button>
            </template>
            <template v-if="status==5">
                <button class="cu-btn bg-red flex-sub">重新发布</button>
            </template>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import twoGoodsInfoCard from "/src/components/erp/twoGoodsInfoCard";
import agencyPolicy from "/src/components/erp/agencyPolicy";
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
    name: "brandDetails",
    components: {
        boxTitle,
        twoGoodsInfoCard,
        agencyPolicy,
      fxbStatusCard
    },
    data() {
        return {
            status: "0",//0待审核，1未通过，2待支付，3进行中，4，已结束
            radioValue: [],
            bgColor: "",
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
            },
            tag: [
                {
                    title: "发布代理",
                    num: "46"
                },
                {
                    title: "已代理",
                    num: "22"
                },
                {
                    title: "剩余代理",
                    num: "22"
                }
            ],
            card: [
                {
                    title: "品牌名称",
                    content: "茅台专场"
                },{
                    title: "已选商品",
                    content: "2"
                },{
                    title: "单价",
                    content: "￥300.00/天/商品"
                }, {
                    title: "有效时长",
                    content: "30日"
                }, {
                    title: "费用合计",
                    content: "￥3000.00"
                }
            ],
            card2: [
                {
                    title: "品牌名称",
                    content: "飞天茅台52°推广"
                }, {
                    title: "有效时长",
                    content: "30日"
                }, {
                    title: "费用合计",
                    content: "￥3000.00"
                }, {
                    title: "起止时间",
                    content: "2022-08-30至2022-09-30"
                }
            ],
            last: [
                {
                    title: "提交时间",
                    content: "2022-08-31  12:56:12"
                }, {
                    title: "操作员",
                    content: "王晓丫"
                }
            ]
        };
    },
    onLoad(options) {
        this.status = options.status;
    },
    methods: {
        ...mapMutations('index',['setPayResultType']),
        gotoPayment() {
            this.setPayResultType('brandPopularize')
            uni.navigateTo({
                url: "/pages/admin/adminContract/surePay"
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
}
</style>