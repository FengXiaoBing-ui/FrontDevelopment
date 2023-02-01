<template>
    <view class="content">
        <!--        这是韦丽丹测试-->
        <u-navbar :border="false" :fixed="true" title="申请详情" :autoBack="true"></u-navbar>
        <view class="padding-tb" :style="'margin-top:'+ (CustomBar*2) + 'rpx;padding-bottom:150rpx'">
            <!-- 主内容-->
            <fxbStatusCard :status="localStatus.status" :tips="localStatus.tips" :icon="localStatus.icon"></fxbStatusCard>
            <!--品鉴会信息-->
            <view class="whiteBoxShadow margin-top-sm" style="transform: translateY(-20px)">
                <boxTitle title="品鉴会信息"></boxTitle>
                <view class="flex align-stretch justify-between margin-top-sm">
                    <view class="text-gray">品鉴会名称</view>
                    <view>2022观山湖区白酒品鉴会</view>
                </view>
                <view class="flex align-stretch justify-between margin-top-sm">
                    <view class="text-gray">举办地址</view>
                    <view>贵州省贵阳市观山湖黔灵山路</view>
                </view>
                <view class="flex align-stretch justify-between margin-top-sm">
                    <view class="text-gray">详细地址</view>
                    <view>世纪金源大酒店</view>
                </view>
                <view class="flex align-stretch justify-between margin-top-sm">
                    <view class="text-gray">报名名额</view>
                    <view class="text-red">￥256.00</view>
                </view>
                <view class="flex align-stretch justify-between margin-top-sm">
                    <view class="text-gray">参会人数</view>
                    <view>200人</view>
                </view>
                <view class="flex align-stretch justify-between margin-top-sm">
                    <view class="text-gray">举办日期</view>
                    <view>2022-08-31 12:30~17:30</view>
                </view>
                <!--举办流程-->
                <view class="margin-top-sm ">
                    <text class="text-gray">举办流程</text>
                    <view class="flex justify-start red-Bacground-Box radius padding-sm  margin-top-sm">
                        <view class="text-red text-bold basis-xs">流程一</view>
                        <view class="basis-xl">签到: 15:00~15:30嘉宾签到。</view>
                    </view>
                    <view class="flex justify-start red-Bacground-Box radius   padding-sm margin-top-sm">
                        <view class="text-red text-bold basis-xs">流程二</view>
                        <view class="basis-xl">进场分组：2-3人一组，方便交流、互 动、PK。</view>
                    </view>
                    <view class="flex justify-start red-Bacground-Box radius padding-sm margin-top-sm">
                        <view class="text-red text-bold basis-xs">流程三</view>
                        <view class="basis-xl">开场：破冰游戏；</view>
                    </view>
                    <view class="flex justify-start red-Bacground-Box radius padding-sm margin-top-sm">
                        <view class="text-red text-bold basis-xs">流程四</view>
                        <view class="basis-xl">现场产品讲解+现场有奖问答互动（奖两 名）；</view>
                    </view>
                    <view class="flex justify-start red-Bacground-Box radius padding-sm margin-top-sm">
                        <view class="text-red text-bold basis-xs">流程五</view>
                        <view class="basis-xl">观看产品视频+现场有奖问答互动（奖一 名）；</view>
                    </view>
                </view>
            </view>
            <!--服务商支持-->
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="服务商支持"></boxTitle>
                <view class="flex align-stretch justify-between margin-top-sm">
                    <view class="text-gray">是否需要服务商支持</view>
                    <view>是</view>
                </view>
                <view class="flex align-stretch justify-between margin-top-sm">
                    <view class="text-gray">支持人数</view>
                    <view>20人</view>
                </view>
                <view class="flex align-stretch justify-between margin-top-sm">
                    <view class="text-gray">备注信息</view>
                    <input type="text" placeholder="这是备注的信息" style="width: 100px;font-size: 14px">
                </view>
            </view>

            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="申请合同商品"></boxTitle>
                <view class="flex justify-between align-center">
                    <text class="text-bold">东方国宾·尊致酒500ml酱香型合同..</text>
<!--                    <text class="bg-gray light radius padding-xs">合同详情</text>-->
             <view class="bg-gray light radius padding-xs">合同详情</view>
                </view>
                <view class="flex justify-between text-sm margin-top-sm">
                    <view>
                        <view class="flex">结算方式：
                            <text>先款后货</text>
                        </view>
                        <view class="margin-top-sm">报销费用：
                            <text class="text-red">￥1500.00</text>
                            /场
                        </view>
                    </view>
                    <view>
                        <view class="flex">合同编号：
                            <text>155678458248525</text>
                        </view>
                        <view class="flex margin-top-sm">报销商品：
                            <text>2瓶/场</text>
                        </view>
                    </view>
                </view>
                <!--                <view class="flex justify-between padding-tb-xs">-->
                <!--                    <view class="text-gray flex-twice">结算方式：现结</view>-->
                <!--                    <view class="text-gray flex-treble">合同编号：213234233543</view>-->
                <!--                </view>-->
                <!--                <view class="flex justify-between">-->
                <!--                    <view class="flex-treble">-->
                <!--                        <text class="text-gray">报销费用：</text>-->
                <!--                        ￥1500.00/场-->
                <!--                    </view>-->
                <!--                    <view class="flex-twice">-->
                <!--                        <text class="text-gray">报销商品：</text>-->
                <!--                        ￥2瓶/场-->
                <!--                    </view>-->
                <!--                </view>-->
                <!--                <view class="flex justify-between padding-tb-xs align-center">-->
                <!--                    <view class="text-gray">费用合计:-->
                <!--                        <text class="text-red">￥2035.00</text>-->
                <!--                    </view>-->
                <!--                    <view>-->
                <!--                        <text class="text-gray">剩余场数：</text>-->
                <!--                        12场-->
                <!--                    </view>-->
                <!--                </view>-->
                <!--                <view v-for="item in 2" :key="item" class="flex align-stretch padding-tb margin-top-sm u-border-top">-->
                <!--                    <image style="height: 150rpx" mode="heightFix" class="flex-sub radius"-->
                <!--                           :src="$config.IMG_SERVER+'/productDetails/Slice%201.png'"></image>-->
                <!--                    <view class="margin-left-sm flex flex-direction justify-between flex-treble">-->
                <!--                        <view class="text-bold">飞天茅台53°瓶装酱香型 500ml</view>-->
                <!--                        <view class="flex justify-between">-->
                <!--                            <view class="text-gray">规格:500ml*6瓶/件</view>-->
                <!--                            <view class="text-gray">酱香型 | 53° | 瓶装</view>-->
                <!--                        </view>-->
                <!--                        <view class="flex justify-between">-->
                <!--                            <view class="text-gray">零售价:￥365.00</view>-->
                <!--                            <view class="text-gray">代理价:-->
                <!--                                <text class="text-red"><b>￥265.00</b></text>-->
                <!--                            </view>-->
                <!--                        </view>-->
                <!--                    </view>-->
                <!--                </view>-->
                <view class="u-border-bottom margin-tb"></view>
                <view v-for="item in 2"
                      :key="item">
                    <view class="flex align-start margin-top">
                        <fxbImage width="150" height="150" src="/productDetails/Slice%201.png"
                                  mode="aspectFill"></fxbImage>
                        <view class="margin-left-sm flex flex-treble flex-direction">
                            <view class="text-bold text-lg">东方国宾53°瓶装500ml</view>
                            <view class="text-sm flex align-center margin-top-sm">
                                <text class="text-gray"
                                      style="color: #F37B1D ;background-color:rgba(255,165,0,0.2)">
                                    香型:酱香型
                                </text>
                                <text class="text-gray margin-left-sm"
                                      style="color: #E54D42;background-color:rgba(255,0,0,0.2)">
                                    度数:53°
                                </text>
                                <text class="text-gray margin-left-sm"
                                      style="color: #0081FF;background-color:rgba(0,0,255,0.1)">
                                    容量:500ml
                                </text>
                            </view>
                            <view class="text-sm flex justify-between align-center margin-top-sm">
                                <view class="flex align-center">
                                    <text>代理价：</text>
                                    <view class="text-red">￥365.00</view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>

            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="申请费用"></boxTitle>
                <view class="flex align-stretch justify-between">
                    <view class="text-gray">商品数量</view>
                    <view>2瓶</view>
                </view>
                <view class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">商品金额</view>
                    <view>￥530.00</view>
                </view>
                <view class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">餐费金额</view>
                    <view>￥1500.00</view>
                </view>
                <view class="margin-tb u-border-top"></view>
                <view class="flex align-center justify-between">
                    <view><b>费用合计</b></view>
                    <view class="text-red">￥2030.00</view>
                </view>
            </view>

            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="申请信息"></boxTitle>
                <view class="flex align-center justify-between">
                    <view class="text-gray">申请编号</view>
                    <view>20220901001</view>
                </view>
                <view class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">申请企业</view>
                    <view>贵州东方国宾</view>
                </view>
                <view class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">申请人</view>
                    <view>张三</view>
                </view>
                <view class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">申请时间</view>
                    <view>2022-08-31 12:30</view>
                </view>
                <view v-if="!agentAndService" class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">审批人</view>
                    <view>张三</view>
                </view>
                <view v-if="(listStatus == 3||listStatus == 4||listStatus == 5)"
                      class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">审核时间</view>
                    <view>2022-08-31 12:30</view>
                </view>
                <view v-if="(listStatus == 4||listStatus == 5)"
                      class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">开始时间</view>
                    <view>2022-08-31 12:30</view>
                </view>
                <view v-if="listStatus == 5" class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">结束时间</view>
                    <view>2022-08-31 12:30</view>
                </view>
            </view>
        </view>
        <view v-if="!agentAndService&&listStatus == 1"
              class="fixed w100 bg-white padding flex align-center">
            <button @click="gotoPath('/pages/admin/contractDeliverGoods/toExamineFailed')"
                    class="cu-btn bg-gray radius flex-sub">驳回申请
            </button>
            <button @click="gotoPath('/pages/admin/tastingMeeting/payment')"
                    class="cu-btn bg-red radius flex-sub margin-left-sm">确认报销
            </button>
        </view>
    </view>
</template>

<script>
import fxbStatusCard from "/src/components/fxb/fxb-status-card"
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbImage from "/src/components/fxb/fxb-image";
import { mapState } from "vuex";

export default {
    name: "details",
    components: {
        boxTitle,
        fxbImage,
        fxbStatusCard
    },
    data() {
        return {
            status: 0,
            listStatus: 0,
        };
    },
    onLoad(option) {
        this.status = option.status;
        this.listStatus = option.listStatus;
    },
    computed: {
        ...mapState("index", ["agentAndService"]),//agentAndService：服务商和代理商的状态 0:服务商,1:代理商
        localStatus() {
            const tempArr = ["待审核", "未通过", "待开始","进行中", "已结束"];
            const tipsArr = ["剩余23小时58分", "已驳回您品鉴会申请", "剩余时间：15小时23分钟", "品鉴会正在进行中","品鉴会已结束"];
            const iconArr = ["daishenhe", "weitongguo", "daishouhuo", "jinhangzhong","a-zu699"];
            console.log(this.listStatus);
            return {
                status: tempArr[this.listStatus-1],
                tips: tipsArr[this.listStatus-1],
                icon: iconArr[this.listStatus-1]
            }
        }
    },
    methods: {
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.red-Bacground-Box {
    background-color: rgba(255, 0, 0, 0.05);
}

</style>