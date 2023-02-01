<template>
    <view class="content flex flex-direction justify-between"
          style="width: 100vw;height: 100vh;background-color: #f9f9f9">
        <!--顶部标题-->
        <u-navbar title="" @rightClick="unfollow" :autoBack="true" placeholder rightText="···" :leftText="leftText"
                  class="text-bold"></u-navbar>
        <!--聊天区-->
        <view v-for="(record, index) in chatRecords" :key="index" class="flex flex-direction padding"
              style="width: 100%;height: 100%">
            <view class="text-center">
                <view>{{ record.time }}</view>
            </view>
            <view v-if="leftText==='飞天茅台酒代理'" v-for="(item, subIndex) in record.contents" :key="subIndex">
                <view v-if="item.user==='自己'" class="margin-top flex justify-between" style="width: 100%">
                    <view style="width: 10%"></view>
                    <view style="width: 80%">
                        <text class=" padding-sm fr"
                              style="border-radius: 10px;display: inline-block;background-color: #FEF8EC">
                            {{ item.text }}
                        </text>
                    </view>
                    <view class="text-right" style="width: 10%;">
                        <u-avatar :src="item.user"></u-avatar>
                    </view>
                </view>
                <view v-else class="margin-top flex">
                    <view class="text-left" style="width: 10%">
                        <u-avatar :src="item.user"></u-avatar>
                    </view>
                    <view style="width: 80%" class="margin-left-sm">
                        <view class="margin-left-xs">咕噜咕力</view>
                        <text class="bg-white padding-sm margin-top-xs"
                              style="border-radius: 10px;display: inline-block">{{ item.text
                            }}
                        </text>
                    </view>
                    <view style="width: 10%"></view>
                </view>
            </view>
            <!--官方消息-->
            <view v-if="leftText==='官方客服'" class="margin-top flex">
                <view class="text-left" style="width: 10%">
                    <u-avatar src="https://cdn.uviewui.com/uview/album/1.jpg"></u-avatar>
                </view>
                <view style="width: 80%" class="margin-left-sm">
                    <view class="margin-left-xs">咕噜咕力</view>
                    <text class="bg-white padding-sm margin-top-xs"
                          style="border-radius: 10px;display: inline-block"> 您好！我是您的专属咨询服务 小优
                    </text>
                </view>
                <view style="width: 10%"></view>
            </view>
            <!--核对订单-->
            <view class="margin-top flex" v-if="leftText==='核对样品订单信息'">
                <view class="text-left" style="width: 10%">
                    <u-avatar src="https://cdn.uviewui.com/uview/album/1.jpg"></u-avatar>
                </view>
                <view style="width: 80%" class="margin-left-sm">
                    <view class="margin-left-xs">咕噜咕力</view>
                    <text class="bg-white padding-sm margin-top-xs"
                          style="border-radius: 10px;display: inline-block">
                        <view class="text-bold">亲，请您核对样品订单</view>
                        <view class="flex align-center bg-gray radius margin-top-sm">
                            <fxbImage style="width: 100rpx;height: 100rpx" class="radius"
                                      src="/productDetails/Slice%201.png"></fxbImage>
                            <view class="margin-top-sm margin-left-sm">
                                <view>东方国宾·尊致酒53°瓶装...</view>
                                <view class="text-gray">共2件样品，合计¥99.00</view>
                            </view>
                        </view>
                        <view class="margin-top-sm text-gray">
                            <view>姓名：刘扬杨</view>
                            <view>电话：12234358586（号码保护中，仅自己可见）</view>
                            <view>地址：贵州省 贵阳市 观山湖区 金融MAX·C座2124号</view>
                        </view>
                        <view class="flex justify-end margin-top-sm">
                            <view class="cu-btn round" style="width: 33%">修改</view>
                            <view class="cu-btn round text-white margin-left-sm"
                                  style="width: 33%;background-color: rgba(243, 123, 29, 1)">确认
                            </view>
                        </view>
                    </text>
                </view>
                <view style="width: 10%"></view>
            </view>
            <!--发送商品-->
            <view v-if="goods" class="margin-top flex justify-between" style="width: 100%">
                <view style="width: 10%"></view>
                <view style="width: 80%">
                    <text class="padding-sm fr radius"
                          style="border-radius: 10px;display: inline-block;background-color: white">
                        <view class="flex align-start radius">
                            <fxbImage style="width: 150rpx;height: 150rpx" class="radius"
                                      src="/productDetails/Slice%201.png"></fxbImage>
                            <view class="margin-left-sm">
                                <view>东方国宾·尊致酒53°瓶装...</view>
                                <view class="text-red margin-top-sm">¥99.00</view>
                            </view>
                        </view>
                        <view class="u-border-bottom margin-tb-sm"></view>
                        <view>{{ leftText }}</view>
                    </text>
                </view>
                <view class="text-right" style="width: 10%;">
                    <u-avatar src="https://cdn.uviewui.com/uview/album/1.jpg"></u-avatar>
                </view>
            </view>
        </view>
        <!--发送的商品-->
        <view v-if="leftText==='发送商品'&&send" class="foot bg-white radius padding-sm margin-left-sm"
              style="width: 715rpx">
            <view class="flex align-center">
                <fxbImage style="width: 100rpx;height: 100rpx" class="radius"
                          src="/productDetails/Slice%201.png"></fxbImage>
                <view class="margin-top-sm margin-left-sm" style="width: 80%">
                    <view class="flex justify-between align-center">
                        <view>东方国宾·尊致酒53°瓶装...</view>
                        <view @click="send=false" class="cuIcon-close text-gray margin-right-sm"
                              style="font-size: 18px"></view>
                    </view>
                    <view class="text-gray flex justify-between margin-top-xs align-center">
                        <view class="text-red">99.00</view>
                        <view class="cu-btn text-white round text-sm"
                              style="width: 150rpx;height: 50rpx;background-color: rgba(243, 123, 29, 1)"
                              @click="sendGoods"> 发送商品
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <!--底部输入栏-->
        <view class="fixed w100 padding-top-sm bg-gray">
            <view class="padding-left-sm" v-if="leftText!=='飞天茅台酒代理'">
                <view class="cu-btn round bg-white" @click="sendGoods">发送商品</view>
                <view class="cu-btn round bg-white margin-left-sm">结束对话</view>
            </view>
            <view class="padding-sm flex align-center justify-between ">
                <view class="cuIcon-sound" style="font-size: 30px"></view>
                <view style="width: 560rpx" @click="keyBoard">
                    <u--input
                        placeholder="请输入内容"
                        border="surround"
                        v-model="value"
                        @change="change"
                        class="bg-white"
                    ></u--input>
                </view>
                <view class="cuIcon-roundadd " style="font-size: 30px"></view>
            </view>
            <u-keyboard ref="uKeyboard" mode="car" :show="show" @close="close"></u-keyboard>
        </view>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image";

export default {
    name: "discussionGroup",
    data() {
        return {
            send: true,
            goods: false,
            show: false,
            value: "",
            leftText: "",
            chatRecords: [
                {
                    time: "12:00", contents: [
                        { user: "", text: "大家觉得这款酒在新疆这边好销吗?" },
                        { user: "自己", text: "这款酒在贵州这边销量还挺好的,可以少代理点试试." },
                        {
                            user: "https://cdn.uviewui.com/uview/album/1.jpg",
                            text: "大家觉得这款酒在新疆这边好销吗?大家觉得这款酒在新疆这边好销吗大家觉得这款酒在新疆这边好销吗"
                        },
                        { user: "自己", text: "这款酒在贵州这边销量还挺好" }
                    ]
                }
            ]
        };
    },
    onLoad(option) {
        this.leftText = option.title;
    },
    methods: {
        sendGoods() {
            this.goods = !this.goods;
            this.send = false;
        },
        close() {
            this.show = false;
        },
        keyBoard() {
            this.show = !this.show;
        },
        unfollow() {
            console.log("取关该组");
        },
        change(e) {
            console.log("change", e);
        }
    },
    components: {
        fxbImage
    }
};
</script>

<style scoped>
.foot {
    position: fixed;
    bottom: 110px;
    width: 100%;
}
</style>
