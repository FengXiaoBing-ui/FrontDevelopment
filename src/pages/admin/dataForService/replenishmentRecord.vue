<template>
  <view>
    <u-navbar :autoBack="true" title="补货记录" ></u-navbar>
    <view :style="`margin-top:${CustomBar+20}px`" class="padding-bottom">
      <view class="margin-lr  whiteBoxShadow  margin-bottom" v-for="(item,index) in list" :key="index" :class="site===index?'borderRed':''" @click="site=index">
        <view class="flex justify-between">
          <view class="text-lg text-gray"  style="font-size: 16px">{{ item.title }}
<!--            <image src="/static/integralCommutation/fuzi.png" style="width: 12px;height: 13px;font-size: 18px;margin-left: 5px"  mode="aspectFill"></image>-->

          <text @click.stop="copy(item.title)" class="cuIcon-copy margin-left-xs"></text>
          </view>
          <view class="text-green" style="font-size: 14px">已完成</view>
        </view>
<!--        <view class="cuIcon-friend"></view>-->
        <view class="flex align-center margin-bottom-xs margin-top">
          <image src="/static/integralCommutation/shubao.png" style="width: 12px;height: 13px;font-size: 18px"  mode="aspectFill"></image>
          <view class=" margin-left-xs" style="font-size: 14px">补货商品：</view>
          <view  style="font-size: 14px">{{ item.years }}</view>
        </view>
        <view class="flex align-center margin-bottom-xs margin-top">
          <image src="/static/integralCommutation/yuan.png" style="width: 12px;height: 13px;font-size: 18px"  mode="aspectFill"></image>
          <view class=" margin-left-xs">补货数量：</view>
          <view  style="font-size: 14px">{{ item.time }}</view>
        </view>
        <view class="flex align-center margin-bottom-xs margin-top">
          <image src="/static/integralCommutation/pengyou.png" style="width: 12px;height: 13px;font-size: 18px"  mode="aspectFill"></image>
          <view class=" margin-left-xs">申请人：</view>
          <view style="font-size: 14px">{{ item.money }}</view>
        </view>
        <view class="flex margin-top">
          <view>共计:</view>
          <view class="text-red" style="font-size: 16px">{{ item.num }}</view>
        </view>
        <view class="text-gray margin-top-xs" style="font-size: 12px">{{ item.hao }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import boxTitle from "../../agent/components/fxb-box-title";
import qiunDataCharts from "../../../components/qiun-data-charts/qiun-data-charts";
import goodsInfoCard from "../../../components/erp/goodsInfoCard";

export default {
  name: "replenishmentRecord",
  data() {
    return {
      site:0,
      list: [
        {
          title: "申请编号：7987879879",
          years: "东方国宾·尊致酱香型白酒/东方宾...",
          time: "600瓶",
          money: "王哥烟酒商行（王刚）",
          num:"￥500000.00",
          hao:"2022-08-31 12:12:56"

        }, {
          title: "申请编号：7987879879",
          years: "东方国宾·尊致酱香型白酒/东方宾...",
          time: "600瓶",
          money: "王哥烟酒商行（王刚）",
          num:"￥500000.00",
          hao:"2022-08-31 12:12:56"
        }, {
          title: "申请编号：7987879879",
          years: "东方国宾·尊致酱香型白酒/东方宾...",
          time: "600瓶",
          money: "王哥烟酒商行（王刚）",
          num:"￥500000.00",
          hao:"2022-08-31 12:12:56"

        }, {
          title: "申请编号：7987879879",
          years: "东方国宾·尊致酱香型白酒/东方宾...",
          time: "600瓶",
          money: "王哥烟酒商行（王刚）",
          num:"￥500000.00",
          hao:"2022-08-31 12:12:56"
        },
      ],

    }
  },
  methods: {
    copy(text){
      console.log(text);
      uni.setClipboardData({
        data:text,
        success:(res) => {
          uni.showToast({
            title:"内容已复制",
            icon:"none"
          })
        }
      })
    },
  }
};
</script>

<style lang="scss" scoped>
//.borderRed{
//  border: 1px red solid;
//  background-color: transparent;
//}
</style>