<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" rightText="新增招商" @rightClick="switchOrder"
                  :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }">
            <view slot="left" class="u-nav-slot text-gray">
                <text @click="back" class="cuIcon-back" style="font-size: 32rpx"></text>
                <text @click="switchCrowdFunding" :class="isCrowdFunding?'text-black text-xl':'text-gray'"
                      class="margin-left-sm text-lg">我的众筹
                </text>
                <text @click="switchCrowdFunding" :class="isCrowdFunding?'text-gray':'text-black text-xl'"
                      class="margin-left-sm text-lg">我的招标
                </text>
            </view>
        </u-navbar>

        <view :style="'margin-top:' + CustomBar + 'px'">
            <view style="width:750rpx" class="search bg-white padding-bottom-xs">
                <!--产品列表导航-->
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
                    <u-tabs itemStyle="height:88rpx;white-space:nowrap;"
                            inactiveStyle="color:gray;font-size:24rpx" lineColor="red" :list="activityList"
                            :current="tabIndex"
                            :scrollable="false"
                            @click="tabSelect"></u-tabs>
                </view>
            </view>
            <view class="padding-lr-sm margin-top">
                <view class="flex justify-between align-center">
                    <view class="flex align-center">
                        <view class=" text-lg">九月</view>
                        <view class="cuIcon-triangledownfill" style="font-size: 30px"></view>
                    </view>
                    <view @click="show = true" class="flex text-gray">
                        <view class="cuIcon-filter" style="font-size: 16px"></view>
                        <text>筛选·已选0</text>
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
            <view class="product margin-top-sm">
                <view class="flex flex-wrap justify-between padding-lr-sm">
                    <view @click="jumpDetails(item.status,item.state,item.show)" v-for="(item,index) in orderList"
                          :key="index"
                          style="width: 100%;border-color: rgba(229,77,66,0.2) !important;"
                          class="bg-white padding-sm radius margin-bottom-sm u-border">
                        <view class="flex align-start">
                            <view class="basis-xs">
                                <text
                                    :class="{'bg-orange':item.status==1,'bg-blue':item.status==2,'bg-cyan':item.status==3,'bg-green':item.status==4,'bg-red':item.status==5}"
                                    class="padding-xs" style="border-radius: 10rpx 10rpx 0 10rpx">
                                    {{ activityList[item.status].name }}
                                </text>
                            </view>
                            <view class="basis-lg">
                                <view style="width: 400rpx" class="text-lg text-bold text-cut">东方国宾·尊致酒条码招商尊致酒条码招商
                                </view>
                                <view class="text-gray margin-tb-xs">项目编号：1546545142312</view>
                                <view class="flex align-center text-sm">
                                    <text style="padding: 0 2px;border-color: orange !important;"
                                          class="bg-orange u-border light radius margin-right-xs">平台托管
                                    </text>
                                    <text style="padding: 0 2px;border-color: orange !important;"
                                          class="bg-orange u-border light radius">收益率:16.5%~22.5%
                                    </text>
                                </view>
                            </view>
                            <fxbImage width="130" height="130" class="basis-xs radius"
                                      src="/productDetails/Slice 1.png"></fxbImage>
                        </view>

                        <view class="bg-gray light radius padding-sm padding-tb flex flex-wrap margin-top-sm text-sm">
                            <view class="flex align-center w50 text-gray text-cut">
                                <text class="cuIcon-goods"></text>
                                <text class="margin-left-xs">商品总量：</text>
                                <text class="text-black">21000瓶</text>
                            </view>
                            <view class="flex align-center w50 text-gray text-cut">
                                <text class="cuIcon-recharge"></text>
                                <text class="margin-left-xs">商品总额：</text>
                                <text class="text-black">5000000元</text>
                            </view>
                            <view class="flex align-center w50 text-gray margin-top text-cut">
                                <text class="cuIcon-sponsor"></text>
                                <text class="margin-left-xs">最低购买：</text>
                                <text class="text-black">10000元起</text>
                            </view>
                            <view class="flex align-center w50 text-gray margin-top text-cut">
                                <text class="cuIcon-peoplelist"></text>
                                <text class="margin-left-xs">参与人数：</text>
                                <text class="text-black">不限</text>
                            </view>
                        </view>


                        <view v-if="isCrowdFunding&&item.status!=1" class="margin-top-sm">
                            <text>剩余天数：15天23时12分</text>
                            <!--                            <u-slider data-chare="10" v-model="value" disabled-->
                            <!--                                      :style="{'&#45;&#45;value':10}">-->
                            <!--                            </u-slider>-->
                            <view class="flex align-center">
                                <fxbSlider :progress="progress"></fxbSlider>
                            </view>

                            <view class="flex align-center justify-between text-sm">
                                <view class="flex align-center w50 text-gray text-cut">
                                    <text class="cuIcon-people"></text>
                                    <text class="margin-left-xs">报名人数：</text>
                                    <text class="text-orange">12人</text>
                                </view>
                                <view class="flex justify-end align-center w50 text-gray text-cut">
                                    <text class="cuIcon-recharge"></text>
                                    <text class="margin-left-xs">已筹金额：</text>
                                    <text class="text-orange">¥2500000.00</text>
                                </view>
                            </view>
                        </view>
                        <view v-if="!isCrowdFunding&&item.status!=1" class="margin-top-sm">
                            <text>招标天数：15天</text>
                            <view class="flex justify-between align-center margin-top-sm">
                                <view style="border-color: #E54D42 !important;"
                                      class="flex-sub u-border radius padding text-center">
                                    <view class="text-lg text-bold">10
                                        <text class="text-sm">人</text>
                                    </view>
                                    <text class="text-gray margin-top-sm">招标人数</text>
                                </view>
                                <view style="border-color: #E54D42 !important;"
                                      class="flex-sub u-border radius padding text-center margin-lr-sm">
                                    <view class="text-lg text-orange text-bold">10
                                        <text class="text-sm">人</text>
                                    </view>
                                    <text class="text-gray margin-top-sm">招标人数</text>
                                </view>
                                <view style="border-color: #E54D42 !important;"
                                      class="flex-sub u-border radius padding text-center">
                                    <view class="text-lg text-red text-bold">10
                                        <text class="text-sm">人</text>
                                    </view>
                                    <text class="text-gray margin-top-sm">招标人数</text>
                                </view>
                            </view>
                        </view>

                        <view v-if="item.status==1" class="flex align-center justify-between margin-top-sm">
                            <text>众筹天数：15天</text>
                            <button class="cu-btn line-red round">确认发布</button>
                        </view>


                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import ScreenAlcohol from "/src/pages/agent/components/fxb-screen-alcohol";
import fxbImage from "/src/components/fxb/fxb-image";
import fxbSlider from "/src/components/fxb/fxb-slider";

export default {
    name: "tenderIndex",
    components: { ScreenAlcohol, fxbImage, fxbSlider },
    data() {
        return {
            progress: 60,
            isCrowdFunding: true,
            value: 30,
            statusIndex: 0,
            show: false,
            tabIndex: 0,
            activityList:[
                {
                    name: "全部"
                },
                {
                    name: "待发布"
                },
                {
                    name: "众筹中"
                },
                {
                    name: "已结束"
                }
            ],
            orderList: [],
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
    onLoad() {
        this.getDataList()
    },
    methods: {
        switchCrowdFunding() {
            this.isCrowdFunding = !this.isCrowdFunding;
            this.tabIndex = 0;
            !this.isCrowdFunding ? this.activityList = [
                {
                    name: "全部"
                },
                {
                    name: "待发布"
                },
                {
                    name: "进行中"
                },
                {
                    name: "评标中"
                },
                {
                    name: "已公布"
                },
                {
                    name: "已结束"
                }
            ] : this.activityList = [
                {
                    name: "全部"
                },
                {
                    name: "待发布"
                },
                {
                    name: "众筹中"
                },
                {
                    name: "已结束"
                }
            ];
            this.getDataList();
        },
        switchOrder() {
            uni.navigateTo({ url: "pages/admin/tender/releaseTender" });
        },
        getDataList(){
            this.orderList = []
            for (let i = 0; i < this.activityList.length; i++) {
                this.orderList.push(
                    {
                        title: "申请单号：156468545222",
                        num: "213234233543",
                        product: "东方国宾·尊致53°酱香型白酒500ml瓶装",
                        grad: "酱香型  53°",
                        agentProduct: "￥275.00",
                        region: "王哥农化烟酒商行",
                        name: "张某人",
                        Reimbursement: "￥1500.00",
                        term: "2022-08-30 至 2025-08-29",
                        date: "2022-08-30 12:23:23",
                        status: this.tabIndex==0?1:this.tabIndex
                    }
                )
            }
        },
        transStatus(status) {
            const tempArr = ["待开始", "投标中", "评标中", "待支付", "已完成", "废标"];
            return tempArr[status - 1];
        },
        back() {
            uni.navigateBack({
                delta: 1
            });
        },
        close() {
            this.show = false;
        },
        open() {
        },
        tabSelect(e) {
            this.tabIndex = e.index;
            this.getDataList();
            const tempArr = [
                "item",
                "item.status === 1",
                "item.status === 2",
                "item.status === 3 ",
                " item.status === 4",
                "item.status === 5",
                "item.status === 6"];
            this.productList = this.orderList.filter(item => {
                return eval(tempArr[e.index]);
            });
        },
        jumpDetails(status, state, show) {
            uni.navigateTo({
                url: `pages/admin/tender/tenderDetails?status=${status}&state=${state}&show=${show}&statusText=${this.activityList[status].name}&isCrowdFunding=${this.isCrowdFunding}`
            });
        }
    }
};
</script>

<style lang="scss" scoped>
$value: var(--value);
.contentBox {
    position: relative;
    top: calc(var(--StatusBar) + 250rpx);
    padding-bottom: 40rpx;
}

.textBorderLeft {
    width: 8rpx;
    height: 30rpx;
    background: #E54D42;
    border-radius: 8rpx;
    transform: translateX(-26rpx);
}

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

/deep/ .u-navbar__content__left--hover {
    opacity: 1 !important;
}

/deep/ .uni-slider-handle-wrapper {
    .uni-slider-track {
        background: linear-gradient(90deg, #FFD8D5 0%, #FF5C50 100%) !important;
        height: 6px !important;
        border-radius: 3px !important;
    }

    .uni-slider-thumb {
        width: 42px !important;
        height: 20px !important;
        background: #FFFFFF !important;
        border-radius: 10px 10px 10px 10px !important;
        border: 1px solid #E54D42 !important;
        text-align: center;
        line-height: 20px;

        &:after {
            content: "50%";
            display: inline-block;
            color: red;
        }
    }


}

</style>
