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
                    placeholder="请输入合同编号，编号搜索"
                    prefixIcon="search"
                    prefixIconStyle="font-size: 22px;color: #909399"
                ></u--input>
            </view>
            <view v-for="item in infoList " :key="item.id" class="whiteBoxShadow margin-sm"
                  @click="seeDetails(item.status)">
                <contractCard :id="item.id" :contentList="item.contentList" list name="东方国宾·尊致酒53°瓶装500ml" pay-way="现结">
                    <view slot="footer" class="u-border-top padding-top">
                        <view>
                            <text class="text-red">
                                {{ item.status === "0" ? "待申请" : item.status === "1" ? "待审核" : item.status === "2" ? "进行中" : item.status === "3" ? "未通过" : "已完成"
                                }}
                            </text>
                            <text class="text-gray margin-lr-sm text-cut text-xs">签约时间：{{ item.signingTime }}</text>
                        </view>
                        <view class="text-right">
                            <button class="cu-btn bg-white u-border radius">查看进度</button>
                        </view>
                    </view>
                </contractCard>
            </view>
        </view>
    </view>
</template>

<script>
import contractCard from "/src/pages/admin/components/contractCard";

export default {
    name: "returnAdmin",
    components: {
        contractCard
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
                    payWay: "现结",
                    contentList: [
                        { lable: "合同任务", value: "¥1000000.00" },
                        { lable: "完成进度", value: "已完成" },
                        { lable: "任务奖励", value: "¥70000.00", color: "red" },
                    ],
                    signingTime: "2022-08-30 12:23:23",
                    status: "1"//
                },
                {
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    id: "12654665",
                    payWay: "现结",
                    contentList: [
                        { lable: "合同任务", value: "¥1000000.00" },
                        { lable: "完成进度", value: "已完成" },
                        { lable: "任务奖励", value: "¥70000.00", color: "red" },
                    ],
                    signingTime: "2022-08-30 12:23:23",
                    status: "2"//
                },
                {
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    id: "21312547789789",
                    payWay: "现结",
                    contentList: [
                        { lable: "合同任务", value: "¥1000000.00" },
                        { lable: "完成进度", value: "已完成" },
                        { lable: "任务奖励", value: "¥70000.00", color: "red" },
                    ],
                    signingTime: "2022-08-30 12:23:23",
                    status: "3"//
                },
                {
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    id: "213125471789789",
                    payWay: "现结",
                    contentList: [
                        { lable: "合同任务", value: "¥1000000.00" },
                        { lable: "完成进度", value: "已完成" },
                        { lable: "任务奖励", value: "¥70000.00", color: "red" },
                    ],
                    signingTime: "2022-08-30 12:23:23",
                    status: "4"//
                }
            ]
        };
    },
    methods: {
        seeDetails(status) {
            let path = status === "0" ? "/pages/admin/returnCommissionService/forAgent/payForReturnCommission"
                : status === "1" ? "/pages/admin/returnCommissionService/forAgent/detailsNoCheck"
                    : status === "2" ? "/pages/admin/returnCommissionService/forAgent/detailsIn" :
                        status === "3" ? "/pages/admin/returnCommissionService/forAgent/detailsNoPass" : "pages/admin/returnCommissionService/forAgent/detailsFinish";

            uni.navigateTo({
                url: path
            });
        }
    }
};
</script>

<style scoped>

</style>