<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="库存记录" :autoBack="true">
        </u-navbar>
        <view class="bg-white padding" :style="'margin-top:'+ (CustomBar-1) + 'px;'">
            <view class="flex align-center margin-bottom-sm bg-gray" style="border-radius: 4px">
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
            <HM-filterDropdown :menuTop="210+(StatusBar*2)" :filterData="filterData"
                               :defaultSelected="defaultSelected"
                               :key="filterData.toString()"
                               :updateMenuName="true" @confirm="confirm"
                               dataFormat="Object"></HM-filterDropdown>
            <view>
            </view>
            <!--        <view>库存类型：全部<text style="font-size: 32rpx" class="cuIcon-triangledownfill"></text></view>-->
        </view>
        <view class="padding-lr-sm padding-tb margin-top">
            <view v-for="(item,index) in list" class="whiteBoxShadow margin-top-sm"
                  @click="gotoPath(item.status)">
                <view class="flex">
                    <view class="text-gray">入库类型：</view>
                    <view>{{ item.status === 0 ? "云库存提货" : item.status === 1 ? "合同补货入库" : "退换货入库" }}</view>
                </view>
                <view class="flex margin-top-sm">
                    <view class="text-gray">入库商品：</view>
                    <view>{{ item.goods }}</view>
                </view>
                <view class="flex margin-top-sm">
                    <view class="flex">
                        <view class="text-gray">入库数量：</view>
                        <view>{{ item.number }}瓶</view>
                    </view>
                    <view class="flex margin-left-xl">
                        <view class="text-gray">合计金额：</view>
                        <view class="text-red">￥{{ item.totalAmount }}.00</view>
                    </view>
                </view>
                <view class="flex margin-top-sm">
                    <view class="text-gray">入库时间：</view>
                    <view>{{ item.time }}</view>
                </view>
            </view>
            <!--        <view v-for="item in 5" :key="item" class="whiteBoxShadow margin-bottom-sm">-->
            <!--            <view class="flex justify-between">-->
            <!--                <view class="flex align-center">-->
            <!--                    <text class="text-gray">库存类型：</text>-->
            <!--                    <text>合同发货出库</text>-->
            <!--                </view>-->
            <!--                <view class="flex align-center">-->
            <!--                    <text class="text-gray">订单号：</text>-->
            <!--                    <text>156468545222</text>-->
            <!--                </view>-->
            <!--            </view>-->
            <!--            <view class="flex justify-between margin-top-sm">-->
            <!--                <view class="flex align-center">-->
            <!--                    <text class="text-gray">发货数量：</text>-->
            <!--                    <text>2瓶</text>-->
            <!--                </view>-->
            <!--                <view class="flex align-center">-->
            <!--                    <text class="text-gray">合计金额：</text>-->
            <!--                    <text class="text-red">¥275.00</text>-->
            <!--                </view>-->
            <!--            </view>-->
            <!--            <view class="flex justify-between margin-top-sm">-->
            <!--                <text class="text-gray">剩余数量：</text>-->
            <!--                <text>2000瓶</text>-->
            <!--            </view>-->
            <!--            <view class="flex justify-between margin-top-sm">-->
            <!--                <text class="text-gray">提交时间：</text>-->
            <!--                <text>2022-08-31 12:12:56</text>-->
            <!--            </view>-->
            <!--        </view>-->
        </view>
<!--        <u-popup closeable-->
<!--                 :show="selectDateShow"-->
<!--                 @close="close"-->
<!--                 @open="open">-->
<!--            <view class="">-->
<!--                <view class="padding-tb text-center">-->
<!--                    <text class="text-lg">选择时间</text>-->
<!--                </view>-->
<!--                <view class="flex flex-wrap u-border-top padding-tb">-->
<!--                    <text @click="nearFutureIndex = index" :class="nearFutureIndex == index?'bg-red':'bg-gray'"-->
<!--                          class="padding-sm margin-lr-sm radius" v-for="(item,index) in nearFuture" :key="index">{{ item-->
<!--                        }}-->
<!--                    </text>-->
<!--                </view>-->
<!--                <selectDate></selectDate>-->
<!--                <view class="flex justify-center">-->
<!--                    <button class="cu-btn bg-red radius margin-tb-sm" style="width: 90%;" @click="close">确定</button>-->
<!--                </view>-->
<!--            </view>-->
<!--        </u-popup>-->
    </view>
</template>

<script>
import selectDate from "/src/pages/admin/agentContractDeliverGoods/components/fxb-select-date";

export default {
    name: "cloudInventoryRecords",
    components: {
        selectDate
    },
    data() {
        return {
            defaultSelected:[
                [0,0],
                [0,0]
            ],
            filterData :[
                {
                    "name": "2022年9月",
                    "type": "radio",
                    "submenu": [
                        {
                            "name": "出入库",
                            "submenu": [
                                {
                                    "name": "全部",
                                    "value": "全部"
                                },
                                {
                                    "name": "出库",
                                    "value": "出库"
                                },
                                {
                                    "name": "入库",
                                    "value": "入库"
                                }
                            ]
                        },
                        {
                            "name": "入库类型",
                            "submenu": [
                                {
                                    "name": "全部",
                                    "value": "全部"
                                },
                                {
                                    "name": "合同补货",
                                    "value": "合同补货"
                                },
                                {
                                    "name": "退换货入库",
                                    "value": "退换货入库"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "筛选·已选0",
                    "type": "hierarchy-column",
                    "submenu": [
                        {
                            "name": "美食",
                            "value": "美食"
                        },
                        {
                            "name": "美食1",
                            "value": "美食1"
                        },
                        {
                            "name": "美食2",
                            "value": "美食2"
                        },
                        {
                            "name": "美食3",
                            "value": "美食3"
                        }
                    ]
                }
            ],
            selectDateShow: false,
            nearFutureIndex: 0,
            nearFuture: [
                "近一个月",
                "近三个月",
                "近半年"
            ],
            list: [
                {
                    status: 0,
                    goods: "东方国宾·尊致酒酱香型白酒",
                    number: "56",
                    time: "2022-10-22 12:30",
                    totalAmount: 65000
                }, {
                    status: 1,
                    goods: "东方国宾·尊致酒酱香型白酒",
                    number: "56",
                    time: "2022-10-22 12:30",
                    totalAmount: 78000
                }, {
                    status: 2,
                    goods: "东方国宾·尊致酒酱香型白酒",
                    number: "56",
                    time: "2022-10-22 12:30",
                    totalAmount: 89000
                }, {
                    status: 0,
                    goods: "东方国宾·尊致酒酱香型白酒",
                    number: "56",
                    time: "2022-10-22 12:30",
                    totalAmount: 25000
                }
            ]
        };
    },
    methods: {
        open(e) {
            // console.log('open');
        },
        close(e) {
            this.selectDateShow = false;
            // console.log('close');
        },
        gotoPath(status) {
            uni.navigateTo({
                url: "/pages/admin/cloudInventory/inventoryDetails?status=" + status
            });
        },
        change(e){

        },
        getFilterData(){
            this.filterData = [
                {
                    "name": "2022年9月",
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
                                    "value": "已开票"
                                },
                                {
                                    "name": "未开票",
                                    "value": "未开票"
                                }
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
                                    "value": "合同补货"
                                },
                                {
                                    "name": "样品订单",
                                    "value": "样品订单"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "筛选·已选0",
                    "type": "hierarchy-column",
                    "submenu": [
                        {
                            "name": "美食",
                            "value": "美食"
                        },
                        {
                            "name": "美食1",
                            "value": "美食1"
                        },
                        {
                            "name": "美食2",
                            "value": "美食2"
                        },
                        {
                            "name": "美食3",
                            "value": "美食3"
                        }
                    ]
                }
            ]
        }

    }
};
</script>

<style scoped>
    .box-style{
        border: gray 1px solid;
        border-radius: 20px;
    }
</style>