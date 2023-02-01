<template>
    <view class="content" style="padding-bottom: 100rpx">
        <!--顶部标题-->
        <u-navbar :border="false" :fixed="true" :autoBack="true"
                  :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
                  :safeAreaInsetTop="false">
            <view slot="left" class="u-nav-slot">
                <text style="font-size: 36rpx" class="cuIcon-back"></text>
            </view>
            <view slot="center" class="u-nav-slot">
                <view class="text-lg">我的云库存</view>
                <view style="width:750rpx" class="search bg-white">
                    <view class="bg-white padding-lr-sm">
                        <view class="flex align-center margin-bottom-sm margin-top bg-gray" style="border-radius: 4px">
                            <text class="cuIcon-search"
                                  style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
                            <input
                                class="text-df"
                                type="text"
                                placeholder-class="text-gray"
                                placeholder="请输入商品名称进行搜索"
                                confirm-type="search"
                                style="height: 34px"
                            />
                        </view>

                        <!--产品列表导航-->
                        <!--                        <u-tabs itemStyle="width:25%;height:88rpx;white-space:nowrap" activeStyle="font-size:32rpx"-->
                        <!--                                inactiveStyle="color:gray;font-size:20rpx" lineColor="red" :list="activityList"-->
                        <!--                                @click="tabSelect"></u-tabs>-->

                    </view>
                </view>
            </view>
            <view slot="right" class="u-nav-slot">
                <view @click="gotoPth('/pages/admin/cloudInventory/cloudInventoryRecords')"
                >记录查询</view>
            </view>
        </u-navbar>
        <view class="padding-lr-sm padding-tb" :style="`margin-top:${CustomBar+StatusBar+30}px`">
            <view class="whiteBoxShadow margin-top-sm" v-for="(item,index) in contractList" :key="index">
                <!--                  :style="item.isLoan?'background: #f1f1f1':''">-->
                <!--                <view v-show="item.isLoan" class="flex align-center justify-between margin-bottom-sm">-->
                <!--                    <text class="text-sm text-red">该合同有货款未结清，请结清货款后再补货</text>-->
                <!--                    <button class="cu-btn bg-red radius sm">申请贷款</button>-->
                <!--                </view>-->
                <!--                <view class="flex align-center justify-between">-->
                <!--                    <view style="width: 70%" class="text-bold text-lg text-cut">{{ item.title }}</view>-->
                <!--                    <view style="border-color: #3c9cff" class="bg-blue light radius u-border">合同详情</view>-->
                <!--                </view>-->
                <!--                <view class="flex justify-between align-center text-gray padding-tb-sm">-->
                <!--                    <view>合同编号：{{ item.contractNum }}</view>-->
                <!--                    <view>结算方式：现结</view>-->
                <!--                </view>-->
                <!--                <view v-show="item.renewal" class="flex justify-end">-->
                <!--                    <button @click="gotoPth('/pages/agentProducts/agentProducts')"-->
                <!--                            class="cu-btn bg-red radius margin-tb">续签合同-->
                <!--                    </button>-->
                <!--                </view>-->
                <view v-for="(child,indexes) in item.productList" :key="indexes">
                    <view @click="gotoPth('/pages/admin/cloudInventory/cloudInventoryRecords')" class="flex align-center">
                        <fxbImage class="radius" style="width: 140rpx;height: 140rpx;"
                                  src="/productDetails/Slice%201.png"
                                  mode="aspectFill"></fxbImage>
                        <view style="height: 140rpx;width: 75%"
                              class="margin-left-sm flex flex-direction justify-around">
                            <view class="text-bold text-lg">{{ child.title }}</view>
                            <!--                            <view class="text-sm text-gray flex justify-between align-center">-->
                            <!--                                <view>规格：500ml*6瓶/件</view>-->
                            <!--                                <view class="text-left" style="min-width: 220rpx">酱香型 | 53° | 瓶装</view>-->
                            <!--                            </view>-->
                            <view class="text-sm text-gray flex justify-between align-center">
                                <view>香型：酱香型</view>
                                <view>度数：53°</view>
                                <view>容量：500ml</view>
                            </view>
                            <view class="flex align-center justify-start" style="min-width: 220rpx">
                                <text>代理价：</text>
                                <text class="text-red text-bold">￥365.00/瓶</text>
                            </view>
                            <!--                            <view class="text-sm text-gray flex justify-between align-center">-->
                            <!--                                <text class="text-black">零售价：￥365.00</text>-->
                            <!--                                <view class="flex align-center justify-start" style="min-width: 220rpx">-->
                            <!--                                    <text>代理价：</text>-->
                            <!--                                    <text class="text-red">￥265.00</text>-->
                            <!--                                </view>-->
                            <!--                            </view>-->
                        </view>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <view class="flex align-center">
                            <text class="text-gray">剩余瓶数：</text>
                            <text>1200瓶</text>
                        </view>
                        <!--                        <view class="flex align-center">-->
                        <!--                            <text>-->
                        <!--                                <text class="text-gray">库存预警:</text>-->
                        <!--                                100瓶-->
                        <!--                            </text>-->
                        <!--                        </view>-->
                    </view>
                    <view class="flex justify-end margin-top-sm">
                        <button v-for="(child,index) in item.fnList" :key="index"
                                class="cu-btn sm bg-white radius u-border text-bold margin-left-sm">{{ child.btn }}
                        </button>
<!--                        <button v-for="(child,index) in item.fnList" :key="index"-->
<!--                                @click="child.isPopup?(show = true):gotoPth('/pages/admin/cloudInventory/cloudInventoryRecords')"-->
<!--                                class="cu-btn sm bg-white radius u-border margin-left-sm">{{ child.btn }}-->
<!--                        </button>-->
                    </view>
                </view>
            </view>
        </view>
        <!--        <u-popup :show="show" mode="bottom" @close="close" @open="open" closeable>-->
        <!--            <view class="bg-white radius padding-lr-xl padding-tb">-->
        <!--                <view class="text-center margin-bottom text-bold text-lg">修改预警值</view>-->
        <!--                <view class="margin-bottom-xl text-center flex align-center">-->
        <!--                    <text>预警值：</text>-->
        <!--                    <u-input type="number" border="surround" clearable v-model="value"></u-input>-->
        <!--                </view>-->
        <!--                <view class="flex justify-between align-center margin-top-xl">-->
        <!--                    <button class="cu-btn bg-gray u-border radius" @click="close">取消</button>-->
        <!--                    <button class="cu-btn bg-red radius" @click="close">确认修改</button>-->
        <!--                </view>-->
        <!--            </view>-->
        <!--        </u-popup>-->

    </view>
</template>

<script>
import product from "/src/pages/admin/components/product";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbImage from "/src/components/fxb/fxb-image";

export default {
    components: {
        boxTitle,
        product,
        fxbImage
    },
    data() {
        return {
            value: 1,
            show: false,
            statusIndex: 0,
            radioValue: "选择门店",
            activityList: [
                {
                    name: "待审核(1)"
                },
                {
                    name: "未通过(1)"
                }
            ],
            contractList: []
        };
    },
    created() {
        this.getContractList();
    },
    methods: {
        getContractList(count = 3) {
            this.contractList = [];
            for (let i = 0; i < count; i++) {
                this.contractList.push(
                    {
                        title: "东方国宾·尊致酒500ml酱香型合同",
                        contractNum: "213234233543",
                        isLoan: (i % 2 == 1 && this.statusIndex == 0) ? true : false,
                        renewal: this.statusIndex == 0 ? false : true,
                        fnList: [
                            // {
                            //     btn: "",
                            //     path: "",
                            //     isPopup: false
                            // },
                            // {
                            //     btn: "库存预警",
                            //     path: "",
                            //     isPopup: true
                            // },
                            {
                                btn: "申请补货",
                                path: "/pages/admin/cloudInventory/cloudInventoryRecords",
                                isPopup: false
                            },
                            {
                                btn: "一件发货",
                                path: "",
                                isPopup: false
                            }
                        ],
                        productList: [
                            {
                                title: "飞天茅台53°瓶装酱香型 500ml"
                            }
                        ]
                    }
                );
            }

        },
        gotoPth(path) {
            uni.navigateTo({
                url: path
            });
        },
        tabSelect(e) {
            this.statusIndex = e.index;
            this.getContractList(Math.ceil(Math.random() * 5));
        },
        open() {
            // console.log('open');
        },
        close() {
            this.show = false;
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

.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
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
