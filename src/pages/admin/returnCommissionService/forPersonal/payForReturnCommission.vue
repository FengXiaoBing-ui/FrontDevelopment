<template>
    <view>
        <u-navbar :autoBack="true" title="确认返佣"></u-navbar>
        <view :style="`margin-top:${(CustomBar+10)*2}rpx;padding-bottom:40rpx`">
            <view class="whiteBoxShadow flex justify-between align-center margin-lr-sm">
                <view class="text-gray">状态</view>
                <view class="text-red">待审核</view>
            </view>
            <view class="margin-xs whiteBoxShadow margin-lr-sm">
                <boxTitle right-text="查看订单记录" right-text-class="cu-btn sm bg-white u-border radius" title="九月订单统计"></boxTitle>
                <goodsInfoCard agent-price="365"
                               goods-name="飞天茅台53°瓶装酱香型 500ml"
                               goods-type="酱香型"
                               goodsDegrees="49"
                               goodsVolume="500"
                               img-url="/productDetails/Slice%201.png"
                ></goodsInfoCard>
                <view class="padding-top-sm flex justify-between align-center">
                    <view class="flex-twice text-center">
                        <view class="text-bold text-lg text-cut">2489</view>
                        <view class="text-gray margin-top-sm">成交数量</view>
                    </view>
                    <view class="flex-treble text-center">
                        <view class="text-bold text-lg text-cut">154891.00</view>
                        <view class="text-gray margin-top-sm">金额总量</view>
                    </view>
                    <view class="flex-twice text-center">
                        <view class="text-bold text-lg text-cut">5489.00</view>
                        <view class="text-gray margin-top-sm">返佣金额</view>
                    </view>
                </view>
            </view>
            <view class="margin-sm whiteBoxShadow">
                <boxTitle title="返佣信息"></boxTitle>
                <view v-for="(item,index) in (status==0?applyInfo0:status==1?applyInfo1:applyInfo2)" :key="index"
                      class="flex margin-tb-sm justify-between align-center">
                    <view class="text-gray">{{ item.label }}</view>
                    <view>{{ item.value }}</view>
                </view>
                <view class="padding-top margin-top u-border-top flex align-center justify-between">
                    <view class="text-bold"> 返佣合计</view>
                    <view class="text-red">{{ count }}</view>
                </view>
            </view>
            <view class="margin-sm whiteBoxShadow">
                <boxTitle title="申请信息"></boxTitle>
                <view class="flex justify-between">
                    <view>申请人</view>
                    <view>王晓刚(合作伙伴)</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view>申请时间</view>
                    <view>2022-08-31 12:56:12</view>
                </view>
            </view>
        </view>
        <view class="foot padding-xs bg-white flex">
            <button @click="gotoReject" class="cu-btn bg-gray radius flex-sub">驳回申请</button>
            <button @click="gotoPay" class="cu-btn bg-red radius flex-sub margin-left-sm">审核通过</button>
        </view>
        <view class="padding"></view>
    </view>
</template>

<script>
import goodsInfoCard from "/src/components/erp/goodsInfoCard";
import contractCard from "/src/pages/admin/components/contractCard";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import paySelect from "/src/components/fxb-pay-select/paySelect";

export default {
    name: "returnAdmin",
    components: {
        contractCard, boxTitle, paySelect,goodsInfoCard
    },
    onLoad(option) {
       if(option.status){
           this.status = option.status;
       }
    },
    computed: {
        count() {
            return this.status == 1 ? "480瓶(价值¥70000.00)" : this.status == 0 ? "¥2030.00" : "7000000积分(价值¥70000.00)";
        }
    },
    data() {
        return {
            status: "0",//012  现金物品积分
            applyInfo0: [
                { label: "返佣方式", value: "商品" },
                { label: "结算方式", value: "月结" },
                { label: "返佣时段", value: "2022年9月订单" },
                { label: "返佣金额", value: "¥8490.00" },
            ],
            applyInfo1: [
                { label: "返佣方式", value: "商品" },
                { label: "结算方式", value: "月结" },
                { label: "返佣时段", value: "2022年9月订单" },
                { label: "返佣金额", value: "¥8490.00" },
            ],
            applyInfo2: [
                { label: "返佣方式", value: "商品" },
                { label: "结算方式", value: "月结" },
                { label: "返佣时段", value: "2022年9月订单" },
                { label: "返佣金额", value: "¥8490.00" },
            ]


        };
    },
    methods:{
        gotoPay(){
            uni.navigateTo({
                url:"/pages/admin/returnCommissionService/forAgent/sureBackGoods?status=0"
            })
        },
        gotoReject() {
            uni.navigateTo({
                url:"/pages/admin/contractDeliverGoods/toExamineFailed"
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.foot {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>