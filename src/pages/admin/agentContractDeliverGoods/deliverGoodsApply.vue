<template>
    <view class="content bg-gray">
        <!--顶部标题-->
        <u-navbar :border="false" :fixed="true" :autoBack="true"
                  :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
                  :safeAreaInsetTop="false">
            <view slot="left" class="u-nav-slot">
                <text style="font-size: 36rpx" class="cuIcon-back"></text>
            </view>
            <view slot="center" class="u-nav-slot">
                <view class="text-lg">发货申请</view>
                <view style="width:750rpx" class="search bg-white">
                    <view class="bg-white padding-lr">
                        <view class="flex align-center margin-tb-sm bg-gray" style="border-radius: 4px">
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

                        <!--产品列表导航-->
                        <u-tabs itemStyle="width:25%;height:88rpx;white-space:nowrap" activeStyle="font-size:32rpx"
                                inactiveStyle="color:gray;font-size:20rpx" lineColor="red" :list="activityList"
                                @click="tabSelect"></u-tabs>

                    </view>
                </view>
            </view>
        </u-navbar>
        <!--头部-->
        <view v-if="true" class="wrap">
            <view class="padding-lr-sm contentBox">
                <!--商品列表-->
                <view class="product margin-top-sm">
                    <view class="flex flex-wrap justify-between">
                        <view @click="gotoDetail" v-for="(item,index) in productList" :key="index" style="width: 100%"
                              class="whiteBoxShadow margin-bottom-sm">
                            <view class="flex align-center justify-between">
                                <view class="flex align-center text-red">
                                    <text class="cuIcon-time margin-right-xs" style="font-size: 42rpx;"></text>
                                    <view class="text-lg">{{ activityList[item.status].name }}</view>
                                </view>
                                <button v-if="false" class="cu-btn u-border bg-white">备货完成</button>
                            </view>
                            <view class="margin-top">
                                <text>合同发货单号：</text>
                                <text>{{ item.num }}</text>
                            </view>
                            <view class="flex justify-between align-center margin-top-sm">
                                <view>
                                    <text class="text-gray">发货数量：</text>
                                    <text>{{ item.count }}</text>
                                </view>
                                <view>
                                    <text class="text-gray">剩余数量：</text>
                                    <text>{{ item.surplus }}</text>
                                </view>
                            </view>
                            <view class="flex justify-between align-center margin-top-sm">
                                <view>
                                    <text class="text-gray">发货金额：</text>
                                    <text class="text-red">{{ item.price }}</text>
                                </view>
                                <view>
                                    <text class="text-gray">申请人：</text>
                                    <text>{{ item.name }}</text>
                                </view>
                            </view>
                            <view class="margin-top-sm">
                                <text>申请单位：</text>
                                <text>{{ item.unit }}</text>
                            </view>
                            <view class="margin-top-sm">
                                <text>提交时间：</text>
                                <text>{{ item.date }}</text>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="botBtn padding-sm bg-white">
                <button @click="addDeliverGoods" style="width: 100%" class="cu-btn bg-red radius lg">新增发货</button>
            </view>
        </view>
        <view  v-if="false" class="padding-lr-sm padding-tb" :style="'margin-top: 1'+ CustomBar + 'px;padding-bottom:10rpx'">
        <view  class=" padding margin-top u-border" v-for="item in dataList" :key="item.id"
              @click="showInfo1(item.id)"
              :style="item.id===activeIndex?'border-color:red !important;':''">
            <view class="gou text-red bg-blue text-center light">✔</view>
            <view class="text-black text-lg">{{ item.title }}</view>
            <view class="flex margin-top">
                <view class="text-red">代理价： {{ item.agentPrice }}</view>
                <view class="text-yellow light margin-left-lg">合同商品总数： {{ item.count }}瓶</view>
            </view>
            <view class="flex justify-between">
                <view class="bg-blue  test light lg padding-sm radius margin-top-sm  text-sm"
                      style="width: 110px;height: 100px">

                    <view class="">
                        <view class="text-black text-lg">{{ item.total }}</view>
                        <view class="text-red margin-top-xs text-black">￥46622.00</view>
                        <view class="text-gray margin-top-xs text-sm">800件(4800件)</view>
                    </view>
                </view>
                <view class="bg-blue  test light lg padding-sm radius margin-top-sm  text-sm"
                      style="width: 110px;height: 100px">
                    <view class="">
                        <view class="text-black text-lg">{{ item.money }}</view>
                        <view class="text-red margin-top-xs text-black">￥46622.00</view>
                        <view class="text-gray margin-top-xs text-sm">800件(4800件)</view>
                    </view>
                </view>
                <view class="bg-blue  test light lg padding-sm radius margin-top-sm  text-sm"
                      style="width: 110px;height: 100px">
                    <view class="text-orange ding bg-orange light">首单</view>
                    <view class="">
                        <view class="text-black text-lg">{{ item.purchasing }}</view>
                        <view class="text-red margin-top-xs text-black">￥46622.00</view>
                        <view class="text-gray margin-top-xs text-sm">800件(4800件)</view>
                    </view>
                </view>
            </view>
            <view class="flex justify-between margin-top">
                <view class="flex align-center">
                    <view style="min-width: 160rpx;height: 50rpx;border-color: orange !important;"
                          class="flex justify-center u-border align-center bg-orange light radius line-red text-sm margin-right-sm">
                        活动八折优惠
                    </view>
                    <view style="min-width: 160rpx;height: 50rpx;border-color: red !important;"
                          class="flex justify-center  align-center bg-red light radius line-red text-sm">免保证金
                    </view>
                </view>
                <view class="bg-blue light radius line-red padding-xs text-sm">查看更多</view>
            </view>
        </view>
        </view>

            <view v-if="false" class="whiteBoxShadow bg-white">
        <view class="padding-lr-sm padding-tb" :style="'margin-top: 1'+ CustomBar + 'px;padding-bottom:10rpx'">
        <view class="whiteBoxShadow u-border text margin-top-sm"  v-for="site in sites" :key="site.num"
              @click="showInfo(site.num)" :style="site.num==word?'border-color:red !important;':''">
            <view class="you text-red bg-red text-center light">{{ site.max }}</view>

            <view class="jiao"></view>
            <view class="icon text-white">✔</view>
            <view class="flex">
                <view class="text-black text-xl ">{{ site.title }}</view>
            <view class="xl text-black text-bold margin-left-xs text-xl cuIcon-unfold"></view>
        </view>
                <view class="flex justify-between margin-top">
                    <view class="text-gray">代理价: 约{{ site.agentPrice }}/元</view>
                    <view class="text-orange light">合同商品总数: {{ site.count }}瓶</view>
                </view>
                <view class="text-red text-xl margin-top ">合同总价: {{ site.total }}</view>
        </view>
      <view class="whiteBoxShadow margin-top  padding">
          <view class="flex">
     <view>当前剩余代理名额:</view>
          <view class="text-red text-lg margin-left-xs">12人</view>
      </view>
          <view class="justify-between flex">
              <view class="text-cut padding bg-red flex-sub light margin-top radius">
              <view class="text-black">代理价</view>
                  <view class="text-red margin-top-xs">￥275.00</view>
          </view>
              <view class="text-cut padding bg-red  flex-sub margin-left-xs light margin-top radius">
                  <view class="text-black">商超指导价</view>
                  <view class="text-red margin-top-xs">￥305.00~￥315.00</view>
              </view>
          </view>
          <view class="justify-between flex border-bottom solid border-height:34px">
              <view class="text-cut padding bg-red flex-sub light margin-top radius">
                  <view class="text-black">企业团购价</view>
                  <view class="text-red margin-top-xs">￥275.00</view>
              </view>
              <view class="text-cut padding bg-red u-border-bottom flex-sub margin-left-xs light margin-top radius">
                  <view class="text-black">建议零售价</view>
                  <view class="text-red margin-top-xs">￥305.00~￥315.00</view>
              </view>
          </view>
          <view class="u-border-top margin-tb"></view>
          <view class="flex justify-between">
              <view class="">
              <view class="text-black text-lg">合同商品总数</view>
                  <view class="text-gray text-lg margin-top-xs">300件(1800瓶)</view>
          </view>
              <view class="">
                  <view class="text-red  text-lg">￥466200.00</view>
                  <view class="text-gray text-lg margin-top-xs">四玩违法和</view>
              </view>
          </view>
</view>
    </view>
    </view>
    </view>

</template>

<script>
export default {
    name: "deliverGoodsApply",
    data() {
        return {
            index: 0,
            activeIndex: "10001",
            selectShow: false,
            statusIndex: 0,
            word: "1",
            screenResult: "",
            activityList: [
                {
                    name: "待审核(1)"
                },
                {
                    name: "未通过(1)"
                }
            ],
            productList: [],
            dataList: [
                {
                    id: "10001",
                    title: "东方国宾酒代理政策2（区级）",
                    agentPrice: "￥265.00",
                    count: "4800",
                    total: "合同总额",
                    money: "优惠金额",
                    purchasing: "首单进货"
                },
                {
                    id: "10002",
                    title: "东方国宾酒代理政策2（区级）",
                    agentPrice: "￥265.00",
                    count: "4800",
                    total: "合同总额",
                    money: "优惠金额",
                    purchasing: "首单进货"
                },
                {
                    id: "10003",
                    title: "东方国宾酒代理政策2（区级）",
                    agentPrice: "￥265.00",
                    count: "4800",
                    total: "合同总额",
                    money: "优惠金额",
                    purchasing: "首单进货"
                }
            ],
            sites: [
                {
                    num: "1",
                    title: "东方国宾酒代理政策2(区级)",
                    agentPrice: "￥265.00",
                    count: "4800",
                    total: "￥466200.00",
                    max:"八折优惠",
                    money:"优惠金额"
                },
                {
                    num: "2",
                    title: "东方国宾酒代理政策2（区级）",
                    agentPrice: "￥265.00",
                    count: "4800",
                    total: "￥466200.00",
                    max:"免保证金",
                    money:"优惠金额"
                },
                {
                    num: "3",
                    title: "东方国宾酒代理政策2（区级）",
                    agentPrice: "￥265.00",
                    count: "4800",
                    total: "￥466200.00",
                    max:"八折优惠",
                    money:"优惠金额"
                },

            ]
        };
    },
    onLoad(option) {
    },
    onShow() {
        this.getProductList();
    },
    methods: {
        showInfo1: function(id) {
            console.log(id);
            this.activeIndex = id;
        },
        showInfo: function(num) {
            console.log(num);
            this.word= num;
        },
        getProductList(count = 2) {
            this.productList = [];
            for (let i = 0; i < count; i++) {
                this.productList.push({
                    num: "156468545222",
                    status: this.statusIndex,
                    count: "120瓶",
                    surplus: "1200瓶",
                    price: "¥500000.00",
                    name: "张东",
                    unit: "王哥农化烟酒商行",
                    date: "2022-08-31 12:12:56"
                });
            }

        },
        dateChange(d) {
            uni.showToast({
                icon: "none",
                title: d
            });
        },
        tabSelect(e) {
            this.statusIndex = e.index;
            this.getProductList(Math.ceil(Math.random() * 5));
        },
        selectClick(e) {
            console.log(e.name);
        },
        addDeliverGoods() {
            uni.navigateTo({
                url: "/pages/admin/agentContractDeliverGoods/deliverGoodsToExamine?status=" + this.statusIndex
            });
        },
        gotoDetail() {
            uni.navigateTo({
                url: "/pages/admin/agentContractDeliverGoods/contractDeliveryDetails?fnStatus=0&status=" + this.statusIndex
            });
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

.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}

.test {
    width: 10rpx;
    height: 0rpx;
    float: right;
    top: 0;
    bottom: 120px;
    border-color: orange;
    position: relative;
}
.text {
    position: relative;
}
.ding {
    position: absolute;
    right: 0;
    top: 0;
    width: 28px;
    height: 18px;
}

.gou {
    position: absolute;
    right: 0;
    top: 0;
    width: 28px;
    height: 18px;
}
.you {
    position: absolute;
    right: 0;
    top: 0;
    width: 78px;
    height: 18px;
}
.jiao {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-bottom: 28px solid #e54d42;
    border-left: 28px solid transparent;
}
.icon{
    position: absolute;
    bottom: 0;
    right: 0;
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

.contentBox {
    position: relative;
    top: calc(var(--status-bar-height) + 260rpx);
    padding-bottom: 120rpx;
}

.header {
    position: fixed;
    left: 0;
    z-index: 1;
}
</style>
