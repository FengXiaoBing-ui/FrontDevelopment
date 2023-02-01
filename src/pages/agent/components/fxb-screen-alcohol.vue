<template>
    <view>
        <u-collapse :border="false" :value="[ disabled?'':'Docs guide']">
            <u-collapse-item
                :title="title"
                name="Docs guide"
                class="text-bold margin-bottom"
                :isLink="false"
                :disabled="disabled"
                :clickable="false"
            >
                <text v-show="text" @click="jumpBrand" slot="value" class="u-page__item__title__slot-title"
                    >{{ text }}
                    <text class="cuIcon-right"></text>
                </text>
                <view class="u-collapse-content">
                    <view class="flex flex-wrap">
                        <text
                            v-for="(item, index) in alcoholList"
                            :key="index"
                            @click="Choice(index, item)"
                            :class="isIndex == index ? 'text-white bg-red light' : 'bg-gray'"
                            class="list_box text-sm flex justify-center align-center margin-right-lg margin-bottom"
                            >{{ item }}
                        </text>
                    </view>
                </view>
            </u-collapse-item>
        </u-collapse>
    </view>
</template>

<script>
export default {
    name: "screenAlcohol",
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        text: {
            type: String,
            default: null,
        },
        title: {
            type: String,
            default: "标题",
        },
        alcoholList: {
            type: Array,
            defaults: ["xx", "xxx"],
        },
    },
    data() {
        return {
            isIndex: 0,
        };
    },
    methods: {
        Choice(index, item) {
            this.isIndex = index;
            this.$emit("getInfo", item);
        },
        jumpBrand() {
            console.log("跳转品牌");
            uni.navigateTo({
                url: "pages/agent/brandScreen",
            });
        },
    },
};
</script>

<style lang="scss" scoped>
/deep/.u-cell__title-text span:before {
    content: "";
    display: inline-block;
    width: 10rpx;
    height: 30rpx;
    border-radius: 6rpx;
    background: red;
    margin-right: 12rpx;
    transform: translateY(5rpx);
}
/deep/.u-cell--disabled {
    color: black;
}
/deep/.u-cell__body {
    background: #f7f7f7;
    margin: 10rpx 15rpx;
    padding: 10rpx 15rpx;
    border-radius: 8rpx;
}
.list_box {
    min-width: 28%;
    height: 50rpx;
    border-radius: 10rpx;
    font-weight: normal;
    &:nth-child(3n) {
        margin-right: 0;
    }
}
</style>
