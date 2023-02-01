<template>
    <view>
        <!--顶部标题-->
        <u-navbar title="退款/售后" :autoBack="true" placeholder class="text-bold"></u-navbar>
        <view v-for="(item,index) in msgList" :key="index" class="margin-top padding-lr-sm">
            <view class="bg-white padding">
                <view class="flex justify-between">
                    <view class="text-bold" style="font-size: 18px">{{ item.distributor }}</view>
                    <view class="flex align-center">
                        <text class="lg text-red cuIcon-refund margin-right-xs"
                              style="font-size: 20px"></text>
                        <text :class="item.status===1?'text-red':'text-gray'">
                            {{ item.status | statusFilter }}
                        </text>
                    </view>
                </view>
                <view class="flex margin-top">
                    <view class="cu-avatar radius"
                          style="width: 80px;height: 80px"
                          :style="`background-image:url(${item.avatar});`">
                    </view>
                    <view class="flex flex-direction justify-between padding">
                        <view class="text-bold">{{ item.title }}</view>
                        <view class="text-gray">退款:￥ {{ item.money }}</view>
                    </view>
                </view>
                <view class="bg-gray margin-tb padding radius">
                    <text class="text-bold margin-right">{{transStatus(item.status)}}</text>
                    <text>
                        {{tips(item.status)}}
                    </text>
                </view>
<!--                <view v-else-if="item.status===2" class="bg-gray margin-tb padding">-->
<!--                    <text class="text-black text-bold margin-right">退款成功</text>-->
<!--                    <text>退款成功</text>-->
<!--                    <text>￥{{ item.money }}</text>-->
<!--                </view>-->
                <view class="flex justify-end">
                    <view v-if="item.status===1||item.status===4||item.status===5||item.status===8||item.status===9||item.status===12" class="cu-btn line-gray margin-right round">修改申请</view>
                    <view>
                        <view v-if="item.status===1||item.status===4||item.status===5||item.status===8||item.status===9||item.status===12" class="cu-btn line-gray margin-right round">撤销申请</view>
                        <view class="cu-btn line-orange round">查看详情</view>
                    </view>
                </view>
            </view>
        </view>

    </view>
</template>

<script>
export default {
    data() {
        return {
            msgList: [
                {
                    distributor: "中意酱酒",
                    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
                    title: "标题标题标题",
                    money: "99.00",
                    status: 1
                },
                {
                    distributor: "中意酱酒",
                    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg",
                    title: "标题标题标题",
                    money: "99.00",
                    status: 2
                },
                {
                    distributor: "中意酱酒",
                    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
                    title: "标题标题标题",
                    money: "99.00",
                    status: 3
                },
                {
                    distributor: "中意酱酒",
                    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
                    title: "标题标题标题",
                    money: "99.00",
                    status: 4
                },
                {
                    distributor: "中意酱酒",
                    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
                    title: "标题标题标题",
                    money: "99.00",
                    status: 5
                },
                {
                    distributor: "中意酱酒",
                    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
                    title: "标题标题标题",
                    money: "99.00",
                    status: 6
                },
                {
                    distributor: "中意酱酒",
                    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
                    title: "标题标题标题",
                    money: "99.00",
                    status: 7
                },
                {
                    distributor: "中意酱酒",
                    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
                    title: "标题标题标题",
                    money: "99.00",
                    status: 8
                },
                {
                    distributor: "中意酱酒",
                    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
                    title: "标题标题标题",
                    money: "99.00",
                    status: 9
                },
                {
                    distributor: "中意酱酒",
                    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
                    title: "标题标题标题",
                    money: "99.00",
                    status: 10
                },
                {
                    distributor: "中意酱酒",
                    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
                    title: "标题标题标题",
                    money: "99.00",
                    status: 11
                },
                {
                    distributor: "中意酱酒",
                    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
                    title: "标题标题标题",
                    money: "99.00",
                    status: 12
                }
            ]
        };
    },
    filters: {
        statusFilter(val) {
            if (val === 1) return "退款中";
            if (val === 2) return "退款成功";
            if (val === 3||val === 4) return "退款";//5、退款商家已拒绝
            if (val === 5 )return "退货中";
            if (val === 6 )return "退货成功";
            if (val === 7 ||val === 8)return "退货";//9、退货商家已拒绝
            if (val === 9 )return "换货中";
            if (val === 10 )return "换货成功";
            if (val === 11||val === 12 )return "换货";//换货商家已拒绝

        }
    },
    methods:{
        transStatus(status) {
            const tempArr = ["待商家处理", "退款成功", "退款关闭", "商家已拒绝",
                "待商家处理", "退货成功", "退货关闭", "商家已拒绝",
                "待商家处理", "换货成功", "换货关闭", "商家已拒绝",];
            return tempArr[status - 1];
        },
        tips(status) {
            const tempArr = ["商家将在1天23时59秒处理", "退款成功￥99.00", "退款已关闭", "这是原因这是原因",
                "商家将在1天23时59秒处理", "退货成功￥99.00", "退货已关闭", "这是原因这是原因",
                "商家将在1天23时59秒处理", "换货成功￥99.00", "换货已关闭", "这是原因这是原因",];
            return tempArr[status - 1];
        },
    }
};
</script>

<style scoped>

</style>
