<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="合同详情" :autoBack="true" :rightText="(!$store.state.index.agentAndService&&status==0)?'合同处罚':($store.state.index.agentAndService&&status==0)?'退换货':(!$store.state.index.agentAndService&&status==1)?'异常原因':($store.state.index.agentAndService&&status==1)?'异常原因':''" @rightClick="goReturn(status)">
        </u-navbar>
        <view class="padding-bottom" :style="'margin-top:'+ CustomBar + 'px;padding-bottom:100rpx'">

          <view>
            <fxbStatusCard :status="statusArr[status]" :tips="status==1?'在合同履行过程中发现窜货现象':status==0?'合同进行中':'合同已结束'" icon="daishenhe"></fxbStatusCard>
          </view>
<!--            <view class="whiteBoxShadow margin-bottom-sm">-->
<!--                <view class="flex justify-between">-->
<!--                    <view class="text-gray">状态</view>-->
<!--                    <view :class="status==1?'text-blue':'text-red'">{{ status==1?'进行中' :status==2?'异常' :status==3?'已结束' :'' }}</view>-->
<!--                </view>-->
<!--                <template v-if="status==2">-->
<!--                    <view class="flex justify-between margin-top-sm">-->
<!--                        <view class="text-gray flex-sub">异常原因</view>-->
<!--                        <view class="flex-treble text-red text-right">在合同履行过程中发现串货现象</view>-->
<!--                    </view>-->
<!--                    <view class="flex justify-between margin-top-sm">-->
<!--                        <view class="text-gray"></view>-->
<!--                        <button @click="gotoPath('/pages/admin/adminContract/contractErrorReason')" class="cu-btn radius bg-white u-border">查看详情</button>-->
<!--                    </view>-->
<!--                </template>-->
<!--            </view>-->

            <view class="whiteBoxShadow " style="transform: translateY(-20rpx)">
                <boxTitle :title="status==0||$store.state.index.agentAndService?'保证金':'当前保证金'" right-text="已缴纳" right-text-class="text-gray" v-if="status==0||status==2||$store.state.index.agentAndService"></boxTitle>
                <view v-if="status==1&&!$store.state.index.agentAndService">
                  <boxTitle title="支付保证金"></boxTitle>
                  <view class="flex justify-between align-start margin-top-sm">
                    <view class="margin-left text-gray">保证金</view>
                    <view>
                      <view class="text-lg text-red text-bold">￥50000.00</view>
                      <view class="text-gray text-sm margin-top-xs text-right" style="font-style: oblique">伍万元整</view>
                    </view>
                  </view>
                </view>
                <view class="flex justify-between align-center" v-if="status==0||status==2||$store.state.index.agentAndService">
                    <view>
                        <view class="text-lg text-red text-bold">￥50000.00</view>
                        <view class="text-gray text-sm margin-top-xs" style="font-style: oblique">伍万元整</view>
                    </view>
                    <button v-if="(status==2&&$store.state.index.agentAndService)||(status==2&&!$store.state.index.agentAndService)" @click="applyReturn"  :class="$store.state.index.agentAndService?'line-blue':'bg-red'" class="cu-btn radius">
                        {{$store.state.index.agentAndService?'申请退回':'退回保证金' }}</button>
                </view>
            </view>

            <view class="whiteBoxShadow margin-bottom-sm">
                <view class="flex justify-between align-center text-gray" @click="gotoPdf">
                    <text>查看合同</text>
                    <view class="flex align-center">
<!--                        <text class="text-red">已签约</text>-->
                        <text class="cuIcon-right margin-left" style="font-size: 38rpx"></text>
                    </view>
                </view>
            </view>

            <view class="whiteBoxShadow margin-bottom-sm" v-if="!(status==2&&!$store.state.index.agentAndService)">
                <boxTitle title="合同任务"></boxTitle>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">合同任务总数</view>
                    <view class="flex flex-direction align-end">
                        <view>1800瓶</view>
                        <view class="text-gray text-sm" style="font-style: oblique">300件</view>
                    </view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">合同任务总额</view>
                    <view class="flex flex-direction align-end">
                        <view class="text-red text-bold">¥932600.00</view>
                        <view class="text-gray text-sm" style="font-style: oblique">玖拾叁万贰仟陆佰元整</view>
                    </view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">当前完成任务总数</view>
                    <view class="flex flex-direction align-end">
                        <view>1800瓶</view>
                        <view class="text-gray text-sm" style="font-style: oblique">300件</view>
                    </view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">当前完成任务总额</view>
                    <view class="flex flex-direction align-end">
                        <view class="text-red text-bold">¥932600.00</view>
                        <view class="text-gray text-sm" style="font-style: oblique">玖拾叁万贰仟陆佰元整</view>
                    </view>
                </view>
                <view v-if="status==2&&$store.state.index.agentAndService" class="flex margin-top-sm">
                    <button @click="gotoPath('/pages/admin/returnCommissionAgent/applyCommission')" style="border-color: #0081FF !important;color: #0081FF !important;" class="cu-btn bg-white flex-sub u-border radius">
                        申请返佣</button>
                </view>
            </view>

            <view class="whiteBoxShadow margin-bottom-sm">
                <boxTitle title="合同商品"></boxTitle>
                <view class="margin-top-sm">
                  <view class="text-lg text-bold">东方国宾53°瓶装酱香型 500ml</view>
                  <view class="margin-top-sm text-gray">
                    <text style="margin-right: 60rpx">香型:酱香型</text>
                    <text style="margin-right: 60rpx">度数:53°</text>
                    <text>容量:500ml</text>
                  </view>
                  <view class="flex justify-between align-center margin-top-sm">
                    <view>
                      <text>代理价:</text>
                      <text class="text-red">¥365.00/瓶</text>
                    </view>
                    <view>合同发货数量:2400瓶</view>
                  </view>
                  <view class="margin-top-sm">
                    <button class="cu-btn bg-white u-border radius sm">代理授权书</button>
                  </view>
                </view>
                <view class="margin-tb u-border-bottom"></view>
              <view class="margin-top-sm">
                <view class="text-lg text-bold">东方国宾53°瓶装酱香型 500ml</view>
                <view class="margin-top-sm text-gray">
                  <text style="margin-right: 60rpx">香型:酱香型</text>
                  <text style="margin-right: 60rpx">度数:53°</text>
                  <text>容量:500ml</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                  <view>
                    <text>代理价:</text>
                    <text class="text-red">¥365.00/瓶</text>
                  </view>
                  <view>合同发货数量:2400瓶</view>
                </view>
                <view class="margin-top-sm">
                  <button class="cu-btn bg-white u-border radius sm">代理授权书</button>
                </view>
              </view>
<!--                <twoGoodsInfoCard-->
<!--                    goodsName="东方国宾53°瓶装酱香型 500ml"-->
<!--                    goodsType="酱香型"-->
<!--                    goodsVolume="53°"-->
<!--                    goodsDegrees="500ml"-->
<!--                    agentPrice="2400"-->
<!--                    retailPrice="365.00"-->
<!--                    namePrice="零售价："-->
<!--                >-->
<!--                    <view slot="discount" class="margin-top-sm">-->
<!--                        <button class="cu-btn bg-white u-border radius sm">代理授权证书</button>-->
<!--                    </view>-->
<!--                </twoGoodsInfoCard>-->
            </view>

            <view v-if="false" class="whiteBoxShadow margin-bottom-sm">
                <boxTitle title="申请人信息"></boxTitle>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">申请单位</text>
                    <text>贵阳市万隆烟酒行</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm" @click="gotoPath('/pages/admin/adminContract/agentBusinessLicense')">
                    <text class="text-gray">营业执照信息</text>
                    <text class="cuIcon-right margin-left" style="font-size: 38rpx"></text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm" @click="gotoPath('/pages/admin/adminContract/agencyIDInfo')">
                    <text class="text-gray">法人身份证信息</text>
                    <text class="cuIcon-right margin-left" style="font-size: 38rpx"></text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">申请人</text>
                    <text>张东</text>
                </view>
                <view class="flex justify-between align-center">
                    <text class="text-gray">联系电话</text>
                    <text>18690723848</text>
                </view>
            </view>
            <view v-if="false" class="whiteBoxShadow margin-bottom-sm">
                <boxTitle title="申请商品"></boxTitle>
                <view class="flex">
                    <fxbImage class="radius" style="width: 164rpx;height: 164rpx" mode="aspectFill"
                           src="/productDetails/Slice%201.png"></fxbImage>
                    <view style="width: 70%" class="margin-left-sm flex flex-direction">
                        <view class="text-bold text-lg">飞天茅台53°瓶装酱香型 500ml</view>
                        <view class="flex justify-between text-gray margin-top-sm">
                            <text>香型:酱香型</text>
                            <text>度数:53°</text>
                            <text>容量:550ml</text>
                        </view>
                    </view>
                </view>
                <view class="flex justify-between margin-tb-sm text-gray">
                    <view>零售价:
                        <text class="text-red text-bold">￥365.00</text>
                    </view>
                    <view>代理价:
                        <text class="text-red text-bold">￥265.00</text>
                    </view>
                </view>
                <view class="u-border-bottom margin-tb"></view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">申请等级</text>
                    <text>镇/街道代理</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">申请区域</text>
                    <text>贵州省贵阳市观山湖区世纪城街道</text>
                </view>
                <template v-if="status!=2">
                    <view class="flex justify-between align-center margin-bottom-sm">
                        <text class="text-gray">合同总量</text>
                        <text>300件(1800瓶)</text>
                    </view>
                    <view class="flex justify-between align-center margin-bottom-sm">
                        <text class="text-gray">合同总金额</text>
                        <text>肆拾玖万伍仟元整(￥495000.00)</text>
                    </view>
                </template>

                <template v-if="status==2">
                    <view class="flex justify-between align-center margin-bottom-sm">
                        <text class="text-gray">代理套餐</text>
                        <text>300件(1800瓶)</text>
                    </view>
                    <view class="flex justify-between align-center margin-bottom-sm">
                        <text class="text-gray">代理总价</text>
                        <text>¥466200.00</text>
                    </view>
                    <view class="flex justify-between align-center margin-bottom-sm">
                        <text class="text-gray">首次进货</text>
                        <text>100件(600瓶)</text>
                    </view>
                    <view class="flex justify-between align-center margin-bottom-sm">
                        <text class="text-gray">首次进货总价</text>
                        <text>¥466200.00</text>
                    </view>
                    <view class="flex justify-between align-center margin-bottom-sm">
                        <text class="text-gray">随货支持</text>
                        <text>20%(价值¥93240.00)</text>
                    </view>
                    <view class="flex justify-between align-center margin-bottom-sm">
                        <text class="text-gray">结算方式</text>
                        <text>现结</text>
                    </view>
                </template>
                <view class="flex justify-between align-center">
                    <text class="text-gray">申请时间</text>
                    <text>2022-08-30 12:23:23</text>
                </view>
            </view>

            <view class="whiteBoxShadow margin-bottom-sm text-black">
                <boxTitle title="签约信息"></boxTitle>
                <u-read-more ref="uReadMore" textIndent="0" :toggle="true" showHeight="220" color="gray" openText="向上收起" closeText="查看更多">
                    <view class="flex justify-between align-center margin-bottom-sm">
                        <text class="text-gray">合同编号</text>
                        <text>1224234234234</text>
                    </view>
                    <view class="flex justify-between align-center margin-bottom-sm">
                        <text class="text-gray">合同期限</text>
                        <text>1年</text>
                    </view>
                    <view class="flex justify-between align-center margin-bottom-sm">
                        <text class="text-gray">结算方式</text>
                        <text>现结</text>
                    </view>
                    <view class="flex justify-between align-center margin-bottom-sm">
                        <text class="text-gray">甲方单位</text>
                        <text>贵州好酒选电子商务有限公司</text>
                    </view>
                    <view class="flex justify-between align-center margin-bottom-sm">
                        <text class="text-gray">乙方单位</text>
                        <text>贵阳市万隆烟酒行</text>
                    </view>
                    <view class="flex justify-between align-center margin-bottom-sm" @click="gotoPath('/pages/admin/adminContract/agentBusinessLicense')">
                        <text class="text-gray">乙方营业执照信息</text>
                        <text class="cuIcon-right margin-left text-gray" style="font-size: 38rpx"></text>
                    </view>
                    <view class="flex justify-between align-center margin-bottom-sm" @click="gotoPath('/pages/admin/adminContract/agencyIDInfo')">
                        <text class="text-gray">乙方法人身份证信息</text>
                        <text class="cuIcon-right margin-left text-gray" style="font-size: 38rpx"></text>
                    </view>
                    <view class="flex justify-between align-center margin-bottom-sm">
                        <text class="text-gray">申请人</text>
                        <text>万钢</text>
                    </view>
                    <view class="flex justify-between align-center margin-bottom-sm">
                        <text class="text-gray">联系电话</text>
                        <text>18690723848</text>
                    </view>
                    <view class="flex justify-between align-center margin-bottom-sm">
                        <text class="text-gray">代理等级</text>
                        <text>镇/街道代理(保证金)</text>
                    </view>
                    <view class="flex justify-between align-center margin-bottom-sm">
                        <view class="text-gray flex-sub">代理区域</view>
                        <view class="flex-treble text-right">贵州省贵阳市观山湖区世纪城街道</view>
                    </view>
                    <view class="flex justify-between align-center margin-bottom-sm">
                        <text class="text-gray">结算方式</text>
                        <text>现结</text>
                    </view>
                    <view class="flex justify-between align-center margin-bottom padding-bottom u-border-bottom">
                        <text class="text-gray">生成时间</text>
                        <text>2022-08-30 12:23:23</text>
                    </view>
                </u-read-more>

            </view>

            <view class="whiteBoxShadow margin-bottom-sm">
                <boxTitle title="合同明细"></boxTitle>
                <view class="margin-bottom text-df text-bold">代理价格</view>
                <u-read-more ref="uReadMore" textIndent="0" :toggle="true" color="gray" openText="向上收起" closeText="查看更多">
                    <view class="padding-lr-sm">
                      <fxbTable :td-list="tdList" attribute="类别" attribute-value="单价/瓶"></fxbTable>
                    </view>


                    <view class="text-bold margin-top-sm">合同金额</view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">合同商品总量</view>
                        <view class="flex flex-direction align-end">
                            <view>3600瓶</view>
                            <view class="text-gray text-sm" style="font-style: oblique">600件</view>
                        </view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">合同商品总额</view>
                        <view class="flex flex-direction align-end">
                            <view class="text-red text-bold">¥932600.00</view>
                            <view class="text-gray text-sm" style="font-style: oblique">玖拾叁万贰仟陆佰元整</view>
                        </view>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">合同期限</text>
                        <text>1年</text>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">结算方式</text>
                        <text>现结</text>
                    </view>


                    <view class="text-bold padding-top margin-top u-border-top">首单进货</view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">首单进货商品数量</view>
                        <view class="flex flex-direction align-end">
                            <view>600瓶</view>
                            <view class="text-gray text-sm" style="font-style: oblique">100件</view>
                        </view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">首单进货金额</view>
                        <view class="flex flex-direction align-end">
                            <view class="text-red text-bold">¥155400.00</view>
                            <view class="text-gray text-sm" style="font-style: oblique">拾伍万伍仟肆佰元整</view>
                        </view>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">首单随货支持(百分比)</text>
                        <text>20%</text>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">支持商品数量</view>
                        <view class="flex flex-direction align-end">
                            <view>120瓶</view>
                            <view class="text-gray text-sm" style="font-style: oblique">20件</view>
                        </view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">支持商品金额</view>
                        <view class="flex flex-direction align-end">
                            <view class="text-red text-bold">¥31080.00</view>
                            <view class="text-gray text-sm" style="font-style: oblique">拾伍万伍仟肆佰元整</view>
                        </view>
                    </view>

                    <view class="text-bold padding-top margin-top u-border-top">返佣奖励</view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">完成合同任务量</view>
                        <view class="flex flex-direction align-end">
                            <view>3600瓶</view>
                            <view class="text-gray text-sm" style="font-style: oblique">600件</view>
                        </view>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">返佣方式</text>
                        <text>商品</text>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">返佣商品数量</view>
                        <view class="flex flex-direction align-end">
                            <view>600瓶</view>
                            <view class="text-gray text-sm" style="font-style: oblique">100件</view>
                        </view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">返佣商品金额合计</view>
                        <view class="flex flex-direction align-end">
                            <view class="text-red text-bold">¥155400.00</view>
                            <view class="text-gray text-sm" style="font-style: oblique">拾伍万伍仟肆佰元整</view>
                        </view>
                    </view>


                    <view class="text-bold padding-top margin-top u-border-top">品鉴会支持</view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">单场支持金额</text>
                        <text class="text-red">¥1500.00/场</text>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">单场支持酒水</text>
                        <text>2瓶/场</text>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">单场支持统计(含酒水)</text>
                        <text class="text-red">¥2018.00/场</text>
                    </view>


                    <view class="text-bold padding-top margin-top u-border-top">保证金减免</view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">免保证金</view>
                        <view class="flex flex-direction align-end">
                            <view class="text-red text-bold">¥100900.00</view>
                            <view class="text-gray text-sm" style="font-style: oblique">拾万零玖佰元整</view>
                        </view>
                    </view>


                    <view class="text-bold padding-top margin-top u-border-top">合同生效条件</view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">商品首付款</text>
                        <text class="text-red">需支付首单付款</text>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm margin-bottom padding-bottom u-border-bottom">
                        <text class="text-gray">保证金</text>
                        <text>需缴纳保证金</text>
                    </view>
                </u-read-more>
            </view>

            <view v-if="status==0||!$store.state.index.agentAndService" class="whiteBoxShadow margin-bottom-sm">
                <boxTitle title="审核信息"></boxTitle>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">审核人</text>
                    <text>万钢</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">审核时间</text>
                    <text>2022-08-30 12:12:23</text>
                </view>
            </view>
        </view>
        <view class="botBtn padding-xs bg-white" v-if="status==2&&$store.state.index.agentAndService">
            <button @click="gotoRenewal" class="cu-btn bg-red radius" style="width: 100%">我要续约</button>
        </view>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
import fxbTable from "/src/components/fxb/fxb-table"
import infoCard from "/src/components/fxb/fxb-info-card"
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import twoGoodsInfoCard from "../../../components/erp/twoGoodsInfoCard";
import fxbStatusCard from "/src/components/fxb/fxb-status-card";
export default {
    name: "contractDetail",
    components:{
        boxTitle,
        infoCard,
        twoGoodsInfoCard,
        fxbTable,
        fxbImage,
        fxbStatusCard
    },
    data(){
        return{
            status:0,
            statusArr: [
              "进行中",
              "异常",
              "已结束",
            ],
            standard:0,
            tdList:[
                {
                    name:"建议零售价",
                    price:"￥365.00"
                },
                {
                    name:"商超指导价",
                    price:"￥300.00~￥365.00"
                },
                {
                    name:"企业团购价",
                    price: "￥290.00"
                },
                {
                    name:"代理价",
                    price: "￥275.00"
                }
            ]
        }
    },
    onLoad(options){
        let _this = this;
        this.status = options.status;
        this.standard = options.standard;
    },
    methods:{
        goReturn(status){
          if(this.$store.state.index.agentAndService                                                      ){
            if(status==0){
              uni.navigateTo({
                url:"/pages/admin/returnExchange/returnOne"
              })
            }else {
              uni.navigateTo({
                url:"/pages/admin/adminContract/contractErrorReason"
              })
            }
          }else {
            if(status==0){
              uni.navigateTo({
                url:"/pages/admin/adminContract/contractPunish"
              })
            }else {
              uni.navigateTo({
                url:"/pages/admin/adminContract/contractErrorReason"
              })
            }
          }
        },

        gotoRenewal(){
            uni.navigateTo({
                url:"/pages/agentProducts/agentProducts"
            })
        },
        gotoPdf(){
            // uni.downloadFile({
            //     url: this.allUrl,
            //     success: function (res) {
            //         let filePath = res.tempFilePath;
            //         uni.openDocument({
            //             filePath: filePath,
            //             showMenu: true,
            //             success: function (res) {
            //                 console.log('打开文档成功');
            //             }
            //         });
            //     }
            // });
            uni.navigateTo({
                url:"/pages/admin/adminContract/contractPDF"
            })
        },
        // gotoPath(path){
        //     if (path){
        //         uni.navigateTo({
        //             url:path
        //         })
        //     }
        // },
        applyReturn(){
            if (this.$store.state.index.agentAndService){
                uni.showToast({
                    title:"申请退回成功！"
                })
            }else {
                uni.showToast({
                    title:"退回保证金成功！"
                })
            }
            setTimeout(() => {
                uni.navigateBack({
                    delta:1
                })
            },500)

        }
    }
};
</script>

<style lang="scss" scoped>
/deep/.u-read-more__content{
    color: black;
}
.botBtn{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>