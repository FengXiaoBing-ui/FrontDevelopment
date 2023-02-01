<template>
    <view>
        <u-navbar :autoBack="true" title="意见与建议"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`">
            <view class="padding-sm ">
                <view class="bg-white padding-sm">
                    <u--textarea border="none" v-model="feedback" confirmType="done" placeholder="请输入您要反馈的问题（5-500字以内）"></u--textarea>
                </view>
                <view class="bg-white padding-sm margin-top-sm">
                    <view class=" text-gray u-border-bottom padding-bottom">请提供问题的截图或照片（选填）</view>
                    <view class="margin-xs padding-top">
                        <u-upload
                            :fileList="fileList"
                            :maxCount="10"
                            :previewFullImage="true"
                            multiple
                            name="3"
                            @afterRead="afterRead"
                            @delete="deletePic"
                        ></u-upload>
                    </view>
                </view>
                <view class="bg-white padding-sm flex margin-top u-border-bottom justify-between">
                    <view class="text-gray">联系方式</view>
                    <input type="text" placeholder="请输入手机号" class="text-right">
                </view>
                <view class="bg-white  padding-sm flex justify-between">
                    <view class="text-gray">感谢您的意见和建议。</view>
                </view>
                <view class="cu-btn bg-red margin-top" style="width: 100%">
                    提交
                </view>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    name: "proposalIndex",
    data() {
        return {
            feedback: "",
            fileList: []
        };
    },
    methods: {
        deletePic(event) {
            this.fileList.splice(event.index, 1);
        },
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
                let item = this.fileList[fileListLen];
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
                    url: "",
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

<style scoped>

</style>