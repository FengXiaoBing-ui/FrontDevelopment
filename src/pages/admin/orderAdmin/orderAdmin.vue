<template>
<view class="content">
  <u-navbar :border="false" :fixed="true" :autoBack="true" @rightClick="switchOrder"
            :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
            :safeAreaInsetTop="false">
    <view slot="left" class="u-nav-slot">
      <text style="font-size: 36rpx" class="cuIcon-back"></text>
    </view>
    <view slot="center" class="u-nav-slot">
      <view class="text-xl text-bold">{{ isAfterSales ? "订单管理" : "售后" }}</view>
      <view style="width:750rpx" class="search bg-white">
        <view class="bg-white padding-lr">
          <view class="flex align-center margin-top-sm bg-gray" style="border-radius: 4px">
            <text class="cuIcon-search text-red"
                  style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
            <input
                type="text"
                placeholder-class="text-gray text-sm"
                placeholder="请输入订单编号、商品名称进行搜索"
                confirm-type="search"
            />
          </view>
          <!--产品列表导航-->
          <u-tabs itemStyle="width:20%;height:88rpx;white-space:nowrap;"
                  activeStyle="font-size:32rpx;font-weight:bold"
                  inactiveStyle="color:gray;font-size:26rpx" lineColor="red" :list="tabList"

                  @click="tabSelect"></u-tabs>
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
      <text class="text-lg">{{ isAfterSales ? "售后" : "订单管理" }}</text>
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



      <view class="whiteBoxShadow margin-tb-sm" v-if="isAfterSales==true" v-for="item in currentOrderList" :key="item.oddNumbers+tempArr.length" @click="gotoPath(item.status)">
        <view class="flex justify-between">
          <view class="flex align-center">
            <view class="cuIcon-titles text-red"></view>
            <view class="text-bold text-xl">订单单号：{{ item.oddNumbers }}</view>
          </view>
          <view :class="`${item.status===1?'text-orange':item.status===2||item.status===3||item.status===4||item.status===5?'text-cyan':item.status===6||item.status===7||item.status===8||item.status===9?'text-blue':'text-green'}`">
            {{ transStatus(item.status) }}
          </view>
        </view>


        <view class="u-border-bottom margin-tb-sm"></view>
        <view class="flex basic-xs">
          <img src="http://124.220.219.72:8084/static/productDetails/Slice%201.png">
          <view class="padding" style="width:285px">
            <view class="text-cut text-lg" style="width:250px">{{item.goodsShipped}}</view>
            <view class="text-df text-grey">数量：{{item.shipmentQuantity}}</view>
            <view class="flex justify-between">
              <text class="text-df text-grey">代理价：{{item.agencyPrice}}</text>
              <text class="text-price text-xl">518</text>
            </view>
          </view>
        </view>
        <view class="u-border-bottom margin-tb-sm"></view>
        <view class="text-xl">
          <text>金额总计:</text>
          <text class="text-price text-xxl text-red padding"></text>
          <text class="text-red">2350.00</text>
        </view>
      </view>


      <view class="whiteBoxShadow margin-tb-sm" v-if="isAfterSales==false" v-for="item in currentOrderList" :key="item.oddNumber" @click="gotoPaths(item.status)">
        <view class="flex justify-between">
          <view class="flex align-center">
            <view class="cuIcon-titles text-red"></view>
            <view class="text-bold text-xl">订单单号：{{ item.oddNumbers }}</view>
          </view>
          <view :class="`${item.status===1?'text-orange':item.status===2?'text-cyan':item.status===3||item.status===4||item.status===5||item.status===6||item.status===7?'text-blue':'text-green'}`">
            {{ transStatust(item.status) }}
          </view>
        </view>


        <view class="u-border-bottom margin-tb-sm"></view>
        <view class="flex basic-xs">
          <img src="http://124.220.219.72:8084/static/productDetails/Slice%201.png">
          <view class="padding" style="width:285px">
            <view class="text-cut text-lg" style="width:250px">{{item.goodsShipped}}</view>
            <view class="text-df text-grey">数量：{{item.shipmentQuantity}}</view>
            <view class="flex justify-between">
              <text class="text-df text-grey">代理价：{{item.agencyPrice}}</text>
              <text class="text-price text-xl">518</text>
            </view>
          </view>
        </view>
        <view class="u-border-bottom margin-tb-sm"></view>
        <view class="text-xl">
          <text>金额总计:</text>
          <text class="text-price text-xxl text-red padding"></text>
          <text class="text-red">2350.00</text>
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
      <!--                <view class="botBtn bg-white padding-sm flex align-center justify-between">-->
      <!--                    <text>已选(1)</text>-->
      <!--                    <view class="flex align-center">-->
      <!--                        <button class="cu-btn u-border bg-white radius margin-right-sm">清空</button>-->
      <!--                        <button class="cu-btn bg-red radius" @click="close">确定</button>-->
      <!--                    </view>-->
      <!--                </view>-->
    </view>
  </u-popup>
  <u-calendar :show="shows" :mode="mode" @confirm="confirm" :closeOnClickOverlay="true" @close="closes">

  </u-calendar>
</view>
</template>

<script>
import ScreenAlcohol from "/src/pages/agent/components/fxb-screen-alcohol";


export default{
  components: {
    ScreenAlcohol,
  },
  data(){
    return{
      changes:true,
      shows: false,
      mode: 'range',
      isAfterSales: true,
      show: false,
      dateList: [
        "1个月内", "3个月内", "6个月内", "今年", "2021年", "2020年", "2019年", "2018年", "2017年"
      ],
      tabList: [
        { name: "全部" },
        { name: "待付款" },
        { name: "待发货" },
        { name: "待收货" },
        { name: "已完成" }],
      currentOrderList: [],
      orderList: [
        {
          status: 1,
          oddNumbers: 2309272534,
          oddNumber:5251515,
          goodsShipped: "东方国宾·尊致酒酱香型白酒",
          shipmentQuantity: 2,
          agencyPrice: 259.00
        },
        {
          status: 2,
          oddNumbers: 230923234,
          oddNumber:52515152,
          goodsShipped: "东方国宾·尊致酒酱香型白酒",
          shipmentQuantity: 2,
          agencyPrice: 259.00
        },
        {
          status: 3,
          oddNumbers: 2308973434,
          oddNumber:52515153,
          goodsShipped: "东方国宾·尊致酒酱香型白酒",
          shipmentQuantity: 2,
          agencyPrice: 259.00
        },
        {
          status: 4,
          oddNumbers: 230892434,
          oddNumber:52515155,
          goodsShipped: "东方国宾·尊致酒酱香型白酒",
          shipmentQuantity: 2,
          agencyPrice: 259.00
        },
        {
          status: 5,
          oddNumbers: 2308924446,
          oddNumber:52515156,
          goodsShipped: "东方国宾·尊致酒酱香型白酒",
          shipmentQuantity: 2,
          agencyPrice: 259.00
        },
        {
          status: 6,
          oddNumbers: 2308924545,
          oddNumber:52515157,
          goodsShipped: "东方国宾·尊致酒酱香型白酒",
          shipmentQuantity: 2,
          agencyPrice: 259.00
        },
        {
          status: 7,
          oddNumbers: 2308924544,
          oddNumber:52515158,
          goodsShipped: "东方国宾·尊致酒酱香型白酒",
          shipmentQuantity: 2,
          agencyPrice: 259.00
        },
        {
          status: 8,
          oddNumbers: 2308924543,
          oddNumber:52515159,
          goodsShipped: "东方国宾·尊致酒酱香型白酒",
          shipmentQuantity: 2,
          agencyPrice: 259.00
        },
        {
          status: 9,
          oddNumbers: 230892454,
          oddNumber:52515150,
          goodsShipped: "东方国宾·尊致酒酱香型白酒",
          shipmentQuantity: 2,
          agencyPrice: 259.00
        },
        {
          status: 10,
          oddNumbers: 230892453,
          oddNumber:525151500,
          goodsShipped: "东方国宾·尊致酒酱香型白酒",
          shipmentQuantity: 2,
          agencyPrice: 259.00
        }
      ],
      tempArr:[],
    }
  },
  onLoad(options) {
    this.currentOrderList = this.orderList;
    if (options.isAfterSales) {
      this.isAfterSales = options.isAfterSales;
    }
  },
  watch: {
    isAfterSales() {
      this.tabIndex = 0;
      if (this.isAfterSales) {
        this.tabList = [
          {
            name: "全部"
          },
          {
            name: "待付款"
          },
          {
            name: "待发货"
          },
          {
            name: "待收货"
          },
          {
            name: "已完成"
          }
        ];
      } else {
        this.tabList = [
          {
            name: "全部"
          },
          {
            name: "待审核"
          },
          {
            name: "未通过"
          },
          {
            name: "进行中"
          },
          {
            name: "已完成"
          }
        ];
      }
    }
  },
  methods: {
    transStatus(status) {
      const tempArr = ["待付款", "待发货","待发货", "待发货","待发货","待收货","待收货","待收货","待收货", "已完成"];
      return tempArr[status - 1];
    },
    transStatust(status) {
      const tempArr = ["待审核", "未通过","进行中", "进行中","进行中","进行中","进行中", "已完成","已完成","已完成"];
      return tempArr[status - 1];
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
    tabSelect(e) {
      // console.log(e);
      this.tabIndex = e.index;
      if(this.isAfterSales){
        this.tempArr = [
          "item",
          "item.status === 1",
          "item.status === 2||item.status === 3||item.status === 4||item.status === 5",
          "item.status === 6||item.status === 7||item.status === 8||item.status === 9",
          "item.status === 10"];
      }else {
        this.tempArr = [
          "item",
          "item.status === 1",
          "item.status === 2",
          "item.status === 6||item.status === 3||item.status === 4||item.status === 5||item.status === 7",
          "item.status === 10||item.status === 8||item.status === 9"];
      }
      this.currentOrderList = this.orderList.filter(item => {
        return eval(this.tempArr[e.index]);
        // if (e.index === 0) {
        //     return item;
        // } else if (e.index === 1) {
        //     return item.status === 1;
        // } else if (e.index === 2) {
        //     return item.status === 2;
        // } else if (e.index === 3) {
        //     return item.status === 3 || item.status === 4 || item.status === 5;
        // } else if (e.index === 4) {
        //     return item.status === 6;
        // }
      });
      // console.log(this.currentOrderList);
      this.getList(Math.ceil(Math.random() * 10));
      // [].filter()
    },
    getList(count = 6) {
      this.list = [];
      for (let i = 0; i <= count; i++) {
        this.list.push({
          imgUrl: "/img/index/img_17%402x.png",
          oddNumbers: "156468545222",
          name: "东方国宾·尊致酒53°瓶装500ml",
          num: "3",
          price: "300.00",
          isLogistics: false,
          status: this.tabIndex,
          btn: this.tabIndex % 2 == 0 ? true : false
        });
      }
    },
    switchOrder() {
      this.isAfterSales = !this.isAfterSales;
      this.changes=false
      this.$nextTick(()=>{
        this.changes=true;
      });
      this.getList(Math.ceil(Math.random() * 10));
    },
    gotoPath(status) {
      // console.log(e);
      // return;
      // '/pages/admin/afterSales/afterSalesDetails?status=1?&listStatus=1')"
      uni.navigateTo({
        url: "/pages/admin/orderAdmin/orderDetails?status=" + (status-1)
      });
    },
    gotoPaths(status) {
      // console.log(e);
      // return;
      // '/pages/admin/afterSales/afterSalesDetails?status=1?&listStatus=1')"
      uni.navigateTo({
        url: "pages/admin/orderAdmin/afterSales?status=" + (status-1)
      });
    },
  }
}
</script>

<style lang="scss" scoped>
img{
  width: 150rpx;
  height: 150rpx;
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

.searchBox {
  position: relative;
}

.border {
  width: 100%;
  height: 2rpx;
  background-color: #e6dee6;
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
</style>