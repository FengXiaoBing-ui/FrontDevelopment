<template>
    <view>
        <u-navbar :autoBack="true" rightText="删除伙伴" title="我的合作伙伴" @rightClick="del"></u-navbar>
        <view :style="`margin-top:${CustomBar + 10}px`" class="padding-lr">
            <view class="whiteBoxShadow">
                <boxTitle title="基础信息"></boxTitle>
                <inputCell label="姓名" placeholder="张东" type="input"></inputCell>
                <inputCell border="none" label="联系电话" placeholder="18690728989" type="input" class="margin-right-xl"></inputCell>
            </view>
            <view class="whiteBoxShadow margin-top">
                <view class="flex justify-between u-border-bottom">
                    <boxTitle title="产品权限"></boxTitle>
                    <view>添加商品 <text class="cuIcon-roundadd text-red margin-left-xs"></text> </view>
                </view>
                <view v-for="item in List " :key="item.goodsID" class=" align-center padding-top u-border-bottom">
                    <view class="flex align-center">
                        <view class="">
                            <fxbImage src="/productDetails/Slice%201.png" style="width:150rpx;height:150rpx"></fxbImage>
                        </view>
                        <view class="w100 margin-left-sm ">
                            <view class="flex justify-between align-center">
                                <view class="text-bold">{{ item.goods }}</view>
                                <view class="cuIcon-delete"></view>
                            </view>
                            <view class="flex justify-between text-xs text-gray margin-tb-xs">
                                <view>香型：{{ item.goodsType }}</view>
                                <view>度数：{{ item.degrees }}</view>
                                <view>容量：{{ item.volume }}</view>
                            </view>
                            <view class="text-gray flex align-center">代理价：
                                <view class="text-red">￥{{ item.gPrice }}.00 <text class="text-gray">/瓶</text></view>
                            </view>
                        </view>
                    </view>
<!--                    <view class="flex w100 justify-between margin-top">-->
<!--                        <view class="text-gray flex align-center">零售价：-->
<!--                            <view class="text-red">￥{{ item.price }}.00</view>-->
<!--                        </view>-->
<!--                        <view class="text-gray flex align-center">代理价：-->
<!--                            <view class="text-red">￥{{ item.gPrice }}.00</view>-->
<!--                        </view>-->
<!--                    </view>-->
                    <inputCell border="none" label="返佣比例" placeholder="请输入返佣比例" type="input"></inputCell>
                    <inputCell border="none" icon="cuIcon-right" text="月结" label="返佣方式" placeholder="请选择返佣方式" type="input"></inputCell>
                </view>
            </view>
            <view class="w100 radius cu-btn bg-red margin-tb" @click="save">保存</view>
            <u-popup @close="close" :show="showDel" mode="center" :round="4">
                <view class="padding-lg padding-lr-xl w120">
                    <view class="text-center margin-top-lg text-black">您确定要删除该伙伴吗</view>
                </view>
              <view class="w100 flex align-center  margin-top-lg">
                <button class="bg-gray w50 radius cu-btn " @click="close">取消</button>
                <button @click="close" class="bg-red w50  radius cu-btn ">确认删除</button>
              </view>
            </u-popup>
        </view>

    </view>
</template>

<script>
import inputCell from "/src/components/common/form/inputCell";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbImage from "/src/components/fxb/fxb-image";

export default {
    name: "fixInfo",
    components: {
        inputCell,
        boxTitle,
        fxbImage
    },
    data() {
        return {
            showDel: false,
            List: [
                {
                    goodsID: "4837487",
                    goods: "飞天茅台53°瓶装酱香型 500ml",
                    goodsType: "酱香型",
                    degrees: "53°", //度数
                    volume: "500ml",//容量
                    price: "448",
                    gPrice: "365"
                },
                {
                    goodsID: "4871487",
                    goods: "飞天茅台53°瓶装酱香型 500ml",
                    goodsType: "酱香型",
                    degrees: "53°", //度数
                    volume: "500ml",//容量
                    price: "448",
                    gPrice: "365"
                },
                {
                    goodsID: "4874487",
                    goods: "飞天茅台53°瓶装酱香型 500ml",
                    goodsType: "酱香型",
                    degrees: "53°", //度数
                    volume: "500ml",//容量
                    price: "448",
                    gPrice: "365"
                }
            ]
        };
    },
    methods: {
        orderInfo() {
            uni.navigateTo({
                url: "pages/admin/myPartnershipService/partnershipInfo"
            });
        },
        del() {
            this.showDel = true;
        },
        save() {
            uni.navigateBack({
                delta: 1
            });
        },
        close(){
            this.showDel = false
        }
    }
};
</script>

<style scoped>

</style>