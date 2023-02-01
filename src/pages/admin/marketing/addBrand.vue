<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="新增品牌专区" :autoBack="true"></u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ CustomBar + 'px;padding-bottom:100rpx'">
            <view class="whiteBoxShadow">
                <boxTitle title="新增品牌专区"></boxTitle>
                <fxbForm ref="fxbForm" :model="formData" :rules="rules" :form-desc="formDesc"></fxbForm>
                <twoGoodsInfoCard
                    goods-name="飞天茅台53°瓶装酱香型 500ml"
                    goods-type="酱香型"
                    goodsDegrees="49"
                    goodsVolume="500"
                    img-url="/productDetails/Slice%201.png"
                    retail-price="389"
                    name-price="代理价："
                    iconDelete
                >
                </twoGoodsInfoCard>

                <view class="flex padding-top-sm align-center justify-between">
                    <text class="">费用合计</text>
                    <view class="flex justify-between align-center padding-left-lg">
                        <view class="text-red">￥0.00</view>
                    </view>
                </view>

                <u-picker :show="show" :columns="columns" @cancel="cancel" @confirm="confirm"></u-picker>
            </view>
        </view>
        <view class="botBtn bg-white padding-xs flex">
            <button @click="submit" class="cu-btn bg-red radius flex-sub">提交申请</button>
        </view>
    </view>
</template>

<script>
import fxbForm from "/src/components/fxb/fxb-form"
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import twoGoodsInfoCard from "/src/components/erp/twoGoodsInfoCard";
import agencyPolicy from "/src/components/erp/agencyPolicy";
import { mapState,mapMutations } from "vuex"

export default {
    name: "addBrand",
    components: {
        fxbForm,
        boxTitle,
        twoGoodsInfoCard,
        agencyPolicy
    },
    computed:{
      ...mapState('product',['brand'])
    },
    data() {
        return {
            rules: {
                "controBrandId": {
                    type: "string",
                    required: true,
                    min:1,
                    message: "请选择品牌",
                    trigger: ["blur", "change"]
                },
                "selectDuration": {
                    type: "string",
                    required: true,
                    min:1,
                    message: "请选择时长",
                    trigger: ["blur", "change"]
                }
            },
            formDesc: [
                {
                    keyName: "controBrandId",
                    type: "classify",
                    required: true,
                    label: "品牌",
                    path:"/pages/agent/brandScreen",
                    placeholder: "请选择",
                    borderBottom: true,
                },
                {
                    type: "exhibitionText",
                    required: true,
                    text:"￥200.00",
                    secondaryText:"/日",
                    label: "单价时长",
                    borderBottom: true
                },
                {
                    keyName: "selectDuration",
                    type: "classify",
                    required: true,
                    label: "选择时长",
                    min:1,
                    borderBottom: true,
                    placeholder: "请选择时长",
                    column: this.$config.FRAGRANT_TYPE
                },
                {
                    type: "button",
                    buttonText:"去添加",
                    required: true,
                    label: "添加商品",
                    path: "/pages/admin/marketing/selectProduct"
                },
            ],
            formData:{
                controBrandId:"",//品牌
                selectDuration:"",//选择时长
            },
            msg: "请选择时长",
            fileList1: [],
            columns: [["7日", "15日", "30日"]],
            show: false,
            status: 0,
            policyList: {
                province: [
                    { name: "贵州省", id: "1" },
                    { name: "云南省", id: "2" },
                    { name: "海南省", id: "3" }
                ],
                city: [
                    {
                        province: "贵州省",
                        city: [
                            { name: "贵阳市", id: "01" },
                            { name: "遵义市", id: "02" },
                            { name: "清镇市", id: "03" }
                        ]
                    },
                    {
                        province: "云南省",
                        city: [
                            { name: "昆明市", id: "01" },
                            { name: "普洱市", id: "02" },
                            { name: "清镇市", id: "03" }
                        ]
                    }
                ],
                area: [
                    {
                        city: "贵阳市",
                        area: [
                            { name: "观山湖区", id: "001" },
                            { name: "云岩区", id: "002" },
                            { name: "清镇", id: "003" }
                        ]
                    }
                ],
                street: [
                    {
                        area: "贵阳市观山湖区",
                        street: [
                            { name: "白云大道", id: "0001" },
                            { name: "金融城", id: "0002" },
                            { name: "阳关大道", id: "0003" }
                        ]
                    },
                    {
                        area: "贵阳市观山湖区",
                        street: [
                            { name: "白云大道", id: "0001" },
                            { name: "金融城", id: "0002" },
                            { name: "阳关大道", id: "0003" }
                        ]
                    }

                ]
            }
        };
    },
    onShow(){
      this.formData.controBrandId = this.brand
        console.log(this.formData.controBrandId,this.brand);
    },
    onLoad(options) {
        this.status = options.status;
    },
    onUnload(){
        this.addProductSetBrand('')
    },
    methods: {
        ...mapMutations('product',['addProductSetBrand']),
        async submit(){
          let isSubmit = await this.$refs.fxbForm.submit()
            if (isSubmit){
                uni.redirectTo({
                    url:"/pages/payResult/payResult?status=brandApplication"
                })
            }
        },
        confirm(e) {
            this.msg = e.value[0];
            this.show = false;
        },
        cancel(e) {
            this.show = false;
        },
        gotoPayment() {
            uni.navigateTo({
                url: "/pages/admin/tastingMeeting/payment"
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>