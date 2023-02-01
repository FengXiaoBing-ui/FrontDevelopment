<template>
    <view class="content">
        <!--顶部标题-->
        <u-navbar title="消息(10)" @rightClick="clearAll" :autoBack="true" placeholder rightText="全部已读"></u-navbar>
        <view class="bg-white padding-lr-lg padding-tb">
            <u-scroll-list @right="right" @left="left" indicatorActiveColor="#E54D42">
                <view class="scroll-list" style="flex-direction: row;">
                    <view
                        class="scroll-list__goods-item flex flex-direction align-center justify-center"
                        v-for="(item, index) in list"
                        :key="index"
                        :class="[(index === 9) && 'scroll-list__goods-item--no-margin-right']"
                        @click="gotoGroup(item.path)"
                    >
                        <image class="scroll-list__goods-item__image" :src="item.thumb"></image>
                        <text class="margin-top-xs">{{ item.title }}</text>
                    </view>
                </view>
            </u-scroll-list>
        </view>
        <!--消息列表-->
        <view class="margin-top-sm">
            <!--主消息-->
<!--            <view class="bg-white margin-lr-sm padding flex align-center" @click="gotoGroup">-->
<!--                <view class="bg-gray padding-tb padding-lr-xs text-center cu-avatar"-->
<!--                      style="width: 60px; height: 60px; border-radius: 20px">-->
<!--                    <view class="cu-tag badge">9</view>-->
<!--                    <view class="text-gray" style="font-size: 12px">产品图</view>-->
<!--                </view>-->
<!--                <view class="margin-left-sm" style="width: 480rpx">-->
<!--                    <view class="text-bold text-lg">飞天茅台酒代理</view>-->
<!--                    <view class="text-gray margin-top-xs">关于飞天茅台酒代理的讨论小组</view>-->
<!--                </view>-->
<!--                <view class="lg text-gray cuIcon-right" style="font-size: 20px"></view>-->
<!--            </view>-->
            <view v-for="(item,index) in msgList" :key="index"
                  class="bg-white margin-lr-sm padding flex align-center solid-bottom justify-between"
                  @click="gotoPath(item.title)">
<!--                <view class="padding-tb padding-lr-xs text-center cu-avatar"-->
<!--                      :class="[item.color,item.icon]"-->
<!--                      style="width: 60px; height: 60px; border-radius: 20px;font-size: 28px">-->
<!--                    <view v-if="item.msgNum!=0" class="cu-tag badge">{{ item.msgNum }}</view>-->
<!--                    <view class="text-gray" style="font-size: 12px"></view>-->
<!--                </view>-->
                <view>
                    <u-avatar :src="item.src"></u-avatar>
                </view>
                <view class="flex justify-between align-center">
                    <view class="margin-left-sm" style="width: 480rpx">
                        <view class="text-bold text-lg">{{ item.title }}</view>
                        <view class="text-gray margin-top-xs">{{ item.content }}</view>
                    </view>
                    <view :class="item.icon"  style="font-size: 20px;color: gray"></view>
                </view>
            </view>
        </view>
        <!--底部操作条-->
        <!--        <win-tab-bar class="margin-top-xl" />-->
    </view>
</template>

<script>
import winTabBar from "/src/components/win/win-tab-bar";

export default {
    name: "commodityList",
    components: {
        winTabBar
    },
    data() {
        return {
            list: [
                {
                    title: "发票信息",
                    thumb: require("/src/static/message/Group551@2x.png"),
                    path: "pages/messageCenter/invoiceMsgList"
                },
                {
                    title: "库存预警",
                    thumb: require("/src/static/message/Slice85@2x.png"),
                    path: "pages/messageCenter/stockWarningList"
                },
                {
                    title: "平台消息",
                    thumb: require("/src/static/message/Slice86@2x.png"),
                    path: "/pages/messageCenter/contractMsgList"
                },
                {
                    title: "合同信息",
                    thumb: require("/src/static/message/Slice87@2x.png"),
                    path: "/pages/messageCenter/contractMsgList"
                },
                {
                    title: "退款通知",
                    thumb: require("/src/static/message/Slice88@2x.png"),
                    path: "/pages/messageCenter/refundMsgList"
                },
                {
                    title: "物流信息",
                    thumb: require("/src/static/message/Slice89@2x.png"),
                    path: "pages/messageCenter/logisticsMsgList"
                },
                {
                    title: "调拨信息",
                    thumb: require("/src/static/message/Slice90@2x.png"),
                    path: "pages/messageCenter/allocationMsgList"
                }
            ],
            msgList: [
                {
                    src: 'https://cdn.uviewui.com/uview/album/1.jpg',
                    title: "飞天茅台酒代理",
                    content: "好的，感谢您对我们平台的支持和...",
                    icon: "cuIcon-right",
                    msgNum: 2,
                    path: "pages/messageCenter/customerServiceList"
                },
                {
                    src: 'https://cdn.uviewui.com/uview/album/1.jpg',
                    title: "核对样品订单信息",
                    content: "好的，感谢您对我们平台的支持和...",
                    icon: "cuIcon-right",
                    msgNum: 2,
                    path: "pages/messageCenter/customerServiceList"
                },
                {
                    src: 'https://cdn.uviewui.com/uview/album/1.jpg',
                    title: "发送商品",
                    content: "好的，感谢您对我们平台的支持和...",
                    icon: "cuIcon-right",
                    msgNum: 2,
                    path: "pages/messageCenter/customerServiceList"
                },
                {
                    src: 'https://cdn.uviewui.com/uview/album/1.jpg',
                    title: "官方客服",
                    content: "好的，感谢您对我们平台的支持和...",
                    icon: "cuIcon-right",
                    msgNum: 2,
                    path: "pages/messageCenter/customerServiceList"
                },
                // {
                //     color: "bg-orange",
                //     icon: "cuIcon-orderOne",
                //     title: "发票消息",
                //     content: "暂无消息",
                //     rightText: "",
                //     msgNum: 0,
                //     path: "pages/messageCenter/invoiceMsgList"
                // },
                // {
                //     color: "bg-pink",
                //     icon: "cuIcon-camera",
                //     title: "库存预警",
                //     content: "你有两条消息",
                //     rightText: "",
                //     msgNum: 0,
                //     path: "pages/messageCenter/stockWarningList"
                // },
                // {
                //     color: "bg-olive",
                //     icon: "cuIcon-deliver",
                //     title: "合同消息",
                //     content: "你有两条消息",
                //     rightText: "",
                //     msgNum: 0,
                //     path: "pages/messageCenter/contractMsgList"
                // },
                // {
                //     color: "bg-green",
                //     icon: "cuIcon-evaluate",
                //     title: "退款通知",
                //     content: "暂无消息",
                //     rightText: "",
                //     msgNum: 0,
                //     path: "pages/messageCenter/refundMsgList"
                // },
                // {
                //     color: "bg-cyan",
                //     icon: "cuIcon-pay",
                //     title: "物流消息",
                //     content: "暂无消息",
                //     rightText: "",
                //     msgNum: 0,
                //     path: "pages/messageCenter/logisticsMsgList"
                // },
                // {
                //     color: "bg-blue",
                //     icon: "cuIcon-shop",
                //     title: "调拨消息",
                //     content: "暂无消息",
                //     rightText: "",
                //     msgNum: 0,
                //     path: "pages/messageCenter/allocationMsgList"
                // },
                // {
                //     color: "bg-purple",
                //     icon: "cuIcon-ticket",
                //     title: "平台系统消息通知",
                //     content: "暂无消息",
                //     rightText: "",
                //     msgNum: 0,
                //     path: "pages/messageCenter/systemMsgList"
                // }
            ]
        };
    },
    onLoad(option) {
    },
    methods: {
        left() {
            console.log("left");
        },
        right() {
            console.log("right");
        },
        clearAll() {
            console.log("全部已读");
        },
        gotoGroup(path) {
            uni.navigateTo({ url:path });
        },
        gotoPath(title) {
            uni.navigateTo({
                url:"/pages/messageCenter/discussionGroup?title="+title
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.scroll-list {
    @include flex(column);

    &__goods-item {
      width: 22vw;
        &__image {
            width: 60px;
            height: 60px;
            border-radius: 4px;
        }

        &__text {
            color: #f56c6c;
            text-align: center;
            font-size: 12px;
            margin-top: 5px;
        }
    }

    &__show-more {
        background-color: #fff0f0;
        border-radius: 3px;
        padding: 3px 6px;
        @include flex(column);
        align-items: center;

        &__text {
            font-size: 12px;
            width: 12px;
            color: #f56c6c;
            line-height: 16px;
        }
    }
}
</style>
