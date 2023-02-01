<template>
    <view style="background-color: #FBFBFB">
        <u-navbar title="平台支付设置" :autoBack="true"  > </u-navbar>
        <view :style="`margin-top:${CustomBar}px`" class="padding-top-sm">
                <view v-for="(item,index) in list " :key="item.url" class=" Menuactive" @click="pageTo(item.url)">
                  <view v-if="index == 1||index == 4||index == 5" style="height: 20rpx;background-color: #FBFBFB"></view>
                  <view v-if="index == 2||index == 3" style="height: 5rpx;background-color: #FBFBFB"></view>
                  <view class="flex justify-between padding bg-white">
                       <view>{{item.title}}</view>
                       <view class="flex align-center" >
                           <view class="text-sm text-gray">{{item.status}}</view>
                           <view class="cuIcon-right margin-left-xs"></view>
                       </view>
                   </view>
                </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "paySettingIndex",
    data:function() {
        return {
            list:[
                {title:'对公账户',url:'pages/my/paySetting/publicAccountIndex',status:''},
                {title:'对银联支付',url:'2',status:'已开通'},
                {title:'微信支付',url:'3',status:'未开通'},
                {title:'支付宝设置',url:'4',status:'已开通'},
                {title:'扣款顺序',url:'pages/my/paySetting/paySortIndex',status:''},
                {title:'支付密码',url:'pages/my/paySetting/passwordSettingIndex',status:'去设置'},
            ]
        }
    },
    methods:{
        pageTo(url){
            if(url.length>5){
                uni.navigateTo({
                    url
                })
            }else{
                uni.showToast({ title: "暂未开放", icon: "none" });
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