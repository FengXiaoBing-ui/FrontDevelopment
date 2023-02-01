<template>
    <view>
        <u-navbar :autoBack="true" title="食品安全"></u-navbar>
        <view :style="`margin-top:${(CustomBar+10)*2}rpx`" class="padding-lr-sm">
            <view class="whiteBoxShadow">
                <boxTitle title="食品安全"></boxTitle>
                <inputCell :label-require="false" :require="false"
                           :inputValue.sync="safetyForm.controProductionLicenseNo" label="生产许可证编号"
                           placeholder="请输入" type="input"
                ></inputCell>
                <inputCell :label-require="false" :require="false" :inputValue.sync="safetyForm.controProductStandardNo"
                           label="产品标准号"
                           placeholder="请输入"
                           type="input"></inputCell>
                <inputCell :label-require="false" :require="false" :inputValue.sync="safetyForm.controFoodAdditives"
                           label="食品添加剂" placeholder="请输入"
                           type="input"></inputCell>
                <inputCell :label-require="false" :require="false" :inputValue.sync="safetyForm.controOrganicFood"
                           label="有机食品" placeholder="请输入"
                           type="input"></inputCell>
                <inputCell :label-require="false" :require="false" :inputValue.sync="safetyForm.controMixedIngredients"
                           border="none" label="配料"
                           placeholder="请输入"
                           type="input"></inputCell>
            </view>
        </view>
        <view class="botBtn bg-white padding-xs flex">
            <button class="cu-btn bg-gray radius flex-sub margin-right-sm" @click="sureBack">取消</button>
            <button class="cu-btn bg-red radius flex-sub margin-right-sm" @click="sureBack">确认</button>
        </view>
    </view>
</template>

<script>
import inputCell from "/src/components/common/form/inputCell";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import { mapMutations, mapState } from "vuex";

export default {
    name: "foodSafety",
    components: {
        boxTitle, inputCell
    },
    data() {
        return {
            safetyForm: {
                controProductionLicenseNo: "",   // '生产许可证编号
                controProductStandardNo: "",     // '产品标准号 ',
                controFoodAdditives: "",          // '食品添加剂
                controOrganicFood: "",            // '有机食品
                controMixedIngredients: ""       // '配料'
            }
        };
    },
    computed: {
        ...mapState("product", ["foodSafety"])
    },
    onShow() {
        this.safetyForm = this.foodSafety;
    },
    methods: {
        ...mapMutations("product", ["setFoodSafety"]),
        sureBack() {
            this.setFoodSafety(this.safetyForm);
            uni.navigateBack({ delta: 1 });
        }
    }
};
</script>

<style lang="scss" scoped>
.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>
