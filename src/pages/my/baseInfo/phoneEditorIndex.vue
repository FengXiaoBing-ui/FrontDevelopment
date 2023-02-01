<template>
    <view>
        <u-navbar :autoBack="true" :border="false" title="修改手机号"></u-navbar>
        <view :style="`margin-top:${CustomBar}px;height:calc(100vh - ${CustomBar}px)`"
              class="bg-white flex flex-direction align-center justify-center">
            <view v-show="leave==0" class="flex flex-direction align-center ">
                <view class="margin-bottom-lg  text-xl">当前手机号</view>
                <view class="text-bold text-xl">183****4551</view>

                <view class="margin-top-xl padding-lr" style="width: 270%" >
                    <button style="width: 100%" class="cu-btn bg-red text-center text-lg padding-tb-xl" @click="changeLeave(1)">修改手机号</button>
                </view>
            </view>
            <view class="flex flex-direction align-center padding-sm" style="width: 100%;">
                <view v-show="leave==1" class="margin-bottom-lg">请输入新的手机号</view>
                <u--input v-show="leave==1" placeholder="请输入手机号" style="width: 100%;"></u--input>
                <view v-show="leave==2" class="margin-bottom-lg"   color="#f56c6c" borderColor="#f56c6c">请输入验证码</view>
                <u-code-input v-show="leave==2" v-model="verification" :maxlength="4"></u-code-input>
                <button v-show="leave==1" class="cu-btn bg-red margin-tb-sm" style="width: 100%;" @click="changeLeave(2)">修改手机号</button>
                <button v-show="leave==2" class="cu-btn bg-gray margin-tb-sm " style="width: 100%;" @click="changeLeave(2)">下一步</button>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "phoneEditorIndex",
    watch:{
        verification(val){
            if(val.length==4){
                uni.showToast({
                    title:'修改成功'
                })
                uni.navigateBack({
                    delta:1
                })
            }
        }
    },
    data() {
        return {
            leave: 0,
            newPhone: "",
            verification: ""
        };
    },
    methods: {
        changeLeave(val) {
            this.leave = val;
            console.log(this.leave);
        }
    }
};
</script>

<style lang="scss" scoped>
.try {
    width: 190px;
    right: 0px;
    left: 0px;
}
</style>