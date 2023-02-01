<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="申请详情" :autoBack="true">
        </u-navbar>
        <view class="padding-bottom"
              :style="'margin-top:'+ CustomBar + 'px;'+ ((status==0)?'padding-bottom:100rpx':'')">
            <view>
              <fxbStatusCard :status="statusArr[status]"
                             :tips="status==0?'等待商家审核':status==1?'该地区代理已满':status==2?'该合同待激活':'超时未处理'"
                             icon="daishenhe"></fxbStatusCard>
            </view>
<!--            <view class="whiteBoxShadow margin-bottom-sm">-->
<!--                <view class="flex justify-between align-center">-->
<!--                    <view class="text-gray">申请状态</view>-->
<!--                    <view class="text-red">{{ status == 1 ? "待审核" : status == 2 ? "未通过" : status == 3 ? "待激活" : "已过期"-->
<!--                        }}-->
<!--                    </view>-->
<!--                </view>-->
<!--                <template v-if="status==1">-->
<!--                    <view class="flex justify-between align-center margin-top-sm">-->
<!--                        <view class="text-gray">未通过原因</view>-->
<!--                        <view>该地区代理已满</view>-->
<!--                    </view>-->
<!--                    <view class="flex justify-between align-center margin-top-sm">-->
<!--                        <view class="text-gray">审核时间</view>-->
<!--                        <view>2022-08-30 12:12:23</view>-->
<!--                    </view>-->
<!--                </template>-->
<!--                <view v-if="status==4" class="flex justify-between align-center margin-top-sm">-->
<!--                    <view class="text-gray">过期原因</view>-->
<!--                    <view>超时</view>-->
<!--                </view>-->
<!--            </view>-->

            <view v-if="status==0||status==1" class="whiteBoxShadow" :style="status==0||status==1?'transform: translateY(-20rpx)':''">
                <boxTitle title="申请信息"></boxTitle>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">申请代理编号</text>
                    <text>12312332432454</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">代理政策名称</text>
                    <text>东方国宾·尊致代理政策</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">代理等级</text>
                    <text>镇/街道代理</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">代理区域</text>
                    <text>贵州省贵阳市观山湖区世纪城街道</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">申请单位</text>
                    <text>贵阳市万隆烟酒行 <text class="bg-orange light padding-xs radius text-xs margin-left-xs">续签</text> </text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm"
                      @click="gotoPath('/pages/admin/adminContract/agentBusinessLicense')">
                    <text class="text-gray">营业执照信息</text>
                    <text class="cuIcon-right margin-left text-gray" style="font-size: 38rpx"></text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm"
                      @click="gotoPath('/pages/admin/adminContract/agencyIDInfo')">
                    <text class="text-gray">法人身份证信息</text>
                    <text class="cuIcon-right margin-left text-gray" style="font-size: 38rpx"></text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">申请人</text>
                    <text>张东</text>
                </view>
                <view class="flex justify-between align-center margin-bottom-sm">
                    <text class="text-gray">联系电话</text>
                    <text>18690723848</text>
                </view>
                <view class="flex justify-between align-center">
                    <text class="text-gray">申请时间</text>
                    <text>2022-08-30 12:23:23</text>
                </view>
            </view>

            <template v-if="status==2||status==3">
                <view class="whiteBoxShadow" :style="status==2||status==3?'transform: translateY(-20rpx)':''">
                    <boxTitle title="签约信息"></boxTitle>
                    <u-read-more ref="uReadMore" textIndent="0" :toggle="true" showHeight="220" color="gray" openText=""
                                 closeText="">
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
                        <view class="flex justify-between align-center margin-bottom-sm"
                              @click="gotoPath('/pages/admin/adminContract/agentBusinessLicense')">
                            <text class="text-gray">乙方营业执照信息</text>
                            <text class="cuIcon-right margin-left" style="font-size: 38rpx"></text>
                        </view>
                        <view class="flex justify-between align-center margin-bottom-sm"
                              @click="gotoPath('/pages/admin/adminContract/agencyIDInfo')">
                            <text class="text-gray">乙方法人身份证信息</text>
                            <text class="cuIcon-right margin-left" style="font-size: 38rpx"></text>
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
                        <view class="flex justify-between align-center">
                            <text class="text-gray">生成时间</text>
                            <text>2022-08-30 12:23:23</text>
                        </view>
                    </u-read-more>
                </view>

                <view class="whiteBoxShadow margin-bottom-sm" v-if="status==3">
                    <view class="flex justify-between align-center" @click="gotoPdf">
                        <text class="text-gray">查看合同</text>
                        <view class="flex align-center">
                            <text class="cuIcon-right margin-left" style="font-size: 38rpx"></text>
                        </view>
                    </view>
                </view>

                <view class="whiteBoxShadow margin-bottom-sm" v-if="status==3">
                    <boxTitle title="合同明细"></boxTitle>
                    <view class="text-bold margin-bottom">代理价格</view>
                    <u-read-more ref="uReadMore" textIndent="0" :toggle="true" color="gray" openText="" closeText="查看更多">
                        <fxbTable :td-list="tdList" attribute="类别" attribute-value="单价/瓶"></fxbTable>


                        <view class="text-bold margin-top-sm padding-top-sm" style="border-top: 1px solid #F1F1F1">合同金额</view>
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
                        <view class="flex justify-between align-center margin-top-sm">
                            <text class="text-gray">保证金</text>
                            <text>需缴纳保证金</text>
                        </view>
                    </u-read-more>
                </view>
            </template>


            <view class="whiteBoxShadow margin-bottom-sm" v-if="status==0||status==1">
                <boxTitle title="申请商品"></boxTitle>
<!--                <twoGoodsInfoCard-->
<!--                    :img-url="(status==0||status==1)?'/productDetails/Slice%201.png':null"-->
<!--                    goodsName="东方国宾53°瓶装酱香型 500ml"-->
<!--                    goodsType="酱香型"-->
<!--                    goodsVolume="500ml"-->
<!--                    goodsDegrees="53°"-->
<!--                    retailPrice="365.00"-->
<!--                    :agentPrice="(status==2||status==3)?'2400':null"-->
<!--                    namePrice="代理价："-->
<!--                >-->
<!--                </twoGoodsInfoCard>-->
                <view>
                  <view class="flex align-center padding-lr-sm margin-bottom">
                    <view>
                      <image src="../returnExchange/picture/alcohol.png"
                             style="width: 135rpx;height: 135rpx;border-radius: 20rpx"></image>
                    </view>
                    <view class="w100 margin-left">
                      <view class="text-bold text-lg margin-bottom-xs">东方国宾53°瓶装500ml</view>
                      <view class="flex justify-between align-center text-gray margin-bottom-xs text-df">
                        <text class="margin-right-xl">香型:酱香型</text>
                        <text class="margin-right-xl">度数:53°</text>
                        <text>容量:500ml</text>
                      </view>
                      <view>
                          <text>代理价:</text>
                          <text class="text-red">￥365.00/瓶</text>
                      </view>
                    </view>
                  </view>
                </view>

              <view>
                <view class="flex align-center padding-lr-sm">
                  <view>
                    <image src="../returnExchange/picture/alcohol.png"
                           style="width: 135rpx;height: 135rpx;border-radius: 20rpx"></image>
                  </view>
                  <view class="w100 margin-left">
                    <view class="text-bold text-lg margin-bottom-xs">东方国宾53°瓶装500ml</view>
                    <view class="flex justify-between align-center text-gray margin-bottom-xs text-df">
                      <text class="margin-right-xl">香型:酱香型</text>
                      <text class="margin-right-xl">度数:53°</text>
                      <text>容量:500ml</text>
                    </view>
                    <view>
                      <text>代理价:</text>
                      <text class="text-red">￥365.00/瓶</text>
                    </view>
                  </view>
                </view>
              </view>
<!--                <twoGoodsInfoCard-->
<!--                    :img-url="(status==0||status==1)?'/productDetails/Slice%201.png':null"-->
<!--                    goodsName="东方国宾53°瓶装酱香型 500ml"-->
<!--                    goodsType="酱香型"-->
<!--                    goodsVolume="500ml"-->
<!--                    goodsDegrees="53°"-->
<!--                    retailPrice="365.00"-->
<!--                    :agentPrice="(status==2||status==3)?'2400':null"-->
<!--                    namePrice="代理价："-->
<!--                >-->
<!--                </twoGoodsInfoCard>-->
            </view>

            <view v-if="status==0||status==1||status==2" class="whiteBoxShadow margin-bottom-sm">
                <boxTitle title="政策明细"></boxTitle>
                <u-read-more ref="uReadMore" textIndent="0" showHeight="600" :toggle="true" color="gray" openText="向上收起"
                             closeText="查看更多">
                    <view class="text-bold">东方国宾酒代理政策1（区级）</view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">代理商品</view>
                        <view class="flex flex-direction align-end">东方国宾·尊致500ml瓶装</view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">代理地区</view>
                        <view class="flex flex-direction align-end">贵州省贵阳市观山湖区世纪城街道</view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">代理等级</view>
                        <view class="flex flex-direction align-end">乡镇/街道级</view>
                    </view>


                    <view class="text-bold padding-top margin-top u-border-top">代理价格</view>
                    <fxbTable class="margin-top" :td-list="tdList" attribute="类别" attribute-value="单价/瓶"></fxbTable>

                    <view class="text-bold padding-top margin-top u-border-top">合同金额</view>
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
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">保证金</text>
                        <text>需缴纳保证金</text>
                    </view>
                </u-read-more>
            </view>


          <view class="whiteBoxShadow margin-bottom-sm" v-if="status==2||status==3">
            <boxTitle title="合同商品"></boxTitle>
            <view>
              <view class="flex align-center padding-lr-sm">
                <view class="w100">
                  <view class="text-bold text-lg margin-bottom-xs">东方国宾53°瓶装500ml</view>
                  <view class="flex justify-between align-center text-gray margin-bottom-xs text-df">
                    <text class="margin-right-xl">香型:酱香型</text>
                    <text class="margin-right-xl">度数:53°</text>
                    <text>容量:500ml</text>
                  </view>
                  <view class="flex justify-between align-center">
                    <view>
                      <text>代理价:</text>
                      <text class="text-red">￥365.00/瓶</text>
                    </view>
                    <view>
                      <text>合同发货数量:</text>
                      <text>2400瓶</text>
                    </view>
                  </view>
                </view>
              </view>
            </view>
            <view class="margin-tb u-border-bottom"></view>
            <view>
              <view class="flex align-center padding-lr-sm">
                <view class="w100">
                  <view class="text-bold text-lg margin-bottom-xs">东方国宾53°瓶装500ml</view>
                  <view class="flex justify-between align-center text-gray margin-bottom-xs text-df">
                    <text class="margin-right-xl">香型:酱香型</text>
                    <text class="margin-right-xl">度数:53°</text>
                    <text>容量:500ml</text>
                  </view>
                  <view class="flex justify-between align-center">
                    <view>
                      <text>代理价:</text>
                      <text class="text-red">￥365.00/瓶</text>
                    </view>
                    <view>
                      <text>合同发货数量:</text>
                      <text>2400瓶</text>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>


            <view class="whiteBoxShadow margin-bottom-sm">
                <boxTitle title="首单支付金额"></boxTitle>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">首单进价金额</view>
                    <view class="flex flex-direction align-end">
                        <view class="text-red text-bold">¥155400.00</view>
                        <view class="text-gray text-sm" style="font-style: oblique">拾伍万伍仟肆佰元整</view>
                    </view>
                </view>
            </view>

            <view class="whiteBoxShadow" :class="status==2||status==3?'margin-bottom-sm':''">
                <boxTitle title="支付保证金"></boxTitle>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">保证金</view>
                    <view class="flex flex-direction align-end">
                        <view class="text-red text-bold">¥50000.00</view>
                        <view class="text-gray text-sm" style="font-style: oblique">伍万元整</view>
                    </view>
                </view>
            </view>

            <view v-if="status==2||status==3" class="whiteBoxShadow margin-bottom-sm">
                <boxTitle title="审核信息"></boxTitle>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">审核人</view>
                    <view>万钢</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">审核时间</view>
                    <view>2022-08-30 12:12:23</view>
                </view>
            </view>

            <uni-popup ref="popup" type="center">
                <view class="popup bg-white radius padding-lr-sm padding-tb-lg">
                    <view class="text-xl text-center">确认发起合同签署</view>
                    <view class="margin-tb text-center">发起合同签署将xxxxxxxxx</view>
                    <view class="flex justify-between">
                        <button @click="$refs.popup.close()" class="cu-btn radius flex-sub bg-gray margin-right-sm">取消</button>
                        <button @click="sureAdopt" class="cu-btn radius flex-sub bg-red margin-right-sm">确认通过</button>
                    </view>
                </view>
            </uni-popup>
        </view>
        <view v-if="status==0" class="botBtn bg-white padding-xs flex justify-around align-center">
            <button @click="gotoReject" class="cu-btn bg-gray radius basis-sm">驳回申请</button>
            <button @click="$refs.popup.open()" class="cu-btn bg-red radius basis-sm">审核通过</button>
        </view>

    </view>
</template>

<script>
import twoGoodsInfoCard from "../../../components/erp/twoGoodsInfoCard";
import fxbTable from "/src/components/fxb/fxb-table";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbStatusCard from "/src/components/fxb/fxb-status-card";
export default {
    name: "agentAuditDetails",
    components: {
        boxTitle,
        fxbTable,
        twoGoodsInfoCard,
        fxbStatusCard
    },
    data() {
        return {
            status: 0,
            statusArr: [
              "待审核",
              "未通过",
              "待激活",
              "已过期 ",
            ],
            allUrl: "",
            tdList: [
                {
                    name: "建议零售价",
                    price: "￥365.00"
                },
                {
                    name: "商超指导价",
                    price: "￥300.00~￥365.00"
                },
                {
                    name: "企业团购价",
                    price: "￥290.00"
                },
                {
                    name: "代理价",
                    price: "￥275.00"
                }
            ]
        };
    },
    onLoad(options) {
        this.status = options.status;
    },
    methods: {
        //审核确认通过
        sureAdopt(){
            uni.showToast({
                title:"审核已通过"
            })
            setTimeout(() => {
                uni.navigateBack({
                    delta:1
                })
            },500)
            this.$refs.popup.close();
        },
        //驳回申请
        gotoReject(){
          uni.navigateTo({
              url:"/pages/admin/contractDeliverGoods/toExamineFailed"
          })
        },
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        },
        //查看合同pdf
        gotoPdf() {
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
                url: "/pages/admin/adminContract/contractPDF"
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-shadow: 10rpx 10rpx 20rpx #b8b8b8;
}
.popup{
    width: 600rpx;
    height: 300rpx;
}
td,
th,
table {
    border: 1px solid #EDEDED;
}

tr {
    td {
        &:nth-child(1) {
            text-align: center;
            padding: 14rpx 0;
            width: 154rpx;
        }
    }
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}
</style>