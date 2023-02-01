<template>
    <view>
        <u-navbar :autoBack="true" title="返佣详情"></u-navbar>
        <view :style="`margin-top:${(CustomBar+10)*2}rpx`">
          <view class="whiteBoxShadow  margin-lr-sm flex align-center justify-between">
            <view class="text-gray">状态</view>
            <view class="text-red">已完成</view>
          </view>
<!--          <view class="whiteBoxShadow margin-lr-sm">-->
<!--            <boxtitle title="进度查询"></boxtitle>-->
<!--            <view class="flex justify-between">-->
<!--            <view class="text-red">返佣金额</view>-->
<!--              <view class="text-red">￥7000.00</view>-->
<!--            </view>-->
<!--            <view>2022年6月21日 17:56:24</view>-->
<!--          </view>-->
          <view class="whiteBoxShadow margin-lr-sm margin-top">
            <boxTitle title="进度查询"></boxTitle>
            <view class="flex justify-between">
            <view class="text-red">返佣查询</view>
            <view class="text-red">￥700.00</view>
            </view>
            <view class="margin-top-sm">2022年6月21日 17:43:24</view>
            <view class="cu-btn text-red">查看返佣进度</view>
          </view>
            <view class="whiteBoxShadow margin-sm" >
                <boxTitle right-text="查看订单记录" right-text-class="cu-btn xs" title="九月订单统计"></boxTitle>
                <goodsInfoCard agent-price="365"
                               goods-name="飞天茅台53°瓶装酱香型 500ml"
                               goods-type="酱香型"
                               goodsDegrees="49"
                               goodsVolume="500"
                               img-url="/productDetails/Slice%201.png"
                               retail-price="389"
                ></goodsInfoCard>
                <view class="padding-top u-border-top flex justify-around align-center">
                    <view class="w-third text-center">
                        <view class="text-bold text-cut">2489</view>
                        <view class="text-gray margin-top-sm">成交数量</view>
                    </view>
                    <view class="w-third text-center">
                        <view class="text-bold text-cut">154891.00</view>
                        <view class="text-gray margin-top-sm">金额总量</view>
                    </view>
                    <view class="w-third text-center">
                        <view class="text-bold text-cut">5489.00</view>
                        <view class="text-gray margin-top-sm">返佣金额</view>
                    </view>
                </view>
            </view>
            <view class="margin-sm whiteBoxShadow" >
                <boxTitle title="返佣金额"></boxTitle>
                <view v-for="(item,index) in backInfo" :key="index"
                      class="flex margin-top-sm justify-between align-center">
                    <view class="text-gray">{{ item.label }}</view>
                    <view>{{ item.value }}</view>
                </view>
            </view>
            <view class="margin-sm whiteBoxShadow" v-if="status==='2'">
                <boxTitle title="申请详情"></boxTitle>
                <view v-for="(item,index) in applyInfo" :key="index"
                      class="flex margin-tb-sm justify-between align-center">
                    <view class="text-gray">{{ item.label }}</view>
                    <view>{{ item.value }}</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import paySelect from "/src/components/fxb-pay-select/paySelect";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import goodsInfoCard from "/src/components/erp/goodsInfoCard";

export default {
    name: "returnAdmin",
    components: {
        boxTitle, goodsInfoCard, paySelect
    },
    data() {
        return {
            status: "1",
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
            backInfo: [
                { label: "返佣金额", value: "现金返佣(¥8490.00)" }],
            backDetails: [
                { label: "返佣方式", value: "现金" },
                { label: "返佣金额", value: "¥8490.00" }
            ],
            applyInfo: [
                { label: "合同任务", value: "现金返佣(¥200000.00)" },
                { label: "申请人", value: "王晓刚(王晓刚烟酒小卖部)" },
                { label: "申请时间", value: "2022-08-30 12:26:56" }
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