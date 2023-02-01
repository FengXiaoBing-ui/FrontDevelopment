<!--wjx 20220830-->
<template>
	<view>
		<u-navbar :autoBack="true" title="样品订单"></u-navbar>
		<view :style="`margin-top:${(CustomBar+10)*2}rpx`" class="margin-lr-xs" >
			<view class="">
				<view v-if="addressInfo.name == ''">
					您还未添加收货地址，请
					<text class="text-red">添加地址</text>
				</view>
				<addressBox def border icon :addressInfo="addressInfo" :select="true"></addressBox>
			</view>
			<!--			内容信息-->
			<view class="margin-top-sm bg-white padding radius">
				<view class="flex u-border-bottom">
					<view class="margin-tb">
                        <fxbImage src="/productDetails/Slice%201.png"
                               mode="widthFix" style="width: 160rpx;height: 160rpx"></fxbImage>
                    </view>
					<view class="basis-xl margin-tb margin-left-sm  flex flex-direction justify-start">
						<view class="text-bold">东方国宾·尊致酒53°瓶装500ml</view>
						<view class="flex align-end justify-between margin-top margin-bottom-xs">
							<view class="flex align-end text-xl">
								<view class="text-sm text-gray ">样品价：</view>
								<view class="text-red flex align-center">
                                    <view class="text-sm">￥</view>
                                    <view class="text-bold ">
                                        300.00
                                    </view>
                                    </view>
							</view>
                            <u-number-box v-model="account">
                                <view
                                    slot="minus"
                                    class="minus"
                                >
                                    <u-icon
                                        name="minus"
                                        size="18"
                                    ></u-icon>
                                </view>
                                <text
                                    slot="input"
                                    style="width: 20px;text-align: center;font-size: 16px"
                                    class="input"
                                >{{account}}</text>
                                <view
                                    slot="plus"
                                    class="plus"
                                >
                                    <u-icon
                                        name="plus"
                                        color="#FFFFFF"
                                        size="18"
                                    ></u-icon>
                                </view>
                            </u-number-box>
						</view>
						<view style="color: #FFAA00" class="text-sm margin-top-sm">最多购买两瓶</view>
					</view>
				</view>
				<view         >
					<view class="flex justify-between align-center margin-tb">
						<view class="text-gray">快递</view>
						<view class="flex align-center"><view class="cu-tag line-red sm radius margin-right-sm">默认</view>中通快递</view>
					</view>
                    <view class="u-border-bottom"></view>
					<view class="flex justify-between align-center margin-top">
						<view class="text-gray">备注</view>
						<input class="text-right" placeholder-class="text-df"  placeholder="请输入你的备注" type="text" />
					</view>
				</view>
			</view>
			<!--			订单计算-->
			<view class="margin-top-sm padding bg-white radius">
				<view class="flex justify-between align-center padding-tb-xs">
					<view class="text-gray">单价</view>
					<view>￥300.00</view>
				</view>
				<view class="flex justify-between align-center padding-tb-xs">
					<view class="text-gray">样品数量</view>
					<view>{{ account }}</view>
				</view>
				<view class="flex justify-between align-center padding-top-xs padding-bottom u-border-bottom">
					<view class="text-gray">运费</view>
					<view>￥12.00</view>
				</view>
				<view class="flex justify-between align-center padding-top-sm">
					<view class="text-black">合计</view>
					<view class="text-red text-bold">￥{{ account * 300 }}</view>
				</view>
			</view>
			<!--			发票-->
			<view class="flex justify-between align-center bg-white margin-top-sm padding">
				<view class="text-gray">开具发票</view>
				<view class="flex justify-end align-center" @click="showBill = !showBill">
					{{ bill }}
					<view class="cuIcon-right margin-left-sm"></view>
				</view>
			</view>
		</view>
        <view class="padding margin-bottom"></view>
        <view class="bg-white padding-sm  fixed  ">
            <button class="bg-red cu-btn xs" style="width: 100%" @click="submitOrder">提交订单</button>
        </view>
		<!--		弹出层部分-->
		<u-popup :round="10" :show="showBill" mode="bottom" @close="close" @open="open">
			<view class="padding-sm">
				<view class="flex align-center justify-between">
					<view class="flex align-center">
						<view class="redBlock"></view>
						<view class="text-bold text-xl margin-left-sm">发票</view>
					</view>
					<view class="text-red" @click="showNotice">发票须知？</view>
				</view>
				<view class="margin-tb-sm">
					<view class="text-bold margin-tb">是否开票</view>
					<view class="flex margin-tb-sm">
						<view class="cu-tag bg-red radius " style="width: 25%">是</view>
						<view class="cu-tag radius" style="width: 25%">否</view>
					</view>
                    <view class="margin-tb text-orange">为响应环境，平台全面使用电子发票</view>
					<view class="text-bold margin-tb-sm">选择发票类型</view>
					<view class="flex margin-tb">
						<view class="cu-tag bg-red radius" style="width: 25%">普通发票</view>
						<view class="cu-tag radius " style="width: 25%">增值税发票</view>
					</view>
				</view>
				<view>
					<view class="text-bold margin-tb">发票内容</view>
					<view
						v-for="item in billInfo"
						:key="item.value"
						class="flex u-border-bottom justify-between align-center padding-tb"
					>
						<view class="text-gray">
							<text class="text-red margin-right-xs">*</text>
							{{ item.title }}
						</view>
						<view>{{ item.value }}</view>
					</view>
				</view>
				<view class="margin-top">
					<button class="cu-btn bg-red" style="width: 100%;height: 72rpx !important;" @click="sureClick">确认</button>
				</view>
			</view>
		</u-popup>
		<!--		发票须知-->
		<u-modal :closeOnClickOverlay="true" :show="Notice" @confirm="closeNotice">
			<view class="slot-content">
				<view class="text-bold padding-xs">发票须知</view>
				<view>
					1.为保护酒类销售的区域隐私，注册用户需开启会员，会员需缴纳(¥5000.00)会员费后才能查看代理政策以及代理价格。<br />
					2.若用户30日内未代理产品，会员费自动退回相应账户，平台根究时长收取一定的服务费，若代理成功后，会员费也会自动退回。<br />
					3.若用户成功代理产品后还需代理其它产品需重新 缴纳会员费，并代理相应产品。<br />
					4.若用户成功代理产品后还需代理其它产品需重新 缴纳会员费，并代理相应产品。<br />
				</view>
			</view>
		</u-modal>
	</view>

</template>
<script>
import fxbImage from "/src/components/fxb/fxb-image"
import addressBox from "./addressBox";

export default {
    name: "sampleOrder",
    components: { addressBox, fxbImage },
    data: function() {
        return {
            Notice: false,
            //弹出层的内容信息
            billInfo: [
                { title: "公司名称", value: "贵州好酒选电子商务有限公司" },
                { title: "统一社会信用代码", value: "JKIEDG125462ECD452" }
            ],
            //地址信息
            addressInfo: {
                name: "张傲",
                phone: "18878855878",
                address: "贵州省贵阳市观山湖区金融城金融城MAX·C座21楼24号"
            },
            //商品id和图片url
            id: "",
            imgUrl: "",
            //数量
            account: 1,
            bill: "不开发票",
            showBill: false
        };
    },
    methods: {
        // 发票须知
        showNotice() {
            this.Notice = !this.Notice;
            this.showBill = false;
        },
        //
        closeNotice() {
            this.Notice = !this.Notice;
            this.showBill = true;
        },
        //发票弹出层的两个方法
        open(res) {
        },
        close() {
        },

        //确认
        sureClick() {
            this.showBill = false;
        },
        //提交订单
        submitOrder() {
            uni.navigateTo({
                url: `pages/index/applicationSample/payOrderIndex?imgUrl=${this.imgUrl}&id=${this.id}`
            });
        }
    },
    onLoad: function(option) {
        //option为object类型，会序列化上个页面传递的参数
        // this.imgUrl = option.url;
        this.id = option.id;
    }
};
</script>

<style lang="scss" scoped>
.redBlock {
	width: 0.25rem;
	height: 20px;
	background: red;
    border-radius: 0.2rem;
}
.minus {
    padding: 8rpx;
    width: 48rpx;
    height: 48rpx;
    border-width: 1px;
    border-color: #E6E6E6;
    border-style: solid;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    @include flex;
    justify-content: center;
    align-items: center;
}

.input {
    padding: 0 10px;
}

.plus {
    padding: 8rpx;
    width: 48rpx;
    height: 48rpx;
    background-color: #FF0000;
    border-radius: 50%;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    justify-content: center;
    align-items: center;
}
.fixed {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>
