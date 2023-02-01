<template>
    <view class="content">
        <u-navbar :autoBack="true" title="确认返佣"></u-navbar>
        <view class="padding-lr-sm padding-tb" :style="`margin-top:${(CustomBar)*2}rpx;`">
            <view class="whiteBoxShadow">
                <boxTitle title="返佣明细"></boxTitle>
                <view class="flex justify-between">
                    <view class="text-gray">返佣方式</view>
                    <view>{{ status == 0?"现金":status == 1?"商品":"积分" }}</view>
                </view>
                <template v-if="status==1">
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">返佣商品</view>
                        <view>东方国宾·尊致53°500ml</view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">返佣数量</view>
                        <view>480瓶</view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">合计金额</view>
                        <view class="text-right">
                            <view class="text-red">¥70000.00</view>
                            <view class="text-gray text-sm">{{ $util.convertCurrency(70000) }}</view>
                        </view>
                    </view>
                </template>
                <view v-if="status==0" class="flex justify-between margin-top-sm">
                    <view class="text-gray">返佣金额</view>
                    <view class="text-right">
                        <view class="text-red">¥70000.00</view>
                        <view class="text-gray text-sm">{{ $util.convertCurrency(70000) }}</view>
                    </view>
                </view>
                <view v-if="status==2" class="flex justify-between margin-top-sm">
                    <view class="text-gray">返佣积分</view>
                    <view>70000000积分</view>
                </view>
                <view class="margin-tb u-border-bottom w100"></view>
                <view class="flex justify-between align-center">
                    <view class="text-lg text-bold">返佣合计</view>
                    <view class="text-right">
                        <view class="text-red">¥70000.00</view>
                        <view v-if="status!=2" class="text-gray text-sm">{{ $util.convertCurrency(70000) }}</view>
                    </view>
                </view>
            </view>
            <view class="fixed padding-xs bg-white flex justify-between align-center">
                <template v-if="status==0">
                    <view class="flex-sub">合计<text class="text-red">￥7000.00</text></view>
                    <view class="flex-sub">
                        <button class="cu-btn bg-gray radius margin-right-sm">取消支付</button>
                        <button @click="gotoPay" class="cu-btn bg-red radius">确认支付</button>
                    </view>
                </template>
                <button @click="sureBack" v-if="status==1" class="cu-btn bg-red radius w100">确认返佣</button>
                <button @click="submit" v-if="status==2" class="cu-btn bg-red radius w100">确认提交</button>
            </view>
        </view>
        <uni-popup ref="popup" type="center">
            <view class="w100 flex justify-center">
                <view class="w75 radius padding-xl bg-white text-center">
                    <view class="text-bold text-lg">确认返佣</view>
                    <view class="margin-top">确认返佣后商品自动补入代理商云库存请问是否确认通过</view>
                    <view class="flex margin-top">
                        <button @click="$refs.popup.close()" class="cu-btn bg-gray radius flex-sub">取消</button>
                        <button @click="$refs.popup.close()" class="cu-btn bg-red radius flex-sub margin-left-sm">确认</button>
                    </view>
                </view>
            </view>
        </uni-popup>
    </view>

</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";

export default {
    name: "sureBackGoods",
    components: {
        boxTitle
    },
    data() {
        return {
            status: ""
        };
    },
    onLoad(options) {
        this.status = options.status;
    },
    methods:{
        sureBack(){
            this.$refs.popup.open()
        },
        submit(){

        },
        gotoPay(){
            uni.redirectTo({
                url:"/pages/admin/adminContract/surePay"
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.fixed{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-shadow: 10rpx 10rpx 20rpx #959595;
}
</style>