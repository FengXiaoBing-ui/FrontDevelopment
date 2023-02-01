<template>
    <view class="content">
        <u-navbar :autoBack="true" rightClick="" rightText="" title="添加返佣方式"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`" class="padding-lr-sm padding-tb">
            <u-checkbox-group>
                <view class="whiteBoxShadow margin-top-sm"
                      v-for="(item,index) in formData" :key="index">
                    <boxTitle :title="item.rakeTypeName">
                        <view slot="switch">
                            <u-checkbox activeColor="red" :checked="!!item.isChecked" :name="item.rakeTypeName"
                                        @change="checkboxChange(index)"></u-checkbox>
                        </view>
                    </boxTitle>
                    <inputCell :label="item.rakeTypeName">
                        <view v-if="index===0" slot="center" class="margin-left-sm flex align-center justify-between">
                            <input v-model="item.commodityNum" type="number"
                                   :placeholder="item.placeholder">
                            <text>{{ item.unit }}</text>
                        </view>
                        <view v-else-if="index===1" slot="center"
                              class="margin-left-sm flex align-center justify-between">
                            <input v-model="item.rakePrice" type="number"
                                   :placeholder="item.placeholder">
                            <text>{{ item.unit }}</text>
                        </view>
                        <view v-else-if="index===2" slot="center"
                              class="margin-left-sm flex align-center justify-between">
                            <input v-model="item.integralNum" type="number"
                                   :placeholder="item.placeholder">
                            <text>{{ item.unit }}</text>
                        </view>
                    </inputCell>
                    <view class="flex justify-between align-center margin-top-sm">
                        <view>合计金额</view>
                        <view class="text-red" v-if="index===0">￥{{ totalAmount }}元</view>
                        <view class="text-red" v-else-if="index===2">￥{{ integralPrice }}元</view>
                    </view>
                </view>
            </u-checkbox-group>
            <button class="cu-btn bg-red radius w100 margin-top-xl" @click="sure">确认选择</button>
        </view>
    </view>
</template>

<script>
import inputCell from "/src/components/common/form/inputCell";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import { mapMutations, mapState } from "vuex";

export default {
    name: "addCommission",
    components: {
        boxTitle,
        inputCell
    },
    data() {
        return {
            formData: [
                {
                    rakeTypeName: "商品返佣",
                    isChecked: 0,
                    placeholder: "请输入返佣商品数量",
                    commodityNum: "",
                    unit: "瓶",
                    totalAmount: 0
                },
                {
                    rakeTypeName: "现金返佣",
                    isChecked: 0,
                    placeholder: "请输入金额",
                    rakePrice: ""
                },
                {
                    rakeTypeName: "积分返佣",
                    isChecked: 0,
                    placeholder: "请输入返佣积分数量",
                    integralNum: "",
                    unit: "分",
                    integralPrice: ""

                }
            ],
            testData: [
                {
                    "rakeTypeName": "商品返佣",
                    "isChecked": 1,
                    "placeholder": "请输入返佣商品数量",
                    "commodityNum": "20",
                    "unit": "瓶",
                    "totalAmount": 4000
                },
                {
                    "rakeTypeName": "现金返佣",
                    "isChecked": 1,
                    "placeholder": "请输入金额",
                    "rakePrice": "300",
                    "unit": ""
                },
                {
                    "rakeTypeName": "积分返佣",
                    "isChecked": 1,
                    "placeholder": "请输入返佣积分数量",
                    "integralNum": "10000",
                    "unit": "分",
                    "total": 0,
                    "integralPrice": 100
                }
            ]
        };
    },
    onShow() {
        this.formData = this.rakeBack;
    },
    computed: {
        ...mapState("policy", ["agentPrice", "rakeBack"]),
        totalAmount() {
            const res = this.agentPrice * this.formData[0].commodityNum;
            this.formData[0].totalAmount = res;
            return res;
        },
        integralPrice() {
            const res = this.formData[2].integralNum / 100;
            this.formData[2].integralPrice = res;
            return res;
        }

    },
    methods: {
        ...mapMutations("policy", ["setRakeBack"]),
        checkboxChange(event) {
            this.formData[event].isChecked = !this.formData[event].isChecked;
        },
        sure() {
            console.log(this.formData);
            this.setRakeBack(this.formData);
            uni.navigateBack({ delta: 1 });
        }
    }
};
</script>

<style lang="scss" scoped>
/deep/ .u-checkbox-group--row {
    display: flex;
    flex-direction: column;
}
</style>
