<template>
    <image v-if="imgUrl!== 'http://124.220.219.72:8084/static'"
           :style="'width:'+width+'rpx;height:'+height+'rpx;display: block;'"
           :src="imgUrl" :mode="mode"
           @click="preview(imgUrl)"
           @error="errChange($event)"
           @load="imgLoad" :key="imgUrl"></image>
</template>

<script>
export default {
    name: "fxb-image",
    props: {
        src: {
            type: String,
            default: ""
        },
        mode: {
            type: String,
            default: ""
        },
        width: {
            type: String,
            default: ""
        },
        height: {
            type: String,
            default: ""
        },
        isViewImg:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            imgUrl: this.httpFilterFUN(this.src) ? this.src : this.$config.IMG_SERVER + this.src
        };
    },
    created() {
    },
    methods: {
        preview(url){
            if (this.isViewImg){
                uni.previewImage({
                    urls:[url]
                })
            }
        },
        errChange(e) {
            // this.imgUrl = require("/src/static/error.jpeg");
        },
        imgLoad(e) {

        },
        //判断src是否包含www和http
        httpFilterFUN(valueStr) {
            if (valueStr != "" && valueStr != null) {
                if (valueStr.indexOf("www") >= 0 || valueStr.indexOf("http") >= 0 || valueStr.indexOf("https") >= 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
};
</script>

<style scoped>

</style>
