<template>
<view class="content">
    <!--顶部标题-->
    <u-navbar title="代理详情" rightText="编辑" rightClick="" :autoBack="true"></u-navbar>
    <view class="padding" :style="`margin-top:${CustomBar}px`">
        <view class="whiteBoxShadow">
            <view class="flex">
                <image style="width: 100rpx;height: 100rpx" mode="aspectFill" :src="require('/src/static/bottle/99.jpeg')"></image>
                <view style="width: 80%" class="margin-left-sm flex flex-direction justify-between">
                    <view class="text-bold">飞天茅台53°瓶装酱香型 500ml</view>
                    <view class="flex justify-between text-gray">
                        <text>香型:酱香型</text>
                        <text>度数:53°</text>
                        <text>容量:500ml</text>
                    </view>

                </view>
            </view>
            <view class="flex justify-between margin-top-sm">
                <view v-for="(item,index) in tag" :key="index" class="text-center">
                    <view>{{ item.num }}</view>
                    <view class="margin-top-xs text-gray">{{ item.title }}</view>
                </view>
            </view>

        </view>
        <view class="whiteBoxShadow margin-top">
            <boxTitle title="代理政策"></boxTitle>
            <agencyPolicy :positionArr="positionArr"></agencyPolicy>
        </view>
    </view>
</view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import agencyPolicy from "/src/components/erp/agencyPolicy";
export default {
    name: "agentDetails",
    components:{
        boxTitle,
        agencyPolicy
    },
    data(){
        return{
            tag:[
                {
                    title:"发布代理",
                    num:"46"
                },
                {
                    title:"已代理",
                    num:"23"
                },
                {
                    title:"剩余代理",
                    num:"23"
                }
            ],
            positionList:[
                {
                    title:"代理区域",
                    num:"贵州省"
                },
                {
                    title:"发布代理",
                    num:"1"
                },
                {
                    title:"已代理",
                    num:"1"
                },
                {
                    title:"剩余代理",
                    num:"0"
                }
            ],
            positionArr:[
                {
                    title:"省级",
                    city:null,
                    cityAgent:[
                        ["贵州省","1","1","0"],
                        ["云南省","1","1","0"],
                    ]
                },
                {
                    title:"市级",
                    city:["贵州省"],
                    cityAgent:[
                        ["贵阳市","3","3","0"],
                        ["毕节市","3","3","0"],
                    ]
                },
                {
                    title:"区级",
                    city:["贵州省","贵阳市"],
                    cityAgent:[
                        ["观山湖区","1","3","0"],
                        ["云岩区","2","3","0"],
                        ["南明区","3","2","0"],
                    ]
                },
                {
                    title:"街道",
                    city:["贵州省","贵阳市","观山湖区"],
                    cityAgent:[
                        ["世纪城街道","3","3","0"],
                        ["长岭街道","3","3","0"]
                    ]
                },
            ]
        }
    },
    methods:{

    }
};
</script>

<style lang="scss" scoped>
</style>