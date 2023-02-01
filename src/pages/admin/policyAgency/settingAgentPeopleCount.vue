<template>
<view class="content">
    <u-navbar :autoBack="true" rightClick="" rightText="" title="设置代理人数"></u-navbar>
    <view :style="`margin-top:${CustomBar}px`" class="padding-lr-sm padding-tb">
        <view class="whiteBoxShadow">
            <boxTitle title="代理人数设置"></boxTitle>
            <view class="bg-red light flex">
                <view class="flex u-border padding-tb-xs flex-sub justify-center text-black">地区</view>
                <view class="flex u-border padding-tb-xs flex-sub justify-center text-black">代理名额</view>
            </view>
            <view class="light flex" v-for="(item,index) in formData" :key="index">
                <view class="flex u-border padding-tb-xs flex-sub justify-center">{{ item.city }}</view>
                <view class="flex u-border padding-tb-xs flex-sub justify-center">
                    <input v-model="item.people" class="text-center" type="number">
                </view>
            </view>
        </view>
        <button @click="preservation" class="w100 margin-top-xl cu-btn bg-red radius">保存并添加</button>
    </view>
</view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import { mapMutations } from "vuex";
export default {
    name: "settingAgentPeopleCount",
    components:{
        boxTitle
    },
    data(){
        return{
            formData:[]
        }
    },
    onLoad(options){
        let obj = JSON.parse(options.query)
        let city = JSON.parse(obj.street)
        city.forEach(element => {
            this.formData.push({
                city:element,
                people:""
            })
        })

    },
    methods:{
        ...mapMutations("policy", ["setAgentPeople"]),
        preservation(){
            this.setAgentPeople(this.formData)
            uni.navigateBack({
                delta:1
            })
        }
    }
};
</script>

<style lang="scss" scoped>

</style>