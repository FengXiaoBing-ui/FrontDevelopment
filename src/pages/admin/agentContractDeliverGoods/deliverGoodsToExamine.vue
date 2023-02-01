<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="新增发货" :autoBack="true">
        </u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ CustomBar + 'px;padding-bottom:120rpx'">
            <view class="whiteBoxShadow flex justify-center align-center" @click="addProduct">
                <text class="cuIcon-roundaddfill text-red margin-right-sm"></text>
                <text class="text-red">添加商品</text>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <view class="flex justify-between align-center">
                    <text class="text-bold">东方国宾·尊致酒代理合同</text>
                    <text style="font-size: 36rpx" class="cuIcon-deletefill text-gray"></text>
                </view>
                <view class="flex align-center text-gray margin-top-sm">
                  <view class="margin-right-xl">结算方式：现结</view>
                  <view class="margin-left-xl">合同编号：213234233543</view>
                </view>
                <view class="u-border-top margin-top"></view>
                <view class="margin-top" v-for="item in 2" :key="item">
                    <view class="flex align-center">
                        <fxbImage class="radius" width="140" height="140" src="/productDetails/Slice%201.png" mode="aspectFill"></fxbImage>
                        <view style="height: 140rpx;width: 75%" class="margin-left-sm flex flex-direction justify-around">
                            <view class="text-bold">东方国宾53°瓶装500ml</view>
                            <view class="text-sm text-gray flex justify-between align-center">
                                <view>香型:酱香型</view>
                                <view>度数:53°</view>
                                <view>容量:500ml</view>
                            </view>
                            <view class="text-sm text-gray flex align-center">
                                <text class="text-black text-df">代理价：</text>
                                <view class="flex align-center text-df">
                                    <text class="text-red">￥365.00</text>
                                    <text class="text-gray">/瓶</text>
                                </view>
                            </view>
                        </view>
                    </view>
                    <view class="flex justify-between align-end margin-top-sm">
                        <view class="flex align-center">
                            <text class="text-gray" style="margin-left:160rpx">¥0.00</text>
                        </view>
                        <view class="flex align-center">
                            <u-icon class="margin-right-sm" v-show="value>0" @click="move" size="19" name="minus-circle"></u-icon>
                            <input v-show="value>0" style="width: 50rpx" type="number" :value="value">
                            <text @click="add" style="font-size: 38rpx" class="cuIcon-roundaddfill text-red margin-right-sm"></text>
                        </view>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <view class="flex justify-between align-center">
                    <text class="text-gray">数量合计</text>
                    <view style="text-align: right">
                      <view class="text-bold text-lg">240瓶</view>
                      <view class="text-grey">100件</view>
                    </view>
                </view>
                <view class="u-border-top margin-tb-sm"></view>
                <view class="flex justify-between align-center">
                    <text class="text-gray">金额合计</text>
                    <view style="text-align: right">
                      <view class="text-red text-lg text-bold">¥860000.00</view>
                      <view class="text-grey">{{ convertCurrency(860000) }}</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="botBtn padding-xs bg-white">
            <button @click="submit" class="cu-btn bg-red radius w100">提交审核</button>
        </view>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
import botBtn from '/src/components/fxb-bot-fixed-button/fxb-bot-fixed-button'
import convertCurrency from "/src/utils/dataFormat/convertCurrency"
export default {
    name: "deliverGoodsToExamine",
    components:{
        botBtn,
        fxbImage
    },
    data(){
        return{
            status:0,
            value:0,
        }
    },
    onLoad(options){
        this.status = options.status
    },
    methods:{
      convertCurrency,
        change1(){
            uni.navigateTo({
                url:"/pages/admin/contractDeliverGoods/toExamineFailed"
            })
        },
        addProduct(){
            uni.navigateTo({
                url:"/pages/admin/agentContractDeliverGoods/productList"
            })
        },
        submit(){
            uni.showToast({
                title:"已提交",
            })
            setTimeout(() => {
                uni.navigateBack({
                    delta:1
                })
            },800)
        },
        add(){
            this.value++
        },
        move(){
            if (this.value>0){
                this.value--
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.botBtn{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>