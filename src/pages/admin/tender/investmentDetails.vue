<template>
  <view>
    <u-navbar :border="false" :fixed="true" :autoBack="true" @rightClick="switchOrder"
              :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
              :safeAreaInsetTop="false">
      <view slot="left" class="u-nav-slot">
        <text class="cuIcon-back" style="font-size: 35rpx"></text>
      </view>
      <view slot="center" class="u-nav-slot">
        <view class="text-xl">招商详情</view>
        <view style="width:750rpx" class="search bg-white margin-top-xs">
          <view class="bg-white padding-lr">
            <!--产品列表导航-->
            <u-tabs itemStyle="width:50%;height:88rpx;white-space:nowrap;"
                    activeStyle="font-size:32rpx;font-weight:bold;color:black"
                    inactiveStyle="color:gray;font-size:28rpx" lineColor="red" :list="tabList"

                    @click="tabSelect"></u-tabs>
            <!--                        <view class="flex justify-end align-center padding-tb-sm text-gray">-->
            <!--                            <view @click="show = true" class="flex">-->
            <!--                                <text>时间范围筛选</text>-->
            <!--                                <text style="font-size: 32rpx" class="cuIcon-triangledownfill"></text>-->
            <!--                            </view>-->
            <!--                            &lt;!&ndash;                            <text class="cuIcon-triangleupfill"></text>&ndash;&gt;-->
            <!--                        </view>-->
          </view>
        </view>
      </view>
    </u-navbar>

    <view :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
          class="contentBox"
          style="padding-bottom: 130rpx"
          v-if="tableIndex==0">
      <view class="bg-white padding-sm padding-bottom-xl margin-top-sm" style="border-radius: 10rpx 10rpx 0 0">
        <view class="flex align-center padding-bottom">
          <view class="cuIcon-titles text-red" style="font-size: 30rpx"></view>
          <text class="text-lg text-bold">项目概况</text>
        </view>
        <view class="suoJin">这是招标信息的项目概况，这是招标信息的项目概况招标信息的项目概况这是，招标信息的项目概况这是招标信息的项目概况这是招标信息的项目概况这是。招标信息的项这是招标信息的，项目概况这是招标信息的项目概况目概况。</view>
      </view>

      <view class="margin-top-sm">
        <view class="bg-white padding-sm margin-top-sm" style="border-radius: 10rpx 10rpx 0 0">
          <view class="flex align-center padding-bottom">
            <view class="cuIcon-titles text-red" style="font-size: 30rpx"></view>
            <text class="text-lg text-bold">项目基本信息</text>
          </view>
          <view class="margin-lr-sm">
            <view class="flex justify-between align-center margin-bottom-sm">
              <view>项目名称</view>
              <view>东方国宾尊致条码招商政策</view>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm">
              <view>项目编号</view>
              <view>2374823974293874892374</view>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm">
              <view>起止时间</view>
              <view>2022-08-30至2022-09-02</view>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm">
              <view>招标方式</view>
              <view>多人</view>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm">
              <view>招标人数</view>
              <view>5人</view>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm">
              <view>招标金额</view>
              <view>¥500000.00/人</view>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm">
              <view>保证金</view>
              <view>¥50000.00</view>
            </view>
            <view class="flex justify-between align-center margin-bottom-sm">
              <view>保证金截止日期</view>
              <view>2022-09-03</view>
            </view>
          </view>
        </view>
      </view>

      <view class="bg-white padding-sm padding-bottom-xl margin-top-sm" style="border-radius: 10rpx 10rpx 0 0">
        <view class="flex align-center padding-bottom">
          <view class="cuIcon-titles text-red" style="font-size: 30rpx"></view>
          <text class="text-lg text-bold">资格审核</text>
        </view>
        <view class="margin-lr-sm">
          <view>1 必须具备独立法人资格，有独立承担民事责任的能力，具有有效的营业执照（扫描件加盖投标人公章）；</view>
          <view>2）具有良好的商业信誉及健全的财务会计制度（提供2021年度经会计师事务所审计的财务审计报告(必须含审计报告、资产负债表、利润表、现金流量表和财务报表附注)（扫描件加盖投标人公章）；2021年及之后新成立企业如没有财务审计报告的，可提供基本存款账户开户许可证、基本存款账户开户银行出具的资信证明（扫描件加盖投标人公章）；</view>
          <view>3）具有依法缴纳税收和社会保障资金的良好记录（税收证明：1.2022年以来（其中任意三个月）纳税期限内的完税或缴税凭证或税务机关出具的依法缴纳税收的证明材料；</view>
        </view>
      </view>

      <view class="margin-top-sm">
        <view class="bg-white padding-sm margin-top-sm" style="border-radius: 10rpx 10rpx 0 0">
          <view class="flex align-center padding-bottom">
            <view class="cuIcon-titles text-red" style="font-size: 30rpx"></view>
            <text class="text-lg text-bold">招标文件</text>
          </view>
          <view class="margin-lr-sm">
            <view class="flex justify-between align-end">
              <view>东方国宾尊致条码招商政策.word</view>
              <view class="cuIcon-down" style="font-size: 40rpx"></view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
          class="contentBox"
          style="padding-bottom: 130rpx"
          v-if="tableIndex==1">

      <view class="margin-top-sm">
        <view class="bg-white padding-sm margin-top-sm" style="border-radius: 10rpx 10rpx 0 0">
          <view class="flex align-center padding-bottom">
            <view class="cuIcon-titles text-red" style="font-size: 30rpx"></view>
            <text class="text-lg text-bold">商品信息</text>
          </view>
          <view class="margin-lr-sm">
            <view class="flex justify-between align-center margin-bottom-sm" v-for="(item,index) in commodityList">
              <view>{{item.name}}</view>
              <view>{{item.num}}</view>
            </view>
          </view>
          <view class="margin-lr-sm">
            <view class="margin-bottom-sm">
              <view>生产许可证</view>
              <view class="w50" style="height: 230rpx">
                <image src="./png/licence.png"></image>
              </view>
            </view>
          </view>
          <view class="margin-lr-sm">
            <view class="margin-bottom-sm">
              <view>质检报告</view>
              <view class="w50">
                <image src="./png/qualityTesting.png"></image>
              </view>
            </view>
          </view>
        </view>
      </view>

      <view class="margin-top-sm">
        <view class="bg-white padding-sm margin-top-sm" style="border-radius: 10rpx 10rpx 0 0">
          <view class="flex align-center padding-bottom">
            <view class="cuIcon-titles text-red" style="font-size: 30rpx"></view>
            <text class="text-lg text-bold">商品价格</text>
          </view>
          <view class="margin-lr-sm">
            <view class="flex justify-between align-center margin-bottom-sm" v-for="(item,index) in priceList">
              <view>{{item.name}}</view>
              <view>{{item.num}}</view>
            </view>
          </view>
        </view>
      </view>

      <view class="margin-top-sm">
        <view class="bg-white padding-sm margin-top-sm" style="border-radius: 10rpx 10rpx 0 0">
          <view class="flex align-center padding-bottom">
            <view class="cuIcon-titles text-red" style="font-size: 30rpx"></view>
            <text class="text-lg text-bold">商品详情</text>
          </view>
          <view>
            <image src="./png/tenderCommodity.png" style="width: 100%;height: 2200rpx"></image>
          </view>
        </view>
      </view>
    </view>

    <view class="botBtn padding-lr-sm padding-tb-xs bg-white">
      <button style="width: 100%"
              class="cu-btn bg-red radius lg" @click="tender()">我要投标
      </button>
    </view>
  </view>
</template>

<script>
export default {
  name: "investmentDetails",
  data(){
    return{
      tabList: [
        { name: "招商公告" },
        { name: "商品信息" },
        ],
      tableIndex:0,
      priceList:[
        {
          name:"商品总量",
          num:"8吨"
        },
        {
          name:"商品单价",
          num:"100000.00/吨"
        },
        {
          name:"商品总额",
          num:"50000000.00"
        },
        {
          name:"是否支持包装设计",
          num:"是"
        },
        {
          name:"包装总费用",
          num:"50000.00"
        },
      ],
      commodityList:[
          {
            name:"商品条码",
            num:"779879889"
          },
          {
            name:"商品类型",
            num:"白酒"
          },
          {
            name:"商品品牌",
            num:"东方国宾"
          },
          {
            name:"商品名称",
            num:"东方国宾5年陈酿基酒"
          },
          {
            name:"度数",
            num:"53度"
          },
          {
            name:"特点",
            num:"五粮、浓香、醇和、梁香突出"
          },
          {
            name:"生产期",
            num:"2022年"
          },
          {
            name:"发酵期",
            num:"180天"
          },
          {
            name:"存放期",
            num:"5年"
          },
          {
            name:"生产基地",
            num:"贵州遵义"
          },
          {
            name:"生产厂家",
            num:"东方国宾酒业有限公司"
          },
      ]
    }
  },
  methods:{
    tabSelect(e){
      this.tableIndex = e.index
    },
    tender(){
      uni.navigateTo({
        url: "/pages/admin/tender/confirmTender"
      });
    },
  }
}
</script>

<style lang="scss" scoped>
/deep/ .u-navbar {
  .u-navbar__content {
    height: var(--CustomBar) !important;
    padding-top: var(--StatusBar);
    border-bottom: 0;

    .u-navbar__content__left,
    .u-navbar__content__right {
      margin-top: var(--StatusBar);
    }
  }
}
.search {
  position: fixed;
  width: 100%;
  top: var(--CustomBar-1) !important;
  left: 0;
}
.contentBox {
  position: relative;
  top: calc(var(--StatusBar) + 170rpx);
  padding-bottom: 40rpx;
}
.suoJin{
  text-indent:2em;
}
.botBtn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>