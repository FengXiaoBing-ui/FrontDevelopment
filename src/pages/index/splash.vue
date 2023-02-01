<template>
    <view>
        <image src="/static/splash.png" style="height: 100vh;width: 100vw"></image>
    </view>
</template>

<script>
import tool from "/src/utils/tool";

export default {
    name: "layout",
    onLoad() {
        tool.backToThePast();
    }
};
</script>

<style scoped>

</style>
