<template>
    <view class="content">
        <u-navbar title="εε»Ίεε" :autoBack="true"></u-navbar>
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
                    title="ιζ©εη±»"
                    @close="showSex = false"
                    @select="sexSelect"
                >
                </u-action-sheet>
            </view>
        </view>
        <fxbBotFixedButton
            btn1="εθ΅·εεη­Ύη½²"
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
                    placeholder: "θ―·ιζ©",
                    label: "ιζ©εεεΉ΄ι",
                    isOption: true,
                    required: true,
                    labelWidth:200,
                    childrenList: [
                        {
                            name:"1εΉ΄"
                        },
                        {
                            name:"2εΉ΄"
                        },
                        {
                            name:"3εΉ΄"
                        },
                        {
                            name:"5εΉ΄"
                        }
                    ]
                },
                {
                    value: "",
                    placeholder: "θ―·ιζ©",
                    label: "ζ―ε¦δΈΊηΉηΊ¦δ»£ηε",
                    isOption: true,
                    required: true,
                    labelWidth:200,
                    childrenList: [
                        {
                            name:"ζ?ιδ»£ηε"
                        },
                        {
                            name:"ηΉηΊ¦δ»£ηε"
                        }
                    ],
                },
                {
                    value: "",
                    placeholder: "100δ»Ά(600ηΆ)",
                    label: "ηΉηΊ¦δ»£ηει¦ζΉθΏθ΄§",
                    labelWidth:200,
                },
                {
                    value: "",
                    placeholder: "δΊΊζ°εΈθ΄°ζΎδΈεζ΄",
                    label: "ηΉηΊ¦δ»£ηει¦ζΉθΏθ΄§ζ»δ»·",
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