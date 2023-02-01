<template>
  <view class="bgPicture">
    <u-navbar
        :border="false"
        :fixed="true"
        title="私有版介绍"
        :safeAreaInsetTop="false"
        :autoBack="true"
        :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
        leftIconColor="#FFF0D5"
        titleStyle="color:#FFF0D5"
    >
    </u-navbar>
    <view class="padding-lr-sm" :style="`margin-top:${CustomBar+15}px`" style="color: #FFF0D5">
      <view class="padding-left-sm">
        <view class="flex justify-between align-center">
          <view>
            <view class="text-xl text-bold margin-bottom-xs">产品购买</view>
            <view>全国最专业的酒类ERP管理系统</view>
          </view>
          <view class="bg-white" style="width: 110rpx;height: 110rpx;border-radius: 10rpx"></view>
        </view>
      </view>
      <view class="margin-top padding-left-sm">
        <view class="text-sm flex justify-between align-center">
          <view>
            <image src="./gallery/smallIcon.png" style="width: 22rpx;height: 22rpx"></image>
            <text class="margin-left-xs">当前版本</text>
          </view>
          <view>免费版</view>
        </view>
        <view class="text-sm flex justify-between align-center margin-top-sm">
          <view>
            <image src="./gallery/smallIcons.png" style="width: 22rpx;height: 22rpx"></image>
            <text class="margin-left-xs">使用单位</text>
          </view>
          <view>贵州好酒选电子商务有限公司</view>
        </view>
      </view>
      <image src="./gallery/upgrade.png" class="setUp"></image>
      <view class="flex margin-top-xs">
        <view>
          <u-checkbox-group>
            <u-checkbox shape="circle" activeColor="red"></u-checkbox>
          </u-checkbox-group>
        </view>
        <text class="text-sm" style="color: #1D1D1D">是否确认开通好酒选管理ERP私有版</text>
      </view>
    </view>

<!--    模块2   -->
    <view class="bg-white margin-sm">
      <view class="flex align-end padding-tb">
        <view class="cuIcon-titles text-red" style="font-size: 40rpx"></view>
        <view class="text-lg text-bold">好酒选私有版</view>
      </view>
      <view>
        <view class="margin-lr-sm flex" @touchstart="buy(num)" :class="num == true?'afterClicking':'beforeClicking'" style="position: relative">
          <view class="flex align-center" style="position: relative">
            <view class="fillet basic-xs flex justify-center align-center"
                  style="background-image: linear-gradient(to right,#FFA51A,#FFE5C5);width: 195rpx;height: 125rpx">
              <image :src="imgUrl1" style="width: 86rpx;height: 86rpx;"></image>
            </view>
            <view class="padding-left">
              <view class="text-bold text-lg">免费试用</view>
              <view class="margin-top-sm text-gray">前期免费试用三个月</view>
            </view>
          </view>
          <view class="userPreferences padding-lr-xs">
            <text class="text-white text-xs">新用户特惠</text>
          </view>
        </view>
      </view>

      <view class="padding-tb-sm" style="position: relative">
        <view class="margin-lr-sm flex" @touchstart="buys(nums)" :class="nums == true?'afterClicking':'beforeClicking'">
          <view class="flex align-center">
            <view class="fillet basic-xs flex justify-center align-center"
                  style="background-image: linear-gradient(to right,#FC5058,#FDB68C);width: 195rpx;height: 125rpx">
              <view class="flex align-start text-white">
                <text style="font-size: 48rpx">188.00</text>
                <text class="text-price margin-left-xs text-bold"></text>
              </view>
            </view>
            <view class="padding-left">
              <view class="text-bold text-lg">半年套餐</view>
              <view class="margin-top-sm text-gray">优惠后台¥28.00/月</view>
            </view>
          </view>
        </view>
      </view>

      <view class="padding-bottom">
        <view class="margin-lr-sm flex" @touchstart="buyx(numx)" :class="numx == true?'afterClicking':'beforeClicking'">
          <view class="flex align-center" style="position: relative">
            <view class="fillet basic-xs flex justify-center align-center"
                  style="background-image: linear-gradient(to right,#FF610B,#FDCB84);width: 195rpx;height: 125rpx">
              <view class="flex align-start text-white">
                <text style="font-size: 48rpx">288.00</text>
                <text class="text-price margin-left-xs text-bold"></text>
              </view>
            </view>
            <view class="padding-left">
              <view class="text-bold text-lg">年套餐</view>
              <view class="margin-top-sm text-gray">优惠后台¥28.00/月</view>
            </view>
          </view>
        </view>
      </view>
    </view>

<!--    模块3   -->
    <view style="padding-bottom: 150rpx">
      <view class="bg-white margin-sm">
        <view class="text-red text-sm padding-tb padding-lr-sm">开通前请认真阅读版本介绍，请合适选择您需求的版本，详细区别参考版本差异对比表</view>
        <view class="padding-lr-sm padding-bottom">
          <table style="width: 100%;height: 900rpx" cellspacing="0">
            <tr class="forms text-bold">
              <td>功能</td>
              <td>免费版</td>
              <td>私有版</td>
            </tr>
            <tr class="forms">
              <td>商品管理</td>
              <td>
                <text class="cuIcon-check"></text>
              </td>
              <td>
                <text class="cuIcon-check"></text>
              </td>
            </tr>
            <tr class="forms">
              <td>代理政策管理</td>
              <td>
                <text class="cuIcon-check"></text>
              </td>
              <td>
                <text class="cuIcon-check"></text>
              </td>
            </tr>
            <tr class="forms">
              <td>样品订单</td>
              <td>
                <text class="cuIcon-check"></text>
              </td>
              <td>
                <text class="cuIcon-check"></text>
              </td>
            </tr>
            <tr class="forms">
              <td>合同管理</td>
              <td>
                <text class="cuIcon-check"></text>
              </td>
              <td>
                <text class="cuIcon-check"></text>
              </td>
            </tr>
            <tr class="forms">
              <td>发票管理</td>
              <td>
                <text class="cuIcon-check"></text>
              </td>
              <td>
                <text class="cuIcon-check"></text>
              </td>
            </tr>
            <tr class="forms">
              <td>云库存</td>
              <td>
                <text class="cuIcon-close text-gray"></text>
              </td>
              <td>
                <text class="cuIcon-check"></text>
              </td>
            </tr>
            <tr class="forms">
              <td>一件发货</td>
              <td>
                <text class="cuIcon-close text-gray"></text>
              </td>
              <td>
                <text class="cuIcon-check"></text>
              </td>
            </tr>
            <tr class="forms">
              <td>品鉴会管理</td>
              <td>
                <text class="cuIcon-close text-gray"></text>
              </td>
              <td>
                <text class="cuIcon-check"></text>
              </td>
            </tr>
            <tr class="forms">
              <td>我的代理商管理</td>
              <td>
                <text class="cuIcon-close text-gray"></text>
              </td>
              <td>
                <text class="cuIcon-check"></text>
              </td>
            </tr>
            <tr class="forms">
              <td>返佣管理</td>
              <td>
                <text class="cuIcon-close text-gray"></text>
              </td>
              <td>
                <text class="cuIcon-check"></text>
              </td>
            </tr>
            <tr class="forms">
              <td>积分管理</td>
              <td>
                <text class="cuIcon-close text-gray"></text>
              </td>
              <td>
                <text class="cuIcon-check"></text>
              </td>
            </tr>
          </table>
        </view>
      </view>
    </view>

<!--    模块4   -->
    <view class="flex justify-between align-center padding-sm bg-white botBtn">
      <view>
        <view>
          <view class="text-lg">
            <text>合计:</text>
            <text class="text-price margin-left-sm text-red"></text>
            <text class="text-red">180.00</text>
          </view>
        </view>
        <view class="text-df margin-top-xs text-gray">
          <text>生效日期:</text>
          <text>2022-08-09至2023-08-09</text>
        </view>
      </view>
      <view class="margin-right" @click="toOpen">
        <button class="cu-btn bg-red radius lg" style="width: 192rpx;height: 72rpx">确认</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "functionDisplay",
  data(){
    return {
      num:false,
      numx:false,
      nums:false,
      imgUrl1:require('/src/pages/admin/versionManagement/mian.png'),
    }
  },
  methods:{
    buy(num){
      this.num = !num;
      this.numx = false;
      this.nums = false;
      // console.log('num');
    },
    buys(nums){
      this.nums = !nums;
      this.numx = false;
      this.num = false;
      // console.log('num');
    },
    buyx(numx){
      this.numx = !numx;
      this.num = false;
      this.nums = false;
      // console.log('num');
    },
    toOpen(){
      uni.navigateTo({
        url:"/pages/admin/versionManagement/paymentService"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .u-navbar {
.u-navbar__content {
  height: var(--CustomBar) !important;
  padding-top: var(--StatusBar);
  border-bottom: 0;
  background-image: url("./gallery/ellipse.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1130rpx 1000rpx;

.u-navbar__content__left,
.u-navbar__content__right {
  margin-top: var(--StatusBar);
    }
  }
}
.bgPicture{
  background-image: url("./gallery/ellipse.png");
  height: 700rpx;
  background-size: 150% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.setUp{
  width: 100%;
  height: 350rpx;
  background-size: 100% 100%;
  margin-top: 30rpx;
}
.beforeClicking{
  border: 1rpx solid #E9E9E9;
  border-radius:20rpx;
}
.afterClicking{
  border: 1rpx solid #E54D42;
  border-radius:20rpx;
}
.userPreferences{
  background-color: #E54D42;
  position: absolute;
  right: 0;
  top: 0;
  border-radius:0 18rpx 0 20rpx;
}
.fillet{
  border-radius:20rpx;
  position: relative;
}
.forms{
  color: #F37B1D;
  text-align: center;
  font-size: 26rpx;
}
td{
  border: 1px solid #F37B1D;
}
table{
  border-collapse: collapse;
  table-layout:fixed
}
.botBtn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>