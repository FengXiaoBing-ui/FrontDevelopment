<template>
  <view class="content">
    <u-navbar
        title="系统帮选酒"
        :autoBack="true"
    >
    </u-navbar>
    <view class="padding" :style="'margin-top:' + CustomBar + 'px'">
      <view class="boxShadow">
        <text class="text-orange">根据您提供的信息，为您推荐以下好酒</text>
      </view>
      <view class="product margin-top-sm">
        <view class="flex flex-wrap justify-between">
          <view v-for="(item, index) in productList" :key="index">
            <fxbMemberProductList
                :title="item.title"
                :infoText="item.infoText"
                :price="item.price"
                :img-url="item.imgUrl"
            ></fxbMemberProductList>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import fxbMemberProductList from '/src/pages/systemRecommend/componetns/fxb-member-product-list'
export default {
  name: "recommendList",
  components:{
    fxbMemberProductList
  },
  data(){
    return{
      productList: [
        {
          title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
          infoText: "酱香型 | 53° | 500ml",
          price: "365.00",
          imgUrl: require("/src/static/bottle/99.jpeg")
        },
        {
          title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
          infoText: "酱香型 | 53° | 500ml",
          price: "125.00",
          imgUrl: require("/src/static/bottle/88.jpeg")
        },
        {
          title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
          infoText: "酱香型 | 53° | 500ml",
          price: "365.00",
          imgUrl: require("/src/static/bottle/99.jpeg")
        },
        {
          title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
          infoText: "酱香型 | 53° | 500ml",
          price: "125.00",
          imgUrl: require("/src/static/bottle/88.jpeg")
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.boxShadow {
  padding: 30rpx 20rpx;
  background: white;
  border-radius: 10rpx;
  box-shadow: 4rpx 4rpx 16rpx #e6dee6;
}

</style>