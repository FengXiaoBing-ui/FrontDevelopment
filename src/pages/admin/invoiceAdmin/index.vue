<template>
    <view class="content bg-gray">
        <!--顶部标题-->
        <u-navbar :border="false" :fixed="true" :autoBack="true" @rightClick="clickSwitch"
                  :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
                  :safeAreaInsetTop="false">
            <view slot="left" class="u-nav-slot">
                <text style="font-size: 36rpx" class="cuIcon-back"></text>
            </view>
            <view slot="center" class="u-nav-slot">
                <view class="text-lg">{{ isPin ? "销项发票" : "进项发票" }}</view>
            </view>
            <view slot="right" class="u-nav-slot">
                {{ !isPin ? "销项发票" : "进项发票" }}
            </view>
        </u-navbar>
        <view :style="'position:fixed;z-index:9;top:'+((CustomBar*2)-5)+'rpx'" class="w100 bg-white padding-tb-sm padding-lr-sm flex flex-direction align-center">
            <view class="w100 flex justify-center align-center bg-gray" style="border-radius: 4px">
                <text class="cuIcon-search text-red" style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
                <input
                    class="text-df w100"
                    type="text"
                    placeholder-class="text-gray"
                    placeholder="请输入商品名称进行搜索"
                    confirm-type="search"
                />
            </view>
            <u-tabs class="w100" :current="statusIndex" :scrollable="false" itemStyle="height:88rpx" activeStyle="font-size:38rpx"
                    inactiveStyle="color:gray" lineColor="red" :list="activityList"
                    @click="tabSelect"></u-tabs>
<!--            <HM-filterDropdown :menuTop="252+(StatusBar*2)" :filterData="filterData"-->
<!--                               :defaultSelected="defaultSelected"-->
<!--                               :key="filterData.toString()"-->
<!--                               :updateMenuName="true" @confirm="confirm"-->
<!--                               dataFormat="Object"></HM-filterDropdown>-->

            <fxbDrop :top="126+StatusBar" :filterData="filterData"></fxbDrop>
        </view>

        <view class="wrap">
            <view class="padding-lr invoiceBox margin-top-sm">
                <!--商品列表-->
                <view @click="jumpDetails(item.status)" v-for="(item,index) in list" :key="index" style="width: 100%"
                      class="whiteBoxShadow margin-bottom">
                    <view class="flex justify-between align-center">
                        <view class="text-red flex align-center">
                            <u-icon name="clock" color="red" size="18"></u-icon>
                            <text class="margin-left-xs">{{ activityList[item.status].name }}</text>
                        </view>
                        <button v-show="item.status==2" class="cu-btn bg-red radius sm">去开票</button>
                    </view>
                    <view class="flex align-center margin-top">
                        <view class="text-gray">订单编号：</view>
                        <view>{{ item.id }}</view>
                    </view>
                    <view class="flex align-center margin-top">
                        <view class="text-gray">订单类型：</view>
                        <view>{{ item.orderType }}</view>
                    </view>
                    <view class="flex align-center margin-top">
                        <view class="text-gray">公司名称：</view>
                        <view>{{ item.company }}</view>
                    </view>
                    <view v-show="item.status==2" class="flex align-center margin-top">
                        <view class="text-gray">开票时间：</view>
                        <view>{{ item.time }}</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import fxbDrop from "/src/components/fxb/fxb-drop-down-box"
export default {
    name: "productList",
    components:{
        fxbDrop
    },
    data() {
        return {
            isPin: true,
            selectShow: false,
            statusIndex: 0,
            screenResult: "",
            activityList: [
                {
                  name:"全部"
                },
                {
                    name: "已开票"
                },
                {
                    name: "未开票"
                }
            ],
            list: [],
            filterData: [],
            defaultSelected: [
                [0, 0],
                [0, 0]
            ]
        };
    },
    onLoad(option) {
        this.getFilterData()
    },
    onShow() {
        this.getList();
    },
    methods: {
        confirm(e){
            console.log(e);
            shows:false;
        },
        clickSwitch() {
            this.statusIndex = 0;
            this.isPin = !this.isPin;
            this.getList(this.statusIndex, Math.ceil(Math.random() * 4));
            this.getFilterData();
        },
        getFilterData(){
            this.filterData = [
                {
                    "name": "2022年9月",
                    "type": "hierarchy-column",
                    "submenu": [
                        {
                            "name": "2022年9月",
                            "value":"2022年9月"
                        },
                        {
                            "name": "2022年8月",
                            "value":"2022年8月"
                        },
                        {
                            "name": "2022年7月",
                            "value":"2022年7月"
                        },
                        {
                            "name": "2022年6月",
                            "value":"2022年6月"
                        },
                        {
                            "name": "2022年5月",
                            "value":"2022年5月"
                        },
                        {
                            "name": "2022年4月",
                            "value":"2022年4月"
                        },
                        {
                            "name": "2022年3月",
                            "value":"2022年3月"
                        },
                        {
                            "name": "2022年2月",
                            "value":"2022年2月"
                        },
                        {
                            "name": "2022年1月",
                            "value":"2022年1月"
                        },
                    ]
                },
                {
                    "name": "筛选·已选0",
                    "type": "radio",
                    "submenu": [
                        {
                            "name": "开票状态",
                            "submenu": [
                                {
                                    "name": "全部",
                                    "value": "全部"
                                },
                                {
                                    "name": "已开票",
                                    "value": ""
                                },
                                {
                                    "name": "未开票",
                                    "value": ""
                                },
                            ]
                        },
                        {
                            "name": "订单类型",
                            "submenu": [
                                {
                                    "name": "全部",
                                    "value": "全部"
                                },
                                {
                                    "name": "合同补货",
                                    "value": ""
                                },
                                {
                                    "name": "样品订单",
                                    "value": ""
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        getList(count = 2) {
            this.list = [];
            for (let i = 0; i <= count; i++) {
                this.list.push(
                    {
                        id: "121553123131231",
                        orderType: "合同发货",
                        policyType: "普通发票",
                        amount: "188",
                        tax: "13",
                        company: "贵州好酒选科技电子商务有限公司",
                        taxId: "1545FJIS544WD5A45W4D",
                        time: "2022-08-31 12:12:55",
                        status: this.statusIndex==0?(Math.floor(Math.random() * 2)+1):this.statusIndex
                    }
                );
            }
        },
        tabSelect(e) {
            this.statusIndex = e.index;
            this.getList(Math.ceil(Math.random() * 4));
        },
        selectClick(e) {
            console.log(e.name);
        },
        jumpDetails(status) {
            if (status==1){
                uni.navigateTo({
                    url: "/pages/index/applicationSample/billDetailsIndex?singleAndTwo=" + status
                });
            }
            if (status==2){
                uni.navigateTo({
                    url: "/pages/admin/invoiceAdmin/noInvoicingDetails?isPin=" + this.isPin
                });
            }

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

.invoiceBox {
    position: relative;
    top: calc(var(--status-bar-height) + 340rpx);
    padding-bottom: 40rpx;
}

.header {
    position: fixed;
    left: 0;
    z-index: 1;
}
</style>
