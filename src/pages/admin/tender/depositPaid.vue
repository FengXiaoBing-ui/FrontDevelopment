<template>
  <view>
    <u-navbar :title="status==6?'转账凭证':'保证金'" :fixed="true" :autoBack="true"></u-navbar>
    <view :style="'margin-top:'+ CustomBar + 'px'" class="padding-top-sm">
      <view class="bg-white padding-tb" v-if="status!=6">
        <view class="flex align-center padding-bottom">
          <view class="cuIcon-titles text-red" style="font-size: 30rpx"></view>
          <text class="text-lg text-bold">缴纳保证金</text>
        </view>
        <view class="padding-lr-sm">
          <view class="flex justify-between align-center margin-bottom-sm">
            <view>保证金缴纳</view>
            <view>已缴纳</view>
          </view>
          <view class="flex justify-between align-center margin-bottom-sm">
            <view>缴纳金额</view>
            <view class="text-red">¥50000.00</view>
          </view>
          <view class="flex justify-between align-center margin-bottom-sm">
            <view>缴纳方式</view>
<!--            <view @click="transfer">-->
<!--              <text>转账</text>-->
<!--              <text class="cuIcon-right margin-left-sm"></text>-->
<!--            </view>-->
            <view>微信支付</view>
          </view>
          <view class="flex justify-between align-center">
            <view>缴纳时间</view>
            <view>2022-08-30 12:23:45</view>
          </view>
        </view>
      </view>
      <view class="bg-white padding-tb margin-top-sm" v-if="status==8||status==7">
        <view class="flex align-center padding-bottom">
          <view class="cuIcon-titles text-red" style="font-size: 30rpx"></view>
          <text class="text-lg text-bold">保证金退回</text>
        </view>
        <view class="padding-lr-sm">
          <view class="flex justify-between align-center margin-bottom-sm">
            <view>退回状态</view>
            <view v-if="status==7">没收</view>
            <view v-if="status==8">
              <text>已退回</text>
              <text class="cuIcon-right margin-left-sm"></text>
            </view>
          </view>
          <view v-if="status==8">
            <view class="flex justify-between align-center margin-bottom-sm">
              <view>退回金额</view>
              <view class="text-red">¥50000.00</view>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm">
              <view>退回方式</view>
              <view>转账</view>
            </view>
            <view class="flex justify-between align-center">
              <view>退回时间</view>
              <view>2022-08-30 12:23:45</view>
            </view>
          </view>
          <view v-if="status==7">
            <view class="flex justify-between align-center margin-bottom-sm">
              <view>没收金额</view>
              <view>¥5000000.00</view>
            </view>
            <view class="flex justify-between align-center">
              <view>没收时间</view>
              <view>2022-05-20 12:15:56</view>
            </view>
            <view class="padding-sm text-red margin-top-sm" style="background-color: rgba(229,77,66,0.05)">
              <view class="text-bold margin-bottom">温馨提示：</view>
              <view class="text-sm" style="line-height: 48rpx">尊敬的用户，因您超时未支付合同款，系统判定您未弃标状态，根据系相关法律规定，弃标将没收保证金，严重将纳入黑名单并赔偿相应的损失，系统已没收您的保证金。</view>
            </view>
          </view>
        </view>
      </view>
        <view class="whiteBoxShadow" v-if="status==6">
            <view class="flex align-center padding-bottom">
                <view class="cuIcon-titles text-red" style="font-size: 30rpx"></view>
                <text class="text-lg text-bold">转账凭证</text>
            </view>
            <u-image src="/static/zhuanzhang.png" width="700rpx" height="400rpx"></u-image>
        </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "depositPaid",
  data(){
    return{
      status:1,
    }
  },
  onLoad(options){
    this.status = options.status;
  },
    methods:{
        transfer(){
            uni.navigateTo({
                url:"pages/admin/tender/depositPaid?status=6"
            })
        }
    }
}
</script>

<style scoped>

</style>