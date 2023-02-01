<template>
    <view>
        <u-navbar :autoBack="true" rightClick="" rightText="" title="发布代理政策"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`" class="padding">
            <u-button plain text="添加代理政策" type="error" @click="add"></u-button>
            <view class="whiteBoxShadow text-center margin-top ">
                <view class="flex align-center justify-between">
                    <view class="w-third bg-red text-center padding-tb-xs radius text-sm">代理政策(省级)</view>
                    <view class="flex align-center">
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="trash" size="20px"></u-icon>
                            删除
                        </view>
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="edit-pen" size="20px"></u-icon>
                            编辑
                        </view>
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="info-circle" size="20px"></u-icon>
                            详情
                        </view>
                    </view>
                </view>
                <view class="margin-top flex  flex-wrap">
                    <view class=" w-third  padding-lr padding-tb" v-for="item in policyList.province" :key="item.id">{{item.name}}</view>
                </view>
                <view class="u-border-bottom margin-top"></view>
                <view class="flex align-center justify-between margin-tb">
                    <view class="w-third bg-red text-center padding-tb-xs radius text-sm">代理政策(市级)</view>
                    <view class="flex align-center">
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="trash" size="20px"></u-icon>
                            删除
                        </view>
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="edit-pen" size="20px"></u-icon>
                            编辑
                        </view>
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="info-circle" size="20px"></u-icon>
                            详情
                        </view>
                    </view>
                </view>
                <view class="margin-bottom" v-for="item in policyList.city" :key="item.id">
                    <view class="text-left text-gray margin-bottom">{{item.province}}</view>
                    <view class="margin-top flex justify-around">
                        <view class="margin-right-xs padding-lr padding-tb-xs" v-for="el in item.city" :key="el.id">{{el.name}}</view>
                    </view>
                </view>
                <view class="u-border-bottom margin-top"></view>
                <view class="flex align-center justify-between margin-top">
                    <view class="w-third bg-red text-center padding-tb-xs radius text-sm">代理政策(区级)</view>
                    <view class="flex align-center">
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="trash" size="20px"></u-icon>
                            删除
                        </view>
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="edit-pen" size="20px"></u-icon>
                            编辑
                        </view>
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="info-circle" size="20px"></u-icon>
                            详情
                        </view>
                    </view>
                </view>
                <view class="margin-bottom margin-top" v-for="item in policyList.area" :key="item.id">
                    <view class="text-left text-gray margin-bottom">{{item.city}}</view>
                    <view class="margin-top flex justify-around">
                        <view class="margin-right-xs padding-lr padding-tb-xs" v-for="el in item.area" :key="el.id">{{el.name}}</view>
                    </view>
                </view>
                <view class="flex align-center justify-between margin-top">
                    <view class="w-third bg-red text-center padding-tb-xs radius text-sm">代理政策(街道)</view>
                    <view class="flex align-center">
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="trash" size="20px"></u-icon>
                            删除
                        </view>
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="edit-pen" size="20px"></u-icon>
                            编辑
                        </view>
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="info-circle" size="20px"></u-icon>
                            详情
                        </view>
                    </view>
                </view>
                <view class="margin-bottom margin-top" v-for="item in policyList.street" :key="item.id">
                    <view class="text-left text-gray margin-bottom">{{item.area}}</view>
                    <view class="margin-top flex justify-around">
                        <view class="margin-right-xs padding-lr padding-tb-xs" v-for="el in item.street" :key="el.id">{{el.name}}</view>
                    </view>
                </view>
            </view>
          <view class="cu-btn bg-red w100 margin-top     ">发布</view>
        </view>
    </view>
</template>

<script>
export default {
    name: "releasePolicy",
    data() {
        return {
            policyList: {
                province: [
                    { name: "贵州省", id: "1" },
                    { name: "云南省", id: "2" },
                    { name: "海南省", id: "3" }
                ],
                city: [
                    {
                        province: "贵州省",
                        city: [
                            { name: "贵阳市", id: "01" },
                            { name: "遵义市", id: "02" },
                            { name: "清镇市", id: "03" }
                        ]
                    },
                    {
                        province: "云南省",
                        city: [
                            { name: "昆明市", id: "01" },
                            { name: "普洱市", id: "02" },
                            { name: "清镇市", id: "03" }
                        ]
                    }
                ],
                area: [
                    {
                        city: "贵阳市",
                        area: [
                            { name: "观山湖区", id: "001" },
                            { name: "云岩区", id: "002" },
                            { name: "清镇", id: "003" }
                        ]
                    }
                ],
                street: [
                    {
                        area: "贵阳市观山湖区",
                        street: [
                            { name: "白云大道", id: "0001" },
                            { name: "金融城", id: "0002" },
                            { name: "阳关大道", id: "0003" }
                        ]
                    },
                    {
                        area: "贵阳市观山湖区",
                        street: [
                            { name: "白云大道", id: "0001" },
                            { name: "金融城", id: "0002" },
                            { name: "阳关大道", id: "0003" }
                        ]
                    }

                    ]
            }
        };
    },
    methods:{
        add(){
            uni.navigateTo({
                url:'pages/admin/policyAgency/addPolicy'
            })
        }
    }
};
</script>

<style scoped lang="scss">
.boxShadow {
    padding: 30 rpx 20 rpx;
    background: white;
    border-radius: 10 rpx;
    box-shadow: 4 rpx 4 rpx 16 rpx #e6dee6;
}
</style>