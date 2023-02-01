<template>
    <view class="content">
        <u-navbar title="代理产品" @rightClick="show = true" :autoBack="true"></u-navbar>
        <view   class="padding-bottom padding-top-sm" :style="'margin-top:' + CustomBar + 'px;padding-bottom: 100rpx'">
            <view class="whiteBoxShadow">
                <boxTitle title="已选政策"></boxTitle>
                <view style="position: relative">
                    <view style="border-color:gray !important;"
                          class="radius u-border padding">
                        <view>{{ policyDetail.policyName }}</view>
                        <view class="flex justify-between text-gray margin-top-sm text-sm">
                            <view>代理价：约￥{{ policyDetail.agencyPrice }}/瓶</view>
                            <view class="text-orange">合同商品总数：{{ policyDetail.agencyContract.commodityQuantity }}瓶</view>
                        </view>
                        <view class="text-red text-bold margin-top-sm">合同总价：¥{{ policyDetail.agencyContract.contractPrice }}.00</view>
                        <view class="text-white bg-red text-xs text-center" style="position: absolute;top: 0;right: 0;border-radius: 0 0 0 10rpx;width: 115rpx;height: 40rpx">免保证金</view>
                        <template v-if="false">
                            <view class="margin-top-sm flex justify-between">
                                <view class="bg-red light radius padding-xs">
                                    <view class="text-black">合同总额</view>
                                    <view class="text-bold margin-tb-xs">
                                        ¥{{ policyDetail.agencyContract.contractPrice }}.00
                                    </view>
                                    <view class="text-gray text-sm">
                                        {{ policyDetail.agencyContract.commodityQuantity }}瓶
                                    </view>
                                </view>
                                <view class="bg-red light radius padding-xs">
                                    <view class="text-black">优惠金额</view>
                                    <view class="text-bold margin-tb-xs">
                                        ¥{{ policyDetail.agencyContract.discountAmount }}.00
                                    </view>
                                    <view class="text-gray text-sm">
                                        {{ policyDetail.agencyContract.supportNum }}瓶
                                    </view>
                                </view>
                                <view class="bg-red light radius padding-xs">
                                    <view class="text-black">首单支付</view>
                                    <view class="text-bold margin-tb-xs">
                                        ¥{{ policyDetail.agencyContract.firstOrderPrice }}.00
                                    </view>
                                    <view class="text-gray text-sm">
                                        {{ policyDetail.agencyContract.firstOrderNum }}瓶
                                    </view>
                                </view>
                            </view>
                            <view class="margin-top-sm flex justify-between">
                                <view class="flex align-center">
                                    <view style="border-color: orange !important;"
                                          v-if="policyDetail.agentLevels.isReduction==='是'"
                                          class="bg-orange light u-border radius padding-lr-xs text-sm">活动8折优惠
                                    </view>
                                    <view style="border-color: red !important;"
                                          v-if="policyDetail.agentLevels.isDeposit==='是'"
                                          class="bg-red light u-border radius padding-lr-xs text-sm margin-left-xs">免保证金
                                    </view>
                                </view>
                                <!--                            <view class="bg-gray radius padding-lr-xs text-sm text-gray">查看更多-->
                                <!--                                <text class="cuIcon-unfold"></text>-->
                                <!--                            </view>-->
                            </view>
                        </template>
                    </view>
                </view>
            </view>

            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="政策明细" right-text="政策下载" right-class="cu-btn bg-red radius sm text-white" right-in-left-icon="down"></boxTitle>
                <view class="text-bold">{{ policyDetail.policyName }}</view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">代理商品</view>
                    <view class="flex flex-direction align-end">东方国宾·尊致500ml瓶装</view>
                </view>
                <view class="flex justify-between margin-top-sm">
                  <view class="text-gray">代理等级</view>
                  <view class="flex flex-direction align-end">
                    {{ policyDetail.agentLevels.levelName }}
                  </view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">代理地区</view>
                    <view class="flex flex-direction align-end">贵州省贵阳市观山湖区世纪城街道</view>
                </view>


                <view class="text-bold padding-top margin-top u-border-top">代理价格</view>
                <fxbTable class="margin-top" :td-list="tdList" attribute="类别" attribute-value="单价/瓶"></fxbTable>

                <view class="text-bold padding-top margin-top u-border-top">合同金额</view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">合同商品总量</view>
                    <view>{{ policyDetail.agencyContract.commodityQuantity }}瓶</view>
<!--                    <view class="flex flex-direction align-end">-->
<!--                        <view>{{ policyDetail.agencyContract.commodityQuantity }}瓶</view>-->
<!--                        <view class="text-gray text-sm" style="font-style: oblique">300件</view>-->
<!--                    </view>-->
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">合同商品总额</view>
                    <view class="flex flex-direction align-end">
                        <view class="text-red text-bold">¥{{ policyDetail.agencyContract.contractPrice }}.00</view>
                        <view class="text-gray text-sm" style="font-style: oblique">
                            {{ convertCurrency(policyDetail.agencyContract.contractPrice) }}
                        </view>
                    </view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">合同期限</text>
                    <text>{{ policyDetail.agencyContract.contractTerm }}年</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">结算方式</text>
                    <text>{{ policyDetail.settlementMethod.settlementType }}</text>
                </view>


                <view class="text-bold padding-top margin-top u-border-top">首单进货</view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">首单进货商品数量</view>
                    <view>{{ policyDetail.agencyContract.firstOrderNum }}瓶</view>
<!--                    <view class="flex flex-direction align-end">-->
<!--                        <view>{{ policyDetail.agencyContract.firstOrderNum }}瓶</view>-->
<!--                        <view class="text-gray text-sm" style="font-style: oblique">100件</view>-->
<!--                    </view>-->
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">首单进货金额</view>
                    <view class="flex flex-direction align-end">
                        <view class="text-red text-bold">
                            ¥{{ policyDetail.agencyContract.firstOrderPrice }}.00
                        </view>
                        <view class="text-gray text-sm" style="font-style: oblique">
                            {{ convertCurrency(policyDetail.agencyContract.firstOrderPrice) }}
                        </view>
                    </view>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">首单随货支持(百分比)</text>
                    <text>{{ policyDetail.agencyContract.shippedSupport }}%</text>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">支持商品数量</view>
                    <view>{{ policyDetail.agencyContract.supportNum }}瓶</view>
<!--                    <view class="flex flex-direction align-end">-->
<!--                        <view>{{ policyDetail.agencyContract.supportNum }}瓶</view>-->
<!--                        <view class="text-gray text-sm" style="font-style: oblique">20件</view>-->
<!--                    </view>-->
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">支持商品金额</view>
                    <view class="flex flex-direction align-end">
                        <view class="text-red text-bold">
                            ¥{{ policyDetail.agencyContract.singleSupportAmount }}.00
                        </view>
                        <view class="text-gray text-sm" style="font-style: oblique">
                            {{ convertCurrency(policyDetail.agencyContract.singleSupportAmount) }}
                        </view>
                    </view>
                </view>

                <view class="text-bold padding-top margin-top u-border-top">返佣奖励</view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">完成合同任务量</view>
                    <view class="flex flex-direction align-end">
                        <view>{{ policyDetail.agencyContract.totalTaskCommodities }}瓶</view>
                        <view class="text-gray text-sm" style="font-style: oblique">600件</view>
                    </view>
                </view>
                <view v-for="(item,index) in policyDetail.rakeBack" :key="index">
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-gray">返佣方式</text>
                        <text class="text-bold">{{ item.rakeTypeName }}</text>
                    </view>
                    <view v-if="item.rakeTypeName ==='商品返佣'">
                        <view class="flex justify-between margin-top-sm">
                            <view class="text-gray">返佣商品数量</view>
                            <view class="flex flex-direction align-end">
                                <view>{{ item.commodityNum }}瓶</view>
                                <view class="text-gray text-sm" style="font-style: oblique">100件</view>
                            </view>

                        </view>
                        <view class="flex justify-between margin-top-sm">
                            <view class="text-gray">商品金额小计</view>
                            <view class="flex flex-direction align-end">
                                <view class="text-red text-bold">¥{{ item.totalAmount }}.00</view>
                                <view class="text-gray text-sm" style="font-style: oblique">
                                    {{ convertCurrency(item.totalAmount) }}
                                </view>
                            </view>
                        </view>
                    </view>

                    <view v-if="item.rakeTypeName ==='现金返佣'" class="flex justify-between margin-top-sm">
                        <view class="text-gray">返佣金额</view>
                        <view class="flex flex-direction align-end">
                            <view>{{ item.rakePrice }}元</view>
                        </view>
                    </view>
                    <view v-if="item.rakeTypeName ==='积分返佣'">
                        <view class="flex justify-between margin-top-sm">
                            <view class="text-gray">返佣积分数量</view>
                            <view class="flex flex-direction align-end">
                                <view>{{ item.integralNum }}积分</view>
                            </view>

                        </view>
                        <view class="flex justify-between margin-top-sm">
                            <view class="text-gray">积分金额小计</view>
                            <view class="flex flex-direction align-end">
                                <view class="text-red text-bold">¥{{ item.integralPrice }}.00</view>
                                <view class="text-gray text-sm" style="font-style: oblique">
                                    {{ convertCurrency(item.integralPrice) }}
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
                <!--                <view class="flex justify-between margin-top-sm">-->
                <!--                    <view class="text-gray">返佣商品金额合计</view>-->
                <!--                    <view class="flex flex-direction align-end">-->
                <!--                                                <view class="text-red text-bold">¥{{  }}.00</view>-->
                <!--                        <view class="text-gray text-sm" style="font-style: oblique">-->
                <!--                                                       -->
                <!--                        </view>-->
                <!--                    </view>-->
                <!--                </view>-->


                <view class="text-bold padding-top margin-top u-border-top">品鉴会支持</view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">单场支持金额</text>
                    <text class="text-red">¥{{ policyDetail.samplesPrice }}/场</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">单场支持酒水</text>
                    <text>{{ policyDetail.samplesNum }}瓶/场</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">单场支持统计(含酒水)</text>
                    <text class="text-red">¥2018.00/场</text>
                </view>

                <view v-if="policyDetail.agentLevels.isDeposit==='否'">
                    <view class="text-bold padding-top margin-top u-border-top">保证金减免</view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">免保证金</view>
                        <view class="flex flex-direction align-end">
                            <view class="text-red text-bold">¥{{ policyDetail.agentLevels.depositAmount }}</view>
                            <view class="text-gray text-sm" style="font-style: oblique">
                                {{ convertCurrency(policyDetail.agentLevels.depositAmount) }}
                            </view>
                        </view>
                    </view>

                </view>
                <view v-if="policyDetail.settlementMethod.effectiveCondition">
                    <view class="text-bold padding-top margin-top u-border-top">合同生效条件</view>
                    <view class="text-right" v-if="!policyDetail.settlementMethod.effectiveCondition[0]">
                        <view class="text-red">不需支付首单进货款</view>
                        <view class="text-red">不需支付保证金</view>
                    </view>
                    <view class="text-right" v-else-if="policyDetail.settlementMethod.effectiveCondition.length===2">
                        <view class="text-gray">需支付首单进货款</view>
                        <view class="text-gray">需支付保证金</view>
                    </view>
                    <view class="text-right" v-else-if="policyDetail.settlementMethod.effectiveCondition.length===1">
                        <view v-if="policyDetail.settlementMethod.effectiveCondition[0]==='需支付首单进货款'">
                            <view class="text-gray">需支付首单进货款</view>
                            <view class="text-red">不需支付保证金</view>
                        </view>
                        <view v-else-if="policyDetail.settlementMethod.effectiveCondition[0]==='需支付保证金'">
                            <view class="text-red">不需支付首单进货款</view>
                            <view class="text-gray">需支付保证金</view>
                        </view>
                    </view>
                </view>

            </view>

            <view v-if="false" class="whiteBoxShadow margin-top-sm">
                <boxTitle title="请选择代理套餐"></boxTitle>
                <view class="priceBox flex flex-direction align-center justify-between">

                    <view class="priceSelect" v-for="(item, index) in list" :key="index">
                        <view class="text-bold margin-bottom-xs">{{ item.agent ? "特约代理商" : "普通代理商" }}</view>
                        <view class="priceSelect u-border radius margin-bottom-sm padding-lr-sm padding-tb-sm"
                              :class="stMeal === index ? 'borderRed' : ''" @click="stMeal = index">
                            <view class="margin-top-sm">
                                <text>{{ item.num }}</text>
                                <text class="margin-left text-gray text-sm">{{ item.prices }}</text>
                            </view>
                            <view class="margin-top-sm">
                                <text class="text-red text-bold">{{ item.Uppercase }}</text>
                                <text class="margin-left">{{ item.price }}</text>
                            </view>
                            <view class="discountBox bg-orange light flex align-center justify-center">
                                <text class="text-sm margin-top-xs">随货支持20%</text>
                            </view>
                        </view>

                    </view>
                </view>
                <view v-if="false" class="padding bg-red light margin-top radius">
                    <view class="text-black text-center text-bold text-xl">飞天茅台53°瓶装代理政策</view>
                    <view class="border margin-top"></view>
                    <view>
                        <text class="text-black">
                            代理产品：飞天茅台53°瓶装<br />
                            代理地区：贵州省贵阳市关山湖区<br />
                            《好酒选用户服务协议》（以下简称“本协议”）是由好酒选网站(包括PC端、移动端及应用程序)的用户（以下简称“用户或您”）与好酒选网站的运营方，即好酒选络科技股份有限公司及其关联公司（以下简称“好酒选”）之间，就网站交易平台服务等相关事宜共同缔结。本协议具有合同效力，您应当阅读并遵守本协议。请您务必审慎阅读、充分理解各条款内容，特别是以黑体加粗形式提示您注意的条款。
                            一、 协议确认 <br />
                            1、您同意并点击确认本协议条款并完成注册程序后，才能成为好酒选的正式注册用户，并享受各类服务。
                            2、根据国家法律法规变化及网站运营需要，好酒选有权对本协议条款不时进行修改，修改后的协议一经发布
                        </text>
                    </view>
                </view>

            </view>
            <!--代理价格-->
            <view v-if="false" class="whiteBoxShadow text-center margin-top-sm">
                <boxTitle title="代理价格"></boxTitle>
                <view class="flex justify-between align-center  u-border">
                    <view class="w50 text-bold u-border-right bg-gray padding-xs">类别</view>
                    <view class="w50 text-bold padding-xs bg-gray">单价/瓶</view>
                </view>
                <view class="flex justify-between align-center  u-border" v-for="item in price" :key="item.name">
                    <view class="w50 h100 text-grey u-border-right padding-xs ">{{ item.name }}</view>
                    <view class="w50 h100  text-red text-bold padding-xs ">￥{{ item.price }}</view>
                </view>
            </view>
            <!--代理政策-->
            <view v-if="false" class="whiteBoxShadow  margin-top-sm">
                <boxTitle title="代理政策" right-icon="down" right-text="下载文件" right-class="bg-gray radius"></boxTitle>
                <view class="text-bold">代理费</view>
                <view class="flex justify-between align-center margin-top-sm"
                      v-for="(item, index) in  policy.policyPrice" :key="index">
                    <view class="text-grey">{{ item.name }}</view>
                    <view :class="item.textRed?'text-red':''">{{ item.value }}</view>
                </view>
                <view class="text-bold margin-top">特约代理商</view>
                <view class="flex justify-between align-center margin-top-sm"
                      v-for="(item,index) in policy.specialAgent"
                      :key="index">
                    <view class="text-grey">{{ item.name }}</view>
                    <view :class="item.textRed?'text-red':''">{{ item.value }}</view>
                </view>
                <view class="margin-top-sm flex align-center">
                    <view class="text-bold">品鉴会</view>
                    <view class="text-blue margin-left-xs text-sm">什么是品鉴会?</view>
                </view>
                <view class="flex justify-between align-center margin-top-sm"
                      v-for="(item,index) in  policy.appraisal"
                      :key="index">
                    <view class="text-grey">{{ item.name }}</view>
                    <view :class="item.textRed?'text-red':''">{{ item.value }}</view>
                </view>
                <view class="text-bold margin-top margin-top-sm">任务奖励</view>
                <view class="flex justify-between align-center margin-top-sm"
                      :style="item.textMin?'margin:0 !important;':''"
                      v-for="(item,index) in  policy.taskReward"
                      :key="index">
                    <view class="text-grey" :class="item.textMin?'text-xs':''">{{ item.name }}</view>
                    <view :class="item.textRed?'text-red':''">{{ item.value }}</view>
                </view>
            </view>
            <!--            保证金-->
            <view v-if="false" class="whiteBoxShadow text-center margin-top-sm ">
                <boxTitle title="保证金"></boxTitle>
                <view class="flex justify-between align-center margin-top-sm"
                      v-for="(item,index) in money"
                      :key="index">
                    <view class="text-grey">{{ item.name }}</view>
                    <view class="text-red">￥{{ item.price }}.00</view>
                </view>
            </view>

            <view v-if="true" class="margin-lr-sm">
                <view class="text-xl text-center text-bold margin-tb">您可能感兴趣的</view>
                <platformRecommend :recommendList="recommendList.slice(0,4)" :horizontal="true"></platformRecommend>
            </view>
        </view>
        <view class="botBtn bg-white padding-xs">
            <button class="cu-btn bg-red" @click="determine">提交申请</button>
        </view>
        <u-picker @cancel="cancel" :show="show" ref="uPicker" :columns="columns" keyName="name" @confirm="confirm"
                  @change="changeHandler"></u-picker>
    </view>
</template>

<script>
import  fxbTable from "/src/components/fxb/fxb-table";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import chinaJson from "/src/utils/china.json";
import platformRecommend from "/src/pages/index/components/platformRecommend";
import convertCurrency from "../../utils/dataFormat/convertCurrency";

export default {
    name: "index",
    components: {
        boxTitle,
        platformRecommend,
        fxbTable
    },
    data() {
        return {
            boxIndex: -1,
            goodsId: "",
            stMeal: 0,
            policyDetail: {
                agencyContract: {},
                agentLevels: {},
                settlementMethod: {}
            },
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
            ],
            list: [
                {
                    num: "300件酒（1800瓶）",
                    price: "¥466200.00",
                    prices: "￥259.00/瓶",
                    Uppercase: "肆拾陆万陆仟贰佰元整"
                },
                {
                    num: "200件酒（1800瓶）",
                    price: "¥500000.00",
                    prices: "￥259.00/瓶",
                    Uppercase: "叁拾壹万零捌佰元整",
                    agent: true
                }
            ],
            // recommendList: [
            //     {
            //         id: "1",
            //         title: "东方国宾·尊致",
            //         label: ["酱香型", "53°", "四川"],
            //         info: ["成交榜NO.1", "新品首发"],
            //         price: "499.00元",
            //         agentPrice: "259.00元",
            //         introduce: "东方国宾·尊致 国之礼序 首单进货300箱",
            //         imgUrl: "/img/index/img_17%402x.png",
            //         rank: 1,
            //         transaction: "/img/index/%E6%A6%9C1%402x.png"
            //     },
            //     {
            //         id: "2",
            //         title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
            //         label: ["酱香型", "53°", "四川"],
            //         info: ["成交榜NO.2", "新品首发"],
            //         price: "125.00",
            //         agentPrice: "259.00元",
            //         introduce: "简短介绍简短介绍简短介绍简短介绍简短介绍简短介绍",
            //         imgUrl: "/img/index/img_18%402x.png",
            //         rank: 2,
            //         transaction: "/img/index/%E6%A6%9C2%402x.png"
            //     },
            //     {
            //         id: "3",
            //         title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
            //         label: ["酱香型", "53°", "四川"],
            //         info: ["成交榜NO.3", "新品首发"],
            //         price: "365.00",
            //         agentPrice: "259.00元",
            //         introduce: "简短介绍简短介绍简短介绍简短介绍简短介绍简短介绍",
            //         imgUrl: "/img/index/img_19%402x.png",
            //         rank: 3,
            //         transaction: "/img/index/%E6%A6%9C3%402x.png"
            //     },
            //     {
            //         id: "4",
            //         title: "国酒茅台1937酱国酒茅台1937酱香型瓶装500ml",
            //         label: ["酱香型", "53°", "四川"],
            //         info: ["成交榜NO.4", "新品首发"],
            //         price: "125.00",
            //         agentPrice: "259.00元",
            //         introduce: "简短介绍简短介绍简短介绍简短介绍简短介绍简短介绍",
            //         imgUrl: "/img/index/img_20%402x.png",
            //         rank: 4,
            //         transaction: "/img/index/%E8%8D%90%402x.png"
            //     }
            // ],
            recommendList:[],
            show: false,
            address: "贵州省 贵阳市 观山湖区 世纪城社区",
            columns: [], //省份数据显示，三级联动需要三维数组，展示初始数据
            columnData: [], //市数据
            columnDatas: [], //区地址
            columnDataStreet: [], //街道社区
            price: [{
                price: "365.00",
                name: "建议零售价"
            },
                {
                    price: "300.00~￥365.00",
                    name: "商超指导价"
                },
                {
                    price: "290.00",
                    name: "企业团购价"
                },
                {
                    price: "275.00",
                    name: "代理价"
                }
            ],
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
            },
            money: [{
                name: "省级代理",
                price: "50000"
            },
                {
                    name: "市级代理",
                    price: "30000"
                },
                {
                    name: "区/县级代理",
                    price: "20000"
                },
                {
                    name: "镇/街道代理",
                    price: "10000"
                }
            ]
        };
    },
    onLoad(option) {
        console.log(option);
        this.getRecommendList();
        this.getPolicyDetailById(option.policyId);
        // this.getPolicyListByCommodityId(this.goodsId);

    },
    mounted() {
        this.initDataPicker();
    },
    methods: {
        async getRecommendList() {
          let res = await this.$http.getGoodList();
          if (res) {
            this.isLoading = false;
            this.recommendList = res.data;
          }
        },
        convertCurrency,
        async getPolicyDetailById(id) {
            const res = await this.$http.getPolicyDetail(id).then();
            this.policyDetail = res.data;
            this.tdList[0].price = "￥" + this.policyDetail.retailPrice;
            this.tdList[1].price = "￥" + this.policyDetail.minGuidePrice + "~￥" + this.policyDetail.maxGuidePrice;
            this.tdList[2].price = "￥" + this.policyDetail.enterpriseGroupPurchasePrice;
            this.tdList[3].price = "￥" + this.policyDetail.agencyPrice;
            console.log(111, res);
        },
        async getPolicyListByCommodityId(goodsId) {
            const res = await this.$http.getPolicyListByCommodityId({ commodityId: goodsId }).then();
            this.policyList = res.data;
        },
        determine() {
            // uni.navigateTo({
            //     url: "pages/agentProducts/settlementMethod"
            // });
            uni.navigateTo({
                url: "/pages/payResult/payResult?status=agencyApplication"
            });
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
            this.show = false;
        },
        cancel() {
            //点击取消按钮
            this.show = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.border-left {
    padding-left: 10px;
    border-left: 4px solid red;
}

.agentBox {
    position: relative;

    .activeBox {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 120rpx;
        height: 50rpx;
        border-radius: 4rpx;
    }
}

.priceBox {
    width: 100%;
}

.priceSelect {
    width: 100%;
    position: relative;
    overflow: hidden;

    .discountBox {
        position: absolute;
        right: -10rpx;
        top: -10rpx;
        width: 220rpx;
        height: 46rpx;
        border-radius: 10rpx;
    }
}

.borderRed {
    border-color: red !important;
}

.botBtn {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;

    button {
        width: 100%;
    }
}
</style>
