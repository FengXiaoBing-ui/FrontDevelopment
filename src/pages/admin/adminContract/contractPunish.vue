<template>
<view class="content">
    <u-navbar :border="false" :fixed="true" title="合同处罚" :autoBack="true">
    </u-navbar>
    <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ CustomBar + 'px;padding-bottom:100rpx'">
        <view class="whiteBoxShadow">
            <boxTitle title="处罚原因"></boxTitle>
            <inputCell label="处罚原因" type="input" :inputValue.sync="formData.reason" placeholder="请输入处罚原因"></inputCell>
            <inputCell label="上传图片凭证" type="upload" @uploadImg="formData.pictureVoucher = $event"></inputCell>
        </view>
        <view class="whiteBoxShadow margin-top-sm">
            <boxTitle title="处罚方式"></boxTitle>
            <inputCell label="处罚方式" text="暂停合同" :text="formData.punish||'请选择'" @iconEvent="selectPickerFun('punish')" icon="cuIcon-right"></inputCell>
        </view>
        <view class="padding-xs bg-white margin-top">
            <button @click="surePunish" class="cu-btn bg-red radius w100">确认处罚</button>
        </view>
        <u-picker :columns="pickerArr" :show="pickerShow" @cancel="closePicker" @close="closePicker"
                  @confirm="selectPicker"></u-picker>
        <u-modal :closeOnClickOverlay="true"  confirmColor="red" @confirm="confirm" @cancel="cancel" showCancelButton :show="show" :title="title" :content='content' class="text-center"></u-modal>
    </view>

<!--    <uni-popup ref="popup" type="center">-->
<!--        <view class="w100 h100 bg-white"></view>-->
<!--    </uni-popup>-->
</view>
</template>

<script>
import inputCell from "/src/components/common/form/inputCell";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "contractPunish",
    components:{
        boxTitle,
        inputCell
    },
    data(){
        return{
            show:false,
            title:"确认处罚",
            content:"您确定对该合同发起处罚？",
            pickerShow:false,
            pickerArr:[],
            punish:[["暂停合同"]],
            formData:{
                reason:"",
                pictureVoucher:"",
                punish:""
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
        surePunish(){
            console.log(this.formData);
            this.show = true
            // this.$refs.popup.open();
        },
        confirm(){
            this.show = false;
            uni.showToast({
                title:"处罚成功！"
            })
            setTimeout(() => {
                uni.navigateBack({
                    delta:1
                })
            },500)
        },
        cancel(){
            this.show = false
        }
    }
};
</script>

<style scoped>

</style>