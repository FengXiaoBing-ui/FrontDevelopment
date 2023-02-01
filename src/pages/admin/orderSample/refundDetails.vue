<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" :title="title"
                  :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
                  :safeAreaInsetTop="false"
                  :autoBack="true">
        </u-navbar>
        <view class="padding-lr-sm padding-top " :style="'margin-top:' + CustomBar + 'px;padding-bottom:80px'">
            <view class="whiteBoxShadow">
                <boxTitle :title="title"></boxTitle>
<!--                <view v-if="title=='退款'" class="flex align-center justify-between padding-bottom u-border-bottom">-->
<!--                    <view>-->
<!--                        <text class="text-red">*</text>-->
<!--                        货物状态-->
<!--                    </view>-->
<!--                    <view>-->
<!--                        <text class="text-gray margin-right-sm">没收到货</text>-->
<!--                        <text class="cuIcon-right" style="font-size: 38rpx;"></text>-->
<!--                    </view>-->
<!--                </view>-->
                <view class="flex align-center justify-between padding-tb u-border-bottom">
                    <view>
                        <text class="text-red">*</text>
                        {{ title == "退货退款" ? "退款原因" : "换货原因" }}
                    </view>
                    <view>
                        <text class="text-gray margin-right-sm">商品破损</text>
                        <text class="cuIcon-right" style="font-size: 38rpx;"></text>
                    </view>
                </view>
                <view class="flex align-center justify-between padding-top">
                    <view>
                        <text class="text-red">*</text>
                        {{ title == "退货退款"||title=="退款" ? "退款商品" : "换货商品" }}
                    </view>
                    <view>
                        <text class="text-gray margin-right-sm">请选择商品</text>
                        <text class="cuIcon-right" style="font-size: 38rpx;"></text>
                    </view>
                </view>
<!--                <view v-if="title!='退货退款'" class="margin-top" :class="title=='申请换货'?'':'padding-top u-border-top'">-->
<!--                    <view class="flex align-center justify-between">-->
<!--                        <view class="flex align-center">-->
<!--                            <view>-->
<!--                                <text class="text-red">*</text>-->
<!--                                退货方式-->
<!--                            </view>-->
<!--                        </view>-->
<!--                        <view class="text-gray">上门取件</view>-->
<!--                    </view>-->
<!--                    &lt;!&ndash;					<view class="flex flex-direction margin-top-xl">&ndash;&gt;-->
<!--                    &lt;!&ndash;						<view class="agentInfo flex align-center padding-bottom">&ndash;&gt;-->
<!--                    &lt;!&ndash;						    <view class="text-gray" style="width: 30%;">收货人：</view>&ndash;&gt;-->
<!--                    &lt;!&ndash;						    <view class="text-cut text-left" style="width: 64%">张涛 123456789</view>&ndash;&gt;-->
<!--                    &lt;!&ndash;						</view>&ndash;&gt;-->
<!--                    &lt;!&ndash;						<view class="agentInfo flex align-start">&ndash;&gt;-->
<!--                    &lt;!&ndash;						    <view class="text-gray" style="width: 30%;">收货地址：</view>&ndash;&gt;-->
<!--                    &lt;!&ndash;						    <view class="text-left" style="width: 64%">贵州省贵阳市观山湖区金融城金融城MAX·C座21楼24号</view>&ndash;&gt;-->
<!--                    &lt;!&ndash;							<text class="cuIcon-right" style="font-size: 38rpx;"></text>&ndash;&gt;-->
<!--                    &lt;!&ndash;						</view>&ndash;&gt;-->
<!--                    &lt;!&ndash;					</view>&ndash;&gt;-->
<!--                    <addressBox class="addressBox margin-top-sm" def icon :addressInfo="addressInfo"-->
<!--                                :select="true"></addressBox>-->
<!--                </view>-->
                <view v-for="(item,index) in goodsList">
                    <view class="flex align-start margin-top-lg">
                        <fxbImage width="150" height="150" src="/productDetails/Slice%201.png"
                                  mode="aspectFill"></fxbImage>
                        <view class="margin-left-sm flex flex-treble flex-direction">
                            <view class="flex justify-between">
                                <view class="text-bold text-lg">{{ item.title }}</view>
                                <view class="cuIcon-deletefill text-gray"></view>
                            </view>
                            <view class="text-sm flex align-center margin-top-sm">
                                <text class="text-gray"
                                      style="color: #F37B1D ;background-color:rgba(255,165,0,0.2)">
                                    香型:{{ item.type }}
                                </text>
                                <text class="text-gray margin-left-sm"
                                      style="color: #E54D42;background-color:rgba(255,0,0,0.2)">
                                    度数:{{ item.degrees }}
                                </text>
                                <text class="text-gray margin-left-sm"
                                      style="color: #0081FF;background-color:rgba(0,0,255,0.1)">
                                    容量:{{ item.capacity }}ml
                                </text>
                            </view>
                            <view class="text-sm flex justify-between align-center margin-top-sm">
                                <view class="flex align-center">
                                    <text>代理价：</text>
                                    <view class="text-red">￥{{ item.price }}.00</view>
                                </view>
                            </view>
                        </view>
                    </view>
                    <view class="flex justify-between margin-top">
                        <view class="flex">
                            <view>
                                <text class="text-red">*</text>
                                {{ title == "换货" ? "换货数量" : "退货数量" }}
                            </view>
                            <input class="margin-left-xl" type="text" placeholder="请输入退款商品数量" style="font-size: 14px">
                        </view>
                        <text>瓶</text>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="补充描述和凭证"></boxTitle>
                <view class="text-gray margin-tb">补充描述，有助于服务商更好处理售后问题</view>
                <input class="u-border-bottom" type="text">
                <view class="margin-tb">
                    <text class="text-red">*</text>
                    <text>凭证图片</text>
                    <text class="text-sm text-orange margin-left-sm">最多上传5张图片</text>
                </view>
                <u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
                          :maxCount="5"></u-upload>
            </view>
        </view>
        <view class="fixed w100 bg-white padding">
            <button style="width: 100%;" class="cu-btn bg-red lg" @click="refundResult">提交</button>

        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import addressBox from "/src/pages/index/applicationSample/addressBox";
import fxbImage from "/src/components/fxb/fxb-image";

export default {
    components: {
        boxTitle,
        addressBox,
        fxbImage
    },
    data() {
        return {
            title: "",
            fileList1: [],
            addressInfo: {
                name: "张傲",
                phone: "18878855878",
                address: "贵州省贵阳市观山湖区金融城金融城MAX·C座21楼24号"
            },
            goodsList: [
                {
                    title:"东方国宾53°瓶装500ml",
                    type:"酱香型",
                    degrees:"53°",
                    capacity:500,
                    price:356
                },
                {
                    title:"东方国宾53°瓶装500ml",
                    type:"酱香型",
                    degrees:"55°",
                    capacity:500,
                    price:356
                }
            ]
        };
    },
    onLoad(options) {
        this.title = options.title;
    },
    methods: {
        refundResult() {
            // uni.navigateTo({
            // 	url:"/pages/admin/orderSample/refundResult"
            // })
            uni.navigateTo({
                url: "/pages/payResult/payResult?status=returnRefund"
            });
        },
        // 删除图片
        deletePic(event) {
            this[`fileList${event.name}`].splice(event.index, 1);
        },
        // 新增图片
        async afterRead(event) {
            // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
            let lists = [].concat(event.file);
            let fileListLen = this[`fileList${event.name}`].length;
            lists.map((item) => {
                this[`fileList${event.name}`].push({
                    ...item,
                    status: "uploading",
                    message: "上传中"
                });
            });
            for (let i = 0; i < lists.length; i++) {
                const result = await this.uploadFilePromise(lists[i].url);
                let item = this[`fileList${event.name}`][fileListLen];
                this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
                    status: "success",
                    message: "",
                    url: result
                }));
                fileListLen++;
            }
        },
        uploadFilePromise(url) {
            // return new Promise((resolve, reject) => {
            // 	let a = uni.uploadFile({
            // 		url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
            // 		filePath: url,
            // 		name: 'file',
            // 		formData: {
            // 			user: 'test'
            // 		},
            // 		success: (res) => {
            //             console.log(res);
            // 			setTimeout(() => {
            // 				resolve(res.data.data)
            // 			}, 1000)
            // 		}
            // 	});
            // })
        }
    }
};

</script>

<style lang="scss" scoped>
.boxShadow {
    padding: 30rpx 20rpx;
    background: white;
    border-radius: 10rpx;
    box-shadow: 4rpx 4rpx 16rpx #e6dee6;
}

/deep/ .u-upload__wrap__preview__image, /deep/ .u-upload__button {
    width: 146rpx !important;
    height: 146rpx !important;
}

.addressBox {
    /deep/ .padding {
        padding: 0;
    }
}

/deep/ .u-navbar {
    .u-navbar__content {
        height: var(--CustomBar) !important;
        padding-top: var(--StatusBar);

        .u-navbar__content__left,
        .u-navbar__content__right {
            margin-top: var(--StatusBar);
        }
    }
}
</style>
