<template>
  <view class="content">
    <u-navbar :border="false" :fixed="true" title="绑定支付宝" :autoBack="true">
    </u-navbar>
    <view :style="`margin-top: ${CustomBar}px`" class=" padding-top" >
    <view class="whiteBoxShadow ">
      <view class="flex align-center">
        <view style="width: 20%">姓名</view>
        <input type="text" placeholder="请输入姓名"  style="font-size: 12px" class="margin-left-xl">
      </view>
      <view class="flex align-center margin-top">
        <view style="width: 20%">支付宝账号</view>
        <input type="text" placeholder="请输入支付宝账号"  style="font-size: 12px" class="margin-left-xl ">
      </view>
      <view class="flex align-center margin-top">
        <view style="width: 25%">验证码</view>
        <input type="text" placeholder="请输入验证码" class="margin-left-xl" style="font-size: 12px">
        <view class="wrap ">
          <u-toast ref="uToast"></u-toast>
          <u-code startText="发送验证码" :seconds="seconds" @end="end" @start="start" ref="uCode" style="width: 45%"
                  @change="codeChange"></u-code>
          <view @tap="getCode">{{ tips }}</view>
        </view>
      </view>
      <!--          <view class="wrap">-->
      <!--            <u-toast ref="uToast"></u-toast>-->
      <!--            <u-code :seconds="seconds" @end="end" @start="start" ref="uCode"-->
      <!--                    @change="codeChange"></u-code>-->
      <!--            <view @tap="getCode">{{tips}}</view>-->
      <!--          </view>-->

      <!--        <view class="flex padding-lr margin-top" style="width: 80%">-->
      <!--        <button class="text-gray">确认信息</button>-->
      <!--        </view>-->
    </view>
    <view class="padding-lr margin-top">
      <button style="width: 100%"
              class="cu-btn bg-red padding-tb radius lg" @click="gotoPath('pages/my/baseInfo/thirdBIndIndex')">确认绑定
      </button>
    </view>
  </view>
  </view>
</template>

<!--<script>-->
<!--export default {-->
<!--    name: "bindAlipay"-->
<!--};-->
<!--</script>-->

<script>
export default {
  data() {
    return {
      tips: "",
      seconds: 10
    };
  },
  watch: {
    value(newValue, oldValue) {
      // console.log('v-model', newValue);
    }
  },
  methods: {
    gotoPath(path) {
      uni.navigateTo({
        url: path
      });
    },
    codeChange(text) {
      this.tips = text;
    },
    getCode() {
      if (this.$refs.uCode.canGetCode) {
        // 模拟向后端请求验证码
        uni.showLoading({
          title: "发送验证码"
        });
        setTimeout(() => {
          uni.hideLoading();
          // 这里此提示会被this.start()方法中的提示覆盖
          uni.$u.toast("验证码已发送");
          // 通知验证码组件内部开始倒计时
          this.$refs.uCode.start();
        }, 2000);
      } else {
        uni.$u.toast("倒计时结束后再发送");
      }
    },
    end() {
      uni.$u.toast("倒计时结束");
    },
    start() {
      uni.$u.toast("倒计时开始");
    }
  },

  change(e) {
    console.log("change", e);
  }

};
</script>


<style lang="scss" scoped>
.wrap {
  width: 100px;
}
</style>