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
                <view class="text-lg">合同发货订单</view>
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
                        <u-tabs itemStyle="width:25%;height:88rpx;white-space:nowrap" activeStyle="font-size:32rpx" inactiveStyle="color:gray;font-size:20rpx" lineColor="red" :list="activityList" @click="tabSelect"></u-tabs>


                        <view class="bg-white padding-tb flex justify-between">
                            <view class="text-lg text-bold" @click="selectDateShow = true">
                                <text>2022年9月</text>
                                <text style="font-size: 38rpx" class="cuIcon-unfold"></text>
                            </view>
                            <view>结算方式：现结 <text style="font-size: 32rpx" class="cuIcon-triangledownfill"></text></view>
                        </view>
                    </view>
                </view>
            </view>
        </u-navbar>
        <!--头部-->
        <view class="wrap">
            <view class="padding-lr-sm contentBox">

                <!--商品列表-->

                <view class="product margin-top-sm">
                    <view class="flex flex-wrap justify-between">
                        <view @click="jumpDetails" v-for="(item,index) in productList" :key="index" style="width: 100%" class="boxShadow margin-bottom-sm">
                            <view class="flex align-center justify-between">
                            	<view class="flex align-center text-red">
                            		<text class="cuIcon-time margin-right-xs" style="font-size: 42rpx;"></text>
									<view class="text-lg">{{ activityList[item.status].name }}</view>
								</view>
								<button v-if="activityList[item.status].name=='待支付'" class="cu-btn u-border bg-white">立即支付</button>
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
        </view>
        <u-popup closeable :show="selectDateShow" @close="close" @open="open">
            <view class="">
                <view class="padding-tb text-center">
                    <text class="text-lg">选择时间</text>
                </view>
                <view class="flex flex-wrap u-border-top padding-tb">
                    <text @click="nearFutureIndex = index" :class="nearFutureIndex == index?'bg-red':'bg-gray'" class="padding-sm margin-lr-sm radius" v-for="(item,index) in nearFuture" :key="index">{{ item }}</text>
                </view>
                <selectDate></selectDate>
                <view class="flex justify-center">
                    <button class="cu-btn bg-red radius margin-tb-sm" style="width: 90%;" @click="close">确定</button>
                </view>
            </view>
        </u-popup>
    </view>
</template>

<script>
import selectDate from '/src/pages/admin/agentContractDeliverGoods/components/fxb-select-date'
import renDropdownFilter from "/src/components/ren-dropdown-filter/ren-dropdown-filter";

export default {
    name: "productList",
    components: {
        renDropdownFilter,
        selectDate
    },
    data() {
        return {
            selectDateShow:false,
            selectShow: false,
            statusIndex:0,
            screenResult: "",
            activityList: [
                {
                    name: "待支付"
                },
                {
                    name: "进行中"
                },
                {
                    name: "已完成"
                },
                {
                    name: "全部"
                }
            ],
            productList: [],
            nearFutureIndex:0,
            nearFuture:[
                "近一个月",
                "近三个月",
                "近半年"
            ]
        };
    },
    onLoad(option) {
    },
    onShow() {
        this.getProductList()
    },
    methods: {
        getProductList(){
            this.productList = [
                {
                    num:"156468545222",
                    status:0,
                    count:"120瓶",
                    surplus:"1200瓶",
                    price:"¥500000.00",
                    name:"张东",
                    unit:"王哥农化烟酒商行",
                    date:"2022-08-31 12:12:56"
                },
                {
                    num:"156468545222",
                    status:1,
                    count:"120瓶",
                    surplus:"1200瓶",
                    price:"¥500000.00",
                    name:"张东",
                    unit:"王哥农化烟酒商行",
                    date:"2022-08-31 12:12:56"
                },
                {
                    num:"156468545222",
                    status:2,
                    count:"120瓶",
                    surplus:"1200瓶",
                    price:"¥500000.00",
                    name:"张东",
                    unit:"王哥农化烟酒商行",
                    date:"2022-08-31 12:12:56"
                },
                {
                    num:"156468545222",
                    status:3,
                    count:"120瓶",
                    surplus:"1200瓶",
                    price:"¥500000.00",
                    name:"张东",
                    unit:"王哥农化烟酒商行",
                    date:"2022-08-31 12:12:56"
                }
            ]
        },
        dateChange(d) {
            uni.showToast({
                icon: "none",
                title: d
            });
        },
        tabSelect(e) {
            this.statusIndex = e.index
            if (e.index==0){
                this.getProductList()
            }
            if (e.index==1){
                this.productList = [
                    {
                        num:"156468545222",
                        status:0,
                        count:"120瓶",
                        surplus:"1200瓶",
                        price:"¥500000.00",
                        name:"张东",
                        unit:"王哥农化烟酒商行",
                        date:"2022-08-31 12:12:56"
                    },
                    {
                        num:"156468545222",
                        status:1,
                        count:"120瓶",
                        surplus:"1200瓶",
                        price:"¥500000.00",
                        name:"张东",
                        unit:"王哥农化烟酒商行",
                        date:"2022-08-31 12:12:56"
                    }
                ]
            }
        },
        selectClick(e) {
            console.log(e.name);
        },
        jumpDetails(){
            uni.navigateTo({
                url:"/pages/admin/agentContractDeliverGoods/contractDeliveryDetails?fnStatus=1&status="+(this.statusIndex==3?0:this.statusIndex)
            })
        },
        open() {
            // console.log('open');
        },
        close() {
            this.selectDateShow = false
            // console.log('close');
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
    top: calc(var(--status-bar-height) + 364rpx);
    padding-bottom: 40rpx;
}

.header {
    position: fixed;
    left: 0;
    z-index: 1;
}
.boxShadow {
    padding: 30rpx 20rpx;
    background: white;
    border-radius: 10rpx;
    box-shadow: 4rpx 4rpx 16rpx #e6dee6;
}
</style>
