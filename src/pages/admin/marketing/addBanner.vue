<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="新增轮播图" :autoBack="true"></u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ CustomBar + 'px;padding-bottom:100rpx'">
            <view class="whiteBoxShadow">
                <boxTitle title="新增轮播"></boxTitle>
                <view class="flex">
                    <u-radio-group
                        v-model="radioValue"
                        placement="row"
                        @change="groupChange"
                        class="flex justify-around"
                    >
                        <u-radio
                            :customStyle="{marginBottom: '8px'}"
                            v-for="(item, index) in radioList"
                            :key="index"
                            activeColor="red"
                            :label="item.name"
                            :name="item.name"
                        >
                        </u-radio>
                    </u-radio-group>
                </view>
                <fxbForm ref="fxbForm" :rules="rules" :form-desc="formDesc" :model="formData"></fxbForm>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-lg">费用合计</view>
                    <view class="text-red text-lg">￥2100.00</view>
                </view>
            </view>
            <view class="padding-xs bg-white botBtn">
                <button @click="submit" class="cu-btn bg-red flex ">提交申请</button>
            </view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbForm from "/src/components/fxb/fxb-form"
export default {
    name: "addBanner",
    components: {
        boxTitle,
        fxbForm
    },
    data() {
        return {
            msg: "请选择时长",
            radioValue: "商品推广轮播",
            radioList: [
                {
                    name: "商品推广轮播"
                },
                {
                    name: "活动推广轮播"
                }
            ],
            fileList1: [],
            show: false,
            columns: [
                ["7日", "15日", "30日"]
            ],
            rules: {
                "bannerImage": {
                    type: "array",
                    required: true,
                    min:1,
                    message: "请上传轮播图片",
                    trigger: ["blur", "change"]
                },
                "bannerName": {
                    type: "string",
                    required: true,
                    message: "请填写轮播图名称",
                    trigger: ["blur", "change"]
                },
                "Product": {
                    type: "string",
                    required: true,
                    min:1,
                    message: "请选择商品/活动",
                    trigger: ["blur", "change"]
                },
                "selectDuration": {
                    type: "string",
                    required: true,
                    min:1,
                    message: "请选择轮播时长",
                    trigger: ["blur", "change"]
                }
            },
            formDesc: [
                {
                    keyName: "bannerImage",
                    type: "image",
                    required: true,
                    label: "轮播图片",
                    borderBottom: true,
                    imageList: []
                },
                {
                    keyName: "bannerName",
                    type: "input",
                    required: true,
                    label: "轮播图名称",
                    borderBottom: true,
                    placeholder: "请输入轮播图名称",
                },
                {
                    keyName: "Product",
                    type: "classify",
                    required: true,
                    label: "选择商品/活动",
                    labelWidth:"200",
                    borderBottom: true,
                    placeholder: "请选择",
                    column: this.$config.COMMODITY_CATEGORY
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
                    borderBottom: true,
                    placeholder: "请选择轮播时长",
                    column: this.$config.COMMODITY_CATEGORY
                },
            ],
            formData:{
                bannerImage:[],//轮播图片
                bannerName:"",//*轮播图名称
                Product:"",//商品
                selectDuration:"",//选择时长
            }
        };
    },
    methods: {
        async submit(){
            let isSubmit = await this.$refs.fxbForm.submit();
            if (isSubmit){
                uni.redirectTo({
                    url:"/pages/payResult/payResult?status=bannerApplication"
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
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        },
        groupChange(e) {
            console.log(e);
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