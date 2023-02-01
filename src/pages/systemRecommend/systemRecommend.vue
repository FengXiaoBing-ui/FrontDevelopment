<template>
  <view class="content">
    <u-navbar
        title="系统帮选酒"
        :autoBack="true"
    >
    </u-navbar>
    <fxbImage width="750" height="400" mode="aspectFill" class="margin-top"
              src="/productDetails/Slice%201.png"></fxbImage>
    <view class="bg-white">
      <view class="padding-sm">
        <view class="bg-red light padding-tb">
          提交您的相关信息，系统为您推荐适合您代理的好酒！
        </view>
      </view>
    </view>
    <view class="padding">
      <view class="boxShadow padding" >
        <boxTitle title="提交信息"></boxTitle>
        <view class="minTitle text-orange margin-bottom">您的店面规模？</view>
        <fxbSelectHighlight :file-data="fileDataSize" @option="optionDataSize"></fxbSelectHighlight>
        <view class="u-border-top margin-tb"></view>
        <view class="flex justify-between align-center">
          <text class="text-orange">您的店面地址？</text>
          <view class="flex align-center">
            <view class="text-cut text-gray margin-right-sm">请选择店面位置</view>
            <text class="cuIcon-right" style="font-size: 42rpx"></text>
          </view>
        </view>
        <view class="u-border-top margin-tb"></view>
        <view class="minTitle text-orange margin-bottom">店内畅销酒价位？</view>
        <fxbSelectHighlight :file-data="fileDataPrice" @option="optionDataPrice"></fxbSelectHighlight>
        <view class="u-border-top margin-tb"></view>
        <view class="minTitle text-orange margin-bottom">入店消费群体？</view>
        <fxbSelectHighlight :file-data="fileDataPeople" @option="optionDataPeople"></fxbSelectHighlight>
      </view>
      <button class="cu-btn bg-red margin-top" style="width: 100%" @click="submit">提交</button>
    </view>
  </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbSelectHighlight from "/src/pages/systemRecommend/componetns/fxb-select-highlight";

export default {
  name: "systemRecommend",
  components: {
    boxTitle,
    fxbSelectHighlight,
    fxbImage
  },
  data() {
    return {
      fileDataSize: [
        {
          name: "50㎡以下"
        },
        {
          name: "50㎡~100㎡"
        },
        {
          name: "100㎡~150㎡"
        },
        {
          name: "150㎡~200㎡"
        },
        {
          name: "200㎡~300㎡"
        },
        {
          name: "400㎡以上"
        }
      ],
      fileDataPrice: [
        {
          name: "1~99元"
        },
        {
          name: "100~299元"
        },
        {
          name: "300~599元"
        }
      ],
      fileDataPeople: [
        {
          name: "工作人员"
        },
        {
          name: "游客"
        },
        {
          name: "很多"
        }
      ]
    };
  },
  methods: {
    submit() {
      uni.navigateTo({
        url: "pages/systemRecommend/recommendList"
      });
    },
    optionDataSize(value) {
      console.log(value);
    },
    optionDataPrice(index) {
    },
    optionDataPeople(index) {
    }
  }
};
</script>

<style lang="scss" scoped>
.boxShadow {
  padding: 30 rpx 20 rpx;
  background: white;
  border-radius: 10 rpx;
  box-shadow: 4 rpx 4 rpx 16 rpx #e6dee6;
}
</style>