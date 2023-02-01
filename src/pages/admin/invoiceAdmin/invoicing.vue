<template>
<view class="content">
    <u-navbar :border="false" :fixed="true" title="开具发票" :autoBack="true"></u-navbar>
    <view class="padding-lr-sm padding-tb" :style="'margin-top:'+CustomBar+'px'">
        <view class="whiteBoxShadow">
            <boxTitle title="开票形式"></boxTitle>
            <u-radio-group class="grid col-2" v-model="radioValue">
                <view class="flex text-gray">
                    <u-radio activeColor="red" name="电子发票" @change="radioChange"></u-radio>
                    <text class="margin-left-sm">电子发票</text>
                </view>
                <view class="flex text-gray">
                    <u-radio activeColor="red" name="线下开票" @change="radioChange"></u-radio>
                    <text class="margin-left-sm">线下开票</text>
                </view>
            </u-radio-group>
            <template v-if="radioValue==='线下开票'">
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray flex-twice">对方单位名称</view>
                    <view class="flex-treble text-right">贵州好酒选电子商务有限公司</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray flex-twice">纳税人识别号</view>
                    <view class="flex-treble text-right">4543DHGI84M32HS84J</view>
                </view>
<!--                <view class="flex justify-between align-center margin-top-sm">-->
<!--                    <view class="text-gray flex-twice">发票类型</view>-->
<!--                    <view class="flex-treble text-right">普通发票</view>-->
<!--                </view>-->
                <view class="flex justify-between align-center margin-top-sm">
                    <view class="text-gray flex-twice">开票金额</view>
                    <view class="flex-treble text-right text-red">￥2500.00</view>
                </view>
                <view class="flex flex-direction margin-top-sm">
                    <text><text class="text-red">*</text>上传发票</text>
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
            </template>
            <template v-if="radioValue==='电子发票'">
                <view class="flex justify-between align-center padding-tb u-border-bottom">
                    <view class="text-gray flex-twice">对方单位名称</view>
                    <view class="flex-treble text-right">贵州好酒选电子商务有限公司</view>
                </view>
                <view class="flex justify-between align-center padding-tb u-border-bottom">
                    <view class="text-gray flex-twice">纳税人识别号</view>
                    <view class="flex-treble text-right">4543DHGI84M32HS84J</view>
                </view>
<!--                <view class="flex justify-between align-center padding-tb u-border-bottom">-->
<!--                    <view class="text-gray flex-twice">发票类型</view>-->
<!--                    <view class="flex-treble text-right">-->
<!--                        普通发票-->
<!--                        <text class="cuIcon-right margin-left-sm"></text>-->
<!--                    </view>-->
<!--                </view>-->
                <view class="flex justify-between align-center padding-top">
                    <view class="text-gray flex-twice">开票金额</view>
                    <view class="flex-treble text-right text-red">￥2500.00</view>
                </view>
            </template>
        </view>
        <button class="cu-btn bg-red radius lg margin-top-xl" style="width: 100%">确认开票</button>
    </view>
</view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
    name: "invoicing",
    components:{
        boxTitle
    },
    data(){
        return{
            radioValue:"电子发票",
            fileList1: [],
        }
    },
    methods:{
        radioChange(e){
            console.log(e);
            this.radioValue = e
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

</style>
