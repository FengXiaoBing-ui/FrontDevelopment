<template>
<view class="content">
    <u-navbar :border="false" :fixed="true" title="新增客户"
              :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
              :safeAreaInsetTop="false"
              :autoBack="true">
    </u-navbar>
    <view class="padding" :style="'margin-top:'+ CustomBar + 'px'">
        <view class="whiteBoxShadow">
            <boxTitle title="客户信息"></boxTitle>
            <view class="padding-left-sm">
                <u-form
                    labelPosition="left"
                    :model="model1"
                    :rules="rules"
                    labelWidth=""
                    ref="form1"
                >
                    <view v-for="(item,index) in fromData" :key="index">
                        <u-form-item
                            :label="item.label"
                            prop="userInfo.sex"
                            :borderBottom="!item.noBorder"
                            @click="isChoice(item.isOption,index,item.childrenList)"
                            ref="item1"
                            :required="true"
                            :label-width="item.labelWidth?item.labelWidth:80"
                            :class="item.isUpload?'vertical':''"
                        >
                            <u-input
                                v-if="!item.isUpload&&!item.isOption"
                                v-model="item.value"
                                :placeholder="item.placeholder"
                                border="none"
                            ></u-input>
                            <u-input
                                v-if="item.isOption"
                                input-align="right"
                                v-model="item.value"
                                disabled
                                disabledColor="#ffffff"
                                :placeholder="item.placeholder"
                                placeholder-style="color:#000"
                                border="none"
                            ></u-input>
                            <u-icon
                                v-if="item.isOption"
                                slot="right"
                                name="arrow-right"
                                class="margin-left"
                            ></u-icon>
                        </u-form-item>
                    </view>
                    <u-action-sheet
                        :show="showSex"
                        :actions="actions"
                        title="选择分类"
                        @close="showSex = false"
                        @select="sexSelect"
                    >
                    </u-action-sheet>
                </u-form>
            </view>
        </view>
        <button class="cu-btn bg-red radius margin-top-xl" style="width: 100%">确定</button>
    </view>
</view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "addCustomer",
    components:{
        boxTitle
    },
    data(){
        return{
            showSex:false,
            actions: [],
            model1: {
                userInfo: {
                    name: "",
                    sex: ""
                }
            },
            rules: {
                "userInfo.name": {
                },
                "userInfo.sex": {
                }
            },
            fromData: [
                {
                    value: "",
                    placeholder: "请输入姓名",
                    label: "姓名"
                },
                {
                    value: "",
                    placeholder: "请输入联系电话",
                    label: "联系电话",
                },
                {
                    value: "",
                    placeholder: "请选择经营地点",
                    label: "发货地址",
                    isOption:true,
                    childrenList:[
                        {
                            name:"观山湖区经营点"
                        },
                        {
                            name:"南明区经营点"
                        },
                        {
                            name:"云岩区经营点"
                        }
                    ]
                },
                {
                    value: "",
                    placeholder: "请输入商品零售价",
                    label: "零售价"
                },
                {
                    value: "",
                    placeholder: "",
                    label: "详细地址",
                    noBorder:true
                }
            ],
        }
    },
    methods:{
        isChoice(isOption, index, childrenList) {
            this.actions = childrenList;
            this.fromDataIndex = index;
            if (isOption) {
                this.showSex = true;
            }
        },
        sexSelect(e) {
            this.fromData[this.fromDataIndex].value = e.name;
            this.$refs.form1.validateField("userInfo.sex");
        },
    }
};
</script>

<style lang="scss" scoped>

</style>