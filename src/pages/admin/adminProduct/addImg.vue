<template>
    <view>
        <u-navbar :autoBack="true" title="商品主图"></u-navbar>
        <view :style="`margin-top:${(CustomBar+10)*2}rpx`" class="padding-lr-sm">
            <view class="whiteBoxShadow">
                <boxTitle title="商品主图"></boxTitle>
                <view class="margin-tb-sm ">商品主图上传规则/示例展示</view>
                <view class="text-warning text-bold text-xs">主图示例图展示：</view>
                <view class="flex align-center justify-between padding-tb-sm">
                    <view class="text-center" v-for="(item,index) in 5" :key="index">
                        <fxbImage height="120" :src="showPicList[index]" width="120"></fxbImage>
                        <view>主图{{ trans2CN(index) }}</view>
                    </view>
                </view>
                <view class="bg-red-light">
                    <view class="padding text-red text-xs">
                        主图尽量上传清晰，图片比例1：1，最低800*800px
                        <view class="flex justify-between margin-top-sm">
                            <veiw style="line-height: 20px">
                                主图一：商品正图对面 <br>
                                主图三：商品细节图展示 <br>
                                主图五：商品包装图展示
                            </veiw>
                            <view style="line-height: 20px">
                                主图二：商品侧面图 <br>
                                主图四：商品卖点展示
                            </view>
                        </view>
                    </view>
                </view>
                <attestationProgress :progress="stepIndex" :basicsList="baseInfo"></attestationProgress>
                <view v-show="stepIndex===0">
                    <inputCell
                        label="商品主图一"
                        :maxImg="1"
                        type="upload"
                        picType="0"
                        index="0"
                        :fileDataList="imgList[0].url?[imgList[0]]:[]"
                        @uploadImg="uploadImg">
                    </inputCell>
                </view>
                <view v-show="stepIndex===1">
                    <inputCell
                        label="商品主图二"
                        :maxImg="1"
                        type="upload"
                        picType="0"
                        index="1"
                        :fileDataList="imgList[1].url?[imgList[1]]:[]"
                        @uploadImg="uploadImg">
                    </inputCell>
                </view>
                <view v-show="stepIndex===2">
                    <inputCell
                        label="商品主图三"
                        :maxImg="1"
                        type="upload"
                        picType="0"
                        index="2"
                        :fileDataList="imgList[2].url?[imgList[2]]:[]"
                        @uploadImg="uploadImg">
                    </inputCell>
                </view>
                <view v-show="stepIndex===3">
                    <inputCell
                        label="商品主图四"
                        :maxImg="1"
                        type="upload"
                        picType="0"
                        index="3"
                        :fileDataList="imgList[3].url?[imgList[3]]:[]"
                        @uploadImg="uploadImg">
                    </inputCell>
                </view>
                <view v-show="stepIndex===4">
                    <inputCell
                        label="商品主图五"
                        :maxImg="1"
                        type="upload"
                        picType="0"
                        index="4"
                        :fileDataList="imgList[4].url?[imgList[4]]:[]"
                        @uploadImg="uploadImg">
                    </inputCell>
                </view>

                <view class="flex justify-between w100">
                    <button @click="stepIndex--" v-show="stepIndex>0" class="cu-btn bg-red radius w100 margin-right-sm">
                        上一步
                    </button>
                    <button @click="nextClick" v-show="stepIndex<5" class="cu-btn bg-red radius w100">
                        {{ stepIndex >= 4 ? "确定" : "下一步" }}
                    </button>
                </view>
                <!--                <view v-if="false" class="bg-white margin-tb-sm flex">-->
                <!--                    <button class="cu-btn bg-gray radius flex-sub margin-right-sm" @click="sureBack">取消</button>-->
                <!--                    <button class="cu-btn bg-red radius flex-sub margin-right-sm" @click="sureBack">确认</button>-->
                <!--                </view>-->
            </view>
        </view>
    </view>
</template>

<script>
import inputCell from "/src/components/common/form/inputCell";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbImage from "/src/components/fxb/fxb-image";
import attestationProgress from "/src/pages/appCenter/attestation/attestationProgress";
import { mapMutations, mapState } from "vuex";

export default {
    components: {
        boxTitle, inputCell, fxbImage, attestationProgress
    },
    data() {
        return {
            showPicList: [
                this.$config.IMG_SERVER + "/productDetails/Slice%201.png",
                this.$config.IMG_SERVER + "/productDetails/Slice%202.png",
                this.$config.IMG_SERVER + "/productDetails/Slice%203.png",
                this.$config.IMG_SERVER + "/productDetails/Slice%204.png",
                this.$config.IMG_SERVER + "/productDetails/Slice%205.png"
            ],
            imgList: [],
            stepIndex: 0,
            baseInfo: [
                {
                    cuIcon: "",
                    name: "主图一"
                },
                {
                    cuIcon: "",
                    name: "主图二"
                },
                {
                    cuIcon: "",
                    name: "主图三"
                },
                {
                    cuIcon: "",
                    name: "主图四"
                },
                {
                    cuIcon: "",
                    name: "主图五"
                }
            ]
        };
    },
    computed: {
        ...mapState("product", ["mainPhotoList"])
    },
    onShow() {
        this.imgList = this.$store.state.product.mainPhotoList;
    },
    methods: {
        ...mapMutations("product", ["setMainPhotoList"]),
        trans2CN(index) {
            const list = ["一", "二", "三", "四", "五"];
            return list[index];
        },
        nextClick() {
            // if (this.imgList[this.stepIndex].url === null) {
            //     uni.showToast({
            //         title:`请先上传第${this.stepIndex+1}张主图`,
            //         icon:"none"
            //     })
            //     return;
            // }
            this.stepIndex++;
            if (this.stepIndex > 4) {
                this.setMainPhotoList(this.imgList);
                uni.navigateBack({ delta: 1 });
            }
        },
        uploadImg(event) {
            const { index, data } = event;
            this.imgList[index].url = data[0];
        },
        sureBack() {

        }
    }
};
</script>

<style lang="scss" scoped>
/deep/ .u-upload__wrap {
    display: flex;
    justify-content: center;

    .u-upload__button, .u-upload__wrap__preview__image {
        width: 200rpx !important;
        height: 200rpx !important;
    }
}
</style>
