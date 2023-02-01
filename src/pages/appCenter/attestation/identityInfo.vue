<template>
    <view>
        <u-navbar
            title="身份证认证"
            :autoBack="true"
        ></u-navbar>
        <view :style="`margin-top:${CustomBar + 10}px`">
            <attestationProgress :progress="2"></attestationProgress>
            <view class="margin radius padding bg-white text-shadow border">
                <view class="flex justify-start align-center">
                    <view class="cuIcon-form" style="font-size: 24px;color: red"></view>
                    <view class="text-lg padding-left-sm text-bold">
                        身份认证
                    </view>
                </view>
                <view class="text-sm margin-tb text-red">
                    温馨提醒：身份认证人需和营业执照法人一致
                </view>
                <view>
                    <view v-for="(item,index) in form" :key=item.title class="cu-form-group">
                        <view class="title">
                            <text style="color: red">*</text>
                            {{ item.title }}
                        </view>
                        <input v-model="item.value" :placeholder="item.placeholder" name="input"></input>
                        <text v-if="item.icon" :class=item.icon class="text-orange"></text>
                    </view>
                    <view class="cu-bar bg-white margin-top">
                        <view class="action">
                            <text style="color: red">*</text>
                            身份证正反面图片
                        </view>
                        <view class="action">
                            {{ imgList.length }}/2
                        </view>
                    </view>
                    <view class="cu-form-group">
                        <view class="grid col-2 grid-square flex-sub  ">
                            <!--国徽-->
                            <view v-if="imgGH==''" class="solids " @tap="goto('badge')">
                                <text class="cuIcon-cameraadd"></text>
                            </view>
                            <view v-else :data-url="imgGH" class="bg-img " @tap="ViewImage">
                                <image :src="imgGH" mode="aspectFill"></image>
                                <view :data-index="imgGH" class="cu-tag bg-red" @tap.stop="DelImg('imgGH')">
                                    <text class="cuIcon-close"></text>
                                </view>
                            </view>
                            <!--人像-->
                            <view v-if="imgRX == ''" class="solids" @tap="goto('face')">
                                <text class="cuIcon-cameraadd"></text>
                            </view>
                            <view v-else :data-url="imgRX" class="bg-img" @tap="ViewImage">
                                <image :src="imgRX" mode="aspectFill"></image>
                                <view :data-index="imgGH" class="cu-tag bg-red" @tap.stop="DelImg('imgRX')">
                                    <text class="cuIcon-close"></text>
                                </view>
                            </view>
                        </view>
                        <!--              &lt;!&ndash;国徽&ndash;&gt;-->
                        <!--                  <view v-if="imgGH==''" class="solids " @tap="ChooseImage('imgGH')">-->
                        <!--                    <text class='cuIcon-cameraadd'></text>-->
                        <!--                  </view>-->
                        <!--                  <view v-else :data-url="imgGH" class="bg-img " @tap="ViewImage">-->
                        <!--                    <image :src="imgGH" mode="aspectFill"></image>-->
                        <!--                    <view :data-index="imgGH" class="cu-tag bg-red" @tap.stop="DelImg('imgGH')">-->
                        <!--                      <text class='cuIcon-close'></text>-->
                        <!--                    </view>-->
                        <!--                  </view>-->
                        <!--              &lt;!&ndash;人像&ndash;&gt;-->
                        <!--              <view v-if="imgRX == ''" class="solids" @tap="ChooseImage('imgRX')">-->
                        <!--                <text class='cuIcon-cameraadd'></text>-->
                        <!--              </view>-->
                        <!--              <view v-else :data-url="imgRX" class="bg-img" @tap="ViewImage">-->
                        <!--                <image :src="imgRX" mode="aspectFill"></image>-->
                        <!--                <view :data-index="imgGH" class="cu-tag bg-red" @tap.stop="DelImg('imgRX')">-->
                        <!--                  <text class='cuIcon-close'></text>-->
                        <!--                </view>-->
                        <!--              </view>-->
                        <!--            </view>-->
                    </view>
                    <view class="grid col-2 text-center">
                        <view>请拍摄国徽面</view>
                        <view>请拍摄人像面</view>
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
                { title: "姓名", type: "", placeholder: "请输入姓名", value: "" },
                { title: "身份证", type: "", placeholder: "请输入18位身份证号", value: "" }
            ],
            imgList: [],
            imgGH: "",
            imgRX: ""
        };
    },
    methods: {
        clickNext() {
            uni.navigateTo({
                url: "/pages/appCenter/attestation/faceinfo"
            });
        },
        back() {
            uni.navigateBack({
                delta: 1
            });
        },
        goto(type){
            uni.navigateTo({url: "/pages/camera/idcard"})
        },
        ChooseImage(val) {
            uni.chooseImage({
                count: 4, //默认9
                sizeType: ["original", "compressed"], //可以指定是原图还是压缩图，默认二者都有
                sourceType: ["album"], //从相册选择
                success: (res) => {
                    if (val == "imgGH") {
                        this.imgGH = res.tempFilePaths[0];
                    }
                    if (val == "imgRX") {
                        this.imgRX = res.tempFilePaths[0];
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
        DelImg(e) {
            uni.showModal({
                title: "召唤师",
                content: "确定要删除这张图片吗？",
                cancelText: "取消",
                confirmText: "确认",
                success: res => {
                    if (res.confirm) {
                        this[e] = "";
                    }
                }
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
