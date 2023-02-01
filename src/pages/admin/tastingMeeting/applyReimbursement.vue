<template>
    <view>
        <u-navbar :border="false" :fixed="true" title="申请详情" :autoBack="true"></u-navbar>
        <view class="padding-lr-sm padding-tb"
              :style="'margin-top:'+ CustomBar + 'px; padding-bottom:100rpx'">
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="选择品鉴会"></boxTitle>
                <view @click="gotoPath('pages/admin/tastingMeeting/selectTastingMeeting')" class="flex justify-between align-center margin-top-sm">
                    <view class="flex align-center">
                        <text class="text-red">*</text>
                        <view>选择已结束的品鉴会</view>
                    </view>
                    <view class="cuIcon-right text-gray" style="font-size: 16px"></view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="提交申请资料"></boxTitle>
                <view class="flex align-center">
                    <text class="text-red">*</text>
                    <view>餐厅门头照</view>
                    <view class="text-orange text-sm margin-left-sm">最多上传5张图片</view>
                </view>
                <u-upload
                    class="margin-top-sm"
                    :fileList="fileList1"
                    @afterRead="afterRead"
                    @delete="deletePic"
                    name="1"
                    multiple
                    :maxCount="10"
                ></u-upload>
                <view class="u-border-bottom margin-tb-sm"></view>
                <view class="flex align-center">
                    <text class="text-red">*</text>
                    <view>开瓶视频及图片</view>
                    <view class="text-orange text-sm margin-left-sm">最多上传5张图片</view>
                </view>
                <u-upload
                    class="margin-top-sm"
                    :fileList="fileList1"
                    @afterRead="afterRead"
                    @delete="deletePic"
                    name="1"
                    multiple
                    :maxCount="10"
                ></u-upload>
                <view class="u-border-bottom margin-tb-sm"></view>
                <view class="flex align-center">
                    <text class="text-red">*</text>
                    <view>餐桌摆拍拍照</view>
                    <view class="text-orange text-sm margin-left-sm">最多上传5张图片</view>
                </view>
                <u-upload
                    class="margin-top-sm"
                    :fileList="fileList1"
                    @afterRead="afterRead"
                    @delete="deletePic"
                    name="1"
                    multiple
                    :maxCount="10"
                ></u-upload>
            </view>
        </view>
        <view class="bg-white w100 foot padding-lr-sm padding-top-sm padding-bottom-xl">
            <button class="bg-red cu-btn w100">提交申请</button>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";

export default {
    name: "applyReimbursement",
    components: { boxTitle },
    data() {
        return { fileList1: [] };
    },
    methods: {
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        },
        // 删除图片
        deletePic(event) {
            this[`fileList${event.name}`].splice(event.index, 1);
        },
        // 新增图片
        async afterRead(event) {
            // 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
            let lists = [].concat(event.file);
            let fileListLen = this[`fileList${event.name}`].length;
            lists.map((item) => {
                this[`fileList${event.name}`].push({
                    ...item,
                    status: "uploading",
                    message: "上传中"
                });
            });
            for (let i = 0; i < lists.length; i++) {
                const result = await this.uploadFilePromise(lists[i].url);
                let item = this[`fileList${event.name}`][fileListLen];
                this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
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

<style scoped>
.foot{
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>