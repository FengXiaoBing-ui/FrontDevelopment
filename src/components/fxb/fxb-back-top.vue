<template>
    <view @touchmove.prevent="touchmove" @touchend="touchend" @click="backTop" :class="{'touchend':isTouchend}" class="backTop round bg-red flex align-center justify-center"
          :style="'top:'+backTopY+ 'px;left:' +backTopX+'px'">
        <view class="cuIcon-top" style="font-size: 20px"></view>
    </view>
</template>

<script>
export default {
    name: "fxb-back-top",
    data(){
        return{
            isTouchend:false,
            backTopX: 330,
            backTopY: 500,
        }
    },
    methods:{
        touchmove(e) {
            this.isTouchend = false;
            if (e.touches[0].clientX<=340&&e.touches[0].clientX>=30){
                this.backTopX = e.touches[0].clientX - 20;
            }
            if (e.touches[0].clientY<=(this.ScreenHeight-70)&&e.touches[0].clientY>=(this.CustomBar+20)){
                this.backTopY = e.touches[0].clientY - 20;
            }
        },
        touchend(e) {
            this.isTouchend = true;
            if (e.currentTarget.offsetLeft > 170){
                this.backTopX = 320;
            }else {
                this.backTopX = 30;
            }
        },
        backTop(){
            uni.pageScrollTo({scrollTop: 0, duration: 200});
        },
    }
};
</script>

<style lang="scss" scoped>
.backTop {
    position: fixed;
    z-index: 999999999;
    width: 40px;
    height: 40px;
    box-shadow: 2rpx 2rpx 4px 1rpx rgba(213,51,51,0.7);
}
</style>