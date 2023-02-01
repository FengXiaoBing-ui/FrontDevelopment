<template>
  <view class="content">
    <u-navbar :border="false" :fixed="true" :autoBack="true" @rightClick="switchOrder"
              :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
              :safeAreaInsetTop="false">
      <view slot="left" class="u-nav-slot">
        <text style="font-size: 36rpx" class="cuIcon-back"></text>
      </view>
      <view slot="center" class="u-nav-slot">
        <view class="text-xl text-bold">{{ isAfterSales ? "我的招标" : "我的众筹" }}</view>
        <view style="width:750rpx" class="search bg-white">
          <view class="bg-white padding-lr">
            <view class="flex align-center margin-top-sm bg-gray" style="border-radius: 4px">
              <text class="cuIcon-search text-red"
                    style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
              <input
                  type="text"
                  placeholder-class="text-gray text-sm"
                  placeholder="请输入项目编号、名称进行搜索"
                  confirm-type="search"
              />
            </view>
            <!--产品列表导航-->
            <u-tabs :itemStyle="isAfterSales?'width:20%;height:88rpx;white-space:nowrap;':'width:33.34%;height:88rpx;white-space:nowrap;'"
                    activeStyle="font-size:32rpx;font-weight:bold"
                    inactiveStyle="color:gray;font-size:26rpx" lineColor="red" :list="tabList"

                    @click="tabSelect"></u-tabs>
          </view>
        </view>
      </view>
      <view slot="right" class="u-nav-slot">
        <text class="text-lg">{{ isAfterSales ? "我的众筹" : "我的招标" }}</text>
      </view>
    </u-navbar>

    <view>
      <view class="padding-sm contentBox"
            :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }">
        <view class="flex justify-between margin-bottom-sm">
          <view class="flex align-center" @click="shows = true">
            <view class="text-bold text-xl">9月</view>
            <view class="cuIcon-unfold" style="width: 20px;"></view>
          </view>
          <view @click="show = true" class="flex text-gray">
            <view class="cuIcon-filter" style="font-size: 16px"></view>
            <text>筛选·已选0</text>
          </view>
        </view>

        <view class="margin-top-sm padding-lr-xs" @click="goTo(item.status)" v-for="(item,index) in currentOrderList" v-if="isAfterSales==true">
          <view class="bg-white padding-lr-sm padding-tb" style="border: 1px solid rgba(229,77,66,0.2)">
            <view class="flex justify-between align-start">
              <view>
                <view class="text-center"
                      :class="`${item.status===1?'bg-blue':item.status===2?'bg-cyan':item.status===3||item.status===4||item.status===5?'bg-green':'bg-red'}`"
                      style="width: 100rpx;height: 40rpx;border-radius: 10rpx 10rpx 0 10rpx">
                  {{transStatus(item.status)}}</view>
              </view>
              <view>
                <view class="text-bold text-lg">东方国宾·尊致酒条码招商</view>
                <view class="text-gray text-df margin-top-xs">项目编号：1546545142312</view>
                <view class="margin-top-xs flex align-center">
                  <view class="cu-tag light bg-orange sm">平台托管</view>
                  <view class="margin-left-sm cu-tag light bg-orange sm">收益率:16.5%~22.5%</view>
                </view>
              </view>
              <view>
                <image src="http://124.220.219.72:8084/static/productDetails/Slice%201.png" style="width: 125rpx;height: 125rpx;border-radius: 10rpx"></image>
              </view>
            </view>

            <view class="padding-lr-sm padding-tb margin-top-sm text-sm" style=" background-color: #F7F7FB">
              <view class="flex align-center">
                <view class="w50 flex align-center">
                  <view class="cuIcon-goodsfavor"></view>
                  <view class="text-gray margin-left-xs" style="width: 116rpx">商品总量:</view>
                  <view class="margin-left-xs">21000瓶</view>
                </view>
                <view class="w50 flex align-center">
                  <view class="cuIcon-recharge"></view>
                  <view class="text-gray margin-left-xs" style="width: 116rpx">商品总额:</view>
                  <view class="margin-left-xs">5000000元</view>
                </view>
              </view>
              <view class="flex align-center margin-top-sm">
                <view class="w50 flex align-center">
                  <view class="cuIcon-sponsor"></view>
                  <view class="text-gray margin-left-xs" style="width: 116rpx">保证金:</view>
                  <view class="margin-left-xs">50000元</view>
                </view>
                <view class="w50 flex align-center">
                  <view class="cuIcon-peoplelist"></view>
                  <view class="text-gray margin-left-xs" style="width: 116rpx">参与人数:</view>
                  <view class="margin-left-xs">10人</view>
                </view>
              </view>
            </view>

            <view class="margin-top">
              <view class="text-lg" v-if="item.status==1||item.status==2">招标天数：15天</view>
              <view v-if="item.status==3||item.status==4">
                <text class="text-green">公告类型：中标公告</text>
                <text class="text-green margin-lr-xs" v-if="item.status==3">/</text>
                <text class="text-red" v-if="item.status==3">废标公告</text>
              </view>
              <view class="flex justify-between align-center margin-top">
                <view style="border: 1px solid rgba(229,77,66,0.2);width: 202rpx;height: 150rpx" class="text-center">
                  <view class="text-xl margin-top-xs">10人</view>
                  <view class="margin-top">招标人数</view>
                </view>
                <view style="border: 1px solid rgba(229,77,66,0.2);width: 202rpx;height: 150rpx" class="text-center">
                  <view class="text-xl margin-top-xs text-orange">10人</view>
                  <view class="margin-top">报名人数</view>
                </view>
                <view style="border: 1px solid rgba(229,77,66,0.2);width: 202rpx;height: 150rpx" class="text-center">
                  <view class="text-xl margin-top-xs text-red">9人</view>
                  <view class="margin-top">满足人数</view>
                </view>
              </view>
            </view>
          </view>
        </view>

        <view class="margin-top-sm padding-lr-xs"
              v-for="(item,index) in currentOrderLists" @click="goTo(item.status)" v-if="isAfterSales==false">
          <view class="bg-white padding-lr-sm padding-tb" style="border: 1px solid rgba(229,77,66,0.2)">
            <view class="flex justify-between align-start">
              <view>
                <view class="text-center"
                      :class="`${item.status===1?'bg-blue':'bg-green'}`"
                      style="width: 100rpx;height: 40rpx;border-radius: 10rpx 10rpx 0 10rpx">
                  {{transStatusMore(item.status)}}</view>
              </view>
              <view>
                <view class="text-bold text-lg">东方国宾·尊致酒条码招商</view>
                <view class="text-gray text-df margin-top-xs">项目编号：1546545142312</view>
                <view class="margin-top-xs flex align-center">
                  <view class="cu-tag light bg-orange sm">平台托管</view>
                  <view class="margin-left-sm cu-tag light bg-orange sm">收益率:16.5%~22.5%</view>
                </view>
              </view>
              <view>
                <image src="http://124.220.219.72:8084/static/productDetails/Slice%201.png" style="width: 125rpx;height: 125rpx;border-radius: 10rpx"></image>
              </view>
            </view>

            <view class="padding-lr-sm padding-tb margin-top-sm text-sm" style=" background-color: #F7F7FB">
              <view class="flex align-center">
                <view class="w50 flex align-center">
                  <view class="cuIcon-goodsfavor"></view>
                  <view class="text-gray margin-left-xs" style="width: 116rpx">商品总量:</view>
                  <view class="margin-left-xs">21000瓶</view>
                </view>
                <view class="w50 flex align-center">
                  <view class="cuIcon-recharge"></view>
                  <view class="text-gray margin-left-xs" style="width: 116rpx">商品总额:</view>
                  <view class="margin-left-xs">5000000元</view>
                </view>
              </view>
              <view class="flex align-center margin-top-sm">
                <view class="w50 flex align-center">
                  <view class="cuIcon-sponsor"></view>
                  <view class="text-gray margin-left-xs" style="width: 116rpx">保证金:</view>
                  <view class="margin-left-xs">50000元</view>
                </view>
                <view class="w50 flex align-center">
                  <view class="cuIcon-peoplelist"></view>
                  <view class="text-gray margin-left-xs" style="width: 116rpx">参与人数:</view>
                  <view class="margin-left-xs">10人</view>
                </view>
              </view>
            </view>

            <view class="margin-top">
              <view class="text-lg">剩余天数：15天23时12分</view>

              <view class="flex align-center">
                <fxbSlider :progress="progress"></fxbSlider>
              </view>

              <view class="flex justify-between align-center margin-top">
                <view class="flex align-center">
                  <view class="cuIcon-my"></view>
                  <view class="margin-lr-xs">报名人数：</view>
                  <view class="text-orange">12人</view>
                </view>
                <view class="flex align-center">
                  <view class="cuIcon-recharge"></view>
                  <view class="margin-lr-xs">已筹金额：</view>
                  <view class="text-red">¥2500000.00</view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <u-popup :show="show" mode="right" @close="close" @open="open">
      <view class="scrollViewBox"
            :style="'padding-top: ' + (CustomBar) + 'px;transform:rotate(360deg);'">
        <scroll-view class="scrollView" scroll-y="true"
                     style="{ '--ScreenHeight': (ScreenHeight-(CustomBar+StatusBar)) + 'px' }">
          <ScreenAlcohol title="按时间" @getInfo="getInfo" :alcoholList="dateList"></ScreenAlcohol>
        </scroll-view>
        <view class="flex align-center justify-around">
          <button style="width: 45%" class="cu-btn u-border bg-white radius margin-right-sm">重置</button>
          <button style="width: 45%" class="cu-btn bg-red radius" @click="close">确定</button>
        </view>
      </view>
    </u-popup>
    <u-calendar :show="shows" :mode="mode" @confirm="confirm" :closeOnClickOverlay="true" @close="closes">

    </u-calendar>
  </view>
</template>

<script>
import ScreenAlcohol from "/src/pages/agent/components/fxb-screen-alcohol";
import fxbSlider from "/src/components/fxb/fxb-slider"
export default {
  name: "tenderIndex",
  components: { ScreenAlcohol,fxbSlider },
  data() {
    return {
      progress:50,
      dateList: [
        "1个月内", "3个月内", "6个月内", "今年", "2021年", "2020年", "2019年", "2018年", "2017年"
      ],
      changes:true,
      shows: false,
      mode: 'range',
      isAfterSales: true,
      show: false,
      currentOrderLists: [],
      currentOrderList: [],
      tabList: [
        {
          name: "全部"
        },
        {
          name: "进行中"
        },
        {
          name: "评标中"
        },
        {
          name: "已公布"
        },
        {
          name: "已结束"
        }
      ],
      tenderList:[
        {
          status:1,
        },
        {
          status:2,
        },
        {
          status:3,
        },
        {
          status:4,
        },
        {
          status:5,
        },
        {
          status:6,
        },
        {
          status:7,
        },
        {
          status:8,
        },
      ],
      tenderLists:[
        {
          status:1,
        },
        {
          status:2,
        },
      ],
    };
  },

  watch:{
    isAfterSales() {
      this.tabIndex = 0;
      if (this.isAfterSales) {
        this.tabList = [
          {
            name: "全部"
          },
          {
            name: "进行中"
          },
          {
            name: "评标中"
          },
          {
            name: "已公布"
          },
          {
            name: "已结束"
          }
        ];
      } else {
        this.tabList = [
          {
            name: "全部"
          },
          {
            name: "众筹中"
          },
          {
            name: "已结束"
          },
        ];
      }
    }
  },
  onLoad(options) {
    this.currentOrderList = this.tenderList;
    this.currentOrderLists = this.tenderLists;
    if (options.isAfterSales) {
      this.isAfterSales = options.isAfterSales;
    }
  },
  methods: {
    tabSelect(e) {
      this.tabIndex = e.index;
      if(this.isAfterSales){
        this.tempArr = [
          "item",
          "item.status === 1",
          "item.status === 2",
          "item.status === 3||item.status === 4||item.status === 5",
          "item.status === 6||item.status === 7||item.status === 8"];
        this.currentOrderList = this.tenderList.filter(item => {
          return eval(this.tempArr[e.index]);

        });
      }else {
        this.tempArr = [
          "item",
          "item.status === 1",
          "item.status === 2"];
        this.currentOrderLists = this.tenderLists.filter(item => {
          return eval(this.tempArr[e.index]);

        });
      }
    },
    transStatus(status) {
      const tempArr = ["进行中", "评标中","已公布","已公布","已公布", "已结束", "已结束", "已结束"];
      return tempArr[status - 1];
    },
    transStatusMore(status) {
      const tempArr = ["众筹中", "已结束"];
      return tempArr[status - 1];
    },
    switchOrder() {
      this.isAfterSales = !this.isAfterSales;
      this.changes=false
      this.$nextTick(()=>{
        this.changes=true;
      });
    },
    confirm(e) {
      console.log(e);
      this.closes();
    },
    getInfo(e) {
      this.msg = e;
    },
    open() {
      // console.log('open');
      this.show = true;
    },
    close() {
      this.show = false;
      // console.log('close');
    },
    closes(){
      this.shows = false;
    },
    goTo(status){
      if(this.isAfterSales){
        uni.navigateTo({
          url: "/pages/admin/tender/tenderStatus?status=" + status
        });
      }else {
        uni.navigateTo({
          url: "/pages/admin/tender/crowdfundingDetails?status=" + status
        });
      }
    },
  },
};
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
  top: calc(var(--StatusBar) + 250rpx);
  padding-bottom: 40rpx;
}

.scrollViewBox {
  width: 600rpx;
  box-sizing: border-box;

  .scrollView {
    padding-bottom: 104rpx;
  }

  .botBtn {
    width: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
  }
}
</style>