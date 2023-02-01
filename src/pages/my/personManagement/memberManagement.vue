<template>
    <view>
        <u-navbar :autoBack="true" title="企业成员账户管理"></u-navbar>
        <view :style="`margin-top:${CustomBar}px;height:calc(100vh - ${CustomBar}px)`">
            <!--        企业没有添加账户成员-->
            <view class="flex-direction flex align-center justify-center bg-white" style="height:100%">
                <view class="headBox margin-bottom-sm">
                    <image mode="widthFix" src="/static/logo.png" style="width: 100%"></image>
                </view>
                <view class="margin-sm">暂无企业成员账户</view>
                <view class="margin-top-sm">
                    <button class="cu-btn bg-red" @click="pageTo">去添加</button>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "memberManagement",
    data: function() {
        return {
            management: false,
            personList: [
                {
                    id: "45411545856",
                    name: "李铁柱",
                    phone: "18852346548",
                    power: ["添加订单", "查看订单", "修改订单", "签订合同"],
                    unit: "贵阳观山湖区金阳永辉超市店",
                    use: false
                }, {
                    id: "4522545856",
                    name: "李铁柱",
                    phone: "18852346548",
                    power: ["添加订单", "查看订单", "修改订单", "签订合同"],
                    unit: "贵阳观山湖区金阳永辉超市店",
                    use: true
                }, {
                    id: "4533545856",
                    name: "李铁柱",
                    phone: "18852346548",
                    power: ["添加订单", "查看订单", "修改订单", "签订合同"],
                    unit: "贵阳观山湖区金阳永辉超市店",
                    use: true
                }
            ]
        };
    },
    methods: {
        pageTo() {
            uni.navigateTo({
                url: "pages/my/personManagement/addPerson"
            });
        },
        use(index) {
            this.personList[index].use = !this.personList[index].use;
        },
        managementHandel() {
            this.management = !this.management;
        }
    }
};
</script>

<style lang="scss" scoped>
.headBox {
    width: 150rpx;
    height: 150rpx;
    border-radius: 50%;
    padding: 15rpx;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.personBOX {
    .addBtn {
        position: fixed;
        bottom: 2vh;
        left: 2%;
        width: 96%;
    }
}

</style>
