<template>
<view>
    <view class="margin-left-sm">
        <view class="text-lg">自定义</view>
        <view class="flex align-center justify-around margin-top-sm">
            <text @click="startDate" class="padding-sm radius bg-gray text-gray">{{ startMsg }}</text>
            <text>至</text>
            <text @click="endDate" class="padding-sm radius bg-gray text-gray">{{ endMsg }}</text>
        </view>
    </view>
<!--    <text>请选择结束时间: 日期：{{year}}年{{month}}月{{day}}日</text>-->
    <picker-view v-if="visible" :indicator-style="indicatorStyle" :value="value" @change="bindChange" class="picker-view">
        <picker-view-column>
            <view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
        </picker-view-column>
        <picker-view-column>
            <view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
        </picker-view-column>
        <picker-view-column>
            <view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
        </picker-view-column>
    </picker-view>
</view>
</template>

<script>
export default {
    name: "fxb-select-date",
    data: function () {
        const date = new Date()
        const years = []
        const year = date.getFullYear()
        const months = []
        const month = date.getMonth() + 1
        const days = []
        const day = date.getDate()
        for (let i = 1990; i <= date.getFullYear(); i++) {
            years.push(i)
        }
        for (let i = 1; i <= 12; i++) {
            months.push(i)
        }
        for (let i = 1; i <= 31; i++) {
            days.push(i)
        }
        return {
            title: 'picker-view',
            years,
            year,
            months,
            month,
            days,
            day,
            value: [9999, month - 1, day - 1],
            visible: true,
            indicatorStyle: `height: 50px;`,
            startMsg:"请选择开始时间",
            endMsg:"请选择结束时间",
            isStartEnd: undefined,
        }
    },
    methods: {
        bindChange: function (e) {
            const val = e.detail.value;
            this.year = this.years[val[0]];
            this.month = this.months[val[1]];
            this.day = this.days[val[2]];
            if (this.isStartEnd){
                this.startMsg = this.year+'年'+this.month+'月'+this.day+'日'
            }
            if (this.isStartEnd == false){
                this.endMsg = this.year+'年'+this.month+'月'+this.day+'日'
            }
        },
        startDate(){
            this.isStartEnd = true;
            this.startMsg = this.year+'年'+this.month+'月'+this.day+'日'
        },
        endDate(){
            this.isStartEnd = false;
            this.endMsg = this.year+'年'+this.month+'月'+this.day+'日'
        }
    }
};
</script>

<style lang="scss" scoped>
.picker-view {
    width: 750rpx;
    height: 400rpx;
    margin-top: 20rpx;
}
.item {
    height: 50px;
    line-height: 50px;
    text-align: center;
}
</style>