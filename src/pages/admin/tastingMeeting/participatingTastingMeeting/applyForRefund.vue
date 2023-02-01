<template>
    <view>
        <u-navbar :autoBack="true" title="申请退款"></u-navbar>
        <view :style="'margin-top:'+ (CustomBar*2.5) +'rpx'">
            <view class="whiteBoxShadow">
                <boxTitle title="申请退款"></boxTitle>
                <view class="flex justify-between">
                    <view class="flex align-center">
                        <view class="text-red">*</view>
                        <view>入场状态</view>
                    </view>
                    <view class="flex align-center">
                        <text>未入场</text>
                        <view class="cuIcon-right margin-left-sm" style="font-size: 15px"></view>
                    </view>
                </view>
                <view class="u-border-bottom margin-tb-sm"></view>
                <view class="flex justify-between">
                    <view class="flex align-center">
                        <view class="text-red">*</view>
                        <view>退款原因</view>
                    </view>
                    <view class="flex align-center">
                        <text>超时未入场</text>
                        <view class="cuIcon-right margin-left-sm" style="font-size: 15px"></view>
                    </view>
                </view>
                <view class="u-border-bottom margin-tb-sm"></view>
                <view class="flex justify-start">
                    <view class="flex align-center">
                        <view class="text-red">*</view>
                        <view>退款金额</view>
                    </view>
                    <view class="text-red margin-left-xl">￥500.00</view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="补充描述和凭证"></boxTitle>
                <view class="text-gray margin-tb">补充描述，有助于服务商更好处理售后问题</view>
                <input class="u-border-bottom" type="text">
                <view class="margin-tb">
                    <text class="text-red">*</text>
                    <text>凭证图片</text>
                    <text class="text-sm text-orange margin-left-sm">最多上传5张图片</text>
                </view>
                <u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
                          :maxCount="5"></u-upload>
            </view>
            <view @click="submit" class="bg-red margin-top-sm cu-btn margin-left-sm radius" style="width: 95%">提交</view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";

export default {
    name: "applyForRefund",
    data() {
        return {
            fileList1:[]
        };
    },
    components: {
        boxTitle
    },
    methods:{
        submit(){
          uni.redirectTo({
              url:"/pages/payResult/payResult?status=refund"
          })
        },
        async afterRead(event) {
            // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
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
        // 删除图片
        deletePic(event) {
            this[`fileList${event.name}`].splice(event.index, 1);
        },
    }
};
</script>

<style scoped>

</style>