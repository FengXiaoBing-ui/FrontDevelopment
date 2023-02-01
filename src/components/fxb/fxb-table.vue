<template>
    <view>
        <table v-if="false" style="width: 100%" border="1">
            <tr class="text-sm text-center bg-gray">
                <td class="w50 padding-sm text-gray">
                    <view>{{ attribute }}</view>
                </td>
                <td class="w50 padding-sm">
                    <view class="text-gray" style="word-break: break-all">{{ attributeValue }}</view>
                </td>
            </tr>
            <tr class="text-sm text-center" v-for="(item,index) in tdList" :key="index">
                <td class="padding-sm text-gray w50">
                    <view>{{ item.name }}</view>
                </td>
                <td class="padding-sm w50">
                    <view class="text-red text-bold" style="word-break: break-all">{{ item.price }}</view>
                </td>
            </tr>
        </table>
        <view class="flex flex-wrap justify-between">
            <view style="width: 48%;" :style="'background-image: url('+imgList[index]+')'" class="priceTag text-sm padding-sm margin-bottom-sm" v-for="(item,index) in tdList" :key="index">
                <view class="text-gray text-left">{{ item.name }}：</view>
                <view style="text-indent: 1rem" class="text-left text-red margin-top-xs">{{ item.price }}</view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "fxb-table",
    props:{
        attribute:{
          type:String,
          default:''
        },
        attributeValue:{
            type:String,
            default:''
        },
        tdList:{
            type:Array,
            default:() => []
        }
    },
    data(){
        return{
            imgList:[
                this.$config.IMG_SERVER+"/agentPrice/Slice26.png",
                this.$config.IMG_SERVER+"/agentPrice/Slice27.png",
                this.$config.IMG_SERVER+"/agentPrice/Slice28.png",
                this.$config.IMG_SERVER+"/agentPrice/Slice29.png"
            ]
        }
    }
};
</script>

<style lang="scss" scoped>
.priceTag{
    width: 314rpx;
    height: 114rpx;
    background-size: 100% 100%;
}
td,
th,
table {
    border: 1px solid #d8d8d8;
}

tr {
    td {
        &:nth-child(1) {
            text-align: center;
            padding: 14rpx 0;
            width: 154rpx;
        }
    }
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
</style>