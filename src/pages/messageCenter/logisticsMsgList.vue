<template>
    <view>
        <u-navbar title="物流消息" :autoBack="true" placeholder></u-navbar>
        <u-sticky bgColor="#fff">
            <u-tabs class="nav-tab" :list="tabList"
                    lineColor="#f56c6c"
                    lineWidth="50"
                    itemStyle="height:44px;width:50%;"
                    :activeStyle="activeStyle"
                    @click="click"></u-tabs>
        </u-sticky>
        <view class="padding-lr">
            <view v-for="(item,index) in currentList" :key="index"
                  class="bg-white margin-tb padding shadow"
                  style="border-radius: 10px">
                <view class="flex justify-between align-center padding-bottom solid-bottom">
                    <view class="flex align-center">
                        <view class="cu-avatar round"
                              :style="`background-image:url(${item.avatar});`">
                        </view>
                        <view class="margin-left">{{ item.distributor }}</view>
                    </view>
                    <view class="lg text-gray cuIcon-right"></view>
                </view>
                <view>
                    <view class="flex justify-between margin-tb">
                        <text class="text-bold" style="font-size: 18px">{{ item.status|statusFilter }}</text>
                        <text class="text-gray">{{ item.time }}</text>
                    </view>
                    <view class="flex">
                        <view class="cu-avatar radius"
                              style="width: 100px;height: 100px"
                              :style="`background-image:url(${item.productImg});`">
                        </view>
                        <view class="padding text-gray flex flex-direction justify-between">
                            <view>{{ item.title }}</view>
                            <view>点击查看详情>></view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "logisticsMsgList",
    data() {
        return {
            tabList: [{ name: "收货物流" }, { name: "发货物流" }],
            activeStyle: {
                color: "#303133",
                fontWeight: "bold",
                transform: "scale(1.05)"
            },
            currentList: [],
            msgList1: [
                {
                    distributor: "中意酱酒",
                    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
                    productImg: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
                    title: "标题标题标题",
                    time: "星期一",
                    status: 1
                },
                {
                    distributor: "中意酱酒",
                    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
                    productImg: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
                    title: "标题标题标题",
                    time: "22/08/18",
                    status: 2
                }
            ],
            msgList2: [
                {
                    distributor: "张三",
                    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg",
                    productImg: "https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg",
                    title: "标题标题标题",
                    time: "星期一",
                    status: 3
                },
                {
                    distributor: "李四",
                    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg",
                    productImg: "https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg",
                    title: "标题标题标题",
                    time: "22/08/18",
                    status: 4
                }
            ]
        };
    },
    onLoad() {
        this.currentList = this.msgList1;
    },
    filters: {
        statusFilter(val) {
            if (val === 1) return "你的包裹已发货";
            if (val === 2) return "你的订单已签收";
            if (val === 3) return "已发货";
            if (val === 4) return "待处理订单";
        }
    },
    methods: {
        click(item) {
            this.currentList = item.index ? this.msgList2 : this.msgList1;
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
