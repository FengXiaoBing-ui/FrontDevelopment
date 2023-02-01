<template>
    <view>
        <u-navbar :border="false" :fixed="true" :title="state==0?'选择成员':'选择中标人'" :autoBack="true"></u-navbar>
        <view class="padding-tb" :style="'margin-top:'+ CustomBar + 'px'">
            <u-checkbox-group
                v-model="radioValue"
                placement="column"
            >
                <view v-if="state==0" class="flex whiteBoxShadow margin-top-sm">
                    <u-checkbox
                        :customStyle="{marginBottom: '15px'}"
                        activeColor="red"
                        inactiveColor="black"
                        shape="circle"
                        class="padding-top-sm"
                    >
                    </u-checkbox>
                    <view class="margin-left-sm">
                        <view class="flex align-center">
                            <view class="flex align-center">
                                <view class="text-bold">王晓刚</view>
                                <view class="margin-left-sm text-sm">贵州好酒选科技有限公司</view>
                            </view>
                            <view class="text-sm text-red margin-left-sm">弃标</view>
                        </view>
                        <view class="flex margin-top-sm text-gray text-sm align-center">报名时间：
                            <text>2022-08-03</text>
                        </view>
                        <view class="flex margin-top-sm">
                            <view class="text-gray">保证金:
                                <text class="text-black">已缴纳</text>
                            </view>
                            <view class="text-gray margin-left-lg"> 投标文件:
                                <text class="text-black">已上传</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view v-for="item in enrollmentList" :key="item.user"
                      class="flex align-start margin-top ergodic whiteBoxShadow">
                    <view class="flex">
                        <u-checkbox
                            :customStyle="{marginBottom: '15px'}"
                            :name="item.user"
                            activeColor="red"
                            inactiveColor="black"
                            shape="circle"
                            class="padding-top-sm"
                        >
                        </u-checkbox>
                        <view class="flex align-start margin-left-sm">
<!--                            <view v-if="state==1" style="width: 60px;height: 60px;border-radius: 30px"-->
<!--                                  class="bg-gray padding-sm">-->
<!--                                <fxbImage width="100" height="80" src="/productDetails/Slice%201.png"-->
<!--                                          mode="aspectFill"></fxbImage>-->
<!--                            </view> -->
                            <view class="margin-left-sm">
                                <view class="flex align-center">
                                    <view class="text-bold">{{ item.user }}</view>
                                    <view class="margin-left-sm text-sm">{{ item.shop }}</view>
                                </view>
                                <view class="flex margin-top-sm text-gray text-sm align-center">报名时间：
                                    <text>{{ item.time }}</text>
                                </view>
                                <view class="flex margin-top-sm">
                                    <view class="text-gray">保证金:
                                        <text class="text-black">{{ item.bond }}</text>
                                    </view>
                                    <view class="text-gray margin-left-lg"> 投标文件:
                                        <text class="text-black">{{ item.file }}</text>
                                    </view>
                                </view>
                            </view>
                        </view>
                    </view>

                </view>
            </u-checkbox-group>
        </view>
        <view class="w100 bg-white foot padding flex justify-between">
            <view class="text-sm text-gray">
                <view>当前选择：3人</view>
                <view v-if="state==1">剩余名额：2人</view>
            </view>
            <view v-if="state==0" class="cu-btn bg-red text-white radius" style="width: 33%">退回保证金</view>
            <view v-if="state==1" @click="show=true" class="cu-btn bg-red text-white radius" style="width: 33%"> 确认选择</view>
        </view>
        <u-popup :show="show" @close="close" @open="open" mode="center">
            <view class="text-center" style="width: 450rpx">
                <view class="text-center margin-top-sm">
                    <view>确认选择</view>
                    <view class="margin-tb">您已选择中标人，是否确认</view>
                </view>
                <view class="w100 margin-top-sm flex align-center">
                    <view class="cu-btn bg-gray w50">取消</view>
                    <view class="text-white cu-btn bg-red w50" @click="show=false">确认选择</view>
                </view>
            </view>
        </u-popup>

    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image";

export default {
    name: "selectSuccessfulBidder",
    components: {
        fxbImage
    },
    data() {
        return {
            state: 0,
            show: false,
            radioValue: [],
            enrollmentList: [
                {
                    user: "王小刚",
                    shop: "贵州好酒选科技有限公司",
                    time: "2022-08-30",
                    bond: "已缴纳",
                    file: "已上传"
                },
                {
                    user: "王晓丫",
                    shop: "贵州好酒选科技有限公司",
                    time: "2022-08-30",
                    bond: "已缴纳",
                    file: "已上传"
                },
                {
                    user: "王小与",
                    shop: "贵州好酒选科技有限公司",
                    time: "2022-08-30",
                    bond: "已缴纳",
                    file: "已上传"
                },
                {
                    user: "王小都",
                    shop: "贵州好酒选科技有限公司",
                    time: "2022-08-30",
                    bond: "已缴纳",
                    file: "已上传"
                }
            ],

        };
    },
    methods: {
        close() {
            this.show = false;
        },
        open() {

        }
    },
    onLoad(option) {
        this.state = option.state;
    }
};
</script>

<style lang="scss" scoped>
.foot {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>