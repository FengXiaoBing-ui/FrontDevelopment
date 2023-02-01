<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="我要发货"
                  :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
                  :safeAreaInsetTop="false"
                  :autoBack="true">
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
        </u-navbar>
        <view class="padding" :style="'margin-top:'+ CustomBar + 'px'">
            <view class="whiteBoxShadow">
                <view>
                    <u-radio-group v-model="radioValue" placement="column">
                        <view class="align-center justify-between">
                            <view class="text-bold flex align-center margin-bottom-sm">
                                <view class="margin-right-sm redBlock"></view>
                                收货地址
                            </view>
                            <view class="flex margin-top-lg">
                                <view class="flex">
                                    <text class="margin-right-lg">我的客户</text>
                                    <u-radio activeColor="red" name="我的客户" :customStyle="{ marginBottom: '8px' }"></u-radio>
                                </view>
                                <view class="flex margin-left-xl">
                                    <text class="margin-right-lg">其它地址</text>
                                    <u-radio activeColor="red" name="其它地址" :customStyle="{ marginBottom: '8px' }"></u-radio>
                                </view>
                            </view>
                        </view>
                    </u-radio-group>
                    <view class="flex justify-between align-center padding-tb u-border-bottom">
                        <text class="text-gray">选择客户</text>
                        <view class="flex align-center" @click="choiceCustomer">
                            <text>张涛</text>
                            <text style="font-size: 38rpx;" class="cuIcon-right"></text>
                        </view>
                    </view>
                </view>
                <view class="agentInfo flex align-center padding-tb">
                    <view class="text-gray" style="width: 30%;">收货人：</view>
                    <view class="text-cut text-left" style="width: 64%">张涛 123456789</view>
                </view>
                <view class="agentInfo flex align-start">
                    <view class="text-gray" style="width: 30%;">收货地址：</view>
                    <view class="text-left" style="width: 64%">贵州省贵阳市观山湖区金融城金融城MAX·C座21楼24号</view>
                </view>
            </view>

            <view class="whiteBoxShadow margin-top flex justify-center align-center">
                <u-icon color="red" name="plus-circle"></u-icon>
                <text class="text-red margin-left-xs" @click="gotoPath('pages/admin/oneClickDelivery/productList')">添加商品</text>
            </view>
            <view class="whiteBoxShadow margin-top">
                <view class="flex justify-between align-center">
                    <view>东方国宾</view>
                    <button class="cu-btn bg-blue light sm">合同详情</button>
                </view>
                <view class="flex justify-between align-center text-gray margin-top-sm">
                    <view>合同编号：456464</view>
                    <view>结算方式：现结</view>
                </view>
                <view class="u-border-top margin-top"></view>
                <view class="margin-top" v-for="item in 2" :key="item">
                    <view class="flex align-center">
                        <image style="width: 140rpx;height: 140rpx;" :src="require('/src/static/01.jpg')"
                               mode="aspectFill"></image>
                        <view style="height: 140rpx;width: 75%"
                              class="margin-left-sm flex flex-direction justify-between">
                            <view class="text-bold text-lg">飞天茅台</view>
                            <view class="text-sm flex justify-between align-center">
                                <text>规格：500ml*6瓶/件</text>
                                <text>酱香型 | 53° | 瓶装</text>
                            </view>
                            <view class="text-sm flex justify-between align-center">
                                <text>零售价：￥365.00</text>
                                <view class="flex align-center">
                                    <text>代理价：</text>
                                    <text class="text-red">￥265.00</text>
                                </view>
                            </view>
                        </view>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <view class="flex align-center">
                            <text class="text-gray">剩余瓶数：</text>
                            <text>1200瓶</text>
                        </view>
                        <view class="flex align-center">
                            <u-number-box v-model="value">
                                <view slot="minus" class="minus">
                                    <u-icon name="minus" size="12"></u-icon>
                                </view>
                                <input class="input" slot="input" v-model="value"
                                       style="width: 100rpx;text-align: center;"
                                       type="number" />
                                <view slot="plus" class="plus">
                                    <u-icon name="plus" color="#FFFFFF" size="12"></u-icon>
                                </view>
                            </u-number-box>
                        </view>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-tb" style="margin-bottom: 64px">
                <view class="flex justify-between align-center">
                    <text class="text-gray">数量合计</text>
                    <text>240瓶</text>
                </view>
                <view class="u-border-bottom margin-tb"></view>
                <view class="flex justify-between align-center">
                    <text class="text-gray">金额合计</text>
                    <text>¥59000.00</text>
                </view>
            </view>
        </view>
        <view class="w100 bg-white padding-tb-sm padding-lr button-box">
            <button class="cu-btn bg-red w100 bottom-button">提交发货</button>
        </view>
    </view>
</template>

<script>
export default {
    name: "willDeliverGoods",
    data() {
        return {
            status: 0,
            value: 1,
            radioValue: "我的客户"
        };
    },
    onLoad(options) {
        this.status = options.status;
    },
    methods: {
            gotoPath(path) {
                uni.navigateTo({
                    url: path
                });
            },
        choiceCustomer() {
            uni.navigateTo({
                url: "/pages/admin/oneClickDelivery/myCustomer"
            });
        }
    }
};
</script>

<style lang="scss" scoped>

.button-box {
    height: 56px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
}

.redBlock {
    width: 0.25rem;
    height: 20px;
    background: red;
    border-radius: 0.2rem;
}

.minus {
    width: 40rpx;
    height: 40rpx;
    border-width: 1px;
    border: 4rpx #e6dee6 solid;
    border-radius: 50%;
    @include flex;
    justify-content: center;
    align-items: center;
}

.input {
    padding: 0 10rpx;
    font-size: 32rpx;
}

.plus {
    width: 40rpx;
    height: 40rpx;
    background-color: #FF0000;
    border-radius: 50%;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    justify-content: center;
    align-items: center;
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
