<!--wjx20220831-->
<template>
    <view style="background-color: #FBFBFB">
        <u-navbar :autoBack="true" title="基本信息"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`">
            <view class="padding-top-xs">
                <view class="flex align-center justify-between bg-white padding-sm">
                    <view class="flex align-center">
                        <image mode="widthFix" src="/static/Icon/head.png" style="width: 100rpx"></image>
                        <view class="margin-left-sm">
                            <view>146****7845</view>
                            <view class="flex margin-top-sm align-center">
                                <!--                        <view class="cuIcon-unfold text-bold"></view>-->
                                <view class="margin-left-xs">代理</view>
                            </view>
                        </view>
                    </view>
                    <view class="flex align-center" @click="editorHead"> 编辑头像
                        <view class="cuIcon-right margin-left-xs"></view>
                    </view>
                </view>
            </view>
            <view class="padding-sm bg-white  Menuactive margin-top-sm">
                <view class="flex align-center  justify-between  margin-tb-sm">
                    <view>实名认证</view>
                    <view class="flex align-center" @click="pageTo('pages/my/baseInfo/realNameIndex')">
                        <view v-if="true" class="text-red">未认证</view>
                        <view v-else class="text-green">已认证</view>
                        <view class="cuIcon-right margin-left-sm text-gray"></view>
                    </view>
                </view>
            </view>
            <view class="padding-sm  bg-white  Menuactive margin-top-sm">
                <view class="flex align-center justify-between margin-tb-sm ">
                    <view>手机号</view>
                    <view class="flex align-center" @click="pageTo('pages/my/baseInfo/phoneEditorIndex')">
                        <view>146****7845</view>
                        <view class="cuIcon-right margin-left-sm text-gray"></view>
                    </view>
                </view>
            </view>
            <view class="padding-sm bg-white  Menuactive margin-top-sm">
                <view class="flex align-center justify-between margin-tb-sm" @click="data">
                    <view>积分</view>
                    <view class="flex align-center" @click="pageTo('pages/admin/integralForPerson/integralIndex')">
                        <view>1464</view>
                        <view class="cuIcon-right margin-left-sm text-gray"></view>
                    </view>
                </view>
            </view>
            <view class="padding-sm bg-white Menuactive margin-top-sm">
                <view class="flex align-center justify-between margin-tb-sm"
                      @click="pageTo('pages/my/baseInfo/thirdBIndIndex')">
                    <view>第三方账号绑定</view>
                    <view class="flex align-center">
                        <view></view>
                        <view class="cuIcon-right margin-left-sm text-gray"></view>
                    </view>
                </view>
            </view>

        </view>
        <!--      picker-->
        <view>
            <u-popup :round="10" :show="showPhoto" mode="bottom" @close="close">
                <view class="margin flex flex-direction align-center">
                    <view class="padding-sm">从相册中选择</view>
                    <view class="padding-sm ">拍照</view>
                    <view class="padding-sm " @click="close">取消</view>
                </view>
            </u-popup>
        </view>
    </view>
</template>

<script>
export default {
    name: "baseInfoIndex",
    data: function() {
        return {
            showPhoto: false,
            columns: [["从相册中选择", "拍照", "取消"]]
        };
    },
    methods: {
      //跳转到积分
      data() {
        uni.navigateTo({
          url: "pages/admin/integralForPerson/integralIndex"
        });
      },
        editorHead() {
            this.showPhoto = true;
        },
        close() {
            this.showPhoto = false;
        },
        pageTo(url) {
            uni.navigateTo({
                url
            });
        }
    }
};
</script>

<style scoped>
.Menuactive:hover {
    background: rgba(232, 232, 233, 0.2);
}
</style>
