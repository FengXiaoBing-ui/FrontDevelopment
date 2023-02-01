<template>
<view class="content">
    <!--顶部标题-->
    <u-navbar :border="false" :fixed="true" :autoBack="true"
              :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
              :safeAreaInsetTop="false">
        <view slot="left" class="u-nav-slot">
            <text style="font-size: 36rpx" class="cuIcon-back"></text>
        </view>
        <view slot="center" class="u-nav-slot">
            <view class="text-lg">选择合同</view>
            <view style="width:750rpx" class="search bg-white">
                <view class="bg-white padding-lr">
                    <view class="flex align-center margin-tb-sm bg-gray" style="border-radius: 4px">
                        <text class="cuIcon-search text-red"
                              style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
                        <input
                            class="text-df w75"
                            type="text"
                            placeholder-class="text-gray"
                            placeholder="请输入政策、商品名称进行名搜索"
                            confirm-type="search"
                        />
                    </view>
                </view>
            </view>
        </view>
    </u-navbar>
    <view class="wrap">
        <view class="contentBox" :style="'top:'+((CustomBar+41)*2)+'rpx'">
            <!--商品列表-->
            <view v-for="item in infoList " :key="item.id" class="whiteBoxShadow margin-sm" @click="seeDetails(item.status)">
                <contractCard :id="item.id" :contentList="item.contentList" list name="东方国宾·尊致53°酒500ml酱香型合同代理商合同"></contractCard>
            </view>
        </view>
    </view>
</view>
</template>

<script>
import contractCard from "/src/pages/admin/components/contractCard";

export default {
    name: "selectContract",
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
    }
};
</script>

<style lang="scss" scoped>
.search {
    position: fixed;
    width: 100%;
    top: var(--CustomBar-1) !important;
    left: 0;
}
.textBorderLeft{
    width:8rpx;
    height: 30rpx;
    background: #E54D42;
    border-radius: 8rpx;
    transform: translateX(-26rpx);
}

/deep/ .u-navbar {
    .u-navbar__content {
        height: var(--CustomBar) !important;
        padding-top: var(--StatusBar);
        border-bottom: 0;

        .u-navbar__content__left,
        .u-navbar__content__right {
            margin-top: var(--StatusBar);
        }
    }
}

.contentBox {
    position: relative;
    top: 0;
    padding-bottom: 40rpx;
}
</style>