<template>
<view class="content">
    <u-navbar title="创建合同" :autoBack="true"> </u-navbar>
    <view class="padding" :style="'margin-top:' + CustomBar + 'px'">
        <web-view style="height: 90vh" :src="pdfUrl"></web-view>
    </view>
    <fxbBotFixedButton
        btn1="下一步"
        btn-father-box-class="flex justify-center"
        btn-sun-box-class1="b100"
        btn1-class="cu-btn bg-red radius b100"
        @change1="next"
    ></fxbBotFixedButton>
</view>
</template>

<script>
import fxbBotFixedButton from "/src/components/fxb-bot-fixed-button/fxb-bot-fixed-button"
export default {
    name: "createContract",
    components:{
        fxbBotFixedButton
    },
    data(){
        return{
            pdfUrl:this.$config.IMG_SERVER+"/pdf/3950.pdf"
        }
    },
    methods:{
        next(){
            uni.navigateTo({
                url:"/pages/admin/adminContract/createContractTwo"
            })
        }
    }
};
</script>

<style scoped>

</style>