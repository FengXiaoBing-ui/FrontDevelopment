<template>
    <view class="content">
        <u-navbar :autoBack="true" rightClick="" rightText="" title="添加代理政策"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`" class="padding-lr-sm padding-tb">
            <view class="whiteBoxShadow">
                <boxTitle title="代理级别设置"></boxTitle>
                <inputCell :text="formData.agentLevel||'请选择级别'" @iconEvent="selectPickerFun('agentLevel')" label="选择级别"
                           icon="cuIcon-right"></inputCell>
                <inputCell :inputValue.sync="formData.levelName" label="级别名称" type="input"
                           placeholder="请输入级别名称"></inputCell>
                <inputCell label="是否缴纳保证金">
                    <view slot="center" class="flex justify-end align-center">
                        <button style="width: 160rpx" @click="formData.isDeposit = item" v-for="item in Bond"
                                :key="item"
                                :class="formData.isDeposit==item?'bg-red':'bg-gray'"
                                class="cu-btn radius margin-left-sm">
                            <!--                        {{ item==0?'是':'否' }}-->
                            {{ item }}
                        </button>
                    </view>
                </inputCell>
                <inputCell label="保证金金额">
                    <view slot="center" class="flex align-center">
                        <text>￥</text>
                        <input v-model="formData.depositAmount" class="margin-left-sm" type="text" placeholder="请输入金额">
                    </view>
                </inputCell>
                <inputCell label="是否可减免保证金" border="none">
                    <view slot="center" class="flex justify-end align-center">
                        <button style="width: 160rpx" @click="formData.isReduction = item"
                                v-for="item in reductionBond" :key="item"
                                :class="formData.isReduction==item?'bg-red':'bg-gray'"
                                class="cu-btn radius margin-left-sm">
                            <!--                            {{ item == 0 ? "是" : "否" }}-->
                            {{ item }}
                        </button>
                    </view>
                </inputCell>
                <view class="text-orange text-bold text-sm">
                    *开通减免保证金后，代理商代理产品时可不缴纳缴纳保证金；
                    *若不需缴纳保证金的商品可添加保证金额并选择减免，可作为
                    一种推广方式；
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <view class="flex align-center margin-bottom">
                    <view class="cuIcon-question text-red margin-right-sm" style="font-size: 38rpx"></view>
                    <view>代理级别设置须知</view>
                </view>
                <text class="text-gray">
                    代理级别分为5级，可自行配置级别名称以及是否需要开启缴纳
                    保证金；
                    配置举例：
                    一级——可配置名称（钻石代理/全国代理）
                    二级——可配置名称（金牌/省级代理）
                    三级——可配置名称（银牌/市级代理）银牌
                    四级——可配置名称（铜牌/县级代理）铜牌
                    五级——可配置名称（普通/乡、镇、街道级代理）
                </text>
            </view>
            <button @click="sure" class="bg-red radius cu-btn w100 margin-top">确定</button>
            <u-picker :columns="pickerArr" :show="pickerShow" @cancel="closePicker" @close="closePicker"
                      @confirm="selectPicker"></u-picker>
        </view>
    </view>
</template>

<script>
import inputCell from "/src/components/common/form/inputCell";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import { mapMutations, mapState } from "vuex";

export default {
    name: "addAgentLevel",
    components: {
        boxTitle,
        inputCell
    },
    data() {
        return {
            Bond: ["是", "否"],
            reductionBond: ["是", "否"],
            pickerType: "",
            pickerShow: false,
            agentLevel: [["一级", "二级", "三级", "四级", "五级"]],
            pickerArr: [],
            formData: {
                agentLevel: "",//代理等级
                levelName: "",//级别名称
                isDeposit: "是",//是否缴纳保证金
                depositAmount: "",   // '保证金金额',
                isReduction: "是"//是否减免保证金
            }
            // testData: {
            //     "agentLevel": "一级",
            //     "levelName": "全国代理",
            //     "isDeposit": "是",
            //     "depositAmount": "100000",
            //     "isReduction": "是"
            // }
        };
    },
    methods: {
        ...mapMutations("policy", ["setAgentLvInfo"]),
        sure() {
            this.setAgentLvInfo(this.formData);
            console.log(this.formData);
            uni.navigateBack({ delta: 1 });
        },
        closePicker() {
            this.pickerShow = false;
        },
        selectPicker(e) {
            this.$set(this.formData, this.pickerType, e.value[0]);
            this.$set(this.formData, "level", e.indexs[0]);
            this.pickerShow = false;
        },
        selectPickerFun(name) {
            this.pickerArr = this[name];
            this.pickerType = name;
            this.pickerShow = true;
        }
    }
};
</script>

<style lang="scss" scoped>
.uni-input-placeholder, input {
    font-size: 28rpx;
}
</style>
