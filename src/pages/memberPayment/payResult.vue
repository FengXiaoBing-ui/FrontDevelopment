<template>
    <view class="content bg-white wrap">
        <u-navbar :title="pathArr[status-1].navbar" :autoBack="true"> </u-navbar>
        <view :style="'margin-top:' + CustomBar + 'px'" class="flex flex-direction align-center padding-top-xl">
            <view
                class="flex justify-center align-center margin-top-xl"
                style="background: #8DC63F; width: 100px; height: 100px; border-radius: 50%"
            >
                <u-icon name="checkbox-mark" color="white" size="70"></u-icon>
            </view>
            <view class="text-xl text-bold margin-tb-lg">{{ tipTitle }}</view>
            <text v-if="tipText" class="text-center text-gray padding-lr-xl">{{ tipText }}</text>
            <!--      <view class="shop u-border radius padding margin-tb-lg flex justify-around align-center">-->
            <!--        <image style="width: 80rpx;height: 80rpx;border-radius: 50%" src="https://picsum.photos/seed/picsum/200"></image>-->
            <!--        <text>53°贵州茅台1935酒500ml单瓶装</text>-->
            <!--      </view>-->
            <view style="width: 100%" class="flex flex-direction align-center">
                <button v-if="btn1" @click="btnMethod" style="width: 80%" class="cu-btn bg-red margin-top-xl lg">{{ btn1 }}</button>
                <button v-if="btn2" @click="btnMethodTwo" style="width: 80%" class="cu-btn line-gray lg margin-top-sm">{{ btn2 }}</button>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "payResult",
    components: {},
    data() {
        return {
            reLaunch:false,//使用reLaunch返回首页
            back:false,//使用navigateBack
            status: null,
            tipTitle: "成功",
            tipText: null,
            btn1: null,
            btn2: null,
            path1: "",
            path2: "",
            pathArr:[
                {
                    navbar:"提交成功",
                    title:"提交成功!",
                    text:"您的代理申请已提交成功，等待服务商审核您还可以",
                    btn1:"查看申请详情",
                    btn2:"返回管理首页",
                    btn1Path:"/pages/admin/applicationAgentList/details?status=1",///pages/admin/applicationAgentList/details?status=2
                    btn2Path:"/pages/admin/administrationIndex",///pages/admin/applicationAgentList/index
                    reLaunch:true
                },
                {
                    navbar:"提交成功",
                    title:"提交成功!",
                    text:"您的退货退款申请已提交成功",
                    btn1:"查看详情",
                    // btn2:"返回订单列表",
                    btn2:"返回管理首页",
                    btn1Path:"/pages/admin/afterSales/afterSalesDetails?status=1",
                    // btn2Path:"/pages/admin/orderSample/orderSampleIndex?isAfterSales=true",
                    btn2Path:"/pages/admin/administrationIndex",
                    reLaunch:true
                },
                {
                    navbar:"支付成功",
                    title:"支付成功!",
                    text:"您已支付货款成功，合同自动生效，您可以",
                    btn1:"查看合同发货订单",
                    // btn2:"查看合同详情",
                    btn2:"返回管理首页",
                    btn1Path:"/pages/admin/agentContractDeliverGoods/orderOne",
                    // btn2Path:"/pages/admin/adminContract/contractDetail?status=1&standard=0",
                    btn2Path:"/pages/admin/administrationIndex",
                    reLaunch:true
                },
                {
                    navbar:"会员付费",
                    title:"支付成功!",
                    text:"恭喜您已成功支付，现在您已是好酒选平台会员 现在您可以",
                    btn1:"查看商品详情",
                    // btn2:"查看我的会员",
                    btn2:"返回管理首页",
                    btn1Path:"/pages/hotActivity/activityDetails",
                    // btn2Path:"/pages/my/baseInfo/baseInfoIndex?user=123",
                    btn2Path:"/pages/admin/administrationIndex",
                    reLaunch:true
                },
                {
                    navbar:"支付成功",
                    title:"支付成功!",
                    text:"您的样品订单已支付成功，您可以",
                    btn1:"查看订单详情",
                    // btn2:"返回订单列表",
                    btn2:"返回管理首页",
                    btn1Path:"/pages/index/applicationSample/orderDetailsIndex?status=3",
                    // btn2Path:"/pages/admin/orderSample/orderSampleIndex",
                    btn2Path:"/pages/admin/administrationIndex",
                    reLaunch:true
                },
                {
                    navbar:"支付成功",
                    title:"支付成功!",
                    text:"您的样品订单已支付成功，您可以",
                    btn1:"查看订单详情",
                    // btn2:"返回订单列表",
                    btn2:"返回管理首页",
                    btn1Path:"/pages/index/applicationSample/orderDetailsIndex?status=1",
                    // btn2Path:"/pages/admin/orderSample/orderSampleIndex",
                    btn2Path:"/pages/admin/administrationIndex",
                    reLaunch:true
                },
                {
                    navbar:"支付成功",
                    title:"支付成功!",
                    text:"您的合同发货订单支付成功，您可以",
                    btn1:"查看发货订单详情",
                    btn2:"返回管理首页",
                    btn1Path:"/pages/admin/agentContractDeliverGoods/contractDeliveryDetails?fnStatus=1&status=1&back=true",
                    btn2Path:"/pages/admin/administrationIndex",
                    reLaunch:true
                },
                {
                    navbar:"发货成功",
                    title:"发货成功!",
                    text:"您的订单已发货成功，您您可以",
                    btn1:"查看订单详情",
                    btn2:"返回管理首页",
                    btn1Path:"/pages/admin/agentContractDeliverGoods/sunOrderDetails?fnStatus=1&status=1",
                    btn2Path:"/pages/admin/administrationIndex",
                    reLaunch:true
                },
                {
                    navbar:"提交成功",
                    title:"提交成功!",
                    text:"您的品鉴会报销申请已提交成功，您可以",
                    btn1:"查看申请详情",
                    btn2:"返回管理首页",
                    btn1Path:"/pages/admin/tastingMeeting/details?status=0&back=true",
                    btn2Path:"/pages/admin/administrationIndex",
                    reLaunch:true
                },
                {
                    navbar:"签约成功",
                    title:"支付成功!",
                    text:"您首单合同款已支付成功，还需要缴纳保证金合同生效，您可以",
                    btn1:"云库存发货",
                    btn2:"缴纳保证金",
                    btn1Path:"/pages/admin/cloudInventory/cloudInventoryIndex",
                    btn2Path:"/pages/admin/adminContract/bondPay"
                },
                {
                    navbar:"提交成功",
                    title:"提交成功!",
                    text:"您的返佣申请已提交成功，等待服务商进行审核您可以",
                    btn1:"查看合同发货订单",
                    btn2:"查看合同详情",
                    btn1Path:"",
                    btn2Path:""
                }
            ]
        };
    },
    onLoad(option) {
        this.status = option.status;
        this.changeTip()
    },
    methods: {
        btnMethod() {
            if (this.path1 != "") {
                uni.redirectTo({
                    url: this.path1,
                });
            }
        },
        btnMethodTwo() {
            if (this.path2 != "") {
                if (this.reLaunch){
                    uni.reLaunch({
                        url: this.path2,
                    })
                    return false;
                }
                uni.redirectTo({
                    url: this.path2,
                });
            }
        },
        changeTip() {
            this.tipTitle = this.pathArr[this.status-1].title;
            this.tipText = this.pathArr[this.status-1].text;
            this.btn1 = this.pathArr[this.status-1].btn1;
            this.btn2 = this.pathArr[this.status-1].btn2;
            this.path1 = this.pathArr[this.status-1].btn1Path;
            this.path2 = this.pathArr[this.status-1].btn2Path;
            if (this.pathArr[this.status-1].reLaunch){
                this.reLaunch = true
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.wrap {
    height: 100vh;
}
.shop {
    width: 80%;
}
</style>
