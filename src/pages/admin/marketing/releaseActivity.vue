<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="发布品鉴会活动" :autoBack="true"></u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ CustomBar + 'px;padding-bottom:100rpx'">
            <view class="whiteBoxShadow">
                <boxTitle title="选择品鉴会"></boxTitle>
                <fxbForm :form-desc="formDesc" :model="formData" :rules="rules"></fxbForm>
                <view class="padding-sm bg-red light radius">
                    <view class="flex justify-between align-center">
                        <text class="text-gray">品鉴会名称</text>
                        <text class="text-black">2022观山湖区白酒品鉴会</text>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">品鉴会编号</text>
                        <text class="text-black">1346546545456465</text>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="平台首页推广"></boxTitle>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="flex align-center">
                        <text class="text-red">*</text>
                        <view>单价时长</view>
                    </view>
                    <view class="flex">
                        <text class="text-red">￥200.00</text>
                        /日
                    </view>
                    <!--                <view class="cuIcon-right text-gray" style="font-size: 16px"></view>-->
                </view>
                <view class="u-border-bottom margin-tb"></view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="flex align-center">
                        <text class="text-red">*</text>
                        <view>选择推广时长</view>
                    </view>
                    <view class="flex align-center text-gray ">请选择时长
                        <view class="cuIcon-right margin-left-sm" style="font-size: 16px"></view>
                    </view>
                </view>
                <view class="u-border-bottom margin-tb"></view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="flex align-center">
                        <text class="text-red">*</text>
                        <view>选择开始时间</view>
                    </view>
                    <view class="flex align-center text-gray ">请选择时间
                        <view class="cuIcon-right margin-left-sm" style="font-size: 16px"></view>
                    </view>
                </view>
                <view class="u-border-bottom margin-tb"></view>
                <view class="flex justify-between margin-top-sm">
                    <text class="text-lg">费用合计</text>
                    <text class="text-red text-bold">￥210.00</text>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="其他平台推广"></boxTitle>
                <view>
                    请选择要推广的平台
                    <text class="text-sm text-yellow">(可多选)</text>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view :class="{colorChange:index==dynamic}" v-for="(item,index) in select" :key="index"
                          class="cu-btn radius" style="width: 30%" @click="getColor(index)">{{ item.title }}
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="优惠券">
                    <view slot="switch">
                        <u-switch activeColor="#E54D42" v-model="isAppraise" @change="switchChange"></u-switch>
                    </view>
                </boxTitle>
                <view v-if="show">
                    <view class="flex justify-between align-center margin-top-sm">
                        <view class="flex align-center">
                            <view class="flex">
                                <text class="text-red">*</text>
                                <view>优惠劵金额</view>
                            </view>
                            <input type="text" placeholder="请输入金额" style="font-size: 14px" class="margin-left-sm">
                        </view>
                        <view>元</view>
                    </view>
                    <view class="u-border-bottom margin-tb"></view>
                    <view class="flex align-center margin-top-sm">
                        <view class="flex">
                            <text class="text-red">*</text>
                            <view>优惠劵数量</view>
                        </view>
                        <input type="text" placeholder="请输入金额" style="font-size: 14px" class="margin-left-sm">
                    </view>
                    <view class="u-border-bottom margin-tb"></view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <view class="flex">
                            <text class="text-red">*</text>
                            <view>有效期限</view>
                        </view>
                        <view class="flex align-center ">2022-08-30 15:30前
                            <view class="cuIcon-right margin-left-sm" style="font-size: 16px"></view>
                        </view>
                    </view>
                    <view class="u-border-bottom margin-tb"></view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <view class="flex">
                            <text class="text-red">*</text>
                            <view>使用规则</view>
                        </view>
                        <view @click="addFlowPath" class="cuIcon-roundaddfill margin-left-sm text-red"
                              style="font-size:36rpx"></view>
                    </view>
                    <view class="flex flex-direction margin-top-sm">
                        <view v-for="(item,index) in flowPathList" :key="index+'a'">
                            <view class="flex justify-between align-center border padding-sm radius margin-top-sm">
                                <view class="flex">规则{{ bigNum[index] }}：
                                    <input class="margin-left-sm" type="text" placeholder="请输入规则"
                                           style="font-size: 14px">
                                </view>
                                <view @click="close(index)" style="font-size: 34rpx"
                                      class="cuIcon-roundclosefill text-gray light"></view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="fixed w100 padding-xs bg-white">
                <button @click="submit" class="cu-btn bg-red radius w100">提交申请</button>
            </view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbForm from "/src/components/fxb/fxb-form";

export default {
    name: "releaseActivity",
    components: {
        fxbForm,
        boxTitle
    },
    data() {
        return {
            dynamic: 0,
            select: [
                { title: "抖音" },
                { title: "微信" },
                { title: "快手" }
            ],
            show: false,
            flowPathList: [
                {
                    value: ""
                }
            ],
            bigNum: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
            isAppraise: false,
            rules: {
                "controBrandId": {
                    type: "string",
                    required: true,
                    min: 1,
                    message: "请选择品牌",
                    trigger: ["blur", "change"]
                }
            },
            formDesc: [
                {
                    keyName: "controBrandId",
                    type: "classify",
                    required: true,
                    label: "选择品鉴会",
                    path: "/pages/admin/tastingMeeting/selectTastingMeeting",
                    placeholder: "请选择品鉴会"
                }
            ],
            formData: {
                controBrandId: ""
            }
        };
    },
    methods: {
        getColor(index) {
            this.dynamic = index;
        },
        close(index) {
            this.flowPathList.splice(index, 1);
        },
        addFlowPath() {
            this.flowPathList.push({
                value: ""
            });
        },
        switchChange(e) {
            this.show = !this.show;
        },
        submit() {
            uni.redirectTo({
                url: "/pages/payResult/payResult?status=releaseActivity"
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.colorChange {
    color: white;
    background-color: rgba(229, 77, 66, 1);
}
</style>