<template>
    <view>
        <u-navbar :autoBack="true" title="找回支付密码"></u-navbar>
      <view :style="`margin-top: ${CustomBar}px`"class="margin-top">
            <view class="margin-xs margin-top">
                <view class="bg-white padding-top" >
                    <u-steps :current="leave">
                        <u-steps-item title="身份验证">
                        </u-steps-item>
                        <u-steps-item title="短息验证"></u-steps-item>
                    </u-steps>
                </view>
                <view class="bg-white padding-sm margin-top" v-if="leave==0">
                  <view class="flex align-center margin-top">
                    <view style="width: 30%" class="text-lg">身份证</view>
                    <input style="width: 100%" type="text" placeholder="请输入身份证号" class="margin-left-xl ">
                  </view>
                </view>
<!--                <view class="bg-white padding-sm" v-if="leave==1">-->
<!--                    <u-input placeholder="手机号" disabled v-model="phone"  >-->
<!--                        <u&#45;&#45;input placeholder="手机号">-->
<!--                            <u&#45;&#45;text-->
<!--                                slot="prefix"-->
<!--                                margin="0 3px 0 0"-->
<!--                                text="手机号"-->
<!--                                type="tips"-->
<!--                            ></u&#45;&#45;text>-->
<!--                            <template slot="suffix">-->
<!--                                <button class="cu-btn sm">获取验证码</button>-->
<!--                            </template>-->
<!--                    </u-input>-->
<!--                    </u&#45;&#45;input>-->
<!--                </view>-->

              <view class="whiteBoxShadow margin-top" v-if="leave==1">
                <view class="justify-start justify-between flex align-center">
                  <view class="text-lg">手机号</view>
                  <view class="margin-left text-lg">174****4475</view>
                  <view class="wrap">
                    <u-toast ref="uToast"></u-toast>
                    <u-code :seconds="seconds" @end="end" @start="start" ref="uCode"
                            @change="codeChange"></u-code>
                    <u-button @tap="getCode" class="bg-grey">{{tips}}</u-button>
                  </view>
                </view>
              </view>


                <view class="bg-white padding-sm margin-top" v-if="leave==1">
                  <view class="flex align-center margin-top">
                    <view style="width: 30%" class="text-lg">验证码</view>
                    <input style="width: 100%" type="text" placeholder="请输入验证码" class="margin-left-xl ">
                  </view>
                </view>
                <view class="padding-sm margin-top">
                    <button  @click="btnHandel" class="cu-btn bg-red" style="width:100%">{{leave==0?'下一步':'验证'}}</button>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "retrievePasswordIndex",
    data() {
        return {
          tips: '',
          // refCode: null,
          seconds: 10,
            phone:'1837****4125',
            leave: 0,
        };
    },
    methods:{
      codeChange(text) {
        this.tips = text;
      },
      getCode() {
        if(this.$refs.uCode.canGetCode) {
          // 模拟向后端请求验证码
          uni.showLoading({
            title: '正在获取验证码'
          })
          setTimeout(() => {
            uni.hideLoading();
            // 这里此提示会被this.start()方法中的提示覆盖
            uni.$u.toast('验证码已发送');
            // 通知验证码组件内部开始倒计时
            this.$refs.uCode.start();
          }, 2000);
        } else {
          uni.$u.toast('倒计时结束后再发送');
        }
      },
      end() {
        uni.$u.toast('倒计时结束');
      },
      start() {
        uni.$u.toast('倒计时开始');
      },
        btnHandel(){
            if(this.leave==0){
                this.leave = 1
            }else{
                uni.showToast({
                    title:'验证成功'
                })
                uni.navigateTo({
                    url:'pages/my/paySetting/changePasswordIndex?retrieve=true&type=3'
                })
            }
        }
    }
};
</script>

<style scoped>

</style>