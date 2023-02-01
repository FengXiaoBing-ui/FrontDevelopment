<template>
    <view>
        <u-navbar :autoBack="true" title="关于好酒选"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`" class="padding-top-sm">
            <view class="Menuactive bg-white" v-for="(item,index) in list" :key="item.lable">
                <view class="u-border-bottom" v-if="index==1||index==3||index==5"></view>
                <view v-if="index == 4||index == 2" style="height: 20rpx;background-color: rgb(240,240,240)"></view>
                <view @click="pageTo(item.url)" class="padding-tb flex align-center justify-between" >
                    <view class="padding-left">{{item.lable}}</view>
                    <view class="cuIcon-right padding-right"></view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "aboutIndex",
    data(){
        return {
            list :[
                {lable:'政策声明',url:'pages/my/about/policyIndex'},
                {lable:'隐私',url:''},
                {lable:'软件许可协议',url:''},
                {lable:'第三方软件许可',url:''},
                {lable:'好酒选服务条款',url:''},
                {lable:'证件信息',url:''}
            ]
        }
    },
    methods:{

    pageTo(url){
        if(url.length<5){
            uni.showToast({title:'功能尚未完善',icon:'none'})
        }else{
        uni.navigateTo({
            url
        })
    }
}
    }
};
</script>

<style scoped>
.Menuactive:hover{
    background: rgba(232,232,233,0.2);
}
</style>