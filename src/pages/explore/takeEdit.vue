<template>
<view>
    <view @click="back" class="icon cuIcon-back text-white" :style="'top:'+StatusBar+'px'"></view>
    <image :src="url" style="width: 750rpx;height: 92vh"></image>
    <view class="bg-black flex justify-between align-stretch w100 padding-xs" style="height: 8vh;">
        <button class="cu-btn bg-white radius flex-sub lg">发日常</button>
        <button @click="next" class="cu-btn bg-red radius flex-sub margin-left-sm lg">下一步</button>
    </view>
</view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
export default {
    name: "takeEdit",
    components:{
        fxbImage
    },
    data(){
        return{
            url:""
        }
    },
    onLoad(options){
        this.url = options.img
    },
    methods:{
        back(){
            uni.navigateBack({
                delta:1
            })
        },
        next(){
            // plus.gallery.save( this.url, function (e) {
            //     console.log( "保存图片到相册成功",e.file);
            // } );
            uni.navigateTo({
                url:"/pages/explore/editorIndex?img="+this.url
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.icon{
    position: fixed;
    left: 40rpx;
    font-size: 44rpx;
    z-index: 999;
}
</style>