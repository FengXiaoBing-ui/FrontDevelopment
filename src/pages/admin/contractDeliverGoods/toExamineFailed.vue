<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" :title="status==0?'废标公告':'驳回说明申请'" :autoBack="true">
        </u-navbar>
        <view class="padding-sm" :style="'margin-top:'+ CustomBar + 'px'">
            <u-textarea confirmType="done" v-model="value1" placeholder="请输入驳回原因" height="275"></u-textarea>
            <button @click="submit" class="cu-btn bg-red radius margin-top" style="width: 100%">提交</button>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";

export default {
    name: "toExamineFailed",
    components: {
        boxTitle
    },
    data() {
        return {
            status:0,
            value1: ""
        };
    },
    methods: {
        submit() {
            uni.showToast({
                title: "提交成功!"
            });
            setTimeout(() => {
                uni.navigateBack({
                    delta: 1
                });
            }, 500);
        }
    },
    onLoad(option){
        this.status=option.status
    }
};
</script>

<style scoped>

</style>