

<template>
    <view>
        <u-navbar :autoBack="true" title="输入对公卡号"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`">
            <view  class="flex flex-direction align-start padding-top-xl">
                <view class=" text-lg margin-top-xl text-right margin-left">输入对公卡号</view>
<!--              <u&#45;&#45;input-->
<!--                  placeholder="请输入内容"-->
<!--                  border="surround"-->
<!--                  v-model="value"-->
<!--                  @change="change"-->
<!--                  class="margin-top margin-left"-->
<!--              ></u&#45;&#45;input>-->

              <u--input  placeholder="输入公司对公银行卡号"  suffixIcon="camera" style="width: 90%;font-size: 56px" class="margin-top margin-left"></u--input>

              <button class="cu-btn bg-red margin-tb margin-top margin-left padding-lr" style="width: 90%;"  @click="gotoPath('/pages/my/paySetting/changePasswordIndex')">提交卡号</button>

            </view>
        </view>
    </view>
</template>
<script>
export default {
    name: "changePasswordIndex",
    data: function() {
        return {

            orderPassword:'',
            firstPassword: "",
            secondPasswod: "",
            showLeave: 0
        };
    },
  methods:{
    gotoPath(){
      uni.navigateTo({
        url:'pages/my/paySetting/changePasswordIndex?type=2'
      })
    }
  },
};
</script>

<style scoped>

</style>