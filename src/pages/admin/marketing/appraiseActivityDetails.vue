<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="申请详情" :autoBack="true"></u-navbar>
        <view class="" :style="'margin-top:'+ CustomBar + 'px;'+(status==3?'padding-bottom:150rpx':'padding-bottom:20rpx')">
<!--            <view class="whiteBoxShadow">-->
<!--                <view class="flex justify-between  ">-->
<!--                    <view class="text-gray">状态</view>-->
<!--                    <view class="text-red">-->
<!--                        {{ status == 1 ? "待审核" : status == 2 ? "未通过" : status == 3 ? "待支付" : status == 4 ? "待开始" : "已结束"-->
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
            <fxbStatusCard :status="localStatus.status" :tips="localStatus.tips"
                           :icon="localStatus.icon"></fxbStatusCard>
            <view v-if="status==4||status==5||status==6" class="whiteBoxShadow margin-bottom-sm"   style="transform: translateY(-20rpx)">
                <boxTitle title="数据统计" right-text="查看报名" @change="enroll"
                          right-class="cu-btn bg-red radius sm"></boxTitle>
                <view>
                    <view class="flex align-center justify-between">
                        <view>活动实时统计</view>
                        <view>活动实时统计</view>
                        <view @click="seek">实时/
                            <text class="text-gray">昨日</text>
                            <text class="cuIcon-triangledownfill"></text>
                        </view>
                    </view>
                    <view class="flex flex-wrap justify-between">
                        <view v-for="item in 4" :key="item" style="width: 48%"
                              class="bg-gray padding-sm radius margin-top-sm">
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
            <view class="whiteBoxShadow " :style="status==3?'transform: translateY(-35rpx)':'transform: translateY(-20rpx)'">
                <boxTitle title="品鉴会推广"></boxTitle>
                <fxbImage mode="aspectFill" class="w100 margin-tb-sm" height="300"
                          src="/productDetails/Slice%201.png"></fxbImage>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">单价</view>
                    <view>
                        <text class="text-red">￥300.00</text>
                        /日
                    </view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">推广时长</view>
                    <text>1周</text>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">开始时间</view>
                    <text>2022-08-30 12:00:00</text>
                </view>
                <view class="flex justify-between margin-top-sm u-border-top padding-top-sm">
                    <view class="text-lg">费用合计</view>
                    <text class="text-red">￥3000.00</text>
                </view>
            </view>
            <view class="whiteBoxShadow ">
                <boxTitle title="优惠券"></boxTitle>
                <view class="flex justify-between align-center">
                    <view class="text-gray">优惠券金额</view>
                    <view>¥50.00</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">优惠券数量</view>
                    <view>50张</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">有效期限</view>
                    <view>2022-08-30 12:00:00前</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">使用规则</view>
                </view>
                <view>
                    <view class="padding-sm bg-red light radius flex justify-between margin-top-sm">
                        <view class="basis-xs">规则一</view>
                        <view class="basis-xl">签到：15:00~15:30嘉宾签到。</view>
                    </view>
                    <view class="padding-sm bg-red light radius flex justify-between margin-top-sm">
                        <view class="basis-xs">规则二</view>
                        <view class="basis-xl">进场分组：2-3人一组，方便交流、互动、PK。</view>
                    </view>
                    <view class="padding-sm bg-red light radius flex justify-between margin-top-sm">
                        <view class="basis-xs">规则三</view>
                        <view class="basis-xl">开场：破冰游戏；</view>
                    </view>
                    <view class="padding-sm bg-red light radius flex justify-between margin-top-sm">
                        <view class="basis-xs">规则四</view>
                        <view class="basis-xl">现场产品讲解+现场有奖问答互动（奖两名）；</view>
                    </view>
                    <view class="padding-sm bg-red light radius flex justify-between margin-top-sm">
                        <view class="basis-xs">规则五</view>
                        <view class="basis-xl">观看产品视频+现场有奖问答互动（奖一名）；</view>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="品鉴会信息"></boxTitle>
                <view class="flex justify-between align-center">
                    <view class="text-gray">品鉴会名称</view>
                    <view>2022观山湖区白酒品鉴会</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">举办地址</view>
                    <view>贵州省贵阳市观山湖区黔灵山路</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">详细地址</view>
                    <view>德福中心A3栋6楼10号</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">酒店名称</view>
                    <view>世纪金源大酒店</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">报名金额</view>
                    <view class="text-red">￥256.00</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">参会人数</view>
                    <view>200人</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">举办日期</view>
                    <view>2022-08-10 15:30~17:30</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">举办流程</view>
                </view>
                <view>
                    <view class="padding-sm bg-red light radius flex justify-between margin-top-sm">
                        <view class="basis-xs">流程一</view>
                        <view class="basis-xl">签到：15:00~15:30嘉宾签到。</view>
                    </view>
                    <view class="padding-sm bg-red light radius flex justify-between margin-top-sm">
                        <view class="basis-xs">流程二</view>
                        <view class="basis-xl">进场分组：2-3人一组，方便交流、互动、PK。</view>
                    </view>
                    <view class="padding-sm bg-red light radius flex justify-between margin-top-sm">
                        <view class="basis-xs">流程三</view>
                        <view class="basis-xl">开场：破冰游戏；</view>
                    </view>
                    <view class="padding-sm bg-red light radius flex justify-between margin-top-sm">
                        <view class="basis-xs">流程四</view>
                        <view class="basis-xl">现场产品讲解+现场有奖问答互动（奖两名）；</view>
                    </view>
                    <view class="padding-sm bg-red light radius flex justify-between margin-top-sm">
                        <view class="basis-xs">流程五</view>
                        <view class="basis-xl">观看产品视频+现场有奖问答互动（奖一名）；</view>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="申请信息"></boxTitle>
                <view class="flex justify-between align-center">
                    <view class="text-gray">申请编号</view>
                    <view class="flex align-center">
                        <text>1564654612</text>
                        <button class="cu-btn margin-left-xs sm bg-orange light radius">查看详情</button>
                    </view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">申请时间</view>
                    <view>2022-08-30 12:23:56</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray">申请人</view>
                    <view>张三</view>
                </view>
            </view>
            <view v-if="status==3" class="fixed padding bg-white flex justify-between align-center w100">
                <view class="flex-twice">合计：
                    <text class="text-red">￥518.00</text>
                </view>
                <button class="flex-sub cu-btn bg-gray radius margin-right-sm">取消支付</button>
                <button @click="gotoPay" class="flex-sub cu-btn bg-red radius">去支付</button>
            </view>
        </view>
        <uni-popup ref="popup" type="bottom">
            <view class="w100 padding-sm bg-white">
                <view class="grid col-3 padding-bottom">
                    <view></view>
                    <view class="text-center text-bold text-lg">选择时段</view>
                    <view @click="$refs.popup.close()" style="font-size: 38rpx"
                          class="text-right cuIcon-close text-bold"></view>
                </view>
                <scroll-view scroll-y style="height: 500rpx;">
                    <u-radio-group v-model="activeName" @change="groupChange" iconPlacement="right" placement="column">
                        <view v-for="(item,index) in seekList" :key="index+'a'" class="flex flex-direction w100">
                            <view :class="activeName===item.name?'bg-red':''"
                                  class="w100 padding-sm light radius flex justify-between align-center margin-top-sm">
                                <view>
                                    <view @click="seek" class="text-black">实时/
                                        <text class="text-gray">昨日</text>
                                    </view>
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
import fxbImage from "/src/components/fxb/fxb-image";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import { mapMutations } from "vuex";
import fxbStatusCard from "/src/components/fxb/fxb-status-card"
export default {
    name: "appraiseActivityDetails",
    computed: {
        localStatus() {
            const tempArr = ["待审核", "未通过","待支付",  "待开始", "进行中", "已结束"];
            const tipsArr = ["等待平台审核", "您的申请已驳回", "剩余时间：15小时23分钟",  "剩余时间：15小时23分钟", "剩余时间：15小时23分钟", "推广已结束"];
            const iconArr = ["daishenhe", "weitongguo", "daizhifu1",  "daikaishi","jinhangzhong", "a-zu699"];
            console.log(this.status);
            return {
                status: tempArr[this.status - 1],
                tips: tipsArr[this.status - 1],
                icon: iconArr[this.status - 1]
            };
        }
    },
    components: {
        fxbImage,
        boxTitle,
        fxbStatusCard
    },
    data() {
        return {
            status: 0,
            activeName: "今日实时/较昨日",
            seekList: [
                {
                    name: "今日实时/较昨日",
                    date: "11月9日 00:00~17:55"
                },
                {
                    name: "本月至今/月同比",
                    date: "2022年11月"
                },
                {
                    name: "本季至今/季同比",
                    date: "2022年08月~11月"
                },
                {
                    name: "本年至今/年同比",
                    date: "2022"
                }
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
        ...mapMutations("index", ["setPayResultType"]),
        seek() {
            this.$refs.popup.open();
        },
        groupChange(e) {
            console.log(e);
            this.activeName = e;
        },
        sureSelect() {
            this.$refs.popup.close();
        },
        enroll() {
            uni.navigateTo({
                url: "/pages/admin/marketing/enrollList?status=" + this.status
            });
        },
        gotoPay() {
            this.setPayResultType("releasePopularize");
            uni.redirectTo({
                // url: "pages/admin/adminContract/surePay"
                url: "/pages/admin/tastingMeeting/participatingTastingMeeting/payment?status=3"
            });

            // uni.redirectTo({
            //     url:"/pages/payResult/payResult?status=releasePopularize"
            // })
        }
    }
};
</script>

<style scoped>

</style>