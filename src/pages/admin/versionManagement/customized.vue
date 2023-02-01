<template>
  <view>
    <u-navbar
        :border="false"
        :fixed="true"
        title="定制专属版本"
        :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
        :safeAreaInsetTop="false"
        :autoBack="true"
        leftIconColor="black"
        titleStyle="color:black"
    >
    </u-navbar>
    <view :style="`margin-top:${CustomBar}px`" class="customizedImg">
      <view>
        <image src="./gallery/modular.png" class="modularImg"></image>
      </view>
      <view class="text-white text-xs smallModular">
        <view>PERSONAL</view>
        <view>CUSTOM</view>
      </view>

<!--      专属功能模块    -->
      <view class="padding-sm modularTwo">
        <view class="text-xl text-bold padding-sm">定制您的专属功能</view>
        <view class="margin-top-sm">
          <view>
            <image src="./gallery/nameIcon.png" style="width: 36rpx;height: 36rpx"></image>
            <text class="margin-left-xs text-lg text-bold">姓名</text>
          </view>
          <view class="margin-top-sm">
            <u--input
                border="surround"
                shape="circle"
                class="borders"
            ></u--input>
          </view>
        </view>
        <view class="margin-top">
          <view>
            <image src="./gallery/nameIcon.png" style="width: 36rpx;height: 36rpx"></image>
            <text class="margin-left-xs text-lg text-bold">联系电话</text>
          </view>
          <view class="margin-top-sm">
            <u--input
                border="surround"
                shape="circle"
                class="bordera"
            ></u--input>
          </view>
        </view>
        <view class="margin-tb">
          <view>
            <image src="./gallery/nameIcon.png" style="width: 36rpx;height: 36rpx"></image>
            <text class="margin-left-xs text-lg text-bold">公司名称</text>
          </view>
          <view class="margin-top-sm">
            <u--input
                border="surround"
                shape="circle"
                class="borderd"
            ></u--input>
          </view>
        </view>
      </view>

<!--      功能选择模块    -->
      <view class="padding modularThree">
        <view class="padding-lr">
          <view>
            <image src="./gallery/moduleIcon.png" style="width: 50rpx;height: 46rpx"></image>
            <text class="text-df text-bold text-white margin-left-xs">您的公司规模?</text>
          </view>
          <view class="flex align-center flex-wrap margin-top-xs">
            <view v-for="(item, index) in lists" :key="index">
              <view class="cu-btn bg-white sizes margin-top-sm"
                    :style="index==2?'':'margin-right:24rpx'"
                    @click="radioClick(item.id)"
              :class="{'styles':item.checked}">{{item.name}}</view>
            </view>
          </view>
        </view>
        <view class="margin-top padding-lr">
          <view>
            <image src="./gallery/moduleIcon.png" style="width: 50rpx;height: 46rpx"></image>
            <text class="text-df text-bold text-white margin-left-xs">功能需求</text>
          </view>
          <view class="text-xs margin-top-sm" style="color: #FFF0D5">请输入您需要解决的问题，并简要说出简短功能需求，平台会联系您进行详细沟通；</view>
          <view style="position: relative" class="margin-top">
            <textarea style="height: 200rpx;width:625rpx;background-color: #F9F9F9;color: #777777;border-radius: 10rpx"
                      class="padding-sm text-xs" placeholder="请简短输入您的需求和现存需要解决的问题"></textarea>
            <image src="./gallery/girl.png" style="width: 70rpx;height: 100rpx;position: absolute;bottom: 0;right: -2rpx"></image>
          </view>
          <view style="color: #FFF0D5" class="text-xs margin-top">
            <view class="margin-bottom">什么是私有定制?</view>
            <view>专属定制版是根据您自身管理而量身定制的，您可以写下您的管理需求，功能需求以及现在在管理过程中的问题我们会联系您，详细了解您的需求从而为您量身定制属于您的管理平台；</view>
          </view>
        </view>
      </view>

      <view class="padding-lf modularFour">
        <image src="./gallery/pencil.png" style="width: 700rpx;height: 80rpx"></image>
      </view>
      <view class="padding-lr modularFours">
        <button class="bg-red" style="width: 680rpx;height: 70rpx;line-height: 70rpx">提交</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "customized",
  data(){
    return{
      lists: [{
          id:0,
          checked: true,
          name:'20人以下'
        },
        {
          id:1,
          checked: false,
          name:'20-50人'
        },
        {
          id:2,
          checked: false,
          name:'50-100人'
        },
        {
          id:3,
          checked: false,
          name:'100-200人'
        },
        {
          id:4,
          checked: false,
          name:'200人以上'
        }
      ],
    }
  },
  methods: {
    radioClick(id) {
      this.lists.map((item, index) => {
        item.checked = index === id ? true : false
      })
    },
  }
}
</script>

<style lang="scss" scoped>
/deep/ .u-navbar {
  .u-navbar__content {
    height: var(--CustomBar) !important;
    padding-top: var(--StatusBar);
  }

  .u-navbar__content__left,
  .u-navbar__content__right {
    margin-top: var(--StatusBar);
  }
}
.customizedImg{
  background-image: url("gallery/baseDrawing.png");
  background-repeat: no-repeat;
  background-position:-54rpx 0;
  width: 100%;
  height: 2240rpx;
  background-size: 107% 100%;
  position: relative;

  .modularImg{
    width: 690rpx;
    height: 880rpx;
    background-size: 100% 100%;
    position: absolute;
    top: 252rpx;
    left: 40rpx;
  }
  .smallModular{
    position: absolute;
    top: 450rpx;
    right: 40rpx;
    opacity: 0.7;
  }
  .modularTwo{
    position: absolute;
    top: 547rpx;
    left: 120rpx;
  }
  .modularThree{
    position: absolute;
    bottom: 258rpx;
    left: -5rpx;
  }
  .modularFour{
    position: absolute;
    bottom: 150rpx;
    left: 32rpx;
  }
  .modularFours{
    position: absolute;
    bottom: 34rpx;
    left: 6rpx;
  }
}
.borders{
  border: 1px solid #2680EB !important;
  width: 460rpx !important;
  height: 62rpx !important;
}
.bordera{
  border: 1px solid #FFC400 !important;
  width: 460rpx !important;
  height: 62rpx !important;
}
.borderd{
  border: 1px solid #FF5B50 !important;
  width: 460rpx !important;
  height: 62rpx !important;
}
.sizes{
  width: 195rpx;
  height: 58rpx;
  border-radius: 10rpx;
  color: #777777 !important;
}
.styles{
  background-color: #606BFF;
  color: #FFFFFF !important;
}
</style>