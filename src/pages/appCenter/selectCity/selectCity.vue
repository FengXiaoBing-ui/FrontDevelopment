<template>
  <view>
    <u-navbar
        :autoBack="true"
        title="选择城市"
    >
    </u-navbar>
    <view :style="`margin-top:${CustomBar}px`" class="bg-white">
      <!--    搜索框-->
      <view class="bg-white padding-xs">
        <view class="flex padding-xs searchBorder align-center">
          <view class="cuIcon-search margin-lr-xs text-orange text-bold"></view>
            <input placeholder="请输入城市名搜索" type="text" @focus="inputFocus" @input="inputTriger">
        </view>
      </view>
<!--      搜索检索提示-->
      <view class="bg-white searchList" v-if="searchList.length!==0">
        <view v-for="el in searchList" :key="el">
          {{el}}
        </view>
      </view>
      <!--      搜索框以下内容-->
      <view v-else>
        <!--    当前位置-->
        <view class="padding  radius bg-white flex align-center"> <view class="cuIcon-locationfill text-orange"></view>当前位置：贵阳</view>
        <!--   定位、最近-->
        <view class="padding-lr">
         定位/最近访问
        </view>
        <view class="flex justify-start align-center text-center flex-wrap">
          <view v-for="item in useCity" :key="item.value"
                class=" bg-white radius margin-sm padding-sm flex align-center justify-around " style="width:25%">
            {{ item.label }}

          </view>
        </view>
        <view class="padding-lr">
          热门城市
        </view>
        <view class="flex justify-start align-center text-center flex-wrap">
          <view v-for="item in hotCity" :key="item.value"
                class="bg-white radius margin-sm padding-sm  flex align-center justify-around"
                style="width:25%">
            {{ item.label }}
          </view>
        </view>
        <addresIndexList></addresIndexList>
      </view>
    </view>
  </view>
</template>
<script>
import addresIndexList from "../../../components/common/addresIndexList";
import cityList from '../../../plugins/qqmap/cityList.json'
export default {
  components: {addresIndexList},
  computed:{

  },
  data() {
    return {
      searchList:[],
      cityList: cityList.result,
      StatusBar: this.StatusBar,
      CustomBar: this.CustomBar,
      hidden: true,
      listCurID: '',
      list: [],
      listCur: '',
      //
      useCity: [
        {label: '贵阳', value: 'guiyang'},
        {label: '北京', value: 'beijing'},
        {label: '上海', value: 'shanghai '}
      ],
      hotCity: [
        {label: '贵阳', value: 'guiyang'},
        {label: '北京', value: 'beijing'},
        {label: '深圳', value: 'shenzhen'},
        {label: '秦皇岛', value: 'qinhuangdao'},
        {label: '南京', value: 'nanjing'},
        {label: '上海', value: 'shanghai '}
      ]
    };
  },
  methods: {
    inputFocus(){
      console.log('focuse')
    },
    inputTriger(e){
      this.searchList.push(e.timeStamp)
    },
    back() {
      uni.navigateBack({
        delta: 1
      });
    },
  }
}
</script>

<style>
/*wjx*/
.searchBorder {
  border-radius: 1rem;
  border: #f2f2f2 solid 1px;

}

.searchList > view {
  border-bottom: solid 1px #cdcccc;
  padding: .5rem;
}
</style>
