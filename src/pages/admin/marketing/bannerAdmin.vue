<template>
    <view class="content">
        <!--顶部标题-->
        <u-navbar :border="false" :fixed="true" :autoBack="true" @rightClick="switchOrder"
                  :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px'}"
                  :safeAreaInsetTop="false">
            <view slot="left" class="u-nav-slot">
                <text style="font-size: 36rpx" class="cuIcon-back"></text>
            </view>
            <view v-if="!(status==3)" slot="center" class="u-nav-slot">
                <view class="text-lg">{{ status == 0 ? "轮播图管理" : status == 1 ? "品牌管理" : status == 2 ? "活动管理" : ""
                    }}
                </view>
            </view>
            <view v-if="status==3" slot="center" class="u-nav-slot">
                <view class="text-lg">{{ isAfterSales ? "售后退款" : "品鉴会活动" }}</view>
            </view>
            <view v-if="status==3" slot="right" class="u-nav-slot">
                <text>{{ isAfterSales ? "品鉴会活动" : "售后退款" }}</text>
            </view>
        </u-navbar>
        <!--头部-->
        <view class="wrap">
            <view :style="'top:'+CustomBar+'px'" class="search bg-white">
                <view class="bg-white padding-lr-sm">
                    <view class="flex align-center margin-top-sm bg-gray" style="border-radius: 4px">
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
                    <u-tabs itemStyle="width:16%;height:88rpx;white-space:nowrap;"
                            activeStyle="font-weight:bold" inactiveStyle="color:gray;font-size:28rpx;"
                            lineColor="red" :list="status==3&&isAfterSales?activityLists:activityList" @click="tabSelect"
                            :scrollable="status==3&&isAfterSales?false:true"></u-tabs>
                </view>
            </view>
            <view class="wrap">
                <view class="padding-lr Box">
                    <view class="product margin-top-sm">
                        <view class=" flex flex-wrap justify-between">
                            <view class="w100 flex justify-between align-center padding-bottom">
                                <view class="text-xl text-bold">9月
                                    <text class="cuIcon-unfold margin-left-xs"></text>
                                </view>
                                <view @click="show=true" class="text-gray">
                                    <text class="cuIcon-filter"></text>
                                    筛选 · 已选 0
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <u-popup :show="show" :round="10" mode="right" @close="close" @open="open">
                <view class="scrollViewBox" :style="'padding-top: ' + (CustomBar) + 'px;transform:rotate(360deg);'">
                    <scroll-view @touchmove.stop class="scrollView" scroll-y="true"
                                 :style="{ '--ScreenHeight': (ScreenHeight-CustomBar) + 'px' }">
                        <ScreenAlcohol title="价格" @getInfo="screenData.price = $event"
                                       :alcoholList="priceList"></ScreenAlcohol>
                        <ScreenAlcohol title="香型" @getInfo="screenData.scent = $event"
                                       :alcoholList="fragranceList"></ScreenAlcohol>
                        <ScreenAlcohol title="产地" @getInfo="screenData.place = $event"
                                       :alcoholList="placeList"></ScreenAlcohol>
                        <ScreenAlcohol title="度数" @getInfo="screenData.degrees = $event"
                                       :alcoholList="degreesList"></ScreenAlcohol>
                    </scroll-view>
                    <view class="botBtn bg-white padding-sm flex align-center justify-between">
                        <text>已选(1)</text>
                        <view class="flex align-center">
                            <button class="cu-btn u-border bg-white radius margin-right-sm" @click="close">清空</button>
                            <button class="cu-btn bg-red radius" @click="close">确定</button>
                        </view>
                    </view>
                </view>
            </u-popup>
            <view class="padding-lr-sm contentBox " style="padding-bottom: 150rpx">
                <!--商品列表-->
                <fxbListCard
                    @cardClick="jumpDetails(item.status)"
                    v-for="(item,index) in productList"
                    :key="index+'a'"
                    :title="item.title"
                    :statusColor="{'line-orange':item.status==1,'line-red':item.status==2,'line-blue':item.status==3,'line-pink':item.status==4,'line-green':item.status==5}"
                    :status="status==3&&isAfterSales?transStatus(item.status):activityList[item.status].name"
                    :info-one="{name:'轮播图名称：',text:item.product}"
                    :info-three="{name:'有效时长：',text:item.date}"
                    :info-five="{name:'推广费用：',text:item.agentProduct,color:'red'}"
                >
                    <view slot="bot">
                        <view class="u-border-bottom margin-tb"></view>
                        <view class="flex justify-between align-center">
                            <view class="text-gray text-sm">申请时间：{{ item.date }}</view>
                            <button v-if="item.status==3" class="cu-btn bg-red radius sm">立即支付</button>
                            <button v-if="item.status==5" class="cu-btn bg-red radius sm">重新发布</button>
                        </view>
                    </view>
                </fxbListCard>
            </view>
        </view>
        <view v-if="status==0||status == 1||(status==3&&!isAfterSales)" class="botBtn bg-white padding flex">
            <button @click="gotoPath" class="bg-red flex-sub radius cu-btn lg">
                {{ status == 0 ? "新增轮播图" : status == 1 ? "新增品牌专区" : status == 3 ? "发布品鉴会活动" : "" }}
            </button>
        </view>
    </view>
</template>

<script>
import ScreenAlcohol from "/src/pages/agent/components/fxb-screen-alcohol";
import fxbListCard from "/src/components/fxb/fxb-list-card";

export default {
    name: "bannerAdmin",
    components: {
        fxbListCard,
        ScreenAlcohol
    },
    data() {
        return {
            isAfterSales: false,
            show: false,
            status: 0,
            selectShow: false,
            statusIndex: 0,
            screenResult: "",
            activityLists: [
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
                    name: "待支付"
                },
                {
                    name: "进行中"
                },
                {
                    name: "已结束"
                }
            ],
            activityList: [
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
                    name: "待支付"
                },
                {
                    name: "待开始"
                },
                {
                    name: "进行中"
                },
                {
                    name: "已结束"
                }
            ],
            productList: [],
            screenData: {},
            priceList: [
                "不限", "0~99元", "100~299元", "300~599元", "600~999元", "1000~1999元", "2000元以上"
            ],
            fragranceList: [
                "不限", "酱香型", "浓香型", "清香型", "馥郁香型", "兼香型", "凤香型", "老白干香型"
            ],
            placeList: [
                "不限", "四川省", "陕西省", "云南省", "山东省", "北京市"
            ],
            degreesList: [
                "不限", "35°以下", "35°~39°", "40°~49°", "50°以上"
            ]
        };
    },
    onLoad(option) {
        this.status = option.status;
        this.getProductList();
    },
    onShow() {
    },
    watch: {
        isAfterSales() {
            if (this.status == 3 && !this.isAfterSales) {
                this.activityLists = [
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
                        name: "待支付"
                    },
                    {
                        name: "待开始"
                    },
                    {
                        name: "进行中"
                    },
                    {
                        name: "已结束"
                    }
                ];
            } else {
                this.activityLists = [
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
                        name: "已退款"
                    }
                ];
            }
        }
    },
    methods: {
        transStatus(status){
            const tempArr=["全部","待审核","未通过","进行中","已退款"]
            return tempArr[status]
        },
        switchOrder() {
            this.isAfterSales = !this.isAfterSales;
        },
        open() {
            // console.log('open');
        },
        close() {
            this.show = false;
            // console.log('close');
        },
        gotoPath() {
            console.log("ok");
            if (this.status == 0) {
                uni.navigateTo({
                    url: "/pages/admin/marketing/addBanner"
                });
            } else if (this.status == 1) {
                uni.navigateTo({
                    url: "/pages/admin/marketing/addBrand"
                });
            } else if (this.status == 2) {
                uni.navigateTo({
                    url: "/pages/admin/marketing/addActivity"
                });
            } else {
                uni.navigateTo({
                    url: "/pages/admin/marketing/releaseActivity"
                });
            }

        },
        getProductList(count = 3) {
            this.productList = [];
            for (let i = 0; i < count; i++) {
                this.productList.push({
                    title: "申请单号：156468545222",
                    num: "213234233543",
                    product: "2022观山湖区白酒品鉴会",
                    grad: "酱香型  53°",
                    agentProduct: "￥275.00",
                    region: "王哥农化烟酒商行",
                    name: "张某人",
                    Reimbursement: "￥1500.00",
                    term: "2022-08-30 至 2025-08-29",
                    date: "3天23小时",
                    status: this.statusIndex == 0 ? (Math.floor(Math.random() * 5) + 1) : this.statusIndex
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
            if (this.isAfterSales) {
                this.statusIndex = e.index;
                const tempArr = [
                    "item",
                    "item.status === 1",
                    "item.status === 2",
                    "item.status === 3",
                    "item.status === 4 "
                ];
                this.productList.filter(item => {
                    return eval(tempArr[e.index]);
                });
                this.getProductList(Math.ceil(Math.random() * 6));
            } else {
                this.statusIndex = e.index;
                this.getProductList(Math.ceil(Math.random() * 6));
            }
        },
        selectClick(e) {
            console.log(e.name);
        },
        jumpDetails(status) {
            if (this.status == 0) {
                uni.navigateTo({
                    url: "/pages/admin/marketing/bannerDetails?status=" + status
                });
            } else if (this.status == 1) {
                uni.navigateTo({
                    url: "/pages/admin/marketing/brandDetails?status=" + status
                });
            } else if (this.status == 2) {
                uni.navigateTo({
                    url: "/pages/admin/marketing/activityDetails?status=" + status
                });
            } else if (this.status == 3 && !this.isAfterSales) {
                uni.navigateTo({
                    url: "/pages/admin/marketing/appraiseActivityDetails?status=" + status
                });
            } else {
                uni.navigateTo({
                    url: "pages/admin/tastingMeeting/promoteAfterSalesDetails?status=" + status
                });
            }
        }
    }

}
;
</script>

<style lang="scss" scoped>
.scrollViewBox {
    width: 600rpx;
    box-sizing: border-box;

    .scrollView {
        height: var(--ScreenHeight) !important;
        padding-bottom: 104rpx;
    }

    .botBtn {
        width: 100%;
        position: fixed;
        bottom: 0;
        right: 0;
    }
}

.botBtn {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}

.search {
    position: fixed;
    width: 100%;
    left: 0;
    z-index: 999;
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
    padding-bottom: 40rpx;
}

.Box {
    position: relative;
    top: calc(var(--status-bar-height) + 260rpx);

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
