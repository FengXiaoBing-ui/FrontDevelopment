<template>
    <view class="content">
        <!--        这是韦丽丹测试-->
        <u-navbar :border="false" :fixed="true" title="申请详情" :autoBack="true"></u-navbar>
        <view class="padding-bottom" :style="'margin-top:'+ (CustomBar*2) + 'rpx;padding-bottom:'+(status==1?'150rpx':'10px')">
            <!-- 主内容-->
            <fxb-status-card :status="localStatus.status" :tips="localStatus.tips"
                             :icon="localStatus.icon"></fxb-status-card>
            <view v-if="status==2||status==3||status==4" class="whiteBoxShadow margin-bottom-sm" style="transform: translateY(-20rpx)">
                <boxTitle title="入场信息"></boxTitle>
                <view v-if="status==3||status==4" class="flex align-stretch justify-between margin-top-sm">
                    <view class="text-gray">入场状态</view>
                    <view :class="`${status==3&&state==1?'text-red':''}`">{{ status == 3&&state==0 || status == 4 ? "已入场" : "未入场" }}</view>
                </view>
                <view v-if="status==3&&state==0||status==4" class="flex align-stretch justify-between margin-top-sm">
                    <view class="text-gray">入场时间</view>
                    <view>2022-08-31 12:30</view>
                </view>
                <view v-if="status==2" class="flex align-stretch justify-between margin-top-sm">
                    <view class="text-gray">距离品鉴会开始剩余</view>
                    <view class="text-red">23小时26分钟</view>
                </view>
                <view v-if="status==2" class="flex align-stretch justify-between margin-top-sm">
                    <view class="text-gray">我的入场编码</view>
                    <view class="text-orange">568124</view>
                </view>
                <view v-if="status==2" class="margin-top-sm">
                    <view class="flex justify-center">
                        <w-qrcode :options="options"></w-qrcode>
                    </view>
                    <view class="flex justify-center">
                        <text>入场二维码</text>
                    </view>
                </view>
                <view v-if="status==2" class="padding radius text-sm margin-top-sm text-red" style="line-height: 20px;background-color: rgba(255, 0, 0, 0.05);">
                    温馨提示： <br>
                    1、入场时请出示二维码，待举办方扫码后方可入场；<br>
                    2、请按规定时间提前入场，超时最多半小时，入场二维码 失效请合理安排入场时间；
                </view>
                <view v-if="status==3&&state==1" class="padding radius text-sm margin-top-sm text-red"
                      style="line-height: 20px;background-color: rgba(255, 0, 0, 0.05);">
                    温馨提示： <br>
                    您已超时60分钟未入场，入场二维码失效，您可以联系客服 或申请退款
                </view>
                <view v-if="status==2||(status==3&&state==1)" class="flex justify-end margin-top">
                    <button class="cu-btn bg-white border"
                            @click="gotoPath('pages/admin/tastingMeeting/participatingTastingMeeting/applyForRefund')">
                        申请退款
                    </button>
                    <button class="cu-btn bg-white border margin-left-sm">联系客服</button>
                </view>
            </view>
            <!--品鉴会信息-->
            <view class="whiteBoxShadow"  style="transform: translateY(-20rpx)">
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
            <view class="whiteBoxShadow">
                <boxTitle title="报名费用"></boxTitle>
                <view class="flex align-stretch justify-between">
                    <view class="text-gray">参会费</view>
                    <view class="text-red">￥500.00</view>
                </view>
                <view class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">优惠</view>
                    <view v-if="status==1" class="flex align-center">
                        <view>￥50.00</view>
                        <view class="text-sm radius text-red margin-lr-sm" style="padding: 2px;border: 1px red solid">
                            优惠劵
                        </view>
                        <view class="cuIcon-right"></view>
                    </view>
                    <view v-if="status==2||status==3&&(state==0||state==1)">无</view>
                </view>
                <view class="margin-tb u-border-top"></view>
                <view class="flex align-center justify-between">
                    <view><b>费用合计</b></view>
                    <view class="text-red">￥2030.00</view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="报名信息"></boxTitle>
                <view class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">报名人</view>
                    <view>张刚</view>
                </view>
                <view class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">联系电话</view>
                    <view>18224805900</view>
                </view>
                <view class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">公司名称</view>
                    <view>好酒选科技有限公司</view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="订单信息"></boxTitle>
                <view class="flex align-center justify-between">
                    <view class="text-gray">报名编号</view>
                    <view>20220901001</view>
                </view>
                <view class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">报名时间</view>
                    <view>2022-08-31 12:30</view>
                </view>
                <view v-if="status==2||status==3||status==4||status==5"
                      class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">支付状态</view>
                    <view>已支付</view>
                </view>
                <view v-if="status==2||status==3||status==4"
                      class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">支付金额</view>
                    <view>￥450.00</view>
                </view>
                <view v-if="status==2||status==3||status==4"
                      class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">支付方式</view>
                    <view>微信支付</view>
                </view>
                <view v-if="status==2||status==3||status==4"
                      class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">支付时间</view>
                    <view>2022-08-31</view>
                </view>
                <view v-if="status==4" class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">入场时间</view>
                    <view>2022-08-31</view>
                </view>
                <view v-if="status==4" class="flex align-center padding-top-sm justify-between">
                    <view class="text-gray">结束时间</view>
                    <view>2022-08-31</view>
                </view>
            </view>
        </view>
        <view v-if="status == 1" class="botBtn bg-white padding flex align-center
        justify-between">
            <view>
                <view class="flex">合计：
                    <text class="text-red">￥518.00</text>
                </view>
            </view>
            <view>
                <button class="cu-btn bg-gray radius ">取消支付</button>
                <button @click="gotoPath('/pages/admin/tastingMeeting/participatingTastingMeeting/payment?status=1')"
                        class="cu-btn bg-red radius  margin-left-sm">确认支付
                </button>
            </view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbImage from "/src/components/fxb/fxb-image";
import { mapState } from "vuex";
import fxbStatusCard from "/src/components/fxb/fxb-status-card";
export default {
    name: "particpatingDetails",
    components: {
        boxTitle,
        fxbImage,
        fxbStatusCard
    },
    data() {
        return {
            status: 0,
            state:0,
            options: {
                code: "https://qm.qq.com/cgi-bin/qm/qr?k=LKqML292dD2WvwQfAJXBUmvgbiB_TZWF&noverify=0",// 生成二维码的值
                size: 460// 460代表生成的二维码的宽高均为460rpx
            }
        };
    },
    onLoad(option) {
        this.status = option.status;
        this.state = option.state;
    },
    computed: {
        ...mapState("index", ["agentAndService"]),
        //agentAndService：服务商和代理商的状态 false:服务商,true:代理商
        localStatus() {
            const tempArr = ["待支付", "待开始", "进行中","已发布"];
            const tipsArr = ["剩余23小时58分", "剩余时间：15小时23分钟", "品鉴会正在进行中",  "代理政策已发布"];
            const iconArr = ["daishenhe", "daikaishi", "jinhangzhong", "a-zu699"];
            return {
                status: tempArr[this.status - 1],
                tips: tipsArr[this.status - 1],
                icon: iconArr[this.status - 1]
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
    border-radius: 6upx;
    padding-left: 20upx;
    margin-top: 20upx;
    padding-top: 20upx;
    padding-bottom: 20upx;
}

.process {
    width: 250px;
    margin-left: 40upx;
}

.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>