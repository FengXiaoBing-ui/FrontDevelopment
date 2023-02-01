<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="申述" :autoBack="true">
        </u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ CustomBar + 'px;'">
            <view class="whiteBoxShadow">
                <boxTitle title="提出申诉"></boxTitle>
                <inputCell label="申诉原因" :text="formData.reason||'请选择'" @iconEvent="selectPickerFun('reason')" icon="cuIcon-right" border="none"></inputCell>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="补充描述和图片"></boxTitle>
                <inputCell label="补充描述，有助于服务商更好处理问题" type="area"></inputCell>
                <inputCell @uploadImg="formData.appeal = $event" label="申诉图片" border="none" type="upload">
                    <text slot="center" class="text-orange text-sm">最多上传5张图片</text>
                </inputCell>
            </view>
            <u-picker :columns="pickerArr" :show="pickerShow" @cancel="closePicker" @close="closePicker"
                      @confirm="selectPicker"></u-picker>
            <button @click="submit" class="cu-btn bg-red radius w100 margin-top-xl">提交</button>
        </view>
    </view>
</template>

<script>
import inputCell from "/src/components/common/form/inputCell";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "appeal",
    components:{
        boxTitle,
        inputCell
    },
    data(){
        return{
            pickerShow:false,
            pickerArr:[],
            reason:[["串货"]],
            formData:{
                reason:"",
                describe:"",
                appeal:""
            }
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
        submit(){
            console.log(this.formData);
            uni.showToast({
                title:"提交成功"
            })
            setTimeout(() => {
                uni.navigateBack({
                    delta:2
                })
            },500)
        }
    }
};
</script>

<style scoped>

</style>