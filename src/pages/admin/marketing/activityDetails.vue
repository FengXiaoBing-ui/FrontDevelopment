<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="活动详情" :autoBack="true"></u-navbar>
        <view class=" " :style="'margin-top:'+ CustomBar + 'px;padding-bottom:130rpx'">
<!--            <view class="whiteBoxShadow">-->
<!--                <view class="flex justify-between  ">-->
<!--                    <view class="text-gray">状态</view>-->
<!--                    <view class="text-red">-->
<!--                        {{ status == 1 ? "待审核" : status == 2 ? "未通过" : status == 3 ? "待支付" : status == 4 ? "进行中" : "已结束"-->
<!--                        }}-->
<!--                    </view>-->
<!--                </view>-->
<!--                <view v-if="status==2">-->
<!--                    <view class="flex justify-between margin-top">-->
<!--                        <view class="text-gray">未通过原因</view>-->
<!--                        <view class="text-black">这是未通过原因，这是未通过</view>-->
<!--                    </view>-->
<!--                    <view class="flex justify-between margin-top">-->
<!--                        <view class="text-gray">审核时间</view>-->
<!--                        <view class="text-gray">2022-08-30 12:23:12</view>-->
<!--                    </view>-->
<!--                </view>-->
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
            <view class="whiteBoxShadow margin-top-sm" style="transform: translateY(-20px)">
              <boxTitle title="活动信息"></boxTitle>
                <fxbImage mode="aspectFill" class="w100 margin-tb-sm" height="300"
                          src="/productDetails/Slice%201.png"></fxbImage>
                <view class="flex justify-between">
                    <view class="text-gray">活动名称：</view>
                    <text>飞飞天茅台52°推广</text>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">单价：</view>
                    <text class="text-red">￥300.00/天</text>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">活动时长:</view>
                    <text>30日</text>
                </view>
                <view class="flex justify-between margin-top-sm" v-if="status==4||status==5">
                    <view class="text-gray">起止日期:</view>
                    <text>2022-08-30 至 2022-09-30</text>
                </view>
                <view class="flex justify-between margin-top-sm u-border-top padding-top-sm">
                    <view class="text-gray text-lg">费用合计:</view>
                    <text class="text-red">￥3000.00</text>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="活动商品"></boxTitle>
                <twoGoodsInfoCard
                    goods-name="飞天茅台53°瓶装酱香型 500ml"
                    goods-type="酱香型"
                    goodsDegrees="49"
                    goodsVolume="500"
                    img-url="/productDetails/Slice%201.png"
                    retail-price="389"
                    name-price="代理价："
                >
                </twoGoodsInfoCard>
                <twoGoodsInfoCard
                    goods-name="飞天茅台53°瓶装酱香型 500ml"
                    goods-type="酱香型"
                    goodsDegrees="49"
                    goodsVolume="500"
                    img-url="/productDetails/Slice%201.png"
                    retail-price="389"
                    name-price="代理价："
                >
                </twoGoodsInfoCard>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="发布区域"></boxTitle>
                <view class="text-bold text-gray">贵州省 贵阳市
                    <text class="cuIcon-triangledownfill"></text>
                </view>
                <agencyPolicy :positionArr="positionArr"></agencyPolicy>
            </view>

            <!--            保证金-->
            <view class="whiteBoxShadow text-center margin-top-sm ">
                <boxTitle title="保证金"></boxTitle>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-grey">保证金</view>
                    <view class="text-black">￥1999.00</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-grey">是否缴纳</view>
                    <view class="text-black">需缴纳保证金</view>
                </view>
            </view>
            <!--代理价格-->
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="代理价格"></boxTitle>
                <text class="text-bold">东方国宾·尊致500ml瓶装</text>
                <fxbTable class="margin-top" :td-list="tdList" attribute="类别" attribute-value="单价/瓶"></fxbTable>
            </view>
            <!--代理政策-->
            <view class="whiteBoxShadow margin-top-sm">
                <fxbAgent></fxbAgent>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="申请信息"></boxTitle>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">订单单号</view>
                    <view class="text-black">15654646123132</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">申请单位</view>
                    <view class="text-black">贵州好酒选科技有限公司</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">申请人</view>
                    <view class="text-black">张刚</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">提交时间</view>
                    <view class="text-black">2022-08-30 12:15:15</view>
                </view>
            </view>
        </view>
        <view class="botPayBtn flex  align-center padding-tb-sm padding-right" v-if="status==3">
            <view class="flex-twice text-center">合计：
                <text class="text-red">￥999.00</text>
            </view>
            <button class="flex-sub cu-btn bg-gray">取消支付</button>
            <button @click="gotoPayment" class="flex-sub margin-left cu-btn bg-red">去支付</button>
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
import fxbAgent from "/src/components/fxb/fxb-agent";
import fxbTable from "/src/components/fxb/fxb-table";
import fxbImage from "/src/components/fxb/fxb-image";
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
    name: "activityDetails",
    components: {
        fxbAgent,
        fxbTable,
        boxTitle,
        twoGoodsInfoCard,
        agencyPolicy,
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
            },
            back: [
                { name: "完成合同任务量", number: "3600瓶" },
                { name: "", number: "600件" },
                { name: "完成合同任务金额", number: "￥155400.00" },
                { name: "", number: "拾伍万伍仟肆佰元整" },
                { name: "返佣方式", number: "商品" },
                { name: "返佣商品数量", number: "600瓶" },
                { name: "返佣商品金额合计", number: "￥155400.00" },
                { name: "", number: "拾伍万伍仟肆佰元整" }
            ],
            order: [
                { name: "可购买数量", number: "2瓶" },
                { name: "保证金", number: "￥275.00/瓶" }
            ],
            agentList: {
                agencyContract: {},
                agentLevels: {},
                agentsProvinces: [],
                goodsPriceDto: {},
                settlementMethod: {},
                rakeBack: []
            },
            positionArr: [
                {
                    cityAgent: [
                        ["贵州省", "1", "1", "0"],
                        ["广东省", "1", "1", "0"]
                    ]
                }
            ],
            tdList: [
                {
                    name: "建议零售价",
                    price: "￥365.00"
                },
                {
                    name: "商超指导价",
                    price: "￥300.00~￥365.00"
                },
                {
                    name: "企业团购价",
                    price: "￥290.00"
                },
                {
                    name: "代理价",
                    price: "￥275.00"
                }
            ]
        };
    },
    onLoad(options) {
        this.status = options.status;
    },
    methods: {
        ...mapMutations('index',['setPayResultType']),
        seek(){
            this.$refs.popup.open();
        },
        gotoPayment() {
            this.setPayResultType('releasePopularize')
            uni.redirectTo({
              url:"/pages/admin/marketing/payment"
            })
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
    bottom: 0;
    left: 0;
    width: 100%;
}

.botPayBtn {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: white;
    z-index: 1;
    box-shadow: 4px 4px 14px #cccccc;
}
</style>
