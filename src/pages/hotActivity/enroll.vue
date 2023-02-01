<template>
    <view class="content">
        <u-navbar title="提交报名" :fixed="true" :autoBack="true"></u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:' + CustomBar +'px;'">
            <view class="whiteBoxShadow">
                <boxTitle title="提交信息"></boxTitle>
                <fxbForm ref="fxbForm" :model="submitData" :rules="rules" :form-desc="dataDesc"></fxbForm>
            </view>
            <button class="cu-btn bg-red radius w100 margin-top" @click="submit">提交信息</button>
        </view>
    </view>
</template>

<script>
import fxbForm from "/src/components/fxb/fxb-form"
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "enroll",
    components:{
        boxTitle,
        fxbForm
    },
    data(){
        return{
            dataDesc:[
                {
                    keyName:"name",
                    type:"input",
                    label:"姓名",
                    borderBottom:true,
                    required:true
                },
                {
                    keyName:"phone",
                    type:"input",
                    label:"联系电话",
                    borderBottom:true,
                    required:true
                },
                {
                    keyName:"company",
                    type:"input",
                    label:"公司名称",
                    borderBottom:true
                }
            ],
            rules:{
                "name":{
                    type: 'string',
                    required: true,
                    message: '请填写姓名',
                    trigger: ['blur', 'change']
                },
                "phone":{
                    type: 'string',
                    required: true,
                    message: '请填写手机号',
                    trigger: ['blur', 'change']
                },
                "company":{
                    type: 'string',
                    required: true,
                    message: '请填写公司名称',
                    trigger: ['blur', 'change']
                },
            },
            submitData:{
                name:"",
                phone:"",
                company:""
            }
        }
    },
    methods:{
        async submit(){
            let isSubmit = await this.$refs.fxbForm.submit();
            if (isSubmit){
                uni.showToast({
                    title:"提交成功"
                })
                setTimeout(() => {
                    uni.navigateTo({
                        url:"/pages/hotActivity/pay"
                    })
                },500)
            }
        }
    }
};
</script>

<style scoped>

</style>