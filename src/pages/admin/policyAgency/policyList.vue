<template>
    <view class="content">
        <!--顶部标题-->
        <u-navbar :autoBack="true" rightText="添加政策" title="代理政策管理" @rightClick="rightClick"></u-navbar>
        <view class="screenBox" :style="'top:'+(CustomBar-1)+'px'">
            <view class="bg-white padding-sm">
                <u-tabs :list="activityList" :scrollable="false" :itemStyle="{'white-space':'nowrap','height':'80rpx'}" inactiveStyle="color:gray;font-size:26rpx" lineColor="red"
                        lineWidth="28"
                        @click="tabSelect"></u-tabs>
                <view class="flex align-center bg-gray margin-top-xs padding-lr-sm padding-tb-xs"
                      style="border-radius: 4px">
                    <text class="cuIcon-search text-red"
                          style="font-size: 16px; padding: 4px; margin-left: 4px"></text>
                    <input
                        class="text-df"
                        confirm-type="search"
                        placeholder="请输入商品名称进行搜索"
                        placeholder-class="text-gray"
                        type="text"
                    />
                </view>
                <ren-dropdown-filter :defaultIndex="defaultIndex" :filterData="filterData"
                                     @dateChange="dateChange"
                                     @ed="ed"></ren-dropdown-filter>
                <!--产品列表导航-->
            </view>
        </view>
        <view class="padding-lr-sm" :style="'margin-top:'+(140+CustomBar)+'px;padding-bottom:40rpx' ">
            <!--商品列表-->
            <view v-for="(item, index) in policyList" :key="index">
                <redIconCard v-if="policyList.length>0" class="margin-bottom-sm" :right-status="item.isStatus" :title="item.policyName">
                    <view slot="content">
                        <!--                        <view class="text-bold text-df">{{item.policyName}}</view>-->
                        <view class=" margin-tb-sm">
                            <agencyPolicy :positionArr="item.agentsProvinces"></agencyPolicy>
                        </view>
                        <view class="w100 text-right text-df">
                            <view class="cu-btn line-red light margin-left-xs" @click="seePolicyInfo(item.id)">
                                <text class="cuIcon-delete margin-right-xs"></text> 删除政策
                            </view>
                            <view class="cu-btn line-green light margin-left-xs" @click="seePolicyInfo(item.id)">
                                <text class="cuIcon-newshot margin-right-xs"></text> 发布政策
                            </view>
                            <view class="cu-btn line-blue light margin-left-xs" @click="seePolicyInfo(item.id)">
                                <text class="cuIcon-attention margin-right-xs"></text> 政策详情
                            </view>
                        </view>
                    </view>
                </redIconCard>
            </view>

            <u-empty v-if="policyList.length<1" mode="data" icon="http://cdn.uviewui.com/uview/empty/data.png">
            </u-empty>
        </view>
    </view>
</template>

<script>
import renDropdownFilter from "/src/components/ren-dropdown-filter/ren-dropdown-filter";
import redIconCard from "/src/components/erp/redIconCard/redIconCard";
import agencyPolicy from "/src/components/erp/agencyPolicy";
export default {
    name: "productList",
    components: {
        redIconCard,
        agencyPolicy,
        renDropdownFilter
    },
    data() {
        return {
            height: 0,
            policyList: [],
            positionArr: [
                {
                    city: null,
                    cityAgent: [
                        ["全国", "1", "1", "0"]
                    ]
                }


            ],
            defaultIndex: [0, 0, 0, 0, 0],
            filterData: [
                [
                    { text: "商品分类", value: "" },
                    { text: "白酒", value: 1 },
                    { text: "啤酒", value: 2 },
                    { text: "黄酒", value: 3 },
                    { text: "葡萄酒", value: 4 },
                    { text: "洋酒", value: 5 },
                    { text: "收藏酒", value: 6 }
                ],
                [{ text: "品牌", value: "" }],
                [
                    { text: "价格", value: "" },
                    { text: "不限", value: 1 },
                    { text: "1~99元", value: 2 },
                    { text: "100~299元", value: 3 },
                    { text: "300~599元", value: 4 },
                    { text: "600~999元", value: 5 },
                    { text: "1000~1999元", value: 6 }
                ],
                [
                    { text: "香型", value: "" },
                    { text: "不限", value: 1 },
                    { text: "酱香型", value: 2 },
                    { text: "浓香型", value: 3 },
                    { text: "清香型", value: 4 },
                    { text: "兼香型", value: 5 },
                    { text: "米香型", value: 6 },
                    { text: "凤香型", value: 7 },
                    { text: "特香型", value: 8 },
                    { text: "药香型", value: 9 },
                    { text: "老白干香型", value: 10 },
                    { text: "其他", value: 11 }
                ],
                [
                    {
                        text: "筛选",
                        value: ""
                    }
                ]
            ],
            selectShow: false,
            statusIndex: 0,
            screenResult: "",
            activityList: [
                {
                    name: "已发布(12)"
                },
                {
                    name: "未发布(34)"
                },
                {
                    name: "待审核(34)"
                },
                {
                    name: "未通过(20)"
                }
            ],
            productList: []
        };
    },
    onShow() {
        let res = this.$http.getListByStatus({isStatus:0})
        res.then(data => {
            console.log(data);
            this.policyList = data.data
        })
    },
    methods: {
        rightClick(){
            uni.navigateTo({
                url:'/pages/admin/policyAgency/selectProduct'
            })
        },
        seePolicyInfo(id){
            uni.navigateTo({
                url:'/pages/admin/policyAgency/policyDetails?id='+id
            })
        },
        getProductList() {
            this.productList = [
                {
                    title: "飞天茅台53°瓶装酱香型 500ml",
                    alcohol: "53℃",
                    price: "365.00",
                    capacity: "500ml",
                    num: "2300",
                    imgUrl: require("/src/static/bottle/99.jpeg")
                },
                {
                    title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
                    aromaticType: "酱香型",
                    alcohol: "53℃",
                    price: "365.00",
                    capacity: "500ml",
                    num: "2300",
                    imgUrl: require("/src/static/bottle/88.jpeg")
                },
                {
                    title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
                    aromaticType: "酱香型",
                    alcohol: "53℃",
                    price: "365.00",
                    capacity: "500ml",
                    num: "2300",
                    imgUrl: require("/src/static/bottle/99.jpeg")
                },
                {
                    title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
                    aromaticType: "酱香型",
                    alcohol: "53℃",
                    price: "365.00",
                    capacity: "500ml",
                    num: "2300",
                    imgUrl: require("/src/static/bottle/88.jpeg")
                }
            ];
        },
        ed(res) {
            console.log(res);
        },
        dateChange(d) {
            uni.showToast({
                icon: "none",
                title: d
            });
        },
        tabSelect(e) {
            this.statusIndex = e.index;
            if (e.index == 0) {
                this.getProductList();
            }
            if (e.index == 1) {
                this.productList = [
                    {
                        title: "飞天茅台53°瓶装酱香型 500ml",
                        alcohol: "53℃",
                        price: "365.00",
                        capacity: "500ml",
                        num: "2300",
                        imgUrl: require("/src/static/bottle/99.jpeg")
                    },
                    {
                        title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
                        aromaticType: "酱香型",
                        alcohol: "53℃",
                        price: "365.00",
                        capacity: "500ml",
                        num: "2300",
                        imgUrl: require("/src/static/bottle/88.jpeg")
                    }
                ];
            }
        },
        selectClick(e) {
            console.log(e.name);
        },
        jumpDetails() {
            uni.navigateTo({
                url: "pages/admin/policyAgency/agentDetails"
            });
        },
        release() {
            uni.navigateTo({
                url: "pages/admin/policyAgency/releasePolicy"
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.screenBox{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
}
</style>
