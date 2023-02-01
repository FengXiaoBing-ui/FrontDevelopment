<template>
    <view>
        <u-navbar :autoBack="true" title="未通过原因"></u-navbar>
        <view :style="`margin-top:${(CustomBar)*2}rpx`">
            <view class="padding-lr bg-white">
                <boxTitle title="未通过原因"></boxTitle>
                <textarea maxlength="-1"   placeholder="请输入未通过原因"></textarea>
            </view>
        </view>
        <view  class="foot bg-white padding ">
            <view class="cu-btn w100 radius bg-red">确定</view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    components: {
        boxTitle,
    },
    data() {
        return {}
    }
};
</script>

<style lang="scss" scoped>
.foot {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>