<template>
    <view>
        <boxTitle title="代理政策"></boxTitle>
        <view>
            <view class="text-bold">合同金额</view>
            <view class="flex justify-between margin-top-sm">
                <view class="text-gray">合同商品总量</view>
                <view class="flex flex-direction align-end">
                    <view>3600瓶</view>
                </view>
            </view>
            <view class="padding-sm margin-top-sm bg-red light radius u-border" style="border-color: rgba(229,77,66,0.5) !important;">
                <view v-for="item in 2" :key="item" :class="item === 2?'':'u-border-bottom'" class="flex justify-between align-center text-black padding-tb-sm" style="border-color: rgba(229,77,66,0.5) !important;">
                    <view>
                        <view>东方国宾·尊致500ml瓶装(红瓶)</view>
                        <view>2600瓶</view>
                    </view>
                    <view class="text-red">¥455500.00</view>
                </view>
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
                    <view>99瓶</view>
                </view>
            </view>
            <view class="padding-sm margin-top-sm bg-red light radius u-border" style="border-color: rgba(229,77,66,0.5) !important;">
                <view v-for="item in 2" :key="item" :class="item === 2?'':'u-border-bottom'" class="flex justify-between align-center text-black padding-tb-sm" style="border-color: rgba(229,77,66,0.5) !important;">
                    <view>
                        <view>东方国宾·尊致500ml瓶装(红瓶)</view>
                        <view>2600瓶</view>
                    </view>
                    <view class="text-red">¥455500.00</view>
                </view>
            </view>
            <view class="flex justify-between margin-top-sm">
                <view class="text-gray">首单进货金额</view>
                <view class="flex flex-direction align-end">
                    <view class="text-red">￥999.00</view>
                    <view style="font-style: oblique" class="text-gray">
                        {{ $util.convertCurrency(999) }}
                    </view>
                </view>
            </view>
            <view class="flex justify-between margin-top-sm">
                <view class="text-gray">首单随货支持(百分比)</view>
                <view>99%</view>
            </view>
            <view class="flex justify-between margin-top-sm">
                <view class="text-gray">支持商品数量</view>
                <view class="flex flex-direction align-end">
                    <view>99瓶</view>
                </view>
            </view>
            <view class="padding-sm margin-top-sm bg-red light radius u-border" style="border-color: rgba(229,77,66,0.5) !important;">
                <view v-for="item in 2" :key="item" :class="item === 2?'':'u-border-bottom'" class="flex justify-between align-center text-black padding-tb-sm" style="border-color: rgba(229,77,66,0.5) !important;">
                    <view>
                        <view>东方国宾·尊致500ml瓶装(红瓶)</view>
                        <view>2600瓶</view>
                    </view>
                    <view class="text-red">¥455500.00</view>
                </view>
            </view>
            <view class="flex justify-between margin-top-sm">
                <view class="text-gray">支持商品金额</view>
                <view class="flex flex-direction align-end">
                    <view class="text-red">￥99999.00</view>
                    <view style="font-style: oblique" class="text-gray">
                        {{ $util.convertCurrency(99999) }}
                    </view>
                </view>
            </view>
        </view>
        <view class="u-border-bottom margin-top"></view>
        <view>
            <view>
                <view class="text-bold margin-top">返佣奖励</view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">完成合同任务量</view>
                    <view class="flex flex-direction align-end">
                        <view>3600瓶</view>
                    </view>
                </view>
                <view class="padding-sm margin-top-sm bg-red light radius u-border" style="border-color: rgba(229,77,66,0.5) !important;">
                    <view v-for="item in 2" :key="item" :class="item === 2?'':'u-border-bottom'" class="flex justify-between align-center text-black padding-tb-sm" style="border-color: rgba(229,77,66,0.5) !important;">
                        <view>
                            <view>东方国宾·尊致500ml瓶装(红瓶)</view>
                            <view>2600瓶</view>
                        </view>
                        <view class="text-red">¥455500.00</view>
                    </view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">完成合同任务总额</view>
                    <view class="flex flex-direction align-end">
                        <view class="text-red">¥932600.00</view>
                        <view style="font-style: oblique" class="text-gray">
                            {{ $util.convertCurrency(932600) }}
                        </view>
                    </view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">返佣方式</view>
                    <view>商品</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">返佣商品数量</view>
                    <view class="flex flex-direction align-end">
                        <view>600瓶</view>
                    </view>
                </view>
                <view class="padding-sm margin-top-sm bg-red light radius u-border" style="border-color: rgba(229,77,66,0.5) !important;">
                    <view v-for="item in 2" :key="item" :class="item === 2?'':'u-border-bottom'" class="flex justify-between align-center text-black padding-tb-sm" style="border-color: rgba(229,77,66,0.5) !important;">
                        <view>
                            <view>东方国宾·尊致500ml瓶装(红瓶)</view>
                            <view>2600瓶</view>
                        </view>
                        <view class="text-red">¥455500.00</view>
                    </view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">返佣商品金额合计</view>
                    <view class="flex flex-direction align-end">
                        <view class="text-red">¥31080.00</view>
                        <view style="font-style: oblique" class="text-gray">
                            {{ $util.convertCurrency(31080) }}
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="u-border-bottom margin-top"></view>
        <view>
            <view class="text-bold margin-top">品鉴会支持</view>
            <view class="flex justify-between margin-top-sm">
                <view class="text-gray">单场支持金额</view>
                <view>
                    <text class="text-red">￥999.00</text>
                    /瓶
                </view>
            </view>
            <view class="flex justify-between margin-top-sm">
                <view class="text-gray">单场支持酒水</view>
                <view>99瓶/场</view>
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
                    <view class="text-red">￥999.00</view>
                    <view style="font-style: oblique" class="text-gray">
                        {{ $util.convertCurrency(999) }}
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
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "fxb-agent",
    components:{
        boxTitle
    },
    data(){
        return{
            agentList:{
                settlementMethod:{
                    effectiveCondition:[]
                }
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
        }
    }
};
</script>

<style scoped>

</style>