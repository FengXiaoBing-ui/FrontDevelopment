<template>
    <view>
        <u-navbar :autoBack="true" title="发布"></u-navbar>
        <view :style="`margin-top:${CustomBar}px;`" class="bg-white padding-bottom-sm">
            <view class="margin-xs">
                <view class=" padding-sm u-border-bottom flex">
                    <u-upload :fileList="fileList" @afterRead="afterRead" @delete="deletePic" name="1" multiple
                              :maxCount="9"></u-upload>
                </view>
                <view class=" padding-sm u-border-bottom">
                    <view class="text-bold margin-top-sm">
                        添加标题
                    </view>
                    <input class="margin-top " type="text" placeholder="请输入描述内容..." v-model="title">
                </view>

                <view class="padding-sm">
                    <view class="flex align-center" style="transform: translateX(-10px)">
                        <text class="text-red text-xl">*</text>
                        添加商品
                    </view>
                    <u-radio-group
                        @change=""
                        iconPlacement="left"
                        placement="row"
                        v-model="radioModel"
                    >
                        <u-radio
                            activeColor="red"
                            v-for="(item, index) in radioList"
                            :key="index"
                            :label="item"
                            :name="item"
                            @change=""
                            class="margin-right-xl margin-tb"
                        >
                        </u-radio>
                    </u-radio-group>
                    <fxbForm v-show="radioModel=='自行添加商品'" ref="fxbForm" :form-desc="formDesc" :rules="rules"
                             :model="formData"></fxbForm>
                    <view v-show="radioModel=='平台商品'">
                        <view class="flex align-center justify-between" style="transform: translateX(-10px)">
                            <view class="flex align-center">
                                <text class="text-red text-xl">*</text>
                                <text>选择商品</text>
                            </view>
                            <view @click="pageTo('pages/admin/marketing/selectProduct')" class="flex align-center text-gray">
                                <text>请选择商品</text>
                                <text class="cuIcon-right"></text>
                            </view>
                        </view>
                        <twoGoodsInfoCard
                            :imgUrl="$config.IMG_SERVER+'/productDetails/Slice%201.png'"
                            goodsName="东方国宾53°瓶装酱香型 500ml"
                            goodsType="酱香型"
                            goodsVolume="53°"
                            goodsDegrees="500ml"
                            retailPrice="365.00"
                            namePrice="代理价:："
                            :iconDelete="true"
                        >
                            <view slot="discount" class="margin-top-sm">
                                <button class="cu-btn bg-white u-border radius sm">代理授权证书</button>
                            </view>
                        </twoGoodsInfoCard>

                    </view>
                </view>

                <view class=" padding-sm u-border-bottom">
                    <view class="text-bold margin-top-sm">
                        你在哪里
                    </view>
                    <view class="flex padding-top-sm align-center justify-between">
                        <view class="bg-grey light u-border radius padding-lr-xs">世纪城</view>
                        <view class="bg-grey light u-border radius padding-lr-xs">金阳大道</view>
                        <view class="bg-grey light u-border radius padding-lr-xs">金融MAXC</view>
                        <view class="bg-grey light u-border radius padding-lr-xs">世纪城</view>
                        <!-- <view class="cuIcon-right"> -->
                    </view>
                </view>
            </view>
            <view class=" padding-sm">
                <view class="text-bold margin-top-sm">
                    同步多平台发布
                </view>
                <view class="flex padding-top-sm align-center justify-between">
                    <u-checkbox-group v-model="checkboxValue" placement="row" @change="checkboxChange">
                        <u-checkbox :customStyle="{marginRight: '8px'}" v-for="(item, index) in checkboxList"
                                    :key="index" :label="item.name" :name="item.name">
                        </u-checkbox>
                    </u-checkbox-group>
                </view>
            </view>
            <view class=" margin-tb margin-lr-xs">
                <button style="width: 100%;" class="cu-btn bg-red" @click="submit">发布
                </button>
            </view>
        </view>
    </view>
</template>

<script>
import twoGoodsInfoCard from "/src/components/erp/twoGoodsInfoCard";
import fxbForm from "/src/components/fxb/fxb-form";

export default {
    name: "editionIndex",
    components: {
        fxbForm,
        twoGoodsInfoCard
    },
    data() {
        return {
            radioModel: "平台商品",
            radioList: [
                "平台商品", "自行添加商品"
            ],
            title: "",
            goods: "",
            address: "",
            rules: {
                "goodsName": {
                    type: "string",
                    required: true,
                    message: "请输入商品名称",
                    trigger: ["blur", "change"]
                },
                "factory": {
                    type: "string",
                    required: true,
                    message: "请输入厂家",
                    trigger: ["blur", "change"]
                },
                "standard": {
                    type: "string",
                    required: true,
                    message: "请输入执行标准",
                    trigger: ["blur", "change"]
                },
                "productionLicense": {
                    type: "array",
                    required: true,
                    message: "请输入生产许可证编号",
                    min: 1,
                    trigger: ["blur", "change"]
                },
                "price": {
                    type: "string",
                    required: true,
                    message: "请输入商品价格",
                    trigger: ["blur", "change"]
                },
                "count": {
                    type: "string",
                    required: true,
                    message: "请输入商品数量",
                    trigger: ["blur", "change"]
                }
            },
            formDesc: [
                {
                    keyName: "goodsName",
                    type: "input",
                    required: true,
                    label: "商品名称",
                    borderBottom: true,
                    placeholder: "请输入商品名称"
                },
                {
                    keyName: "factory",
                    type: "input",
                    required: true,
                    label: "厂家",
                    borderBottom: true,
                    placeholder: "请输入厂家"
                },
                {
                    keyName: "standard",
                    type: "input",
                    required: true,
                    label: "执行标准",
                    borderBottom: true,
                    placeholder: "请输入执行标准"
                },
                {
                    keyName: "productionLicense",
                    type: "input",
                    required: true,
                    label: "生产许可证编号",
                    borderBottom: true,
                    placeholder: "请输入生产许可证编号",
                    labelWidth: 120
                },
                {
                    keyName: "price",
                    type: "input",
                    required: true,
                    label: "价格",
                    borderBottom: true,
                    placeholder: "请输入商品价格"
                },
                {
                    keyName: "count",
                    type: "input",
                    required: true,
                    label: "数量",
                    borderBottom: true,
                    placeholder: "请输入商品数量"
                }
            ],
            formData: {
                goodsName: "", //商品名称
                factory: "", //厂家
                standard: "", //执行标准
                productionLicense: "",//生产许可证
                price: "",//价格
                count: ""//数量
            },
            checkboxValue: [],
            checkboxList: [
                {
                    name: "抖音",
                    disabled: false
                },
                {
                    name: "腾讯短视频",
                    disabled: false
                },
                {
                    name: "快手",
                    disabled: false
                }
            ],
            fileList: []
        };
    },
    onLoad(options) {
        if (options.img) this.fileList = [{ url: options.img }];

    },
    methods: {
        pageTo(url) {
            uni.navigateTo({
                url
            });
        },
        async submit() {
            let isSubmit = await this.$refs.fxbForm.submit();
        },
        checkboxChange() {

        },
        // 删除图片
        deletePic(event) {
            this.fileList.splice(event.index, 1);
        },
        // 新增图片
        async afterRead(event) {
            // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
            let lists = [].concat(event.file);
            let fileListLen = this.fileList.length;
            lists.map((item) => {
                this.fileList.push({
                    ...item,
                    status: "uploading",
                    message: "上传中"
                });
            });
            for (let i = 0; i < lists.length; i++) {
                const result = await this.uploadFilePromise(lists[i].url);
                let item = this.fileList.fileListLen;
                this.fileList.splice(fileListLen, 1, Object.assign(item, {
                    status: "success",
                    message: "",
                    url: result
                }));
                fileListLen++;
            }
        },
        uploadFilePromise(url) {
            return new Promise((resolve, reject) => {
                let a = uni.uploadFile({
                    url: "http://192.168.2.21:7001/upload", // 仅为示例，非真实的接口地址
                    filePath: url,
                    name: "file",
                    formData: {
                        user: "test"
                    },
                    success: (res) => {
                        setTimeout(() => {
                            resolve(res.data.data);
                        }, 1000);
                    }
                });
            });
        }
    }
};
</script>

<style>
</style>
