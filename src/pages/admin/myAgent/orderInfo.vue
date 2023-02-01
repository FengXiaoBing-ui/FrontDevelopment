<template>
    <view>
        <u-navbar :autoBack="true" title="补货订单" ></u-navbar>
        <view :style="`margin-top:${CustomBar+10}px`">
            <view class="padding-tb-xs">
                <view class="margin-left-lg">2022年9月 <text class="cuIcon-unfold text-bold margin-left-xs" style="font-size: 20px;margin-top: 23px"></text> </view>
            </view>
            <view class="product margin-top-sm padding-lr">
                <view class="flex flex-wrap justify-between">
                    <view @click="jumpDetails(item.status)" v-for="(item,index) in productList" :key="index" class="whiteBoxShadow w100 margin-bottom-sm">
                        <view class="flex justify-between">
                            <view class="text-gray flex align-center">
                                <view class="textBorderLeft"></view>
                                <view style="transform: translateX(-10rpx)">{{ item.title }}</view>
                              <text @click.stop="copy(item.title)" class="cuIcon-copy"></text>
                            </view>
<!--                            <button class="cu-btn round line-green sm">已完成</button>-->
                          <view class="text-green">已完成</view>
                        </view>
                        <view class="u-border-bottom margin-tb"></view>
                        <view class="flex align-center margin-bottom-xs">
                          <image src="/static/integralCommutation/shubao.png" style="width: 12px;height: 13px;font-size: 18px"  mode="aspectFill"></image>
                            <view class=" margin-left-xs">补货商品：</view>
                            <view>{{ item.product }}</view>

                        </view>
                        <view class="flex align-center justify-between margin-bottom-xs">
                            <view class="flex align-center">
                              <image src="/static/integralCommutation/yuan.png" style="width: 12px;height: 13px;font-size: 18px"  mode="aspectFill"></image>
                                <view class=" margin-left-xs">补货数量：</view>
                                <view>{{ item.grad }}</view>
                            </view>
                        </view>
                        <view class="flex align-center">
                            <view class="text-gray">提交时间：</view>
                            <view>{{ item.date }}</view>
                        </view>
                        <view class="u-border-bottom margin-tb"></view>
                        <view class="flex flex-direction">
                            <view class="flex align-center">合计:<text class="text-lg text-red">￥500000.00</text> </view>
                            <view class="text-sm text-gray">{{ $util.convertCurrency(500000) }}</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "orderInfo",
    data() {
        return {
        };
    },
    onShow() {
        this.getProductList();
    },
    methods: {
      copy(text){
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
        getProductList(count = 2) {
            this.productList = [];
            for (let i = 0; i < count; i++) {
                this.productList.push({
                    title: "补货单号：213234233543",
                    num: "213234233543",
                    product: "东方国宾·尊致酱香型白酒/东方宾...",
                    grad: "600瓶",
                    agentProduct: "现结",
                    region: "贵州省贵阳市关山湖区世纪城街道",
                    term: "2022-08-30 至 2025-08-29",
                    date: "2022-08-30 12:23:23",
                    status: this.statusIndex==0?(Math.floor(Math.random() * 4)+1):this.statusIndex
                });
            }
        },
    }
};
</script>

<style lang="scss" scoped>
.textBorderLeft{
    width:8rpx;
    height: 30rpx;
    background: #E54D42;
    border-radius: 8rpx;
    transform: translateX(-26rpx);
}
</style>