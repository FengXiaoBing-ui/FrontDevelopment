<template>
    <view>
        <view class="whiteBoxShadow">
            <boxTitle title="项目概况"></boxTitle>
            <view style="line-height: 48rpx;text-indent: 2em">这是招标信息的项目概况，这是招标信息的项目概况招标信息的项目概况这是，招标信息的项目概况这是招标信息的项目概况这是招标信息的项目概况这是。招标信息的项这是招标信息的，项目概况这是招标信息的项目概况目概况。</view>
        </view>
        <view class="whiteBoxShadow margin-top-sm">
            <boxTitle title="项目基本信息"></boxTitle>
            <view class="flex align-center justify-between">
                <view class="text-gray">项目名称</view>
                <view class="text-black">东方国宾·尊致酒条码招商项目</view>
            </view>
            <view class="flex align-center justify-between margin-top-sm">
                <view class="text-gray">项目编号</view>
                <view class="text-black">156465451231</view>
            </view>
            <view v-if="title===true">
              <view class="flex align-center justify-between margin-top-sm">
                <view class="text-gray">众筹时长</view>
                <view class="text-orange">30日</view>
              </view>
              <view class="flex align-center justify-between margin-top-sm">
                <view class="text-gray">众筹人数</view>
                <view class="text-black">不限</view>
              </view>
            </view>
            <view v-if="title===false">
              <view class="flex align-center justify-between margin-top-sm">
                <view class="text-gray">招标时长</view>
                <view class="text-orange">7日</view>
              </view>
              <view class="flex align-center justify-between margin-top-sm">
                <view class="text-gray">招标人数</view>
                <view class="text-black">10人</view>
              </view>
              <view class="flex align-center justify-between margin-top-sm">
                <view class="text-gray">保证金</view>
                <view class="text-red">50000元</view>
              </view>
              <view class="flex align-center justify-between margin-top-sm">
                <view class="text-gray">是否需要投标文件</view>
                <view class="text-red">是</view>
              </view>
            </view>
        </view>
        <view class="whiteBoxShadow margin-top-sm">
            <boxTitle title="合同总额"></boxTitle>
            <view class="flex align-center justify-between">
                <view class="text-gray">商品包装</view>
                <view class="text-black">已包装</view>
            </view>
            <view class="flex align-center justify-between margin-top-sm">
                <view class="text-gray">商品数量</view>
                <view class="text-black">21000瓶</view>
            </view>
            <view class="flex align-center justify-between margin-top-sm">
                <view class="text-gray">商品净含量</view>
                <view class="text-black">500ml/瓶</view>
            </view>
            <view class="flex align-center justify-between margin-top-sm">
                <view class="text-gray">商品总额</view>
                <view class="text-red">¥5000000.00</view>
            </view>
            <view class="flex align-center justify-between margin-top-sm">
                <view class="text-gray">最低众筹金额</view>
                <view class="text-red">¥50000.00</view>
            </view>
        </view>
        <view class="whiteBoxShadow margin-top-sm">
            <boxTitle title="合作协议文件"></boxTitle>
            <view class="flex align-center justify-between">
                <view class="text-blue">东方国宾尊致条码招商政策.wold</view>
                <text class="text-orange"> <text class="cuIcon-down"></text>下载 </text>
            </view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";

export default {
    name: "projectIntroduction",
    components:{
        boxTitle
    },
    props:{
      title:{
        type:Boolean,
      }
    }
};
</script>

<style scoped>

</style>