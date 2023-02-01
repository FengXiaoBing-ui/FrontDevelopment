<template>
    <view class="content">
        <!--顶部标题-->
        <u-navbar :border="false" :fixed="true" :autoBack="true"
                  :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
                  :safeAreaInsetTop="false">
            <view slot="left" class="u-nav-slot">
                <text style="font-size: 36rpx" class="cuIcon-back"></text>
            </view>
            <view slot="center" class="u-nav-slot">
                <view class="text-lg">合同商品列表</view>
                <view style="width:750rpx" class="search bg-white">
                    <view class="bg-white padding-lr">
                        <view class="flex align-center margin-tb-sm bg-gray" style="border-radius: 4px">
                            <text class="cuIcon-search text-red"
                                  style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
                            <input
                                class="text-df"
                                type="text"
                                placeholder-class="text-gray"
                                placeholder="请输入商品名称进行搜索"
                                confirm-type="search"
                            />
                        </view>
                    </view>
                </view>
            </view>
        </u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ ((CustomBar+31)*2) + 'rpx;padding-bottom:100rpx'">
            <!-- 主内容-->
            <view v-if="false" class="whiteBoxShadow">
                <view class="flex justify-between align-center">
                    <view class="text-gray">状态</view>
                    <view class="text-red">待审核</view>
                </view>
            </view>
            <view v-if="false" class="whiteBoxShadow margin-top-sm">
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
                        <image style="width: 150rpx;height: 150rpx" :src="require('/src/static/02.jpg')"></image>

                    </view>
                </view>
                <view class="margin-bottom-sm">
                    <view class="justify-between ">
                        <view class="text-gray margin-bottom-sm">开瓶图片及视频</view>
                        <image style="width: 150rpx;height: 150rpx" :src="require('/src/static/01.jpg')"></image>
                    </view>
                </view>
                <view class="">
                    <view class=" justify-between">
                        <view class="text-gray margin-bottom-sm">餐桌摆拍及图片</view>
                        <image style="width: 150rpx;height: 150rpx" :src="require('/src/static/jihao.png')"></image>
                    </view>

                </view>
            </view>

            <view @click="gotoBack" v-for="item in 2" :key="item" class="whiteBoxShadow margin-top-sm">
                <view class="flex justify-between align-center">
                    <text class="text-bold">东方国宾·尊致酒500ml酱香型合同..</text>
                    <text class="radius padding-xs bg-gray">合同详情</text>
                </view>
                <view class="flex justify-between">
                    <view class="margin-top-sm">
                        <view class="text-gray flex-twice">结算方式：现结</view>
                        <view class="flex margin-top-sm">
                            <text class="text-gray">报销费用：</text>
                            <view class="text-red">￥1500.00/场</view>
                        </view>
                    </view>
                    <view class="margin-top-sm">
                        <view class="text-gray flex-treble">合同编号：213234233543</view>
                        <view class="flex-twice margin-top-sm">
                            <text class="text-gray">报销商品：</text>
                            2瓶/场
                        </view>
                    </view>
                </view>
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
                        <view class="text-sm flex align-center margin-top-sm">
                            <text>代理价：</text>
                            <view class="text-red">￥365.00</view>
                        </view>
                    </view>
                </view>
            </view>

            <view v-if="false" class="whiteBoxShadow margin-top-sm">
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
                    <view><b>报销合计</b></view>
                    <view class="text-red">￥2030.00</view>
                </view>
            </view>

            <view v-if="false" class="whiteBoxShadow margin-top-sm">
                <view class="flex align-center justify-between">
                    <view class="align-center flex text-gray">数量合计</view>
                    <view class="align-center flex text-gray ">HJXCGD20220901001</view>
                </view>
                <view class="flex align-center padding-top-sm justify-between">
                    <view class="align-center flex text-gray">提交时间</view>
                    <view class="align-center flex text-gray">2022-08-31 12:56:12</view>
                </view>
                <view class="flex align-center padding-top-sm justify-between">
                    <view class="align-center flex text-gray">操作人</view>
                    <view class="align-center flex text-gray">王晓丫</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbImage from "/src/components/fxb/fxb-image";

export default {
    name: "contractProductList",
    components: {
        boxTitle,
        fxbImage
    },
    methods: {
        gotoBack() {
            uni.navigateBack({
                delta: 1
            });
        }
    }
};
</script>

<style lang="scss" scoped>

.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}

.search {
    position: fixed;
    width: 100%;
    top: var(--CustomBar-1) !important;
    left: 0;
}
</style>