<template>
    <view class="content">
        <!--顶部标题-->
        <u-navbar :border="false" :fixed="true" :autoBack="true" @rightClick="switchOrder"
                  :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
                  :safeAreaInsetTop="false">
            <view slot="left" class="u-nav-slot">
                <text style="font-size: 36rpx" class="cuIcon-back"></text>
            </view>
            <view slot="center" class="u-nav-slot">
                <view class="text-lg">{{ isAfterSales ? "售后退款" : "我参与的" }}</view>
                <view style="width:750rpx" class="search bg-white">
                    <view class="bg-white padding-lr">
                        <view class="flex align-center margin-top-sm bg-gray" style="border-radius: 4px">
                            <text class="cuIcon-search text-red"
                                  style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
                            <input
                                type="text"
                                placeholder-class="text-gray text-sm"
                                placeholder="请输入商品名称进行搜索"
                                confirm-type="search"
                            />
                        </view>
                        <!--产品列表导航-->
                        <u-tabs itemStyle="height:88rpx;white-space:nowrap;"
                                :scrollable="false"
                                activeStyle="font-size:32rpx;font-weight:bold"
                                inactiveStyle="color:gray;font-size:26rpx" lineColor="red" :list="activityList"
                                :current="tabIndex"
                                @click="tabSelect"></u-tabs>
                    </view>
                </view>
            </view>
            <view slot="right" class="u-nav-slot">
                <text>{{ isAfterSales ? "我参与的" : "售后退款" }}</text>
            </view>
        </u-navbar>
        <view class="padding-sm contentBox"
              :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }">
            <fxbListCard
                v-for="(item,index) in list"
                :key="index"
                :title="'申请编号：'+item.name"
                :status="activityList[item.status].name"
                :statusColor="item.status==1?'line-orange':item.status==2?'line-red':item.status==3?'line-blue':item.status==4?'line-green':'line-orange'"
                :info-one="{name:'品鉴会名称：',text:'2022观山湖区白酒品鉴会'}"
                :info-three="{name:'开始时间：',text:'2022-09-30 15:30~19:30'}"
                :info-five="{name:'报名费用：',text:'¥500.00',color:'red'}"

            >
                <view @click="gotoDetail(item.state)" slot="bot" class="u-border-top padding-top-sm">
                    报名时间：2022-08-30 12:23:45
                </view>
            </fxbListCard>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import ScreenAlcohol from "/src/pages/agent/components/fxb-screen-alcohol";
import productBox from "/src/pages/admin/components/productBox.vue";
import fxbListCard from "/src/components/fxb/fxb-list-card";

export default {
    components: {
        productBox,
        ScreenAlcohol,
        boxTitle,
        fxbListCard
    },
    data() {
        return {
            //0、待付款1、待收货2、已完成
            show: false,
            isAfterSales: false,
            tabIndex: 0,
            activityList: [
                {
                    name: "全部"
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
            list: [],
            defaultSelected: [
                [0, 0],
                [0, 0]
            ]
        };
    },
    onShow() {
        this.getList();
    },
    onLoad(options) {
        if (options.isAfterSales) {
            this.isAfterSales = options.isAfterSales;
        }
    },
    watch: {
        isAfterSales() {
            this.tabIndex = 0;
            if (this.isAfterSales) {
                this.activityList = [
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
            } else {
                this.activityList = [
                    {
                        name: "全部"
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
            }
            this.getList();
        }
    },
    methods: {
        open() {
            this.show = true;
        },
        close() {
            this.show = false;
        },
        getInfo(e) {
            this.msg = e;
        },
        switchOrder() {
            this.isAfterSales = !this.isAfterSales;
            this.getList(Math.ceil(Math.random() * 10));
        },
        getList(count = 6) {
            this.list = [];
            for (let i = 0; i <= count; i++) {
                this.list.push({
                    imgUrl: "/img/index/img_17%402x.png",
                    oddNumbers: "156468545222",
                    name: "东方国宾·尊致酒53°瓶装500ml",
                    num: "3",
                    price: "300.00",
                    isLogistics: false,
                    status: this.tabIndex,
                    state: Math.ceil(Math.random() - 0.5),
                    btn: this.tabIndex % 2 == 0 ? true : false
                });
            }
        },
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        },
        gotoDetail(state) {
            let status = this.tabIndex == 0 ? 1 : this.tabIndex;
            if (this.isAfterSales) {
                uni.navigateTo({
                    url: "pages/admin/tastingMeeting/participatingTastingMeeting/afterSalesDetails?status=" + status
                });
            } else {
                uni.navigateTo({
                    url: "pages/admin/tastingMeeting/participatingTastingMeeting/particpatingDetails?status=" + status + "&state=" + state
                });
            }
        },
        tabSelect(e) {
            this.tabIndex = e.index;
            this.getList(Math.ceil(Math.random() * 10));
        },
        confirm() {

        }
    }
};
</script>

<style lang="scss" scoped>
.scrollViewBox {
    width: 600rpx;
    box-sizing: border-box;

    .scrollView {
        padding-bottom: 104rpx;
    }

    .botBtn {
        width: 100%;
        position: fixed;
        bottom: 0;
        right: 0;
    }
}

.searchBox {
    position: relative;
}

.border {
    width: 100%;
    height: 2rpx;
    background-color: #e6dee6;
}

.ergodic:last-child {
    margin-bottom: 60px;
}

.search {
    position: fixed;
    width: 100%;
    top: var(--CustomBar-1) !important;
    left: 0;
}

.contentBox {
    position: relative;
    top: calc(var(--StatusBar) + 240rpx);
    padding-bottom: 40rpx;

    .title-Box {
        width: 4px;
        height: 18px;
        background-color: red;
        border-radius: 5px;
    }
}

.foot {
    position: fixed;
    bottom: 0;
    width: 100%;
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
</style>
