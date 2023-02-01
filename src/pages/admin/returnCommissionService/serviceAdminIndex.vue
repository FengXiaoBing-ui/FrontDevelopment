<template>
    <view>
        <u-navbar :autoBack="true" title="返佣管理"></u-navbar>
        <view :style="`margin-top:${(CustomBar)*2}rpx`">
            <view class="padding flex flex-direction">
                <view class="cu-btn bg-red margin-sm" @click="pageTo('pages/admin/returnCommissionService/forAgent/returnAdmin')">代理商返佣管理</view>
                <view class="cu-btn bg-red margin-sm" @click="pageTo('pages/admin/returnCommissionService/forPersonal/returnAdmin')">个人合作伙伴返佣管理</view>
            </view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    components: {
        boxTitle,
    },
    data() {
        return {}
    },
    methods:{
        pageTo(url){
            uni.navigateTo({
                url
            })
        }
    }
};
</script>

<style lang="scss" scoped>

</style>