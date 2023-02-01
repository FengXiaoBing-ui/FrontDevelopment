<template>
<view>
    <u-form
        labelPosition="left"
        :model="model1"
        :rules="rules"
        labelWidth=""
        ref="form1"
    >
        <view v-for="(item,index) in copyFormData" :key="index">
            <view v-if="item.title" class="margin-top-sm text-lg text-bold">{{ item.title }}</view>
            <u-form-item
                :label="item.label"
                prop="userInfo.sex"
                :borderBottom="!item.noBorder"
                ref="item1"
                :required="true"
                :label-width="item.labelWidth?item.labelWidth:80"
            >
                <view v-if="item.tips" class="text-sm text-orange">最多上传5张图片</view>
                <template v-if="!item.isButton">
                    <view @click="open(item.isPopup)">
                        <u-input
                            v-if="!item.isUpload&&!item.isOption"
                            v-model="item.value"
                            :disabled="item.isPopup"
                            :disabledColor="item.isPopup?'#ffffff':''"
                            :placeholder="item.placeholder"
                            border="none"
                        ></u-input>
                    </view>

                    <view v-if="item.isOption" class="flex align-center flex-sub" @click="choiceFn(item.isClick,item.isOption,item.childrenList,index)">
                        <u-input
                            input-align="right"
                            v-model="item.value"
                            disabled
                            disabledColor="#ffffff"
                            :placeholder="item.placeholder"
                            placeholder-style="color:#777777"
                            border="none"
                        ></u-input>
                        <view style="font-size: 30rpx" class="cuIcon-right text-gray margin-left-sm"></view>
                    </view>
                </template>
                <view v-else class="flex align-center flex-twice">
                    <u-icon v-if="item.warningIcon" name="info-circle-fill" size="18" color="#F37B1D"></u-icon>
                    <text class="margin-left-xs">{{ item.placeholder }}</text>
                </view>
                <view v-if="item.unit" class="">{{ item.unit }}</view>
                <button v-if="item.isButton" @click="goParameter(item.path)" class="cu-btn bg-red radius">{{ item.btnText }}</button>
            </u-form-item>
            <view v-if="item.isUpload" @click="isChoice(item.isOption,index,item.childrenList)">
                <view v-if="item.placeholder" class="text-gray margin-bottom">{{ item.placeholder }}</view>
                <u-upload
                    :fileList="item.value"
                    @afterRead="afterRead"
                    @delete="deletePic"
                    name="1"
                    multiple
                    :maxCount="10"
                    class="margin-top-sm"
                ></u-upload>
            </view>
        </view>

    </u-form>
    <uni-popup ref="popup" background-color="#fff" type="bottom">
        <view class="basis-lg bg-white" style="height: 500rpx">
            <view class="grid col-3 padding-lr-sm padding-tb u-border-bottom">
                <view></view>
                <view class="text-center text-lg text-bold">净含量</view>
                <view @click="close" style="font-size: 40rpx" class="cuIcon-close text-right"></view>
            </view>
            <view class="padding-tb margin-lr-xs u-border-bottom">
                <input type="text" placeholder="请输入数字">
            </view>
            <view class="flex flex-wrap padding-tb">
                <view @click="activeIndex = index" v-for="(item,index) in 6" :key="index" :class="activeIndex==index?'bg-red':'bg-gray'" class="radius basis-xs padding-tb-sm text-center margin-top-sm margin-lr-xs">ml</view>
            </view>
        </view>
    </uni-popup>
    <u-picker :show="showSex" @cancel="showSex = false" @confirm="confirm" @close="showSex = false" keyName="name" :columns="actions"></u-picker>
</view>
</template>

<script>
export default {
    name: "fxb-u-form",
    props:{
        formData:{
            type:Array,
            default:() => []
        }
    },
    data(){
        return{
            activeIndex:0,
            type:"left",
            show:false,
            copyFormData:this.formData,
            actions: [],
            showSex: false,
            fromDataIndex:0,
            model1: {
                userInfo: {
                    name: "",
                    sex: ""
                }
            },
            rules: {
                "userInfo.name": {
                },
                "userInfo.sex": {
                }
            },
        }
    },
    onReady() {
        //如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
        this.$refs.form1.setRules(this.rules);
    },
    methods:{
        open(status) {
            if (status){
                this.$refs.popup.open();
            }
            // console.log('open');
        },
        close() {
            this.show = false;
            this.$refs.popup.close();
        },
        choiceFn(isClick,isOption,childrenList,index){
            if (isClick){
                this.gotoBrand()
            }else {
                this.isChoice(isOption,index,childrenList)
            }
        },
        gotoBrand(){
            uni.navigateTo({
                url:"/pages/agent/brandScreen"
            })
        },
        submit(){
            this.$emit('getData',this.copyFormData)
        },
        confirm(e){
            this.copyFormData[this.fromDataIndex].value = e.value[0].name;
            this.$refs.form1.validateField("userInfo.sex");
            this.showSex = false
        },
        isChoice(isOption, index, childrenList) {
            this.actions = childrenList;
            this.fromDataIndex = index;
            if (isOption) {
                this.showSex = true;
            }
        },
        goParameter(path){
            uni.navigateTo({
                url:path
            })
        },
        // 删除图片
        deletePic(event) {
            this.copyFormData[this.fromDataIndex].value.splice(event.index, 1)
        },
        // 新增图片
        async afterRead(event) {
            console.log(this.fromDataIndex);
            let _this = this;
            // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
            let lists = [].concat(event.file)
            let fileListLen = this.copyFormData[this.fromDataIndex].value.length
            lists.map((item) => {
                _this.copyFormData[this.fromDataIndex].value.push({
                    ...item,
                    status: 'uploading',
                    message: '上传中'
                })
            })
            for (let i = 0; i < lists.length; i++) {
                const result = lists[i].url
                let item = this.copyFormData[this.fromDataIndex].value[fileListLen]
                this.copyFormData[this.fromDataIndex].value.splice(fileListLen, 1, Object.assign(item, {
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

<style lang="scss" scoped>
.u-form{
    padding-left: 16rpx;
}
/deep/.u-upload__wrap__preview__image,/deep/.u-upload__button{
    width: 144rpx !important;
    height: 144rpx !important;
}
</style>