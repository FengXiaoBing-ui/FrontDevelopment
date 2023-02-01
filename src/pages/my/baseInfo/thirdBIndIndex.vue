<template>
    <view>
        <u-navbar :autoBack="true" title="第三方账号绑定"></u-navbar>
      <view :style="`margin-top: ${CustomBar}px`" class=" padding-top" >
<!--        <view :style="`margin-top: ${CustomBar}px`">-->
<!--            <view class="whiteBoxShadow">-->

<!--                <view class="bg-white padding-sm flex align-center justify-between">-->
<!--                    <view> 微信账号</view>-->
<!--                    <view class="flex align-center justify-end">-->
<!--                        <view>已绑定</view>-->
<!--                        <view class="margin-left-sm cuIcon-right"></view>-->
<!--                    </view>-->
<!--                </view>-->
<!--            </view>-->
<!--                <view class="bg-white padding-sm flex align-center justify-between"-->
<!--                      @click="pageTo('pages/my/systemSettings/messageSettingsIndex')">-->
<!--                    <view>支付宝账号</view>-->
<!--                   <view class="flex align-center justify-end">-->
<!--                       <view>已绑定</view>-->
<!--                       <view class="margin-left-sm cuIcon-right"></view>-->
<!--                   </view>-->
<!--                </view>-->
<!--        </view>-->
        <view class="whiteBoxShadow">
            <view class="flex justify-between" @click="show = true">
                <view>微信账号</view>
                <view class="text-gray ">已绑定<text class="cuIcon-right"></text></view>
            </view>
        </view>
        <view class="whiteBoxShadow margin-top " >
            <u-popup :show="show" :round="10" mode="center"  @close="close" @open="open">
                <view class="flex align-center try text-center" >
                    <view class=" align-center  padding-tb padding-lr" style="height: 168px;width: 265px">
                        <view class="text-center text-bold">当前绑定微信:</view>
                        <view class="image text-center flex justify-center margin-top-sm">
                        <u-avatar :src="require('/src/static/02.jpg')" shape="circle" ></u-avatar>
                        </view>
                        <view class="margin-top-sm text-center">小明</view>
                        <view class="text-bold margin-top-sm">你确定解除该微信账号的绑定吗?
                        </view>
                        <view class="flex justify-between">
                        </view>
                    </view>
                </view>
                <view class="flex justify-between align-center">
                    <button @click="close" style="width: 50%" class="cu-btn bg-gray  try">确定</button>
                    <button @click="close" style="width: 50%" class="cu-btn bg-red radius">暂不解绑</button>
                </view>
            </u-popup>
            <view >
                <view class="flex justify-between">
                    <view>支付宝账号</view>
                    <view class="text-gray" @click="gotoPath('/pages/my/baseInfo/bindAlipay')">未绑定<text class="cuIcon-right"></text></view>
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
    name: "thirdBIndIndex",
    data() {
        return {
            showclearCache:false,
            show : false,
            content:''
        };
    },
    methods: {
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        },
        pageTo(url) {
            uni.navigateTo({
                url
            });
        },
        open() {
            this.show
        },
        close() {
            this.show = false;
            // console.log('close');
        },
    }
};
</script>

<style lang="scss" scoped>
.radius {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 5px;
}
.try{
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.hp{
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 0px;
}
</style>