<template>
    <view>
        <!--顶部标题-->
        <u-navbar title="客服" :autoBack="true" placeholder></u-navbar>
        <view class="margin-top-xl">
            <view v-for="(item,index) in msgList" :key="index"
                  class="bg-white padding flex justify-between solid-bottom">
                <view class="cu-avatar round lg"
                      :style="`background-image:url(${item.avatar});`">
                </view>
                <view style="width: 66%">
                    <view class="text-bold" style="font-size: 18px">{{ item.title }}</view>
                    <view class="text-gray margin-top-xs">{{ item.content }}</view>
                </view>
                <view style="width: 15%">
                    <view class="text-gray">{{ item.time }}</view>
                    <view v-if="item.badgeNum" class="margin-top-xs cu-tag bg-red round margin-left"
                          style="padding: 0 9px; transform:scale(0.8)">
                        {{ item.badgeNum }}
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "customerServiceList",
    data() {
        return {
            msgList: [
                {
                    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
                    title: "飞天茅台代理",
                    content: "你这边的货已经全部给你发过来了",
                    time: "17:02",
                    badgeNum: 1
                },
                {
                    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg",
                    title: "飞天茅台代理",
                    content: "你这边的货已经全部给你发过来了",
                    time: "昨天",
                    badgeNum: 0
                },
                {
                    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg",
                    title: "飞天茅台代理",
                    content: "你这边的货已经全部给你发过来了",
                    time: "星期二",
                    badgeNum: 0
                },
                {
                    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg",
                    title: "飞天茅台代理",
                    content: "你这边的货已经全部给你发过来了",
                    time: "22/08/15",
                    badgeNum: 1
                }
            ]
        };
    }
};
</script>

<style scoped>

</style>
