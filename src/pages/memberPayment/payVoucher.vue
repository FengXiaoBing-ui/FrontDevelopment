<template>
    <view class="content">
        <u-navbar title="上传支付凭证" :autoBack="true"> </u-navbar>
        <view class="padding" :style="'margin-top:' + CustomBar + 'px;'">
            <view class="boxShadow">
                <boxTitle title="收款人" right-text="一键复制收款人信息" right-class="bg-gray radius"></boxTitle>
                <text class="text-red text-sm">
                    平台支持线下汇款支付，您需先前往银行像该账户进行汇款，汇款成功后需上传支付（汇款）凭证
                </text>
                <view class="payeeInfo margin-top-xl">
                    <view class="flex align-center justify-between margin-top">
                        <text class="text-gray">收款人户名（全称）</text>
                        <text>贵州好酒选电子商务有限公司</text>
                    </view>
                    <view class="flex align-center justify-between margin-top">
                        <text class="text-gray">收款人账号</text>
                        <text>4369 4233 2809 01017 783</text>
                    </view>
                    <view class="flex align-center justify-between margin-top">
                        <text class="text-gray">收款人开户行</text>
                        <text>中国人民建设银行贵阳市观山湖支行</text>
                    </view>
                </view>
            </view>
            <view class="boxShadow margin-top">
                <boxTitle title="上传汇款凭证"></boxTitle>
                <view class="flex flex-wrap">
                    <u-upload
                        :fileList="fileList1"
                        :previewFullImage="true"
                        @afterRead="afterRead"
                        @delete="deletePic"
                        name="1"
                        multiple
                        :maxCount="10"
                    >
                    </u-upload>
                </view>
            </view>

            <button style="width: 100%" class="cu-btn bg-red margin-top lg">提交</button>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "memberVoucher",
    components: {
        boxTitle,
    },
    data() {
        return {
            fileList1: [],
        };
    },
    methods: {
        // 删除图片
        deletePic(event) {
            this[`fileList${event.name}`].splice(event.index, 1);
        },
        // 新增图片
        async afterRead(event) {
            // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
            let lists = [].concat(event.file);
            let fileListLen = this[`fileList${event.name}`].length;
            lists.map(item => {
                this[`fileList${event.name}`].push({
                    ...item,
                    status: "uploading",
                    message: "上传中",
                });
            });
            for (let i = 0; i < lists.length; i++) {
                const result = await this.uploadFilePromise(lists[i].url);
                let item = this[`fileList${event.name}`][fileListLen];
                this[`fileList${event.name}`].splice(
                    fileListLen,
                    1,
                    Object.assign(item, {
                        status: "success",
                        message: "",
                        url: result,
                    })
                );
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
                        user: "test",
                    },
                    success: res => {
                        setTimeout(() => {
                            resolve(res.data.data);
                        }, 1000);
                    },
                });
            });
        },
    },
};
</script>

<style lang="scss" scoped>
/deep/.u-upload__wrap__preview {
    width: 30%;
    margin: 0 10px 8px 0;
}
.boxShadow {
    padding: 15px 10px;
    background: white;
    border-radius: 6px;
    box-shadow: 2px 2px 8px #e6e6e6;
}
</style>
