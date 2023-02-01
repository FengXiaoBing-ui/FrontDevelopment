<template>
  <view>
    <u-navbar title="我要投标" :autoBack="true"></u-navbar>
    <view :style="'margin-top:' + CustomBar + 'px;'">
      <view class="padding-top-sm">
        <view class="padding-sm bg-white" style="border-radius: 10rpx 10rpx 0 0">
          <view class="flex align-center padding-bottom">
            <view class="cuIcon-titles text-red" style="font-size: 30rpx"></view>
            <text class="text-lg text-bold">投标信息</text>
          </view>
          <view class="padding-bottom-sm">
            <view class="flex justify-between align-center margin-bottom-sm padding-lr-sm" v-for="(item,index) in tenderList">
              <view>{{item.name}}</view>
              <view>{{item.num}}</view>
            </view>
          </view>
          <view style="border-top: 1px solid gray">
            <view class="flex justify-between align-center padding-tb padding-lr-sm">
              <view>金额总计</view>
              <view>¥560000.00</view>
            </view>
          </view>
        </view>
      </view>
      <view class="margin-top bg-white padding-sm" style="border-radius: 10rpx 10rpx 0 0;padding-bottom: 100rpx">
        <view class="flex align-center padding-bottom">
          <view class="cuIcon-titles text-red" style="font-size: 30rpx"></view>
          <text class="text-lg text-bold">请输入众筹金额</text>
        </view>
        <view class="padding-lr-sm">
          <view class="flex justify-between align-center padding-bottom" style="border-bottom: 1px solid gray">
            <view>
              <text class="text-red">*</text>
              <text>众筹金额</text>
            </view>
            <view>
              <input type="text" placeholder="请输入金额">
            </view>
            <view>0%
            </view>
          </view>
          <view class="flex justify-between align-center margin-top">
            <view>当前已众筹金额：¥250000.00</view>
            <view>50%</view>
          </view>
          <view class="flex justify-between align-center margin-top">
            <view>当前已众筹金额：¥250000.00</view>
            <view>50%</view>
          </view>
          <view class="margin-top text-sm text-red">
            <view>温馨提示：</view>
            <view>单人众筹金额不得低于1万元，可众筹金额达到后</view>
          </view>
        </view>
      </view>
      <view class="margin-top bg-white padding-sm" style="border-radius: 10rpx 10rpx 0 0" v-if="false">
        <view class="flex align-center padding-bottom">
          <view class="cuIcon-titles text-red" style="font-size: 30rpx"></view>
          <text class="text-lg text-bold">投标详情</text>
        </view>
        <view class="flex justify-between align-center padding-lr-sm">
          <view>当前报名</view>
          <view>15人</view>
        </view>
      </view>
    </view>
    <view class="botBtn padding-lr-sm padding-tb-xs bg-white">

      <!--      <u-popup :show="SignIn" :round="10" mode="center" @close="close" @open="open">-->
      <!--        <view class="margin-xl text-center">-->
      <!--          <view class="text-bold text-lg">确认签收</view>-->
      <!--          <view>确保签收成功后换货/退货商品</view>-->
      <!--          <view>自动补入代理商云库存</view>-->
      <!--        </view>-->
      <!--        <view class="flex">-->
      <!--          <view class="cu-btn w50 bg-gray">取消</view>-->
      <!--          <view class="cu-btn w50 bg-red text-white">确认签收</view>-->
      <!--        </view>-->
      <!--      </u-popup>-->
      <button style="width: 100%"
              class="cu-btn bg-red radius lg" @click="show = true">确认提交
      </button>
    </view>
    <u-modal :closeOnClickOverlay="true"
             confirmColor="red"
             @confirm="confirm"
             @cancel="cancel"
             showCancelButton
             :show="show"
             :title="title"
             :content='content'
             class="text-center"></u-modal>
  </view>
</template>

<script>
export default {
  name: "confirmTender",
  data(){
    return{
      title:"确认投标",
      content:"您已确认参与该次投标",
      show:false,
      tenderList:[
        {
          name:"项目名称",
          num:"东方国宾尊致条码招商政策"
        },
        {
          name:"项目编号",
          num:"2374823974293874892374"
        },
        {
          name:"招标方式",
          num:"众筹"
        },
        {
          name:"招标金额",
          num:"¥500000.00"
        },
        {
          name:"包装费用",
          num:"¥50000.00"
        },
        {
          name:"保证金",
          num:"¥50000.00"
        },
      ],
    }
  },
  methods:{
    cancel(){
      this.show = false
    },
    confirm(){
      this.show = false;
      uni.showToast({
        title:"投标成功！"
      })
      setTimeout(() => {
        uni.navigateBack({
          delta:2
        })
      },500)
    },
  }
}
</script>

<style lang="scss" scoped>
.botBtn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>