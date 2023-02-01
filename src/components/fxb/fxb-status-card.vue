<template>
    <view class="statusCard w100">
        <fxbImage class="w100 fxbImage" height="188" mode="aspectFill" src="/admin/pic_bg%402x.png"></fxbImage>
        <view class="statusCardBox w100 flex justify-between align-stretch">
            <view class="text-white">
                <view class="text-lg">{{ status }}</view>
                <view class="margin-top-sm" style="opacity: 0.8;">{{ tips }}</view>
            </view>
            <view class="icon t-icon" :class="'t-icon-'+icon"></view>
        </view>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
export default {
    name: "fxb-status-card",
    components:{
        fxbImage
    },
    props:{
        icon:{
            type:String,
            default:""
        },
        status:{
            type:String,
            default:""
        },
        tips:{
            type:String,
            default:""
        }
    },
    data(){
        return{

        }
    }
};
</script>

<style lang="scss" scoped>
.statusCard{
    position: relative;
    height: 188rpx;
    .fxbImage{
        position: absolute;
        top: 0;
        left: 0
    }
    .statusCardBox{
        position: absolute;
        bottom:20rpx;
        z-index: 1;
        padding: 0 40px 0 10px;
    }
    .icon{
        width: 142rpx;
        height: 142rpx
    }
}
</style>
