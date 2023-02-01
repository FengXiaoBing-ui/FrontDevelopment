<template>
    <view>
        <u-navbar :autoBack="true" title="名称修改"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`" class="bg-white padding">
            <input placeholder="请输入名称" class="bg-white" type="text " v-model="name">
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
        return {
            name:""
        }
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