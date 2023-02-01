<!--wjx 20220831-->
<template>
    <view>
        <u-navbar :autoBack="true" title="发票详情"></u-navbar>
        <view :style="`margin-top:${(CustomBar +10)*2}rpx`">
            <view class="bg-white padding radius margin-lr-sm flex flex-direction">
                <view class="flex justify-center align-center text-bold ">
                    <view class="cuIcon-time margin-right-sm" style="font-size: 1.2rem;color: #F37B1D"></view>
                    <view>开票中</view>
                </view>
                <view class="margin-top text-center" style="line-height: 1.5rem">
                    发票预计会在订单完成10个自然日内 <br>
                    开具请耐心等待
                </view>
            </view>
            <view class="bg-white  margin-sm padding flex flex-direction">
                <view class="flex justify-center align-center text-bold text-xl">
                    <view class="cuIcon-roundcheck margin-right-xs" style="font-size: 1.2rem;color:#E54D42"></view>
                    <view>已开票</view>
                </view>
                <view class="margin-tb">
<!--                    <view class="flex align-center justify-between">-->
<!--                        <view class="text-gray">开票时间：</view>-->
<!--                        <view>2022-08-23 12:23:26</view>-->
<!--                    </view>-->
<!--                    <view class="flex align-center justify-between margin-top-xs">-->
<!--                        <view class="text-gray">开票金额：</view>-->
<!--                        <view class="text-red">￥600.00</view>-->
<!--                    </view>-->
                    <view class="margin-tb padding-sm" style="border: 1px solid orange">
                        <image
                            mode="widthFix"
                            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210401%2F5b59ed9e9e6a4bd38f6b52c784830621.png&refer=http%3A%2F%2Fp4.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664508639&t=6204e8663d37d93f5419404ad8fb2389"
                            style="width: 100%"
                        ></image>
                    </view>
                    <view class="flex justify-center padding-sm">
                        <button class="cu-btn bg-red">
                            <text class="cuIcon-down"></text>下载发票</button>
                    </view>
                </view>
            </view>
            <template v-if="false">
                <view class="bg-white padding margin-sm flex radius flex-direction">
                    <view class="flex align-center u-border-bottom padding-bottom">
                        <fxbImage
                            mode="widthFix"
                            src="/productDetails/Slice%201.png" style="width: 120rpx"></fxbImage>
                        <view class="flex flex-direction justify-between margin-left-sm ">
                            <view class="margin-bottom  text-bold">53°贵州茅台1935酒500ml单瓶装</view>
                            <view>￥300.00</view>
                        </view>
                    </view>
                    <view class="margin-top">
                        <view class="flex align-center  justify-between">
                            <view class="text-gray">商品数量</view>
                            <view>2</view>
                        </view>
                        <view class="flex margin-top align-center justify-between">
                            <view class="text-gray">商品总额</view>
                            <view class="text-bold margin-top-sm">￥600.00</view>
                        </view>
                    </view>
                </view>
                <view class="bg-white padding margin-sm radius flex flex-direction">
                    <view class="flex align-center justify-between ">
                        <view class="text-gray">订单状态：</view>
                        <view>已完成</view>
                    </view>
                    <view class="flex align-center justify-between  margin-top">
                        <view class="text-gray">订单编号：</view>
                        <view class="flex align-center">
                            <view class="margin-right-sm">
                                56421321323213
                            </view>
                            <copyButton value="56421321323213"></copyButton>
                        </view>
                    </view>
                    <view class="flex align-center justify-between margin-top">
                        <view class="text-gray">下单时间：</view>
                        <view>2022-01-25 12:23:25</view>
                    </view>
                </view>
            </template>
            <template v-if="false">
                <view class="padding-lr-sm">
                    <view class="whiteBoxShadow">
                        <view class="flex justify-between">
                            <view style="width: 70%" class="text-bold">东方国宾·尊致酒53°瓶装500ml酱香型合同</view>
                            <button class="cu-btn bg-blue light radius sm">合同详情</button>
                        </view>
                        <view class="flex justify-between align-center text-gray margin-top-sm">
                            <view>合同编号：213234233543</view>
                            <view>结算方式：现结</view>
                        </view>
                        <view class="u-border-top margin-top"></view>
                        <view class="margin-top-sm" v-for="item in 2" :key="item">
                            <view class="flex align-center">
                                <fxbImage class="radius" style="width: 140rpx;height: 140rpx;" src="/productDetails/Slice%201.png" mode="aspectFill"></fxbImage>
                                <view style="height: 140rpx;width: 75%" class="margin-left-sm flex flex-direction justify-between">
                                    <view class="text-bold text-lg">东方国宾·尊致酒53°瓶装500ml</view>
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
                            <text class="text-gray">订单编号</text>
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
                            <text class="text-gray">审核时间</text>
                            <text>2022-08-20 12:23:45</text>
                        </view>
                        <view class="flex justify-between align-center margin-bottom-sm">
                            <text class="text-gray">付款金额</text>
                            <text>￥50000.00</text>
                        </view>
                        <view class="flex justify-between align-center margin-bottom-sm">
                            <text class="text-gray">付款时间</text>
                            <text>2022-08-20 12:23:45</text>
                        </view>
                    </view>
                </view>
            </template>
            <template v-if="true">
                <view class="padding-lr-sm">
                    <view class="whiteBoxShadow">
                        <view class="flex justify-between align-center margin-bottom-sm">
                            <text class="text-gray">开票类型：</text>
                            <text>品鉴会报销</text>
                        </view>
                        <view class="flex justify-between align-center margin-bottom-sm">
                            <text class="text-gray">订单编号：</text>
                            <text>324534534534</text>
                        </view>
                        <view class="flex justify-between align-center margin-bottom-sm">
                            <text class="text-gray">开票公司：</text>
                            <text>贵州好伙伴烟酒商行</text>
                        </view>
                        <view class="flex justify-between align-center margin-bottom-sm">
                            <text class="text-gray">开票公司纳税人识别号：</text>
                            <text>237482937423SDJFH</text>
                        </view>
                        <view class="flex justify-between align-center margin-bottom-sm">
                            <text class="text-gray">发票类型：</text>
                            <text>普通发票</text>
                        </view>
<!--                        <view class="flex justify-between align-center margin-bottom-sm">-->
<!--                            <text class="text-gray">税率：</text>-->
<!--                            <text>13%</text>-->
<!--                        </view>-->
                        <view class="flex justify-between align-center margin-bottom-sm">
                            <text class="text-gray">开票金额：</text>
                            <text>¥1500.00</text>
                        </view>
                        <view class="flex justify-between align-center margin-bottom-sm">
                            <text class="text-gray">开票时间：</text>
                            <text>2022-01-23 12:23:34</text>
                        </view>
                    </view>
                </view>
            </template>
            <view class="padding-lr-sm">
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="商品信息"></boxTitle>
                    <view class="flex align-stretch">
                        <fxbImage class="radius" mode="aspectFill" width="100" height="100" src="/productDetails/东方国宾详情图_01.png"></fxbImage>
                        <view class="flex flex-direction justify-around margin-left-sm">
                            <view>53°贵州茅台1935酒500ml单瓶装</view>
                            <view>¥300.00</view>
                        </view>
                    </view>
                    <view class="u-border-top margin-tb"></view>
                    <view class="flex justify-between align-center">
                        <text class="text-gray">商品数量：</text>
                        <text>2</text>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">商品总额：</text>
                        <text class="text-bold">¥600.00</text>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">品鉴会费用：</text>
                        <text class="text-bold">¥1500.00</text>
                    </view>

                    <view class="u-border-bottom w100 margin-top"></view>

                    <view class="flex justify-between align-center margin-top">
                        <text class="text-gray">金额合计:</text>
                        <text class="text-bold">¥1500.00</text>
                    </view>
                </view>
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="开票信息"></boxTitle>
                    <view class="flex justify-between align-center">
                        <text class="text-gray">订单状态：</text>
                        <text>已完成</text>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">订单类型：</text>
                        <text>品鉴会报销</text>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <text class="text-gray">订单编号：</text>
                        <view class="flex flex-direction align-end">
                            <view>56421321323213</view>
                            <button class="cu-btn bg-white u-border radius margin-top-xs sm">订单详情</button>
                        </view>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">开票公司：</text>
                        <text>贵州好伙伴烟酒商行</text>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">开票公司纳税人识别号：</text>
                        <text>237482937423SDJFH</text>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">开票时间：</text>
                        <text>2022-01-25 12:23:25</text>
                    </view>
                </view>
            </view>
            <view class="bg-white padding margin-sm radius flex align-center justify-around">
                <view class="flex align-center u-border-right w50 justify-center">
                    <view style="font-size: 16px;color:#F37B1D" class="cuIcon-profile margin-right-sm"></view>
                    <view>平台介入</view>
                </view>
                <view class="flex align-center  w50 justify-center">
                    <view style="font-size: 16px;color: #E54D42" class="cuIcon-service margin-right-sm "></view>
                    <view>联系客服</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbImage from "/src/components/fxb/fxb-image"
import copyButton from "/src/components/common/copyButton";
export default {
    name: "billDetailsIndex",
    components:{
        copyButton,
        fxbImage,
        boxTitle
    },
    data(){
        return{
            status:0
        }
    },
    onLoad(options){
        console.log('ok');
        this.status = options.status
    },
    methods:{
        copy(){
            uni.setClipboardData({
                data:'123456789',
                fail:function(){
                    uni.showToast({
                        title:'复制失败，请重试',
                        icon:'error'
                    })
                }
            })
        }
    }
};
</script>

<style scoped></style>
