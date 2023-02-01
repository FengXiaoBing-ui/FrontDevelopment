<template>
    <view>
        <u-navbar :autoBack="true" title="选择活动"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`" class="bg-white padding-tb">
            <view class="padding-lr">
                <u--input
                    border="false"
                    class="bg-gray"
                    placeholder="请输入商品名称进行搜索"
                    prefixIcon="search"
                    prefixIconStyle="font-size: 22px;color: #909399"
                ></u--input>
            </view>
        </view>
        <view class="padding-lr ">
            <u-checkbox-group
                v-model="radioValue"
                placement="column"
            >
                <view v-for="item in List" :key="item.activityID"
                      class=" flex  align-start  margin-top ergodic">
                    <view class="flex  flex-direction justify-center">
                        <u-checkbox
                            :customStyle="{marginBottom: '8px'}"
                            :name="item.activityID"
                            activeColor="red"
                            inactiveColor="orange"
                            shape="circle"
                            class="padding-top-sm"
                        >
                        </u-checkbox>
                    </view>
                    <view style="background-color: rgb(254,241,232);width: 100%" class="shadow radius">
                        <view class="flex align-center justify-between  text-orange padding-sm">
                            <view class="flex align-center ">
                                <view class="margin-right-sm cuIcon-time text-red"></view>
                                <view>进行中</view>
                            </view>
                            <view>
                                剩余时间：3天3小时
                            </view>
                        </view>
                        <view style="background-color: rgba(255, 255, 255, 1)" class="padding-sm">
                            <view class=" flex align-center ">
                                <view class="text-gray">活动名称：</view>
                                <view>{{ item.activityName }}</view>
                            </view>
                            <view class="margin-tb flex align-center ">
                                <view class="text-gray">有效期限：</view>
                                <view>{{ item.startTime }}至{{ item.endTime }}</view>
                            </view>
                            <view class="margin-tb flex align-center ">
                                <view class="text-gray">推广费用：</view>
                                <view class="text-red">￥{{ item.activityPrice }}</view>
                            </view>
                            <view class="margin-top flex align-center justify-between">
                                <view class="flex">
                                    <view class="text-gray">申请时间：</view>
                                    <view>{{ item.applyTime }}</view>
                                </view>
                                <view>操作人：{{item.operator}}</view>
                            </view>
                        </view>
                    </view>
                </view>
            </u-checkbox-group>
        </view>
        <view class="padding fixed bg-white ">
            <view class="cu-btn  w100 bg-red" @click="selectActivity">确认</view>
        </view>
    </view>
</template>

<script>
export default {
    name: "selectActivity",
    data() {
        return {
            radioValue: [],
            List: [
                {
                    activityID: "4837487",
                    activityName: "飞天茅台53°瓶装酱香型 500ml",
                    activityPrice: "3000.00",
                    operator: "张楠",
                    startTime: "2022-08-30",
                    endTime: "2022-10-30",
                    applyTime: "2022-08-31 12:48"
                },
                {
                    activityID: "48371487",
                    activityName: "飞天茅台53°瓶装酱香型 500ml",
                    activityPrice: "3000.00",
                    operator: "张楠",
                    startTime: "2022-08-30",
                    endTime: "2022-10-30",
                    applyTime: "2022-08-31 12:48"
                },
                {
                    activityID: "481117",
                    activityName: "飞天茅台53°瓶装酱香型 500ml",
                    activityPrice: "3000.00",
                    operator: "张楠",
                    startTime: "2022-08-30",
                    endTime: "2022-10-30",
                    applyTime: "2022-08-31 12:48"
                },
                {
                    activityID: "481417",
                    activityName: "飞天茅台53°瓶装酱香型 500ml",
                    activityPrice: "3000.00",
                    operator: "张楠",
                    startTime: "2022-08-30",
                    endTime: "2022-10-30",
                    applyTime: "2022-08-31 12:48"
                },
                {
                    activityID: "481167",
                    activityName: "飞天茅台53°瓶装酱香型 500ml",
                    activityPrice: "3000.00",
                    operator: "张楠",
                    startTime: "2022-08-30",
                    endTime: "2022-10-30",
                    applyTime: "2022-08-31 12:48"
                }
            ]
        };
    },
    methods: {
        selectActivity() {
            uni.navigateBack({
                delta: 1
            });
            let pages = getCurrentPages()
            let prevPage = pages[pages.length -2]
            prevPage.$vm.getGoodsInfo({ id:'18594' })
        }

    }
};
</script>

<style scoped>
.ergodic:last-child{
    margin-bottom: 70px;
}
.fixed {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>