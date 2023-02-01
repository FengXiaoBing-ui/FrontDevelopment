<template>
    <view id="slider" class="sliderBot margin">
        <view class="sliderTop" :style="'width: '+progressX+'%'">
            <view class="sliderBtn"
                  @touchstart="touchstart"
                  @touchmove="touchmove"
                  @touchend="touchend">{{ showProgress }}%
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "fxb-slider",
    props: {
        progress: {
            type: String | Number,
            default: 33
        }
    },
    data() {
        return {
            showProgress:this.progress,
            progressX:this.progress,
            domWidth:0,
            touchesX:0,
        };
    },
    mounted() {
        setTimeout(() => {
            const query = uni.createSelectorQuery().in(this);
            query.select('#slider').boundingClientRect(data => {
                this.domWidth = Number(data.width)
            }).exec();
        },300)
    },
    methods:{
        touchstart(){

        },
        touchmove(e){
            this.touchesX = e.touches[0].clientX-30;
            let move = parseInt(this.touchesX/((this.domWidth)/100));
            if (move < 0 || move > 100){
                return
            }
            this.progressX = move;
            this.showProgress = this.progressX;
        },
        touchend(){

        }
    }
};
</script>

<style lang="scss" scoped>
.sliderBot {
    width: 100%;
    height: 6px;
    background: #F7F7FB;
    border-radius: 3px;
    position: relative;

    .sliderTop {
        height: 6px;
        background: linear-gradient(90deg, #FFD8D5 0%, #FF5C50 100%);
        border-radius: 3px;
        position: relative;
        .sliderBtn {
            position: absolute;
            right: -20px;
            top: 50%;
            transform: translateY(-50%);
            width: 42px;
            height: 20px;
            background: #FFFFFF;
            border-radius: 10px 10px 10px 10px;
            border: 1px solid #E54D42;
            text-align: center;
            color: #E54D42;
        }
    }
}
</style>