<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="订单详情" :autoBack="true">
        </u-navbar>
        <view class="padding" :style="'margin-top:'+ CustomBar + 'px;padding-bottom:120rpx'">
            <view class="whiteBoxShadow">
                <view class="flex justify-between align-center">
                    <text class="text-gray">状态</text>
                    <text class="text-red">{{ status==0?'待审核':'未通过' }}</text>
                </view>
                <template v-if="status==1">
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">未通过原因</text>
                        <text>这是未通过原因，这是未通过</text>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">审核人</text>
                        <text>张东</text>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">审核时间</text>
                        <text>2022-08-30 12:23:12</text>
                    </view>
                </template>
            </view>
            <view class="whiteBoxShadow margin-top" v-if="status==0">
                <view class="flex justify-between align-center">
                    <text class="text-gray">申请企业</text>
                    <text>烟酒店</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">申请人</text>
                    <text>张东</text>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top" v-if="false">
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">物流状态</text>
                    <text>运输中</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">快递单号</text>
                    <view class="flex align-center">
                        <text>23234234234234</text>
                        <button class="cu-btn bg-gray light radius sm margin-left-xs">复制</button>
                    </view>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">发货时间</text>
                    <text>2022-02-26 12:12:26</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">快递公司</text>
                    <text>中通快递</text>
                </view>
                <view class="text-right">
                    <button class="cu-btn u-border bg-white">查看物流</button>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top" v-if="false">
                <view class="flex justify-between align-center">
                    <text class="text-gray">收货人</text>
                    <text>王珊</text>
                </view>
                <view class="flex justify-between align-center margin-tb-sm">
                    <text class="text-gray">联系电话</text>
                    <text>18690726565</text>
                </view>
                <view class="flex justify-between">
                    <text class="text-gray">收货地址</text>
                    <view style="max-width: 70%" class="text-right">贵州省贵阳市观山湖区金融城max.c座2104号</view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top">
                <view class="text-bold text-lg">东方国宾·尊致酒53°瓶装500ml酱香型合同</view>
                <view class="flex justify-between align-center text-gray margin-top-sm">
                    <view>合同编号：213234233543</view>
                    <view>结算方式：现结</view>
                </view>
                <view class="u-border-top margin-top"></view>
                <view class="margin-top" v-for="item in 2" :key="item">
                    <view class="flex align-center">
                        <fxbImage class="radius" style="width: 140rpx;height: 140rpx;" src="/productDetails/Slice%201.png" mode="aspectFill"></fxbImage>
                        <view style="height: 140rpx;width: 75%" class="margin-left-sm flex flex-direction justify-around">
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
            <view class="whiteBoxShadow margin-top">
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
                <view v-if="false" class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">物流运费</text>
                    <text>￥0.00</text>
                </view>
                <view class="u-border-top margin-tb"></view>
                <view class="flex justify-between align-center">
                    <text class="text-bold">应付金额</text>
                    <text class="text-red">￥50000.00</text>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top">
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
                <template v-if="status==2">
                    <view class="flex justify-between align-center margin-bottom-sm">
                        <text class="text-gray">签收人</text>
                        <text>王晓丫</text>
                    </view>
                    <view class="flex justify-between align-center">
                        <text class="text-gray">签收时间</text>
                        <text>2022-08-29</text>
                    </view>
                </template>
            </view>
        </view>
        <botBtn
            v-if="status==0"
            btn1="审核不通过"
            btn2="审核通过"
            btn1-class="cu-btn bg-gray radius b75"
            btn2-class="cu-btn bg-red radius b75"
            btn-sun-box-class1="b50 text-center"
            btn-sun-box-class2="b50 text-center"
            @change1="change1"
            @change2="change2"
        ></botBtn>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
import botBtn from '/src/components/fxb-bot-fixed-button/fxb-bot-fixed-button'
export default {
    name: "deliverGoodsToExamine",
    components:{
        botBtn,
        fxbImage
    },
    data(){
        return{
            status:0
        }
    },
    onLoad(options){
        this.status = options.status
    },
    methods:{
        change1(){
            uni.navigateTo({
                url:"/pages/admin/contractDeliverGoods/toExamineFailed"
            })
        },
        change2(){
            uni.showToast({
                title:"审核已通过"
            })
            setTimeout(() => {
                uni.navigateBack({
                    delta:1
                })
            },500)

        }
    }
};
</script>

<style scoped>

</style>