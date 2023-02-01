<template>
  <view>
    <view class="beiJing">
      <view :transparency="transparency.toString()">
        <u-navbar
            :border="false"
            :fixed="true"
            title="好酒选榜单"
            :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
            :safeAreaInsetTop="false"
            :autoBack="true"
            rightText="白酒"
            leftIconColor="#fff"
            titleStyle="color:white"
            :bgColor='rgba'
        >
          <view
              class="u-nav-slot"
              slot="right"
          >
            <view class="flex align-center">
              <text class="margin-right-sm">白酒</text>
              <u-icon
                  name="arrow-down-fill"
                  size="10"
                  color="#fff"
              ></u-icon>
            </view>
          </view>
        </u-navbar>
      </view>
      <view :style="`margin-top:${CustomBar*2-4}rpx`">
        <view class="text-white">
          <view class="padding-top-lg margin-left-lg" style="font-size: 60rpx">
            <text>成交量排行榜</text>
          </view>
          <view class="margin-top-lg" style="font-size: 33rpx">
            <ul>
              <li>该榜单每月更新</li>
              <li style="margin-left: 30rpx;margin-top: 20rpx">统计价格走势图</li>
              <li style="margin-left: 60rpx;margin-top: 20rpx">助您了解热商品</li>
            </ul>
          </view>
        </view>
      </view>
    </view>
    <view class="jianBian">
      <view class="contentCard padding-lr">
        <view class="chartCard bg-white boxShadow margin-bottom" v-for="(item,index) in list" :key="index">
          <view class="t-icon t-icon-a-Group290 fangDa" v-if="index+1 == 1"></view>
          <view class="t-icon t-icon-a-Group-1 fangDa" v-if="index+1 == 2"></view>
          <view class="t-icon t-icon-a-Group-2 fangDa" v-if="index+1 == 3"></view>
          <view class="margin-bottom-xs">
            <image :src="imgUrl" v-if="index+1 == 4" class="ranking"></image>
            <image :src="imgUrl1" v-if="index+1 == 5" class="ranking"></image>
            <image :src="imgUrl2" v-if="index+1 == 6" class="ranking"></image>
            <image :src="imgUrl3" v-if="index+1 == 7" class="ranking"></image>
            <image :src="imgUrl4" v-if="index+1 == 8" class="ranking"></image>
            <image :src="imgUrl5" v-if="index+1 == 9" class="ranking"></image>
            <image :src="imgUrl6" v-if="index+1 == 10" class="ranking"></image>
          </view>
          <view class="flex align-center justify-between margin-bottom">
            <image class="productImg"
                   src="https://img2.baidu.com/it/u=2372355366,383996104&fm=253&fmt=auto&app=138&f=JPEG?w=446&h=624"
                   mode=""></image>
            <view style="width: 68%;height: 180rpx" class="flex flex-direction justify-between">
              <view class="text-bold text-lg" style="margin-bottom: 3rpx">{{ item.title }}</view>
              <view class="text-red" style="margin-bottom: 3rpx;font-size: 25rpx">成交量：{{ item.num }}万瓶
                <text class="margin-left-sm">成交占比：{{ item.proportion }}</text>
              </view>
              <view class="flex justify-between align-end">
                <view style="font-size: 25rpx">
                  <view>
                    <text>零售价：</text>
                    <text class="text-red text-bold">￥{{ item.price }}/瓶</text>
                  </view>
                  <view>
                    <text>代理价：</text>
                    <text class="text-red text-bold">￥{{ item.price }}/瓶</text>
                  </view>
                </view>
                <view>
                  <view class="cu-btn round line-orange" style="height: 60rpx;width: 150rpx;font-size: 22rpx" @click="viewDetails">查看详情</view>
                </view>
              </view>
            </view>
          </view>
          <view>
            <view class="flex padding-sm align-center showType">
              <view @click="changeType('1')" :class="showType==1 ? 'text-bold text-lg':'text-grey'">零售价走势图</view>
              <view class="margin-left-sm" :class="showType==2 ? 'text-bold text-lg':'text-grey'" @click="changeType('2')"
                    type="error">成交量统计图</view>
            </view>
          </view>
          <view>
            <qiun-data-charts
                v-if="showType=='1'"
                type="line"
                :opts="opts"
                :chartData="chartData1"
            />
            <qiun-data-charts
                v-if="showType=='2'"
                type="column"
                :opts="opts"
                :chartData="chartData2"
            />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import qiunDataCharts from "/src/components/qiun-data-charts/qiun-data-charts";

export default {
  name: "turnoverRanking",
  components: {
    qiunDataCharts
  },
  props: {
    isNav: {
      type: Boolean,
      default: true
    },
    transparency: {
      type: String,
      default: "0.0"
    }
  },
  data() {
    return {
      imgUrl:require('/src/pages/turnoverRanking/Slice4.png'),
      imgUrl1:require('/src/pages/turnoverRanking/Slice5.png'),
      imgUrl2:require('/src/pages/turnoverRanking/Slice6.png'),
      imgUrl3:require('/src/pages/turnoverRanking/Slice7.png'),
      imgUrl4:require('/src/pages/turnoverRanking/Slice8.png'),
      imgUrl5:require('/src/pages/turnoverRanking/Slice9.png'),
      imgUrl6:require('/src/pages/turnoverRanking/Slice10.png'),
      showType: "1",
      rgba:'rgba(0,0,0,0)',
      list: [
        {
          title: "贵州茅台酒1937瓶装500ml白酒",
          num: 26,
          proportion: "2.43%",
          price: "365.00",
          tagList: ["参考数据", "申请样品", "我要代理"]
        },
        {
          title: "贵州茅台酒1937瓶装500ml白酒",
          num: 26,
          proportion: "2.43%",
          price: "365.00",
          tagList: ["参考数据", "申请样品", "我要代理"]
        },
        {
          title: "贵州茅台酒1937瓶装500ml白酒",
          num: 26,
          proportion: "2.43%",
          price: "365.00",
          tagList: ["参考数据", "申请样品", "我要代理"]
        },
        {
          title: "贵州茅台酒1937瓶装500ml白酒",
          num: 26,
          proportion: "2.43%",
          price: "365.00",
          tagList: ["参考数据", "申请样品", "我要代理"]
        },
        {
          title: "贵州茅台酒1937瓶装500ml白酒",
          num: 26,
          proportion: "2.43%",
          price: "365.00",
          tagList: ["参考数据", "申请样品", "我要代理"]
        },
        {
          title: "贵州茅台酒1937瓶装500ml白酒",
          num: 26,
          proportion: "2.43%",
          price: "365.00",
          tagList: ["参考数据", "申请样品", "我要代理"]
        },
        {
          title: "贵州茅台酒1937瓶装500ml白酒",
          num: 26,
          proportion: "2.43%",
          price: "365.00",
          tagList: ["参考数据", "申请样品", "我要代理"]
        },
        {
          title: "贵州茅台酒1937瓶装500ml白酒",
          num: 26,
          proportion: "2.43%",
          price: "365.00",
          tagList: ["参考数据", "申请样品", "我要代理"]
        },
        {
          title: "贵州茅台酒1937瓶装500ml白酒",
          num: 26,
          proportion: "2.43%",
          price: "365.00",
          tagList: ["参考数据", "申请样品", "我要代理"]
        },{
          title: "贵州茅台酒1937瓶装500ml白酒",
          num: 26,
          proportion: "2.43%",
          price: "365.00",
          tagList: ["参考数据", "申请样品", "我要代理"]
        }
      ],
      opts: {
        color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
        padding: [20, 10, 0, 0],
        legend: {},
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          gridType: "dash",
          dashLength: 2
        },
        extra: {
          line: {
            type: "straight",
            width: 2
          }
        }
      },
      chartData1: {},
      chartData2: {},
    };
  },
  onPageScroll(e) {
    this.handleScroll(e.scrollTop)
  },
  mounted() {
    this.getServerData();
  },
  methods: {
    handleScroll(top){
      if(top>1){
        let opacity = top / 50
        opacity = opacity > 1 ? 1 : opacity
        this.rgba = `rgba(232,77,77,${opacity})`;
      }else{
        this.rgba = 'rgba(0,0,0,0)'
      }
    },
    viewDetails(){
      uni.navigateTo({
        url:"/pages/admin/adminProduct/productList"
      })
    },
    changeType(val) {
      this.showType = val;
    },
    getServerData() {
      //模拟从服务器获取数据时的延时
      setTimeout(() => {
        let res1 = {
          categories: ["5月", "6月", "7月", "8月"],
          series: [
            {
              name: "成交量A",
              data: [35, 8, 25, 37, 4, 20]
            },
            {
              name: "成交量C",
              data: [60, 70, 80, 70, 60, 80]
            }
          ]
        };
        this.chartData1 = JSON.parse(JSON.stringify(res1));
        let res2 = {
          categories: ["5月", "6月", "7月", "8月"],
          series: [
            {
              name: "成交额",
              data: [35, 36, 31, 34]
            },
            {
              name: "成交量/万瓶",
              data: [18, 27, 21, 28]
            }
          ]
        };
        this.chartData2 = JSON.parse(JSON.stringify(res2));
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
.fangDa{
  width: 70rpx;
  height: 70rpx;
}
.contentCard{
  position: relative;

  .chartCard {
    position: relative;
    top: -70rpx;
    padding: 0 20rpx;

    .ranking{
      position: relative;
      left: -20rpx;
      top: 0;
      width: 71px;
      height: 30px;
    }
  }
}

.jianBian{
  background-image: linear-gradient(to right,rgb(234,94,97),rgb(219,60,59));
}
.beiJing{
  background-image: url("wq.png");
  background-repeat: no-repeat;
  width: 100%;
  height: 350px;
  background-size: 100% 100%;
}
/deep/ .u-navbar {
  .u-navbar__content {
    height: var(--CustomBar) !important;
    padding-top: var(--StatusBar);

    .u-navbar__content__left,
    .u-navbar__content__right {
      margin-top: var(--StatusBar);
      color: white !important;
    }
  }
}
.productImg {
  width: 180rpx;
  height: 180rpx;
  border-radius: 13rpx;
}
</style>