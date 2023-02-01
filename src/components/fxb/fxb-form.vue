<template>
    <view>
        <!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
        <u--form labelPosition="left" :model="copyModel" :rules="rules" ref="form1">
            <u-form-item
                v-for="(item,index) in formDesc"
                :key="index"
                :labelWidth="item.labelWidth?item.labelWidth:'80'"
                :required="item.required"
                :label="item.label"
                :prop="item.keyName"
                :borderBottom="item.borderBottom"
                ref="item1"
                :data-content="item.title"
                :class="{'upload':item.type==='image'||item.type==='textarea'||item.type==='video','classify':item.type==='classify','exhibition':item.type==='exhibition'&&imgNonempty(copyModel[item.keyName])}"
            >
                <template v-if="item.type==='exhibitionText'">
                    <view slot="right"><text>{{ item.text }}</text><text></text>{{ item.secondaryText }}</view>
                </template>
                <template v-if="item.type==='input'">
                    <u-input v-model="copyModel[item.keyName]" border="none"
                             :placeholder="item.placeholder"></u-input>
                    <text v-if="item.unit">{{ item.unit }}</text>
                </template>

                <template v-if="item.type==='classify'">
                    <view slot="right" @click="clickClassify(item.path,item.column,item.keyName)"
                          class="flex align-center text-gray">
                        <text>{{ model[item.keyName] === "" ? item.placeholder : model[item.keyName] }}</text>
                        <u-icon class="margin-left-sm" name="arrow-right"></u-icon>
                    </view>
                </template>

                <template v-if="item.type==='inputAndClassify'">
                    <u-input :customStyle="{width:'100rpx'}" v-model="copyModel[item.keyName].count" border="none"
                             :placeholder="item.placeholder" placeholder-class="text-sm"></u-input>
                    <view slot="right" @click="showTwo = true" class="flex align-center text-gray">
                        <text>{{ model[item.keyName].unit }}</text>
                        <u-icon class="margin-left-sm" name="arrow-right"></u-icon>
                    </view>
                </template>

                <template v-if="item.type === 'date'">
                    <view @click="dateShow = index" slot="right" style="font-size: 30rpx" :class="model[item.keyName]?'':'cuIcon-countdown'">{{ model[item.keyName] }}</view>
                    <u-datetime-picker
                        :show="dateShow === index"
                        v-model="dateValue"
                        @confirm="confirmDate($event,item.keyName)"
                        @cancel="cancelDate"
                        mode="date"
                        :formatter="formatter"
                    ></u-datetime-picker>
                </template>

                <template v-if="item.type==='textarea'">
                    <u-textarea v-model="copyModel[item.keyName]" class="margin-top-sm" confirmType="done"
                                :placeholder="item.placeholder"></u-textarea>
                </template>

                <template v-if="item.type==='image'">
                    <u-upload
                        class="margin-top-sm"
                        :fileList="copyModel[item.keyName]"
                        @afterRead="afterRead($event,item.keyName)"
                        @delete="deletePic($event,item.keyName)"
                        name="1"
                        multiple
                        :maxCount="item.maxCount?item.maxCount:1"
                    ></u-upload>
                </template>

                <template v-if="item.type==='video'">
                    <view class="flex flex-direction">
                        <text class="text-orange margin-top-sm">{{ item.tips }}</text>
                        <u-upload
                            class="margin-top-sm"
                            :fileList="copyModel[item.keyName]"
                            @afterRead="afterRead($event,item.keyName)"
                            @delete="deletePic($event,item.keyName)"
                            accept="video"
                            name="1"
                            multiple
                            :maxCount="1"
                        ></u-upload>
                    </view>
                </template>

                <template v-if="item.type==='button'">
                    <text class="text-gray">{{ $store.state.product.isSubmit ? '' : item.placeholder }}</text>
                    <button slot="right" @click="gotoPath(item.keyName,item.path)" class="cu-btn bg-red radius sm">
                        {{ item.buttonText }}
                    </button>
                </template>

                <template v-if="item.type==='exhibition'">
                    <view @click="addImg" slot="right" class="flex align-center">
                        <text>去上传主图</text>
                        <u-icon class="margin-left-sm" name="arrow-right"></u-icon>
                        <view v-if="imgNonempty(copyModel[item.keyName])" class="productImg" @click.stop="addImg">
                            <view class="flex align-center padding-bottom-sm w100 u-border-bottom">
                                <view v-for="(list,index) in copyModel[item.keyName]" :key="list+index">
                                    <fxbImage class="margin-lr-xs" v-if="list.url" mode="aspectFill"
                                              :key="list.url+index"
                                              :src="list.url" height="120" width="120"></fxbImage>
                                </view>
                            </view>
                        </view>
                    </view>
                </template>

                <u-picker v-if="item.type==='inputAndClassify'" :show="showTwo" keyName="label" @cancel="cancel"
                          :columns="item.column" @confirm="confirmTwo($event,item.keyName)"></u-picker>

            </u-form-item>
        </u--form>
        <u-picker :show="show" keyName="label" @cancel="cancel" :columns="column" @confirm="confirm"></u-picker>
        <!-- <u-button @click="submit">提交</u-button> -->
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image";
import { mapMutations, mapState } from "vuex";

export default {
    components: {
        fxbImage
    },
    props: {
        formDesc: {
            type: Array,
            default: () => []
        },
        model: {
            type: Object,
            default: () => {
            }
        },
        rules: {
            type: Object,
            default: () => {
            }
        },
        required: {
            type: Boolean,
            default: true
        },
        type: {
            type: String,
            default: "input"
        },
        unit: {
            type: String,
            default: ""
        },
        rightBtn: {
            type: String,
            default: ""
        },
        label: {
            type: String,
            default: ""
        },
        categoryId: {
            type: Array,
            default: () => []
        },
        placeholder: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            keyName: "",
            copyModel: this.model,
            show: false,
            showTwo: false,
            column: [],
            dateShow:-1,
            dateValue:Number(new Date())
        };
    },
    methods: {
        ...mapMutations("product", ["setCommodityParameters"]),
        async submit() {
            this.$emit("onChange", this.copyModel);
            const res = await new Promise((resolve, reject) => {
                this.$refs.form1.validate().then(res => {
                    // uni.$u.toast("校验通过");
                    resolve(true);
                }).catch(errors => {
                    // uni.$u.toast("校验失败");
                    resolve(false);
                });
            });
            return res;
        },
        confirmDate(e,key){
            this.copyModel[key] = this.$util.timestampToTime(e.value);
            this.dateShow = -1
        },
        cancelDate(e){
            console.log('cancelDate',e);
            this.dateShow = -1
        },
        formatter(type, value) {
            if (type === 'year') {
                return `${value}年`
            }
            if (type === 'month') {
                return `${value}月`
            }
            if (type === 'day') {
                return `${value}日`
            }
            return value
        },
        // 回调参数为包含columnIndex、value、values
        confirm(e) {
            this.$emit("getCategoryId", e.value[0].label);
            this.copyModel[this.keyName] = e.value[0].label;
            this.show = false;
        },
        confirmTwo(e, keyName) {
            console.log(e.value[0].label);
            this.copyModel[keyName].unit = e.value[0].label;
            this.showTwo = false;
        },
        cancel() {
            this.show = false;
            this.showTwo = false;
        },
        hide() {
            this.show = true;
        },
        clickClassify(path, column, keyName) {
            if (path) {
                this.setCommodityParameters(this.copyModel);
                uni.navigateTo({
                    url: path
                });
            } else {
                this.keyName = keyName;
                this.column = column;
                this.show = true;
            }
        },
        addImg() {
            uni.navigateTo({
                url: "/pages/admin/adminProduct/addImg"
            });
        },
        gotoPath(keyName, path) {
            if (this.copyModel.categoryId === "") {
                uni.showToast({
                    title: "请先选择商品分类",
                    icon: "none"
                });
                return;
            }
            uni.navigateTo({
                url: path
            });
        },
        imgNonempty(arr) {
            let nonempty = false;
            if (Array.isArray(arr)) {
                arr.forEach(item => {
                    if (item.url) {
                        nonempty = true;
                    }
                });
            } else {
                nonempty = false;
            }
            return nonempty;
        },
        // 删除图片
        deletePic(event, keyName) {
            this.copyModel[keyName].splice(event.index, 1);
        },
        // 新增图片
        async afterRead(event, keyName) {
            let _this = this;
            // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
            let lists = [].concat(event.file);
            let fileListLen = this.copyModel[keyName].length;
            lists.map((item) => {
                this.copyModel[keyName].push({
                    url:item.url,
                    status: "uploading",
                    message: "上传中"
                });
            });
            console.log(this.copyModel[keyName]);
            const tempList = [];
            for (let i = 0; i < lists.length; i++) {
                // this.$emit("uploadImg", lists[i].url);
                const result = await this.uploadFilePromise(lists[i].url); //uploadFilePromise
                console.log(result);
                this.$emit("getImageUrl", result.data);
                tempList.push(result.data[0]);
                let item = this.copyModel[keyName][fileListLen];
                this.copyModel[keyName].splice(fileListLen, 1, Object.assign(item, {
                    status: "success",
                    message: "",
                    url: result.data[0] // 视频回传封面图片
                }));
                fileListLen++;
            }
            this.$emit("uploadImg", {
                index: this.index,
                data: tempList
            });

        },
        uploadFilePromise(url) {
            return new Promise((resolve, reject) => {
                uni.uploadFile({
                    url: this.$config.UPLOAD_IMG_SERVER, // 仅为示例，非真实的接口地址
                    filePath: url,
                    name: "file",
                    formData: {
                        type: +this.picType
                    },
                    success: (res) => {
                        console.log(res.data);
                        return resolve(JSON.parse(res.data));
                    },
                    file: (err) => {
                        console.log(err);
                        return reject(err);
                    }
                });
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.exhibition {
    position: relative;
    padding-bottom: 140rpx;
}

.productImg {
    position: absolute;
    width: 100%;
    height: 120rpx;
    bottom: 20rpx;
    left: 0;
}
/deep/.u-form-item{
    &::before{
        content: attr(data-content);
        font-weight: bold;
        margin-top: 10rpx;
        font-size: 30rpx;
    }
    &::after{
        content: '';
        margin-bottom: 10rpx;
    }
}

.upload, .classify {
    /deep/ .u-form-item__body__right__message {
        margin: 0 !important;
    }
}

/deep/ .u-input__content__field-wrapper__field {
    width: 350rpx !important;
}

.upload {
    /deep/ .u-form-item__body {
        display: flex;
        flex-direction: column !important;
    }
}
</style>
