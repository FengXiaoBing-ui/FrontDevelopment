<template>
    <view class="content">
        <u-navbar title="售后详情" :autoBack="true"></u-navbar>
        <view
            :style="'margin-top:' + CustomBar + 'px;'+(!agentAndService&&status==1||agentAndService&& status==4&&statusList==0&&state==0||!agentAndService&& status==4&&statusList==0||!agentAndService&& status==5&&(statusList==0||statusList==1)?'padding-bottom:120rpx':'padding-bottom:20rpx')">
            <!--顶部状态-->
            <view class="top-background-image">
                <view class="padding-lr-sm justify-between flex w100 padding-top">
                    <!--status:3、退款进行中 4、退款退货进行中 5、换货进行中-->
                    <view v-if="agentAndService">
                        <view class="text-white text-lg">
                            {{ status == 1 ? "待商家审核" : status == 2 ? "未通过" : status == 3 || status == 4 || status == 5 ? "进行中" : status == 6 || status == 7 || status == 8 ? "已完成" : ""
                            }}
                        </view>
                        <view class="margin-top-sm text-white light">
                            {{ status == 1 ? "剩余23小时58分" : status == 2 ? "商家已驳回您的售后申请" : status == 3 || status == 4 || status == 5 ? "您的售后申请正在处理" : status == 6 || status == 7 || status == 8 ? "您的售后已处理完成" : ""
                            }}
                        </view>
                    </view>
                    <view v-if="!agentAndService">
                        <view class="text-white text-lg">
                            {{ status == 1 ? "待审核" : status == 2 ? "未通过" : status == 3 || status == 4 || status == 5 ? "进行中" : status == 6 || status == 7 || status == 8 ? "已完成" : ""
                            }}
                        </view>
                        <view class="margin-top-sm text-white light">
                            {{ status == 1 ? "剩余23小时58分" : status == 2 ? "您已驳回售后申请" : status == 3 || status == 4 || status == 5 ? "您已同意售后申请，正在处理" : status == 6 || status == 7 || status == 8 ? "您的售后已处理完成" : ""
                            }}
                        </view>
                    </view>
                    <view v-if="status==1" class="t-icon t-icon-daishenhe icon-position"
                          style="width: 65px;height: 65px"></view>
                    <view v-if="status==2" class="t-icon t-icon-weitongguo icon-position"
                          style="width: 65px;height: 65px"></view>
                    <view v-if="status==3||status==4||status==5" class="t-icon t-icon-jinhangzhong icon-position"
                          style="width: 65px;height: 65px"></view>
                    <view v-if="status == 6||status == 7||status == 8 " class="t-icon t-icon-a-zu699  icon-position"
                          style="width: 65px;height: 65px"></view>
                </view>

                <view v-if="status==3||status==4||status==5||status==6||status==7||status==8"
                      class="whiteBoxShadow margin-bottom-sm">
                    <boxTitle title="处理进度"></boxTitle>
                    <u-steps v-if="status==3||status==6" :current="statusList" dot activeColor="#F37B1D ">
                        <u-steps-item title="商家同意"></u-steps-item>
                        <u-steps-item title="银行处理"></u-steps-item>
                        <u-steps-item title="退款成功"></u-steps-item>
                    </u-steps>
                    <u-steps v-if="status==4||status==7" :current="statusList" dot activeColor="#F37B1D ">
                        <u-steps-item title="预约取件"></u-steps-item>
                        <u-steps-item title="商家收货"></u-steps-item>
                        <u-steps-item title="商家退款"></u-steps-item>
                        <u-steps-item title="银行处理"></u-steps-item>
                        <u-steps-item title="退款成功"></u-steps-item>
                    </u-steps>
                    <u-steps v-if="status==5||status==8" :current="statusList" dot activeColor="#F37B1D ">
                        <u-steps-item title="预约取件"></u-steps-item>
                        <u-steps-item title="商家收货"></u-steps-item>
                        <u-steps-item title="商家重发"></u-steps-item>
                        <u-steps-item title="换货完成"></u-steps-item>
                    </u-steps>
                    <button v-if="status==3||(status==4&&statusList==3)||status==6||status==7" @click="showMoney = true"
                            style="width: 100%"
                            class="bg-red radius cu-btn margin-top">
                        查看钱款去向
                    </button>
                    <view
                        v-if="(status==4&&statusList==1||status==4&&statusList==2)||(agentAndService &&status==5&&statusList==0)||(status==5&&statusList==1||statusList==2)||status==8||(!agentAndService &&status==4&&statusList==0)||(!agentAndService&&status==5&&statusList==0)"
                        class="margin-top">
                        <text
                            v-if="status==4&&statusList==1||(agentAndService &&status==5&&statusList==0)||(!agentAndService &&status==4&&statusList==0)"
                            class="text-red">商家已同意您的退货退款，请将商品寄回到
                        </text>
                        <text
                            v-if="(!agentAndService&&status==5&&statusList==0)"
                            class="text-red">商家已同意您的退货退款，等到客户将商品寄回
                        </text>
                        <view class="margin-top flex justify-between">
                            <view class="text-gray">快递</view>
                            <view>中通快递</view>
                        </view>
                        <view class="margin-top-sm flex justify-between">
                            <view class="text-gray">物流单号</view>
                            <view class="flex">
                                <view>12789678245721863</view>
                                <view class=" margin-left-sm radius text-sm text-center"
                                      style="color: #F37B1D ;background-color:rgba(255,165,0,0.2)">复制
                                </view>
                            </view>
                        </view>
                        <view class="margin-top-sm flex justify-end"
                              @click="gotoPath('pages/index/applicationSample/expressDetailsIndex')">
                            <view class="cu-btn bg-white border">查看物流</view>
                        </view>
                    </view>
                    <view v-if="(agentAndService&&status==4&& statusList==0&&state==1)" class="margin-top">
                        <view class="flex align-center justify-between margin-top-sm">
                            <text class="text-gray">预约码</text>
                            <text class="text-red text-lg text-bold">237643</text>
                        </view>
                        <view class="flex align-center justify-between margin-top-sm">
                            <text class="text-gray">预约状态</text>
                            <text>待取件</text>
                        </view>
                        <view class="flex align-center justify-between margin-top-sm">
                            <text class="text-gray">预约快递</text>
                            <text>中通快递</text>
                        </view>
                        <view class="flex align-center justify-between margin-top-sm">
                            <text class="text-gray">物流单号</text>
                            <text>1287365265368</text>
                        </view>
                        <view class="flex align-center justify-between margin-top-sm">
                            <text class="text-gray">预约取件时间</text>
                            <text>2022-08-31 12:30</text>
                        </view>
                    </view>
                </view>
                <view
                    v-if=" (agentAndService&& status==4&&statusList==0&&state==0)"
                    class="whiteBoxShadow margin-tb-sm">
                    <view class="text-orange">商家已同意您的退货退款，请将商品寄回到</view>
                    <view class="flex align-center margin-top-sm">
                        <view>张晓丹</view>
                        <view class="flex align-center margin-left">
                            <view class="cuIcon-mobile" style="color: #FFAA00;font-size: 1rem"></view>
                            18690726598
                        </view>
                    </view>
                    <view class="flex align-top justify-between margin-tb">
                        <view class="text-yellow cuIcon-locationfill margin-right"
                              style="color: #FFAA00;font-size: 1rem"></view>
                        <view class="w100 text-bold ">贵州省贵阳市观山湖区德福中心A3栋6楼10号</view>
                    </view>
                </view>
                <view v-if="status==2" class="whiteBoxShadow margin-bottom-sm">
                    <text class="text-red">您的商品经查看暂无质量问题，因此驳回您的售后申请</text>
                </view>
                <view v-if="agentAndService&&status==2" class="whiteBoxShadow margin-bottom-sm grid col-2">
                    <view class="flex align-center justify-center u-border-right">
                        <text style="font-size: 32rpx" class="cuIcon-profile text-orange margin-right-sm"></text>
                        <text>平台介入</text>
                    </view>
                    <view class="flex align-center justify-center">
                        <text style="font-size: 32rpx" class="cuIcon-service text-red margin-right-sm"></text>
                        <text>联系客服</text>
                    </view>
                </view>
                <view class="whiteBoxShadow">
                    <boxTitle title="售后信息"></boxTitle>
                    <view class="flex align-center justify-between margin-top-sm">
                        <text class="text-gray">是否收货</text>
                        <text>{{ status == 7 || status == 8 ? "已收货" : "未收货" }}</text>
                    </view>
                    <view class="flex align-center justify-between margin-top-sm">
                        <text class="text-gray">售后类型</text>
                        <text>{{ status == 4 || status == 7 ? "退货退款" : status == 5 || status == 8 ? "换货" : "退款" }}
                        </text>
                    </view>
                    <view class="flex align-center justify-between margin-top-sm">
                        <text class="text-gray">退款原因</text>
                        <text>商品损坏</text>
                    </view>
                    <view class="margin-top-sm">
                        <view class="text-gray">描述和凭证</view>
                        <input class="margin-top-sm" type="text" placeholder="这是描述信息" style="font-size: 14px">
                    </view>
                    <view class="flex margin-top-sm">
                        <fxbImage width="154" height="154" class="margin-right-xs"
                                  src="/productDetails/Slice%201.png"></fxbImage>
                        <fxbImage width="154" height="154" class="margin-right-xs"
                                  src="/productDetails/Slice%202.png"></fxbImage>
                        <fxbImage width="154" height="154" class="margin-right-xs"
                                  src="/productDetails/Slice%203.png"></fxbImage>
                        <fxbImage width="154" height="154" class="" src="/productDetails/Slice%205.png"></fxbImage>
                    </view>
                </view>
            </view>
            <!--                        <view class="whiteBoxShadow">-->
            <!--                            <view class="flex align-center justify-between">-->
            <!--                                <text class="text-gray">售后状态</text>-->
            <!--                                <text v-if="agentAndService" class="text-orange">-->
            <!--                                    &lt;!&ndash;status:1、待审核 2、未通过 3、进行中取件 4、进行中收货 5、进行中同意发货&ndash;&gt;-->
            <!--                                    {{ status == 1 ? "待商家处理" : status == 2 ? "审核未通过" : status == 3 || status == 4 || status == 5 ? "进行中" : "已完成"-->
            <!--                                    }}-->
            <!--                                </text>-->
            <!--                                <text v-if="!agentAndService" class="text-orange">-->
            <!--                                    &lt;!&ndash;status:1、待审核 2、未通过 3、进行中取件 4、进行中收货 5、进行中同意发货&ndash;&gt;-->
            <!--                                    {{ status == 1 ? "待审核" : status == 2 ? "未通过" : status == 3 || status == 4 ? "进行中" : status == 5 ? "已完成" : ""-->
            <!--                                    }}-->
            <!--                                </text>-->
            <!--                            </view>-->
            <!--                            <template v-if="status==2">-->
            <!--                                <view class="flex align-center justify-between margin-top-sm">-->
            <!--                                    <text class="text-gray">未通过原因</text>-->
            <!--                                    <text>照片不清晰</text>-->
            <!--                                </view>-->
            <!--                                <view class="flex align-center justify-between margin-top-sm">-->
            <!--                                    <text class="text-gray">审核时间</text>-->
            <!--                                    <text>2022-08-30 12:23:56</text>-->
            <!--                                </view>-->
            <!--                            </template>-->
            <!--                        </view>-->
            <!--            <view v-if="(agentAndService&&status==4||status==6)||(!agentAndService&&status==3||status==4||status==5)"-->
            <!--                  class="whiteBoxShadow margin-top-sm">-->
            <!--                <boxTitle v-if="!agentAndService" title="进度查询"></boxTitle>-->
            <!--                <view class="flex align-center justify-between">-->
            <!--                    <view>-->
            <!--                        <view class="text-xl text-bold text-red margin-bottom-sm">退款中</view>-->
            <!--                        <view>2022-08-30 12:30</view>-->
            <!--                    </view>-->
            <!--                    <text class="text-red">¥-->
            <!--                        <text class="text-xl text-bold">516.00</text>-->
            <!--                    </text>-->
            <!--                </view>-->
            <!--                <view class="flex justify-between align-center margin-top-sm">-->
            <!--                    <text class="text-gray">退回账号</text>-->
            <!--                    <text>(微信账号:54542121)</text>-->
            <!--                </view>-->

            <!--                <button v-if="!agentAndService&&(status==3||status==4||status==5)" @click="showMoney = true"-->
            <!--                        style="width: 100%" class="bg-red radius cu-btn margin-top-sm">-->
            <!--                    进度详情-->
            <!--                </button>-->
            <!--            </view>-->

            <view v-if="false"
                  class="whiteBoxShadow margin-top-sm">
                <boxTitle title="物流信息"></boxTitle>
                <view class="flex justify-between">
                    <view class="text-gray">物流状态</view>
                    <view v-if="agentAndService">{{ status == 4 || status == 6 ? "卖家已签收" : "待取件" }}</view>
                    <view v-if="!agentAndService&&(status==4||status==5)">{{ status == 4 ? "等待买家寄回" : "卖家已签收" }}</view>
                </view>
                <view v-if="!agentAndService&&status==5" class="flex justify-between margin-top-sm">
                    <view class="text-gray">发货物流</view>
                    <view>中通快递</view>
                </view>
                <view v-if="!agentAndService&&status==5" class="flex align-center justify-between margin-top-sm">
                    <view class="text-gray">物流单号</view>
                    <view class="flex align-center">
                        <view class="margin-right-sm">4856874887</view>
                        <copyButton value="4856874887"></copyButton>
                    </view>
                </view>
                <view v-if="agentAndService" class="flex justify-between margin-top-sm">
                    <view class="text-gray">预约取件时间</view>
                    <view>2022-08-30</view>
                </view>
                <view v-if="agentAndService&&status==4||status==6" class="flex justify-between margin-top-sm">
                    <view class="text-gray">签收时间</view>
                    <view>2022-08-30</view>
                </view>
                <view v-if="agentAndService&&status==5" class="flex justify-between margin-top-sm">
                    <view class="text-gray">取件码</view>
                    <view class="text-red">259842</view>
                </view>
                <view v-if="agentAndService&&(status==4||status==6)||(!agentAndService&&status==5)"
                      class="flex justify-end margin-top-sm"
                      @click="gotoPath('/pages/index/applicationSample/expressDetailsIndex')">
                    <button class="cu-btn bg-white u-border radius">查看物流</button>
                </view>
            </view>
            <!--售后信息-->

            <template>
                <!--                <view v-if="status==1||status==2" class="whiteBoxShadow margin-top-sm">-->
                <!--                    <boxTitle v-if="!agentAndService" title="收货人信息"></boxTitle>-->
                <!--                    <view class=" flex align-center">-->
                <!--                        <view>张晓丹</view>-->
                <!--                        <view class="flex align-center margin-left">-->
                <!--                            <view class="cuIcon-mobile" style="color: #FFAA00;font-size: 1rem"></view>-->
                <!--                            165453113546-->
                <!--                        </view>-->
                <!--                    </view>-->
                <!--                    <view class="flex align-start margin-top-sm">-->
                <!--                        <view class="text-yellow cuIcon-locationfill margin-right"-->
                <!--                              style="color: #FFAA00;font-size: 1rem"></view>-->
                <!--                        <view class="text-bold text-df">贵州省贵阳市观山湖区德福中心A3栋6楼10号A3栋6楼10号</view>-->
                <!--                    </view>-->
                <!--                </view>-->
                <view v-if="condition==0" class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="售后商品"></boxTitle>
                    <view class="flex  align-center bg-white margin-bottom  ">
                        <fxbImage width="84" height="84" class="margin-right-xs"
                                  src="/productDetails/Slice%201.png"></fxbImage>
                        <view class="text-bold margin-left-sm">东方国宾·尊致酒53°瓶装500ml</view>
                    </view>
                    <view class="u-border-bottom margin-top bg-white">
                        <view class="flex justify-between align-center padding-top">
                            <view class="text-gray">单价</view>
                            <view>￥300.00</view>
                        </view>
                        <view class="flex justify-between align-center margin-top">
                            <view class="text-gray">样品数量</view>
                            <view>2</view>
                        </view>
                        <view class="flex justify-between align-center margin-tb">
                            <view class="text-gray">运费</view>
                            <view>￥0.00</view>
                        </view>
                    </view>
                    <view class="flex justify-between align-center margin-tb ">
                        <view class="text-bold">合计</view>
                        <view class="text-bold text-red">￥612.00</view>
                    </view>
                </view>
                <view v-if="condition==1" class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="退款商品"></boxTitle>
                    <view v-for="item in 2"
                          :key="item">
                        <view class="flex align-start margin-top">
                            <fxbImage width="150" height="150" src="/productDetails/Slice%201.png"
                                      mode="aspectFill"></fxbImage>
                            <view class="margin-left-sm flex flex-treble flex-direction">
                                <view class="text-bold text-lg">东方国宾53°瓶装500ml</view>
                                <view class="text-sm flex align-center margin-top-sm">
                                    <text class="text-gray">
                                        香型:酱香型
                                    </text>
                                    <text class="text-gray margin-left-sm">
                                        度数:53°
                                    </text>
                                    <text class="text-gray margin-left-sm">
                                        容量:500ml
                                    </text>
                                </view>
                                <view class="text-sm flex justify-between align-center margin-top-sm">
                                    <view class="flex align-center">
                                        <text>代理价：</text>
                                        <view class="text-red">￥365.00</view>
                                    </view>
                                    <view>2</view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
                <view v-if="condition==1" class="whiteBoxShadow margin-top-sm">
                    <view class="flex justify-between align-center margin-top-sm ">
                        <view class="text-gray">数量合计</view>
                        <view>12</view>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm ">
                        <view class="text-gray">金额合计</view>
                        <view>￥3000.00</view>
                    </view>
                    <view class="u-border-bottom margin-tb"></view>
                    <view class="flex justify-between align-center margin-top-sm ">
                        <view class="text-bold">退款金额</view>
                        <view class="text-red">￥3000.00</view>
                    </view>
                </view>
                <!--                <view v-if="agentAndService&&(status==1||status==2)" class="whiteBoxShadow margin-top-sm">-->
                <!--                    <view class="flex justify-between align-center"-->
                <!--                          @click="gotoPath('/pages/index/applicationSample/billDetailsIndex')">-->
                <!--                        <text class="text-gray">开具发票</text>-->
                <!--                        <view class="flex align-center">-->
                <!--                            <text>普通发票</text>-->
                <!--                            <text class="cuIcon-right text-gray margin-left-sm" style="font-size: 32rpx"></text>-->
                <!--                        </view>-->
                <!--                    </view>-->
                <!--                </view>-->
                <view v-if="!agentAndService && status==5&&(statusList==0||statusList==1)||!agentAndService &&status==8"
                      class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="换货地址"></boxTitle>
                    <view class="flex">
                        <view class="w25">配送方式</view>
                        <view>中通快递</view>
                    </view>
                    <view class="flex margin-top-sm">
                        <view class="w25">收货信息</view>
                        <view>
                            <view class="flex align-center">
                                <view>张晓丹</view>
                                <view class="flex align-center margin-left">
                                    <view class="cuIcon-mobile" style="color: #FFAA00;font-size: 1rem"></view>
                                    18690726598
                                </view>
                            </view>
                            <view class="margin-top-sm">贵州省贵阳市观山湖区德福中心A3栋6楼10号</view>
                        </view>
                    </view>
                </view>
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="订单信息"></boxTitle>
                    <view class="flex align-center justify-between ">
                        <view class="text-gray">订单编号</view>
                        <view class="flex align-center">
                            <view class="margin-right-sm">4856874887</view>
                            <copyButton value="4856874887"></copyButton>
                        </view>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm ">
                        <view class="text-gray">申请时间</view>
                        <view>2022-08-30</view>
                    </view>
                    <view v-if="!agentAndService" class="flex justify-between align-center margin-top-sm ">
                        <view class="text-gray">审核人</view>
                        <view>王刚</view>
                    </view>
                    <view v-if="status==2||status==3||status==4||status==5||status==6"
                          class="flex justify-between align-center margin-top-sm ">
                        <view class="text-gray">审核时间</view>
                        <view>2022-08-30</view>
                    </view>
                </view>

            </template>


            <!--            <view v-if="status==3||status==4||status==5" class="botBtn padding-xs bg-white">-->

            <!--                <u-popup :show="SignIn" :round="10" mode="center" @close="close" @open="open">-->
            <!--                    <view class="margin-xl text-center">-->
            <!--                        <view class="text-bold text-lg">确认签收</view>-->
            <!--                        <view>确保签收成功后换货/退货商品</view>-->
            <!--                        <view>自动补入代理商云库存</view>-->
            <!--                    </view>-->
            <!--                    <view class="flex">-->
            <!--                        <view class="cu-btn w50 bg-gray">取消</view>-->
            <!--                        <view class="cu-btn w50 bg-red text-white">确认签收</view>-->
            <!--                    </view>-->
            <!--                </u-popup>-->
            <!--                <button @click="SignIn = true" style="width: 100%"-->
            <!--                        class="cu-btn bg-red radius lg">确认签收-->
            <!--                </button>-->
            <!--            </view>-->
        </view>
        <u-popup :show="showMoney" @close="close" @open="open">
            <view class="padding grid col-3">
                <view></view>
                <view class="text-center text-lg">钱款去向详情</view>
                <view @click="close" style="font-size: 38rpx;" class="cuIcon-close text-right"></view>
            </view>
            <scroll-view scroll-y style="width: 100%;height: 700rpx">
                <view class="flex justify-between padding-sm text-red text-bold text-xl">
                    <text>退款金额</text>
                    <text>¥78.00</text>
                </view>
                <view class="flex justify-between padding-sm">
                    <text class="text-gray">退款金额</text>
                    <text>(微信账号：5426)</text>
                </view>
                <view v-for="(item,index) in expressInfo" :key="item.id" class="cu-timeline">
                    <view class="cu-time">{{ item.date }}</view>
                    <view :class="index==0?'text-blue':''" class="cu-item">
                        <view class="cu-item ">
                            <view :class="index==0?'text-black':'text-gray'" class="content  padding-sm"
                                  style="background:#F7F7F7 ;">
                                <text>{{ item.time }}</text>
                                {{ item.content }}
                            </view>
                        </view>
                    </view>
                </view>
                <!--            <view style="width: 100%;height: 700rpx;">-->
                <!--                <u-steps current="6" direction="column" dot class="padding-sm">-->
                <!--                    <view v-for="item in expressList" :key="item.id">-->
                <!--                        <u-steps-item :desc="item.date"></u-steps-item>-->
                <!--                        <view class="bg-gray shadow-warp margin-sm padding-sm" style="width: 100%">-->
                <!--                            {{ item.content }}-->
                <!--                        </view>-->
                <!--                    </view>-->
                <!--                </u-steps>-->
                <!--            </view>-->

            </scroll-view>
        </u-popup>
        <view v-if="!agentAndService&&status==1" class="flex foot bg-white padding-sm justify-between">
            <view @click="gotoPath('/pages/admin/contractDeliverGoods/toExamineFailed')"
                  class="cu-btn w50 bg-gray margin-right-sm radius">驳回申请
            </view>
            <view class="cu-btn w50 bg-red radius">审核通过</view>
        </view>
        <view class="flex foot bg-white padding-sm"
              v-if="agentAndService&& status==4&&statusList==0&&state==0">
            <view @click="gotoPath('pages/admin/myOrderForPersonal/appointmentPickup?status=2')"
                  class="cu-btn w100 bg-red radius">预约取件
            </view>
        </view>
        <view class="flex foot bg-white padding-sm"
              v-if="!agentAndService&& status==4&&statusList==0">
            <view class="cu-btn w100 bg-red radius">确认退货并退款</view>
        </view>
        <view class="flex foot bg-white padding-sm"
              v-if="!agentAndService&& status==5&&(statusList==0||statusList==1)">
            <view class="cu-btn w100 bg-red radius">{{ statusList == 0 ? "确认收货" : "确认发货" }}</view>
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
import { mapState } from "vuex";

export default {
    name: "afterSalesDetails",

    components: {
        boxTitle,
        copyButton,
        addressBox,
        fxbImage,
        goodsInfoCard
    },
    data() {
        return {
            condition: 0,
            state: 0,
            SignIn: false,
            statusList: 1,
            status: 1,
            showMoney: false,
            addressInfo: {
                name: "张傲",
                phone: "18878855878",
                address: "贵州省贵阳市观山湖区金融城金融城MAX·C座21楼24号"
            },
            expressInfo: [
                { time: "02:26", date: "今天", content: "【退款成功】已退款成功", id: "0" },
                { time: "02:26", date: "08.31", content: "【银行受理】银行已受理,钱款已成功退回到您的付款账户。\n", id: "1" },
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
        ...mapState("index", ["agentAndService"])
        //agentAndService：服务商和代理商的状态 false:服务商,true:代理商
    },
    methods: {
        convertCurrency,
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
        this.condition = options.condition;
        this.status = options.status;
        this.statusList = options.statusList;
        this.state = options.state;

    }
};
</script>

<style lang="scss" scoped>
.icon-position {
    position: relative;
    right: 40px;
    bottom: 1px;
}

.top-background-image {
    background-image: url('/static/orderDetails-bg/pic_bg.png');
    background-size: 100% 100px;
    background-repeat: no-repeat;
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

.foot {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>
