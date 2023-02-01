<template>
  <view>
    <u-navbar :autoBack="true" title="代理列表" ></u-navbar>
    <view :style="`margin-top:${CustomBar}px`" class="bg-white padding-tb">
      <view class="padding-lr">
        <u--input
            border="false"
            class="bg-gray"
            placeholder="输入代理商名称、手机号进行搜索"
            prefixIcon="search"
            prefixIconStyle="font-size: 22px;color: #909399"
        ></u--input>
      </view>
    </view>
    <view class="wrap">
      <view class="padding-lr contentBox">
        <view class="product margin-top-sm">
          <view class=" flex flex-wrap justify-between">
            <view class="w100 flex justify-between align-center margin-top-xs ">
              <view class="text-xl text-gray">2022年9月
                <text class="cuIcon-unfold margin-left-xs text-gray"></text>
              </view>
              <view class="cuIcon-filter"><text class="text-gray">筛选 · 已选 0</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view :style="`margin-top:${CustomBar+20}px`" style="transform: translateY(-20rpx)">
      <view class="margin-lr   whiteBoxShadow margin-bottom" v-for="(item,index) in list" :key="index" :class="site===index?'borderRed':''" @click="site=index" style="transform: translateY(-40px)">
        <view class="flex justify-between">
          <view class="text-lg text-gray"  style="font-size: 16px">{{ item.title }}
            <!--            <image src="/static/integralCommutation/fuzi.png" style="width: 12px;height: 13px;font-size: 18px;margin-left: 5px"  mode="aspectFill"></image>-->

            <text @click.stop="copy(item.title)" class="cuIcon-copy margin-left-xs"></text>
          </view>
          <view class="text-red" style="font-size: 14px">进行中</view>
        </view>
        <!--        <view class="cuIcon-friend"></view>-->
        <view class="flex align-center margin-bottom-xs margin-top">
<!--          <image src="/static/integralCommutation/shubao.png" style="width: 12px;height: 13px;font-size: 18px"  mode="aspectFill"></image>-->
          <view class=" margin-left-xs" style="font-size: 28rpx">签约商品：</view>
          <view  style="font-size: 28rpx">{{ item.years }}</view>
        </view>
        <view class="flex align-center margin-bottom-xs margin-top">
<!--          <image src="/static/integralCommutation/yuan.png" style="width: 12px;height: 13px;font-size: 18px"  mode="aspectFill"></image>-->
          <view class=" margin-left-xs">代理级别：</view>
          <view  style="font-size: 14px">{{ item.time }}</view>
        </view>
        <view class="flex align-center margin-bottom-xs margin-top border-bottom padding-tb" style="transform: translateY(-15px)">
<!--          <image src="/static/integralCommutation/pengyou.png" style="width: 12px;height: 13px;font-size: 18px"  mode="aspectFill"></image>-->
          <view class=" margin-left-xs" style="white-space: nowrap">代理区域：</view>
          <view style="font-size: 14px;white-space: nowrap" >{{ item.money }}</view>
          <view class="cuIcon-unfold margin-left-sm"></view>
        </view>
        <view class="flex justify-between">
        <image src="/static/integralCommutation/touxiang.png" style="width: 40px;height: 40px;font-size: 16px" class="" mode="aspectFill"></image>
          <view class="margin-right" style="margin-right: 54px">
            <view>华中研究小卖部</view>
            <view class="margin-top-xs text-gray" style="white-space: nowrap">2022-08-31 12:12:56</view>
          </view>
          <view class="cu-btn" style="color: #FFFFFF;background-color: #F37B1D">合同详情</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import boxTitle from "../../agent/components/fxb-box-title";
import qiunDataCharts from "../../../components/qiun-data-charts/qiun-data-charts";
import goodsInfoCard from "../../../components/erp/goodsInfoCard";

export default {
  name: "proxyList",
  data() {
    return {
      site:0,
      list: [
        {
          title: "合同编号：213234233543",
          years: "区东方国宾·尊致500ml",
          time: "区/县级代理",
          money: "区贵州省贵阳市观山湖区世纪城街道",
          num:"￥500000.00",
          hao:"2022-08-31 12:12:56"

        }, {
          title: "合同编号：213234233543",
          years: "区东方国宾·尊致500ml",
          time: "区/县级代理",
          money: "区贵州省贵阳市观山湖区世纪城街道",
          num:"￥500000.00",
          hao:"2022-08-31 12:12:56"
        }, {
          title: "合同编号：213234233543",
          years: "区东方国宾·尊致500ml",
          time: "区/县级代理",
          money: "区贵州省贵阳市观山湖区世纪城街道",
          num:"￥500000.00",
          hao:"2022-08-31 12:12:56"

        }, {
          title: "合同编号：213234233543",
          years: "区东方国宾·尊致500ml",
          time: "区/县级代理",
          money: "区贵州省贵阳市观山湖区世纪城街道",
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