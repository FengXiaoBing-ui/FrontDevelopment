<template>
  <view>
    <u-navbar :border="false" :fixed="true" :autoBack="true"
              :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
              :safeAreaInsetTop="false">
      <view slot="left" class="u-nav-slot">
        <text style="font-size: 36rpx" class="cuIcon-back"></text>
      </view>
      <view slot="center" class="u-nav-slot">
        <!--                <view class="text-lg">补货申请</view>-->
        <u-search style="width: 500rpx" placeholder="输入代理商名称、手机号进行搜索" :showAction="false"></u-search>
        <view style="width:750rpx" class="search bg-white">
          <view class="bg-white padding-lr padding-tb-sm">
            <!--                        &lt;!&ndash;产品列表导航&ndash;&gt;-->
            <!--                        <u-tabs itemStyle="height:88rpx;white-space:nowrap;"-->
            <!--                                activeStyle="font-weight:bold"-->
            <!--                                :scrollable="false"-->
            <!--                                inactiveStyle="color:gray;" lineColor="#E54D42" :list="activityList"-->
            <!--                                @click="tabSelect"></u-tabs>-->
            <view class="flex justify-between align-center margin-top-sm">
              <view v-for="(item,index) in activityList" :key="index+'a'" @click="tabSelect(index)" class="padding-lr-sm flex flex-direction align-center">
                <view style="width: 50rpx;height: 50rpx" class="t-icon" :class="'t-icon-'+item.icon"></view>
                <view class="margin-top-xs" :class="statusIndex===index?'text-red':''">{{ item.name }}</view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view slot="right" class="u-nav-slot text-gray">
        <text class="cuIcon-filter"></text>
        <text>筛选</text>
      </view>
    </u-navbar>

    <view class="wrap">
      <view class="contentBox margin-lr-sm" style="border-radius: 10rpx">
        <view class="bg-white padding-lr-sm padding-top" v-for="(item,index) in contractList" :class="index==0?'':'margin-top-sm'" @click="goToRuturn(item.status)">
          <view>{{item.goodsShipped}}</view>
          <view class="flex justify-between align-center padding-tb" style="border-bottom: 1px solid #F1F1F1">
            <view class="text-gray text-sm">合同编号：{{item.oddNumbers}}</view>
            <view class="cu-btn bg-orange text-white sm" style="border-radius: 6rpx">合同详情</view>
          </view>
          <view class="margin-top padding-bottom" style="border-bottom: 1px solid #F1F1F1">
            <view class="flex justify-between align-center">
              <view>申请类型</view>
              <view>{{item.applicationType}}1</view>
            </view>
            <view class="flex justify-between align-center margin-top-sm">
              <view>当前库存剩余</view>
              <view>{{item.surplus}}瓶</view>
            </view>
            <view class="flex justify-between align-center margin-top-sm">
              <view>剩余合同商品</view>
              <view>{{item.surplusGoods}}瓶</view>
            </view>
            <view class="flex justify-between align-center margin-top-sm">
              <view>换货商品</view>
              <view>{{item.exchangeCommodity}}</view>
            </view>
          </view>
          <view class="margin-top padding-bottom">
            <view class="flex justify-between align-center">
              <view class="text-sm text-gray">申请时间:2022-08-30  12:23:23</view>
              <view :class="{'line-orange':activityList[item.status].name=='待审核',
                                    'line-red':activityList[item.status].name=='未通过',
                                    'line-blue':activityList[item.status].name=='待支付',
                                    'line-green':activityList[item.status].name=='已完成',}">{{activityList[item.status].name}}</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "returnList",
  data() {
    return {
      contractList: [],
      statusIndex: 0,
      activityList: [
        {
          name: "全部",
          icon:"quanbu"
        },
        {
          name: "待审核",
          icon:"jinhangzhong1"
        },
        {
          name:"未通过",
          icon:"weitongguo1"
        },
        {
          name: "待支付",
          icon:"daizhifu"
        },
        {
          name:"已完成",
          icon:"yiwancheng"
        },
      ],
    };
  },
  onShow() {
    this.getProductList();
  },
  methods:{
    tabSelect(e) {
      this.statusIndex = e;
      this.getProductList(Math.ceil(Math.random() * 6));
    },
    getProductList(count = 4) {
      let num = 4
      this.contractList = [];
      for (let i = 0; i < count; i++) {
        this.contractList.push({
          oddNumbers: 230892434,
          goodsShipped: "东方国宾·尊致53°酒500ml酱香型合同代理合同",
          applicationType: '换货',
          surplusGoods: 1200,
          surplus: 100,
          exchangeCommodity: '东方国宾·工匠酒',
          status: this.statusIndex==0?(Math.floor(Math.random() * num)+1):this.statusIndex
        });
      }
    },
    goToRuturn(status){
      uni.navigateTo({
        url: "/pages/admin/contractList/contractList?status=" + (status-1)
      });
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
.contentBox {
  position: relative;
  top: calc(var(--status-bar-height) + 250rpx);
}
</style>