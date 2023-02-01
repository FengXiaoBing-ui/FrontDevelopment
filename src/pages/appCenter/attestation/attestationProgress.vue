<template>
  <view class="radius bg-white">
    <view class="bg-white padding-sm">
      <view class="cu-steps">
        <view class="cu-item" :class="index>progress?'':'text-blue'" v-for="(item,index) in basicsList" :key="index">
          <text class="num" :data-index="index+1"></text> {{item.name}}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "attestationProgress",
  props:{
    progress:{
      default:0,
      type:Number,
    },
      basicsList: {
        type:Array,
          default: () => {
              return [{
                  cuIcon: 'profile',
                  name: '基本信息'
              }, {
                  cuIcon: 'taoxiaopu',
                  name: '营业执照认证'
              }, {
                  cuIcon: 'card',
                  name: '身份证验证'
              }, {
                  cuIcon: 'card',
                  name: '人脸识别'
              }, ]
          }
      },
  },
  data:function (){
    return {

    }
  }
}
</script>

<style scoped>

</style>
