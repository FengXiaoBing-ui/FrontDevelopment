<template>
    <view class="content">
        <u-navbar
            :border="false"
            :fixed="true"
            :title="title"
            :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
            :safeAreaInsetTop="false"
            :autoBack="true"
        >
        </u-navbar>
        <view class="padding" :style="`margin-top:${CustomBar}px`">
            <view class="whiteBoxShadow">
                <view class="flex align-center">
                    <image style="width: 100rpx;height: 100rpx;" :src="require('/src/static/01.jpg')"
                           mode="aspectFill"></image>
                    <view style="height: 100rpx;" class="margin-left-sm flex flex-direction justify-between">
                        <view class="text-bold text-lg">数据分析</view>
                        <view class="text-red">￥32.00/月</view>
                    </view>
                </view>
                <view class="margin-top-sm">
                    数据分析将销售、采购数据进行统计分析帮助代理商了解销量情况和根据数据结果及时调整采购、销售方向。
                </view>
            </view>
            <view class="whiteBoxShadow margin-top">
                <boxTitle title="选择套餐"></boxTitle>
                <view @click="setMeal(index)"
                      class="flex align-center justify-between u-border radius padding-sm margin-top-sm"
                      :style="activeIndex===index?'border-color:red !important;':''" v-for="(item,index) in list"
                      :key="index">
                    <view class="flex align-center">
                        <image style="width: 100rpx;height: 100rpx;" :src="require('/src/static/01.jpg')"
                               mode="aspectFill"></image>
                        <view style="height: 100rpx;" class="margin-left-sm flex flex-direction justify-between">
                            <view class="text-bold text-lg">{{ item.title }}</view>
                            <view>{{ item.text }}</view>
                        </view>
                    </view>
                    <view v-if="item.price" class="text-red">￥
                        <text class="text-xxl">{{ item.price }}.</text>
                        00
                    </view>
                </view>
            </view>
        </view>
        <view @click="choicePay" class="botBtn bg-white padding-sm flex justify-between">
            <view>
                <view class="flex">
                    <text>合计：</text>
                    <text class="text-red">￥180.00</text>
                </view>
                <view class="flex text-sm text-gray">生效日期：2022-08-09至2023-03-08</view>
            </view>
            <button class="cu-btn bg-red radius">确认开通</button>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";

export default {
    name: "functionCharge",
    components: {
        boxTitle
    },
    data() {
        return {
            activeIndex: 0,
            title: "",
            list: [
                {
                    title: "免费试用",
                    text: "前期免费试用三个月"
                },
                {
                    title: "半年套餐",
                    text: "优惠后合￥28.00/月",
                    price: "180"
                },
                {
                    title: "年套餐",
                    text: "优惠后合￥28.00/月",
                    price: "320"
                }
            ]
        };
    },
    onLoad(options) {
        this.title = options.appName;
    },
    methods: {
        choicePay(){
          uni.navigateTo({
              url: "pages/admin/functionChargePay"
          })
        },
        setMeal(index) {
            this.activeIndex = index;
        }
    }
};
</script>

<style lang="scss" scoped>
.botBtn{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>