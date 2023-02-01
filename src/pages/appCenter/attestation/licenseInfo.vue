<template>
    <view>
        <u-navbar
            title="营业执照认证"
            :autoBack="true"
        >
        </u-navbar>
        <view :style="`margin-top:${CustomBar + 10}px`">
            <attestationProgress :progress="1"></attestationProgress>
            <view class="margin radius padding bg-white text-shadow border ">
                <view class="flex justify-start align-center">
                    <view class="cuIcon-form" style="font-size: 24px;color: red"></view>
                    <view class="text-lg padding-left-sm text-bold">
                        营业执照信息
                    </view>
                </view>
                <view>
                    <!--        图片上传-->
                    <view class="cu-bar bg-white margin-top">
                        <view class="action">
                            <text style="color: red">*</text>
                            营业执照上传
                        </view>
                        <view class="action">
                            {{ imgList.length }}/1
                        </view>
                    </view>
                    <view class="cu-form-group">
                        <view class="grid col-4 grid-square flex-sub">
                            <view v-for="(item,index) in imgList" :key="index" :data-url="imgList[index]" class="bg-img"
                                  @tap="ViewImage">
                                <image :src="imgList[index]" mode="aspectFill"></image>
                                <view :data-index="index" class="cu-tag bg-red" @tap.stop="DelImg">
                                    <text class="cuIcon-close"></text>
                                </view>
                            </view>
                            <view v-if="imgList.length<1" class="solids" @tap="ChooseImage">
                                <text class="cuIcon-cameraadd"></text>
                            </view>
                        </view>
                    </view>
                    <!--        表单列表-->
                    <view v-for="(item,index) in form" :key=item.title class="cu-form-group">
                        <view class="title">
                            <text style="color: red">*</text>
                            {{ item.title }}
                        </view>
                        <picker v-if="item.icon" :ref="item.title" :value="item.value" mode="date"
                                @change="DateChange($event,index)">
                            <view>
                                {{ item.value }}
                            </view>
                        </picker>
                        <text v-if="item.icon" :class=item.icon class="text-orange"
                              @click="clickHandle(item.title)"></text>
                        <input v-else v-model="item.value" :placeholder="item.placeholder"
                               class="overPlaceholder"
                               name="input"
                               placeholder-style="overflow: hidden; text-overflow: ellipsis;white-space: nowrap;" />

                    </view>
                    <view class="flex justify-around">
                        <button class="cu-btn bg-red margin-tb-sm round" @click="back">上一步</button>
                        <button class="cu-btn bg-red margin-tb-sm round" @click="clickNext">下一步</button>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import attestationProgress from "./attestationProgress.vue";

export default {
    name: "basicInfo",
    components: {
        attestationProgress
    },
    data: function() {
        return {
            form: [
                { title: "统一社会信用代码", type: "", placeholder: "请输入18位统一社会信用代码", value: "" },
                { title: "公司名称", type: "", placeholder: "请输入公司名称", value: "" },
                { title: "注册资本", type: "", placeholder: "请输入公司注册资本", value: "" },
                { title: "类型", type: "", placeholder: "请输入公司类型", value: "" },
                { title: "成立日期", type: "", placeholder: "请输入公司成立日期", value: "", icon: "cuIcon-time" },
                { title: "法定代表人", type: "", placeholder: "请输入法定代表人", value: "" },
                { title: "营业期限", type: "", placeholder: "请选择营业期限", value: "", icon: "cuIcon-time" },
                { title: "经营范围", type: "", placeholder: "请输入经营范围", value: "" },
                { title: "经营住所", type: "", placeholder: "请输入经营住所", value: "" },
                { title: "发证日期", type: "", placeholder: "请输选择发证日期", value: "", icon: "cuIcon-time" },
                { title: "登记机关", type: "", placeholder: "请输入登记机关", value: "" }
            ],
            imgList: []
        };
    },
    methods: {
        clickHandle(title) {
            this.$refs[title][0].$el.click();
        },
        clickNext() {
            uni.navigateTo({
                url: "pages/appCenter/attestation/identityInfo"
            });
        },
        back() {
            uni.navigateBack({
                delta: 1
            });
        },
        DelImg(e) {
            uni.showModal({
                title: "",
                content: "确定要删除这张图片么？",
                cancelText: "取消",
                confirmText: "删除",
                success: res => {
                    if (res.confirm) {
                        this.imgList.splice(e.currentTarget.dataset.index, 1);
                    }
                }
            });
        },
        ViewImage(e) {
            uni.previewImage({
                urls: this.imgList,
                current: e.currentTarget.dataset.url
            });
        },
        ChooseImage() {
            uni.chooseImage({
                count: 1, //默认9
                sizeType: ["compressed"], //可以指定是原图还是压缩图，默认二者都有
                sourceType: ["camera "], //从相册选择
                success: (res) => {
                    if (this.imgList.length != 0) {
                        this.imgList = this.imgList.concat(res.tempFilePaths);
                    } else {
                        this.imgList = res.tempFilePaths;
                    }
                }
            });
        },
        DateChange(e, index) {
            this.form[index].value = e.detail.value;
            // this.$set(this.form[index],value,e.detail.value)
        }
    }
};
</script>

<style scoped>


.cu-form-group .title {
    min-width: calc(4em + 15px);
}

/*.overPlaceholder::placeholder{*/
/*  background: yellow;*/
/*  color: #1cbbb4;*/
/*}*/

</style>
