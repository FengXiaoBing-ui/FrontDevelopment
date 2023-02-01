<!--wjx20220830-->
<template>
    <view>
        <u-navbar :autoBack="true" title="新增收货地址"></u-navbar>
        <view :style="`margin-top:${CustomBar+10}px`" class="margin-lr">
            <view class="bg-white padding radius ">
                <view class="text-bold flex align-center  text-xl ">
                    <view class="redBlock margin-right-sm"></view>
                    新增收货人
                </view>
                <view class="margin-tb">
                    <inputCell :label="item.title" :type="item.title==='地址'?'':'input'" :icon="item.title==='地址'?'cuIcon-right':''" :text="item.title==='地址'?'请选择收货地址':''" :placeholder="item.placeholder" v-for="(item,index) in form" :key=item.title></inputCell>
                </view>
                <view class="flex align-center justify-between">
                    <view>是否设置为默认地址</view>
                    <view class="flex align-center margin-tb">
                        <view @click="RadioChange" class="radio">
                            <radio  :checked="isDefault" class="margin-left-sm"></radio>
                        </view>
                        <view style="color: #FFAA00;" class="text-bold text-xs">设置为默认地址</view>
                    </view>
                </view>
            </view>
            <view class="margin-tb">
                 <button :style="`width:100%`" class="cu-btn bg-red " @click="submitAddress">确认</button>
            </view>
        </view>
    </view>

</template>

<script>
import inputCell from "../../../components/common/form/inputCell";

export default {
    name: "addAddressIndex",
    components: {
        inputCell
    },
    data: function() {
        return {
            isDefault: false,
            form: [
                { title: "姓名", type: "", placeholder: "请输入姓名", value: "" },
                { title: "联系电话", type: "", placeholder: "请输入联系电话", value: "" },
                { title: "地址", type: "", value: "" },
                { title: "详细地址", type: "", placeholder: "请输入详细地址", value: "" }
            ]
        };
    },
    methods: {
        selectAddress() {
            console.log(123);
        },
        RadioChange(e) {
            this.isDefault = !this.isDefault;
        },
        submitAddress(){
            uni.navigateTo({
                url:"pages/index/applicationSample/addressIndex"
            })
        }
    }
};
</script>

<style scoped>
.redBlock {
    width: 0.25rem;
    height: 20px;
    background: red;
    border-radius: 0.2rem;
}

.cu-form-group .title {
    min-width: calc(4em + 15px);
}
.radio{
    transform: scale(0.7);
}

/deep/.uni-radio-input-checked{
    background-color:red!important;
    border-color:red!important;
}
/deep/.uni-radio-input-checked::before{
    display: none!important;
}

</style>
