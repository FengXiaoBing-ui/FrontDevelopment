<template>
  <view class="content bg-gray">
    <!--顶部标题-->
    <u-navbar :autoBack="true" title="账单详情"></u-navbar>
    <view :style="`margin-top:${CustomBar}px`">
      <view class="whiteBoxShadow">
        <view class="flex justify-between ">
        <view class="bg-white   align-center">
          <view class="flex ">
            <view style="padding-right: 10px" class=" u-border-right   margin-right text-black">2022-03-15</view>
            <view class="">￥ 448500.00</view>
          </view>
          <view class="flex margin-top-xs">
            <view style="padding-right: 24px" class="margin-right u-border-right  text-black">共分32期</view>
            <view class="">八折优惠</view>
          </view>
        </view>
          <view class="margin-top-sm">
<!--          <button type="button" class="bg-red min padding-tb light line-red sm">查看合同</button>-->
            <button class="bg-red line-red light text-sm radius text-center" style="padding: 0px 6px;width: 100%">查看合同</button>
          </view>
        </view>
      </view>
      <view class="flex justify-between padding-lr margin-top">
        <view>还款详情</view>
        <view>剩余29期待还</view>
      </view>
      <u-radio-group  class="grid margin-top whiteBoxShadow  col-2" v-model="radioValue">
        <view class="flex text-gray justify-between u-border-bottom padding" v-for="(site,index) in list" :key="index"  style="width: 100%">
          <view class="flex justify-between">
            <u-radio activeColor="red" :name="site.jifen"></u-radio>
            <view class="flex justify-between">
            <text class="text-black">{{ site.title }}<view class="margin-top-xs text-gray">{{ site.jifen }}</view></text>
            </view>
          </view>
          <view class="flex justify-between">
            <text class="text-black">{{ site.money }}<view class=" margin-top-xs" :class="site.time=='已还清'?'text-green':'text-red'">{{ site.time }}</view></text>
            <view class="text-gray"></view>
          </view>
        </view>
      </u-radio-group>
      <view class="botBtn padding-sm bg-white">
        <button @click="gotoPath('/pages/admin/myInstallment/billingDetails')"style="width: 100%" class="cu-btn bg-red radius lg">提前还款</button>
      </view>
    </view>
    </view>
</template>

<script>
export default {
  name: "billingDetails",
  data() {
    return {
      radioValue: "1/32期",
      sites:[
        {

        }
      ],
      list: [
        {
          title: "2022-05-17",
          jifen: "1/32期",
          money: "￥8000.00",
          time:"已还清"
        },
        {
          title: "2022-05-17",
          jifen: "2/32期",
          money: "￥8000.00",
          time:"已还清"
        },
        {
          title: "2022-05-17",
          jifen: "3/32期",
          money: "￥8000.00",
          time:"已还清"
        },
        {
          title: "2022-05-17",
          jifen: "4/32期",
          money: "￥8000.00",
          time:"未还清"
        },
        {
          title: "2022-05-17",
          jifen: "5/32期",
          money: "￥8000.00",
          time:"未还清"
        },
        {
          title: "2022-05-17",
          jifen: "6/32期",
          money: "￥8000.00",
          time:"未还清"
        }
      ],
    }
  },
  methods: {
    gotoPath(path) {
      uni.navigateTo({
        url: path
      });
    },
    radioChange(e) {
      console.log(e);
      this.radioValue = e
    },
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
.botBtn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.min{
  width:100px;
  height:30px;

}
</style>
