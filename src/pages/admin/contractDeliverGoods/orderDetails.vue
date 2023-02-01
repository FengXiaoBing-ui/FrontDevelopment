<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="子订单详情" :autoBack="true">
        </u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ CustomBar + 'px;padding-bottom:120rpx'">
            <view class="whiteBoxShadow">
                <view class="flex justify-between align-center">
                    <text class="text-gray">状态</text>
                    <text class="text-red">{{ statusArr[status] }}</text>
                </view>
            </view>
            <view v-if="status==2||status==3||status==4" class="whiteBoxShadow margin-top-sm">
                <view class="flex justify-between margin-top-sm">
                    <text class="text-gray flex-sub">物流状态</text>
                    <text class="flex-treble text-right">已签收</text>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <text class="text-gray flex-sub">物流单号</text>
                    <text class="flex-treble text-right">23234234234234 <text class="bg-gray margin-left-sm padding-lr-xs radius">复制</text></text>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <text class="text-gray flex-sub">发货人</text>
                    <text class="flex-treble text-right">李林丽  18690724568</text>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <text class="text-gray flex-sub">发货时间</text>
                    <text class="flex-treble text-right">2022-02-26 12:12:26</text>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <text class="text-gray flex-sub">物流公司</text>
                    <text class="flex-treble text-right">德邦物流</text>
                </view>
                <view v-if="status==3||status==4" class="flex justify-between margin-top-sm">
                    <text class="text-gray flex-sub"></text>
                    <view class="flex-treble text-right">
                        <button class="cu-btn bg-white u-border radius">查看物流</button>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm" v-if="status!=4">
                <view class="flex justify-between">
                    <text class="text-gray flex-sub">申请企业</text>
                    <text class="flex-treble text-right">烟酒店</text>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <text class="text-gray flex-sub">申请人</text>
                    <text class="flex-treble text-right">张东</text>
                </view>
                <template v-if="status==1||status==2||status==3">
                    <view class="flex justify-between margin-top-sm">
                        <text class="text-gray flex-sub">收货人</text>
                        <text class="flex-treble text-right">王珊</text>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <text class="text-gray flex-sub">联系电话</text>
                        <text class="flex-treble text-right">18690726565</text>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <text class="text-gray flex-sub">收货地址</text>
                        <text class="flex-treble text-right">贵州省贵阳市观山湖区金融城max.c座2104号</text>
                    </view>
                </template>
            </view>
            <view class="whiteBoxShadow margin-top-sm" v-if="status==4">
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
            <view v-if="status==4" class="whiteBoxShadow margin-top-sm">
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
                <view class="margin-top">
                    <text>这是输入的内容，这是输入的内容，这是输入的内容</text>
                    <view class="flex margin-top">
                        <fxbImage class="margin-right-sm" v-for="item in 5" :key="item" style="width: 110rpx;height: 110rpx" :src="`/productDetails/Slice%20${item}.png`"></fxbImage>
                    </view>
                </view>
                <button style="width: 100%;border-color: red !important;color: red !important;" class="cu-btn margin-top bg-white radius u-border">补发商品</button>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <view class="flex justify-between align-center">
                    <view class="text-bold flex-treble text-cut text-lg">东方国宾·尊致酒53°瓶装500ml酱香型合同</view>
                    <view class="bg-blue flex-sub light radius text-center padding-tb-xs">合同详情</view>
                </view>
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
        <view v-if="status==1||status==2" class="botBtn padding-sm bg-white">
            <button @click="showPopup(0)" style="width: 100%" v-if="status==1" class="cu-btn bg-red radius">备货完成，预约物流</button>
            <button @click="showPopup(1)" style="width: 100%" v-if="status==2" class="cu-btn bg-red radius">确认发货</button>
        </view>
        <u-popup :show="show" mode="center" @close="close" @open="open">
            <view v-if="popupIndex==0" style="width: 500rpx" class="radius bg-white padding-lr padding-tb-xl">
                <view class="margin-tb-xl text-center">备货完成后将预约物流上门取件请问是否备货完成？</view>
                <view class="flex justify-between align-center">
                    <button @click="close" style="width: 45%" class="cu-btn bg-gray radius">取消</button>
                    <button @click="close" style="width: 45%" class="cu-btn bg-red radius">已完成</button>
                </view>
            </view>
            <view v-if="popupIndex==1" style="width: 500rpx" class="radius bg-white padding-lr padding-tb-xl">
                <view class="margin-tb-xl text-center">是否确认发货？</view>
                <view class="flex justify-between align-center">
                    <button @click="close" style="width: 45%" class="cu-btn bg-gray radius">取消</button>
                    <button @click="gotoPath" style="width: 45%" class="cu-btn bg-red radius">确认发货</button>
                </view>
            </view>
        </u-popup>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import botBtn from '/src/components/fxb-bot-fixed-button/fxb-bot-fixed-button'
import fxbImage from "/src/components/fxb/fxb-image"
export default {
    name: "orderDetails",
    components:{
        botBtn,
        boxTitle,
        fxbImage
    },
    data(){
        return{
            popupIndex:0,
            show:false,
            status: 0,
            statusArr: [
                "待支付",
                "待备货",
                "待发货",
                "待签收",
                "已完成"
            ]
        }
    },
    onLoad(options){
        this.status = options.status;
    },
    methods:{
        open(index) {
        },
        close() {
            this.show = false
            // console.log('close');
        },
        showPopup(index){
            this.show = true;
            this.popupIndex = index;
        },
        gotoPath(){
            this.show = false;
            uni.redirectTo({
                url:"/pages/payResult/payResult?status=8"
            })
        }
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