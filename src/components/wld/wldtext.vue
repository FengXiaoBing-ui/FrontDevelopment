<template>
    <view>
        <view class="margin-tb-sm goods-Shipped">发货商品：{{goodsShipped}}</view>
        <view class="margin-tb-sm">发货数量：{{shipmentQuantity}}瓶</view>
        <view class="margin-tb-sm">提交时间：{{submitTime}}</view>
    </view>
</template>

<script>
export default {
    name: "wldtext",
    props:{
        status:{
            type:Number,
            default:0
        },
        goodsShipped:{
            type:String,
            default:''
        },
        shipmentQuantity:{
            type:[Number,String],
            default:0
        },
        submitTime:{
            type:String,
            default:''
        }
    },



};
</script>

<style scoped>
.goods-Shipped{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>