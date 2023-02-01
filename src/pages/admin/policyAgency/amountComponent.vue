<template>
    <view class="content">
        <u-navbar :autoBack="true" rightClick="" rightText="" title="金额组件"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`" class="padding-lr-sm padding-tb">
            <view class="whiteBoxShadow">
                <boxTitle title="金额组件"></boxTitle>
                <inputCell :inputValue.sync="formData.componentsName" label="组件名称" type="input" placeholder="请输入组件名称"></inputCell>
                <inputCell :text="formData.componentsUnit||'元'" @iconEvent="selectPickerFun('componentsUnit')" label="组件单位" icon="cuIcon-right"></inputCell>
                <inputCell :text="formData.isRequired||'是'" @iconEvent="selectPickerFun('isRequired')" label="是否必填" icon="cuIcon-right" border="none"></inputCell>
            </view>
        </view>
        <u-picker :columns="pickerArr" :show="pickerShow" @cancel="closePicker" @close="closePicker"
                  @confirm="selectPicker"></u-picker>
    </view>
</template>

<script>
import inputCell from "/src/components/common/form/inputCell";
import boxTitle from "/src/pages/agent/components/fxb-box-title";

export default {
    name: "amountComponent",
    components:{
        boxTitle,
        inputCell
    },
    data(){
        return{
            componentsUnit:[["元","分"]],
            isRequired:[["是","否"]],
            formData:{
                componentsName:"",
                componentsUnit:"",
                isRequired:""
            },
            pickerType: "",
            pickerShow: false,
            pickerArr: [],
        }
    },
    methods:{
        closePicker() {
            this.pickerShow = false;
        },
        selectPicker(e) {
            this.$set(this.formData, this.pickerType, e.value[0]);
            this.pickerShow = false;
        },
        selectPickerFun(name) {
            this.pickerArr = this[name];
            this.pickerType = name;
            this.pickerShow = true;
        },
    }
};
</script>

<style scoped>

</style>