<template>
    <view class="content">
        <u-navbar :autoBack ="true" :border="false" :fixed="true" title="子订单详情">
        </u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ CustomBar + 'px;padding-bottom:120rpx'">
            <view class="whiteBoxShadow">
                <view class="flex justify-between align-center">
                    <text class="text-gray">状态</text>
                    <text class="text-red">{{ fnStatusArr[fnStatus][status] }}</text>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm" v-if="fnStatus==1&&status!=0">
                <template v-if="fnStatus==1&&status==2">
                    <view class="flex justify-between margin-top-sm">
                        <text class="text-gray flex-sub">物流状态</text>
                        <text class="flex-treble text-right">已签收</text>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <text class="text-gray flex-sub">物流单号</text>
                        <text class="flex-treble text-right">23234234234234
                            <text class="bg-gray margin-left-sm padding-lr-xs radius">复制</text>
                        </text>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <text class="text-gray flex-sub">发货人</text>
                        <text class="flex-treble text-right">李林丽 18690724568</text>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <text class="text-gray flex-sub">发货时间</text>
                        <text class="flex-treble text-right">2022-02-26 12:12:26</text>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <text class="text-gray flex-sub">物流公司</text>
                        <text class="flex-treble text-right">德邦物流</text>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <text class="text-gray flex-sub"></text>
                        <view class="flex-treble text-right">
                            <button class="cu-btn bg-white u-border radius">查看物流</button>
                        </view>
                    </view>
                </template>
                <view v-else class="flex justify-between">
                    <text class="text-gray flex-sub">物流信息</text>
                    <text class="flex-treble text-right">等待服务商备货</text>
                </view>

            </view>
            <view class="whiteBoxShadow margin-top-sm" v-if="fnStatus==1&&status!=0">
                <view class="flex justify-between">
                    <text class="text-gray flex-sub">收货人</text>
                    <text class="flex-treble text-right">王珊</text>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <text class="text-gray flex-sub">联系电话</text>
                    <text class="flex-treble text-right">18690726565</text>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <text class="text-gray flex-sub">收货地址</text>
                    <text class="text-right flex-treble">贵州省贵阳市观山湖区金融城max.c座2104号</text>
                </view>
            </view>
            <view v-if="fnStatus==1&&status==2" class="whiteBoxShadow margin-top-sm">
                <boxTitle title="签收意见"></boxTitle>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">反馈状态</text>
                    <text class="text-red">商家处理中</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">意见类别</text>
                    <text>商品破损</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">破损数量</text>
                    <text>23瓶</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">凭证图片</text>
                    <text>23瓶</text>
                </view>
                <view class="margin-top-sm">
                    <text>这是输入的内容，这是输入的内容，这是输入的内容</text>
                    <view class="flex margin-top-sm">
                        <fxbImage class="margin-right-sm" v-for="item in 5" :key="item"
                               style="width: 110rpx;height: 110rpx"
                               :src="`/productDetails/Slice%20${item}.png`"></fxbImage>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <view class="text-bold text-lg">东方国宾·尊致酒53°瓶装500ml酱香型合同</view>
                <view class="flex justify-between align-center text-gray margin-top-sm">
                    <view>合同编号：213234233543</view>
                    <view>结算方式：现结</view>
                </view>
                <view class="u-border-top margin-top"></view>
                <view class="margin-top" v-for="item in 2" :key="item">
                    <view class="flex align-center">
                        <fxbImage class="radius" style="width: 140rpx;height: 140rpx;"
                               src="/productDetails/Slice%201.png"
                               mode="aspectFill"></fxbImage>
                        <view style="height: 140rpx;width: 75%"
                              class="margin-left-sm flex flex-direction justify-around">
                            <view class="text-bold text-lg">东方国宾·尊致酒53°瓶装500ml</view>
                            <view class="text-sm text-gray flex justify-between align-center">
                                <view>规格：500ml*6瓶/件</view>
                                <view class="text-left" style="min-width: 220rpx">酱香型 | 53° | 瓶装</view>
                            </view>
                            <view class="text-sm text-gray flex justify-between align-center">
                                <text class="text-black">零售价：￥365.00</text>
                                <view class="flex align-center justify-start" style="min-width: 220rpx">
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
                            <text class="text-gray">发货数量：</text>
                            <text>2瓶</text>
                        </view>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">数量合计</text>
                    <text>240瓶</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">金额合计</text>
                    <text>￥59000.00</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">优惠折扣</text>
                    <text>-￥9000.00</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">物流运费</text>
                    <text>￥0.00</text>
                </view>
                <view class="u-border-top margin-tb"></view>
                <view class="flex justify-between align-center">
                    <text class="text-bold">应付金额</text>
                    <text class="text-red">￥50000.00</text>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">子订单编号</text>
                    <text>HJXCGD20220901001</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">提交时间</text>
                    <text>2022-08-31</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">操作人</text>
                    <text>王晓丫</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">签收人</text>
                    <text>王晓丫</text>
                </view>
                <view class="flex justify-between align-center">
                    <text class="text-gray">签收时间</text>
                    <text>2022-08-29</text>
                </view>
            </view>
        </view>
        <view v-if="fnStatus==0&&status==1" class="botBtn bg-white padding-sm flex justify-around">
            <button style="width: 45%" class="bg-gray radius cu-btn">删除订单</button>
            <button style="width: 45%" class="bg-red radius cu-btn">修改</button>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import botBtn from "/src/components/fxb-bot-fixed-button/fxb-bot-fixed-button";
import fxbImage from "/src/components/fxb/fxb-image"
export default {
    name: "sunOrderDetails",
    components: {
        botBtn,
        boxTitle,
        fxbImage
    },
    data() {
        return {
            delta: 1,
            status: 0,
            fnStatus: 0,
            fnStatusArr: [
                [
                    "待审核", "未通过"
                ],
                [
                    "待支付", "待发货", "已完成"
                ]
            ]
        };
    },
    onLoad(options) {
        this.delta = options.delta ? options.delta : 1;
        this.status = options.status;
        this.fnStatus = options.fnStatus;
    },
    methods: {

    }
};
</script>

<style lang="scss" scoped>
.botBtn {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}
</style>