<template>
  <view>
    <view class="bgPicture" style="background-color: white">
        <u-navbar
            :border="false"
            :fixed="true"
            :safeAreaInsetTop="false"
            :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
        >
            <view slot="left" class="u-nav-slot"></view>
<!--            <view slot="center" class="u-nav-slot text-xl">-->
<!--                <view>账户</view>-->
<!--            </view>-->
<!--            <view slot="right" class="u-nav-slot">-->
<!--                <view class="addView">-->
<!--                    <view class="cuIcon-add" style="font-size: 24px" @click="showAddView"></view>-->
<!--                    <view class="addInfo">-->
<!--                        <u-transition :show="show" mode="fade-down">-->
<!--                            <view class="transition">-->
<!--                                <view-->
<!--                                    class="padding-sm margin-top-sm bg-white flex justify-around align-center triangle"-->
<!--                                    @click="scanHandler">-->
<!--                                    <view class="cuIcon-scan text-bold"></view>-->
<!--                                    <view>扫一扫</view>-->
<!--                                </view>-->
<!--                            </view>-->
<!--                        </u-transition>-->
<!--                    </view>-->
<!--                </view>-->
<!--            </view>-->
        </u-navbar>
        <!--        内容开始-->
        <view :style="`margin-top:${CustomBar + 6}px`">
            <view>
                <view class="userInfoBox bg-white">
                    <view class="flex justify-between padding-sm padding-lr-lg text-white align-center">
                        <view class="flex align-center" @click="editorInfo">
                            <image mode="widthFix" src="./mao.png" style="width: 120rpx"></image>
                            <view class="margin-left-sm text-black text-bold">
                                <view class="margin-bottom-xs text-white"> 183****0085</view>
                                <view class="flex align-center">
                                    <image v-if="false" mode="widthFix" src="/static/Icon/vip-fill.png"
                                           style="width: 40rpx"></image>
                                    <text class="margin-right-xs text-white" style="text-shadow: 1rpx 0 5rpx white;font-size: 42rpx">v</text>
                                    <view v-if="true" class="text-white">代 理</view>
                                    <view v-else>游 客</view>
                                </view>
                            </view>
                        </view>
                        <view @click="pageTo('pages/my/baseInfo/QRcodeIndex')">
                            <image mode="widthFix" src="./qrCode.png" style="width: 44rpx"></image>
                        </view>
                    </view>
<!--                    <view class="vipCard">-->
<!--                        <view class="flex align-end justify-around justify-between">-->
<!--                            <view class="text-bold text-lg" style="color: #f6c8ac">入驻会员</view>-->
<!--                            <view class="margin-left-sm text-sm text-gray">成为会员的又是简短描述</view>-->
<!--                            <button class="cu-btn btnSize   margin-left-sm" shape="circle" style="background: #fcd3af"-->
<!--                                    @click="pageTo('pages/memberPayment/memberAgreement')">开通-->
<!--                            </button>-->
<!--                        </view>-->
<!--                    </view>-->
                    <view class="wqy padding-sm flex justify-around align-center hp bg-white yuanJiao margin-lr-sm">
                      <view class="flex flex-direction align-center">
                        <view class="text-orange margin-bottom-sm text-lg">24.8
                        </view>
                        <view>合同金额</view>
                      </view>
                      <view class="flex flex-direction align-center">
                        <view class="text-orange margin-bottom-sm text-lg">8</view>
                        <view>合同数量</view>
                      </view>
                      <view class="flex flex-direction align-center">
                        <view class="text-orange margin-bottom-sm text-lg">3694</view>
                        <view>积分</view>
                      </view>
                      <view class="flex flex-direction align-center">
                        <view class="text-orange margin-bottom-sm text-lg">0</view>
                        <view>敬请期待</view>
                      </view>
                    </view>
                    <view class="vipCard">
                      <view class="flex justify-between align-center">
                        <view class="margin-right-lg text-lg" style="display: block">
                          <view style="color: snow">VIP会员</view>
                          <view class="margin-left-xs text-sm">2022-11-15到期</view>
                        </view>
                        <view>
                          <button @click="pageTo('/pages/memberPayment/memberPay')" class="cu-btn btnSize">立即续费</button>
                        </view>
                      </view>
                    </view>
                </view>
            </view>
            <!--     企业      -->
          <view class="padding margin-lr-sm margin-top-sm"
              style="background-image: linear-gradient(to right,#FF5440,#FF9B53);border-radius: 10px 10px 10px 10px">
            <view class="flex justify-between align-center">
              <view class="margin-right-lg text-lg" style="display: block">
                <view class="flex align-center">
                  <image src="./huiyuan.png" style="width: 42rpx;height: 28rpx"></image>
                  <view style="color: snow" class="margin-left-sm">VIP会员</view>
                </view>
                <view class="margin-left-xs text-sm text-white margin-top-sm">2023-11-15至2024-11-15到期</view>
              </view>
              <view>
                <button @click="pageTo('/pages/memberPayment/memberPay')" class="cu-btn btnSize">立即续费</button>
              </view>
            </view>
          </view>
          <view class="bg-white margin-sm align-center ">
            <view class="flex justify-between u-border-bottom align-center padding-sm  Menuactive "
                  @click="markTo('pages/my/systemSettings/myCoupon')">
              <view class="flex margin-tb-sm align-center">
                <image src="./Slice1.png" style="width: 44rpx;height: 44rpx" class="margin-lr-xs"></image>
                <view class="text-xl margin-right-xs"></view>
                优惠劵
              </view>
              <view class="cuIcon-right text-grey"></view>
            </view>
          </view>

            <view class="bg-white margin-sm align-center ">
                <view class="flex justify-between u-border-bottom align-center padding-sm  Menuactive "
                      @click="pageTo('pages/appCenter/attestation/basicInfo')">
                    <view class="flex margin-tb-sm align-center">
                      <image src="./Slice2.png" style="width: 44rpx;height: 44rpx" class="margin-lr-xs"></image>
                        <view class="text-xl margin-right-xs"></view>
                        企业实名认证
                    </view>
                  <view class="cuIcon-right text-grey"></view>
                </view>
                <view class="flex justify-between align-center padding-sm  u-border-bottom Menuactive "
                      @click="pageTo('pages/my/personManagement/memberManagement')">
                    <view class="flex margin-tb-sm align-center">
                        <image src="./Slice3.png" style="width: 44rpx;height: 44rpx" class="margin-lr-xs"></image>
                        <view class="text-xl margin-right-xs"></view>
                        企业成员账户管理
                    </view>
                  <view class="cuIcon-right text-grey"></view>
                </view>
            </view>
            <!--          平台支付-->
            <view class="bg-white margin-sm  align-center">
                <view class="flex justify-between align-center  padding-sm  u-border-bottom Menuactive "
                      @click="pageTo('pages/my/paySetting/paySettingIndex')">
                    <view class="flex margin-tb-sm ">
                        <image src="./Slice4.png" style="width: 44rpx;height: 44rpx" class="margin-lr-xs"></image>
                        <view class="margin-right-xs"></view>
                        平台支付设置
                    </view>
                  <view class="cuIcon-right text-grey"></view>
                </view>
                <view class="flex justify-between align-center  padding-sm   Menuactive "
                      @click="pageTo('pages/my/systemSettings/systemSettingsIndex')">
                    <view class="flex  margin-tb-sm align-center ">
                        <image src="./Slice5.png" style="width: 44rpx;height: 44rpx" class="margin-lr-xs"></image>
                        <view class="margin-right-xs"></view>
                        系统设置
                    </view>
                  <view class="cuIcon-right text-grey"></view>
                </view>
            </view>
            <!--          客服建议-->
            <view class="bg-white margin-sm  align-center">
                <view class="flex justify-between align-center  padding-sm u-border-bottom Menuactive  "
                      @click="pageTo('pages/my/proposalIndex')">
                    <view class="flex margin-tb-sm align-center">
                        <image src="./Slice6.png" style="width: 44rpx;height: 44rpx" class="margin-lr-xs"></image>
                        <view class="margin-right-xs"></view>
                        意见与建议
                    </view>
                  <view class="cuIcon-right text-grey"></view>
                </view>
                <view class="flex justify-between align-center  padding-sm u-border-bottom  Menuactive  "
                      @click="pageTo('pages/my/about/aboutIndex')">
                    <view class="flex margin-tb-sm align-center">
                        <image src="./Slice7.png" style="width: 44rpx;height: 44rpx" class="margin-lr-xs"></image>
                        <view class="margin-right-xs"></view>
                        关于好酒选
                    </view>
                    <view class="cuIcon-right text-grey"></view>
                </view>
                <view class="flex justify-between align-center  padding-sm   Menuactive ">
                  <view class="flex margin-tb-sm align-center">
                    <image src="./Slice8.png" style="width: 44rpx;height: 44rpx" class="margin-lr-xs"></image>
                    <view class="margin-right-xs"></view>
                    客服热线
                  </view>
                  <view class="flex margin-tb-sm align-center text-grey">
                    <text>400-888-8888</text>
                    <text class="cuIcon-right margin-left-xs"></text>
                  </view>
                </view>
            </view>

            <view class="text-center text-gray text-sm margin-tb-lg">服务时间：9：00--17：30</view>
        </view>
        <win-tab-bar></win-tab-bar>
    </view>
  </view>
</template>
<script>
import winTabBar from "/src/components/win/win-tab-bar";
import { mapMutations } from "vuex";
import { checkUpdate } from "/src/uni_modules/uni-upgrade-center-app/utils/check-update";
import { oauth } from "/src/utils/univerify";
import { appLogin } from "/src/utils/uniLoginUtil";

export default {
    name: "myIndex",
    components: {
        winTabBar
    },
    data: function() {
        return {
            show: false
        };
    },
    onShow() {
        this.setBottomBarIndex(4);
    },
    methods: {
        ...mapMutations("index", ["setBottomBarIndex"]),
        // edwin:调起scan
        scanHandler() {
            // #ifdef APP-PLUS
            uni.scanCode({
                success: function(res) {
                    console.log("条码类型：" + res.scanType);
                    console.log("条码内容：" + res.result);
                }
            });
            // #endif
            // #ifdef H5
            uni.showToast({ title: "请在手机端使用", icon: "none" });
            // #endif
        },
        // edwin:一键登录
        async login() {
            // 等待一键登录的结果确定登录方式
            // #ifdef APP-PLUS
            const res = await oauth();
            console.log(res);
            if (!res.mode) {
                uni.showToast({ title: JSON.stringify(res), icon: "none" });
                return;
            }
            if (res.mode === "univerify") {
                const phoneNumber = res.phoneNumber;
                setTimeout(() => {
                    uni.showToast({ title: `手机号${phoneNumber}存入数据库`, icon: "none" });
                }, 500);
            } else {
                await appLogin(this, res.mode);
            }
            // #endif
            // #ifdef H5
            uni.showToast({ title: "一键登录仅在手机端有效", icon: "none" });
            // #endif
        },
        // edwin:检测更新
        checkVersion() {
            checkUpdate();
        },
        //加号的点击事件
        showAddView() {
            this.show = !this.show;
        },
        // 编辑信息
        editorInfo() {
            uni.navigateTo({
                url: "pages/my/baseInfo/baseInfoIndex?user=123"
            });
        },
        pageTo(url) {
            uni.navigateTo({
                url
            });
        },
      markTo(url) {
        uni.navigateTo({
          url: "pages/my/systemSettings/myCoupon"
        });
      }

    }
};
</script>

<style lang="scss" scoped>
.bgPicture{
  background-image: url("douYu.png");
  width: 100%;
  height: 400rpx;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.btnSize {
  height: 60rpx;
  color: #E65B49;
  font-size: 0.8rem;
  border-radius: 45px 45px 45px 45px ;
}
.userInfoBox {
    height: 20vh;
    width: 100%;
    background: rgba(0,0,0,0);
    border-radius: 0 0 0% 0%;
    overflow: hidden;
    position: relative;
    .wqy{
        position: absolute;
        bottom: 0rpx;
        border-radius: 10px 10px 10px 10px ;
        width: 712rpx;
    }
    .vipCard {
        position: absolute;
        background-image: linear-gradient(to right,#FF9B53,#FF5440);
        width: 90%;
        bottom: -1000rpx;
        margin-left: 5%;
        padding: 30rpx;
        border-radius: 25px 25px 0px 0px ;
    .hp {
        position: absolute;
        border-radius:  55px 55px 0px 0px;
    }
    }
}

/deep/ .u-navbar {
    .u-navbar__content {
        height: var(--CustomBar) !important;
        padding-top: var(--StatusBar);
        background-image: url("douYu.png");
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 750rpx 460rpx;


        .u-navbar__content__left,
        .u-navbar__content__right {
            margin-top: var(--StatusBar);
        }
    }
}

.addView {
    position: relative;
}

.Menuactive:hover {
    background: rgba(232, 232, 233, 0.2);
}

.addInfo {
    position: absolute;
    width: 25vw;
    right: 0;
    /*border-radius: 0.3rem;*/
    overflow: hidden;
}

.triangle::before {
    position: absolute;
    right: 0.3rem;
    top: -0.4rem;
    content: "";
    height: 0;
    width: 0;
    border: 0.5rem solid white;
    border-top: 0.5rem solid transparent;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
}
</style>
