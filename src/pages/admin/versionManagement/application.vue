<template>
  <view>
    <u-navbar :border="false" :fixed="true" :autoBack="true"
              :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
              :safeAreaInsetTop="false">
      <view slot="left" class="u-nav-slot">
        <text style="font-size: 36rpx" class="cuIcon-back"></text>
      </view>
      <view slot="center" class="u-nav-slot">
        <view class="text-xl">应用市场</view>
        <view style="width:750rpx" class="search bg-white">
          <view class="bg-white margin-top">
            <!--产品列表导航-->
            <u-tabs itemStyle="height:75rpx;white-space:nowrap;"
                    lineWidth="60rpx"
                    lineHeight="10rpx"
                    :scrollable="false"
                    activeStyle="font-size:32rpx;color:#E54D42"
                    inactiveStyle="color:gray;font-size:31rpx" lineColor="#E54D42" :list="tabList"
            ></u-tabs>
            <!--                        <view class="flex justify-end align-center padding-tb-sm text-gray">-->
            <!--                            <view @click="show = true" class="flex">-->
            <!--                                <text>时间范围筛选</text>-->
            <!--                                <text style="font-size: 32rpx" class="cuIcon-triangledownfill"></text>-->
            <!--                            </view>-->
            <!--                            &lt;!&ndash;                            <text class="cuIcon-triangleupfill"></text>&ndash;&gt;-->
            <!--                        </view>-->
          </view>
        </view>
      </view>
      <view slot="right" class="u-nav-slot">
        <text class="text-df" style="color: #777777" @click="customized()">我要定制</text>
      </view>
    </u-navbar>
    <view class="contentBox" :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }">
      <view class="margin-tb">
        <image src="./gallery/appPicture.png" class="appImage"></image>
      </view>
      <view style="background-color: #FFE6D2;border-radius: 20rpx" class="padding-bottom-xl padding-top-xs">
        <view class="padding-lr-sm padding-top-sm" v-for="(item,index) in appFunction">
          <view class="flex justify-between padding-lr-sm padding-tb align-center" style="background-color: #FFF6EF;border-radius: 20rpx">
            <view class="flex align-center">
              <view class="bg-white" style="width: 110rpx;height: 110rpx"></view>
              <view class="margin-left-sm text-bold">
                <view>{{ item.functionName }}</view>
                <view class="text-gray margin-top-sm">{{item.functionDescription}}</view>
              </view>
            </view>
            <view>
              <button class="cu-btn bg-orange margin-right-sm" style="height: 54rpx;font-size: 24rpx" @click="toFunction">功能详情</button>
              <button class="cu-btn bg-red" style="height: 54rpx;font-size: 24rpx" @click="toOpen">我要开通</button>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import CopyButton from "../../../components/common/copyButton";
export default {
  name: "application",
  components: {CopyButton},
  data(){
    return{
      tabList: [
        { name: "推荐" },
        { name: "财务工具" },
        { name: "库存工具" },
        { name: "进销存" },
        { name: "公司管理" }],
      appFunction:[
        {
          functionName: '财务功能',
          functionDescription: "财务功能说明",
        },
        {
          functionName: '财务功能',
          functionDescription: "财务功能说明",
        },
        {
          functionName: '财务功能',
          functionDescription: "财务功能说明",
        },
        {
          functionName: '财务功能',
          functionDescription: "财务功能说明",
        },
        {
          functionName: '财务功能',
          functionDescription: "财务功能说明",
        }
      ]
    }
  },
  methods:{
    toFunction(){
      uni.navigateTo({
        url:"/pages/admin/versionManagement/functionDisplay"
      })
    },
    toOpen(){
      uni.navigateTo({
        url:"/pages/admin/versionManagement/adminIstration"
      })
    },
    customized(){
      uni.navigateTo({
        url:"/pages/admin/versionManagement/customized"
      })
    }
  }
}
</script>

<style lang="scss" scoped>

/deep/ .u-navbar {
.u-navbar__content {
  height: var(--CustomBar) !important;
  padding-top: var(--StatusBar);
  border-bottom: 0;

.u-navbar__content__left,
.u-navbar__content__right {
  margin-top: var(--StatusBar);
    }
  }
}
.search {
  position: fixed;
  width: 100%;
  top: var(--CustomBar-1) !important;
  left: 0;
}
.appImage{
  width: 100%;
  height: 270rpx;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.contentBox {
  position: relative;
  top: calc(var(--StatusBar) + 160rpx);
  padding-bottom: 40rpx;
}
</style>