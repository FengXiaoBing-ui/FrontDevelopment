<template>
    <view>
        <u-navbar :autoBack="true" title="版本"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`">
            <view class="margin-xs">
                <view class="bg-white padding">
                    <u-steps :current="leave">
                        <u-steps-item title="身份认证" ></u-steps-item>
                        <u-steps-item title=人脸识别  ></u-steps-item>
                    </u-steps>
                </view>
                <view v-if="leave==0">
                    <view class="bg-white padding margin-top-sm">
                        <view class="text-bold text-xl">请上传身份证正反面</view>
                        <view>
                            <view class="flex align-center justify-between margin-top " style="width: 100%">
                                <view >
                                    <view class="text-bold text-xl">
                                        头像面
                                    </view>
                                    <view class="text-sm margin-top-sm">请上传您的身份证头像面</view>
                                </view>
                                <view>
                                    <u-upload
                                        :fileList="fileList"
                                        @afterRead="afterRead"
                                        @delete="deletePic"
                                        name="6"
                                        multiple
                                        :maxCount="1"
                                        width="200"
                                        height="120"
                                    >
                                        <image src="https://cdn.uviewui.com/uview/demo/upload/positive.png"
                                               mode="widthFix" style="width: 200px;height: 120px;"></image>
                                    </u-upload>
                                </view>
                            </view>
                            <view class="flex align-center justify-between margin-top " style="width: 100%">
                                <view >
                                    <view class="text-bold text-xl">
                                        国徽面
                                    </view>
                                    <view class="text-sm margin-top-sm">请上传您的身份证头像面</view>
                                </view>
                                <view>
                                    <u-upload
                                        :fileList="fileList"
                                        @afterRead="afterRead"
                                        @delete="deletePic"
                                        name="6"
                                        multiple
                                        :maxCount="1"
                                        width="200"
                                        height="120"
                                    >
                                        <image src="https://cdn.uviewui.com/uview/demo/upload/positive.png"
                                               mode="widthFix" style="width:200px;height: 120px;"></image>
                                    </u-upload>
                                </view>
                            </view>
                        </view>
                    </view>
                    <view class="padding-sm">
                        <view class="text-bold text-xl">请完善您的个人信息</view>
                        <view class="margin-top" >
                            <!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->
                            <!-- #ifndef APP-NVUE -->
                            <u-input placeholder="请输入姓名" border="none">
                                <!-- #endif -->
                                <!-- #ifdef APP-NVUE -->
                                <u--input placeholder="请输入姓名" border="none">
                                    <!-- #endif -->
                                    <u--text
                                        text="姓名"
                                        slot="prefix"
                                        margin="0 3px 0 0"
                                        type="tips"
                                    ></u--text>
                                    <!-- #ifndef APP-NVUE -->
                            </u-input>
                            <!-- #endif -->
                            <!-- #ifdef APP-NVUE -->
                            </u--input>
                            <!-- #endif -->
                        </view>
                        <view class="margin-top">
                            <!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->
                            <!-- #ifndef APP-NVUE -->
                            <u-input placeholder="请输入身份证件号" border="none">
                                <!-- #endif -->
                                <!-- #ifdef APP-NVUE -->
                                <u--input placeholder="请输入身份证件号" border="none">
                                    <!-- #endif -->
                                    <u--text
                                        text="身份证号"
                                        slot="prefix"
                                        margin="0 3px 0 0"
                                        type="tips"
                                    ></u--text>
                                    <!-- #ifndef APP-NVUE -->
                            </u-input>
                            <!-- #endif -->
                            <!-- #ifdef APP-NVUE -->
                            </u--input>
                            <!-- #endif -->
                        </view>
                    </view>
                </view>
                <view v-if="leave==1">
                    <view class="bg-white padding margin-top-sm flex flex-direction align-center">
                        <view class="text-bold">人脸识别扫描</view>
                        <view class="text-sm margin-top-sm">请正对手机，确保光线充足</view>
                        <view>
                            <image style="height: 250rpx;width: 250rpx" src="/static/saomiao.png"></image>
                        </view>
                        <view class="margin-top-sm">请根据语音提示完成人脸认证</view>
                        <view class="margin-top-sm flex align-center " style="width:100%">
                            <view class="text-bold">拍摄须知</view>
                            <view class="text-gray text-sm margin-left-sm">请确保是账户本人操作</view>
                        </view>
                        <view class=" flex align-center  justify-around margin-top" style="width: 100%">
                            <view class="flex flex-direction align-center">
                                <view class="imageBox"></view>
                                <view class="margin-top-sm">正对手机</view>
                            </view>
                            <view class="flex flex-direction align-center">
                                <view class="imageBox"></view>
                                <view class="margin-top-sm">正对手机</view>
                            </view>
                            <view class="flex flex-direction align-center">
                                <view class="imageBox"></view>
                                <view class="margin-top-sm">正对手机</view>
                            </view>

                        </view>
                    </view>
                </view>
                <view class="margin-tb-xs">
                        <button style="width: 100%" class="cu-btn bg-red" @click="btnHandle">
                            {{leave==0?'下一步':'验证'}}
                        </button>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "realNameIndex",
    data(){
        return {
            leave:0,
            fileList:[]
        }
    },
    methods:{
        btnHandle(){
           if( this.leave<1){
               this.leave++
           }else{
               uni.navigateBack({
                   delta:1
               })
           }
        },
        // 删除图片
        deletePic(event) {
            this[`fileList${event.name}`].splice(event.index, 1)
        },
        // 新增图片
        async afterRead(event) {
            // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
            let lists = [].concat(event.file)
            let fileListLen = this[`fileList${event.name}`].length
            lists.map((item) => {
                this[`fileList${event.name}`].push({
                    ...item,
                    status: 'uploading',
                    message: '上传中'
                })
            })
            for (let i = 0; i < lists.length; i++) {
                const result = await this.uploadFilePromise(lists[i].url)
                let item = this[`fileList${event.name}`][fileListLen]
                this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
                    status: 'success',
                    message: '',
                    url: result
                }))
                fileListLen++
            }
        },
        uploadFilePromise(url) {
            return new Promise((resolve, reject) => {
                let a = uni.uploadFile({
                    url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
                    filePath: url,
                    name: 'file',
                    formData: {
                        user: 'test'
                    },
                    success: (res) => {
                        setTimeout(() => {
                            resolve(res.data.data)
                        }, 1000)
                    }
                });
            })
        },
    }
};
</script>

<style scoped>
.imageBox{
    background: #c7c7c7;
    border-radius: 50%;
    height: 100rpx;
    width: 100rpx;
}
</style>