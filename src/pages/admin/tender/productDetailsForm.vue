<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" :autoBack="true" title="发布招标"></u-navbar>
        <view class="padding" :style="'margin-top:' + CustomBar + 'px;padding-bottom:100rpx'">
            <view class="whiteBoxShadow">
                <boxTitle title="商品详情"></boxTitle>
                <fxbForm ref="fxbFormOne" :model="formData" :form-desc="formDesc" :rules="rules"></fxbForm>
            </view>
        </view>
        <view class="fixed w100 padding-lr padding-tb-xs bg-white">
            <button @click="sure" class="cu-btn bg-red radius w100">确定</button>
        </view>
    </view>
</template>

<script>
import fxbForm from "/src/components/fxb/fxb-form";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "productDetailsForm",
    components:{
        fxbForm,
        boxTitle
    },
    data(){
        return{
            rules: {
                "degrees": {
                    type: "string",
                    required: true,
                    message: "请填写酒精度",
                    trigger: ["blur", "change"]
                },
                "characteristic": {
                    type: "string",
                    required: true,
                    message: "请填写特点",
                    trigger: ["blur", "change"]
                },
                "dateOfManufacture": {
                    type: "string",
                    required: true,
                    message: "请填写生产日期",
                    trigger: ["blur", "change"]
                },
                "dateFermentation": {
                    type: "string",
                    required: true,
                    message: "请填写发酵日期",
                    trigger: ["blur", "change"]
                },
                "dateStorage": {
                    type: "string",
                    required: true,
                    message: "请填写存放日期",
                    trigger: ["blur", "change"]
                },
                "productionBase": {
                    type: "string",
                    required: true,
                    message: "请填写生产基地",
                    trigger: ["blur", "change"]
                },
                "manufacturer": {
                    type: "string",
                    required: true,
                    message: "请填写生产厂家",
                    trigger: ["blur", "change"]
                },
                "license": {
                    type: "array",
                    required: true,
                    min:1,
                    message: "请上传生成许可证",
                    trigger: ["blur", "change"]
                },
                "report": {
                    type: "array",
                    required: true,
                    min:1,
                    message: "请上传质检报告",
                    trigger: ["blur", "change"]
                },
                "productDetailImg": {
                    type: "array",
                    required: true,
                    min:1,
                    message: "请上传商品详情图",
                    trigger: ["blur", "change"]
                }
            },
            formDesc: [
                {
                    keyName: "degrees",
                    type: "classify",
                    required: true,
                    label: "酒精度",
                    borderBottom: true,
                    placeholder: "请选择",
                    column: this.$config.VOL_TYPE
                },
                {
                    keyName: "characteristic",
                    type: "input",
                    required: true,
                    label: "特点",
                    borderBottom: true,
                    placeholder: "五粮、浓香、醇和、梁香突出",
                },
                {
                    keyName: "dateOfManufacture",
                    type: "input",
                    required: true,
                    label: "生产日期",
                    borderBottom: true,
                    placeholder: "2016年",
                },
                {
                    keyName: "dateFermentation",
                    type: "input",
                    required: true,
                    label: "发酵日期",
                    borderBottom: true,
                    placeholder: "90~180天",
                },
                {
                    keyName: "dateStorage",
                    type: "input",
                    required: true,
                    label: "存放日期",
                    borderBottom: true,
                    placeholder: "五年以上",
                },
                {
                    keyName: "productionBase",
                    type: "input",
                    required: true,
                    label: "生产基地",
                    borderBottom: true,
                    placeholder: "请输入生产基地",
                },
                {
                    keyName: "manufacturer",
                    type: "input",
                    required: true,
                    label: "生产厂家",
                    borderBottom: true,
                    placeholder: "请输入生产厂家",
                },
                {
                    keyName: "license",
                    type: "image",
                    labelWidth:120,
                    required: true,
                    label: "生成许可证",
                    borderBottom: true,
                    placeholder: "请上传生成许可证",
                },
                {
                    keyName: "report",
                    type: "image",
                    labelWidth:120,
                    required: true,
                    label: "质检报告",
                    borderBottom: true,
                    placeholder: "请上传质检报告",
                },
                {
                    keyName: "productDetailImg",
                    type: "image",
                    labelWidth:120,
                    required: true,
                    label: "商品详情图",
                    placeholder: "请上传商品详情图",
                },
            ],
            formData:{
                degrees:"",//度数
                characteristic:"",//特点
                dateOfManufacture:"",//生产日期
                dateFermentation:"",//发酵日期
                dateStorage:"",//存放日期
                productionBase:"",//生产基地
                manufacturer:"",//生产厂家
                license:[],//生成许可证
                report:[],//质检报告
                productDetailImg:[],//商品详情图
            },
        }
    },
    methods:{
        async sure(){
            let isSure = await this.$refs.fxbFormOne.submit()
            if (isSure){
                uni.navigateBack({
                    delta:1
                })
            }
        }
    }
};
</script>

<style scoped>

</style>