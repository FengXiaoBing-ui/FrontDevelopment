<template>
    <view>
        <u-navbar :autoBack="true" title="系统权限"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`">
            <view class="padding-xs">
                <view class="padding-sm">为保障产品功能的使用，好酒选会想你申请手机系统权限，一下常用权限可以在这里操作管理</view>
                <view class="padding-sm">
                    <view class="margin-tb-sm padding-sm bg-white flex justify-between align-centern" v-for="item in list" :key="item.id">
                        <view>{{item.title}}</view>
                        <view class="flex align-center justify-end text-gray">
                            <view :class="item.status=='未允许访问'?'text-blue':''">{{item.status}}</view>
                            <view class="cuIcon-right margin-left-sm"></view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "systemPowerIndex",
    data(){
        return{
            list:[
                {status:"允许访问",id:'localtion',title:'位置'},
                {status:"允许访问",id:'localtion1',title:'通讯录'},
                {status:"允许访问",id:'localtion2',title:'相机'},
                {status:"允许访问",id:'localtion3',title:'从相册'},
                {status:"未允许访问",id:'localtion4',title:'麦克风'},
            ]
        }
    }
};
</script>

<style scoped>

</style>