<template>
    <view>
        <view :style="`height:${StatusBar}px`" class="top" style="background: black;width: 100vw;"></view>
        <video id="Video" :autoplay="true" :loop="true"
               :style="`height:calc(100vh - ${StatusBar}px)`"
               controls
               object-fit="cover"
               :src="videoUrl"
               style="width: 100vw"
               title="53°贵州茅台1935酒500ml单瓶装53°"
               page-gesture
               @error="videoErrorCallback"></video>
    </view>
</template>

<script>
export default {
    name: "goodsIPage",
    onLoad(optiton) {
        this.videoUrl = optiton.video;
    },
    data() {
        return {
            videoUrl:''
        }
    },
    methods: {
        videoErrorCallback(e) {
            console.log(e);
        }
    }
};
</script>

<style lang="scss" scoped>

</style>