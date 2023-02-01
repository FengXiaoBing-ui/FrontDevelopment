<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="选择报名人" :autoBack="true" rightText="全选" @rightClick="allSelect"
                  :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"></u-navbar>
        <view class="" :style="'margin-top:'+CustomBar+'px'">
            <view class="whiteBoxShadow">
                <view class="bg-red light radius padding-sm">
                    <text class="text-lg text-bold">温馨提示：</text>
                    <view>弃标用户违反招投标相关程序，根据翻绿规定没收其保证金，因
                        此不可选择弃标人退回保证金
                    </view>
                </view>
            </view>
            <u-checkbox-group placement="column">
                <view v-for="item in 3" :key="item" class="flex margin-top-sm padding bg-white">
                    <u-checkbox activeColor="red" shape="circle" label="" :name="item"></u-checkbox>
                    <u-avatar size="50" class="flex-sub margin-left-sm" text="t"></u-avatar>
                    <view class="flex flex-treble flex-direction margin-left-sm">
                        <view class="flex align-center justify-between">
                            <view class="flex align-center">
                                <text class="text-lg text-bold">王晓刚</text>
                                <view class="bg-blue light margin-left-sm"
                                      style="border-radius: 10px 0 10px 0;padding: 2px 4px">贵州守云间科技有限公司
                                </view>
                            </view>
                            <text class="text-red">弃标</text>
                        </view>
                        <view class="flex align-center justify-between margin-top-sm">
                            <view class="flex align-center">
                                <text class="text-black">保证金：</text>
                                <text class="text-red">已缴纳</text>
                            </view>
                            <view class="flex align-center">
                                <text class="text-black">投标文件：</text>
                                <text class="text-orange">已上传</text>
                            </view>
                        </view>
                    </view>
                </view>
            </u-checkbox-group>
        </view>

        <u-popup :show="show" mode="bottom" @close="close" @open="open">
            <view class="padding-sm bg-white" style="padding-bottom: 140rpx">
                <view class="grid col-3 padding-bottom">
                    <view></view>
                    <view class="text-center text-lg">已选中标人</view>
                    <view class="text-gray text-right cuIcon-close" style="font-size: 20px"></view>
                </view>
                <scroll-view style="width: 100%;height: 500rpx" scroll-y>
                    <view v-for="item in 3" :key="item" class="flex padding-lr-sm padding-tb u-border-bottom bg-white">
                        <u-avatar size="50" class="flex-sub" text="t"></u-avatar>
                        <view class="flex flex-treble flex-direction margin-left-sm">
                            <view class="flex align-center justify-between">
                                <view class="flex align-center">
                                    <text class="text-lg text-bold">王晓刚</text>
                                    <view class="bg-blue light margin-left-sm"
                                          style="border-radius: 10px 0 10px 0;padding: 2px 4px">贵州守云间科技有限公司
                                    </view>
                                </view>
                                <text class="text-red">弃标</text>
                            </view>
                            <view class="flex align-center justify-between margin-top-sm">
                                <view class="flex align-center">
                                    <text class="text-black">保证金：</text>
                                    <text class="text-red">已缴纳</text>
                                </view>
                                <view class="flex align-center">
                                    <text class="text-black">投标文件：</text>
                                    <text class="text-orange">已上传</text>
                                </view>
                            </view>
                        </view>
                    </view>
                </scroll-view>
            </view>
        </u-popup>

        <view @click="show = !show"
              class="botBtn bg-white padding-xs w100 flex justify-between align-center">
            <view>
                <view>当前已选：
                    <text class="text-red">3人</text>
                </view>
                <view class="text-gray">可选人数：
                    <text class="text-black">26人</text>
                </view>
            </view>
            <button @click.stop="sure" class="cu-btn bg-red radius">确认选择</button>
        </view>
    </view>
</template>

<script>
export default {
    name: "selectEnroll",
    data() {
        return {
            show: false,
            showIndex: 0
        };
    },
    methods: {
        allSelect() {

        },
        close() {
            this.show = false;
        },
        open() {
            this.show = true;
        },
        sure() {
        }
    }
};
</script>

<style lang="scss" scoped>
.botBtn {
    position: fixed;
    z-index: 99999999999;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>