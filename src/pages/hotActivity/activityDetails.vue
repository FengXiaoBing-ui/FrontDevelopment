<template>
    <view class="content" style="padding-bottom: 100rpx">
        <view :class="isNav?'':'bg-white'" :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px' }"
              class="headerNav"></view>
        <fxbUNavbar :isNav="isNav" :transparency="transparency.toString()" @changeTab="changeTab"></fxbUNavbar>
        <view class="u-demo-block">
            <swiper indicator-dots indicator-color="rgba(207,207,207,1)" indicator-active-color="rgba(255,255,255,1)"
                    style="height: 750rpx" class="swiper-box" @change="change">
<!--                TODO:假数据-->
                <swiper-item style="height: 750rpx" v-for="(item ,index) in filterImage(goodsDetails.image)" :key="index">
                    <view class="swiper-item">
                        <fxbImage v-if="item" width="750" height="750" :src="item"></fxbImage>
                        <view v-if="index==0" @click="gotoVideo" class="videoMask">
                            <u-icon class="uIcon" color="#FFFFFF" name="play-circle" size="100"></u-icon>
                        </view>
                    </view>
                </swiper-item>
            </swiper>

        </view>

        <view class="fatherBox padding-lr-sm padding-top-sm padding-bottom">
            <!--商品信息-->
            <view class="whiteBoxShadow">
                <view class="productInfo">
                    <view class="retailPrice flex justify-between">
                        <view>
                            <text class="text-gray text-sm">建议零售价：</text>
                            <text class="text-red text-bold text-lg">￥ {{ goodsDetails.goodsRetailPrice || 0 }}.00
                            </text>
                        </view>
                        <!-- <button class="cu-btn bg-red light sm">八折优惠活动</button> -->
                    </view>
                    <view class="text-bold text-lg margin-tb-sm">
                        {{ goodsDetails.goodsName || "" }}
                    </view>
                    <view class="flex justify-between">
                        <view class="flex align-center text-sm" style="width:66%">
                            <fxbImage mode=""
                                      src="/productDetails/user.png"
                                      style="width: 26rpx;height: 26rpx;"></fxbImage>
                            <text class="text-gray margin-left-xs">
                                {{ goodsDetails.goodsInfo ? goodsDetails.goodsInfo.controManufactor : "" }}
                            </text>
                        </view>
                        <view class="flex align-center justify-end text-sm" style="width: 30%">
                            <text class="cuIcon-location"></text>
                            <text class="text-gray">贵州·贵阳</text>
                        </view>
                    </view>
                    <view v-if="false" class="tag flex align-center margin-tb-sm">
                        <view class="flex align-center">
                            <fxbImage mode=""
                                      src="/img/index/111.png"
                                      style="width: 18rpx;height: 27rpx;"></fxbImage>
                            <text class="text-sm margin-left-xs" style="color: #E54D42;">成交榜NO.1</text>
                        </view>
                        <view class="margin-lr-xs text-gray">|</view>
                        <view class="bg-orange light text-sm radius" style="padding: 6rpx 10rpx">服务商首推产品</view>
                        <view class="margin-lr-xs text-gray">|</view>
                        <view class="bg-orange light text-sm radius" style="padding: 6rpx 10rpx">新品推荐</view>
                    </view>
                    <view class="flex align-center margin-tb-sm">
                        <view class="padding-lr-xs radius bg-red light">热门推荐</view>
                        <view class="padding-lr-xs radius bg-green light margin-lr-sm">新品首发</view>
                        <view class="padding-lr-xs radius bg-orange light">口碑商品</view>
                    </view>
                    <!--        <view class="flex align-center justify-between">-->
                    <!--            <view class="flex align-center">-->
                    <!--                <text class="text-gray text-sm">选择地区：</text>-->
                    <!--                <text class="text-black">贵州省 贵阳市 观山湖区 世纪城社区</text>-->
                    <!--            </view>-->
                    <!--            <text class="cuIcon-right" style="font-size: 32rpx"></text>-->
                    <!--        </view>-->
                    <!--        <view class="flex margin-tb-sm">-->
                    <!--            <text class="text-bold margin-right-sm">当前该地区剩余代理名额为:</text>-->
                    <!--            <text class="text-red text-bold">26人</text>-->
                    <!--        </view>-->
                    <view v-if="false" class="flex align-center">
                        <text class="text-gray">会员代理价:</text>
                        <text class="text-red text-bold">￥259.00</text>
                        <!--            <text class="margin-lr-xs text-red text-bold">￥-->
                        <!--                <button class="cu-btn bg-red sm" @click="openPopup(2)">会员可查看</button>-->
                        <!--            </text>-->
                        <text class="text-blue margin-lr-sm" @click="openPopup(1)">会员有哪些权益？</text>
                    </view>

                    <view class="flex justify-between flex-wrap align-center">
                        <view class="padding-sm bg-red light radius margin-top-sm" style="width: 48%">
                            <view class="text-black">代理价</view>
                            <view class="flex align-center text-xs margin-top-xs">
                                <view class="cu-tag bg-red sm radius">会员可见</view>
                                <text class="text-blue margin-left-xs" @click="openPopup(1)">会员有哪些权益?</text>
                            </view>
                        </view>
                        <view class="padding-sm bg-red light radius margin-top-sm" style="width: 48%">
                            <view class="text-black">建议零售价</view>
                            <view class="text-lg text-red margin-top-xs">¥375.00</view>
                        </view>
                        <view class="padding-sm bg-red light radius margin-top-sm" style="width: 48%">
                            <view class="text-black">企业团购价</view>
                            <view class="text-lg text-red margin-top-xs">¥295.00</view>
                        </view>
                        <view class="padding-sm bg-red light radius margin-top-sm" style="width: 48%">
                            <view class="text-black">商超指导价</view>
                            <view class="text-lg text-red margin-top-xs">¥305.00 ~￥315.00</view>
                        </view>
                    </view>

                    <u-popup :round="6" :show="show" mode="center" @close="close" @open="open">
                        <view v-show="lookInfoState == 1" class="productParameter bg-white padding-tb-lg padding-lr-sm">
                            <view class="flex align-center justify-between">
                                <text></text>
                                <text class="text-lg">会员有哪些权益？</text>
                                <text class="cuIcon-close" style="font-size: 24px" @click="close"></text>
                            </view>
                            <view class="margin-tb">
                                <text style="line-height: 50rpx">
                                    1.为保护酒类销售的区域隐私，注册用户需开启会员，会员需缴纳(¥5000.00)会员费后才能查看代理政策以及代理价格。
                                    2.若用户30日内未代理产品，会员费自动退回相应账户，平台根究时长收取一定的服务费，若代理成功后，会员费也会自动退回。
                                    3.若用户成功代理产品后还需代理其它产品需重新缴纳会员费，并代理相应产品
                                </text>
                            </view>
                            <view class="flex justify-between margin-top">
                                <button class="cu-btn bg-red" style="width: 100%"
                                        @click="gotoPth('/pages/memberPayment/memberAgreement')">去入驻
                                </button>
                            </view>
                        </view>
                        <view v-show="lookInfoState == 2" class="productParameter bg-white padding-tb-lg padding-lr-sm">
                            <view class="flex align-center justify-between">
                                <text></text>
                                <text class="text-lg">温馨提示</text>
                                <text class="cuIcon-close" style="font-size: 24px" @click="close"></text>
                            </view>
                            <view class="margin-tb">
                                <text>
                                    尊敬好的好酒选用户，您好！为保证酒类市场公平行，代理政策必须是会员才可查看，您可以先入驻会员，成为会员后可代理平台产品。谢谢您的理解！
                                </text>
                            </view>
                            <view class="flex justify-between margin-top">
                                <button class="cu-btn bg-gray" style="width: 46%" @click="close">再考虑</button>
                                <button class="cu-btn bg-red" style="width: 46%"
                                        @click="gotoPth('/pages/memberPayment/memberAgreement')">会员入驻
                                </button>
                            </view>
                        </view>
                    </u-popup>
                </view>
            </view>
            <!--代理政策-->
            <view v-show="policyList.length>0" id="point0" class="whiteBoxShadow margin-top ">
                <boxTitle right-icon="right" title="代理政策" :right-text="address" @change="showAddress = true"></boxTitle>
                <view v-for="(item,index) in policyList" :key="item.name" :class="index==policyType?'policyBoxTouch':''"
                      class="radius margin-tb-sm policyBox"
                      @click="selectPolicy(item,index)">
                    <view class="rightLabel" v-if="item.agentLevels || item.agentLevels.isDeposit ==='是'">
                        免保证金
                    </view>
                    <view class="rightLabel" v-if="item.agentLevels || item.agentLevels.isReduction==='是'">
                        八折优惠
                    </view>
                    <view v-if="index==policyType" class="checked">
                    </view>
                    <u-icon v-if="index==policyType" class="icon"
                            color="#ffffff" name="checkbox-mark" size="12"></u-icon>
                    <view class="w100  padding-sm">
                        <view class="flex align-center">
                            <view class="text-bold">{{ item.policyName }}</view>
                            <text :class="index==policyType?'cuIconRotate':''"
                                  class="cuIcon-unfold margin-left-sm text-bold"
                                  @click.stop="item.show=!item.show">
                            </text>
                        </view>
                        <view class="flex text-sm align-center margin-tb-sm">
                            <view class="text-gray">
                                代理价：￥{{ item.agencyPrice }}/瓶
                            </view>
                            <view class="text-bold text-warning margin-left">
                                合同商品总数：{{ item.agencyContract.commodityQuantity }}瓶
                            </view>
                        </view>
                        <view class="text-bold text-red text-gray text-df">
                            合同总价：￥{{ item.agencyContract.contractPrice }}.00
                        </view>
                    </view>
                    <u-transition :show="index==policyType">
                        <view class="transition u-border-top padding-sm">
                            <view class="text-bold">
                                <text class="">当前剩余代理人数：</text>
                                <text class="text-red">12人</text>
                            </view>
                            <view class="margin-tb-sm flex align-center">
                                <view class="redBlock w50">
                                    <view class="text-sm text-bold">代理价</view>
                                    <view class="text-red margin-top-xs text-bold">
                                        ￥{{ item.agencyPrice }}
                                    </view>
                                </view>
                                <view class="redBlock w50 margin-left-sm">
                                    <view class="text-sm text-bold">商超指导价</view>
                                    <view class="text-red margin-top-xs text-bold">
                                        ￥{{ item.minGuidePrice }}--￥{{ item.maxGuidePrice }}
                                    </view>
                                </view>
                            </view>
                            <view class="margin-tb-sm flex align-center">
                                <view class="redBlock w50">
                                    <view class="text-sm text-bold">企业团购价</view>
                                    <view class="text-red margin-top-xs text-bold">
                                        ￥{{ item.enterpriseGroupPurchasePrice }}
                                    </view>
                                </view>
                                <view class="redBlock w50 margin-left-sm">
                                    <view class="text-sm text-bold">建议零售价</view>
                                    <view class="text-red margin-top-xs text-bold">
                                        ￥{{ item.retailPrice }}
                                    </view>
                                </view>
                            </view>
                        </view>
                        <view class="margin-lr-sm padding-tb u-border-top-bottom">
                            <view class="flex align-center justify-between">
                                <view>合同商品总数</view>
                                <view class="text-bold text-red">
                                    ￥{{ item.agencyContract.contractPrice }}
                                </view>
                            </view>
                            <view class="flex  align-center justify-between">
                                <view>{{ item.agencyContract.commodityQuantity }}瓶</view>
                                <view class=" text-gray">
                                    {{ convertCurrency(item.agencyContract.contractPrice) }}
                                </view>
                            </view>
                        </view>

                        <view v-for="(it,index) in item.rakeBack" :key="index">
                            <view v-if="it.rakeTypeName==='商品返佣'" class="margin-lr padding-tb u-border-bottom">
                                <view class="flex align-center justify-between">
                                    <view>随货奖励</view>
                                    <view class="text-bold text-red">
                                        ￥{{ it.totalAmount }}.00
                                    </view>
                                </view>
                                <view class="flex  align-center justify-between">
                                    <view>{{ it.commodityNum }}瓶</view>
                                    <view class=" text-gray">
                                        {{ convertCurrency(it.totalAmount) }}
                                    </view>
                                </view>
                            </view>
                            <view v-else-if="it.rakeTypeName==='现金返佣'" class="margin-lr padding-tb u-border-bottom">
                                <view class="flex align-center justify-between">
                                    <view>返佣奖励</view>
                                    <view class="text-bold text-red">
                                        ￥{{ it.rakePrice }}.00
                                    </view>
                                </view>
                                <view class="flex  align-center justify-between">
                                    <view></view>
                                    <view class=" text-gray">
                                        {{ convertCurrency(it.rakePrice) }}
                                    </view>
                                </view>
                            </view>
                            <view v-if="it.rakeTypeName==='积分返佣'" class="margin-lr padding-tb u-border-bottom">
                                <view class="flex align-center justify-between">
                                    <view>积分奖励</view>
                                    <view class="text-bold text-red">
                                        ￥{{ it.integralPrice }}.00
                                    </view>
                                </view>
                                <view class="flex  align-center justify-between">
                                    <view>{{ it.integralNum }}积分</view>
                                    <view class=" text-gray">
                                        {{ convertCurrency(it.integralPrice) }}
                                    </view>
                                </view>
                            </view>

                        </view>
                        <view class="text-right  padding-tb margin-lr-sm">
                            <text>优惠后约合：</text>
                            <text class="text-red text-bold">￥245.00/瓶</text>
                        </view>
                    </u-transition>
                </view>
            </view>
            <!--商品详情-->
            <fxbProductDetail id="point1" :goodsDetails="goodsDetails" class="margin-top-sm"></fxbProductDetail>
            <!--成交数据-->
            <view id="point2" class="whiteBoxShadow margin-top-sm">
                <boxTitle title="成交数据" right-icon="triangledownfill" right-text="贵阳市"
                          right-text-class="text-black text-df"></boxTitle>
                <view>
                    <view class="flex justify-between align-center margin-tb">
                        <view class="flex align-center">
                            <text>本月</text>
                            <text class="cuIcon-triangledownfill"></text>
                        </view>
                        <view class="flex align-center choiceCharts">
                            <view :class="activeIndex==0?'bg-red':''" class="padding-xs u-border"
                                  @click="switchCharts(0)">
                                <fxbImage v-show="activeIndex==0"
                                          src="/productDetails/icon/rrr.png"
                                          style="width: 30rpx;height: 25rpx"></fxbImage>
                                <fxbImage v-show="activeIndex==1"
                                          src="/productDetails/icon/ttt.png"
                                          style="width: 30rpx;height: 25rpx"></fxbImage>
                            </view>
                            <view :class="activeIndex==1?'bg-red':''" class="padding-xs u-border"
                                  @click="switchCharts(1)">
                                <fxbImage v-show="activeIndex==0"
                                          src="/productDetails/icon/uuu.png"
                                          style="width: 30rpx;height: 25rpx"></fxbImage>
                                <fxbImage v-show="activeIndex==1"
                                          src="/productDetails/icon/yyy.png"
                                          style="width: 30rpx;height: 25rpx"></fxbImage>
                            </view>
                        </view>
                    </view>
                    <view class="charts-box">
                        <qiun-data-charts
                            v-show="activeIndex==0"
                            :chartData="chartData"
                            :opts="opts"
                            type="line"
                        />
                        <qiun-data-charts
                            v-show="activeIndex==1"
                            :chartData="chartData"
                            :opts="opts2"
                            type="column"
                        />
                    </view>
                    <view class="u-border-top margin-tb" style="width: 90%;margin: 0 auto">
                        <view class="flex align-center justify-between margin-top">
                            <view class="text-center">
                                <view>成交额</view>
                                <view class="text-red text-xl margin-top-xs">8000万元</view>
                            </view>
                            <view class="text-center">
                                <view>成交量</view>
                                <view class="text-red text-xl margin-top-xs">100万瓶</view>
                            </view>
                            <view class="text-center">
                                <view>利润</view>
                                <button class="cu-btn radius bg-red sm margin-top-xs">会员可查看</button>
                            </view>
                        </view>
                    </view>

                </view>
                <view class="border bg-gray margin-tb"></view>
                <view>
                    <text>同期占比分析</text>
                    <qiun-data-charts
                        :chartData="chartData2"
                        :opts="opts3"
                        type="pie"
                    />
                </view>
                <view class="border bg-gray margin-tb"></view>
                <view>
                    <text>同期占比分析</text>
                    <view class="padding-lr-sm margin-top padding-tb bg-red light radius">
                        <text class="text-black">该产品在平台同期成交额占该种类成交额的</text>
                        <text>2.23%市场占有率3.2%</text>
                        <text class="text-black">，排名贵阳市销售</text>
                        <text>第12名</text>
                        <text class="text-black">，成交</text>
                        <text>利润率为35%</text>
                        <text class="text-black">，利润率高出同类产品平均值25%该地区剩余代理名额32。</text>
                    </view>
                </view>
            </view>

            <!--代理政策无内容-->
            <fxbAgentPolicy id="point0" v-if="policyList.length<=0"
                            class="whiteBoxShadow margin-top-sm"></fxbAgentPolicy>
            <!--口碑-->
            <view v-if="true" class="whiteBoxShadow margin-top-sm">
                <boxTitle right-icon="right" right-text="查看全部" right-text-class="text-black text-df" title="口碑">
                </boxTitle>
                <view class="evaluate">
                    <view class="text-bold text-xl">
                        <text>口碑评价</text>
                        <text class="text-red margin-left-sm">4.25分</text>
                    </view>
                    <view class="flex flex-wrap align-center margin-tb-sm">
                        <view :class="'bg-red '" class="evaluateTag text-center text-gray radius light">综合</view>
                        <view class="evaluateTag text-center text-gray radius light bg-gray">口感</view>
                        <view class="evaluateTag text-center text-gray radius light bg-gray">价格</view>
                    </view>
                    <fxbUserEvaluate></fxbUserEvaluate>

                </view>
            </view>
            <!--测评-->
            <fxbEvaluation id="point3" class="whiteBoxShadow margin-top-sm"></fxbEvaluation>
            <view class="whiteBoxShadow margin-top ">
                <view class="flex justify-between">
                    <boxTitle right-icon="down" title="代理政策"></boxTitle>
                    <view class="flex justify-around radius bg-gray h50 w25">
                        <view class="cuIcon-down" style="font-size: 20px"></view>
                        <view>下载文件</view>
                    </view>
                </view>
                <view class="text-bold text-lg w100 padding underline">飞天茅台53°瓶装代理政策</view>
                <view class="margin-top">
                    <fxbImage src="/admin/text.png" style="width: 100%;height: 550px"></fxbImage>
                </view>
            </view>
        </view>

        <view class="botBtn bg-white flex justify-between align-center padding-lr padding-tb-sm">
            <view class="flex align-center text-sm">
                <view class="text-center" @click="gotoPth('/pages/messageCenter/discussionGroup')">
                    <fxbImage
                        src="/productDetails/icon/qqq.png"
                        style="width: 29rpx;height: 29rpx"></fxbImage>
                    <view class="text-gray">客服</view>
                </view>
                <view v-if="false" class="margin-left text-center">
                    <fxbImage
                        src="/productDetails/icon/eee.png"
                        style="width: 31rpx;height: 31rpx"></fxbImage>
                    <view class="text-gray">贷款</view>
                </view>
                <view class="margin-left text-center" @click="gotoPth('/pages/memberPayment/memberAgreement')">
                    <fxbImage
                        src="/productDetails/icon/eee.png"
                        style="width: 33rpx;height: 29rpx"></fxbImage>
                    <view class="text-gray">会员入驻</view>
                </view>
            </view>
            <view>
                <button class="cu-btn bg-orange"
                        @click="gotoPth('/pages/index/applicationSample/sampleOrder')">申请样品
                </button>
                <button :disabled="policyList.length<=0||policyType==null" class="cu-btn bg-red margin-left-sm"
                        @click="gotoPth('/pages/agentProducts/agentProducts')">我要代理
                </button>
            </view>
        </view>
        <u-popup :round="6" :show="showTip" mode="center" @close="showTip=false" @open="showTip=true">
            <view class="productParameter bg-white padding-tb-lg padding-lr-sm">
                <view class="flex align-center justify-between">
                    <text></text>
                    <text class="text-lg">温馨提示</text>
                    <text class="cuIcon-close" style="font-size: 24px" @click="close"></text>
                </view>
                <view class="margin-tb">
                    <text>
                        尊敬好的好酒选用户，您好！为保证酒类市场公平行，代理政策必须是会员才可查看，您可以先入驻会员，成为会员后可代理平台产品。谢谢您的理解！
                    </text>
                </view>
                <view class="flex justify-between margin-top">
                    <button class="cu-btn bg-gray" style="width: 46%" @click="close">再考虑</button>
                    <button class="cu-btn bg-red" style="width: 46%"
                            @click="gotoPth('/pages/memberPayment/memberAgreement')">
                        会员入驻
                    </button>
                </view>
            </view>
        </u-popup>
        <u-picker @cancel="cancel" :show="showAddress" ref="uPicker" :columns="columns" keyName="name"
                  @confirm="confirm"
                  @change="changeHandler"></u-picker>
    </view>
</template>

<script>
import fxbUNavbar from "/src/components/fxb-u-navbar/fxb-u-navbar";
import qiunDataCharts from "/src/components/qiun-data-charts/qiun-data-charts";
import fxbProductInfo from "/src/pages/hotActivity/components/fxb-product-info";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbProductDetail from "/src/pages/hotActivity/components/fxb-product-detail";
import fxbUserEvaluate from "/src/pages/hotActivity/components/fxb-user-evaluate";
import fxbEvaluation from "/src/pages/hotActivity/components/fxb-evaluation";
import fxbAgentPolicy from "/src/pages/hotActivity/components/fxb-agent-policy";
import fxbImage from "/src/components/fxb/fxb-image";
import convertCurrency from "/src/utils/dataFormat/convertCurrency";
import chinaJson from "/src/utils/china.json";

export default {
    name: "activityDetails",
    components: {
        fxbImage,
        boxTitle,
        fxbProductInfo,
        fxbProductDetail,
        fxbUserEvaluate,
        fxbEvaluation,
        fxbAgentPolicy,
        qiunDataCharts,
        fxbUNavbar
    },
    onLoad(option) {
        this.goodsId = option.goodsId;
        this.getGoodDetails(this.goodsId);
        this.getPolicyListByCommodityId(this.goodsId);
    },
    data() {
        return {
            chinaJson,
            SwiperMfwlist: [
                {
                    Image: "https://b1-q.mafengwo.net/s17/M00/78/09/CoUBXmERFxyAMagZAAd7ujMYDZU158.png",//轮播图(封面图)
                    mp4: "",
                    title: "【岛屿来信】在冰岛写了封信，寄给15岁的自己",//标题
                    UserImage: "https://n1-q.mafengwo.net/s12/M00/D1/C3/wKgED1v3uaOADWepACAWS9q5Rhg19.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",// 用户头像
                    UserName: "诗的PHOTO",// 用户名
                    UserGPS: "杭州" // 当前所在的城市
                },
                {
                    Image: "https://b1-q.mafengwo.net/s15/M00/29/CD/CoUBGWEOpSGAGvNEAAcdPGsxn34626.png",//轮播图(封面图)
                    mp4: "https://1251101074.vod2.myqcloud.com/40efee9dvodtransgzp1251101074/9c9de6b45285890801439533895/v.f20.mp4",
                    title: "【蜂首11周年纪念】4018天后，我们继续约定！",//标题
                    UserImage: "https://b1-q.mafengwo.net/s10/M00/73/96/wKgBZ1kSsyKAa_91AACgQYkA64o659.png?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",// 用户头像
                    UserName: "游记总编辑",// 用户名
                    UserGPS: "北京" // 当前所在的城市
                },
                {
                    Image: "https://n1-q.mafengwo.net/s16/M00/EB/2D/CoUBUmDlheiAdABtAAgo3xeAaaQ458.jpg?imageMogr2/thumbnail/!440x300r/strip/gravity/Center/crop/!440x300/quality/90",//轮播图(封面图)
                    mp4: "",
                    title: "一半风光一半人文，与你奔赴藏地找寻世界如初的模样",//标题
                    UserImage: "https://p1-q.mafengwo.net/s10/M00/5C/55/wKgBZ1mRHV2APLX9AABt9unXidc25.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",// 用户头像
                    UserName: "郭小yan",// 用户名
                    UserGPS: "广州" // 当前所在的城市
                },
                {
                    Image: "https://b1-q.mafengwo.net/s18/M00/21/34/CoUBYWEHpHOAU3amAAQzcB1XxYQ493.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",//轮播图(封面图)
                    mp4: "",
                    title: "海州日记：山海辽阔浪漫 海鲜诱惑难挡，全是人间值得！",//标题
                    UserImage: "https://b1-q.mafengwo.net/s9/M00/B3/D4/wKgBs1hgfP-Ae9emABNBFw8wn4U38.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",// 用户头像
                    UserName: "风之七彩",// 用户名
                    UserGPS: "无锡" // 当前所在的城市
                },
                {
                    Image: "https://n1-q.mafengwo.net/s16/M00/40/C8/CoUBUmD1sDWAAeQFAAnK3yTNs_I942.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",//轮播图(封面图)
                    mp4: "",
                    title: "西北大环线自驾丨初夏，一场7日逃离「地球」的旅行",//标题
                    UserImage: "https://n1-q.mafengwo.net/s1/M00/9A/AA/wKgIC1uEE6SAF_DOAACyC15Thk811.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",// 用户头像
                    UserName: "帆妮儿",// 用户名
                    UserGPS: "北京" // 当前所在的城市
                },
                {
                    Image: "https://n1-q.mafengwo.net/s16/M00/81/40/CoUBUmD5W1iAanT9ABE22ZlvQlg407.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",//轮播图(封面图)
                    mp4: "",
                    title: "在缙云，我发现了去仙侠宇宙的传送门",//标题
                    UserImage: "https://b1-q.mafengwo.net/s15/M00/8E/41/CoUBGV3h1xqAdMEiACG5XnWSoMA99.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",// 用户头像
                    UserName: "莎莎爱旅行",// 用户名
                    UserGPS: "上海" // 当前所在的城市
                },
                {
                    Image: "https://n1-q.mafengwo.net/s16/M00/42/A2/CoUBUmDw8T6AdDCjABhWy-clT_M281.jpg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90",//轮播图(封面图)
                    mp4: "",
                    title: "【魔都漫步】去上海，穿越时空的盛夏",//标题
                    UserImage: "https://b1-q.mafengwo.net/s15/M00/92/A8/CoUBGWECgimABvHVAAlxqNsMSGw93.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",// 用户头像
                    UserName: "goericgo",// 用户名
                    UserGPS: "青岛" // 当前所在的城市
                }
            ],
            currentIndex: 0,
            showAddress: false,
            address: "贵州省 贵阳市 观山湖区 世纪城社区",
            columns: [], //省份数据显示，三级联动需要三维数组，展示初始数据
            columnData: [], //市数据
            columnDatas: [], //区地址
            columnDataStreet: [], //街道社区
            policyId: "",
            goodsDetails: {
                goodsInfo: {}
            },
            goodsId: 0,
            showTip: false,
            policyType: null,
            lookInfoState: 0,
            policyList: [],
            activeIndex: 0,
            transparency: 0.0,
            isNav: true,
            current: 0,
            show: false,
            status: "nomoreText",
            count: 0,
            list: [],
            opts: {
                color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
                padding: [15, 0, 0, 0],
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
                        type: "curve",
                        width: 2
                    }
                }
            },
            opts2: {
                color: ["#FAC858", "#EE6666", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
                padding: [15, 0, 0, 0],
                legend: {},
                xAxis: {
                    disableGrid: true
                },
                yAxis: {
                    data: [
                        {
                            min: 0
                        }
                    ]
                },
                extra: {
                    column: {
                        type: "group",
                        width: 30,
                        activeBgColor: "#000000",
                        activeBgOpacity: 0.08,
                        linearType: "custom",
                        seriesGap: 5,
                        linearOpacity: 0.5,
                        barBorderCircle: true,
                        customColor: [
                            "#FA7D8D",
                            "#EB88E2"
                        ]
                    }
                }
            },
            opts3: {
                color: ["#F47F24", "#E54D42", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
                padding: [5, 0, 0, 0],
                extra: {
                    pie: {
                        activeOpacity: 0.5,
                        activeRadius: 10,
                        offsetAngle: 0,
                        labelWidth: 15,
                        border: true,
                        borderWidth: 3,
                        borderColor: "#FFFFFF"
                    }
                }
            },
            chartData: {},
            chartData2: {
                series: [
                    {
                        data: [
                            { "name": "同类产品中销售额占比25%", "value": 25, "labelText": "同类产品中销售额占比25%" },
                            { "name": "其他类型产品销售额", "value": 75 }
                        ]
                    }
                ]
            },
            policy: {
                policyPrice: [{
                    name: "合同总量",
                    value: "300件(1800瓶)"
                },
                    {
                        name: "合同总额",
                        value: "壹佰万元整(￥1000000.00)",
                        textRed: true
                    },
                    {
                        name: "首单进货",
                        value: "300箱(1800瓶)"
                    },
                    {
                        name: "首单总额",
                        value: "￥466000.00",
                        textRed: true
                    },
                    {
                        name: "单价",
                        value: "259元/瓶"
                    },
                    {
                        name: "随货支持",
                        value: "20%(价值93240元)",
                        textRed: true
                    }
                ],
                specialAgent: [
                    {
                        name: "首单进价",
                        value: "￥500000.00",
                        textRed: true
                    },
                    {
                        name: "首单进货",
                        value: "100件(600瓶)"
                    },
                    {
                        name: "首单总额",
                        value: "￥4660000.00",
                        textRed: true
                    }
                ],

                appraisal: [ // 品鉴会
                    {
                        name: "支持场数",
                        value: "50场"
                    },
                    {
                        name: "总价值",
                        value: "100900元",
                        textRed: true
                    },
                    {
                        name: "品签酒",
                        value: "2瓶/场"
                    },
                    {
                        name: "餐费报销",
                        value: "1500/场"
                    }
                ],
                taskGoal: "年任务量需达60万(￥600000.00)，未达标者取消代理资格", //任务达标
                taskReward: [{
                    name: "年任务量达",
                    value: "一百万元(￥1000000.00)",
                    textRed: true
                },
                    {
                        name: "随货奖励",
                        value: "100件(价值155400元)"
                    },
                    {
                        name: "返佣奖励可选择等值的积分或商品",
                        textMin: true
                    },
                    {
                        name: "奖励商品",
                        value: "一百万元(￥1000000.00)",
                        textRed: true
                    },
                    {
                        name: "奖励积分",
                        value: "100件(价值155400元)"
                    }
                ]
            }
        };
    },
    mounted() {
        this.getServerData(0);
        this.initDataPicker();
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
    methods: {
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
        mfwChange(e) {
            this.currentIndex = e.current;
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
        async getPolicyListByCommodityId(goodsId) {
            const res = await this.$http.getPolicyListByCommodityId({ commodityId: goodsId }).then();
            this.policyList = res.data;
            console.log(res);
        },
        selectPolicy(item, index) {
            this.policyId = item.id;
            if (index === this.policyType) {
                this.policyType = null;
            } else {
                this.policyType = index;
            }

        },
        async getGoodDetails(id) {
            const res = await this.$http.getGoodDetails(id);
            this.goodsDetails = res.data;
            console.log(res.data);
        },
        convertCurrency,
        selectArea() {
            uni.navigateTo({
                url: "/pages/appCenter/selectCity/selectArea"
            });
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
        //切换图表
        switchCharts(index) {
            this.activeIndex = index;
            this.getServerData(index);
        },
        getServerData(index) {
            let res = {};
            //模拟从服务器获取数据时的延时
            //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
            if (index == 0) {
                res = {
                    categories: ["1号", "5号", "10号", "15号", "20号", "25号", "30号"],
                    series: [
                        {
                            name: "成交额/万元",
                            data: [0, 10, 25, 15, 30, 10, 40, 10]
                        },
                        {
                            name: "成交量/百瓶",
                            data: [10, 20, 35, 25, 40, 20, 50, 20]
                        },
                        {
                            name: "利润/万元",
                            data: [20, 30, 45, 35, 50, 30, 60, 30]
                        }
                    ]
                };
            } else {
                res = {
                    categories: ["1号", "5号", "10号", "15号", "20号", "25号"],
                    series: [
                        {
                            name: "成交额/万元",
                            data: [35, 36, 31, 33, 13, 34]
                        },
                        {
                            name: "成交量/百瓶",
                            data: [18, 27, 21, 24, 6, 28]
                        },
                        {
                            name: "利润/万元",
                            data: [18, 27, 21, 24, 6, 28]
                        }
                    ]
                };
            }
            setTimeout(() => {
                this.chartData = JSON.parse(JSON.stringify(res));
            }, 100);
        },
        change(e) {
            this.count = e.current;
        },
        gotoPth(path, id, img) {
            this.show = false;
            uni.navigateTo({
                url: path + `?goodsId=${this.goodsId}&policyId=${this.policyId}`
            });
        },
        open() {0
            // console.log('open');
        },
        close() {
            this.show = false;
            // console.log('close');
        },
        openPopup(index) {
            this.show = true;
            this.lookInfoState = index;
        },
        initDataPicker() {
            //此处的province主要用作数据的初始化，即刚打开就需要进行展示的数据，这个跟第一条省份数据相关，我的第一条是北京市，所以需要columns中的三维数组，第一维度是省份数据数组，第二维度是市数据数组，第三维度是区数据数组
            let province = []; //初始数据需要展示的省份
            let province1 = [{
                name: "市辖区",
                code: "1101"
            }]; //因为第一个市北京市，所以就直接添加北京市下辖的直辖市了 也即初始数据需要展示的市，北京市只有一个市辖区
            let province2 = []; //初始数据需要展示的区域数据，也即是 北京市市辖区内的区
            let province3 = [];
            chinaJson.map(item => {
                province.push(item);
            });
            chinaJson[0].children[0].children.map(item => {
                province2.push(item);
            });
            chinaJson[0].children[0].children[0].children.map(item => {
                province3.push(item);
            });

            //省数据 因为要做数据初始化，所以是三维数组
            // 数据格式 [ [所有的省份数据:{},{}] , [第一个省份下的所有的市:{},{},{}] , [第一个市下面所有的区:{},{},{}] ]
            this.columns.push(province);
            this.columns.push(province1);
            this.columns.push(province2);
            this.columns.push(province3);

            // 市数据数组，筛选address.json文件，将全国所有省下面的市数据放入数组
            // 格式[ [第一个省下面所有市,{},{},{}] , [第二个省下面所有市{},{},{}] , [第三个省下面所有市{},{},{}] ] 注意，以上的第一第二对应着 columns[0] 的数据

            chinaJson.map(item => {
                let city = [];
                item.children.map(item1 => {
                    city.push(item1);
                });
                this.columnData.push(city);
            });

            //区数据数组
            //数据格式: [ 所有省下面所有市的所有区 [ 第一个省下面所有市的区:[ [第一个省下面第一个市的所有区] , [第一个省下面第二个市的所有区] ,]   ,   [ 第二个省下面所有市的区:[ [第二个省下面第一个市的所有区] , [第二个省下面第二个市的所有区] ,]   ]

            let area = [];
            chinaJson.map((item, index) => {
                let area1 = []; //省下面所有市的初始化
                item.children.map(item1 => {
                    area = []; //市下面的区初始化
                    item1.children.map(item2 => {
                        area.push(item2);
                    });
                    area1.push(area); // 每循环一个市，添加该市下面的所有区
                });
                this.columnDatas.push(area1); // 每循环一个省，添加该省下面的所有市
            });

            let street = []; //区下所有街道社区
            chinaJson.map((item, index) => {
                let street2 = []; //省下面所有市的初始化
                item.children.map(item1 => {
                    let street1 = []; //市下面的区初始化
                    item1.children.map(item2 => {
                        street = []; //区下面所有街道社区的初始化
                        item2.children.map(item3 => {
                            street.push(item3);
                        });
                        street1.push(street); // 每循环一个区，添加该市下面的社区街道
                    });
                    street2.push(street1); // 每循环一个市，添加该市下面的所有区
                });
                this.columnDataStreet.push(street2); // 每循环一个省，添加该省下面的所有市
            });
        },
        changeHandler(e) {
            //城市选择时触发
            const {
                columnIndex, //当前选择的列，省 / 市 / 区
                value, // 当前选择的数组内容
                values, // values为当前变化列的数组内容
                index, // 当前列的下标值
                indexs, // 当前选择 省 市 区的下表值
                picker = this.$refs.uPicker
            } = e;

            // 当第一列值发生变化时，变化第二列和第三列的值（省份变更，市和区跟着变更）
            if (columnIndex === 0) {
                // 判断当前变更的是省还是市还是区
                // picker为选择器this实例，变化第二列对应的选项
                picker.setColumnValues(1, this.columnData[
                    index]); //设置市为该省下面的所有市，index是当前省在省份数组的下标，对应市数组中的下表就是 该省下面的所有市 的数据
                picker.setColumnValues(2, this.columnDatas[index][0]); // 设置区域为该省下面第一个市下面的所有区域
                picker.setColumnValues(3, this.columnDataStreet[index][0][0]);
            }
            if (columnIndex === 1) {
                // 当第二列发生变化 变化对应的第三列
                picker.setColumnValues(2, this.columnDatas[indexs[0]][index]);
                picker.setColumnValues(3, this.columnDataStreet[indexs[0]][indexs[1]][0]);
            }
            if (columnIndex === 2) {
                // 当第三列发生变化 变化对应的第四列
                picker.setColumnValues(3, this.columnDataStreet[indexs[0]][indexs[1]][index]);
            }
        },
        confirm(e) {
            //点击确定按钮
            this.address = "";
            e.value.forEach(element => {
                this.address += " " + element.name;
            });
            this.showAddress = false;
        },
        cancel() {
            //点击取消按钮
            this.showAddress = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.underline {
    text-align: center;
    border-bottom: 2px red solid
}

.leftNavIcon {
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
}

.rightNavIcon {
    width: 120rpx;
    height: 60rpx;
    border-radius: 60rpx;
}

.charts-box {
    height: 500rpx;
}

.productParameter {
    width: 600rpx;
    border-radius: 20rpx;
}

.policyBoxTouch {
    border: $main-color-red solid 1px;
    background: rgba(229, 77, 66, 0.03);
    border-color: red !important;
}

.policyBox {
    border: #DFDFDF solid 1px;
    position: relative;

    .cuIconRotate {
        transform: rotate(180deg);
        transition: all 0.5s;
    }

    .cuIcon-
    .checked {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 0rpx;
        width: 0rpx;
        border: 10px rgb(229, 77, 66) solid;
        border-left-color: transparent;
        border-top-color: transparent;

    }

    .icon {
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .rightLabel {
        position: absolute;
        right: 0;
        top: 0;
        width: 20%;
        text-align: center;
        height: 36rpx;
        font-size: 20rpx;
        background: #e54d42;
        color: white;
        padding: 2rpx;
        border-radius: 0px 0px 0px 4px;
    }

    .redBlock {
        background: rgba(229, 77, 66, 0.03);
        padding: 20rpx;
        border-radius: 4rpx;
    }
}

.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    width: 100%;
}

.evaluateTag {
    padding: 6rpx;
    min-width: 150rpx;
    margin: 12rpx 10rpx 12rpx 0;
}

.border {
    width: 100%;
    height: 2rpx;
}

.choiceCharts {
    view {
        border-color: red !important;
    }
}

.indicator {
    @include flex(row);
    justify-content: center;

    &__dot {
        height: 18rpx;
        width: 18rpx;
        border-radius: 100px;
        background-color: rgba(200, 200, 200, 0.35);
        margin: 0 5px;
        transition: background-color 0.3s;

        &--active {
            background-color: #ffffff;
            border: 1rpx solid #F37B1D;
        }
    }
}

.indicator-num {
    padding: 2px 0;
    background-color: rgba(0, 0, 0, 0.35);
    border-radius: 100px;
    width: 35px;
    @include flex;
    justify-content: center;

    &__text {
        color: #FFFFFF;
        font-size: 12px;
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

.productParameter {
    width: 600rpx;
    border-radius: 20rpx;
}

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
</style>
