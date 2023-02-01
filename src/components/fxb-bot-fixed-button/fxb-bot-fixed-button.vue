<template>
<view class="botBtn bg-white padding-sm" :class="btnFatherBoxClass">
    <view :class="btnSunBoxClass1">
        <slot name="btn1Left"></slot>
        <button @click="change1" v-if="btn1" :class="btn1Class">{{ btn1 }}</button>
        <slot name="btn1Right"></slot>
    </view>
    <view :class="btnSunBoxClass2">
        <slot name="btn2Left"></slot>
        <button @click="change2" v-if="btn2" :class="btn2Class">{{ btn2 }}</button>
        <slot name="btn2Right"></slot>
    </view>
</view>
</template>

<script>
export default {
    name: "fxb-bot-bottom",
    props:{
        btnFatherBoxClass:{
            type:String,
            default:'flex'
        },
        btnSunBoxClass1:{
            type:String,
            default:'flex'
        },
        btnSunBoxClass2:{
            type:String,
            default:'flex'
        },
        btn1:{
            type:String,
            default:null
        },
        btn1Class:{
            type:String,
            default:''
        },
        btn2:{
            type:String,
            default:null
        },
        btn2Class:{
            type:String,
            default:''
        },
    },
    methods:{
        change1(){
            this.$emit('change1')
        },
        change2(){
            this.$emit('change2')
        }
    }
};
</script>

<style lang="scss" scoped>
.botBtn{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
.b100{
    width: 100%;
}
.b75{
    width: 75%;
}
.b50{
    width: 50%;
}
.b25{
    width: 25%;
}

</style>