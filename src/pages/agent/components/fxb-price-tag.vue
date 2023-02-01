<template>
    <view class="flex align-center" v-if="taglist.length >= 1">
        <scroll-view scroll-x class="scrollView">
            <view class="tagList flex">
                <view v-for="(item, index) in taglist" :key="index" class="tagBox bg-white radius">
                    <text>{{ item }}元 <text @click="clearTag(index)" class="cuIcon-close"></text> </text>
                </view>
            </view>
        </scroll-view>
        <view class="clear" @click="clearAllTag">清空</view>
    </view>
</template>

<script>
export default {
    name: "priceTag",
    data() {
        return {
            taglist: ["300~591", "300~592", "300~593", "300~594", "300~595", "300~596"],
        };
    },
    methods: {
        clearTag(index) {
            this.taglist.splice(index, 1);
            console.log(this.taglist);
        },
        clearAllTag() {
            this.taglist = [];
        },
    },
};
</script>

<style lang="scss" scoped>
.scrollView {
    width: 600rpx;
    .tagList {
        .tagBox {
            padding: 4rpx;
            margin-right: 20rpx;
            box-shadow: 6rpx 6rpx 8rpx #ccc;
            text {
                margin-left: 4rpx;
                white-space: nowrap;
            }
        }
    }
}
.clear {
    width: 80rpx;
    text-align: right;
}
</style>
