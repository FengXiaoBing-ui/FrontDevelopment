<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" :autoBack="true" title="发布招标"></u-navbar>
        <view class="padding" :style="'margin-top:' + CustomBar + 'px;padding-bottom:100rpx'">
            <view class="whiteBoxShadow">
                <u-steps :current="current">
                    <u-steps-item title="商品信息"></u-steps-item>
                    <u-steps-item title="合同内容"></u-steps-item>
                    <u-steps-item title="竞标方式"></u-steps-item>
                </u-steps>
            </view>
            <view v-show="current===0">
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="发布条码"></boxTitle>
                    <fxbForm ref="fxbFormOne" :model="formDataOne" :form-desc="formDescOne" :rules="rulesOne"></fxbForm>
                </view>
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="合同总额"></boxTitle>
                    <fxbForm ref="fxbFormTwo" :model="formDataOne" :form-desc="formDescTwo" :rules="rulesTwo"></fxbForm>
                </view>
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="商品包装"></boxTitle>
                    <view class="flex align-center justify-between">
                        <view class="flex align-center" style="transform: translateX(-20rpx)">
                            <text class="text-red text-lg">*</text>
                            <text>是否包装</text>
                        </view>
                        <u-radio-group
                            v-model="radioValue"
                            placement="row"
                            @change=""
                            class="justify-end"
                        >
                            <u-radio
                                v-for="(item, index) in radioList"
                                :key="index"
                                :label="item"
                                :name="item"
                                activeColor="red"
                                class="margin-left"
                                @change=""
                            >
                            </u-radio>
                        </u-radio-group>
                    </view>
                </view>
            </view>
            <view v-if="current===1">
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="项目概况"></boxTitle>
                    <input type="text" placeholder="请输入项目概况">
                </view>
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="项目基本信息"></boxTitle>
                    <fxbForm ref="fxbFormThree" :model="formDataTwo" :form-desc="formDescThree" :rules="rulesThree"></fxbForm>
                </view>
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="资格审核"></boxTitle>
                    <text class="text-gray text-sm">请输入资格审核标准：<br/>
                        例如：<br/>
                        （1）具有承担民事责任的能力：提供法人或其他组织<br/>
                        的营业执照等证明文件；</text>
                </view>
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="招标政策文件">
                        <view slot="right">
                            <lsj-upload
                                ref="lsjUpload0"
                                childId="upload1"
                                :option="option"
                                :size="size"
                                :count="1"
                                :formats="formats"
                                :debug="debug"
                                :instantly="instantly"
                                @change="onChange"
                                @progress="onprogress"
                                @uploadEnd="onuploadEnd"
                            >
                                <view class="cuIcon-add text-red" style="height: 21px;font-size: 36rpx"></view>
                            </lsj-upload>
                        </view>
                    </boxTitle>
                    <view class="flex align-stretch justify-between">
                        <view class="flex-treble">{{ fileName }}</view>
                        <view v-show="fileName" @click="clear(fileName)" class="flex-sub text-right cuIcon-close text-gray"></view>
                    </view>
                </view>
            </view>
            <view v-show="current===2">
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="招商方式"></boxTitle>
                    <view class="flex align-center justify-between">
                        <view class="flex align-center">
                            <text class="text-red text-lg" style="transform: translateY(10rpx)">*</text>
                            <text>请选择类型</text>
                        </view>
                        <u-radio-group
                            v-model="radioValueTwo"
                            placement="row"
                            @change=""
                            class="justify-end"
                        >
                            <u-radio
                                v-for="(item, index) in radioListTwo"
                                :key="index"
                                :label="item"
                                :name="item"
                                activeColor="red"
                                class="margin-left"
                                @change=""
                            >
                            </u-radio>
                        </u-radio-group>
                    </view>
                    <u-radio-group
                        v-model="radioValueThree"
                        placement="column"
                        iconPlacement="right"
                        @change=""
                    >
                        <u-radio name="单人" label="单人" activeColor="red" class="padding-tb u-border-bottom justify-between"></u-radio>
                        <u-radio name="多人" label="多人" activeColor="red" class="padding-tb justify-between"></u-radio>
                        <view class="flex align-center">
                            <view class="flex align-center flex-twice">
                                <text class="text-red text-lg" style="transform: translateY(10rpx)">*</text>
                                <text>请输入参与人数</text>
                            </view>
                            <input class="flex-treble" type="text" placeholder="请输入人数" placeholder-class="text-sm">
                        </view>
                        <view class="flex align-center justify-between padding-tb u-border-bottom">
                            <text>人均</text>
                            <text class="text-red">¥1000000.00</text>
                        </view>
                        <u-radio name="众筹" label="众筹" activeColor="red" class="padding-tb justify-between"></u-radio>
                        <view class="flex align-center">
                            <view class="flex align-center flex-twice">
                                <text class="text-red text-lg" style="transform: translateY(10rpx)">*</text>
                                <text>最少众筹金额</text>
                            </view>
                            <input class="flex-treble" type="text" placeholder="请输入金额" placeholder-class="text-sm">
                        </view>
                    </u-radio-group>
                </view>
            </view>
        </view>
        <view class="fixed w100 bg-white padding-lr padding-tb-xs">
            <view v-show="current===0">
                <button @click="nextOne" class="cu-btn bg-red radius w100">下一步</button>
            </view>
            <view class="flex align-center" v-show="current===1">
                <button @click="backOne" class="cu-btn bg-red radius w50">上一步</button>
                <button @click="nextTwo" class="cu-btn bg-red radius w50 margin-left">下一步</button>
            </view>
            <view class="flex align-center" v-show="current===2">
                <button @click="backTwo" class="cu-btn bg-red radius w50">上一步</button>
                <button @click="sureRelease" class="cu-btn bg-red radius w50 margin-left">确认发布</button>
            </view>
        </view>
    </view>
</template>

<script>
import fxbForm from "/src/components/fxb/fxb-form";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import { mapState } from "vuex";
export default {
    name: "releaseTender",
    components:{
        fxbForm,
        boxTitle
    },
    data(){
        return{
            // 上传接口参数
            option: {
                // 上传服务器地址，此地址需要替换为你的接口地址
                url: 'http://hl.j56.com/dropbox/document/upload',
                // 上传附件的key
                name: 'file',
                // 根据你接口需求自定义请求头,默认不要写content-type,让浏览器自适配
                header: {
                    // 示例参数可删除
                    'Authorization': 'bearer eyJhbGciOiJSUzI1NiIsI',
                    'uid': '27682',
                    'client': 'app',
                    'accountid': 'DP',
                },
                // 根据你接口需求自定义body参数
                formData: {
                    // 'orderId': 1000
                }
            },
            // 选择文件后是否立即自动上传，true=选择后立即上传
            instantly: true,
            // 限制允许上传的格式，空串=不限制，默认为空
            formats: 'doc,docx,pdf',
            // 文件上传大小限制
            size: 30,
            // 文件回显列表
            files: new Map(),
            // 微信小程序Map对象for循环不显示，所以转成普通数组，不要问为什么，我也不知道
            wxFiles: [],
            // 是否打印日志
            debug: true,
            // 演示用
            tabIndex: 0,
            fileName:"",
            list:[],
            radioValue:"已包装",
            radioList:["已包装","未包装"],
            radioValueTwo:"自主交易",
            radioListTwo:["自主交易","平台托管"],
            radioValueThree:"单人",
            current:0,
            rulesOne: {
                "barCodeProduct": {
                    type: "string",
                    required: true,
                    message: "请填写商品条码",
                    trigger: ["blur", "change"]
                },
                "typeAlcohol": {
                    type: "string",
                    required: true,
                    message: "请选择类型",
                    trigger: ["blur", "change"]
                },
                "brand": {
                    type: "string",
                    required: true,
                    message: "请选择品牌",
                    trigger: ["blur", "change"]
                },
                "productName": {
                    type: "string",
                    required: true,
                    message: "请填写商品名称",
                    trigger: ["blur", "change"]
                }
            },
            formDescOne: [
                {
                    keyName: "barCodeProduct",
                    type: "input",
                    required: true,
                    label: "商品条码",
                    borderBottom: true,
                    placeholder: "请输入商品条码",
                },
                {
                    keyName: "typeAlcohol",
                    type: "classify",
                    required: true,
                    label: "类型",
                    borderBottom: true,
                    placeholder: "请选择",
                    column: this.$config.COMMODITY_CATEGORY
                },
                {
                    keyName: "brand",
                    type: "classify",
                    required: true,
                    label: "品牌",
                    path:"/pages/agent/brandScreen",
                    placeholder: "请选择",
                },
                {
                    keyName: "productName",
                    type: "input",
                    required: true,
                    label: "商品名称",
                    borderBottom: true,
                    placeholder: "请输入商品名称",
                },
                {
                    keyName: "goodsInfo",
                    type: "button",
                    buttonText:"去完善",
                    placeholder: "未完善",
                    required: true,
                    label: "商品详情",
                    path: "/pages/admin/tender/productDetailsForm"
                }
            ],
            formDataOne:{
                barCodeProduct:"",//商品条码
                typeAlcohol:"",//类型
                brand:"",//品牌
                productName:"",//商品名称
                productCount:"",//商品总量
                netContent:"",//灌装净含量
                bottleCount:"",//灌装瓶数
                productTotalPrice:"",//商品总额
                retailPrice:"",//建议零售价
                agencyPrice:"",//代理价
                groupPurchasePrice:"",//团购价
                guidancePrice:""//商超指导价
            },
            rulesTwo:{
                "productCount": {
                    type: "string",
                    required: true,
                    message: "请填写商品总量",
                    trigger: ["blur", "change"]
                },
                "netContent": {
                    type: "string",
                    required: true,
                    message: "请填写灌装净含量",
                    trigger: ["blur", "change"]
                },
                "bottleCount": {
                    type: "string",
                    required: true,
                    message: "请填写灌装瓶数",
                    trigger: ["blur", "change"]
                },
                "productTotalPrice": {
                    type: "string",
                    required: true,
                    message: "请填写商品总额",
                    trigger: ["blur", "change"]
                },
                "retailPrice": {
                    type: "string",
                    required: true,
                    message: "请填写建议零售价",
                    trigger: ["blur", "change"]
                },
                "agencyPrice": {
                    type: "string",
                    required: true,
                    message: "请填写代理价",
                    trigger: ["blur", "change"]
                },
                "groupPurchasePrice": {
                    type: "string",
                    required: true,
                    message: "请填写团购价",
                    trigger: ["blur", "change"]
                },
                "guidancePrice": {
                    type: "string",
                    required: true,
                    message: "请填写商超指导价",
                    trigger: ["blur", "change"]
                },
            },
            formDescTwo:[
                {
                    keyName: "productCount",
                    type: "input",
                    required: true,
                    label: "商品总量",
                    unit:"吨",
                    borderBottom: true,
                    placeholder: "请输入商品总量",
                },
                {
                    keyName: "netContent",
                    type: "input",
                    required: true,
                    label: "灌装净含量",
                    unit:"ml",
                    borderBottom: true,
                    placeholder: "请输入灌装净含量",
                },
                {
                    keyName: "bottleCount",
                    type: "input",
                    required: true,
                    label: "灌装瓶数",
                    unit:"瓶",
                    borderBottom: true,
                    placeholder: "0",
                },
                {
                    keyName: "productTotalPrice",
                    type: "input",
                    required: true,
                    label: "商品总额",
                    borderBottom: true,
                    placeholder: "请输入商品总额",
                },
                {
                    keyName: "retailPrice",
                    type: "input",
                    required: true,
                    label: "建议零售价",
                    borderBottom: true,
                    placeholder: "请输入建议零售价",
                },
                {
                    keyName: "agencyPrice",
                    type: "input",
                    required: true,
                    label: "代理价",
                    borderBottom: true,
                    placeholder: "请输入代理价",
                },
                {
                    keyName: "groupPurchasePrice",
                    type: "input",
                    required: true,
                    label: "团购价",
                    borderBottom: true,
                    placeholder: "请输入团购价",
                },
                {
                    keyName: "guidancePrice",
                    type: "input",
                    required: true,
                    label: "商超指导价",
                    placeholder: "请输入商超指导价",
                },
            ],
            formDataTwo:{
                projectName:"",//项目名称
                projectCode:"",//项目编号
                announcementStartDate:"",//公告起止日期
                bidEndDate:"",//投标截止日期
                earnestMoney:"",//保证金
                earnestMoneyEndDate:"",//保证金缴纳截止日期
            },
            formDescThree:[
                {
                    keyName: "projectName",
                    type: "input",
                    required: true,
                    label: "项目名称",
                    borderBottom: true,
                    placeholder: "请输入项目名称",
                },
                {
                    keyName: "projectCode",
                    type: "input",
                    required: true,
                    label: "项目编号",
                    borderBottom: true,
                    placeholder: "请输入项目编号",
                },
                {
                    keyName: "announcementStartDate",
                    type: "date",
                    required: true,
                    label: "公告起止日期",
                    labelWidth:120,
                    borderBottom: true,
                },
                {
                    keyName: "bidEndDate",
                    type: "date",
                    required: true,
                    label: "投标截止日期",
                    labelWidth:120,
                    borderBottom: true,
                },
                {
                    keyName: "earnestMoney",
                    type: "input",
                    required: true,
                    label: "保证金",
                    borderBottom: true,
                    placeholder: "请输入保证金",
                },
                {
                    keyName: "earnestMoneyEndDate",
                    type: "date",
                    required: true,
                    label: "保证金缴纳截止日期",
                    labelWidth:140,
                    borderBottom: true,
                },
            ],
            rulesThree:{
                "projectName": {
                    type: "string",
                    required: true,
                    message: "请输入项目名称",
                    trigger: ["blur", "change"]
                },
                "projectCode": {
                    type: "string",
                    required: true,
                    message: "请输入项目编号",
                    trigger: ["blur", "change"]
                },
                "announcementStartDate": {
                    type: "string",
                    required: true,
                    min:1,
                    message: "请输入公告起止日期",
                    trigger: ["blur", "change"]
                },
                "bidEndDate": {
                    type: "string",
                    required: true,
                    min:1,
                    message: "请输入投标截止日期",
                    trigger: ["blur", "change"]
                },
                "earnestMoney": {
                    type: "string",
                    required: true,
                    message: "请输入保证金",
                    trigger: ["blur", "change"]
                },
                "earnestMoneyEndDate": {
                    type: "string",
                    required: true,
                    min:1,
                    message: "请输入保证金缴纳截止日期",
                    trigger: ["blur", "change"]
                },
            }
        }
    },
    computed: {
        ...mapState("product", ["brand"])
    },
    onShow(){
        this.formDataOne.brand = this.brand
    },
    methods:{
        async nextOne(){
            this.current = 0
            let nextOne = await this.$refs.fxbFormOne.submit();
            let nextTwo = await this.$refs.fxbFormTwo.submit();
            if (nextOne&&nextTwo){
                this.current += 1
            }
        },
        async nextTwo(){
            this.current = 1
            let next = await this.$refs.fxbFormThree.submit();
            if (next){
                this.current += 1
            }
        },
        backOne(){
            this.current = 1
            this.current -= 1
        },
        backTwo(){
            this.current = 2
            this.current -= 1
        },
        sureRelease(){
            console.log(this.formDataOne);
            console.log(this.formDataTwo);
            uni.redirectTo({
                url:"/pages/payResult/payResult?status=applyTender"
            })
        },
        // 某文件上传结束回调(成功失败都回调)
        onuploadEnd(item) {
            console.log(`${item.name}已上传结束，上传状态=${item.type}`);
            this.fileName = item.name
            // 更新当前状态变化的文件
            this.files.set(item.name,item);

            // 演示上传完成后取服务端数据
            if (item['responseText']) {
                console.log('演示服务器返回的字符串JSON转对象');
                this.files.get(item.name).responseText = JSON.parse(item.responseText);
            }

            // 微信小程序Map对象for循环不显示，所以转成普通数组，不要问为什么，我也不知道
            // #ifdef MP-WEIXIN
            this.wxFiles = [...this.files.values()];
            // #endif

            // 强制更新视图
            this.$forceUpdate();


            // ---可删除--演示判断是否所有文件均已上传成功
            let isAll = [...this.files.values()].find(item=>item.type!=='success');
            if (!isAll) {
                console.log('已全部上传完毕');
            }
            else {
                console.log(isAll.name+'待上传');
            }

        },
        // 上传进度回调
        onprogress(item) {
            // 更新当前状态变化的文件
            this.files.set(item.name,item);

            console.log('打印对象',JSON.stringify(this.files.get(item.name)));
            // 微信小程序Map对象for循环不显示，所以转成普通数组，不要问为什么，我也不知道
            // #ifdef MP-WEIXIN
            this.wxFiles = [...this.files.values()];
            // #endif

            // 强制更新视图
            this.$forceUpdate();

        },
        // 文件选择回调
        onChange(files) {
            // 更新选择的文件
            this.files = files;
            // 强制更新视图
            this.$forceUpdate();

            // 微信小程序Map对象for循环不显示，所以转成普通数组，不要问为什么，我也不知道
            // #ifdef MP-WEIXIN
            this.wxFiles = [...this.files.values()];
            // #endif

            // 演示重新定位组件
            this.$nextTick(()=>{
                console.log('演示重新定位');
                this.$refs.lsjUpload0.show();
            });

        },
        // 手动上传
        upload() {
            // name=指定文件名，不指定则上传所有type等于waiting和fail的文件
            this.$refs.lsjUpload0.upload();
        },
        // 移除某个文件
        clear(name) {
            // name=指定文件名，不传name默认移除所有文件
            this.fileName = ""
            this.$refs.lsjUpload0.clear(name);
        },


        /**
         * 以下为演示
         */
        // DOM重排演示，重排后组件内部updated默认会触发show方法,若特殊情况未能触发updated也可以手动调用一次show()
        // 什么是DOM重排？自行百度去~
        add() {
            this.list.push('DOM重排测试');
        },
        // 切换视图演示，APP端因为是webview，层级比view高，
        // 此时若不希望点击触发选择文件，需要手动调用hide()
        // 手动调用hide后，需要调用show()才能恢复触发面
        onTab(tabIndex) {
            this.$refs.lsjUpload0.hide();

            this.tabIndex = tabIndex;

            this.$refs.lsjUpload0.show();

        },
        open() {
            uni.navigateTo({
                url: '/pages/nvue-demo/nvue-demo'
            });
        }
    }
};
</script>

<style lang="scss" scoped>
</style>