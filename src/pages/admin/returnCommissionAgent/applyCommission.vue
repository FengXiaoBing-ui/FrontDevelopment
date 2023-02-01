<template>
    <view>
        <u-navbar :autoBack="true" title="返佣详情"></u-navbar>
        <view :style="`margin-top:${(CustomBar+10)*2}rpx`">
            <view class="whiteBoxShadow margin-sm">
                <boxTitle title="合同任务"></boxTitle>
                <view class="margin-tb">
                    <contractCard
                        :id="info.id"
                        :contentList="info.contentList"
                        :name="info.name"
                        :pay-way="info.payWay"
                        list>
                    </contractCard>
                </view>
                <view></view>
            </view>
            <view class="whiteBoxShadow margin-sm">
                <boxTitle title="选择返佣方式"></boxTitle>

                <u-radio-group
                    v-model="radio"
                    placement="column"
                >
                    <view class="flex justify-between align-center padding-sm u-border-bottom">
                        <u-avatar src="/static/Icon/index/jiuleiceping.png"></u-avatar>
                        <view class="flex align-top">商品(1000件价值￥5454545.00)
                            <u-radio activeColor="red"
                                     class="padding-left-sm" name="0"
                            >
                            </u-radio>
                        </view>
                    </view>
                    <view class="flex justify-between align-center padding-sm u-border-bottom">
                        <u-avatar src="/static/Icon/index/jiuleiceping.png"></u-avatar>
                        <view class="flex align-top">现金返佣(¥200000.00)
                            <u-radio activeColor="red"
                                     class="padding-left-sm" name="1"
                            >
                            </u-radio>
                        </view>
                    </view>
                    <view class="flex justify-between align-center padding-top-sm padding-lr-sm ">
                        <u-avatar src="/static/Icon/index/jiuleiceping.png"></u-avatar>
                        <view class="flex align-top">返积分(200000积分价值¥200000.00)
                            <u-radio activeColor="red"
                                     class="padding-left-sm" name="2"
                            >
                            </u-radio>
                        </view>
                    </view>
                </u-radio-group>


            </view>
            <view class="padding"></view>
        </view>
        <view class="foot bg-white padding">
            <view class="cu-btn w100 bg-red radius" @click="apply">提交申请</view>
        </view>
    </view>
</template>

<script>
import contractCard from "/src/pages/admin/components/contractCard";
import boxTitle from "/src/pages/agent/components/fxb-box-title";

export default {
    name: "returnAdmin",
    components: {
        contractCard, boxTitle,
    },
    data() {
        return {
            status: "0",
            radio: "",
            info: {
                name: "东方国宾·尊致酒53°瓶装500ml",
                id: "21547789789",
                payWay: "现结",
                contentList: [
                    { lable: "合同任务", value: "300件(1800瓶)" },
                    { lable: "合同金额", value: "￥1223213.00", color: "red" },
                    { lable: "完成进度", value: "已完成" },
                    { lable: "返佣奖励", value: "商品100件(600瓶)", color: "red" }
                ] || [
                    { lable: "目前完成", value: "￥15544.00",color: 'red' },
                    { lable: "合同任务", value: "年销售额壹佰万元整(￥1000000.00)"},
                    { lable: "任务奖励", value: "00件(价值¥200000.00)",color: 'red' },
                ],
                signingTime: "2022-08-30 12:23:23",
                status: "0"//
            }
        };
    },
    methods:{
        apply(){
            uni.redirectTo({
                url:"/pages/payResult/payResult?status=11"
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.foot{
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>