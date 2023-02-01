<template>
    <view>
        <u-navbar :autoBack="true" title="合同商品列表"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`" class="bg-white padding-tb">
            <view class="padding-lr">
                <u--input
                    border="false"
                    class="bg-gray"
                    placeholder="输入代理商名称、手机号进行搜索"
                    prefixIcon="search"
                    prefixIconStyle="font-size: 22px;color: #909399"
                ></u--input>
            </view>
        </view>
        <view class="margin-tb padding-lr">
            <view v-for="item in Contract" :key="item.id" class="whiteBoxShadow margin-tb-sm "
                  @click="selectGood">
                <view class="flex align-center w100 justify-between">
                    <view class="text-bold">{{ item.name }}</view>
                    <u-tag plain plainFill size="mini"  shape="circle" text="合同详情"></u-tag>
                </view>
                <view class="flex align-center justify-start margin-tb-sm">
                    <view class="text-gray">结算方式：{{ item.payWay }}</view>
                    <view class="text-gray margin-left-xl">合同编号：{{ item.id }}</view>
                </view>
                <view>
                    <view v-for="(el,index) in item.goodsList" :key="index" class="">
                        <view class="u-border-bottom margin-tb"></view>
                        <goodsInfoCard
                            agent-price="365"
                            goods-name="飞天茅台53°瓶装酱香型 500ml"
                            goods-type="酱香型"
                            goodsDegrees="49°"
                            goodsVolume="500ml"
                            img-url="/productDetails/Slice%201.png"
                        ></goodsInfoCard>
                        <view class="flex align-center justify-between">
                            <view>剩余瓶数：
                                <text class="text-red">26156</text>
                            </view>
                            <view class="cu-btn bg-red text-sm radius" style="height: 27px">选择商品</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import goodsInfoCard from "/src/components/erp/goodsInfoCard";

export default {
    name: "selectGoods",
    onLoad(option) { //option为object类型，会序列化上个页面传递的参数
        this.type = option.type;
    },
    components: {
        goodsInfoCard
    },
    data() {
        return {
            type: "",
            Contract: [
                {
                    name: "东方国宾·遵致酒代理合同",
                    id: "0002524548541",
                    payWay: "现结",
                    goodsList: [
                        {}, {}
                    ]
                },
                {
                    name: "东方国宾·遵致酒代理合同",
                    id: "0002354548541",
                    payWay: "现结",
                    goodsList: [
                        {}, {}
                    ]
                },
                {
                    name: "东方国宾·遵致酒代理合同",
                    id: "0002544548541",
                    payWay: "现结",
                    goodsList: [
                        {}, {}
                    ]
                }

            ],
            List: [
                {
                    goodsID: "4837487",
                    goods: "飞天茅台53°瓶装酱香型 500ml",
                    goodsType: "酱香型",
                    degrees: "53°", //度数
                    volume: "500ml",//容量
                    price: "448",
                    gPrice: "365"
                },
                {
                    goodsID: "4871487",
                    goods: "飞天茅台53°瓶装酱香型 500ml",
                    goodsType: "酱型",
                    degrees: "53°", //度数
                    volume: "1000ml",//容量
                    price: "448",
                    gPrice: "365"
                },
                {
                    goodsID: "4874487",
                    goods: "飞天茅台53°瓶装酱香型 500ml",
                    goodsType: "酱香型",
                    degrees: "53°", //度数
                    volume: "500ml",//容量
                    price: "448",
                    gPrice: "365"
                }
            ]
        };
    },
    methods: {
        selectGood(option) {
            if (this.type === "policy") {
                uni.navigateTo({
                    url: "pages/admin/dataForService/selectPolicy?id=123"
                });
            } else {
                uni.navigateBack({
                    delta: 1
                });
                let pages = getCurrentPages()
                let prevPage = pages[pages.length -2]
                prevPage.$vm.getGoodsInfo({ id:'18594' })
            }

        }
    }
};
</script>

<style lang="scss" scoped>
.nowrap {
    white-space: nowrap;
}

</style>