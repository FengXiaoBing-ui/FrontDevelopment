<template>
    <view style="background-color: #FBFBFB">
        <u-navbar :autoBack="true" title="系统设置"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`" class="margin-top">
            <view class="padding-top">
              <view>
                <view class=" flex align-center justify-between padding-tb bg-white">
                    <view class="padding-left"> 自定义菜单栏</view>
                    <view class="cuIcon-right margin-right"></view>
                </view>
                <view class="flex align-center justify-between padding-tb bg-white margin-top"
                      @click="pageTo('pages/my/systemSettings/messageSettingsIndex')">
                    <view class="padding-left">系统消息通知设置</view>
                    <view class="cuIcon-right margin-right"></view>
                </view>
                <view class="flex align-center justify-between padding-tb bg-white margin-top-xs"
                      @click="pageTo('pages/my/systemSettings/systemPowerIndex')">
                    <view class="padding-left">系统权限</view>
                    <view class="cuIcon-right margin-right"></view>
                </view>
                <view class="bg-white">
                  <view class="flex align-center justify-between padding-top bg-white margin-top"
                        @click="pageTo('pages/my/systemSettings/versionInfoIndex')">
                    <view class="padding-left">版本号</view>
                    <view class="flex justify-between align-center">
                      <view>V1.0</view>
                      <view class="cuIcon-right margin-right"></view>
                    </view>
                  </view>
                  <view class="u-border-bottom padding-tb-sm"></view>
                </view>
                <view class="flex bg-white align-center justify-between padding-top" @click="show = true">
                    <view @click="show = true" class="padding-left"> 清理缓存</view>
                    <view class="cuIcon-right margin-right"></view>
                </view>

                <u-popup :show="show" :round="10" mode="center"  @close="close" @open="open">
                    <view class="flex padding-tb-xl padding-lr" >
                            <view class="text-bold text-lg margin-top-sm padding-tb padding-lr">你确定要清理缓存吗?
                        </view>
                    </view>
                    <view class="flex justify-between align-center">
                        <button @click="close" style="width: 50%" class="cu-btn bg-gray radius">暂不清理</button>
                        <button @click="close" style="width: 50%" class="cu-btn bg-red radius">确定</button>
                    </view>
                </u-popup>


                <view class="bg-white">
                  <view class="u-border-bottom padding-tb-sm"></view>
                  <view class="flex align-center justify-between padding-tb" @click="loginOut">
                    <view class="padding-left"> 关闭好酒选</view>
                    <view class="cuIcon-right margin-right"></view>
                  </view>
                </view>
            </view>
        </view>
        <u-modal  :show="showclearCache" showConfirmButton showCancelButton @cancel="handleCancel" @confirm="handleTrue" >
            <view class="slot-content">
                <rich-text :nodes="content"></rich-text>
            </view>
        </u-modal>

    </view>
    </view>
</template>

<script>
export default {
    name: "systemSettingsIndex",
    data() {
        return {
       show:false,
          content:'',
          showclearCache:false
        };
    },
    methods: {
        open() {
            this.show
        },
        close() {
            this.show = false;
            // console.log('close');
        },
        pageTo(url) {
            uni.navigateTo({
                url
            });
        },
        clearCache() {
            this.showclearCache = true;
        },
        // handleTrue(){
        //     setTimeout(()=>{
        //         uni.showToast({
        //             title:'缓存清理成功'
        //         })
        //     },1000  )
        //     this.showclearCache=false
        // },
        // handleCancel(){
        //     this.showclearCache=false
        // },
        loginOut() {
            // uni.removeStorageSync('token');
            // uni.removeStorageSync('user');
            uni.reLaunch({
                url:"/pages/index/index"
            })
        }
    }
};
</script>

<style scoped>

</style>