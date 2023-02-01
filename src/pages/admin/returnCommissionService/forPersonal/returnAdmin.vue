<template>
    <view>
        <u-navbar :autoBack="true" title="返佣管理"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`">
            <u-tabs :list="tabList" :scrollable="false" class="bg-white" lineColor="#f56c6c" lineWidth="50"
                    @click="click"></u-tabs>
            <view class="padding-sm bg-white">
                <u--input
                    border="false"
                    class="bg-gray"
                    placeholder="请输入商品名称进行搜索"
                    prefixIcon="search"
                    prefixIconStyle="font-size: 22px;color: #909399"
                ></u--input>
            </view>
            <view v-for="item in infoList " :key="item.id" class="whiteBoxShadow margin-sm" @click="seeDetails(item.status)">
                <boxTitle title="返佣单号:156468545222" right-text-class="text-red" :right-text="item.status === '0' ? '待审核' : item.status === '1' ? '未通过' : item.status === '2'? '进行中' : '已完成'"></boxTitle>
                <goodsInfoCard agent-price="365"
                               goods-name="飞天茅台53°瓶装酱香型 500ml"
                               goods-type="酱香型"
                               goodsDegrees="49"
                               goodsVolume="500"
                               img-url="/productDetails/Slice%201.png"
                ></goodsInfoCard>
                <view class="padding-top flex justify-around align-center">
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
                <view class="padding-top u-border-top margin-top flex justify-between align-center">
                    <text class="text-gray">2022-08-30 至 2022-09-30</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import contractCard from "/src/pages/admin/components/contractCard";
import goodsInfoCard from "/src/components/erp/goodsInfoCard";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "returnAdmin",
    components: {
        contractCard,
        goodsInfoCard,
        boxTitle
    },
    data() {
        return {
            tabList: [
                { name: "待审核" },
                { name: "未通过" },
                { name: "进行中" },
                { name: "已完成" }],
            infoList: [
                {
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    id: "21547789789",
                    payWay: "现结", contentList: [
                        { lable: "合同任务", value: "年销售额壹佰万元整(￥1000000.00)" },
                        { lable: "完成进度", value: "未申请", color: "red" },
                        { lable: "任务奖励", value: "¥70000.00", color: "red" }
                    ],
                    signingTime: "2022-08-30 12:23:23",
                    status: "0"//
                },
                {
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    id: "2131254774891789",
                    payWay: "现结", contentList: [
                        { lable: "合同任务", value: "年销售额壹佰万元整(￥1000000.00)" },
                        { lable: "完成进度", value: "进行中", color: "red" },
                        { lable: "任务奖励", value: "¥70000.00", color: "red" }
                    ],
                    signingTime: "2022-08-30 12:23:23",
                    status: "1"//
                },
                {
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    id: "21312547848789789",
                    payWay: "现结", contentList: [
                        { lable: "合同任务", value: "年销售额壹佰万元整(￥1000000.00)" },
                        { lable: "完成进度", value: "未申请", color: "red" },
                        { lable: "任务奖励", value: "¥70000.00", color: "red" }
                    ],
                    signingTime: "2022-08-30 12:23:23",
                    status: "2"//
                },
                {
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    id: "2131217789789",
                    payWay: "现结", contentList: [
                        { lable: "合同任务", value: "年销售额壹佰万元整(￥1000000.00)" },
                        { lable: "完成进度", value: "已完成", color: "red" },
                        { lable: "任务奖励", value: "¥70000.00", color: "red" }
                    ],
                    signingTime: "2022-08-30 12:23:23",
                    status: "3"//
                }
            ]
        };
    },
    methods: {
        applyCommission() {
            uni.navigateTo({
                url: "pages/admin/returnCommissionPersonal/applyCommission"
            });
        },
        seeDetails(status) {
            let path = status === "0" ? "pages/admin/returnCommissionService/forPersonal/payForReturnCommission"
                : status === "1" ? "pages/admin/returnCommissionService/forPersonal/detailsNoPass"
                    : status === "2" ? "pages/admin/returnCommissionService/forPersonal/detailsIn_Finish" : "pages/admin/returnCommissionService/forPersonal/detailsNoCheck";
            uni.navigateTo({
                url: path
            });
        }
    }
};
</script>

<style scoped>

</style>