<template>
    <view class="btn" @click="copy">复制</view>
</template>

<script>
export default {
    name: "copyButton",
    props: ["value"],
    methods: {
        copy() {
            uni.setClipboardData({
                data: this.value,
                fail: function() {
                    uni.showToast({
                        title: "复制失败，请重试",
                        icon: "error"
                    });
                }
            });
        }
    }
};
</script>

<style scoped>
.btn {
    border-radius: 4 rpx;
    padding: 4 rpx 10 rpx;
    background: rgba(243, 123, 29, 0.1) !important;
    color: #F37B1D;
}
</style>