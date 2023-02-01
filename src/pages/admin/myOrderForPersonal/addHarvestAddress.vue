<template>
    <view>
        <u-navbar :autoBack="true" title="新增收货地址"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`" class="padding-sm">
            <view class="whiteBoxShadow">
                <boxTitle title="新增收获地址"></boxTitle>
                <view class="flex ">
                    <view class="w25">
                        <text class="text-red">*</text>
                        <text class="margin-left-sm ">姓名</text>
                    </view>
                    <input type="text" placeholder="请输入您的姓名">
                </view>
                <view class="u-border-bottom margin-tb"></view>
                <view class="flex ">
                    <view class="w25">
                        <text class="text-red">*</text>
                        <text class="margin-left-sm">联系电话</text>
                    </view>
                    <input type="text" placeholder="请输入您的联系电话">
                </view>
                <view class="u-border-bottom margin-tb"></view>
                <uni-data-picker popup-title="请选择所在地区" :localdata="dataTree" v-model="classes"
                                 @change="onchange" @nodeclick="onnodeclick" @popupopened="onpopupopened"
                                 @popupclosed="onpopupclosed"
                >
                    <view class="flex justify-between ">
                        <view class="w25">
                            <text class="text-red">*</text>
                            <text class="margin-left-sm">收货地址</text>
                        </view>
                        <view class="flex align-center">
                            <text class="text-gray">{{ select }}</text>
                            <view class="cuIcon-right margin-left-sm"></view>
                        </view>
                    </view>
                </uni-data-picker>

                <view class="u-border-bottom margin-tb"></view>
                <view class="flex ">
                    <view class="w25">
                        <text class="text-red">*</text>
                        <text class="margin-left-sm">详细地址</text>
                    </view>
                    <input type="text" placeholder="请输入详细地址">
                </view>
                <view class="u-border-bottom margin-tb"></view>
                <view class="flex justify-between margin-top">
                    <text>是否设置为默认地址</text>
                    <view class="flex align-center">
                        <view @click="RadioChange" class="radio">
                            <radio :checked="show" class="margin-left-sm"></radio>
                        </view>
                        <view style="color: #FFAA00;" class="text-bold text-xs">设置为默认地址</view>
                    </view>
                </view>
            </view>
            <button @click="gotoPath(status)" class="bg-red margin-top">确定</button>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";

export default {
    name: "addHarvestAddress",
    components: {
        boxTitle
    },
    data() {
        return {
            select:"请选择收货地址",
            status: 0,
            show: false,
            classes: "",
            dataTree: [
                {
                    text: "北京市",
                    value: "1-0",
                    children: [
                        {
                            text: "市辖区",
                            value: "1-2",
                            children:[
                                {
                                    text:"东城区",
                                    value:"1-2-1",
                                },
                                {
                                    text:"西城区",
                                    value:"1-2-2",
                                },
                                {
                                    text:"朝阳区",
                                    value:"1-2-3",
                                },
                                {
                                    text:"丰台区",
                                    value:"1-2-4",
                                },
                                {
                                    text:"石景山区",
                                    value:"1-2-5",
                                }
                            ]
                        }]
                },
                {
                    text: "河北省",
                    value: "2-0",
                    children: [
                        {
                            text: "石家庄",
                            value: "2-1"
                        },
                        {
                            text: "唐山市",
                            value: "2-2"
                        },
                        {
                            text: "秦皇岛市",
                            value: "2-3"
                        },
                        {
                            text: "保定市",
                            value: "2-4"
                        }]
                },
                {
                    text: "山西省",
                    value: "3-0",
                    children: [
                        {
                            text: "太原市",
                            value: "3-1"
                        },
                        {
                            text: "大同市",
                            value: "3-2"
                        },
                        {
                            text: "长治市",
                            value: "3-3"
                        }
                    ]
                },
                {
                    text: "贵州省",
                    value: "4-0",
                    children: [
                        {
                            text: "贵阳市",
                            value: "4-1",
                            children:[
                                {
                                    text:"南明区",
                                    value: "4-1-1"
                                },{
                                    text:"观山湖区",
                                    value: "4-1-2"
                                },{
                                    text:"云岩区",
                                    value: "4-1-3"
                                },{
                                    text:"白云区",
                                    value: "4-1-4"
                                },{
                                    text:"花溪区",
                                    value: "4-1-5"
                                },{
                                    text:"乌当区",
                                    value: "4-1-6"
                                }
                            ]
                        },
                        {
                            text: "六盘水市",
                            value: "4-2",
                            children: [
                                {
                                    text:"钟山区",
                                    value: "4-2-1"
                                },{
                                    text:"六枝特区",
                                    value: "4-2-2"
                                },{
                                    text:"水城区",
                                    value: "4-2-3"
                                },{
                                    text:"盘州区",
                                    value: "4-2-4"
                                }
                            ]
                        },
                        {
                            text: "遵义市",
                            value: "4-3",
                            children: [
                                {
                                    text:"红花岗区",
                                    value: "4-3-1"
                                },{
                                    text:"汇州区",
                                    value: "4-3-2"
                                },{
                                    text:"桐梓县",
                                    value: "4-3-3"
                                },{
                                    text:"绥阳县",
                                    value: "4-3-4"
                                }
                            ]
                        },
                        {
                            text: "安顺市",
                            value: "4-4",
                            children: [
                                {
                                    text:"西秀区",
                                    value: "4-4-1"
                                },{
                                    text:"平坝区",
                                    value: "4-4-2"
                                },{
                                    text:"普定县",
                                    value: "4-4-3"
                                },{
                                    text:"紫云",
                                    value: "4-4-4"
                                },{
                                    text:"镇宁",
                                    value: "4-4-5"
                                }
                            ]
                        }]
                },
                ]
        };
    },
    methods: {
        RadioChange() {
            this.show = !this.show;
            // this.style.color = "red";
        },
        onnodeclick(e) {
        },
        onpopupopened(e) {
            console.log("popupopened");
        },
        onpopupclosed(e) {
            console.log("popupclosed");
        },
        onchange(e) {
            this.select = "";
            console.log("onchange:",e.detail.value);
            for (let i=0;i<e.detail.value.length;i++){
                this.select = this.select + e.detail.value[i].text
            }
        },
        gotoPath(status) {
            uni.navigateTo({
                url: "/pages/index/applicationSample/orderDetailsIndex?status==0"
            });
        }

    }
};
</script>

<style scoped lang="css">
/deep/.uni-data-tree-dialog{
    top: 40%;
}
.radio {
    transform: scale(0.7);
}

/deep/ .uni-radio-input-checked {
    background-color: red !important;
    border-color: red !important;
}

/deep/ .uni-radio-input-checked::before {
    display: none !important;
}
</style>