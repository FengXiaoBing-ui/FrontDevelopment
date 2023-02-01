<template>
  <view class="w100 bg-white margin-tb-sm box">
    <view class="flex align-stretch">
      <view v-if="imgUrl" class="margin-right-sm">
        <fxbImage :src="imgUrl" height="140" width="140" mode="aspectFill"></fxbImage>
      </view>
      <view class="flex flex-direction justify-between flex-treble">
        <view class="flex justify-between">
          <view class="w75 text-cut" style="font-size: 32rpx;font-weight: 400">
            {{ goodsName }}
          </view>
          <text v-if="iconDelete" class="cuIcon-deletefill text-gray"></text>
        </view>
        <view class="flex flex-wrap  text-sm text-gray ">
          <view class="nowrap aromaticType text-cut"> 香型：{{ goodsType }}</view>
          <view class="nowrap Vol margin-lr-xs text-cut">度数：{{ goodsVolume }}</view>
          <view class="nowrap Degrees text-cut">容量：{{ goodsDegrees }}</view>
        </view>
        <view class="flex w100 justify-between">
          <view class="flex align-center">{{ namePrice }}
            <view class="text-red text-bold">￥{{ retailPrice || 0 }}</view>
          </view>
          <view v-if="namePriceTwo" class="flex align-center">{{ namePriceTwo }}
            <view class="text-red text-bold">￥{{ retailPrice || 0 }}</view>
          </view>
          <view v-if="agentPrice" class="flex align-center">
            <view>合同发货数量:{{ agentPrice }}瓶</view>
          </view>
        </view>
      </view>
    </view>
    <view v-if="!imgUrl" class="discount">
      <button class="cu-btn margin-top-sm u-border bg-white sm radius" @click.stop="previewImage">代理授权书</button>
    </view>
  </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image";

export default {
  name: "goodsInfoCard",
  components: {
    fxbImage
  },
  props: {
    imgUrl: String,//图片地址
    goodsName: String,//名字
    goodsType: String,//酒类型
    goodsVolume: String,//容量
    goodsDegrees: String,//度数
    retailPrice: String | Number,//零售价
    agentPrice: String | Number,//代理价
    namePrice: String,//价格名称
    namePriceTwo: String,//价格名称2
    iconDelete: {
      type: Boolean,
      default: false
    },
    empower: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    previewImage(index) {
      uni.previewImage({
        current: 1,
        urls: ["http://124.220.219.72:8084/static/productDetails/Slice%201.png"]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  text-align: left;

  .aromaticType {
    min-width: 126 rpx;
    font-size: 12px;
    color: gray;
    padding: 2px;
    border-radius: 2px;
    white-space: nowrap;
    //background: rgba(243, 123, 29, 0.1);
  }

  .Vol {
    min-width: 126 rpx;
    font-size: 12px;
    color: gray;
    padding: 2px;
    border-radius: 2px;
    white-space: nowrap;
    //background: rgba(229, 77, 66, 0.1);
  }

  .Degrees {
    min-width: 126 rpx;
    font-size: 12px;
    color: gray;
    padding: 2px 4px;
    border-radius: 2px;
    white-space: nowrap;
    //background: rgba(0, 129, 255, 0.1);
  }
}

</style>
