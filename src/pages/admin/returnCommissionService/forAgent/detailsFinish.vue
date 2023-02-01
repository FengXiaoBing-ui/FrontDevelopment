<template>
    <view>
        <u-navbar :autoBack="true" title="返佣详情"></u-navbar>
        <view :style="`margin-top:${(CustomBar+10)*2}rpx`">
            <view class="whiteBoxShadow flex justify-between align-center margin-lr-sm">
                <view class="text-gray">状态</view>
                <view class="text-red">已完成</view>
            </view>
            <view class="margin-sm whiteBoxShadow">
                <boxTitle right-text="已签收" title="进度"></boxTitle>
                <view v-for="(item,index) in progressInfo" :key="index"
                      class="flex margin-tb-sm justify-between align-center"
                >
                    <view class="text-gray">{{ item.label }}</view>
                    <view class="flex align-center">{{ item.value }}
                        <copyButton v-if="item.label==='物流单号'" :value="item.value" class="margin-left"></copyButton>
                    </view>
                </view>
                <view class="w100 text-right">
                    <view class=" cu-btn">查看物流</view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-sm">
                <boxTitle title="合同任务"></boxTitle>
                <view class="margin-tb">
                    <contractCard
                        :id="info.id"
                        :contentList="info.contentList"
                        :name="info.name"
                        :pay-way="info.payWay"
                        list>
                    </contractCard>
                </view>
            </view>
            <view class="whiteBoxShadow margin-sm">
                <boxTitle title="发货商品"></boxTitle>
                <view class="margin-tb">
                    <goodsInfoCard agent-price="365"
                                   goods-name="飞天茅台53°瓶装酱香型 500ml"
                                   goods-type="酱香型"
                                   goodsDegrees="49"
                                   goodsVolume="500"
                                   img-url="/productDetails/Slice%201.png"
                                   retail-price="389"
                    ></goodsInfoCard>
                    <view class="text-right w100">
                        <text class="text-gray">发货数量：</text>
                        <text>240瓶</text>
                    </view>
                    <goodsInfoCard agent-price="365"
                                   goods-name="飞天茅台53°瓶装酱香型 500ml"
                                   goods-type="酱香型"
                                   goodsDegrees="49"
                                   goodsVolume="500"
                                   img-url="/productDetails/Slice%201.png"
                                   retail-price="389"
                    ></goodsInfoCard>
                    <view class="text-right w100">
                        <text class="text-gray">发货数量：</text>
                        <text>240瓶</text>
                    </view>
                </view>
            </view>
            <view class="margin-sm whiteBoxShadow">
                <view v-for="(item,index) in countInfo" :key="index"
                      class="flex margin-tb-sm justify-between align-center">
                    <view class="text-gray">{{ item.label }}</view>
                    <view>{{ item.value }}</view>
                </view>
                <view class="padding-top u-border-top flex  align-center justify-between">
                    <view class="text-bold">合计费用</view>
                    <view class="text-red">￥147454.00</view>
                </view>
            </view>
            <view class="margin-sm whiteBoxShadow">
                <boxTitle title="申请详情"></boxTitle>
                <view v-for="(item,index) in applyInfo" :key="index"
                      class="flex margin-tb-sm justify-between align-center">
                    <view class="text-gray">{{ item.label }}</view>
                    <view>{{ item.value }}</view>
                </view>
            </view>

            <view class="padding"></view>
        </view>
    </view>
</template>

<script>
import contractCard from "/src/pages/admin/components/contractCard";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import copyButton from "/src/components/common/copyButton";
import goodsInfoCard from "/src/components/erp/goodsInfoCard";

export default {
    name: "returnAdmin",
    components: {
        contractCard, boxTitle, copyButton, goodsInfoCard
    },
    data() {
        return {
            countInfo: [
                { label: "数量合计", value: "240瓶" },
                { label: "金额合计", value: "¥145550.00" },
                { label: "物流运费", value: "¥0.00" }
            ],
            applyInfo: [
                { label: "返佣方式", value: "返佣商品(480瓶)" },
                { label: "申请人", value: "王晓刚(王晓刚烟酒小卖部)" },
                { label: "申请时间", value: "2022-08-30 12:26:56" },
                { label: "审核人", value: "王丽" },
                { label: "审核时间", value: "2022-08-30 12:26:56" }
            ],
            progressInfo: [
                { label: "返佣内容", value: "商品80件(480瓶)" },
                { label: "返佣时间", value: "2022年6月21日 17:56:24" },
                { label: "物流状态", value: "已到货" },
                { label: "物流单号", value: "4587487887878" },
                { label: "联系物流", value: "李林莉 1854586487" },
                { label: "发货时间", value: "2022-08-30 12:26:56" },
                { label: "物流公司", value: "德邦物流" }
            ],
            info: {
                name: "东方国宾·尊致酒53°瓶装500ml",
                id: "21547789789",
                payWay: "现结",
                contentList: [
                    { lable: "合同任务", value: "300件(1800瓶)" },
                    { lable: "合同金额", value: "￥1223213.00", color: "red" },
                    { lable: "完成进度", value: "已完成" },
                    { lable: "返佣奖励", value: "商品100件(600瓶)", color: "red" }
                ],
                signingTime: "2022-08-30 12:23:23",
                status: "0"//
            }
        };
    }
};
</script>

<style lang="scss" scoped>
</style>