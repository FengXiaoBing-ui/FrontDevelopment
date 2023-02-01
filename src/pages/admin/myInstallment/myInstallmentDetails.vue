<template>
  <view class="content bg-gray">
    <!--顶部标题-->
    <u-navbar :autoBack="true" title="我的分期"></u-navbar>
    <view :style="`margin-top:${CustomBar}px`" style="padding-bottom: 140rpx">
      <view class="whiteBoxShadow">
        <view class="bg-white  padding-lr">
          <view class="flex justify-center">
<!--            <view class="margin-right text-gray try" @click="show=false" style="fontWeight: 'bold',">近7日待还</view>-->
<!--            <view class="margin-left text-gray try "  activeStyle="font-size:34rpx;font-weight:bold" inactiveStyle=" font-size:25rpx; color:gray;" @click="show=true">全部待还</view>-->
            <u-tabs itemStyle="height:88rpx;white-space:nowrap;"
                    :scrollable="false"
                    activeStyle="font-size:34rpx;font-weight:bold" inactiveStyle=" font-size:25rpx; color:gray;"
                    lineColor="red" :list="activityList" @click="tabSelect"></u-tabs>
          </view>
          <view class="flex justify-center  margin-top-xl">
            <view class="text-lg">截至今日总待还(元)</view>
          </view>
          <view class="flex padding justify-center">
            <view class="text-red text-lg text-bold">126789.00</view>
          </view>
        </view>
      </view>
      <view v-if="show">
        <view class="margin-left text-gray padding-sm">共39笔待还，最近还款日11/16</view>
        <!--      <u-radio-group class="grid whiteBoxShadow  col-2" v-model="radioValue">-->
        <!--        <view class="flex text-gray justify-between u-border-bottom padding" v-for="(site,index) in list" :key="index"-->
        <!--              style="width: 100%">-->
        <!--          <view class="flex justify-between">-->
        <!--            <u-radio activeColor="red"></u-radio>-->
        <!--            <text class="text-orange">{{ site.title }}-->
        <!--              <view class="text-gray">{{ site.jifen }}</view>-->
        <!--            </text>-->
        <!--          </view>-->
        <!--          <view class="flex align-end">-->
        <!--            <view class="">{{ site.hetong }}-->
        <!--              <text class="cuIcon-right" style="font-size: 36rpx"></text>-->
        <!--            </view>-->
        <!--          </view>-->
        <!--        </view>-->
        <!--      </u-radio-group>-->
        <view class="margin-top-sm whiteBoxShadow" v-for="(site,index) in 3" >
          <view class="u-border-bottom padding flex justify-between  align-center"  @click="gotoPath('/pages/admin/myInstallment/billingDetails')">
            <view class="text-bold">￥ 100000.00-32期</view>
            <view class="cuIcon-right text-bold"></view>
          </view>
          <u-radio-group  class="grid margin-top   col-2" v-model="radioValue">
            <view class="flex text-gray justify-between u-border-bottom padding" v-for="(item,index) in items" :key="index"  style="width: 100%">
              <u-radio activeColor="red" :name="item.home"></u-radio>
              <view class="flex-sub">{{item.home}}</view>
              <view class="flex-sub">{{ item.num }}</view>
              <view class="bg-red light text-sm radius text-center" style="padding: 6rpx 10rpx;width: 20%">{{ item.par }}</view>
              <view class="flex-sub text-right" >{{ item.time }}</view>
            </view>
          </u-radio-group>
        </view>
      </view>
      <view v-if="!show">
        <view class="margin-left text-gray  padding-sm">共39笔待还，最近还款日11/15</view>
        <u-radio-group class="grid whiteBoxShadow  col-2" v-model="radioValue">
          <view class="flex text-gray justify-between u-border-bottom padding" v-for="(site,index) in list" :key="index"
                style="width: 100%">
            <view class="flex justify-between">
              <u-radio activeColor="red" :name="site.jifen"></u-radio>
              <text class="text-orange" >{{ site.title }}
                <view class="text-gray">{{ site.jifen }}</view>
              </text>
            </view>
            <view class="flex align-end">
              <view class="" @click="gotoPath">{{ site.hetong }}
                <text class="cuIcon-right" style="font-size: 36rpx"></text>
              </view>
            </view>
          </view>
        </u-radio-group>
      </view>
    </view>

    <view class="botBtn padding bg-white">
      <button style="width: 100%"
              class="cu-btn bg-red radius lg">立即还款
      </button>
    </view>
  </view>

</template>

<script>


export default {
  name: "myInstallmentDetails",
  data() {
    return {
      show:false,
      activityList: [
        {
          name: "近七日待还"
        },
        {
          name: "全部待还"
        },
          ],
      list4: [{
        name: '近七日待还'
      }, {
        name: '全部待还',
      }],
      radioValue: "7/32期",
      sites: [
        {}
      ],
      items: [
        {
          home:"1/32期",
          num:"￥8000.00",
          par:"八折优惠",
          time:"12天后到期"
        },
        {
          home:"2/32期",
          num:"￥8000.00",
          par:"八折优惠",
          time:"12天后到期"
        },
        {
          home:"3/32期",
          num:"￥8000.00",
          par:"八折优惠",
          time:"12天后到期"
        },
        {
          home:"4/32期",
          num:"￥8000.00",
          par:"八折优惠",
          time:"12天后到期"
        }
      ],
      list: [
        {
          title: "￥8000.00",
          jifen: "7/32期",
          hetong: "4天后到期"
        },
        {
          title: "￥12456.00",
          jifen: "12/32期",
          hetong: "5天后到期"
        },
        {
          title: "￥8000.00",
          jifen: "23/32期",
          hetong: "6天后到期"
        },
        {
          title: "￥4450.00",
          jifen: "32/32期",
          hetong: "7天后到期"
        }
      ]
    };
  },
  methods: {
    tabSelect() {
      this.show=!this.show
    },
    gotoPath(path) {
      uni.navigateTo({
        url: '/pages/admin/myInstallment/billingDetails'
      });
    },
    radioChange(e) {
      console.log(e);
      this.radioValue = e;
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  position: fixed;
  width: 100%;
  top: var(--CustomBar-1) !important;
  left: 0;
}

.redBlock {
  width: 0.25rem;
  //height: 10px;
  background: red;
  border-radius: 0.2rem;
}
.try:active{
color: black;
  font-size: 18px;
  font-weight:bold
}
.try:focus{
  color: black;
  font-size: 34px;
}
.botBtn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.radius{
  border-radius: 4px 4px 4px 4px;
}
</style>
