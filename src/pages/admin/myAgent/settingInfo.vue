<template>
    <view>
        <u-navbar :autoBack="true" title="修改详情" ></u-navbar>
        <view :style="`margin-top:${CustomBar+10}px`" class="margin-lr">
            <view class="whiteBoxShadow">
                <inputCell :require="false" label="姓名" text="张东"></inputCell>
                <inputCell :require="false" label="身份证号" text="522422********2437"></inputCell>
                <inputCell :require="false" label="公司名称" text="贵州好酒选电子商务有限公司"></inputCell>
                <inputCell :require="false" label="统一社会信用代码" text="HYUJ4738KIWI32892J"></inputCell>
                <inputCell :require="false" label="业务经理" text="王刚" icon="cuIcon-right" @iconEvent="selectTeam"></inputCell>
            </view>
            <view class="margin-top w100">
                <view class="cu-btn bg-red w100 radius" @click="saveInfo">保存</view>
            </view>
        </view>
    </view>
</template>

<script>
import inputCell from "/src/components/common/form/inputCell";
export default {
    name: "settingInfo",
    components:{
        inputCell
    },
    methods:{
        saveInfo(){
            uni.navigateTo({
                url:'pages/admin/myAgent/agentInfo'
            })
        },
        selectTeam(){
            uni.navigateTo({
                url:'pages/admin/myAgent/selectTeam'
            })
        }
    }
};
</script>

<style scoped>

</style>