<template>
  <view>
    <u-navbar :autoBack="true" title="销售记录" ></u-navbar>
    <view    :style="'margin-top:' + CustomBar + 'px;'+('padding-bottom: 10px')">
        <view class="bg-white padding-sm">
            <view class="flex align-center margin-top-sm bg-gray radius round">
                <text class="cuIcon-search text-red"
                      style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
                <input
                    class="text-df"
                    type="text"
                    placeholder-class="text-gray"
                    placeholder="请输入商品名称进行搜索"
                    confirm-type="search"
                />
            </view>
        </view>
    <view class="wrap">
      <view class="padding-lr contentBox">
        <view class="product margin-top-sm">
          <view class=" flex flex-wrap justify-between">
            <view class="w100 flex justify-between align-center margin-top-xs ">
              <view class="text-xl text-black">2022年9月
                <text class="cuIcon-unfold margin-left-xs text-gray"></text>
              </view>
              <view class="cuIcon-filter"><text class="text-gray">筛选 · 已选 0</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
<!--   <view class="whiteBoxShadow margin-top margin-lr" v-for="(item,index) in productList" :key="index">-->
<!--     <view class="border-bottom justify-between">-->
<!--       <view class="textBorderLeft">申请编号: 23435424314</view>-->
<!--       <view class="text-green">已完成</view>-->
<!--     </view>-->
<!--     <view class="margin-top flex">-->
<!--       <view>补货商品: </view>-->
<!--        <view class="margin-left-xs">{{item.title}}</view>-->
<!--     </view>-->
<!--     <view class="margin-top flex">-->
<!--       <view>补货数量: </view>-->
<!--       <view class="margin-left-xs">{{ item.years }}</view>-->
<!--     </view>-->
<!--     <view class="margin-top flex">-->
<!--       <view>申请人: </view>-->
<!--       <view class="margin-left-xs">{{ item.num }}</view>-->
<!--     </view>-->
<!--     <view class="margin-top border-bottom padding-bottom flex">-->
<!--       <view>提交时间: </view>-->
<!--       <view class="margin-left-xs">{{ item.time }}</view>-->
<!--     </view>-->
<!--     <view class="margin-top flex">-->
<!--     <view style="font-size: 18px">合计:</view>-->
<!--       <view class="text-red" style="font-size: 18px">￥5000.00</view>-->
<!--     </view>-->
<!--     <view class="text-gray text-sm margin-top-xs " style="font-style: oblique">伍拾万陆仟叁佰元整</view>-->
<!--   </view>-->
      <view class="product margin-top padding-lr">
        <view class="flex flex-wrap justify-between">
          <view  v-for="(item,index) in productList" :key="index" class="whiteBoxShadow w100 margin-bottom-sm">
            <view class="flex justify-between">
              <view class="text-gray flex align-center">
                <view class="textBorderLeft"></view>
                <view style="transform: translateX(-10rpx);font-size: 18px;" class="text-black">申请编号: 232425343246</view>
<!--                <text @click.stop="copy(item.title)" class="cuIcon-copy"></text>-->
              </view>
              <!--                            <button class="cu-btn round line-green sm">已完成</button>-->
              <view class="text-green" @click="addDeliverGoods">已完成</view>
            </view>
            <view class="u-border-bottom margin-tb"></view>
            <view class="flex align-center margin-bottom-xs">
              <view class=" ">补货商品：</view>
              <view>{{ item.title }}</view>

            </view>
            <view class="flex align-center justify-between margin-bottom-xs">
              <view class="flex align-center">
                <view class=" ">补货数量：</view>
                <view>{{ item.years }}</view>
              </view>
            </view>
            <view class="flex align-center justify-between margin-bottom-xs">
              <view class="flex align-center">
                <view class=" ">申请人：</view>
                <view>{{ item.num }}</view>
              </view>
            </view>
            <view class="flex align-center">
              <view class="">提交时间：</view>
              <view>{{ item.time }}</view>
            </view>
            <view class="u-border-bottom margin-tb"></view>
<!--            <view class="flex flex-direction">-->
<!--              <view class="flex align-center">合计:<text class="text-lg text-red">￥500000.00</text> </view>-->
<!--              <view class="text-sm text-gray">{{ $util.convertCurrency(500000) }}</view>-->
<!--            </view>-->
            <view class="margin-top flex">
                   <view style="font-size: 18px">合计:</view>
                     <view class="text-red" style="font-size: 18px">￥5000.00</view>
                   </view>
                   <view class="text-gray text-sm margin-top-xs " style="font-style: oblique">伍拾万陆仟叁佰元整</view>
          </view>
        </view>
      </view>
    </view>
    </view>

</template>

<script>
import boxTitle from "../../agent/components/fxb-box-title";
import fxbListCard from "/src/components/fxb/fxb-list-card";
import qiunDataCharts from "../../../components/qiun-data-charts/qiun-data-charts";
import goodsInfoCard from "../../../components/erp/goodsInfoCard";

export default {
  name: "salesRecords",
  components: {
    boxTitle,
    fxbListCard
  },
  data() {
    return {
      site:0,
      productList:[
        {
          title: "东方国宾.尊致酱香酒型白酒",
          years:"600瓶",
          num: "王哥烟酒商行(王刚)",
          time: "2022-08-30 12:12:56",
        },
        {
          title: "东方国宾.尊致酱香酒型白酒",
          years:"600瓶",
          num: "王哥烟酒商行(王刚)",
          time: "2022-08-30 12:12:56",
        },
        {
          title: "东方国宾.尊致酱香酒型白酒",
          years:"600瓶",
          num: "王哥烟酒商行(王刚)",
          time: "2022-08-30 12:12:56",
        },
      ],
    }
  },
  methods: {
    addDeliverGoods() {
      uni.navigateTo({
        url: "/pages/admin/tender/recordDetails"
      });
    },
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
.textBorderLeft{
  width:8rpx;
  height: 30rpx;
  background: #E54D42;
  border-radius: 8rpx;
  transform: translateX(-26rpx);
}
</style>