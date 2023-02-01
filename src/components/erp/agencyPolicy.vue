<template>
    <view>
<!--        <view v-for="(item,index) in positionArr" :key="index" class="margin-bottom" :class="index >= positionArr.length-1?'':'u-border-bottom'">-->
<!--            <view class="flex justify-between text-bold">-->
<!--                <view v-if="item.provinceName">代理政策{{ index+1 }}({{ item.title }})</view>-->
<!--            </view>-->
<!--            <view class="margin-tb">-->
<!--                <text class="margin-right-xs" v-for="cityList in item.provinceName" :key="cityList">{{ cityList }}</text>-->
<!--                <text v-if="item.provinceName" class="cuIcon-triangledownfill"></text>-->
<!--            </view>-->
<!--            <view v-for="(child,id) in item.cityAgent" :key="id" class="margin-tb">-->
<!--                <view class="grid col-4 margin-tb-sm text-bold text-df">-->
<!--                    <view v-for="(cityAgentChild,cityAgentChildID) in child" :key="cityAgentChildID" class="text-center">-->
<!--                        <view>{{ cityAgentChild }}</view>-->
<!--                    </view>-->
<!--                </view>-->
<!--                <view class="grid col-4 margin-tb-sm text-gray text-sm">-->
<!--                    <view class="text-center">代理区域</view>-->
<!--                    <view class="text-center">发布代理</view>-->
<!--                    <view class="text-center">已代理</view>-->
<!--                    <view class="text-center">剩余代理</view>-->
<!--                </view>-->
<!--            </view>-->
<!--        </view>-->
        <view class="margin-top-sm" v-for="(item,index) in positionArr" :key="index">
            <view class="grid col-4 text-sm text-bold text-center">
                <view>{{ item.provinceName }}</view>
                <view>{{ item.policyId }}</view>
                <view>{{ item.id }}</view>
                <view></view>
            </view>
            <view class="grid col-4 text-center text-gray text-sm">
                <view>代理区域</view>
                <view>发布代理</view>
                <view>已代理</view>
                <view>剩余代理</view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "agencyPolicy",
    props:{
        positionArr:{
            type:Array,
            default:() => {
                return []
            }
        }
    },

    methods:{
        pageTo(url,params){
            uni.navigateTo({
                url:`${url}?${params}`
            })
        }
    }
};
</script>

<style scoped>

</style>