<template>
    <view>
        <u-navbar :autoBack="true" rightClick="" rightText=""  title="积分明细"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`">
            <view class=" ">
                <view class="flex justify-between   padding-lr">
                  <view class="flex margin-top">
                        <view>2022年9月</view>
                        <view class="lg text-gray cuIcon-unfold" style="font-size: 20px;color: black"></view>
                  </view>
                  <view class="flex margin-top">
                        <view class="text-gray" style="font-size: 15px">积分类型：</view>
                            <view class="text-gray">全部</view>
                            <view class="lg text-gray margin-left-xs cuIcon-triangledownfill"
                                  style="font-size: 17px"></view>
                  </view>
                </view>
              <view class="bg-white">
                <view class="flex margin-top-lg  margin-bottom">
                    <view class="flex margin-top margin-left">
                        <view class="text-gray">新增积分：</view>
                        <view style="color: orange">1562300分</view>
                    </view>
                    <view class="flex UsePoints margin-top">
                        <view class="text-gray">使用积分：</view>
                        <view style="color: #e43d33">1562300分</view>
                    </view>
                </view>
                <view v-for="(item,index) in list" :key="index"  class="whiteBoxShadow tag u-border margin-lr margin-bottom">
                    <view class="flex   justify-between bottom " style="align-items:center">
                        <view class="flex ">
                            <view class="tubiao" style=""></view>
                          <image src="/static/integralCommutation/jifen.png" style="width: 45px;height: 45px"  mode="aspectFill"></image>
                            <view class="margin-left">
                                <view style="font-weight: 500;color: black">{{ item.title }}</view>
                                <view class="flex margin-top-sm" style="color: #A1A1A1">
                                    <view>{{ item.years }}</view>
                                    <view style="margin-left: 5px">{{ item.time }}</view>

                                </view>
                            </view>
                        </view>
<!--                      第一种写法-->
<!--                                                <view v-if="item.money>0" class="text-green" style="font-weight: bold;font-size: 18px">{{item.money}}</view>-->
<!--                                                <view v-if="item.money<=0" style="font-weight: bold;font-size: 18px">{{item.money}}</view>-->
<!--                      第二种写法-->
                        <view  :class="`${(item.money>0?'text-red':'')}`" style="font-weight: bold;font-size: 18px;">
                            {{ item.money }}
                        </view>
                    </view>
                </view>
                </view>
              </view>
            </view>
        </view>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    title: "合同发货",
                    years: "2022-05-16",
                    time: "15:56:32",
                    money: "+155000",

                }, {
                    title: "合同发货",
                    years: "2022-05-16",
                    time: "15:56:32",
                    money: "-50000"
                }, {
                    title: "合同发货",
                    years: "2022-05-16",
                    time: "15:56:32",
                    money: "+155000",

                }, {
                    title: "合同发货",
                    years: "2022-05-16",
                    time: "15:56:32",
                    money: "-50000"
                }, {
                    title: "合同发货",
                    years: "2022-05-16",
                    time: "15:56:32",
                    money: "+155000"
                }, {
                    title: "合同发货",
                    years: "2022-05-16",
                    time: "15:56:32",
                    money: "-50000",

                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.UsePoints {
    margin-left: 35px;
}
//.borderRed{
//  border: 1rpx red solid;
//  background-color: transparent;
//
//}

.time {
    font-weight: 500;
    font-size: 18px;
}

/*.tubiao {*/
/* border-radius: 15%;*/
/*    width: 50px;*/
/*    height: 50px;*/
/*    font-size: 12px;*/
/*    padding: 7px;*/
/*    color: #3a3a3a;*/
/*}*/

.bottom {
    box-shadow: 4 rpx 4 rpx 5 rpx #e6dee6;
    border-radius: 5px;
}
</style>