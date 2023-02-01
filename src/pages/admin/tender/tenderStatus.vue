<template>
  <view class="content" style="padding-bottom: 100rpx">
    <view :class="isNav?'':'bg-white'" :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
          class="headerNav"></view>
    <fxbUNavbar :isTabs="false" :isNav="isNav" :transparency="transparency.toString()" @changeTab="changeTab"></fxbUNavbar>
    <view class="u-demo-block">
      <swiper indicator-dots indicator-color="rgba(207,207,207,1)" indicator-active-color="rgba(255,255,255,1)"
              style="height: 750rpx" class="swiper-box" @change="change">
        <!--                TODO:假数据-->
        <swiper-item style="height: 750rpx" v-for="(item ,index) in imgList" :key="index">
          <view class="swiper-item">
            <fxbImage v-if="item" width="750" height="750" :src="item.imgUrl"></fxbImage>
            <view v-if="index==0" @click="gotoVideo" class="videoMask">
              <u-icon class="uIcon" color="#FFFFFF" name="play-circle" size="100"></u-icon>
            </view>
          </view>
        </swiper-item>
      </swiper>
    </view>

    <view class="bg-white margin-top-sm padding-sm">
      <view class="flex justify-between align-center">
        <view class="text-lg text-bold">东方国宾·工匠酒招商项目</view>
        <view :class="status==1||status==2?'text-blue':status==3||status==4||status==5?'text-green':'text-red'" class="text-lg">{{transStatus(status)}}</view>
      </view>
      <view class="margin-top align-center flex">
        <text>交易类型：</text>
        <text class="cu-tag bg-red light">平台托管</text>
        <text class="cu-tag bg-red light margin-left">收益率:16.5%~22.5%</text>
      </view>
      <view class="margin-top">
        <view class="flex justify-between align-center">
          <view style="background-color: rgba(229,77,66,0.05);width: 332rpx" class="padding-sm">
            <view>商品总量</view>
            <view class="text-xl text-red margin-top-sm text-bold">29500瓶</view>
          </view>
          <view style="background-color: rgba(229,77,66,0.05);width: 332rpx" class="padding-sm">
            <view>筹集金额</view>
            <view class="text-xl text-red margin-top-sm text-bold">¥6000000.00</view>
          </view>
        </view>
      </view>
      <view class="margin-tb text-lg" :class="status==1||status==2?'text-blue':status==3||status==4||status==5?'text-green':'text-red'">{{status==1||status==2?'剩余时间：15日23时25分':status==3||status==4||status==5?'公告已发布':'已结束'}}</view>
      <view class="flex">
        <view class="text-center" style="width: 33.3%;border-right: 1px solid #F0F0F0">
          <view class="text-xl text-bold">10人</view>
          <view class="margin-top-sm text-gray">招标人数</view>
        </view>
        <view class="text-center" style="width: 33.3%">
          <view class="text-xl text-bold">36人</view>
          <view class="margin-top-sm text-gray">投标人数</view>
        </view>
        <view class="text-center" style="width: 33.3%;border-left: 1px solid #F0F0F0">
          <view class="text-xl text-bold" :class="status==1||status==2?'text-red':'text-green'">6人</view>
          <view class="margin-top-sm text-gray">满足条件</view>
        </view>
      </view>
    </view>

    <view class="bg-white margin-top-sm">
      <u-tabs :list="list1"
              activeStyle="font-size:32rpx;font-weight:bold"
              @click="getType"
              inactiveStyle="font-size:30rpx" lineColor="red" lineWidth="35"></u-tabs>
    </view>

    <view v-if="((status==1||status==2)&&num==1)||((status>2)&&num==2)"
          class="margin-top-sm">
      <view class="whiteBoxShadow">
        <boxTitle title="项目概况"></boxTitle>
        <text class="text-gray" style="text-indent: 80px">这是招标信息的项目概况，这是招标信息的项目概况
          招标信息的项目概况这是，招标信息的项目概况这是招标
          信息的项目概况这是招标信息的项目概况这是。招标信息 的项这是招标信息的，项目概况这是招标信息的项目概况 目概况
        </text>
      </view>
      <view class="whiteBoxShadow margin-top-sm">
        <boxTitle title="项目基本信息"></boxTitle>
        <view class="flex justify-between margin-top-sm">
          <view>项目名称</view>
          <view>贵州好酒选有限公司</view>
        </view>
        <view class="flex justify-between margin-top-sm">
          <view>项目编号</view>
          <view>5245142012042145</view>
        </view>
        <view class="flex justify-between margin-top-sm">
          <view>起止时间</view>
          <view>2022-08-30~2022-09-30</view>
        </view
        >
        <view class="flex justify-between margin-top-sm">
          <view>招标方式</view>
          <view>多人</view>
        </view>
        <view class="flex justify-between margin-top-sm">
          <view>招标人数</view>
          <view>5人</view>
        </view>
        <view class="flex justify-between margin-top-sm">
          <view>招标金额</view>
          <view>5000.00/人</view>
        </view>
        <view class="flex justify-between margin-top-sm">
          <view>保证金</view>
          <view>5000.00</view>
        </view>
        <view class="flex justify-between margin-top-sm">
          <view>保证金截止时间</view>
          <view>2022-09-30</view>
        </view>
      </view>
      <view class="whiteBoxShadow margin-top-sm">
        <boxTitle title="资格审核"></boxTitle>
        <text>
          1 必须具备独立法人资格，有独立承担民事责任的能力，
          具有有效的营业执照（扫描件加盖投标人公章）；
          2）具有良好的商业信誉及健全的财务会计制度（提供
          2021年度经会计师事务所审计的财务审计报告(必须含
          审计报告、资产负债表、利润表、现金流量表和财务报
          表附注)（扫描件加盖投标人公章）；2021年及之后新
          成立企业如没有财务审计报告的，可提供基本存款账户
          开户许可证、基本存款账户开户银行出具的资信证明
          （扫描件加盖投标人公章）；
          3）具有依法缴纳税收和社会保障资金的良好记录（税
          收证明：1.2022年以来（其中任意三个月）纳税期限内
          的完税或缴税凭证或税务机关出具的依法缴纳税收的证
          明材料；
        </text>
      </view>
      <view class="whiteBoxShadow margin-top-sm">
        <boxTitle title="招标文件"></boxTitle>
      </view>
    </view>

    <view v-if="((status==1||status==2)&&num==2)||((status>2)&&num==3)" class="margin-top-sm">
      <view class="whiteBoxShadow">
        <boxTitle title="商品信息"></boxTitle>
        <view class="flex justify-between margin-top-sm" v-for="(item,index) in project" :key="index">
          <view>{{ item.name }}</view>
          <view>{{ item.value }}</view>
        </view>
        <view class="margin-top-sm">生产许可证</view>
        <view class="margin-top-sm">
          <u-upload
              :fileList="fileList3"
              @afterRead="afterRead"
              @delete="deletePic"
              name="3"
              multiple
              :maxCount="10"
              :previewFullImage="true"
          ></u-upload>
        </view>
        <view class="margin-top-sm">质检报告</view>
        <view class="margin-top-sm">
          <u-upload
              :fileList="fileList3"
              @afterRead="afterRead"
              @delete="deletePic"
              name="3"
              multiple
              :maxCount="10"
              :previewFullImage="true"
          ></u-upload>
        </view>
      </view>
      <view class="whiteBoxShadow margin-top-sm">
        <boxTitle title="商品价格"></boxTitle>
        <view class="flex justify-between margin-top-sm">
          <view>商品总量</view>
          <view>8吨</view>
        </view>
        <view class="flex justify-between margin-top-sm">
          <view>商品单价</view>
          <view>50000.00/吨</view>
        </view>
        <view class="flex justify-between margin-top-sm">
          <view>商品总额</view>
          <view>5000000.00</view>
        </view>
        <view class="flex justify-between margin-top-sm">
          <view>是否支持包装设计</view>
          <view>是</view>
        </view>
        <view class="flex justify-between margin-top-sm">
          <view>包装总费用</view>
          <view>5000.00</view>
        </view>
      </view>
      <view class="whiteBoxShadow margin-top-sm">
        <boxTitle title="商品详情"></boxTitle>
      </view>
    </view>

    <view v-if="((status==1||status==2)&&num==0)||(status>2&&num==1)">
      <view class="margin-top padding-lr-sm padding-tb bg-white">
        <view>
          <boxTitle title="我的投标"></boxTitle>
          <view class="flex justify-between margin-top-sm">
            <view>项目名称</view>
            <view>东方国宾·尊致招商投标项目</view>
          </view>
          <view class="flex justify-between margin-top-sm">
            <view class="text-gray">项目编号</view>
            <view>251615132131</view>
          </view>
          <view class="flex justify-between margin-top-sm">
            <view class="text-gray">招标金额</view>
            <view class="text-red">¥5000000.00</view>
          </view>
          <view class="flex justify-between margin-top-sm">
            <view class="text-gray">招标人数</view>
            <view>10人</view>
          </view>
          <view class="flex justify-between margin-top-sm">
            <view class="text-gray">保证金</view>
            <view class="text-red">¥50000.00</view>
          </view>
          <view class="flex justify-between margin-top-sm">
            <view class="text-gray">报名时间</view>
            <view>2022-05-20 12:15:56</view>
          </view>
        </view>
      </view>
      <view class="margin-top-sm">
        <view class="padding-sm bg-white">
          <view class="flex align-center padding-bottom padding-top-sm">
            <view class="cuIcon-titles text-red" style="font-size: 30rpx"></view>
            <text class="text-lg text-bold">缴纳保证金</text>
          </view>
          <view class="flex justify-between align-center padding-lr-sm padding-bottom-sm">
            <view>保证金缴纳</view>
            <view @click="goToPay(status)">
              <text class="margin-right-sm" :class="status==1?'text-red':'text-blue'">
                {{ status == 1 ? "未缴纳" : status==8?'已退回':'已缴纳' }}
              </text>
              <text class="cuIcon-right"></text>
            </view>
          </view>
        </view>
      </view>
      <view class="margin-top-sm">
        <view class="padding-sm bg-white">
          <view class="flex align-center padding-bottom padding-top-sm">
            <view class="cuIcon-titles text-red" style="font-size: 30rpx"></view>
            <text class="text-lg text-bold">投标文件</text>
          </view>
          <view class="flex justify-between align-center padding-lr-sm padding-bottom-sm">
            <view>投标文件</view>
            <view @click="goToUpload()">
              <text class="margin-right-sm" :class="status==1?'text-red':'text-blue'">
                {{ status == 1 ? "未上传" : "已上传" }}
              </text>
              <text class="cuIcon-right"></text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view v-if="((status==3||status==6)&&num==0)">
      <view class="padding-lr-sm padding-tb bg-white margin-top-sm text-center">
        <view class="cuIcon-roundcheckfill text-red" style="font-size: 100rpx"></view>
        <view class="text-orange text-xl margin-top text-bold">恭喜您，已中标</view>
        <view class="margin-top">请立即前往支付合同款</view>
        <view class="margin-top" v-if="status==3">
          <view class="cu-btn bg-red" @click="goToPays()" style="width: 100%">支付合同款</view>
        </view>
      </view>
      <view class="bg-white text-center margin-top-sm">
        <view class="flex justify-between align-center padding-sm">
          <view class="text-gray">查看招商合同</view>
          <view class="cuIcon-right" style="font-size: 38rpx"></view>
        </view>
      </view>
    </view>

    <view v-if="((status==3||status==5||status==6||status==7||status==8)&&num==0)">
      <view class="padding-lr-sm padding-tb bg-white margin-top-sm">
        <view class="text-red">温馨提示：</view>
        <view class="margin-top text-sm text-red" style="line-height: 48rpx">尊敬的用户，因您超时未支付合同款，系统判定您未弃标状态，根据系相关法律规定，弃标将没收保证金，严重将纳入黑名单并赔偿相应的损失，系统已没收您的保证金。</view>
      </view>
      <view class="padding-lr-sm padding-tb bg-white margin-top-sm">
        <boxTitle title="中标公告"></boxTitle>
        <view style="line-height: 48rpx">项目名称：东方国宾·尊致条码招标中标公告，2011年8月30日全国中小河流治理织金县底那河治理工程在贵州省水利水电建设工程交易中心进行开标、评标活动，经依法组建的评标委员会按招标文件的评标标准和方法，对各投标人的投标文件进行评审，并依法推荐了以下中标候选人进行公示。</view>
        <view class="margin-top-xs">中标名单如下：</view>
        <view class="margin-top-xs">1、贵州中意科技有限公司：王刚</view>
        <view class="margin-top-xs">2、好酒选科技有限公司：张胜男</view>
        <view class="margin-top-xs">3、守云间科技有限公司：张刚</view>
        <view class="margin-top-xs">4、贵州中意科技有限公司：王刚</view>
      </view>
    </view>

    <view v-if="(status==4&&num==0)">
      <view class="bg-white margin-top-sm">
        <view class="padding-left-sm padding-tb">
          <boxTitle title="废标公告"></boxTitle>
          <view class="padding-lr-xs" style="line-height: 48rpx">
            <view>一、项目基本情况</view>
            <view>采购项目编号：XINB20221025-1</view>
            <view>采购项目名称：中华人民共和国庄河海关机关食堂食品原料定点供应商采购项目</view>
            <view>二、项目废标/流标的原因</view>
            <view>因有效投标单位不足三家，根据《中华人民共和国政府采购法》第三十六条的规定，本项目依法废标。</view>
            <view>三、其他补充事宜</view>
            <view>无</view>
            <view>四、凡对本次公告内容提出询问，请按以下方式联系。</view>
            <view>1.采购人信息</view>
            <view>名 称：中华人民共和国庄河海关</view>
            <view>地址：辽宁省庄河市新华路南段51号</view>
            <view>联系方式：李工0411- 87957363</view>
            <view>2.采购代理机构信息</view>
            <view>名 称：大连鑫邦项目管理有限公司</view>
            <view>地　址：大连市中山区常青街29号休斯顿公寓A座1001室</view>
            <view>联系方式：马丽荣0411－62636163</view>
            <view>3.项目联系方式</view>
            <view>项目联系人：马丽荣</view>
            <view>电　话：　　0411－62636163</view>
          </view>
        </view>
      </view>
    </view>

    <view v-if="status==6&&num==0">
      <view class="padding-lr-sm padding-tb bg-white margin-top-sm">
        <boxTitle title="合同金额"></boxTitle>
        <view class="flex justify-between align-center margin-bottom-sm">
          <view class="text-gray">商品名称</view>
          <view>东方国宾·工匠酒</view>
        </view>
        <view class="flex justify-between align-center margin-bottom-sm">
          <view class="text-gray">商品条码</view>
          <view>1545645121354455</view>
        </view>
        <view class="flex justify-between align-center margin-bottom-sm">
          <view class="text-gray">商品总量</view>
          <view>21000瓶</view>
        </view>
        <view class="flex justify-between align-center margin-bottom-sm">
          <view class="text-gray">商品总额</view>
          <view class="text-red">¥5000000.00</view>
        </view>
        <view class="flex justify-between align-center margin-bottom-sm">
          <view class="text-gray">我的占比</view>
          <view>10%</view>
        </view>
        <view class="flex justify-between align-center margin-bottom-sm">
          <view class="text-gray">应付金额</view>
          <view class="text-red">¥500000.00</view>
        </view>
      </view>
      <view class="padding-lr-sm padding-tb bg-white margin-top-sm">
        <boxTitle title="支付记录"></boxTitle>
        <view class="flex justify-between align-center margin-bottom-sm">
          <view class="text-gray">支付状态</view>
          <view>已支付</view>
        </view>
        <view class="flex justify-between align-center margin-bottom-sm">
          <view class="text-gray">支付金额</view>
          <view>¥500000.00</view>
        </view>
        <view class="flex justify-between align-center margin-bottom-sm">
          <view class="text-gray">支付方式</view>
          <view>
            <text>银行转账</text>
            <text class="cuIcon-right margin-left-sm"></text>
          </view>
        </view>
        <view class="flex justify-between align-center margin-bottom-sm">
          <view class="text-gray">支付时间</view>
          <view>2022-05-12:12:15</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import fxbUNavbar from "/src/components/fxb-u-navbar/fxb-u-navbar";
import fxbImage from "/src/components/fxb/fxb-image";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
export default {
  name: "tenderStatus",
  components:{
    fxbUNavbar,
    fxbImage,
    boxTitle
  },
  data(){
    return{
      fileList3: [{
        url: "https://cdn.uviewui.com/uview/swiper/1.jpg"
      }],
      project: [
        { name: "商品条形码", value: "256544575" },
        { name: "商品类型", value: "白酒" },
        { name: "商品品牌", value: "东方国宾" },
        { name: "商品名称", value: "东方国宾5年陈酿基酒" },
        { name: "度数", value: "53度" },
        { name: "特点", value: "五粮" },
        { name: "生产期", value: "2022年" },
        { name: "发酵期", value: "180天" },
        { name: "存放期", value: "5年" },
        { name: "生产基地", value: "贵州遵义" },
        { name: "生产厂家", value: "东方国宾酒业有限公司" }
      ],
      num:0,
      status:0,
      list1:[
        {
          name:'我的投标'
        },
        {
          name:'项目介绍'
        },
        {
          name:'商品信息'
        },
      ],
      isNav: true,
      goodsDetails: {
        goodsInfo: {}
      },
      imgList:[
        {
          imgUrl:'http://124.220.219.72:8085/img/1ec5389e521b45d89107a630a3302d51.jpg'
        },
        {
          imgUrl:'http://124.220.219.72:8085/img/305e329af08e443886115b0d1e78eb89.jpg'
        },
        {
          imgUrl:'http://124.220.219.72:8085/img/2f13afdef87c4feb91d251161bace79a.jpg'
        },
        {
          imgUrl:'http://124.220.219.72:8085/img/09edc7a9cd354ef3ad6e268c01335332.jpg'
        },
      ],
      transparency: 0.0,
      count: 0,
    }
  },
  created() {
    // this.getType();
    this.$nextTick(() => {
      if (this.status == 4) {
        this.list1 = [
          { name: "废标公告" },
          { name: "投标信息" },
          { name: "项目介绍" },
          { name: "商品信息" }
        ];
      } else if (this.status > 2) {
        this.list1 = [
          { name: "中标公告" },
          { name: "投标信息" },
          { name: "项目介绍" },
          { name: "商品信息" }
        ];
      } else {
        this.list1 = [
          { name: "我的投标" },
          { name: "项目介绍" },
          { name: "商品信息" }
        ];
      }
    });
  },
  onPageScroll(e) {
    if (e.scrollTop >= 350 && e.scrollTop < (350 + this.StatusBar + this.CustomBar)) {
      this.transparency = (((e.scrollTop - 350) / 100) * 3.33).toFixed(1);
    }
    if (e.scrollTop >= (350 + this.StatusBar + this.CustomBar)) {
      this.transparency = 1.0;
    }
    if (e.scrollTop <= 350) {
      this.transparency = 0.0;
    }
    if (e.scrollTop >= 350 + this.StatusBar) {
      this.isNav = false;
    } else {
      this.isNav = true;
    }
  },
  onLoad(options) {
    this.status = options.status;
  },
  methods:{
    goToPay(status) {
      if (status == 1) {
        uni.navigateTo({
          url: "/pages/admin/tender/tenderPay?status=" + status
        });
      } else {
        uni.navigateTo({
          url: "/pages/admin/tender/depositPaid?status=" + status
        });
      }
    },
    goToUpload() {
      uni.navigateTo({
        url: "/pages/admin/tender/uploadTender"
      });
    },
    goToPays(){
      uni.navigateTo({
        url: "/pages/admin/tender/payContract"
      });
    },
    getType(e){
      this.num = e.index;
    },
    transStatus(status) {
      const tempArr = ["进行中", "评标中","已公布","已公布","已公布", "已结束", "已结束", "已结束"];
      return tempArr[status - 1];
    },
    filterImage(imgArr = []){
      let arr = []
      imgArr.forEach(item => {
        if (item){
          arr.push(item)
        }
      })
      console.log(arr);
      return arr
    },
    changeTab(e) {
      let fatherTop = 0;
      const query = uni.createSelectorQuery().in(this);
      query.select(".fatherBox").boundingClientRect(data => {
        fatherTop = data.top;
      }).exec();
      query.select(`#point${e}`).boundingClientRect(res => {
        console.log(res.top);
        uni.pageScrollTo({
          scrollTop: (res.top - fatherTop) + 305 - this.StatusBar,
          duration: 0
        });
      }).exec();
    },
    change(e) {
      this.count = e.current;
    },
    gotoVideo() {
      //#ifdef APP_PLUS
      uni.navigateTo({
        url: "/pages/explore/exploreIndexAppRecommend"
      });
      //#endif

      //#ifdef H5
      uni.navigateTo({
        url: "/pages/explore/exploreIndexH5"
      });
      //#endif
    },
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
          url: "http://192.168.2.21:7001/upload", // 仅为示例，非真实的接口地址
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
  }
}
</script>

<style lang="scss" scoped>
/deep/ .u-navbar {
  .u-navbar__content {
    //background: transparent !important;
    height: var(--CustomBar) !important;
    padding-top: var(--StatusBar);

    .u-navbar__content__left,
    .u-navbar__content__right {
      margin-top: var(--StatusBar);
    }
  }
}

/deep/ .u-swiper {
  height: 750rpx !important;
  border-radius: 0 !important;

  .u-swiper__wrapper {
    height: 100% !important;

    .u-swiper__wrapper__item__wrapper__image {
      width: 750rpx;
      border-radius: 0 !important;
      height: 100% !important;
    }
  }
}

.headerNav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999999999;
  width: 750rpx;
  height: var(--StatusBar) !important;
}

/deep/ .uni-swiper-wrapper {
  position: relative;

  .uni-swiper-dot-active {
    border: 1rpx solid #F37B1D;
  }

  .videoMask {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 750rpx;
    background-color: rgba(9, 9, 9, 0.1);

    .uIcon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

}
</style>