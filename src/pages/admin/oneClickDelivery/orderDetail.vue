<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="订单详情" :autoBack="true">
        </u-navbar>
        <view class="padding" :style="'margin-top:'+ CustomBar + 'px'">
            <fxbInfoCard :infoArr="infoArr1">
                <view slot="botContent">
                    <view class="" v-if="status==1">
                        <view class="flex justify-between">
                            <view>未通过原因</view>
                            <view>该地区代理已满</view>
                        </view>
                        <view class="flex justify-between">
                            <view>审核时间</view>
                            <view class="">2022-08-30 12:23:12</view>
                        </view>

                    </view>
                </view>
            </fxbInfoCard>
<!--            <fxbInfoCard v-if="status==0" class="margin-top-sm" :infoArr="infoArr2"></fxbInfoCard>-->
<!--            <fxbInfoCard v-if="status!=0" class="margin-top-sm" :infoArr="infoArr3">-->
<!--                <view slot="botContent" class="flex justify-end">-->
<!--                    <button class="cu-btn bg-white radius u-border margin-top-sm">查看物流</button>-->
<!--                </view>-->
<!--            </fxbInfoCard>-->
<!--            <view class="whiteBoxShadow margin-top-sm" v-if="status==2">-->
<!--                <boxTitle  title="物流信息"></boxTitle>-->
<!--            <view class="flex justify-between margin-top-sm">-->
<!--                <view class="text-gray">物流状态</view>-->
<!--                <view class="text-black">运输中</view>-->
<!--            </view>-->
<!--                <view class="flex justify-between margin-top-sm">-->
<!--                    <view class="text-gray">快递单号</view>-->
<!--                    <view class="text-black">2323442342345</view>-->
<!--                </view>-->
<!--                <view class="flex justify-between margin-top-sm">-->
<!--                    <view class="text-gray">发货时间</view>-->
<!--                    <text class="text-black">2022-02-26 12:12:26</text>-->

<!--                </view>-->
<!--                <view class="flex justify-between margin-top-sm">-->
<!--                    <view class="text-gray">快递公司</view>-->
<!--                    <view class="text-black">中通快递</view>-->
<!--                </view>-->
<!--                <view class="justify-end flex margin-top-sm">-->
<!--               <button class="cu-btn radius bg-white u-border">查看物流</button>-->
<!--                </view>-->
<!--        </view>-->
            <view v-if="status==3||status==5||status==6" class="whiteBoxShadow margin-top-sm" >
                <view  v-if="true">
                    <boxTitle  title="物流信息"></boxTitle>
                    <view>
                        <view class="flex justify-between margin-top-sm">
                            <view class="text-gray">物流状态</view>
                            <view v-if="status==3" class="text-black">运输中</view>
                            <view v-if="status==5||status==6" class="text-black">已收货</view>
                        </view>
                        <view class="flex justify-between margin-top-sm">
                            <text class="text-gray flex-sub">物流单号</text>
                            <text class="flex-treble text-right">23234234234234 <text class="bg-gray margin-left-sm padding-lr-xs radius">复制</text></text>
                        </view>
                        <view v-if="status==5" class="flex justify-between margin-top-sm">
                            <view class="text-gray">发货人</view>
                            <view class="text-black">李林丽<text class="text-red margin-left-xs">193781273812</text> </view>
                        </view>
                        <view class="flex justify-between margin-top-sm">
                            <view class="text-gray">发货时间</view>
                            <text class="text-black">2022-02-26 12:12:26</text>
                        </view>
                        <view class="flex justify-between margin-top-sm">
                            <view class="text-gray">快递公司</view>
                            <view class="text-black">中通快递</view>
                        </view>
                        <view class="flex justify-end">
                        <view  v-if="status==6" class="justify-end flex margin-top-sm">
                            <button class="cu-btn radius bg-white u-border margin-right">查看售后</button>
                        </view>
                        <view class="justify-end flex margin-top-sm">
                            <button class="cu-btn radius bg-white u-border">查看物流</button>
                        </view>
                        </view>
                    </view>

                </view>
<!--                    <view class="flex justify-between margin-top-sm">-->
<!--                        <view class="text-gray">物流状态</view>-->
<!--                        <view class="text-black">运输中</view>-->
<!--                    </view>-->
<!--                    <view class="flex justify-between margin-top-sm">-->
<!--                        <text class="text-gray flex-sub">物流单号</text>-->
<!--                        <text class="flex-treble text-right">23234234234234 <text class="bg-gray margin-left-sm padding-lr-xs radius">复制</text></text>-->
<!--                    </view>-->
<!--                    <view class="flex justify-between margin-top-sm">-->
<!--                        <view class="text-gray">发货时间</view>-->
<!--                        <text class="text-black">2022-02-26 12:12:26</text>-->

<!--                    </view>-->
<!--                    <view class="flex justify-between margin-top-sm">-->
<!--                        <view class="text-gray">快递公司</view>-->
<!--                        <view class="text-black">中通快递</view>-->
<!--                    </view>-->
<!--                    <view class="justify-end flex margin-top-sm">-->
<!--                        <button class="cu-btn radius bg-white u-border">查看物流</button>-->
<!--                    </view>-->
<!--                </view>-->
<!--                <view v-if="false">-->
<!--                    <boxTitle  title="物流信息"></boxTitle>-->
<!--                    <view class="flex justify-between margin-top-sm">-->
<!--                        <view class="text-gray">物流状态</view>-->
<!--                        <view class="text-black">已收货</view>-->
<!--                    </view>-->
<!--                    <view class="flex justify-between margin-top-sm">-->
<!--                        <text class="text-gray flex-sub">物流单号</text>-->
<!--                        <text class="flex-treble text-right">23234234234234 <text class="bg-gray margin-left-sm padding-lr-xs radius">复制</text></text>-->
<!--                    </view>-->
<!--                    <view class="flex justify-between margin-top-sm">-->
<!--                        <view class="text-gray">发货人</view>-->
<!--                        <view class="flex justify-end">-->
<!--                        <view class="text-black ">李桂兰</view>-->
<!--                            <view class="text-red text-xl margin-left-xs">18690725678</view>-->
<!--                        </view>-->
<!--                    </view>-->
<!--                    <view class="flex justify-between margin-top-sm">-->
<!--                        <view class="text-gray">发货时间</view>-->
<!--                        <text class="text-black">2022-02-26 12:12:26</text>-->

<!--                    </view>-->
<!--                    <view class="flex justify-between margin-top-sm">-->
<!--                        <view class="text-gray">快递公司</view>-->
<!--                        <view class="text-black">中通快递</view>-->
<!--                    </view>-->
<!--                    <view class="justify-end flex margin-top-sm">-->
<!--                        <button class="cu-btn radius bg-white u-border">查看物流</button>-->
<!--                    </view>-->
<!--                </view>-->
<!--                <view v-if="false">-->
<!--                    <boxTitle  title="物流信息"></boxTitle>-->
<!--                    <view class="flex justify-between margin-top-sm">-->
<!--                        <view class="text-gray">物流状态</view>-->
<!--                        <view class="text-black">备货完成，等待发货</view>-->
<!--                    </view>-->
<!--                </view>-->
            </view>
            <view class="whiteBoxShadow margin-top-sm" v-if="status==4">
                <boxTitle  title="物流信息"></boxTitle>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">物流状态</view>
                    <view class="text-red ">备货完成，等待发货</view>
                </view>
            </view>

<!--            <view class="whiteBoxShadow margin-top-sm" v-if="status==6">-->
<!--                <boxTitle  title="物流信息"></boxTitle>-->
<!--                <view class="flex justify-between margin-top-sm">-->
<!--                    <view class="text-gray">物流状态</view>-->
<!--                    <view class="text-black">运输中</view>-->
<!--                </view>-->
<!--                <view class="flex justify-between margin-top-sm">-->
<!--                    <view class="text-gray">快递单号</view>-->
<!--                    <view class="text-black">2323442342345</view>-->
<!--                </view>-->
<!--                <view class="flex justify-between margin-top-sm">-->
<!--                    <view class="text-gray">发货时间</view>-->
<!--                    <text class="text-black">2022-02-26 12:12:26</text>-->

<!--                </view>-->
<!--                <view class="flex justify-between margin-top-sm">-->
<!--                    <view class="text-gray">快递公司</view>-->
<!--                    <view class="text-black">中通快递</view>-->
<!--                </view>-->
<!--                <view class="justify-end flex margin-top-sm">-->
<!--                    <view class="flex justify-end">-->
<!--                    <button class="cu-btn radius bg-white u-border margin-right">查看售后</button>-->
<!--                        <button class="cu-btn radius bg-white u-border">查看物流</button>-->
<!--                    </view>-->
<!--                </view>-->
<!--            </view>-->


            <fxbInfoCard class="margin-top-sm" :infoArr="infoArr4">
                <boxTitle slot="topContent" title="收货人信息"></boxTitle>
            </fxbInfoCard>
			<view class="whiteBoxShadow margin-top-sm">
<!--				<view class="flex justify-between align-center">-->
<!--					<view>东方国宾</view>-->
<!--					<button class="cu-btn bg-blue light sm">合同详情</button>-->
<!--				</view>-->
<!--				<view class="flex justify-between align-center text-gray margin-top-sm">-->
<!--					<view>合同编号：456464</view>-->
<!--					<view>结算方式：现结</view>-->
<!--				</view>-->

				<view class=" margin-top-xs"></view>

				<view class="margin-top" v-for="item in 2" :key="item">
					<view class="flex align-center">
						<image style="width: 140rpx;height: 140rpx;" :src="require('/src/static/01.jpg')" mode="aspectFill"></image>
						<view style="height: 140rpx;width: 75%" class="margin-left-sm flex flex-direction justify-between">
							<view class="text-bold ">东方国宾·尊致酒53°瓶装500ml</view>
							<view class="text-sm flex justify-between align-center">
								<text>规格:酱香型</text>
								<text>度数:53°</text>
                                <text>容量:500ml</text>
							</view>

								<view class="flex align-center">
									<text>代理价：</text>
									<text class="text-red">￥365.00/瓶</text>
								</view>

						</view>
					</view>
					<view class="flex justify-between align-center margin-top-sm">
						<view class="flex align-center">
							<text class="text-gray">发货数量：</text>
							<text>1200瓶</text>
						</view>
						<view class="flex align-center">
							<text class="text-red ">￥59000.00</text>
						</view>
					</view>
				</view>
			</view>

            <fxbInfoCard class="margin-top-sm" :infoArr="infoArr5">
                <view slot="botContent">
                    <view class="u-border-top margin-tb"></view>
                    <view class="flex justify-between align-center">
                        <text class="text-bold">费用合计</text>
                        <view class="flex flex-direction align-end">
                            <view class="text-red text-bold">¥9326000.00</view>
                            <view class="text-gray text-sm" style="font-style: oblique">玖拾叁万贰仟陆佰元整</view>
                        </view>
                    </view>
                </view>
            </fxbInfoCard>
            <fxbInfoCard class="margin-top-sm" :infoArr="infoArr6">
                <boxTitle slot="topContent" title="订单信息"></boxTitle>
            </fxbInfoCard>
<!--			<view class="whiteBoxShadow margin-top">-->
<!--				<view class="flex justify-between align-center margin-bottom-sm">-->
<!--					<text class="text-gray">订单编号</text>-->
<!--					<text>2165165416456</text>-->
<!--				</view>-->
<!--				<view class="flex justify-between align-center margin-bottom-sm">-->
<!--					<text class="text-gray">提交时间</text>-->
<!--					<text>2022-08-31</text>-->
<!--				</view>-->
<!--				<view class="flex justify-between align-center margin-bottom-sm">-->
<!--					<text class="text-gray">操作员</text>-->
<!--					<text>王晓丫</text>-->
<!--				</view>-->
<!--                <template v-if="status==2">-->
<!--                    <view class="flex justify-between align-center margin-bottom-sm">-->
<!--                        <text class="text-gray">签收人</text>-->
<!--                        <text>王晓丫</text>-->
<!--                    </view>-->
<!--                    <view class="flex justify-between align-center">-->
<!--                        <text class="text-gray">签收时间</text>-->
<!--                        <text>2022-08-29</text>-->
<!--                    </view>-->
<!--                </template>-->
<!--			</view>-->
		</view>

        <view v-if="status==3||status==2||status==4" class="padding-xs bg-white botBtn flex">
            <template v-if="status==3">
                <button class="cu-btn bg-gray flex-sub" @click="gotoPath('/pages/admin/oneClickDelivery/returnAndExchange')">退换货</button>
                <button  @click="show = true" class="cu-btn bg-red flex-sub margin-left-sm">确认签收</button>
            </template>
        </view>
        <u-popup :show="show" :round="10" mode="center" @close="close" @open="open">
            <view style="width: 600rpx" class="padding-lr-sm padding-tb-xl">
                <view class="text-lg text-center">确认签收</view>
                <view class="margin-tb">请确保已仔细检查商品，请问是否确认签收该订单</view>
                <view class="flex justify-between align-center">
                    <button @click="close" style="width: 48%" class="cu-btn bg-gray radius">再看看</button>
                    <button @click="close" style="width: 48%" class="cu-btn bg-red radius">确认签收</button>
                </view>
            </view>
        </u-popup>


    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbInfoCard from '/src/components/fxb/fxb-info-card'
import Scroll_View from "../../agent/components/fxb-scroll-view";
export default {
    name: "orderDetail",
    components: {
        Scroll_View,
        fxbInfoCard,
        boxTitle
    },
    data() {
        return {
            status: 0,
            show: false,
            // infoArr2:[
            //     {
            //         name:"物流信息",
            //         info:"等待快递取件"
            //     },
            // ],
            infoArr3: [
                {
                    name: "物流状态",
                    info: "运输中"
                },
                {
                    name: "快递单号",
                    info: "23234234234234",
                    copy: true
                },
                {
                    name: "发货时间",
                    info: "2022-02-26 12:12:26"
                },
                {
                    name: "快递公司",
                    info: "中通快递"
                },
            ],
            infoArr4: [
                {
                    name: "收货人",
                    info: "王珊",
                    // colorRed:true
                },
                {
                    name: "联系电话",
                    info: "18690726565"
                },
                {
                    name: "收货地址",
                    info: "贵州省贵阳市观山湖区金融城max.c座2104号"
                }
            ],
            infoArr5: [
                {
                    name: "数量合计",
                    info: "4瓶"
                },
                {
                    name: "金额合计",
                    info: "¥59000.00"
                },
                {
                    name: "优惠折扣",
                    info: "¥9000.00"
                },
                {
                    name: "物流运费",
                    info: "¥0.00"
                }
            ],
            infoArr7: [
                {
                    name: "物流状态",
                    info: "运输中"
                },
                {
                    name: "快递单号",
                    info: "232342342344"
                },
                {
                    name: "发货时间",
                    info: "2022-02-26 12：12：26"
                },
                {
                    name: "快递公司",
                    info: "中通快递"
                }
            ],
            infoArr6: [
                {
                    name: "子订单编号",
                    info: "HJXCGD20220901001"
                },
                {
                    name: "提交时间",
                    info: "2022-08-31 12:56:12"
                },
                {
                    name: "操作人",
                    info: "王晓丫"
                },
                // {
                //     name:"签收人",
                //     info:"王晓丫"
                // },
                // {
                //     name:"签收时间",
                //     info:"2022-08-29"
                // }
            ]
        }
    },
    computed: {
        infoArr1() {
            return [{
                name: "状态",
                info: this.status == 0 ? '待审核' : this.status == 1 ? '未通过' : this.status == 2 ? '待发货' : this.status == 3||this.status==4||this.status==5 ? '待收货' : this.status==6?'已完成':'',
                //status:3快递物流运输中 4、待收货只显示物流状态  5//已完成
                colorRed: true
            }]
        },


    },
    methods: {
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        },
        onLoad(options) {
            this.status = options.status
        },

    open() {
        // console.log('open');
    },
    close() {
        this.show = false;
        // console.log('close');
    }
    },
};
</script>

<style scoped>
</style>