<template>
    <view>
        <u-navbar title="扣款顺序" :autoBack="true"> </u-navbar>
      <view :style="`margin-top: ${CustomBar}px`" class=" padding-top" >
           <view class="margin-xs">
               <view class="padding-sm bg-white ">
                   <view class="flex justify-between">
                       <view class="text-bold text-lg">自定义扣款顺序</view>
                       <u-switch v-model="swicthButton" activeColor="#4CD964" ></u-switch>
                   </view>
                   <view class="u-border-bottom margin-tb-sm"></view>
                   <view class="flex justify-between text-xs text-gray padding-top-sm">
                       <view>将根据以下顺序扣款</view>
                       <view>长安拖动</view>
                   </view>
                   <view class="margin-top-sm " v-for="(item,index) in list " :key="item.title">
                       <view class="flex justify-between align-center">
                         <view class="flex align-center">
                           <image :src="item.icon" style="width: 50rpx;height: 50rpx"></image>
                           <view class="margin-left">{{item.title}}</view>
                         </view>
                         <view>
                           <image src="./button.png" style="width: 30rpx;height: 30rpx" class="margin-right-xs"></image>
                         </view>
                       </view>
                       <view class="u-border-bottom margin-tb-sm" v-if="index==0||index==1||index==2"></view>
                   </view>
               </view>
           </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "paySortIndex",
    data:function() {
        return {
            swicthButton:false,
            list:[
                {title:'支付宝',icon:'/static/zhifubao.png '},
                {title:'微信',icon:'/static/weixin.png '},
                {title:'银联',icon:'/static/yinhangka.png '},
                {title:'建设银行',icon:'/static/yinhangka.png '}
            ]
        }
    }
};
</script>

<style scoped>

</style>