<template>
    <view @click="change" style="width: 100%" class="whiteBoxShadow margin-bottom-sm">
        <slot name="topContent">
            <boxTitle :title="dataList.number"  :right-text-class="dataList.status==0?'text-orange':dataList.status==1?'text-red':dataList.status==2?'text-blue' :dataList.status==3?'text-blue':'text-green'" :right-text="dataList.status==0?'待审核':dataList.status==1?'未通过':dataList.status==2?'待发货':dataList.status==3?'待收货':'已完成'"></boxTitle>
            <view class="u-border-bottom margin-tb-sm"></view>
        </slot>
        <view>
            <view class="flex align-stretch">
                <view class="text-gray flex-sub">发货商品：</view>
                <view class="text-cut flex-treble">{{ dataList.product }}</view>
            </view>
            <view class="flex align-stretch">
                <view class="text-gray flex-sub">发货数量：</view>
                <view class="text-cut flex-treble">{{ dataList.count }}件</view>
            </view>
            <view class="flex align-stretch">
                <view class="text-gray flex-sub">提交时间：</view>
                <view class="text-cut flex-treble">{{ dataList.time }}</view>
            </view>
        </view>
        <slot name="botContent">
            <view class="u-border-bottom margin-tb-sm"></view>
            <view class="flex justify-between align-center">
                <view>应付：<text class="text-red">¥{{ dataList.price }}</text></view>
                <button class="cu-btn bg-red radius">{{dataList.status==0?'待审核':dataList.status==1?'未通过':dataList.status==2?'待发货':dataList.status==3?'待收货':'已完成' }}</button>
            </view>
        </slot>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "fxb-deliver-goods-list",
    components:{
        boxTitle
    },
    props:{
        dataList:{
            type:Object,
            default:() => {} //必填 { status:"",number:"",product:"",count:"",time:"",price:"" }
        }
    },
    data(){
        return{

        }
    },
    methods:{
        change(e){
            this.$emit('change',e)
        }
    }
};
</script>

<style scoped>

</style>