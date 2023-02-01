<template>
    <view>
        <scroll-view scroll-x>
            <view class="flex text-center">
                <view
                    v-for="(item, index) in fileDta"
                    :key="index"
                    @click="brandBtn"
                    class="alcoholBox flex flex-direction margin-right-sm"
                >
                    <image class="alcoholImg" :src="item.imgUrl" mode="aspectFill"></image>
                    <view class="text-cut text-left margin-tb-sm">{{ item.title }}</view>
                    <view class="text-cut text-left text-gray">{{ item.text }}</view>
                    <view class="price margin-top-sm text-red text-bold text-lg text-left">￥{{ item.price }}</view>
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script>
export default {
    name: "fxb-brand-list",
    props: {
        fileDta: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
    methods: {
        brandBtn() {
            this.$emit("brandBtn");
        },
    },
};
</script>

<style lang="scss" scoped>
.alcoholBox {
    width: 200rpx;
    .alcoholImg {
        width: 200rpx;
        height: 200rpx;
    }
}
</style>
