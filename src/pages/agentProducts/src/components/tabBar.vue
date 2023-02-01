<template>
	<view class="tab-bar">
		<view :class="{item:true ,home:true,active:homeActive,}" @click="getTabBar('/')">
      <view class="cuIcon-home"></view>
      <view>首页</view>
    </view>
    <view :class="{item:true ,my:true,active:myActive,}" @click="getTabBar('/')">
      <view class="cuIcon-friendfamous"></view>
      <view>我的</view>
    </view>
	</view>
</template>

<script>
export default {
  name:"tabBar",
  data(){
    return{
      homeActive:true,
      myActive:true
    }
  },
  methods:{
    getTabBar(path){
      uni.redirectTo({
        url:path
      })
    }
  }
}
</script>

<style>
</style>