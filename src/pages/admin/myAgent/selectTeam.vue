<template>
    <view>
        <u-navbar :autoBack="true"
                  title="选择团队">
        </u-navbar>
        <view :style="`margin-top:${CustomBar+10}px`" class="margin-lr">
            <view v-for="item in userList" :key="item.phone"
                  class="flex whiteBoxShadow justify-between align-center margin-top">
                <view v-if="status==0">
                    <image mode="widthFix" src="/static/integralCommutation/wang.png" style="width: 100rpx"></image>
                </view>
                <view class="w50">
                    <view class=" flex align-end">{{ item.name }}
                        <view class="text-xs ">（{{ item.job }}）</view>
                    </view>
                    <view class="flex align-center margin-top">
                        <view class="cuIcon-mobilefill text-gray"></view>
                        <view>
                            {{ item.phone }}
                        </view>
                    </view>
                </view>
                <view class="w25 text-right">
                    <radio></radio>
                </view>
            </view>
        </view>
        <view class="padding-lr">
            <view class="margin-top cu-btn bg-red w100 radius " @click="selectSteam"> 确定</view>
        </view>
    </view>
</template>

<script>
export default {
    name: "selectTeam",
    data() {
        return {
          status:'',
            userList: [
                {
                    name: "王晓刚",
                    job: "业务员",
                    phone: "1835121664",
                  status:0
                },
                {
                    name: "张扬",
                    job: "业务员",
                    phone: "184444324",
                    head: "",
                  status:1
                },
                {
                    name: "李紫",
                    job: "业务员",
                    phone: "1843232664",
                    head: "",
                  status:2
                },
                {
                    name: "王晓刚",
                    job: "业务员",
                    phone: "18312511664",
                    head: "",
                  status:3
                }
            ]
        };
    },
    methods: {
        selectSteam() {
            uni.navigateTo({
                url: "pages/admin/myAgent/settingInfo?id=154"
            });
        }
    }
};
</script>

<style scoped>

</style>