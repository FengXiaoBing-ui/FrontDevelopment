<template>
    <view>
        <u-navbar :autoBack="true" title="确认返佣"></u-navbar>
        <view :style="`margin-top:${(CustomBar+10)*2}rpx`">
            <view class="margin-sm whiteBoxShadow">
                <boxTitle title="返佣明细"></boxTitle>
                <view v-for="(item,index) in (status==0?applyInfo0:status==1?applyInfo1:applyInfo2)" :key="index"
                      class="flex margin-tb-sm justify-between align-center">
                    <view class="text-gray">{{ item.label }}</view>
                    <view>{{ item.value }}</view>
                </view>
                <view class="padding-top margin-top u-border-top flex align-center justify-between">
                    <view class="text-bold"> 返佣合计</view>
                    <view class="text-red">{{ count }}</view>
                </view>
            </view>
            <view v-if="status==='0'" class="whiteBoxShadow margin-sm flex align-center justify-between">
                <view class="text-gray"> 开具发票</view>
                <view>增值税发票
                    <text class="cuIcon-right margin-left-sm"></text>
                </view>
            </view>
            <view  v-if="status==='0'" class="margin-sm whiteBoxShadow">
                <boxTitle title="选择支付方式"></boxTitle>
                <paySelect :data-list="dataList"></paySelect>
            </view>
        </view>
        <!--     现金   支付-->
        <view v-if="status==='0'" class="foot bg-white padding-sm flex justify-between align-center">
            <view class="margin-lr">
                <text>合计：</text>
                <text class="text-red">￥70000.00</text>
            </view>
            <view class="cu-btn flex-sub radius">取消支付</view>
            <view class="cu-btn flex-sub bg-red radius margin-left-sm">确认支付</view>
        </view>
        <!--    返货    提交备货-->
        <view  v-if="status==='1'" class="foot bg-white padding-sm">
            <view class="cu-btn bg-red radius w100">提交备货</view>
        </view>
        <!--     积分   确认提交-->
        <view v-if="status==='2'" class="foot bg-white padding-sm ">
            <view class="cu-btn bg-red radius w100">确认提交</view>
        </view>
    </view>
</template>

<script>
import contractCard from "/src/pages/admin/components/contractCard";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import paySelect from "/src/components/fxb-pay-select/paySelect";

export default {
    name: "returnAdmin",
    components: {
        contractCard, boxTitle, paySelect
    },
    onLoad(option) {
        this.status = option.status;
    },
    computed: {
        count() {
            return this.status == 1 ? "480瓶(价值¥70000.00)" : this.status == 0 ? "¥2030.00" : "7000000积分(价值¥70000.00)";
        }
    },
    data() {
        return {
            status: "0",//012  现金物品积分
            dataList: [
                {
                    logo: require("/src/static/weixin.png"),
                    radioName: "微信支付"
                },
                {
                    logo: require("/src/static/zhifubao.png"),
                    radioName: "支付宝支付"
                },
                {
                    logo: require("/src/static/yinhangka.png"),
                    radioName: "银行转账"
                }],
            applyInfo0: [
                { label: "返佣方式", value: "现金" },
                { label: "返佣金额", value: "￥5445.00" }
            ],
            applyInfo1: [
                { label: "返佣方式", value: "商品" },
                { label: "返佣金额", value: "80件(480瓶)" },
                { label: "合计金额", value: "48778.00" }
            ],
            applyInfo2: [
                { label: "返佣方式", value: "积分" },
                { label: "返佣积分", value: "7000000积分" }
            ]


        };
    }
};
</script>

<style lang="scss" scoped>
.foot {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>