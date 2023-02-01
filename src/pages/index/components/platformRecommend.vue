<template>
    <view class="flex flex-wrap justify-between w100">
        <view v-if="!horizontal" class="flex flex-wrap bg-white padding-sm u-border margin-bottom radius w100" style="border-color: rgba(229, 77, 66, 0.16) !important;"
              v-for="(item,index) in recommendList" :key="index" @click="jumpDetail(item.id)">
            <view class="w100 productList flex">
                <view class="cu-avatar radius productImg2 basis-sm h100">
                    <fxbImage width="304" height="304" class="w100 h100" :src="item.image[0]" mode="aspectFill"></fxbImage>
                    <view class="tag">
                        <fxbImage :src="rankList[0]" mode=""></fxbImage>
                    </view>
                </view>
                <view class="flex flex-direction justify-between basis-lg align-stretch margin-left-sm">
                    <view class="text-black text-lg flex align-center">
                        <text class="text-cut text-bold text-lg">{{ item.goodsName }}</text>
                    </view>
                    <view class="flex flex-wrap">
                        <text class="bg-red light radius text-sm padding-lr-xs">热门推荐</text>
                        <text class="bg-green light radius text-sm padding-lr-xs margin-lr-sm">新品首发</text>
                        <text class="bg-orange light radius text-sm padding-lr-xs">口碑商品</text>
                    </view>
                    <!-- 酱香型|53d -->
                    <view v-if="goodWineList" class="grid col-3">
                        <view class="text-center padding-right-xs u-border-right">
                            <view>{{ item.goodsInfo.controAromaticType }}</view>
                            <view class="margin-top-xs text-gray">香型</view>
                        </view>
                        <view class="text-center padding-lr-xs u-border-right">
                            <view>{{ item.goodsInfo.controAlcohol }}</view>
                            <view class="margin-top-xs text-gray">度数</view>
                        </view>
                        <view class="text-center padding-lr-xs">
                            <view>{{ item.goodsInfo.controBrandId }}</view>
                            <view class="margin-top-xs text-gray">产地</view>
                        </view>
                    </view>
                    <view v-else class="flex align-end justify-start">
                        <text class="beyond text-gray text-sm">
                            {{ item.goodsInfo.controAromaticType }}
                            <text class="margin-lr-xs">|</text>
                        </text>
                        <text class="beyond text-gray text-sm">
                            {{ item.goodsInfo.controAlcohol }}
                            <text class="margin-lr-xs">|</text>
                        </text>
                        <text class="beyond text-gray text-sm">
                            {{ item.goodsInfo.controBrandId }}
                            <text class="margin-lr-xs">|</text>
                        </text>
                    </view>
                    <!-- info -->
                    <view v-if="false" class="text-sm flex align-center" :class="goodWineList?'flex-wrap':''">
                        <!--                            <view class="flex align-center margin-top-xs">-->
                        <!--                                <image v-if="item.isStatus<=6"-->
                        <!--                                       :style="item.isStatus<=3?'width: 15rpx;height: 22rpx;':'width: 18rpx;height: 18rpx;'"-->
                        <!--                                       src="/img/index/%E6%A6%9C1%402x.png" mode=""></image>-->
                        <!--                                <view v-if="item.isStatus<=6" class="text-nowarp flex align-center">-->
                        <!--                                    <text-->
                        <!--                                        :class="item.isStatus==1?'one':item.isStatus==2?'two':item.isStatus==3?'three':'recommend'">-->
                        <!--                                        成交榜NO.{{ item.isStatus }}-->
                        <!--                                    </text>-->
                        <!--                                </view>-->
                        <!--                                <view v-if="item.id<=6" class="border margin-lr-xs"></view>-->
                        <!--                            </view>-->
                        <view v-if="!goodWineList" class="text-nowarp flex align-center margin-top-xs">
                            <text>新品首发</text>
                            <view class="border margin-lr-xs"></view>
                        </view>
                        <view class="flex text-nowarp align-center margin-top-xs" v-if="goodWineList"
                              @click.stop="lookInfo(2,item.id)">
                            <view class="radius text-orange text-sm flex align-center">
                                <text style="margin-right: 2rpx" class="cuIcon-goods"></text>
                                特价活动
                            </view>
                        </view>
                        <view style="color:#1CBBB4"
                              class="flex text-nowarp text-sm align-center margin-top-xs margin-lr-sm"
                              @click.stop="lookInfo(1,item.id,item)">
                            <fxbImage class="" style="width: 20rpx;height: 19rpx;margin-right: 2rpx"
                                      src="/img/index/data.png"
                                      mode=""></fxbImage>
                            <view class="">看数据</view>
                        </view>
                        <view class="text-nowarp text-sm flex align-center margin-top-xs" v-if="goodWineList"
                              @click.stop="lookInfo(0,item.id,item)">
                            <text class="cuIcon-text text-sm"></text>
                            <text>看参数</text>
                        </view>
                    </view>
                    <view class="flex align-center justify-between">
                        <!--                            <view v-if="goodWineList" class="text-center radius text-xs" style="overflow: hidden">-->
                        <!--                                <view style="padding: 8rpx 4rpx" class="bg-orange light padding-lr-xs">上月成交量</view>-->
                        <!--                                <view style="padding: 4rpx 4rpx;opacity: 0.7" class="bg-gray light padding-lr-xs">20万瓶-->
                        <!--                                </view>-->
                        <!--                            </view>-->
                        <view class="flex flex-direction justify-around">
                            <view>
                                <text>零售价:</text>
                                <text style="color: #E54D42;" class="text-sm">￥{{ item.goodsRetailPrice }}.00</text>
                            </view>
                            <view class="margin-top-xs">
                                <text>代理价:</text>
                                <text style="color: #E54D42;" class="text-sm">￥{{ item.agencyPrice }}.00</text>
                            </view>
                        </view>
                        <view @click.stop="lookInfo(0,item.id,item)" style="border-radius: 10px 0 0 10px;transform: translateX(20rpx)" class="bg-blue light padding-xs flex align-center">看数据</view>
                    </view>
                    <!--                        <view class="text-gray text-xs beyond2">-->
                    <!--                            简短介绍：{{ item.controApplicableScenarios }}-->
                    <!--                        </view>-->
                    <view v-if="!goodWineList" class="flex justify-between margin-top-xs">
                        <button class="cu-btn bg-orange sm" @click="applySample">申请样品</button>
                        <button class="bg-red cu-btn sm" @click="jumpDetail(item.id)">查看详情</button>
                    </view>
                </view>
            </view>
            <view v-if="goodWineList" style="width: 100%" class="flex margin-top">
                <view class="flex align-center justify-around basis-sm bg-red light radius">
                    <view class="flex align-center">
                        <text class="cuIcon-medalfill text-red"></text>
                        <text class="text-xs margin-left-xs">好酒选独家代理</text>
                    </view>
                    <text class="cuIcon-selectionfill" style="font-size: 26px;opacity: 0.3"></text>
                </view>
                <view class="flex justify-between basis-lg margin-left-sm">
                    <button class="cu-btn bg-orange" @click.stop="applySample">申请样品</button>
                    <button class="bg-red cu-btn margin-right-xs"
                            @click.stop="jumpDetail(item.id)">我要代理
                    </button>
                </view>
            </view>
        </view>
        <view v-if="horizontal" class="flex flex-wrap bg-white margin-bottom u-border radius" style="width: 49%;overflow: hidden;border-color: rgba(229, 77, 66, 0.16) !important;"
              v-for="(item,index) in recommendList" :key="index" @click="jumpDetail(item.id)">
            <view class="w100 productList flex flex-direction">
                <view class="cu-avatar productImg2 w100 h100">
                    <fxbImage height="304" class="w100 h100" :src="item.image[0]" mode="aspectFill"></fxbImage>
                    <view class="tag">
                        <fxbImage :src="rankList[0]" mode=""></fxbImage>
                    </view>
                </view>
                <view class="flex flex-direction justify-between w100 padding-xs">
                    <view class="text-black text-lg flex align-center">
                        <text class="text-cut text-bold text-lg">{{ item.goodsName }}</text>
                    </view>
                    <view class="flex align-center justify-between margin-top-xs">
                        <view class="bg-red light radius text-xs padding-lr-xs"><view class=" text-cut">热门推荐</view></view>
                        <view class="bg-green light radius text-xs padding-lr-xs"><view class=" text-cut">新品首发</view></view>
                        <view class="bg-orange light radius text-xs padding-lr-xs"><view class=" text-cut">口碑商品</view></view>
                    </view>
                    <!-- 酱香型|53d -->
                    <view v-if="goodWineList" class="grid col-3 text-sm margin-top-xs">
                        <view class="text-center padding-right-xs u-border-right">
                            <view>{{ item.goodsInfo.controAromaticType }}</view>
                            <view class="margin-top-xs text-gray">香型</view>
                        </view>
                        <view class="text-center padding-lr-xs u-border-right">
                            <view>{{ item.goodsInfo.controAlcohol }}</view>
                            <view class="margin-top-xs text-gray">度数</view>
                        </view>
                        <view class="text-center padding-lr-xs">
                            <view>{{ item.goodsInfo.controBrandId }}</view>
                            <view class="margin-top-xs text-gray">产地</view>
                        </view>
                    </view>
                    <view v-else class="flex align-end justify-start">
                        <text class="beyond text-gray text-sm">
                            {{ item.goodsInfo.controAromaticType }}
                            <text class="margin-lr-xs">|</text>
                        </text>
                        <text class="beyond text-gray text-sm">
                            {{ item.goodsInfo.controAlcohol }}
                            <text class="margin-lr-xs">|</text>
                        </text>
                        <text class="beyond text-gray text-sm">
                            {{ item.goodsInfo.controBrandId }}
                            <text class="margin-lr-xs">|</text>
                        </text>
                    </view>
                    <!-- info -->
                    <view v-if="false" class="text-sm flex align-center" :class="goodWineList?'flex-wrap':''">
                        <!--                            <view class="flex align-center margin-top-xs">-->
                        <!--                                <image v-if="item.isStatus<=6"-->
                        <!--                                       :style="item.isStatus<=3?'width: 15rpx;height: 22rpx;':'width: 18rpx;height: 18rpx;'"-->
                        <!--                                       src="/img/index/%E6%A6%9C1%402x.png" mode=""></image>-->
                        <!--                                <view v-if="item.isStatus<=6" class="text-nowarp flex align-center">-->
                        <!--                                    <text-->
                        <!--                                        :class="item.isStatus==1?'one':item.isStatus==2?'two':item.isStatus==3?'three':'recommend'">-->
                        <!--                                        成交榜NO.{{ item.isStatus }}-->
                        <!--                                    </text>-->
                        <!--                                </view>-->
                        <!--                                <view v-if="item.id<=6" class="border margin-lr-xs"></view>-->
                        <!--                            </view>-->
                        <view v-if="!goodWineList" class="text-nowarp flex align-center margin-top-xs">
                            <text>新品首发</text>
                            <view class="border margin-lr-xs"></view>
                        </view>
                        <view class="flex text-nowarp align-center margin-top-xs" v-if="goodWineList"
                              @click.stop="lookInfo(2,item.id)">
                            <view class="radius text-orange text-sm flex align-center">
                                <text style="margin-right: 2rpx" class="cuIcon-goods"></text>
                                特价活动
                            </view>
                        </view>
                        <view style="color:#1CBBB4"
                              class="flex text-nowarp text-sm align-center margin-top-xs margin-lr-sm"
                              @click.stop="lookInfo(1,item.id,item)">
                            <fxbImage class="" style="width: 20rpx;height: 19rpx;margin-right: 2rpx"
                                      src="/img/index/data.png"
                                      mode=""></fxbImage>
                            <view class="">看数据</view>
                        </view>
                        <view class="text-nowarp text-sm flex align-center margin-top-xs" v-if="goodWineList"
                              @click.stop="lookInfo(0,item.id,item)">
                            <text class="cuIcon-text text-sm"></text>
                            <text>看参数</text>
                        </view>
                    </view>
                    <view class="flex align-center justify-between margin-top-xs">
                        <!--                            <view v-if="goodWineList" class="text-center radius text-xs" style="overflow: hidden">-->
                        <!--                                <view style="padding: 8rpx 4rpx" class="bg-orange light padding-lr-xs">上月成交量</view>-->
                        <!--                                <view style="padding: 4rpx 4rpx;opacity: 0.7" class="bg-gray light padding-lr-xs">20万瓶-->
                        <!--                                </view>-->
                        <!--                            </view>-->
                        <view class="flex flex-direction justify-around text-sm">
                            <view>
                                <text>零售价:</text>
                                <text style="color: #E54D42;">￥{{ item.goodsRetailPrice }}.00</text>
                            </view>
                            <view class="margin-top-xs">
                                <text>代理价:</text>
                                <text style="color: #E54D42;">￥{{ item.agencyPrice }}.00</text>
                            </view>
                        </view>
                        <view @click.stop="lookInfo(0,item.id,item)" style="border-radius: 10px 0 0 10px;transform: translateX(10rpx)" class="bg-blue light padding-xs flex align-center text-sm">看数据</view>
                    </view>
                    <!--                        <view class="text-gray text-xs beyond2">-->
                    <!--                            简短介绍：{{ item.controApplicableScenarios }}-->
                    <!--                        </view>-->
                    <view class="flex align-center justify-between padding-lr-xs bg-red light radius margin-top-xs">
                        <view class="flex align-center">
                            <text class="cuIcon-medalfill text-red"></text>
                            <text class="text-xs margin-left-xs">好酒选独家代理</text>
                        </view>
                        <text class="cuIcon-selectionfill" style="font-size: 26px;opacity: 0.3"></text>
                    </view>
                    <view class="flex justify-between margin-top-xs">
                        <button class="cu-btn bg-orange sm" @click.stop="applySample">申请样品</button>
                        <button class="bg-red cu-btn sm" @click.stop="jumpDetail(item.id)">查看详情</button>
                    </view>
                </view>
            </view>
        </view>
        <uni-popup ref="popup" type="center">
            <view v-show="lookInfoState == 0" class="productParameter bg-white padding-tb-lg padding-lr-sm">
                <view class="flex align-center justify-between">
                    <text></text>
                    <text class="text-lg">产品参数</text>
                    <text @click="close" class="cuIcon-close" style="font-size: 24px"></text>
                </view>
                <table border="1" style="margin: 0 auto">
                    <tr class="text-sm">
                        <td>品名</td>
                        <td class="padding-lr-sm " style="width: 80%">
                            {{ goodsDetails.goodsName }}
                        </td>
                    </tr>
                    <tr class="text-sm">
                        <td>香型</td>
                        <td class="padding-lr-sm " style="width: 80%">
                            {{ goodsDetails.goodsInfo ? goodsDetails.goodsInfo.controAromaticType : "" }}
                        </td>
                    </tr>
                    <tr class="text-sm">
                        <td>酒精度</td>
                        <td class="padding-lr-sm " style="width: 80%">
                            {{ goodsDetails.goodsInfo ? goodsDetails.goodsInfo.controAlcohol : "" }}
                        </td>
                    </tr>
                    <tr class="text-sm">
                        <td>容量</td>
                        <td class="padding-lr-sm " style="width: 80%">
                            {{ goodsDetails.goodsInfo.controNetContent }}
                        </td>
                    </tr>
                    <tr class="text-sm">
                        <td>酒瓶材质</td>
                        <td class="padding-lr-sm " style="width: 80%">
                            {{ goodsDetails.goodsInfo.controMaterialQuality }}
                        </td>
                    </tr>
                    <tr class="text-sm">
                        <td>厂家</td>
                        <td class="padding-lr-sm " style="width: 80%">
                            {{ goodsDetails.goodsInfo.controManufactor }}
                        </td>
                    </tr>
                    <tr class="text-sm">
                        <td>产地</td>
                        <td class="padding-lr-sm " style="width: 80%">
                            {{ goodsDetails.goodsInfo.controPlaceOfOrigin }}
                        </td>
                    </tr>
                    <tr class="text-sm">
                        <td>原料</td>
                        <td class="padding-lr-sm " style="width: 80%">
                            {{ goodsDetails.goodsInfo.controRawMaterial }}
                        </td>
                    </tr>
                    <tr class="text-sm">
                        <td>执行标准</td>
                        <td class="padding-lr-sm " style="width: 80%">
                            {{ goodsDetails.goodsInfo.controExecutiveStandards }}
                        </td>
                    </tr>
                    <tr class="text-sm">
                        <td>规格参数</td>
                        <td class="padding-lr-sm " style="width: 80%">
                        </td>
                    </tr>
                    <tr class="text-sm">
                        <td>商品编号</td>
                        <td class="padding-lr-sm " style="width: 80%">

                            {{ goodsDetails.goodsInfo.controArticleNo }}
                        </td>
                    </tr>
                    <tr class="text-sm">
                        <td>主体</td>
                        <td class="padding-lr-sm " style="width: 80%"></td>
                    </tr>
                    <tr class="text-sm">
                        <td>保质期</td>
                        <td class="padding-lr-sm " style="width: 80%">
                            {{ goodsDetails.goodsInfo.controQualityGuaranteePeriod }}
                        </td>
                    </tr>
                    <tr class="text-sm">
                        <td>储存方式</td>
                        <td class="padding-lr-sm " style="width: 80%">
                            {{ goodsDetails.goodsInfo.controStorageMode }}
                        </td>
                    </tr>
                    <tr class="text-sm">
                        <td>参数</td>
                        <td class="padding-lr-sm " style="width: 80%"></td>
                    </tr>
                    <tr class="text-sm">
                        <td>适用场景</td>
                        <td class="padding-lr-sm " style="width: 80%">
                            {{ goodsDetails.goodsInfo.controApplicableScenarios }}
                        </td>
                    </tr>
                    <tr class="text-sm">
                        <td>包装形式</td>
                        <td class="padding-lr-sm " style="width: 80%">
                            {{ goodsDetails.goodsInfo.controPackagingForm }}
                        </td>
                    </tr>
                </table>
                <view class="flex justify-between margin-top">
                    <button @click="close" style="width: 46%" class="cu-btn bg-gray">取消</button>
                    <button @click="jumpDetail(goodsId)" style="width: 46%" class="cu-btn bg-red">查看详情</button>
                </view>
            </view>
            <view v-show="lookInfoState == 1" class="productParameter bg-white padding-tb-lg padding-lr-sm">
                <view class="flex align-center justify-between">
                    <text></text>
                    <text class="text-lg">成交数据</text>
                    <text @click="close" class="cuIcon-close" style="font-size: 24px"></text>
                </view>
                <view class="margin-tb">
                    <view class="flex align-center">
                        <view style="width: 8rpx; height: 30rpx; border-radius: 10rpx"
                              class="bg-red margin-right-sm"></view>
                        <text class="text-bold text-lg">本月销量走势图</text>
                    </view>
                    <view>
                        <view class="flex padding-sm align-center showType">
                            <view class="flex align-center text-bold padding-right-sm">茅台王子酒
                                <view class="cuIcon-triangledownfill"></view>
                            </view>
                            <u-tag size="mini" text="成交量" @click="changeType('1')" :plain="showType!=='1'"></u-tag>
                            <u-tag size="mini" class="margin-left-sm" text="走势图" :plain="showType!=='2'"
                                   @click="changeType('2')"
                                   type="error"></u-tag>
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
                <view class="flex justify-between margin-top">
                    <button @click="close" style="width: 46%" class="cu-btn bg-gray">取消</button>
                    <button @click="jumpDetail(goodsId)" style="width: 46%" class="cu-btn bg-red">查看详情</button>
                </view>
            </view>
            <view v-show="lookInfoState == 2" class="productParameter bg-white padding-tb-lg padding-lr-sm">
                <view class="flex align-center justify-between">
                    <text></text>
                    <text class="text-lg">温馨提示</text>
                    <text @click="close" class="cuIcon-close" style="font-size: 24px"></text>
                </view>
                <view class="margin-tb">
                    <text>
                        尊敬好的好酒选用户，您好！为保证酒类市场公平行，代理政策必须是会员才可查看，您可以先入驻会员，成为会员后可代理平台产品。谢谢您的理解！
                    </text>
                </view>
                <view class="flex justify-between margin-top">
                    <button @click="close" style="width: 46%" class="cu-btn bg-gray">再考虑</button>
                    <button style="width: 46%" class="cu-btn bg-red">会员入驻</button>
                </view>
            </view>
        </uni-popup>
    </view>
</template>
<script>
import fxbImage from "/src/components/fxb/fxb-image";

export default {
    name: "platformRecommend",
    components: {
        fxbImage
    },
    props: {
        horizontal: {
            type: Boolean,
            default: false
        },
        goodWineList: {
            type: Boolean,
            default: false
        },
        recommendList: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    data() {
        return {
            goodsId: null,
            rankList: [
                "/img/index/11.png",
                "/img/index/22.png",
                "/img/index/33.png"
            ],
            showType: "2",
            lookInfoState: -1,
            opts: {
                color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
                padding: [20, 10, 10, 20],
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
            goodsDetails: {
                goodsInfo: ""
            }
        };
    },
    mounted() {
        this.getServerData();
    },
    methods: {
        application(id, imgUrl) {
            uni.navigateTo({
                url: `/pages/index/applicationSample/sampleOrder?id=${id}&url=${imgUrl}`
            });
        },
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        },
        changeType(val) {
            this.showType = val;
        },
        jumpDetail(id) {
            this.$refs.popup.close();
            // uni.navigateTo({
            //     url: "/pages/hotActivity/appactivityDetails?goodsId=" + id
            // });
            // return
            uni.navigateTo({
                url: "/pages/hotActivity/activityDetails?goodsId=" + id
            });
        },
        applySample() {
            uni.navigateTo({
                url: "/pages/index/applicationSample/sampleOrder?id=125&url=" + require("/src/static/bottle/11.jpeg")
            });
        },
        getServerData() {
            let _this = this;
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
                _this.chartData1 = JSON.parse(JSON.stringify(res1));
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
                _this.chartData2 = JSON.parse(JSON.stringify(res2));
            }, 500);
        },
        lookInfo(e, id, goodsDetails) {
            this.goodsId = id;
            this.$refs.popup.open();
            this.lookInfoState = e;
            this.goodsDetails = goodsDetails;
        },
        jumpPay() {
            uni.navigateTo({
                url: "pages/memberPayment/memberPay"
            });
        },
        open() {
            // console.log('open');
            this.$refs.popup.open();
        },
        close() {
            this.$refs.popup.close();
            this.showType = "2";
            // console.log('close');
        }
    }
};
</script>

<style lang="scss" scoped>

.text-scale {
    transform: scale(0.9);
}

.productParameter {
    width: 600rpx;
    border-radius: 20rpx;
}

.chartsview {
    width: 500rpx;
}

.productList {
    position: relative;
    .border {
        width: 2rpx;
        height: 22rpx;
        background-color: darkgray;
    }

    .one {
        color: #E54D42;
    }

    .two {
        color: #F37B1D;
    }

    .three {
        color: #FBBD08;
    }

    .recommend {
        color: #A5673F;
    }
}

.productImg2, .productImg {
    overflow: hidden;
    .tag {
        position: absolute;
        right: 0;
        top: 0;
        image {
            width: 100rpx;
            height: 100rpx;
            background-size: 100%;
        }
    }
}

td,
th,
table {
    border: 1px solid #bebebe;
}

tr {
    td {
        &:nth-child(1) {
            text-align: center;
            padding: 14rpx 0;
            width: 120rpx;
        }

        &:nth-child(2) {
            padding: 0 10rpx;
        }
    }
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

.horizontalWidth {
    width: 360rpx;
}

.beyond {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.beyond2 {
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}

.cu-avatar {
    background-color: rgba(0, 0, 0, 0);
}

.text-nowarp {
    white-space: nowrap;
}
</style>
