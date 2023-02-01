<template>
  <view class="content">
    <u-navbar title="商品详情" :autoBack="true"></u-navbar>
    <view class="padding-bottom"
          :style="'margin-top:' + CustomBar + 'px;'+(status==3?'padding-bottom: 70px':'padding-bottom: 10px')">
      <fxbStatusCard :status="localStatus.status" :tips="localStatus.tips"
                     :icon="localStatus.icon"></fxbStatusCard>
      <view class="whiteBoxShadow margin-bottom-sm" v-if="status==4||status==5"
            style="transform: translateY(-10px)">
        <boxTitle title="销售情况"></boxTitle>
        <view class="padding-sm">
          <view>商品销售进度</view>
          <view class="margin-top padding-sm bg-gradual-red radius">
            <view class="flex justify-between">
              <view class="text-center">
                <view class="text-lg">2600/瓶</view>
                <view class="margin-top-sm ">进货总目标</view>
              </view>
              <!--            <view style="width: 1rpx;height: 27px;margin-left: 10px;margin-top: 30px" class="bg-gray margin-lr-xs margin-left"></view>-->
              <view class="text-center">
                <view class="text-lg">50000.00</view>
                <view class="margin-top-sm ">进货总金额</view>
              </view>
              <!--            <view style="width: 1rpx;height: 27px;margin-top: 30px" class="bg-gray margin-right "></view>-->
              <view class="text-center">
                <view class="text-lg">2600/瓶</view>
                <view class="margin-top-sm ">目前进货量</view>
              </view>
            </view>
            <view>
              <view class="cu-progress hp round margin-top ">
                <view :style="`${status==4?'width:50%':'width:100%'}`" class="bg-red round"></view>
              </view>
            </view>
          </view>
        </view>
        <view class="padding-sm" v-if="status==4||status==5">
          <view class="flex justify-between align-center">
            <view>当前利润占比</view>
            <view class="cu-btn bg-orange text-white radius text-sm" @click="Path"
                  style="width: 105px;height: 20px">我的成交记录
            </view>
          </view>
          <view class="margin-top-sm flex justify-around">
            <view class="text-center whiteBoxShadow" style="width: 30%">
              <view class="text-lg text-red">￥2.5万</view>
              <view class="margin-top-sm ">商品总额</view>
            </view>
            <!--                            <view style="width: 1rpx;height: 27px;margin-left: 10px;margin-top: 30px"-->
            <!--                                  class="bg-gray margin-lr-xs margin-left"></view>-->
            <view class="text-center whiteBoxShadow" style="width: 30%">
              <view class="text-lg text-blue">20%</view>
              <view class="margin-top-sm ">我的占比</view>
            </view>
            <!--                            <view style="width: 1rpx;height: 27px;margin-top: 30px"-->
            <!--                                  class="bg-gray margin-right "></view>-->
            <view class="text-center whiteBoxShadow" style="width: 30%">
              <view class="text-lg text-orange">￥5000.00</view>
              <view class="margin-top-sm ">我的利润</view>
            </view>
          </view>
          <view class="text-red margin-top text-sm">合同签订后每支付一笔费用，你的利润都会实时存入您的银行账户，请注意查收</view>
          <!--                    <button style="width: 100%" @click="Path" class="cu-btn margin-top bg-red radius lg">我的成交记录</button>-->
        </view>
      </view>
      <view class="whiteBoxShadow" style="transform: translateY(-10px)">
        <boxTitle title="商品信息"></boxTitle>
        <view class="flex margin-top-sm justify-between">
          <text>商品条码</text>
          <text>779879889</text>
        </view>
        <view class="flex margin-top-sm justify-between">
          <text>商品类型</text>
          <text>白酒</text>
        </view>
        <view class="flex margin-top-sm justify-between">
          <text>商品品牌</text>
          <text>东方国宾</text>
        </view>
        <view class="flex margin-top-sm justify-between">
          <text>商品名称</text>
          <text>东方国宾5年陈酿基酒</text>
        </view>

      </view>
      <view class="whiteBoxShadow">
        <boxTitle title="商品价格"></boxTitle>
        <view class="flex margin-top-sm justify-between">
          <text>代理价</text>
          <text>￥299.00</text>
        </view>
        <view class="flex margin-top-sm justify-between">
          <text>建议零售价</text>
          <text>￥499.00</text>
        </view>
        <view class="flex margin-top-sm justify-between">
          <text>团购价</text>
          <text>￥450.00</text>
        </view>
        <view class="flex margin-top-sm justify-between">
          <text>商超指导价</text>
          <text>￥450.00~499.00</text>
        </view>
      </view>
      <view class="whiteBoxShadow margin-top-sm">
        <boxTitle title="商品存储"></boxTitle>
        <view class="flex margin-top-sm justify-between">
          <text>商品总量</text>
          <text>1吨</text>
        </view>
        <view class="flex margin-top-sm justify-between">
          <text>商品总额</text>
          <text>￥30000.00</text>
        </view>
        <view class="flex margin-top-sm justify-between">
          <text>商品包装</text>
          <text>瓶装</text>
        </view>
        <view class="flex margin-top-sm justify-between">
          <text>瓶装数量</text>
          <text>2112瓶</text>
        </view>
        <view class="flex margin-top-sm justify-between">
          <text>存储位置</text>
          <text>好酒选云仓储</text>
        </view>
      </view>
      <view class="whiteBoxShadow margin-top-sm" v-if="status!=1">
        <boxTitle title="提交信息"></boxTitle>
        <view class="flex margin-top-sm justify-between">
          <text>提交时间</text>
          <text>2022-08-30 18:12:23</text>
        </view>
        <view class="flex margin-top-sm justify-between">
          <text>提交人</text>
          <text>￥30000.00</text>
        </view>
        <view class="flex margin-top-sm justify-between">
          <text>商品包装</text>
          <text>瓶装</text>
        </view>
      </view>

    </view>

        <view class="botBtn padding bg-white" v-if="status==1">
          <button @click="addDeliverGoods" class="cu-btn bg-red radius w100">我要发布</button>

        </view>
        <view class="botBtn padding bg-white" v-if="status==3">
          <button @click="addDeliverGoods" class="cu-btn bg-red radius w100">重新提交</button>
        </view>
  </view>
</template>

<script>
import goodsInfoCard from "/src/components/erp/goodsInfoCard";
import fxbImage from "/src/components/fxb/fxb-image";
import copyButton from "/src/components/common/copyButton";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import addressBox from "/src/pages/index/applicationSample/addressBox";
import convertCurrency from "/src/utils/dataFormat/convertCurrency";
import { mapMutations } from "vuex";
import fxbStatusCard from "../../../components/fxb/fxb-status-card";

export default {
  name: "productDetails",
  components: {
    boxTitle,
    copyButton,
    addressBox,
    fxbImage,
    goodsInfoCard,
    fxbStatusCard
  },
  data() {
    return {
      SignIn: false,
      fileList1: [],
      listStatus: 1,
      status: 1,
      showMoney: false,
      addressInfo: {
        name: "张傲",
        phone: "18878855878",
        address: "贵州省贵阳市观山湖区金融城金融城MAX·C座21楼24号"
      },
      expressInfo: [
        { time: "02:26", date: "08.31", content: "商品已支付，等待发货", id: "0" },
        { time: "02:26", date: "08.31", content: "贵阳市金阳三部的王在意已揽件。", id: "1" },
        { time: "02:26", date: "08.31", content: "快递正在运输途中，请您耐心等待。", id: "2" },
        { time: "02:26", date: "08.31", content: "贵阳金阳三部的王晓刚[18565235646]正在为您派件。", id: "3" },
        {
          time: "02:26",
          date: "08.31",
          content:
              "您的快递已暂存至[快宝的38栋中通快递快递超市]，地址：官府一号一组团38栋超市里面，请及时领取。如有疑问请联系：15564545865",
          id: "4"
        },
        {
          time: "02:26",
          date: "08.31",
          content:
              "您的快递已签收，签收人在[快宝的38栋中通快递快递超市]（官府一号一组团38栋超市里面）领取。如有疑问，请联系：18645856575",
          id: "5"
        }
      ]
    };
  },
  computed: {
    expressList() {
      return this.expressInfo.reverse();
    },
    localStatus() {
      const tempArr = ["待发布", "待审核", "未通过", "已发布", "已售罄"];
      const tipsArr = ["你的条码商品待发布", "你的条码申请正在审核中", "您的申请未通过审核", "您的商品已发布", "您的商品已销售完成"];
      const iconArr = ["daishenhe", "daishenhe", "weitongguo", "jinhangzhong", "a-zu699"];
      return {
        status: tempArr[this.status - 1],
        tips: tipsArr[this.status - 1],
        icon: iconArr[this.status - 1]
      };
    }
  },
  methods: {
    ...mapMutations("index", ["setPayResultType"]),
    addDeliverGoods() {
      this.setPayResultType("submitTenderProduct");
      uni.navigateTo({
        url: "/pages/payResult/payResult?status=submitTenderProduct"
      });
    },
    Path() {
      uni.navigateTo({
        url: "/pages/admin/tender/salesRecords"
      });
    },
    convertCurrency,
    // 删除图片
    deletePic(event) {
      this[`fileList${event.name}`].splice(event.index, 1);
    },
    // 新增图片
    async afterRead(event) {
      // 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
      let lists = [].concat(event.file);
      let fileListLen = this[`fileList${event.name}`].length;
      lists.map((item) => {
        this[`fileList${event.name}`].push({
          ...item,
          status: "uploading",
          message: "上传中"
        });
      });
      for (let i = 0; i < lists.length; i++) {
        const result = await this.uploadFilePromise(lists[i].url);
        let item = this[`fileList${event.name}`][fileListLen];
        this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
          status: "success",
          message: "",
          url: result
        }));
        fileListLen++;
      }
    },
    uploadFilePromise(url) {
      return new Promise((resolve, reject) => {
        let a = uni.uploadFile({
          url: "", // 仅为示例，非真实的接口地址
          filePath: url,
          name: "file",
          formData: {
            user: "test"
          },
          success: (res) => {
            setTimeout(() => {
              resolve(res.data.data);
            }, 1000);
          }
        });
      });
    },
    gotoPath(path) {
      uni.navigateTo({
        url: path
      });
    },
    open() {
      // console.log('open');
    },
    close() {
      this.SignIn = false;
      this.showMoney = false;
      // console.log('close');
    }
  },
  onLoad(options) {
    this.status = options.status;
  }

};
</script>

<style lang="scss" scoped>
.botBtn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.botBtn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

/deep/ .addressBox {
  .padding {
    padding: 0;
  }
}
</style>
