<template>
    <view>
        <u-navbar :autoBack="true" title="返佣管理" rightText="申请返佣" @rightClick="rightClick"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`">
            <u-tabs  :scrollable="false" :list="tabList"  class="bg-white" lineColor="#f56c6c" lineWidth="50" @click=""></u-tabs>
            <view class="padding-sm bg-white">
                <u--input
                    border="false"
                    class="bg-gray"
                    placeholder="请输入合同编号，编号搜索"
                    prefixIcon="search"
                    prefixIconStyle="font-size: 22px;color: #909399"
                ></u--input>
            </view>
            <view v-for="item in infoList " :key="item.id" class="whiteBoxShadow margin-sm" @click="seeDetails(item.status)">
                <contractCard :id="item.id" :contentList="item.contentList" list name="东方国宾·尊致53°酒500ml酱香型合同代理商合同">
                    <view slot="footer" class="u-border-top padding-top">
                        <view>
                            <text class="text-red">{{ item.status === '0' ? "待申请" : item.status === '1' ? "待审核":item.status === '2' ? "进行中":item.status === '3' ?'未通过':'已完成' }}</text>
                            <text class="text-gray margin-lr-sm text-cut text-xs">签约时间：{{ item.signingTime }}</text>
                        </view>
                        <view class="w100 text-right">
                            <button class="cu-btn bg-white radius u-border">查看进度</button>
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
                { name: "全部" },
                { name: "待审核" },
                { name: "未通过" },
                { name: "进行中" },
                { name: "已完成" }],
            infoList: [
                {
                    name: "东方国宾·尊致53°酒500ml酱香型合同代理合...",
                    id: "21547789789",
                    payWay: "现结", contentList: [
                        { lable: "合同任务", value: "¥1000000.00" },
                        { lable: "完成进度", value: "未申请", color: "red" },
                        { lable: "任务奖励", value: "¥70000.00", color: "red" }
                    ],
                    signingTime: "2022-08-30 12:23:23",
                    status: "0"//
                },
                {
                    name: "东方国宾·尊致53°酒500ml酱香型合同代理合...",
                    id: "2131254774891789",
                    payWay: "现结", contentList: [
                        { lable: "合同任务", value: "¥1000000.00" },
                        { lable: "完成进度", value: "待审核", color: "red" },
                        { lable: "任务奖励", value: "¥70000.00", color: "red" }
                    ],
                    signingTime: "2022-08-30 12:23:23",
                    status: "1"//
                },
                {
                    name: "东方国宾·尊致53°酒500ml酱香型合同代理合...",
                    id: "21312547848789789",
                    payWay: "现结", contentList: [
                        { lable: "合同任务", value: "年销售额壹佰万元整(￥1000000.00)" },
                        { lable: "完成进度", value: "进行中", color: "red" },
                        { lable: "任务奖励", value: "¥70000.00", color: "red" }
                    ],
                    signingTime: "2022-08-30 12:23:23",
                    status: "2"//
                },
                {
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    id: "213125472848789789",
                    payWay: "现结", contentList: [
                        { lable: "合同任务", value: "年销售额壹佰万元整(￥1000000.00)" },
                        { lable: "完成进度", value: "未通过", color: "red" },
                        { lable: "任务奖励", value: "¥70000.00", color: "red" }
                    ],
                    signingTime: "2022-08-30 12:23:23",
                    status: "3"//
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
                    status: "4"//
                }
            ]
        };
    },
    methods:{
        seeDetails(status) {
            let path = status === "0" ? "pages/admin/returnCommissionAgent/applyCommission"
                : status === "1" ? "pages/admin/returnCommissionAgent/detailsNoCheck"
                    : status === "2" ? "pages/admin/returnCommissionAgent/detailsIn" :
                        status === "3" ? "pages/admin/returnCommissionAgent/detailsNoPass" :"pages/admin/returnCommissionAgent/detailsFinish";
            uni.navigateTo({
                url: path
            });
        },
        rightClick(){
            uni.navigateTo({
                url:"/pages/admin/returnCommissionAgent/selectContract"
            })
        }
    }
};
</script>

<style scoped>

</style>