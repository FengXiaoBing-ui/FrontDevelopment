<template>
    <view class="content">
        <u-navbar title="创建合同" :autoBack="true"></u-navbar>
        <view class="padding" :style="'margin-top:' + CustomBar + 'px'">
            <view class="whiteBoxShadow">
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
                            :required="item.required"
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
                </u-form>
                <u-action-sheet
                    :show="showSex"
                    :actions="actions"
                    title="选择分类"
                    @close="showSex = false"
                    @select="sexSelect"
                >
                </u-action-sheet>
            </view>
        </view>
        <fxbBotFixedButton
            btn1="发起合同签署"
            btn1-class="cu-btn bg-red radius b100"
            btn-sun-box-class1="b100"
        ></fxbBotFixedButton>
    </view>
</template>

<script>
import fxbBotFixedButton from "/src/components/fxb-bot-fixed-button/fxb-bot-fixed-button"
export default {
    name: "createContractTwo",
    components:{
        fxbBotFixedButton
    },
    data(){
        return{
            showSex:false,
            actions:[],
            fromData: [
                {
                    value: "",
                    placeholder: "请选择",
                    label: "选择合同年限",
                    isOption: true,
                    required: true,
                    labelWidth:200,
                    childrenList: [
                        {
                            name:"1年"
                        },
                        {
                            name:"2年"
                        },
                        {
                            name:"3年"
                        },
                        {
                            name:"5年"
                        }
                    ]
                },
                {
                    value: "",
                    placeholder: "请选择",
                    label: "是否为特约代理商",
                    isOption: true,
                    required: true,
                    labelWidth:200,
                    childrenList: [
                        {
                            name:"普通代理商"
                        },
                        {
                            name:"特约代理商"
                        }
                    ],
                },
                {
                    value: "",
                    placeholder: "100件(600瓶)",
                    label: "特约代理商首批进货",
                    labelWidth:200,
                },
                {
                    value: "",
                    placeholder: "人民币贰拾万元整",
                    label: "特约代理商首批进货总价",
                    noBorder: true,
                    labelWidth:200,
                }
            ],
            model1:{},
            rules:[]
        }
    },
    methods:{
        sexSelect(e) {
            this.fromData[this.fromDataIndex].value = e.name;
            this.$refs.form1.validateField("userInfo.sex");
        },
        isChoice(isOption, index, childrenList) {
            this.actions = childrenList;
            this.fromDataIndex = index;
            if (isOption) {
                this.showSex = true;
            }
        },
    }
};
</script>

<style scoped>

</style>