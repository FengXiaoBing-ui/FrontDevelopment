<!--
type为cell的类型,
    默认 none 什么都没
    input为输入框
    checkGroup为勾选组,/
    area为文本域,
    solt 自定义中间内容
相关属性
    lable为左边文字内容,标题
    text为中间靠右边文字
    textColor 文字颜色
    endText是最右边文字，与图标同位置
    icon为最右边图标、传入conlorui图标，
    iconColor 图标颜色
    placeholder 为输入框提示
    checkList 多选列表内容
    endSwitch为最后的滑块开关
默认属性
require 默认红星 布尔值，默认true，加红色星号
border 默认有border，不需要则给 border='none'

事件
iconEvent
未封装完！未封装完！未封装完！
-->
<template>
    <view class=" w100 ">
        <view class="flex align-center justify-between w100 cell ">
            <view class="cell-left flex align-center u-flex-content-center">
                <view :style="labelRequire?'color:red;':'color: transparent;'" class="padding-right-xs">*</view>
                <view>{{ label }}</view>
            </view>
            <!--      center content-->
            <view class="cell-center align-center padding-lr-xs flex-sub">
                <slot name="center"></slot>
                <slot>
                    <!--          input-->
                    <view class="flex align-center">
                        <input v-if="type==='input'" :disabled="disabled"
                               :placeholder="placeholder" :value="inputValue"
                               :class="inputEnd?'text-right margin-right-sm':''"
                               placeholder-class="placeholderStyle"
                               type="text"
                               @input="$emit('update:inputValue', $event.target.value)" />
                        <!--         文本域-->
                        <view v-if="text" :style="`color:${ textColor};`"
                              class="text-gray  flex-sub text-nowrap text-right "
                              @click="IconEvent" @input="$emit('update:areaValue', $event.target.value)">
                            {{ text }}
                        </view>

                        <!--          checkBox-->
                        <view v-if="type==='checkGroup'">
                            <u-checkbox-group v-model="item.value" class="flex flex-wrap  scale margin-top-sm"
                                              @change="checkboxChange">
                                <u-checkbox
                                    v-for="(el, index) in checkList"
                                    :key="el.name"
                                    :customStyle="{marginBottom: '8px'}"
                                    :label="el.lable"
                                    :name="el.name"
                                    activeColor="red"
                                    class="margin-left-xs"
                                    shape="circle"
                                >
                                </u-checkbox>
                            </u-checkbox-group>
                        </view>
                    </view>
                </slot>
            </view>
            <!--      right icon-->
            <view class="flex  align-stretch u-flex-content-center">
                <view v-if="textButton" class="flex-sub text-right ">
                    <view :class="textButtonStyle"
                          :style="`color:${ textColor};`"
                          class="radius text-nowrap sm text-right cu-btn text-right"
                          @click="textBtnEvent">
                        {{ textButton }}
                    </view>
                </view>
                <!--          开关-->

                <view v-if="endSwitch" class="cuIcon ">
                    <u-switch :value="switchValue" @change="change"></u-switch>
                </view>
                <view v-if="endText" class="text-nowrap">
                    {{ endText }}
                </view>
                <!--            图标-->

                <view v-if="selectPicker">
                    <picker :range="array" :value="index" @change="bindPickerChange">
                        <view class="uni-input">{{ array[index] }}</view>
                    </picker>
                </view>

                <view v-if="icon" :class="icon" :style="`color:${ iconColor};font-size:16px;`"
                      class="text-gray h100 "
                      style="vertical-align: middle;line-height:40rpx" @click="IconEvent"></view>
            </view>
        </view>

        <view :class="border==='none'?'':'border-bottom'">
            <textarea v-if="area||type==='area'" :placeholder="placeholder"
                      class="u-border radius padding-sm w100 text-left border-none"
                      placeholder-class="placeholderStyle"
                      @input="$emit('update:areaValue', $event.target.value)"></textarea>
            <u-upload
                v-if="type==='upload'"
                :sizeType="['compressed']"
                :accept="accept"
                :previewFullImage="true"
                :compressed="true"
                :fileList="fileList"
                :maxCount="maxImg"
                class="margin-left-sm margin-tb-sm"
                multiple
                @afterRead="afterRead"
                @delete="deletePic"
            ></u-upload>

        </view>
    </view>
</template>

<script>

export default {
    name: "inputCell",
    props: {
        inputEnd: {
            default: false,
            type: Boolean
        },
        accept: {
            default: "image",
            type: String
        },
        selectPicker: {
            default: "",
            type: String
        },
        maxImg: {
            type: Number,
            default: 1
        },
        area: {},
        uploadImg: {
            default: "",
            type: String || Number
        },
        inputValue: {
            default: "",
            type: String || Number
        },
        label: {
            default: "",
            type: String
        },
        labelRequire: {
            default: true,
            type: Boolean
        },
        type: {
            type: String,
            default: ""
        },
        placeholder: {
            default: "请输入内容",
            type: String
        },
        checkList: {
            default: () => {
                return [];
            },
            type: Array
        },
        areaValue: {
            default: "",
            type: String
        },
        icon: {
            default: "",
            type: String
        },
        endSwitch: {
            default: false,
            type: Boolean
        },
        text: {},
        textButton: {
            default: "",
            type: String
        },
        textButtonStyle: {
            default: "",
            type: String
        },
        iconColor: {
            default: "",
            type: String
        },
        textColor: {
            default: "",
            type: String
        },
        endText: {
            default: "",
            type: String
        },
        border: {
            default: "",
            type: String
        },
        disabled: {
            default: false,
            type: Boolean
        },
        picType: {
            default: "",
            type: String || Number
        },
        index: {
            default: "",
            type: String || Number
        },
        fileDataList:{
            default: () => [],
            type: Array
        }

    },
    data() {
        return {
            fileList: this.fileDataList,
            switchValue: ""
        };
    },
    methods: {
        IconEvent() {
            this.$emit("iconEvent");
        },
        textBtnEvent() {
            this.$emit("textBtnEvent");
        },
        deletePic(event) {
            this.fileList.splice(event.index, 1);
        },
        // 新增图片
        async afterRead(event) {
            console.log(event);
            let _this = this;
            // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
            let lists = [].concat(event.file);
            console.log(lists);
            let fileListLen = this.fileList.length;
            lists.map((item) => {
                this.fileList.push({
                    ...item,
                    status: "uploading",
                    message: "上传中"
                });
            });
            const tempList = [];
            for (let i = 0; i < lists.length; i++) {
                // this.$emit("uploadImg", lists[i].url);
                const result = await this.uploadFilePromise(lists[i].url);//uploadFilePromise
                console.log(this.index);
                tempList.push(result.data[0]);
                let item = this.fileList[fileListLen];
                this.fileList.splice(fileListLen, 1, Object.assign(item, {
                    status: "success",
                    message: "",
                    url: result // 视频回传封面图片
                }));
                fileListLen++;
            }
            this.$emit("uploadImg", { index: this.index, data: tempList });

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
.cell {
    padding: 32rpx 0;
    overflow: hidden;
}

.cell-left {
    min-width: calc(4em);
    white-space: nowrap;
    min-width: 25%;
    flex-shrink: 0;
}

.border-bottom {
    border-bottom: solid 1px #F1F1F1;
}

.border-none {
    border: none;
    max-height: 250px;
}

.cell-center {
    flex-grow: 1;
}

.text-nowrap {
    white-space: nowrap;
}

.placeholderStyle {
    font-size: 28rpx;
}

.uni-input-placeholder, input {
    font-size: 28rpx;
}

/deep/ .u-upload__button {
    height: 154rpx !important;
    width: 154rpx !important;
}

/deep/ .u-upload__wrap__preview__image {
    height: 154rpx !important;
    width: 154rpx !important;
}
</style>
