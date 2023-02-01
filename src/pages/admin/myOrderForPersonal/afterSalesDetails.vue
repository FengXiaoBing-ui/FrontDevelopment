<template>
    <view>
        <u-navbar :autoBack="true" title="选择商品"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`" class="padding-sm">
            <view class="whiteBoxShadow">
                <view class="flex align-center justify-between">
                    <text class="text-gray">售后状态</text>
                    <text :style="`${status==0||status==1?'text-orange':status==2||status==3?'text-red':status==4||status==5||status==6||status==7||status==8?'text-blue':status==9?'text-green':''}}
                    }`" class="text-orange">
                        <!--status:0、待审核（退款）1、待审核（退货退款） 2、未通过（退款） 3、未通过（退货退款） 4、进行中（退款） 5、进行中（退货退款：预约取件
                        6、进行中（退货退款：待取件）7、进行中（退货退款：待收货）8、进行中（退货退款：已签收）9、已完成（退款）10、已完成（退货退款）-->
                        {{ status == 0 || status == 1 ? "待商家处理" : status == 2 || status == 3 ? "未通过" : status == 4 || status == 5 || status == 6 || status == 7 || status == 8 ? "进行中" : status == 9 || status == 10 ? "已完成" : ""
                        }}
                    </text>
                </view>
                <view v-if="status==2||status==3">
                    <view class="flex align-center justify-between margin-top-sm">
                        <text class="text-gray">未通过原因</text>
                        <text>照片不清晰</text>
                    </view>
                    <view class="flex align-center justify-between margin-top-sm">
                        <text class="text-gray">审核时间</text>
                        <text>2022-08-30 12:23:56</text>
                    </view>
                </view>
            </view>
            <view v-if="status==4||status==8||status==9||status==10"
                class="whiteBoxShadow margin-top-sm">
                <view class="flex justify-between align-center">
                    <view>
                        <view class="text-red text-bold">{{status==4||status==8?"退款中":"已退款"}}</view>
                        <view class="margin-top-sm">2022-08-30 12:30</view>
                    </view>
                    <view class="text-red text-bold">￥516.00</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view>退回账号</view>
                    <view>(微信帐号:258452144)</view>
                </view>
                <view class="cu-btn bg-red w100 radius margin-top">查看钱款去向</view>
                <!--                <button class="bg-red w100">查看钱款去向</button>-->
            </view>
            <view v-if="status==6||status==7||status==8||status==10" class="whiteBoxShadow margin-top-sm">
                <boxTitle title="物流信息"></boxTitle>
                <view class="flex justify-between margin-top-sm">
                    <view>物流信息</view>
                    <view>{{status==6?"待取件":status==7?"待收货":status==8||status==10?"已签收":""}}</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view>物流单号</view>
                    <view>H54575457542635</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view>预约时间</view>
                    <view>2022-08-30 12:30</view>
                </view>
                <view v-if="status==6" class="flex justify-between margin-top-sm">
                    <view>取件码</view>
                    <view class="text-yellow text-bold">58-6541</view>
                </view>
                <view class="flex justify-end margin-top-sm">
                    <view @click="gotoPath('/pages/index/applicationSample/expressDetailsIndex')" class="cu-btn border bg-white radius">查看物流</view>
                </view>
            </view>
            <view v-if="status==5" class="whiteBoxShadow margin-top-sm">
                <text class="text-yellow text-sm">商家已同意您的退货退款申请，请假商品寄往下方地址</text>
                <view class="flex  align-center margin-top-sm">
                    <view> 张晓丹</view>
                    <view class="flex margin-left-sm">
                        <view class="cuIcon-mobilefill text-yellow"></view>
                        <text class="margin-left-sm">18926726786</text>
                    </view>
                </view>
                <view class="text-bold margin-top-sm">贵州省贵阳市观山湖区德福中心A3栋6楼10号</view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="售后信息"></boxTitle>
                <view class="flex justify-between">
                    <view>是否收货</view>
                    <view>{{ status == 0 || status == 2 || status == 4 || status == 9 ? "未收货" : "已收货" }}</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view>售后类型</view>
                    <view>{{ status == 0 || status == 2 || status == 4 || status == 9 ? "退款" : "退货退款" }}</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view>退款原因</view>
                    <view>商品损坏</view>
                </view>
                <view class="margin-top-sm flex">
                    <fxbImage width="120" height="120" src="/productDetails/Slice%201.png"
                              mode="aspectFill"></fxbImage>
                    <fxbImage class="margin-left-lg" width="120" height="120" src="/productDetails/Slice%201.png"
                              mode="aspectFill"></fxbImage>
                    <fxbImage class="margin-left-lg" width="120" height="120" src="/productDetails/Slice%201.png"
                              mode="aspectFill"></fxbImage>
                    <fxbImage class="margin-left-lg" width="120" height="120" src="/productDetails/Slice%201.png"
                              mode="aspectFill"></fxbImage>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <view class="flex  align-center">
                    <view> 张晓丹</view>
                    <view class="flex margin-left-sm">
                        <view class="cuIcon-mobilefill text-yellow"></view>
                        <text class="margin-left-sm">18926726786</text>
                    </view>
                </view>
                <view class="flex align-center margin-top-sm">
                    <view class="cuIcon-location text-yellow"></view>
                    <view class="margin-left-sm text-bold">贵州省贵阳市观山湖区德福中心A3栋6楼10号</view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="退款商品"></boxTitle>
                <view class=" margin-top-xs"
                      v-for="item in 2"
                      :key="item">
                    <view class="flex align-start margin-top-lg">
                        <fxbImage width="150" height="150" src="/productDetails/Slice%201.png"
                                  mode="aspectFill"></fxbImage>
                        <view class="margin-left-sm flex flex-treble flex-direction">
                            <view class="text-bold text-lg">东方国宾53°瓶装500ml</view>
                            <view class="text-sm flex align-center margin-top-sm">
                                <text class="text-gray"
                                      style="color: #F37B1D ;background-color:rgba(255,165,0,0.2)">
                                    香型:酱香型
                                </text>
                                <text class="text-gray margin-left-sm"
                                      style="color: #E54D42;background-color:rgba(255,0,0,0.2)">
                                    度数:53°
                                </text>
                                <text class="text-gray margin-left-sm"
                                      style="color: #0081FF;background-color:rgba(0,0,255,0.1)">
                                    容量:500ml
                                </text>
                            </view>
                            <view class="text-sm flex justify-between align-center margin-top-sm">
                                <view class="flex align-center">
                                    <text>代理价：</text>
                                    <view class="text-red">￥365.00</view>
                                </view>
                                <text>2</text>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <view class="flex justify-between">
                    <view class="text-gray">数量合计</view>
                    <view>12</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">合计金额</view>
                    <view>￥3000.00</view>
                </view>
                <view class="u-border-bottom margin-tb-sm"></view>
                <view class="flex justify-between">
                    <view class="text-bold">退款金额</view>
                    <view class="text-red">￥2518.00</view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm bottom-distance">
                <boxTitle title="订单信息"></boxTitle>

                <view class="flex justify-between">
                    <view class="text-gray">订单编号</view>
                    <view class="flex">
                        <view>12789678245721863</view>
                        <view class=" margin-left-sm radius text-sm text-center"
                              style="color: #F37B1D ;background-color:rgba(255,165,0,0.2)">复制
                        </view>
                    </view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">下单时间</view>
                    <view>2022-08-31 12:23</view>
                </view>
            </view>
        </view>
        <view @click="gotoPath('/pages/admin/myOrderForPersonal/appointmentPickup?status=1')"
            v-if="status==5" class="botBtn foot bg-white padding ">
            <view class="cu-btn bg-red radius w100">预约取件</view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbImage from "/src/components/fxb/fxb-image";


export default {
    name: "afterSalesDetails",
    components: {
        boxTitle,
        fxbImage
    },
    data() {
        return {
            // <!--status:0、待审核（退款）1、待审核（退货退款）
            // 2、未通过（退款） 3、未通过（退货退款）
            // 4、进行中（退款） 5、进行中（退货退款：预约取件
            // 6、进行中（退货退款：待取件）7、进行中（退货退款：待收货）
            // 8、进行中（退货退款：已签收）9、已完成（退款）10、已完成（退货退款）-->
            status: ""
        };
    },
    methods: {
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        },
    },
    onLoad(options) {
        this.status = options.status;
    }
};
</script>

<style scoped>
.bottom-distance{
    margin-bottom: 60px;
}
.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>
<!--{{ (item.status == 0 || item.status == 1) ? "待审核" : item.status == 2 ? "未通过" : item.status == 3 ? "进行中" : "已完成"-->
<!--}}-->