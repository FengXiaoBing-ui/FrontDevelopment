<template>
    <view>
        <u-navbar :autoBack="true" title="企业成员账户管理">
            <view slot="right" @click="managementHandel">
                <view class="text-red">{{ management == true ? "完成" : "管理" }}</view>
            </view>
        </u-navbar>
        <view :style="`margin-top:${CustomBar}px;height:calc(100vh - ${CustomBar}px)`">
            <!--        企业没有添加账户成员-->
            <view v-if="false" class="flex-direction flex align-center justify-center bg-white" style="height:100%">
                <view class="headBox margin-bottom-sm">
                    <image mode="widthFix" src="/static/logo.png" style="width: 100%"></image>
                </view>
                <view class="margin-sm">暂无企业成员账户</view>
                <view class="margin-top-sm">
                    <button class="cu-btn bg-red" @click="pageTo">去添加</button>
                </view>
            </view>
            <!--                    企业有成员  -->
            <view class="margin-lr-xs padding-top-xs personBOX">
                <view v-for="(item,index) in personList " :key="item.id"
                      class="margin-b-xs margin-top-sm bg-white padding-sm">
                    <view class="flex justify-between">
                    <view class="u-border-bottom padding-tb-sm" style="width: 100%">
                        ID:{{ item.id }}
                    </view>
                        <view class="lg text-gray cuIcon-edit"></view>
                    </view>
                    <view :class="management==true?'u-border-bottom ':''" class="padding-tb-sm">
                        <view class="padding-tb-xs">{{ item.unit }}</view>
                        <view class="padding-tb-xs flex align-center">
                            <view>{{ item.name }}</view>
                            <view class="flex align-center margin-left text-blue">
                                <view>{{ item.phone }}</view>
                                <view class="cuIcon-phone margin-left-xs"></view>
                            </view>
                        </view>
                        <view class="flex align-center justify-between text-gray text-sm">
                            账户权限：
                            <view v-for="(el, index) in item.power" :key="index">{{ el }}</view>
                        </view>
                    </view>
                    <u-transition :show="management" class="padding-top-sm" mode="fade" duration="1000">
                        <view class="flex justify-end align-center">
                            <button :class="item.use==true?'bg-red':'bg-gray'" class="cu-btn  sm margin-right-sm"
                                  @click="use(index)">{{ item.use == true ? "禁用" : "启用" }}
                            </button>
                            <button class="cu-btn bg-red sm">删除</button>
                        </view>
                    </u-transition>
                </view>
                <view class="addBtn">
                    <button class="cu-btn bg-red" style="width: 100%" @click="pageTo">添加子账户</button>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "personManagementIndex",
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
