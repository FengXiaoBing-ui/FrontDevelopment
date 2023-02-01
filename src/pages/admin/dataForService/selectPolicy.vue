<template>
    <view class="content">
        <!--顶部标题-->
        <u-navbar :autoBack="true" title="选择代理政策"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`" class="padding">
            <view class="boxShadow">
                <goodsInfoCard goods-name="飞天茅台53°瓶装酱香型 500ml"
                               goods-type="酱香型"
                               goodsVolume="500ml"
                               goodsDegrees="49°"
                               img-url="/productDetails/Slice%201.png"
                               agent-price="365"
                ></goodsInfoCard>
                <view class="flex justify-between  margin-top-sm">
                    <view v-for="(item,index) in tag" :key="index" class="text-center">
                        <view>{{ item.title }}：{{ item.num }}</view>
                    </view>
                </view>

            </view>
            <view class="boxShadow margin-top on-button">
                <boxTitle title="代理政策"></boxTitle>
                <u-checkbox-group
                    v-model="radioValue"
                    placement="column"
                >
                    <view v-for="(item,index) in positionArr" :key="index"
                          :class="index>=positionArr.length-1?'':'u-border-bottom'"
                          class="margin-bottom flex justify-between align-start">
                        <u-checkbox
                            :customStyle="{marginBottom: '8px'}"
                            :name="item.id"
                            activeColor="red"
                            shape="circle"
                        >
                        </u-checkbox>
                        <view class="flex-sub">
                            <view class="flex justify-between text-bold">
                                <view>代理政策{{ index + 1 }}({{ item.title }})</view>
                                <view @click="pageTo('pages/admin/policyAgency/policyDetails','id=123')">
                                    <text class="cuIcon-attention margin-right-xs"></text>
                                    <text>政策详情</text>
                                </view>
                            </view>
                            <view class="margin-tb">
                                <text v-for="cityList in item.city" :key="cityList" class="margin-right-xs">{{ cityList
                                    }}
                                </text>
                                <text v-if="item.city" class="cuIcon-triangledownfill"></text>
                            </view>
                            <view v-for="(child,id) in item.cityAgent" :key="id" class="margin-tb">
                                <view class="grid col-4 margin-tb-sm">
                                    <view v-for="(cityAgentChild,cityAgentChildID) in child" :key="cityAgentChildID"
                                          class="text-center">
                                        <view>{{ cityAgentChild }}</view>
                                    </view>
                                </view>
                                <view class="grid col-4 margin-tb-sm text-gray">
                                    <view class="text-center">代理区域</view>
                                    <view class="text-center">发布代理</view>
                                    <view class="text-center">已代理</view>
                                    <view class="text-center">剩余代理</view>
                                </view>
                            </view>
                        </view>
                    </view>

                </u-checkbox-group>
            </view>
        </view>
        <view class="padding fixed bg-white ">
            <view class="cu-btn  w100 bg-red" @click="selectPolicy">保存</view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import goodsInfoCard from "/src/components/erp/goodsInfoCard";
export default {
    name: "agentDetails",
    components: {
        boxTitle,
        goodsInfoCard
    },
    data() {
        return {
            radioValue: [],
            tag: [
                {
                    title: "发布代理",
                    num: "46"
                },
                {
                    title: "已代理",
                    num: "23"
                },
                {
                    title: "剩余代理",
                    num: "23"
                }
            ],
            positionList: [
                {
                    title: "代理区域",
                    num: "贵州省"
                },
                {
                    title: "发布代理",
                    num: "1"
                },
                {
                    title: "已代理",
                    num: "1"
                },
                {
                    title: "剩余代理",
                    num: "0"
                }
            ],
            positionArr: [
                {
                    title: "省级",
                    city: null,
                    id: "0001",
                    cityAgent: [
                        ["贵州省", "1", "1", "0"],
                        ["云南省", "1", "1", "0"]
                    ]
                },
                {
                    title: "市级",
                    city: ["贵州省"],
                    id: "0002",
                    cityAgent: [
                        ["贵阳市", "3", "3", "0"],
                        ["毕节市", "3", "3", "0"]
                    ]
                },
                {
                    id: "0003",
                    title: "区级",
                    city: ["贵州省", "贵阳市"],
                    cityAgent: [
                        ["观山湖区", "1", "3", "0"],
                        ["云岩区", "2", "3", "0"],
                        ["南明区", "3", "2", "0"]
                    ]
                },
                {
                    id: "0004",
                    title: "街道",
                    city: ["贵州省", "贵阳市", "观山湖区"],
                    cityAgent: [
                        ["世纪城街道", "3", "3", "0"],
                        ["长岭街道", "3", "3", "0"]
                    ]
                }
            ]
        };
    },
    methods: {
        selectPolicy() {
            uni.navigateBack({
                delta: 2
            });
            let pages = getCurrentPages()
            let prevPage = pages[pages.length -3]
            prevPage.$vm.getGoodsInfo({ id:'18594' })
        }
    }
};
</script>

<style lang="scss" scoped>
.on-button{
    margin-bottom: 60px;
}
.boxShadow {
    padding: 30rpx 20rpx;
    background: white;
    border-radius: 10rpx;
    box-shadow: 4rpx 4rpx 16rpx #e6dee6;
}

.fixed {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>