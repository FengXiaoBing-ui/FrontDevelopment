<template>
    <view>
        <u-navbar title="政策详情" rightText="修改" rightClick="" :autoBack="true"></u-navbar>
        <view class=" padding-tb" :style="`margin-top:${CustomBar}px`">
            <!--审核状态-->
<!--            <view class="whiteBoxShadow flex justify-between">-->
<!--                <view class="text-gray">审核状态</view>-->
<!--                <button class="cu-btn round text-orange line-orange">{{ agentList.isStatus == 0 ? "待审核" : "已审核" }}-->
<!--                </button>-->
<!--            </view>-->
            <fxbStatusCard :status="agentList.isStatus == 0?'待审核':'已审核'" tips="剩余23小时58分" icon="daishenhe"></fxbStatusCard>
            <view class="whiteBoxShadow" style="transform: translateY(-10rpx)">
                <view class="text-red text-lg text-bold">东方国宾·尊致代理政策(钻石)</view>
                <twoGoodsInfoCard
                    imgUrl="/productDetails/Slice%201.png"
                    goodsName="东方国宾53°瓶装酱香型 500ml"
                    goodsType="酱香型"
                    goodsVolume="500ml"
                    goodsDegrees="53°"
                    retailPrice="365.00"
                    namePrice="零售价："
                ></twoGoodsInfoCard>
                <fxbTable class="margin-top" :td-list="tdList" attribute="类别" attribute-value="单价/瓶"></fxbTable>
            </view>

            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="发布区域"></boxTitle>
                <view class="text-bold text-gray">贵州省 贵阳市
                    <text class="cuIcon-triangledownfill"></text>
                </view>
                <agencyPolicy :positionArr="agentList.agentsProvinces"></agencyPolicy>
            </view>

            <!--            保证金-->
            <view class="whiteBoxShadow text-center margin-top ">
                <boxTitle title="保证金"></boxTitle>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-grey">保证金</view>
                    <view class="text-black">{{ agentList.agencyContract.discountAmount }}</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-grey">是否缴纳</view>
                    <view class="text-black">{{ agentList.agentLevels.isDeposit == "是" ? "需缴纳保证金" : "不缴纳保证金" }}</view>
                </view>
            </view>
            <!--代理价格-->
<!--            <view class="whiteBoxShadow text-center margin-top  ">-->
<!--                <boxTitle title="代理价格"></boxTitle>-->
<!--                <fxbTable class="margin-top" :td-list="tdList" attribute="类别" attribute-value="单价/瓶"></fxbTable>-->
<!--            </view>-->
            <!--样品订单-->
            <view class="whiteBoxShadow margin-top">
                <boxTitle title="样品订单"></boxTitle>
                <view class="flex justify-between align-center margin-top" v-for="(item, index) in order"
                      :key="index+'b'">
                    <view class="text-grey">{{ item.name }}</view>
                    <view class="text-black">{{ item.number }}</view>
                </view>
            </view>
            <!--代理政策-->
            <view class="whiteBoxShadow  margin-top ">
                <view class="flex justify-between">
                    <boxTitle title="代理政策"></boxTitle>
                </view>
                <view>
                    <view class="text-bold">合同金额</view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">合同商品总量</view>
                        <view class="flex flex-direction align-end">
                            <view>{{ agentList.agencyContract.commodityQuantity }}瓶</view>
                            <view class="text-gray">60件</view>
                        </view>
                    </view>
                    <view class="flex flex-direction align-end">
                        <view>{{ agentList.agencyContract.commodityQuantity }}瓶</view>
                        <view class="text-gray">60件</view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">合同期限</view>
                        <view></view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">结算方式</view>
                        <view></view>
                    </view>
                </view>
                <view class="u-border-bottom margin-top"></view>
                <view>
                    <view class="text-bold margin-top">首单进货</view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">首单进货商品数量</view>
                        <view class="flex flex-direction align-end">
                            <view>{{ agentList.agencyContract.firstOrderNum }}瓶</view>
                            <view class="text-gray">60件</view>
                        </view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">首单进货金额</view>
                        <view class="flex flex-direction align-end">
                            <view class="text-red">￥{{ agentList.agencyContract.firstOrderPrice }}.00</view>
                            <view style="font-style: oblique" class="text-gray">
                                {{ convertCurrency(agentList.agencyContract.firstOrderPrice) }}
                            </view>
                        </view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">首单随货支持(百分比)</view>
                        <view>{{ agentList.agencyContract.shippedSupport }}%</view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">支持商品数量</view>
                        <view class="flex flex-direction align-end">
                            <view>{{ agentList.agencyContract.supportNum }}瓶</view>
                            <view class="text-gray">60件</view>
                        </view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">支持商品金额</view>
                        <view class="flex flex-direction align-end">
                            <view class="text-red">￥{{ agentList.agencyContract.firstOrderPrice }}.00</view>
                            <view style="font-style: oblique" class="text-gray">
                                {{ convertCurrency(agentList.agencyContract.firstOrderPrice) }}
                            </view>
                        </view>
                    </view>
                </view>
                <view class="u-border-bottom margin-top"></view>
                <view class="text-bold margin-top">返佣奖励</view>
                <view class="flex justify-between margin-top" v-for="(item,index) in back" :key="index+'e'">
                    <view class="text-gray">{{ item.name }}</view>
                    <view>{{ item.number }}</view>
                </view>
                <view class="u-border-bottom margin-top"></view>
                <view>
                    <view class="text-bold margin-top">品鉴会支持</view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">单场支持金额</view>
                        <view>
                            <text class="text-red">￥{{ agentList.agencyContract.singleSupportAmount }}</text>
                            /瓶
                        </view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">单场支持酒水</view>
                        <view>{{ agentList.agencyContract.singleSupportDrinks }}瓶/场</view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">单场支持统计(含酒水)</view>
                        <view></view>
                    </view>
                </view>
                <view class="u-border-bottom margin-top"></view>
                <view>
                    <view class="text-bold margin-top">保证金减免</view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">免保证金</view>
                        <view class="flex flex-direction align-end">
                            <view class="text-red">￥{{ agentList.agencyContract.firstOrderPrice }}.00</view>
                            <view style="font-style: oblique" class="text-gray">
                                {{ convertCurrency(agentList.agencyContract.firstOrderPrice) }}
                            </view>
                        </view>
                    </view>
                </view>
                <view class="u-border-bottom margin-top"></view>
                <view v-if="agentList.settlementMethod.effectiveCondition">
                    <view class="text-bold margin-top">合同生效条件</view>
                    <view class="text-right" v-if="!agentList.settlementMethod.effectiveCondition[0]">
                        <view class="text-red">不需支付首单进货款</view>
                        <view class="text-red">不需支付保证金</view>
                    </view>
                    <view class="text-right" v-else-if="agentList.settlementMethod.effectiveCondition.length===2">
                        <view class="text-gray">需支付首单进货款</view>
                        <view class="text-gray">需支付保证金</view>
                    </view>
                    <view class="text-right" v-else-if="agentList.settlementMethod.effectiveCondition.length===1">
                        <view v-if="agentList.settlementMethod.effectiveCondition[0]==='需支付首单进货款'">
                            <view class="text-gray">需支付首单进货款</view>
                            <view class="text-red">不需支付保证金</view>
                        </view>
                        <view v-else-if="agentList.settlementMethod.effectiveCondition[0]==='需支付保证金'">
                            <view class="text-red">不需支付首单进货款</view>
                            <view class="text-gray">需支付保证金</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import fxbStatusCard from "/src/components/fxb/fxb-status-card"
import agencyPolicy from "/src/components/erp/agencyPolicy";
import fxbTable from "/src/components/fxb/fxb-table";
import twoGoodsInfoCard from "../../../components/erp/twoGoodsInfoCard";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import convertCurrency from "/src/utils/dataFormat/convertCurrency";

export default {
    name: "policyDetails",
    components: {
        boxTitle,
        twoGoodsInfoCard,
        fxbTable,
        agencyPolicy,
        fxbStatusCard
    },
    data() {
        return {
            agentList: {
                agencyContract:{},
                agentLevels:{},
                agentsProvinces:[],
                goodsPriceDto:{},
                settlementMethod:{},
                rakeBack:[],
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
            ],
            sites: [
                { name: "首单进货", value: "120件(720瓶)", money: "200件(1200瓶)" },
                { name: "随货支持", value: "10%", money: "10%" },
                { name: "代理价", value: "275.00", money: "10%" },
                { name: "折扣优惠", value: "8.5折", money: "7折" },
                { name: "折扣后价格", value: "255.00", money: "245.00" }
            ],
            price: [
                { name: "建议零售价", num: "365.00" },
                { name: "商超指导价", num: "300.00~￥365.00" },
                { name: "企业团购价", num: "290.00" },
                { name: "代理价", num: "275.00" }
            ],
            policy: {
                policyPrice: [
                    { name: "首单进货", value: "120件(720瓶)", money: "200件（1200瓶）" },
                    { name: "随货支持", value: "10%", money: "10%" },
                    { name: "代理价", value: "￥275.00", money: "10%" },
                    { name: "折扣优惠", value: "8.5折", money: "7折" },
                    { name: "折扣后价格", value: "￥255.00", money: "245.00" }
                ],
                specialAgent: {
                    name: "首单进货",
                    value: "五十万元起(￥500000.00)"
                },

                appraisal: [// 品鉴会
                    { name: "支持场数", value: "50场" },
                    { name: "总价值", value: "100900元" },
                    { name: "品签酒", value: "2瓶/场" },
                    { name: "餐费报销", value: "1500/场" }
                ],
                taskGoal: "年任务量需达60万(￥600000.00)，未达标者取消代理资格",//任务达标
                taskReward: [
                    { name: "年任务量达", value: "一百万元(￥1000000.00)" },
                    { name: "随货奖励", value: "100件(价值155400元)" }
                ]
            },
            money: [
                { name: "保证金", price: "￥20000.00" },
                { name: "", price: "贰万元整" },
                { name: "是否缴纳", price: "需缴纳保证金" }
            ],
            order: [
                { name: "可购买数量", number: "2瓶" },
                { name: "保证金", number: "￥275.00/瓶" }
            ],
            RMB: [
                { name: "合同商品总量", number: "3600瓶" },
                { name: "", number: "600件" },
                { name: "合同商品总额", number: "￥932600.00" },
                { name: "", number: "玖拾叁万贰仟陆佰元整" },
                { name: "合同期限", number: "1年" },
                { name: "结算方式", number: "现结" }
            ],
            purchase: [
                { name: "首单进货商品数量", number: "3600瓶" },
                { name: "", number: "600件" },
                { name: "首单进货金额", number: "￥155400.00" },
                { name: "", number: "拾伍万伍仟肆佰元整" },
                { name: "首单随货支持(百分比)", number: "20%" },
                { name: "支持商品数量", number: "120瓶" },
                { name: "", number: "20件" },
                { name: "支持商品金额", number: "￥31080.00" },
                { name: "", number: "叁万壹仟零捌拾元" }
            ],
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
            bear: [
                { name: "单场支持金额", number: "￥1500.00/场" },
                { name: "单场支持酒水", number: "2瓶/场" },
                { name: "单场支持统计(含酒水)", number: "￥2018.00/场" }

            ],
            reduction: [
                { name: "免保证金", number: "￥155400.00" },
                { name: "", number: "拾伍万伍仟肆佰元整" }
            ],
            assert: [
                { name: "首付款", number: "需支付收单付款" },
                { name: "保证金", number: "需缴纳保证金" }
            ],
            area:[
                {local:"观山湖区",area:"代理区域",area1:"发布代理",area2:"已代理",area3:"剩余代理",
                    number1:"12",number2:"12",number3:"0",},
                {local:"南明区",area:"代理区域",area1:"发布代理",area2:"已代理",area3:"剩余代理",
                    number1:"12",number2:"12",number3:"0",}
            ]
        };
    },
    methods: {
        convertCurrency
    },
    onLoad(options) {
        let res = this.$http.getPolicyDetail(options.id);
        res.then(data => {
            this.agentList = data.data;
            this.tdList[0].price = "￥" + this.agentList.retailPrice;
            this.tdList[1].price = "￥" + this.agentList.minGuidePrice + "~￥" + this.agentList.maxGuidePrice;
            this.tdList[2].price = "￥" + this.agentList.enterpriseGroupPurchasePrice;
            this.tdList[3].price = "￥" + this.agentList.agencyPrice;
            console.log(this.agentList);
        });
    }
};
</script>

<style scoped lang="scss">
.bg-transparent {
    background-color: rgba(255, 0, 0, 0.2)
}

//待审核边框样式
.cheek {
    text-align: center;
    width: 20%;
    color: orange;
    font-weight: bold;
    border: 1px orange solid;
    border-radius: 20px;
}

.oneOrder:last-child {
    border-bottom: 1px gray solid;
}
</style>
