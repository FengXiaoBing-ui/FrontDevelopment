<template>
    <view>
        <u-navbar :autoBack="true" title="选择收货地址"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`" class="padding-sm">
            <view v-for="(item,index) in list" :key="item.telephone"
                class="whiteBoxShadow flex align-center margin-top-sm">
                <view @click="showIndex = index">
                    <view class="flex">
                        <view class="text-gray" style="width: 70px">收获人：</view>
                        <view>{{item.name}}</view>
                        <view class="flex align-center margin-left">
                            <view class="cuIcon-mobilefill" style=" color: #F37B1D"></view>
                            <text >{{item.telephone}}</text>
                        </view>
                    </view>
                    <view class=" flex margin-top-sm">
                        <view class="text-gray" style="width: 70px">收获地址：</view>
                        <view class="text-wrap " style="width: 230px">{{item.address}}</view>
                    </view>
                </view>
                <view v-if="showIndex === index" class="cuIcon-check text-red margin-left-sm" style="font-size: 25px"></view>
            </view>
            <button @click="gotoPath('/pages/admin/myOrderForPersonal/addHarvestAddress')" class="bg-red margin-top-lg">新增地址</button>
        </view>

    </view>
</template>

<script>
export default {
    name: "selectHarvestAddress",
    data(){
        return{
            showIndex:0,
            list:[
                {
                    name:"张晓丹",
                    telephone:"18759879524",
                    address:"贵州省贵阳市观山湖区德福中心A3栋6楼10号"
                },
                {
                    name:"张晓丹",
                    telephone:"18752359524",
                    address:"贵州省贵阳市观山湖区德福中心A3栋6楼10号"
                },
                {
                    name:"张晓丹",
                    telephone:"18759836524",
                    address:"贵州省贵阳市观山湖区德福中心A3栋6楼10号"
                }
            ]
        }
    },
    methods:{
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        },
    }
};
</script>
<style scoped>
.text-wrap{
    word-wrap:break-word;
}
</style>