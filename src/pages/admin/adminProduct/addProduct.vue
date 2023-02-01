<template>
    <view class="content">
        <u-navbar :autoBack="true" title="添加商品"></u-navbar>

        <template v-if="false">
            <view :style="`margin-top:${CustomBar}px`" class="padding-sm" style="padding-bottom: 120rpx">
                <view class="whiteBoxShadow">
                    <boxTitle title="基本信息"></boxTitle>
                    <view @click="addImg">
                        <inputCell border="none" icon="cuIcon-right" label="商品主图"
                                   @uploadImg="submitData.productImg = $event"></inputCell>

                        <view class="flex align-center padding-tb-sm w100">
                            <view v-for="(item,index) in submitData.image" :key="item+index">
                                <fxbImage class="margin-lr-xs" v-if="item.url" mode="aspectFill" :key="item.url+index"
                                          :src="item.url" height="120" width="120"></fxbImage>
                            </view>
                        </view>
                    </view>
                    <inputCell :inputValue.sync="submitData.goodsName" label="商品名称" placeholder="请输入商品名称" type="input">
                    </inputCell>
                    <inputCell :text="submitData.categoryId||'请选择'" icon="cuIcon-right" label="商品分类"
                               @iconEvent="selectPickerFun('categoryId')"></inputCell>
                    <inputCell :disabled="true" label="商品参数" placeholder="未完善" text-button-style="bg-blue"
                               textButton="去完善" type="input" @textBtnEvent="goParameter"></inputCell>
                    <inputCell :inputValue.sync="submitData.goodsRetailPrice" input-end end-text="元" label="零售价"
                               type="input"></inputCell>
                    <inputCell :areaValue.sync="submitData.goodsImgDetailsDto.text" :maxImg="9" area label="商品详情（图文描述）"
                               type="upload" @uploadImg="handleDetailPic"></inputCell>
                    <inputCell label="视频" accept="video" border="none" type="upload"
                               @uploadImg="submitData.productVideo = $event"></inputCell>
                </view>
            </view>
            <u-picker :columns="pickerArr" :show="pickerShow" keyName="label" @cancel="closePicker" @close="closePicker"
                      @confirm="selectPicker"></u-picker>
            <view class="fixed bg-white padding-sm w100" style="position:fixed;bottom: 0;">
                <button class="cu-btn bg-red radius" style="width: 100%" @click="submit">提交审核</button>
            </view>
        </template>
        <view :style="`margin-top:${CustomBar}px;padding-bottom:100rpx`" class="padding-sm">
            <view class="whiteBoxShadow margin-bottom-sm">
                <boxTitle title="商品条码"></boxTitle>
                <view class="flex justify-between">
                    <view>
                        <text class="text-red">*</text>
                        商品条码
                        <text class="text-gray margin-left-sm">可扫描商品条码进行快速填写</text>
                    </view>
                    <view @click="scan">
                        <text class="text-orange cuIcon-scan" style="font-size: 36rpx"></text>
                    </view>
                </view>
                <w-barcode v-if="options" ref="barcode" :options="options"></w-barcode>
            </view>
            <view class="whiteBoxShadow">
                <boxTitle title="基本信息"></boxTitle>
                <fxbForm ref="fxbForm" :key="JSON.stringify(formData.imgList)" :model="formData" :rules="rules" :formDesc="formDesc"></fxbForm>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="价格设置"></boxTitle>
                <fxbForm :key="JSON.stringify(formData.imgList)" :model="formData" :formDesc="formDescTwo"></fxbForm>
            </view>
            <view class="fixed bg-white padding-xs w100 margin-top">
                <button @click="submit" class="cu-btn bg-red radius w100">提交审核</button>
            </view>
        </view>
    </view>
</template>

<script>
import fxbForm from "/src/components/fxb/fxb-form";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import inputCell from "/src/components/common/form/inputCell";
import http from "/src/api/index";
import fxbImage from "/src/components/fxb/fxb-image";
import {
    mapMutations,
    mapState
} from "vuex";

export default {
    name: "addProduct",
    components: {
        boxTitle,
        inputCell,
        fxbImage,
        fxbForm
    },
    data() {
        return {
            options: null,
            pickerType: "",
            pickerShow: false,
            categoryId: this.$config.COMMODITY_CATEGORY,
            pickerArr: [],
            formDescTwo:[
                {
                    keyName: "goodsName",
                    type: "input",
                    required: true,
                    label: "建议零售价",
                    borderBottom: true,
                    placeholder: "请输入建议零售价",
                },
                {
                    keyName: "goodsName",
                    type: "input",
                    required: true,
                    label: "代理价",
                    borderBottom: true,
                    placeholder: "请输入代理价",
                },
                {
                    keyName: "goodsName",
                    type: "input",
                    label: "商超指导价",
                    borderBottom: true,
                    placeholder: "请输入商超指导价",
                },
                {
                    keyName: "goodsName",
                    type: "input",
                    label: "企业团购价",
                    placeholder: "请输入企业团购价",
                },
            ],
            rules: {
                "imgList": {
                    type: "array",
                    // 自定义验证函数，见上说明
                    validator: (rule, value, callback) => {
                        // 上面有说，返回true表示校验通过，返回false表示不通过
                        // uni.$u.test.mobile()就是返回true或者false的
                        let isValidator = false;
                        this.formData.imgList.forEach(item => {
                            if (item.url) {
                                isValidator = true;
                            }
                        });
                        return isValidator;
                    },
                    message: "请上传商品主图",
                    trigger: ["blur", "change"]
                },
                "goodsName": {
                    type: "string",
                    required: true,
                    message: "请填写商品名称",
                    trigger: ["blur", "change"]
                },
                "categoryId": {
                    type: "string",
                    required: true,
                    message: "请选择商品分类",
                    trigger: ["blur", "change"]
                },
                "goodsInfo": {
                    type: "object",
                    // 自定义验证函数，见上说明
                    validator: (rule, value, callback) => {
                        return this.$store.state.product.isSubmit;
                    },
                    message: "请完善商品信息",
                    trigger: ["blur", "change"]
                },
                "goodsRetailPrice": {
                    type: "string",
                    required: true,
                    message: "请填写零售价",
                    trigger: ["blur", "change"]
                },
                "goodsDetailsImg": {
                    type: "array",
                    required: true,
                    message: "请上传商品详情图",
                    min: 1,
                    trigger: ["blur", "change"]
                },
                "goodsDetails": {
                    type: "string",
                    required: true,
                    message: "请输入商品描述",
                    trigger: ["blur", "change"]
                }
            },
            formDesc: [
                {
                    keyName: "video",
                    type: "video",
                    label: "商品视频上传规则/示例展示",
                    tips:"视频上传时长为30s内，尽量上传1比例1:1视频",
                    labelWidth:"200",
                    borderBottom: true,
                },
                {
                    keyName: "imgList",
                    type: "exhibition",
                    required: true,
                    label: "商品主图",
                    imageList: [],
                },
                {
                    keyName: "goodsName",
                    type: "input",
                    required: true,
                    label: "商品名称",
                    borderBottom: true,
                    placeholder: "请输入商品名称",
                },
                {
                    keyName: "categoryId",
                    type: "classify",
                    required: true,
                    label: "商品分类",
                    borderBottom: true,
                    placeholder: "请选择",
                    column: this.$config.COMMODITY_CATEGORY
                },
                {
                    keyName: "goodsInfo",
                    type: "button",
                    buttonText:"去完善",
                    placeholder: "未完善",
                    required: true,
                    label: "商品参数",
                    borderBottom: true,
                    path: "/pages/admin/adminProduct/productParameter?goodsType=1"
                },
                {
                    keyName: "goodsRetailPrice",
                    type: "input",
                    required: true,
                    label: "零售价",
                    unit: "元",
                    borderBottom: true,
                    placeholder: "请输入商品零售价",
                },
                {
                    keyName: "goodsDetails",
                    type: "textarea",
                    required: true,
                    label: "商品详情图",
                    placeholder: "请输入商品描述",
                },
                {
                    keyName: "goodsDetailsImg",
                    type: "image",
                    required: false,
                    maxCount:9,
                }
            ],
            formData: {
                // productImg: "",//商品主图
                goodsName: "", //商品名称
                categoryId: "", //商品分类
                goodsRetailPrice: "", //零售价
                goodsDetailsImg: [],
                goodsInfo: {},
                imgList: [], //商品主图
                goodsDetails: "",
                video: [], //视频
            },
            submitData: {
                goodsName: "", //商品名称
                categoryId: "", //商品分类
                goodsRetailPrice: "", //零售价
                image: [],
                goodsImgDetailsDto: {
                    imgs: [],
                    text: ""
                },
                video: []
            },
            fileList1: [],
            fromDataIndex: 0,
            showSex: false,
            radio: "",
            switchVal: false,
            goodsInfo: {}
            // testForm: {
            //     "goodsName": "茅台",
            //     "categoryId": "白酒",
            //     "goodsRetailPrice": "131",
            //     "image": [
            //         "http://124.220.219.72:8085/img/67d33343a9fe4553bffe442338b83edc-13.png",
            //         "http://124.220.219.72:8085/img/f340a5be4db741afaad595658878e5b0-15.png",
            //         "http://124.220.219.72:8085/img/e1f5604d0de34d5098633e10f46c47a8-19.png",
            //         "http://124.220.219.72:8085/img/1a1795e5223d416f98852e45b5f9e23a-23.png",
            //         "http://124.220.219.72:8085/img/8a7c9d1d92194beb89dcd01453610480-35.png"
            //     ],
            //     "goodsImgDetailsDto": {
            //         "imgs": [
            //             "http://192.168.2.179:8080/img/f1ef5989dd624f209ebe40a487bb6020-26.png"
            //         ],
            //         "text": "324342"
            //     },
            //     "video": [],
            //     "goodsInfo": {
            //         "controBrandId": "茅台酒",
            //         "commodityAuthorization": "['http://124.220.219.72:8085/img/5081323baab446d6a977313eaaae3331-50.png']",
            //         "controAromaticType": "酱香型",
            //         "controAlcohol": "39%Vol.",
            //         "controNetContent": "375ml",
            //         "controSpecifications": "12瓶/箱",
            //         "controMaterialQuality": "玻璃瓶",
            //         "controManufactor": "贵州茅台酒厂",
            //         "controPlaceOfOrigin": "贵州仁怀",
            //         "controRawMaterial": "高粱,小麦",
            //         "controExecutiveStandards": "GB-2012",
            //         "controArticleNo": "1234567",
            //         "controQualityGuaranteePeriod": "见瓶身/见标签喷码",
            //         "controStorageMode": "密闭，放置于阴凉处、干燥处、避免阳 光直射",
            //         "controDateOfManufacture": "见瓶身/见标签喷码",
            //         "controApplicableScenarios": "纪念日",
            //         "controPackagingForm": "礼盒装",
            //         "controProductionLicenseNo": "生产许可证编号",
            //         "controProductStandardNo": "产品标准号",
            //         "controFoodAdditives": "食品添加剂",
            //         "controOrganicFood": "有机食品",
            //         "controMixedIngredients": "配料"
            //     }
            // },
        };
    },
    computed: {
        ...mapState("product", ["mainPhotoList", "commodityParameters"])
    },
    onLoad(options) {
        this.init(options);
    },
    onShow() {
        this.submitData.image = this.mainPhotoList.length ? this.mainPhotoList : [];
        this.formData.imgList = this.mainPhotoList.length ? this.mainPhotoList : [];
        this.submitData.goodsInfo = this.commodityParameters;
        this.formData.goodsInfo = this.commodityParameters;
        this.$forceUpdate();
    },
    destroyed() {
        this.setMainPhotoList([{url:null},{url:null},{url:null},{url:null},{url:null}]);
    },
    methods: {
        ...mapMutations("product", [
            "setMainPhotoList",
            "addProductSetBrand",
            "setCommodityParameters",
            "setFoodSafety"
        ]),
        async init(event) {
            if (!event.id) return;
            let res = await this.$http.getGoodDetails(event.id);
            let imgList = [];
            for (let i = 0; i < res.data.image.length; i++) {
                imgList.push({ url: res.data.image[i] });
            }
            this.submitData = res.data;
            this.submitData.image = imgList;
            this.formData = res.data;
            this.formData.image = imgList;
            this.formData.video = {url:this.formData.video};
            this.setMainPhotoList(this.formData.image);
            this.setCommodityParameters(this.submitData.goodsInfo);
        },
        async scan() {
            let res = await this.$util.scanCode("barCode");
            this.options = {
                width: 660, // 宽度 单位rpx
                height: 120, // 高度 单位rpx
                code: res.result,// 生成条形码的值
                color:['#000'],
                text: {
                    content: res.result,
                    color:['#000'],
                    position: 'bottom' ,//bottom
                    size: 40,
                    padding: 5
                }
            }
        },
        handleDetailPic(e) {
            this.submitData.goodsImgDetailsDto.imgs = [...this.submitData.goodsImgDetailsDto.imgs, ...e.data];
        },
        getParams(form) {
            this.formData = {
                ...this.formData,
                ...form
            };
            console.log(this.formData);
        },
        closePicker() {
            this.pickerShow = false;
        },
        selectPicker(e) {
            this.$set(this.submitData, this.pickerType, e.value[0].label);
            this.$set(this.formData, this.pickerType, e.value[0].id);
            this.pickerShow = false;
            this.pickerArr = [];
        },
        selectPickerFun(name) {
            this.pickerArr = this[name];
            this.pickerType = name;
            this.pickerShow = true;
        },
        getData(e) {
            console.log("formData", e);
        },
        resetVuex() {
            // this.submitData = {};
            this.setMainPhotoList("");
            this.addProductSetBrand("");
            this.setCommodityParameters("");
            this.setFoodSafety("");
        },
        async submit() {
            let isSubmit = await this.$refs.fxbForm.submit();
            // let isImage = true;
            // this.submitData.goodsInfo = this.commodityParameters;
            // this.submitData.image.forEach(item => {
            //     if (item.url) {
            //         isImage = false;
            //     }
            // });
            // if (isImage) {
            //     uni.showToast({
            //         title: "请上传商品主图",
            //         icon: "none"
            //     });
            //     return;
            // }
            if (isSubmit) {
                this.submitData.goodsImgDetailsDto.imgs = [this.formData.goodsDetailsImg[0].url];
                this.submitData.goodsImgDetailsDto.text = this.formData.goodsDetails;
                this.submitData.categoryId = this.formData.categoryId;
                this.submitData.goodsName = this.formData.goodsName;
                this.submitData.goodsRetailPrice = this.formData.goodsRetailPrice;
                this.submitData.video = this.formData.video.length?[this.formData.video[0].url]:[];
                this.submitData.goodsInfo.commodityAuthorization = [this.submitData.goodsInfo.commodityAuthorization[0].url];
                this.submitData.goodsInfo.controSpecifications = this.submitData.goodsInfo.controSpecifications.count+this.submitData.goodsInfo.controSpecifications.unit;

                for (let i = 0; i < this.submitData.image.length; i++) {
                    this.submitData.image[i] = this.submitData.image[i].url;
                }
                for (let i = 0; i < this.formData.goodsDetailsImg.length; i++) {
                    this.submitData.goodsImgDetailsDto.imgs[i] = this.formData.goodsDetailsImg[i].url;
                }
                console.log(this.submitData);
                await http.addGoods(this.submitData);
                this.resetVuex();
                setTimeout(() => {
                    uni.navigateBack({
                        delta: 1
                    });
                }, 800);
            }

        },

        listChange(option) {

        },
        goParameter() {
            if (this.submitData.categoryId === "") {
                uni.showToast({
                    title: "请先选择商品分类",
                    icon: "none"
                });
                return;
            }
            uni.navigateTo({
                // 暂时固定跳白酒
                // url: `/pages/admin/adminProduct/productParameter?goodsType=${this.formData.categoryId}`
                url: `/pages/admin/adminProduct/productParameter?goodsType=1`
            });
        },

        addImg() {
            uni.navigateTo({
                url: "/pages/admin/adminProduct/addImg"
            });
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
