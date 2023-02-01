<template>
    <view class="content bg-gray">
        <!--顶部标题-->
        <u-navbar :autoBack="true" :border="false" :fixed="true"
                  :safeAreaInsetTop="false"
                  :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }">
            <view slot="left" class="u-nav-slot">
                <text class="cuIcon-back" style="font-size: 36rpx"></text>
            </view>
            <view slot="center" class="u-nav-slot">
                <view class="text-lg">商品管理</view>
                <view class="search bg-white" style="width:750rpx">
                    <view class="bg-white padding-lr">
                        <!--产品列表导航-->
                        <u-tabs :list="activityList" activeStyle="font-size:32rpx;color:#000000" :scrollable="false"
                                inactiveStyle="color:#000000" itemStyle="width:33%;height:88rpx;" style="white-space:nowrap;" lineColor="red"
                                @click="getProductList">
                        </u-tabs>
                        <view class="flex align-center margin-tb-xs bg-gray" style="border-radius: 4px">
                            <text class="cuIcon-search text-red"
                                  style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
                            <input
                                class="text-df"
                                confirm-type="search"
                                placeholder="请输入商品名称进行搜索"
                                placeholder-class="text-gray"
                                type="text"
                            />
                        </view>
                    </view>
                    <!--综合筛选-->
                    <view class="filter flex justify-between padding-bottom">
                        <view class="root">
                            <ren-dropdown-filter :defaultIndex="defaultIndex" :filterData="filterData"
                                                 @dateChange="dateChange"
                                                 @ed="ed">
                            </ren-dropdown-filter>
                        </view>
                    </view>
                </view>
            </view>
            <view slot="right" class="u-nav-slot">
                <text @click="handle">草稿箱</text>
            </view>
        </u-navbar>
        <!--内容-->
        <view class="wrap">
            <view class="padding-lr-sm contentBox">
                <!--商品列表-->
                <view class="product margin-top-sm">
                    <view class="flex flex-wrap justify-between">
                        <view v-for="(item,index) in productList" :key="index" class="boxShadow margin-bottom-sm goods-list"
                              style="width: 100%"
                              @click="jumpDetails">
                            <view class="newTitle">
                                <view>新品上市</view>
                            </view>
                            <view class="flex">
                                <twoGoodsInfoCard
                                    :goodsDegrees="item.goodsInfo?item.goodsInfo.controNetContent:''"
                                    :goodsName="item.goodsName"
                                    :goodsType="item.goodsInfo?item.goodsInfo.controAromaticType:'香型'"
                                    :goodsVolume="item.goodsInfo?item.goodsInfo.controAlcohol:''"
                                    :img-url="item.image[0]"
                                    :retailPrice="item.goodsInfo?(item.goodsRetailPrice+''):365"
                                    namePrice="建议零售价:"
                                    namePriceTwo="代理价:"
                                >
                                </twoGoodsInfoCard>
                            </view>
                            <view class="flex  align-center   padding-top-xs">
                              <view class="text-orange text-right" style="font-size: 12px;;white-space: nowrap">发布同款</view>
                                <view v-if="status==1"  class="padding-xs  margin-left-sm "
                                      @click.stop="">
                                    <text class="cu-btn round text-black line-gray margin-left-xl" style="font-size: 12px;width: 70px;height: 28px">停用</text>
                                </view>
                                <view v-if="status==0" class="padding-xs  margin-left-sm"
                                      @click.stop="">
                                  <text class="cu-btn round text-black line-gray margin-left-lg hp" style="font-size: 12px;width: 70px;height: 28px">下架</text></view>

                                <view v-if="status==1"  class="padding-xs  margin-left-sm"
                                      @click.stop="">
                                  <view class="cu-btn round text-black line-gray" style="font-size: 12px;width: 70px;height: 28px">上架</view>

                                </view>
                                <view v-if="status==2||status==4"  class="padding-xs  margin-left-sm"
                                      @click.stop="deleteGoods(item.id,index)">
                                  <view class="cu-btn round text-black line-gray hp" style="font-size: 12px;width: 70px;height: 28px">删除</view>

                                </view>
                                <view v-if="status==2" style="font-size: 22px" class="padding-xs   margin-left-sm"
                                      @click.stop="">
                                  <view class="cu-btn round text-black line-gray" style="font-size: 12px;width: 70px;height: 28px">启用</view>

                                </view>
                                <view v-if="status==0||status==1||status==23||status==4"  class=" padding-xs margin-left-sm"
                                      @click.stop="addProduct(item.id)">
                                  <view class="cu-btn round text-black line-gray" style="font-size: 12px;width: 70px;height: 28px;white-space: nowrap">编辑</view>

                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <u-popup :mode="popupIndex==1?'center':'bottom'" :show="show" @close="close" @open="open">
                <view v-show="popupIndex==1" class="bg-white radius padding-tb padding-lr-xl" style="width: 600rpx">
                    <view class="margin-top-xl flex justify-center">
                        <u-icon color="#F37B1D" name="info-circle-fill" size="30"></u-icon>
                    </view>
                    <view class="margin-tb-sm text-center">您确定要删除该商品？</view>
                    <view class="margin-bottom-xl text-gray text-center">删除商品后不可恢复，确定删除</view>
                    <view class="flex justify-between align-center margin-top-xl">
                        <button class="cu-btn bg-red radius flex-sub" @click="deleteProduct">确认删除</button>
                        <button class="cu-btn bg-gray u-border radius flex-sub margin-left" @click="close">取消</button>
                    </view>
                </view>
                <view v-show="popupIndex==2" class="bg-white radius padding-lr-xl padding-tb">
                    <view class="text-center margin-bottom text-bold text-lg">修改库存</view>
                    <view class="margin-bottom-xl text-center flex align-center">
                        <text>库存：</text>
                        <u-input v-model="value" border="surround" clearable type="number"></u-input>
                    </view>
                    <view class="flex justify-between align-center margin-top-xl">
                        <button class="cu-btn bg-gray u-border radius" @click="close">取消</button>
                        <button class="cu-btn bg-red radius" @click="deleteProduct">确认修改</button>
                    </view>
                </view>
                <view v-show="popupIndex==3" class="bg-white radius padding-lr-xl padding-tb">
                    <view class="text-center margin-bottom text-bold text-lg">修改预警值</view>
                    <view class="margin-bottom-xl text-center flex align-center">
                        <text>预警值：</text>
                        <u-input v-model="value" border="surround" clearable type="number"></u-input>
                    </view>
                    <view class="flex justify-between align-center margin-top-xl">
                        <button class="cu-btn bg-gray u-border radius" @click="close">取消</button>
                        <button class="cu-btn bg-red radius" @click="deleteProduct">确认修改</button>
                    </view>
                </view>
            </u-popup>
            <uni-popup ref="popup" type="bottom">底部弹出 Popup</uni-popup>
        </view>
        <view class="bg-white w100 foot padding">
            <button @click="addProduct" class="bg-red cu-btn " style="width: 100%">新增商品</button>
        </view>

    </view>
</template>

<script>
import renDropdownFilter from "/src/components/ren-dropdown-filter/ren-dropdown-filter";
import twoGoodsInfoCard from "/src/components/erp/twoGoodsInfoCard";

export default {
    name: "productList",
    components: {
        renDropdownFilter, twoGoodsInfoCard
    },
    data() {
        return {
            status:0,
            value: 0,
            selectShow: false,
            statusIndex: 0,
            popupIndex: 0,
            screenResult: "",
            editorId: "",
            activityList: [
                { name: "已上架" },
                { name: "待上架" },
                { name: "待启用" },
                { name: "待审核" },
                { name: "未通过" },
            ],
            filterData: [
                [
                    { text: "商品分类", value: "" },
                    { text: "白酒", value: 1 },
                    { text: "啤酒", value: 2 },
                    { text: "黄酒", value: 3 },
                    { text: "葡萄酒", value: 4 },
                    { text: "洋酒", value: 5 },
                    { text: "收藏酒", value: 6 }
                ],
                [{ text: "品牌", value: "" }],
                [
                    { text: "价格", value: "" },
                    { text: "不限", value: 1 },
                    { text: "1~99元", value: 2 },
                    { text: "100~299元", value: 3 },
                    { text: "300~599元", value: 4 },
                    { text: "600~999元", value: 5 },
                    { text: "1000~1999元", value: 6 }
                ],
                [
                    { text: "香型", value: "" },
                    { text: "不限", value: 1 },
                    { text: "酱香型", value: 2 },
                    { text: "浓香型", value: 3 },
                    { text: "清香型", value: 4 },
                    { text: "兼香型", value: 5 },
                    { text: "米香型", value: 6 },
                    { text: "凤香型", value: 7 },
                    { text: "特香型", value: 8 },
                    { text: "药香型", value: 9 },
                    { text: "老白干香型", value: 10 },
                    { text: "其他", value: 11 }
                ],
                [
                    {
                        text: "筛选",
                        value: ""
                    }
                ]
            ],
            defaultIndex: [0, 0, 0, 0, 0],
            productList: [],
            show: false,
            delIndex: 0
        };
    },
    onLoad(option) {
    },
    onShow() {
        this.getProductList({ index: 0 });
    },
    methods: {
        open() {
            this.show = true;
        },
        close() {
            this.show = false;
            // console.log('close');
        },
        deleteProduct() {
            this.$http.deleteGoods(this.editorId);
            this.productList.splice(0, this.delIndex);
            this.getProductList({ index: 0 });
            this.show = false;
        },
        deleteGoods(id, index) {
            console.log(id, index);
            this.delIndex = index;
            this.popupIndex = 1;
            this.show = true;
            this.editorId = id;
        },
        async getProductList(e) {
            console.log(e);
            this.statusIndex = e.index || 0;
            this.status=e.index;
            const res = await this.$http.getGoodList({ isStatus: e.index });
            console.log(res.data);
            this.productList = res.data;
            this.productList = res.data;
        },
        addProduct(id) {
            console.log(id);
            uni.navigateTo({
                url: `/pages/admin/adminProduct/addProduct?id=${id}`
            });
        },
      handle() {
        uni.navigateTo({
          url: `/pages/admin/adminProduct/drafts`
        });
      },
        ed(res) {
            console.log(res);
        },
        dateChange(d) {
            uni.showToast({
                icon: "none",
                title: d
            });
        },
        tabSelect(e) {
            this.statusIndex = e.index;
            this.getProductList();
        },
        selectClick(e) {
            console.log(e.name);
        },
        jumpDetails() {
            uni.navigateTo({
                url: "/pages/admin/adminProduct/productDetails?status=" + this.statusIndex
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.wrap {
    .contentBox {
        position: relative;
        top: calc(var(--status-bar-height) + 310rpx);
        padding-bottom: 100rpx;
    }
    .contentBox2 {
        position: relative;
        top: calc(var(--status-bar-height) + 260rpx);
        padding-bottom: 100rpx;
    }
.hp{
  margin-left:110px;
}
    .boxShadow {
        position: relative;
        padding: 30rpx 20rpx;
        background: white;
        border-radius: 10rpx;
        box-shadow: 4rpx 4rpx 16rpx #e6dee6;
        overflow: hidden;
    }
    .goods-list:last-child{
        margin-bottom: 30px;
    }
    .newTitle {
        color: white;
        position: absolute;
        right: 0px;
        top: 0px;
        width: 80rpx;
        height: 80rpx;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        transform: rotate(45deg);
    }

    .newTitle > view {
        position: relative;
        top: 0;
        right: 0;
        background: #8DC63F;
        text-align: center;
        white-space: nowrap;
        padding: 4rpx 40rpx;
        font-size: 24rpx;
        transform: scale(0.9);
    }
}

.search {
    position: fixed;
    width: 100%;
    top: var(--CustomBar-1) !important;
    left: 0;
}

/deep/ .u-navbar {
    .u-navbar__content {
        height: var(--CustomBar) !important;
        padding-top: var(--StatusBar);
        border-bottom: 0;

        .u-navbar__content__left,
        .u-navbar__content__right {
            margin-top: var(--StatusBar);
        }
    }
}
.foot{
  position: fixed;
  bottom:0;
  left: 0;
  width: 100%;
}
</style>
