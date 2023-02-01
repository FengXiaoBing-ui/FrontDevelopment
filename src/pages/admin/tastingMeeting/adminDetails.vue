<template>
    <view class="content">
        <!--        这是韦丽丹测试-->
        <u-navbar :border="false" :fixed="true" title="申请详情" :autoBack="true"></u-navbar>
        <view class="padding-tb"
              :style="'margin-top:'+ (CustomBar) + 'rpx;padding-bottom:'+(!agentAndService&&listStatus==1?'110rpx':'10px')">
            <!-- 主内容-->
            <fxb-status-card :status="localStatus.listStatus" :tips="localStatus.tips"
                             :icon="localStatus.icon"></fxb-status-card>
            <view v-if="listStatus==2" class="whiteBoxShadow text-red margin-bottom-sm"
                  style="transform: translateY(-20rpx)">
                因个人原因导致的无法退款
            </view>
            <view v-if="agentAndService &&listStatus==2" class="whiteBoxShadow margin-bottom-lg flex">
                <view class="flex w50 justify-center u-border-right">
                    <view class="cuIcon-profile text-orange"></view>
                    <text class="margin-left-sm">平台介入</text>
                </view>
                <view class="flex w50 justify-center">
                    <view class="cuIcon-service text-red"></view>
                    <text class="margin-left-sm">联系客服</text>
                </view>
            </view>
            <!--            <view class="whiteBoxShadow">-->
            <!--                <view class="flex justify-between align-center">-->
            <!--                    <view class="text-gray">{{ agentAndService ? "审核状态" : "申请状态" }}</view>-->
            <!--                    <view-->
            <!--                        :class="`${listStatus == 1 ?'text-orange' : listStatus == 2 ?'text-red' : listStatus == 3?'text-green':listStatus == 4?'text-blue':''}`"-->
            <!--                    >-->
            <!--                        {{ listStatus == 1 ? "待审核" : listStatus == 2 ? "未通过" : listStatus == 3 ? "进行中" : listStatus == 4 ? "已结束" : ""-->
            <!--                        }}-->
            <!--                    </view>-->
            <!--                </view>-->

            <!--                <template v-if="listStatus==2">-->
            <!--                    <view class="flex justify-between align-center margin-top-sm">-->
            <!--                        <view class="text-gray">驳回原因</view>-->
            <!--                        <view>这是未通过原因说明</view>-->
            <!--                    </view>-->
            <!--                    &lt;!&ndash;                    <view class="flex justify-between align-center margin-top-sm">&ndash;&gt;-->
            <!--                    &lt;!&ndash;                        <view class="text-gray">审核人</view>&ndash;&gt;-->
            <!--                    &lt;!&ndash;                        <view>张东</view>&ndash;&gt;-->
            <!--                    &lt;!&ndash;                    </view>&ndash;&gt;-->
            <!--                    <view class="flex justify-between align-center margin-top-sm">-->
            <!--                        <view class="text-gray">审核时间</view>-->
            <!--                        <view>2022-08-30 12:23:12</view>-->
            <!--                    </view>-->
            <!--                </template>-->
            <!--            </view>-->
            <view v-if="(listStatus == 3||listStatus == 4)"
                  class="whiteBoxShadow margin-bottom-sm" style="transform: translateY(-20rpx)">
                <boxTitle title="进度查询"></boxTitle>
                <u-steps v-if="listStatus==3" :current="1" dot activeColor="#F37B1D ">
                    <u-steps-item title="商家同意"></u-steps-item>
                    <u-steps-item title="银行处理"></u-steps-item>
                    <u-steps-item title="退款成功"></u-steps-item>
                </u-steps>
                <u-steps v-if="listStatus==4" :current="2" dot activeColor="#F37B1D ">
                    <u-steps-item title="商家同意"></u-steps-item>
                    <u-steps-item title="银行处理"></u-steps-item>
                    <u-steps-item title="退款成功"></u-steps-item>
                </u-steps>
                <view class="cu-btn bg-red w100 radius margin-top">查看钱款去向</view>
            </view>
            <view class="whiteBoxShadow" style="transform: translateY(-20rpx)">
                <boxTitle title="申请资料"></boxTitle>

                <view class="flex justify-between margin-bottom-sm">
                    <view class="text-gray">申请企业</view>
                    <view>烟酒店</view>
                </view>
                <view class="margin-bottom-sm">
                    <view class="flex justify-between">
                        <view class="text-gray">申请人</view>
                        <view>张东</view>
                    </view>
                </view>
                <view class="margin-bottom-sm">
                    <view class="">
                        <view class="text-gray margin-bottom-sm">餐厅门头照</view>
                        <image style="width: 150rpx;height: 150rpx" v-for="(item,index) in list" :key="index"
                               :src="$config.IMG_SERVER+item.img"></image>
                    </view>
                </view>
                <view class="margin-bottom-sm">
                    <view class="justify-between ">
                        <view class="text-gray margin-bottom-sm">开瓶图片及视频</view>
                        <image style="width: 150rpx;height: 150rpx" v-for="(item,index) in list" :key="index"
                               :src="$config.IMG_SERVER+item.img"></image>
                    </view>
                </view>
                <view class="">
                    <view class=" justify-between">
                        <view class="text-gray margin-bottom-sm">餐桌摆拍及图片</view>
                        <image style="width: 150rpx;height: 150rpx" v-for="(item,index) in list" :key="index"
                               :src="$config.IMG_SERVER+item.img"></image>
                    </view>

                </view>
            </view>
            <view class="whiteBoxShadow">
                <boxTitle title="报销合同商品"></boxTitle>
                <view class="flex justify-between align-center">
                    <text class="text-bold">东方国宾·尊致酒500ml酱香型合同..</text>
                    <text class="bg-gray light radius padding-xs">合同详情</text>
                </view>
                <view class="flex justify-between text-sm margin-top-sm">
                    <view>
                        <view class="flex">结算方式：
                            <text>先款后货</text>
                        </view>
                        <view class="margin-top-sm">报销费用：
                            <text class="text-red">￥1500.00</text>
                            /场
                        </view>
                    </view>
                    <view>
                        <view class="flex">合同编号：
                            <text>155678458248525</text>
                        </view>
                        <view class="flex margin-top-sm">报销商品：
                            <text>2瓶/场</text>
                        </view>
                    </view>
                </view>
                <view class="u-border-bottom margin-tb"></view>
                <view v-for="item in 2"
                      :key="item">
                    <view class="flex align-start margin-top">
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
                                    <view>￥365.00</view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="报销费用"></boxTitle>
                <view class="flex align-stretch justify-between">
                    <view class="text-gray">商品数量</view>
                    <view>2瓶</view>
                </view>
                <view class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">商品金额</view>
                    <view>￥530.00</view>
                </view>
                <view class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">餐费金额</view>
                    <view>￥1500.00</view>
                </view>
                <view class="margin-tb u-border-top"></view>
                <view class="flex align-center justify-between">
                    <view><b>费用合计</b></view>
                    <view class="text-red">￥2030.00</view>
                </view>
            </view>
            <!--品鉴会信息-->
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="品鉴会信息"></boxTitle>
                <view class="flex align-stretch justify-between margin-top-sm">
                    <view class="text-gray">品鉴会名称</view>
                    <view>2022观山湖区白酒品鉴会</view>
                </view>
                <view class="flex align-stretch justify-between margin-top-sm">
                    <view class="text-gray">举办地址</view>
                    <view>贵州省贵阳市观山湖黔灵山路</view>
                </view>
                <view class="flex align-stretch justify-between margin-top-sm">
                    <view class="text-gray">详细地址</view>
                    <view>世纪金源大酒店</view>
                </view>
                <view class="flex align-stretch justify-between margin-top-sm">
                    <view class="text-gray">报名名额</view>
                    <view class="text-red">￥256.00</view>
                </view>
                <view class="flex align-stretch justify-between margin-top-sm">
                    <view class="text-gray">参会人数</view>
                    <view>200人</view>
                </view>
                <view class="flex align-stretch justify-between margin-top-sm">
                    <view class="text-gray">举办日期</view>
                    <view>2022-08-31 12:30~17:30</view>
                </view>
                <!--举办流程-->
                <view class="margin-top-sm">
                    <text class="text-gray">举办流程</text>
                    <view class="red-Bacground-Box">
                        <text class="text-red text-bold">流程一</text>
                        <text class=" process">签到: 15:00~15:30嘉宾签到。</text>
                    </view>
                    <view class="red-Bacground-Box">
                        <text class="text-red text-bold">流程二</text>
                        <text class=" process">进场分组：2-3人一组，方便交流、互 动、PK。</text>
                    </view>
                    <view class="red-Bacground-Box">
                        <text class="text-red text-bold">流程三</text>
                        <text class=" process">开场：破冰游戏；</text>
                    </view>
                    <view class="red-Bacground-Box">
                        <text class="text-red text-bold">流程四</text>
                        <text class=" process">现场产品讲解+现场有奖问答互动（奖两 名）；</text>
                    </view>
                    <view class="red-Bacground-Box">
                        <text class="text-red text-bold">流程五</text>
                        <text class=" process">观看产品视频+现场有奖问答互动（奖一 名）；</text>
                    </view>
                </view>
            </view>
            <!--服务商支持-->
            <!--            <view class="whiteBoxShadow margin-top-sm">-->
            <!--                <boxTitle title="服务商支持"></boxTitle>-->
            <!--                <view class="flex align-stretch justify-between margin-top-sm">-->
            <!--                    <view class="text-gray">是否需要服务商支持</view>-->
            <!--                    <view>是</view>-->
            <!--                </view>-->
            <!--                <view class="flex align-stretch justify-between margin-top-sm">-->
            <!--                    <view class="text-gray">支持人数</view>-->
            <!--                    <view>20人</view>-->
            <!--                </view>-->
            <!--                <view class="flex align-stretch justify-between margin-top-sm">-->
            <!--                    <view class="text-gray">备注信息</view>-->
            <!--                    <input type="text" placeholder="这是备注的信息" style="width: 100px;font-size: 14px">-->
            <!--                </view>-->
            <!--            </view>-->
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="申请信息"></boxTitle>
                <view class="flex align-center justify-between">
                    <view class="text-gray">申请编号</view>
                    <view>20220901001</view>
                </view>

                <view class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">申请时间</view>
                    <view>2022-08-31 12:30</view>
                </view>
                <view class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">申请人</view>
                    <view>张三</view>
                </view>
                <view v-if="(listStatus == 2||listStatus == 3||listStatus == 4)"
                      class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">审核时间</view>
                    <view>2022-08-31 12:30</view>
                </view>
                <view v-if="!agentAndService&&listStatus == 2" class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">审核人</view>
                    <view>张三</view>
                </view>
                <view v-if="(listStatus == 4)" class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">完成时间</view>
                    <view>2022-08-31 12:30</view>
                </view>
            </view>

        </view>
        <view v-if="!agentAndService&&listStatus == 1" class="botBtn bg-white padding-xs flex align-center">
            <button @click="gotoPath('/pages/admin/contractDeliverGoods/toExamineFailed')"
                    class="cu-btn bg-gray radius flex-sub">驳回申请
            </button>
            <button @click="gotoPath('/pages/admin/tastingMeeting/participatingTastingMeeting/payment?status=2')"
                    class="cu-btn bg-red radius flex-sub margin-left-sm">确认报销
            </button>
        </view>

    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbImage from "/src/components/fxb/fxb-image";
import { mapState } from "vuex";
import fxbStatusCard from "/src/components/fxb/fxb-status-card";

export default {
    name: "adminDetails",
    components: {
        boxTitle,
        fxbImage,
        fxbStatusCard
    },
    data() {
        return {
            status: 0,
            listStatus: 0,
            list: [
                {
                    img: "/productDetails/Slice%202.png"
                }, {
                    img: "/productDetails/Slice%202.png"
                }, {
                    img: "/productDetails/Slice%202.png"
                }, {
                    img: "/productDetails/Slice%202.png"
                }
            ]
        };
    },
    onLoad(option) {
        this.status = option.status;
        this.listStatus = option.listStatus;
    },
    computed: {
        ...mapState("index", ["agentAndService"]),
        //agentAndService：服务商和代理商的状态 false:服务商,true:代理商
        localStatus() {
            const tempArr = ["待审核", "未通过", "进行中", "已完成"];
            const tipsArr = ["剩余23小时58分", "已驳回您品鉴会申请", "您已同意报销申请，正在处理", "您的报销申请已处理完成"];
            const iconArr = ["daishenhe", "daikaishi", "jinhangzhong", "a-zu699"];
            return {
                listStatus: tempArr[this.listStatus - 1],
                tips: tipsArr[this.listStatus - 1],
                icon: iconArr[this.listStatus - 1]
            };
        }
    },
    methods: {
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.red-Bacground-Box {
    display: flex;
    background-color: rgba(255, 0, 0, 0.05);
    border-radius: 6 upx;
    padding-left: 20 upx;
    margin-top: 20 upx;
    padding-top: 20 upx;
    padding-bottom: 20 upx;
}

.process {
    width: 250px;
    margin-left: 40 upx;
}

.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>