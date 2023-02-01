<template>
    <view>
        <u-navbar
            title="基本信息"
            :autoBack="true"
        ></u-navbar>
        <view :style="`margin-top:${CustomBar + 10}px`">
            <attestationProgress :progress="0"></attestationProgress>
            <view class="margin radius padding bg-white text-shadow border ">
                <view class="flex justify-start align-center">
                    <view class="cuIcon-form" style="font-size: 24px;color: red"></view>
                    <view class="text-lg padding-left-sm text-bold">
                        填写信息
                    </view>
                </view>
                <view>
                    <view v-for="(item,index) in form" :key=item.title class="cu-form-group" style="padding-right: 0;">
                        <view class="title">
                            <text style="color: red">*</text>
                            {{ item.title }}
                        </view>
                        <input v-model="item.value" :placeholder="item.placeholder" name="input" />
                        <view v-if="item.icon" :class=item.icon class="text-orange"
                              style="font-size: 20px;padding: 10px 20px;"
                              @click="getLocation"></view>
                    </view>
                    <button class="cu-btn bg-red margin-tb-sm round" style="width: 100%" @click="clickNext">下一步</button>
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
                { title: "联系人", type: "", placeholder: "请输入您的姓名", value: "" },
                { title: "经营地点", type: "", placeholder: "请选择经营地点", value: "", icon: "cuIcon-locationfill" },
                { title: "联系电话", type: "", placeholder: "请输入您的电话号码", value: "" },
                { title: "邀请码", type: "", placeholder: "请输入您的推荐邀请码", value: "" }
            ]
        };
    },
    methods: {
        async getLocation() {
            const res = await new Promise((resolve, reject) => {
                uni.getLocation({
                    type: "gcj02",
                    geocode: true,
                    success(res) {
                        resolve(res);
                    },
                    fail(err) {
                        reject(err);
                    }
                });
            }).catch();
            console.log(res);
            const { province, city, district, street, streetNum, poiName } = res.address;
            const address = province + city + district + street + streetNum + poiName;
            this.form[1].value = address;
        },
        back() {
            uni.navigateBack({
                delta: 1
            });
        },
        clickNext() {
            uni.navigateTo({
                url: "/pages/appCenter/attestation/licenseInfo"
            });
        }
    }
};
</script>

<style scoped>

.cu-form-group .title {
    min-width: calc(4em + 15px);
}
</style>
