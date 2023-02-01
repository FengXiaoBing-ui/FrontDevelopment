<template>
    <view>
        <u-navbar :autoBack="true" rightClick="" rightText="" title="添加代理政策"></u-navbar>
        <view :style="`margin-top:${CustomBar}px`" class="padding-lr-sm padding-tb">
            <template v-if="false">
                <view class="whiteBoxShadow text-center  ">
                    <inputCell :important="true" :text="formData.policyLeave" icon="cuIcon-right"
                               label="选择代理级别" type="text" @iconEvent="addPolicyLeave"></inputCell>
                    <inputCell :important="true" icon="cuIcon-add" iconColor="red" label="添加代理地区" type="text"
                               @iconEvent="selectArea"></inputCell>
                    <!--                <view v-for="(item,index) in formData.agentArea" :key="index">-->
                    <!--                    <view class="flex justify-between text-xs padding-xs text-gray">-->
                    <!--                        <view>{{ item.area }}</view>-->
                    <!--                        <view class="cuIcon cuIcon-delete"></view>-->
                    <!--                    </view>-->
                    <!--                    <view class="flex justify-around">-->
                    <!--                        <view v-for="(el,index) in item.street " :key="el.id" class="w-third margin-tb"-->
                    <!--                              style="position: relative">-->
                    <!--                            {{ el.name }}-->
                    <!--                            <view class="cuIcon cuIcon-close" style="position: absolute ;right: 0;top: -5rpx"></view>-->
                    <!--                        </view>-->
                    <!--                    </view>-->
                    <!--                </view>-->
                </view>
                <view class="whiteBoxShadow text-center margin-top ">
                    <boxTitle title="代理价格"></boxTitle>
                    <!--tianrenyuan测试-->

                    <!--                <inputCell :important="true" label="建议零售价">-->
                    <!--                    <view class="flex">-->
                    <!--                        ￥<input class="text-left" placeholder="请输入零售价" placeholder-class="placeholderStyle"-->
                    <!--                                type="text" v-model="formData.retailPrice">-->
                    <!--                    </view>-->
                    <!--                </inputCell>-->
                    <!--                <inputCell :important="true" label="商超指导价">-->
                    <!--                    <view class="flex align-center justify-center">-->
                    <!--                        <view class="flex">-->
                    <!--                            ￥<input class="text-left " placeholder="请输入零售价" placeholder-class="placeholderStyle" v-model="formData.guidePriceMin"-->
                    <!--                                    type="text">-->
                    <!--                        </view>-->
                    <!--                        <view class="padding-lr-xs">-->
                    <!--                            ~-->
                    <!--                        </view>-->
                    <!--                        <view class="flex">-->
                    <!--                            ￥<input class="text-left" placeholder="请输入指导价" placeholder-class="placeholderStyle" v-model="formData.guidePriceMax"-->
                    <!--                                    type="text">-->
                    <!--                        </view>-->
                    <!--                    </view>-->
                    <!--                </inputCell>-->
                    <!--                <inputCell :important="true" label="企业团购价">-->
                    <!--                    <view class="flex ">-->
                    <!--                        ￥<input class="text-left" placeholder="请输入团购价" placeholder-class="placeholderStyle" v-model="formData.groupPrice"-->
                    <!--                                type="text">-->
                    <!--                    </view>-->
                    <!--                </inputCell>-->
                    <!--                <inputCell :important="true" label="代理价">-->
                    <!--                    <view class="flex ">-->
                    <!--                        ￥<input class="text-left" placeholder="请输入代理价" placeholder-class="placeholderStyle" v-model="formData.agencyPrice"-->
                    <!--                                type="text">-->
                    <!--                    </view>-->
                    <!--                </inputCell>-->


                    <view class="text-black text-bold text-left">
                        <text>商品1：53°飞天茅台500ml瓶装</text>
                    </view>
                    <view class="flex justify-between align-center  u-border margin-top">

                        <view class="w50 u-border-right bg-gray padding-xs">类别</view>
                        <view class="w50 padding-xs bg-gray u-border-right">商品1单价</view>
                        <view class="w50 padding-xs bg-gray">商品2单价/瓶</view>
                    </view>
                    <view class="grid col-3 u-border" v-for="(item,index) in price" :key="index">
                        <view class="w50 h100 text-grey u-border-right padding-xs ">{{ item.name }}</view>
                        <view class="w50 h100 text-red text-center text-xs text-bold padding-xs u-border-right">
                            ￥{{ item.price }}
                        </view>
                        <view class="w50 h100 text-red text-sm text-bold padding-xs ">￥{{ item.num }}</view>
                    </view>
                    <inputCell :important="true" :text="formHp.policyActivity" icon="cuIcon-right"
                               label="活动折扣" placeholder="请选择活动折扣" type="text" endText="请选择活动折扣"
                               @iconEvent="addPolicyActivity"></inputCell>
                    <inputCell :important="true" :text="formData.policyActivity" endText="￥245.00" icon="cuIcon-right"
                               label="折扣后金额" type="text" @iconEvent="addPolicyActivity"></inputCell>


                    <view class="text-black text-bold text-left margin-top">
                        <text>商品2：53°飞天茅台500ml瓶装</text>
                    </view>
                    <view class="flex justify-between align-center  u-border margin-top">

                        <view class="w50 u-border-right bg-gray padding-xs">类别</view>
                        <view class="w50 padding-xs bg-gray u-border-right">商品1单价</view>
                        <view class="w50 padding-xs bg-gray">商品2单价/瓶</view>
                    </view>
                    <view class="grid col-3 u-border" v-for="(item,index) in price" :key="index">
                        <view class="w50 h100 text-grey u-border-right padding-xs ">{{ item.name }}</view>
                        <view class="w50 h100 text-red text-center text-xs text-bold padding-xs u-border-right">
                            ￥{{ item.price }}
                        </view>
                        <view class="w50 h100 text-red text-sm text-bold padding-xs ">￥{{ item.num }}</view>
                    </view>
                    <inputCell :important="true" :text="formHp.policyActivity" icon="cuIcon-right"
                               label="活动折扣" placeholder="请选择活动折扣" type="text" endText="请选择活动折扣"
                               @iconEvent="addPolicyActivity"></inputCell>
                    <inputCell :important="true" :text="formData.policyActivity"
                               label="折扣后金额" endText="￥245.00" type="text" @iconEvent="addPolicyActivity"></inputCell>

                </view>
                <view class="whiteBoxShadow text-center margin-top ">
                    <boxTitle title="代理政策"></boxTitle>
                    <!--                <inputCell :important="true" label="建议零售价">-->
                    <!--                    <view class="flex">-->
                    <!--                        ￥<input class="text-left" placeholder="请输入零售价" placeholder-class="placeholderStyle"-->
                    <!--                                type="text">-->
                    <!--                    </view>-->
                    <!--                </inputCell>-->
                    <!--                <inputCell :end-switch="true" :important="true" label="首单进货" placeholder="请输入件数" text="0件(0瓶)"-->
                    <!--                           type="input"></inputCell>-->
                    <!--                <inputCell :important="false" label="合计金额" text="肆拾玖万伍仟元整(￥495000.00)" text-color="red"-->
                    <!--                           type="text"></inputCell>-->
                    <!--                <inputCell :end-switch="true" :important="false" label="随货支持" placeholder="请输入百分比" text=""-->
                    <!--                           type="input"></inputCell>-->

                    <view class="text-black text-bold text-left">
                        <text>商品1：53°飞天茅台500ml瓶装</text>
                    </view>
                    <view class="flex justify-between align-center  margin-top">
                        <view class="text-gray">首单进货</view>
                        <view class="text-red">300箱(1800瓶)</view>
                    </view>
                    <view class="flex justify-between align-center  margin-top">
                        <view class="text-gray">单价</view>
                        <view class="text-red">259元/瓶</view>
                    </view>
                    <view class="flex justify-between align-center  margin-top padding-bottom-xl border-bottom">
                        <view class="text-gray">随货支持</view>
                        <view class="text-red">20%(价值93240元)</view>
                    </view>


                    <view class="text-black text-bold text-left margin-top">
                        <text>商品1：53°飞天茅台500ml瓶装</text>
                    </view>
                    <view class="flex justify-between align-center  margin-top">
                        <view class="text-gray">首单进货</view>
                        <view class="text-red">300箱(1800瓶)</view>
                    </view>
                    <view class="flex justify-between align-center  margin-top">
                        <view class="text-gray">单价</view>
                        <view class="text-red">259元/瓶</view>
                    </view>
                    <view class="flex justify-between align-center  margin-top border-bottom padding-bottom-xl">
                        <view class="text-gray">随货支持</view>
                        <view class="text-red">20%(价值93240元)</view>
                    </view>

                    <view class="text-bold text-black">
                        <inputCell :end-switch="true" :important="false" label="特约代理商"></inputCell>
                    </view>
                    <inputCell :important="true" label="首单进货">
                        <view class="flex">
                            <input class="text-left" placeholder="请输入首单进货金额" placeholder-class="placeholderStyle"
                                   type="text">
                        </view>
                    </inputCell>
                    <!--                <inputCell :important="true" label="支持场数" placeholder="请输入场数" type="input"></inputCell>-->
                    <!--                <inputCell :important="false" label="合计总金额" text="肆拾玖万伍仟元整(￥495000.00)" text-color="red"-->
                    <!--                           type="text"></inputCell>-->
                    <view class="text-bold text-black">
                        <inputCell :end-switch="true" :important="false" label="品鉴会"></inputCell>
                    </view>
                    <inputCell :important="true" label="支持场数" placeholder="请输入场数" type="input"></inputCell>
                    <inputCell :important="true" endText="/场" label="餐费报销">
                        <view class="flex">
                            ￥<input class="text-left" placeholder="请输入报销金额" placeholder-class="placeholderStyle"
                                    type="text">
                        </view>
                    </inputCell>
                    <inputCell :important="true" endText="瓶/场" label="酒水支持">
                        <view class="flex">
                            <input class="text-left" placeholder="请输入数量" placeholder-class="placeholderStyle"
                                   type="text">
                        </view>
                    </inputCell>
                    <inputCell :important="false" label="总金额"></inputCell>
                    <view class="text-bold text-black">
                        <inputCell :end-switch="true" :important="false" label="任务达标"></inputCell>
                    </view>
                    <inputCell :important="true" label="年任务达">
                        <view class="flex">
                            <input class="text-left" placeholder="请输入年任务金额" placeholder-class="placeholderStyle"
                                   type="text">
                        </view>
                    </inputCell>

                    <view class="text-bold text-black">
                        <inputCell :end-switch="true" :important="false" label="任务奖励"></inputCell>
                    </view>
                    <inputCell :important="true" label="年任务达">
                        <view class="flex">
                            <input class="text-left" placeholder="请输入年任务金额" placeholder-class="placeholderStyle"
                                   type="text">
                        </view>
                    </inputCell>
                    <inputCell :important="true" endText="0件(0瓶)" label="随货奖励">
                        <view class="flex">
                            <input class="text-left" placeholder="请输入件数" placeholder-class="placeholderStyle"
                                   type="text">
                        </view>
                    </inputCell>
                    <!--                <view class="text-xs text-yellow text-left margin-left-sm">是否支持同等金额现金、积分兑换(可多选)</view>-->
                    <!--                <view class="flex justify-between margin-top margin-left-sm">-->
                    <!--                    支持积分兑换（52222积分）-->
                    <!--                    <radio></radio>-->
                    <!--                </view>-->
                    <!--                <view class="flex justify-between margin-top margin-left-sm">-->
                    <!--                    支持现金兑换（￥500000.00）-->
                    <!--                    <radio></radio>-->
                    <!--                </view>-->
                </view>
                <view class="whiteBoxShadow text-center margin-top ">
                    <boxTitle title="结算方式"></boxTitle>
                    <inputCell :end-switch="true" label="金额支付"></inputCell>
                    <inputCell :end-switch="true" label="现结"></inputCell>
                    <inputCell v-model="formData.way" :end-switch="true" label="先货后款"></inputCell>
                </view>
                <view class="whiteBoxShadow text-center margin-top ">
                    <boxTitle title="保证金设置"></boxTitle>
                    <inputCell :important="true" label="省级代理">
                        <view class="flex">
                            ￥<input class="text-left" placeholder="请输入保证金" placeholder-class="placeholderStyle"
                                    type="text">
                        </view>
                    </inputCell>
                    <inputCell :important="true" label="市级代理">
                        <view class="flex">
                            ￥<input class="text-left" placeholder="请输入保证金" placeholder-class="placeholderStyle"
                                    type="text">
                        </view>
                    </inputCell>
                    <inputCell :important="true" label="区/县级代理">
                        <view class="flex">
                            ￥<input class="text-left" placeholder="请输入保证金" placeholder-class="placeholderStyle"
                                    type="text">
                        </view>
                    </inputCell>
                    <inputCell :important="true" label="镇/街道代理">
                        <view class="flex">
                            ￥<input class="text-left" placeholder="请输入保证金" placeholder-class="placeholderStyle"
                                    type="text">
                        </view>
                    </inputCell>
                </view>
                <view class="cu-btn bg-red margin-top w100">确认添加</view>
            </template>

            <attestationProgress :progress="stepIndex" :basicsList="baseInfo"></attestationProgress>

            <!--            步骤一         -->
            <view v-show="stepIndex==0">
                <view class="bg-white padding-lr-sm radius margin-top-sm">
                    <inputCell :inputValue.sync="stepOneFormData.policyName" label="政策名称" type="input"
                               placeholder="请输入商品名称"></inputCell>
                </view>
                <view class="whiteBoxShadow margin-top-sm">
                    <template v-if="agentLevelSetting">
                        <boxTitle title="代理级别设置" @change="agentEdit" right-text="编辑" right-in-left-icon="edit"
                                  right-text-class="margin-left-xs" right-class="text-gray"></boxTitle>
                        <view class="bg-red light padding-sm">
                            <view class="flex justify-between text-black">
                                <view class="text-gray">代理等级</view>
                                <view>{{ agentLevelSetting.agentLevel }}</view>
                            </view>
                            <view class="flex justify-between text-black margin-top-sm">
                                <view class="text-gray">代理级别名称</view>
                                <view>{{ agentLevelSetting.levelName }}</view>
                            </view>
                            <view class="flex justify-between text-black margin-top-sm">
                                <view class="text-gray">保证金</view>
                                <view class="flex flex-direction align-end">
                                    <view class="text-red">￥{{ agentLevelSetting.depositAmount }}</view>
                                    <view style="font-style: oblique" class="text-gray text-sm">
                                        {{ convertCurrency(agentLevelSetting.depositAmount) }}
                                    </view>
                                </view>
                            </view>
                            <view class="flex justify-between text-black margin-top-sm">
                                <view class="text-gray">是否减免保证金</view>
                                <view class="text-red">{{ agentLevelSetting.reductionBond == 0 ? "否" : "是" }}</view>
                            </view>
                        </view>
                    </template>
                    <template v-else>
                        <boxTitle title="代理级别设置"></boxTitle>
                        <button @click="gotoPath('/pages/admin/policyAgency/addAgentLevel')"
                                class="cu-btn line-blue text-blue radius w100">配置代理级别
                        </button>
                    </template>
                    <inputCell @iconEvent="addAgentRegion" label="添加代理地区" icon="cuIcon-add" icon-color="red"
                               border="none"></inputCell>
                    <template v-if="true">
                        <!--                        <view v-for="(item,index) in region" :key="item.id">-->
                        <!--                            <view class="flex justify-between align-center text-gray margin-bottom-sm">-->
                        <!--                                <view>{{ item.regionName }}</view>-->
                        <!--                                <text @click="deleteRegion(index)" style="font-size: 32rpx"-->
                        <!--                                      class="cuIcon-deletefill"></text>-->
                        <!--                            </view>-->
                        <!--                            -->
                        <!--                        </view>-->
                        <view class="flex flex-wrap">
                            <view v-for="(child,childIndex) in street" :key="child.id"
                                  @click="agentPeopleCount"
                                  :class="((childIndex+1)%3)==0?'':'margin-right'"
                                  class="cityBox bg-gray flex justify-center align-center w30 padding-tb-sm radius margin-bottom-sm">
                                <view>{{ child }}</view>
                                <view @click.stop="deleteCity(childIndex)"
                                      class="close cuIcon-roundclosefill text-red"></view>
                            </view>
                        </view>
                    </template>
                </view>
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="价格设置"></boxTitle>
                    <inputCell label="建议零售价">
                        <view slot="center" class="flex align-center">
                            <text>￥</text>
                            <input v-model="stepOneFormData.retailPrice" class="margin-left-sm" type="number"
                                   placeholder="395.00">
                        </view>
                    </inputCell>
                    <inputCell label="代理价">
                        <view slot="center" class="flex align-center">
                            <text>￥</text>
                            <input v-model="stepOneFormData.agencyPrice" class="margin-left-sm" type="text"
                                   placeholder="请输入代理价">
                        </view>
                    </inputCell>
                    <inputCell label="商超指导价">
                        <view slot="center" class="flex align-center">
                            <text>￥</text>
                            <input v-model="stepOneFormData.minGuidePrice" class="margin-left-sm" type="text"
                                   placeholder="请输入指导价">
                            <text>~</text>
                            <text>￥</text>
                            <input v-model="stepOneFormData.maxGuidePrice" class="margin-left-sm" type="text"
                                   placeholder="请输入指导价">
                        </view>
                    </inputCell>
                    <inputCell label="企业团购价" border="none">
                        <view slot="center" class="flex align-center">
                            <text>￥</text>
                            <input v-model="stepOneFormData.enterpriseGroupPurchasePrice" class="margin-left-sm"
                                   type="text"
                                   placeholder="请输入团购价">
                        </view>
                    </inputCell>
                </view>

                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="样品订单设置">
                        <view slot="switch">
                            <u-switch activeColor="#E54D42" v-model="isSampleOrder" @change="switchChange"></u-switch>
                        </view>
                    </boxTitle>
                    <view v-show="isSampleOrder">
                        <inputCell :inputValue.sync="stepOneFormData.samplesNum" label="样品数量" type="input"
                                   placeholder="请输入可购买样品数量"></inputCell>
                        <inputCell label="样品单价" border="none">
                            <view slot="center" class="flex align-center">
                                <text>￥</text>
                                <input v-model="stepOneFormData.samplesPrice" class="margin-left-sm" type="text"
                                       placeholder="请输入样品单价">
                            </view>
                        </inputCell>
                    </view>
                </view>
            </view>

            <!--            步骤二         -->
            <view v-show="stepIndex==1">
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="合同设置"></boxTitle>
                    <inputCell label="合同商品总量">
                        <view slot="center" class="margin-left-sm flex align-center justify-between">
                            <input v-model="stepTwoFormData.commodityQuantity" type="number" placeholder="请输入数量">
                            <text>瓶</text>
                        </view>
                    </inputCell>
                    <inputCell label="合同商品总额">
                        <view slot="center" class="margin-left-sm flex align-center justify-end">
                            <view class="text-right">
                                <view class="text-red">
                                    ￥{{ contractPrice }}元
                                </view>
                                <view class="text-gray text-sm" style="font-style: oblique">
                                    {{ convertCurrency(contractPrice) }}
                                </view>
                            </view>
                        </view>
                    </inputCell>
                    <inputCell label="合同年限">
                        <view slot="center" class="margin-left-sm flex align-center justify-between">
                            <input v-model="stepTwoFormData.contractTerm" type="number" placeholder="请输入年限">
                            <text>年</text>
                        </view>
                    </inputCell>
                </view>
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="首单进货设置">
                        <view slot="switch">
                            <u-switch activeColor="#E54D42" v-model="isFirstOrder" @change="switchChange"></u-switch>
                        </view>
                    </boxTitle>
                    <view v-show="isFirstOrder">
                        <inputCell label="首单进货量">
                            <view slot="center" class="margin-left-sm flex align-center justify-between">
                                <input v-model="stepTwoFormData.firstOrderNum" type="number" placeholder="请输入瓶数">
                                <text>瓶</text>
                            </view>
                        </inputCell>
                        <inputCell label="首单合计金额">
                            <view slot="center" class="margin-left-sm flex align-center justify-end">
                                <view class="text-right">
                                    <view class="text-red">￥{{ firstOrderPrice }}元</view>
                                    <view class="text-gray text-sm" style="font-style: oblique">
                                        {{ convertCurrency(stepTwoFormData.firstOrderPrice) }}
                                    </view>
                                </view>
                            </view>
                        </inputCell>
                        <inputCell label="随货支持">
                            <view slot="center" class="margin-left-sm flex align-center justify-between">
                                <input v-model="stepTwoFormData.shippedSupport" type="number" placeholder="请输入百分比">
                                <text>%</text>
                            </view>
                        </inputCell>
                        <inputCell label="支持商品数量">
                            <view slot="center" class="margin-left-sm flex align-center justify-end">
                                <view class="text-right">
                                    <view>{{ supportNum }}瓶</view>
                                </view>
                            </view>
                        </inputCell>
                        <inputCell label="支持金额合计" border="none">
                            <view slot="center" class="margin-left-sm flex align-center justify-end">
                                <view class="text-right">
                                    <view class="text-red">￥{{ discountAmount }}元</view>
                                    <view class="text-gray text-sm" style="font-style: oblique">
                                        {{ convertCurrency(stepTwoFormData.discountAmount) }}
                                    </view>
                                </view>
                            </view>
                        </inputCell>
                    </view>
                </view>
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="返佣设置">
                        <view slot="switch">
                            <u-switch activeColor="#E54D42" v-model="isReturnCommission"
                                      @change="switchChange"></u-switch>
                        </view>
                    </boxTitle>
                    <view v-show="isReturnCommission">
                        <inputCell label="完成任务量设置">
                            <view slot="center">
                                <u-radio-group v-model="stepTwoFormData.completeTaskType" class="flex justify-end">
                                    <u-radio activeColor="red" label="金额" :name="0"></u-radio>
                                    <u-radio activeColor="red" class="margin-left-xl" label="商品" :name="1"></u-radio>
                                </u-radio-group>
                            </view>
                        </inputCell>
                        <inputCell label="任务商品总量">
                            <view slot="center" class="margin-left-sm flex align-center justify-between">
                                <input v-model="stepTwoFormData.totalTaskCommodities" type="number"
                                       :placeholder="stepTwoFormData.completeTaskType?'请输入瓶数':'请输入金额'">
                                <text>{{ stepTwoFormData.completeTaskType ? "瓶" : "元" }}</text>
                            </view>
                        </inputCell>
                        <inputCell @iconEvent="gotoCommission" label="返佣方式"
                                   icon="cuIcon-roundadd text-red"></inputCell>

                        <view v-if="stepTwoFormData.rakeBack.length" class="bg-red light radius padding-sm">

                            <view v-for="(item,index) in stepTwoFormData.rakeBack"
                                  :key="index" style="border-color: red !important;"
                                  class="margin-top-sm padding-bottom u-border-bottom">
                                <view class="flex text-black justify-between align-center margin-bottom-sm">
                                    <view class="text-bold">{{ item.rakeTypeName }}</view>
                                    <text style="font-size: 32rpx" class="cuIcon-deletefill text-gray"></text>
                                </view>
                                <view v-if="item.rakeTypeName !=='现金返佣'"
                                      class="flex align-center justify-between text-black margin-top-sm">
                                    <view v-if="item.rakeTypeName==='商品返佣'">商品数量</view>
                                    <view v-else-if="item.rakeTypeName==='积分返佣'">商品数量</view>
                                    <view v-if="item.rakeTypeName==='商品返佣'">{{ item.commodityNum }}瓶</view>
                                    <view v-if="item.rakeTypeName==='积分返佣'">{{ item.integralNum }}积分</view>
                                </view>
                                <view class="flex justify-between text-black margin-top-sm">
                                    <view>商品合计金额</view>
                                    <view v-if="item.rakeTypeName==='商品返佣'" class="text-right">
                                        <view class="text-red">￥{{ item.totalAmount }}元</view>
                                        <view class="text-sm text-gray oblique">
                                            {{ convertCurrency(item.totalAmount) }}
                                        </view>
                                    </view>
                                    <view v-if="item.rakeTypeName==='现金返佣'" class="text-right">
                                        <view class="text-red">￥{{ item.rakePrice }}元</view>
                                        <view class="text-sm text-gray oblique">
                                            {{ convertCurrency(item.rakePrice) }}
                                        </view>
                                    </view>
                                    <view v-if="item.rakeTypeName==='积分返佣'" class="text-right">
                                        <view class="text-red">￥{{ item.integralPrice }}元</view>
                                        <view class="text-sm text-gray oblique">
                                            {{ convertCurrency(item.integralPrice) }}
                                        </view>
                                    </view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="品鉴会设置">
                        <view slot="switch">
                            <u-switch activeColor="#E54D42" v-model="isAppraise" @change="switchChange"></u-switch>
                        </view>
                    </boxTitle>
                    <view v-show="isAppraise">
                        <button @click="addControl" class="cu-btn radius text-blue line-blue w100">添加控件</button>
                        <inputCell label="单场支持金额">
                            <view slot="center" class="margin-left-sm flex align-center">
                                <text>￥</text>
                                <input v-model="stepTwoFormData.singleSupportAmount" type="number" placeholder="请输入金额">
                            </view>
                        </inputCell>
                        <inputCell label="单场支持酒水">
                            <view slot="center" class="margin-left-sm flex align-center justify-between">
                                <input v-model="stepTwoFormData.singleSupportDrinks" class="margin-left" type="number"
                                       placeholder="请输入瓶数">
                                <text>瓶</text>
                            </view>
                        </inputCell>
                    </view>
                </view>
            </view>

            <!--            步骤三         -->
            <view v-show="stepIndex>=2">
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="选择结算方式">
                    </boxTitle>
                    <paySelect @radioChange="stepThreeFormData.settlementType = $event"
                               :data-list="payList"></paySelect>
                    <inputCell :text="stepThreeFormData.stagesNum||'请选择分期期数'" @iconEvent="selectPickerFun('stagesNum')"
                               label="设置分期期数" border="none" icon="cuIcon-right"></inputCell>
                    <view class="flex justify-between">
                        <view>每期支付金额(共12期)</view>
                        <view class="margin-left-sm flex align-center justify-end">
                            <view class="text-right">
                                <view class="text-red">¥{{ stagesPrice }}/期</view>
                                <view class="text-gray text-sm" style="font-style: oblique">
                                    {{ convertCurrency(stagesPrice) }}
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="合同生效条件设置">
                        <text slot="titleRight" class="text-gray text-sm margin-left-xs">(可多选）</text>
                    </boxTitle>
                    <paySelect :radioAndCheck="false" @checkChange="stepThreeFormData.effectiveCondition = $event"
                               :data-list="conditionList"></paySelect>

<!--                    <u-checkbox-group-->
<!--                        v-model="stepThreeFormData.effectiveConditions"-->
<!--                        placement="column"-->
<!--                        @change="checkboxChange"-->
<!--                    >-->
<!--                        <u-checkbox-->
<!--                            :customStyle="{marginBottom: '8px'}"-->
<!--                            v-for="(item, index) in conditionList"-->
<!--                            :key="index"-->
<!--                            :label="item.radioName"-->
<!--                            :name="item.radioName"-->
<!--                        >-->
<!--                        </u-checkbox>-->
<!--                    </u-checkbox-group>-->
                    <view class="padding-sm radius bg-orange light margin-top-sm">
                        <view class="text-lg margin-bottom-sm">
                            <text class="cuIcon-infofill text-orange"></text>
                            温馨提示:
                        </view>
                        <text>若未选择合同生效条件，申请代理商时渠道商审核通过后合同立即生效；</text>
                    </view>
                </view>
            </view>

            <view class="flex align-center justify-between">
                <button v-show="stepIndex>0" @click="clickBack"
                        class="cu-btn bg-red radius w100 margin-top margin-right">上一步
                </button>
                <button @click="clickNext" class="cu-btn bg-red radius w100 margin-top">
                    {{ stepIndex >= 2 ? "提交审核" : "下一步" }}
                </button>
            </view>
            <u-picker :columns="pickerArr" :show="pickerShow" @cancel="closePicker" @close="closePicker"
                      @confirm="selectPicker"></u-picker>
            <uni-popup ref="popup" type="bottom">
                <view v-show="popupIndex===0" style="min-height: 500rpx"
                      class="w100 bg-white radius padding-lr padding-bottom-sm">
                    <view class="grid col-3 text-lg padding-lr-sm padding-tb u-border-bottom">
                        <view></view>
                        <view class="text-center">选择省份</view>
                        <view @click="$refs.popup.close()" style="font-size: 38rpx"
                              class="text-right cuIcon-close"></view>
                    </view>
                    <scroll-view scroll-y style="height: 400rpx">
                        <u-checkbox-group @change="selectProvinceChange" placement="column" iconPlacement="right"
                                          v-model="province">
                            <view v-for="(item, index) in china" :key="item.code">
                                <u-checkbox
                                    class="padding-tb"
                                    :label="item.name"
                                    :name="item.name"
                                    activeColor="red"
                                    shape="square"
                                >
                                </u-checkbox>
                            </view>
                        </u-checkbox-group>
                    </scroll-view>
                    <view class="bg-white padding-xs">
                        <button @click="selectProvince" class="cu-btn bg-red radius w100">确定</button>
                    </view>
                </view>
                <view v-show="popupIndex===1" style="min-height: 500rpx" class="w100 bg-white radius">
                    <view class="grid col-3 text-lg padding-lr-sm padding-tb u-border-bottom">
                        <view></view>
                        <view class="text-center">添加组件</view>
                        <view @click="$refs.popup.close()" style="font-size: 38rpx"
                              class="text-right cuIcon-close"></view>
                    </view>
                    <view class="flex flex-wrap">
                        <view @click="gotoPath('/pages/admin/policyAgency/amountComponent')"
                              class="margin-sm u-border radius padding-sm flex flex-direction justify-center align-center">
                            <text class="cuIcon-recharge"></text>
                            <view>金额</view>
                        </view>
                        <view @click="gotoPath('/pages/admin/policyAgency/amountComponent')"
                              class="margin-sm u-border radius padding-sm flex flex-direction justify-center align-center">
                            <text class="cuIcon-goods"></text>
                            <view>商品</view>
                        </view>
                    </view>
                </view>
            </uni-popup>
        </view>
    </view>
</template>

<script>
import inputCell from "/src/components/common/form/inputCell";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import attestationProgress from "/src/pages/appCenter/attestation/attestationProgress";
import paySelect from "/src/components/fxb-pay-select/paySelect";
import convertCurrency from "/src/utils/dataFormat/convertCurrency";
import { mapMutations, mapState } from "vuex";
import china from "/src/utils/china.json";

export default {
    name: "addPolicy",
    components: {
        inputCell,
        boxTitle,
        attestationProgress,
        paySelect
    },
    data() {
        return {
            province: [],//省份
            commodityId: 0,
            china,
            popupIndex: 0,
            payList: [
                {
                    logo: "/payLogo/Group%2043ICON.png",
                    logoRight: "全额支付"
                },
                {
                    logo: "/payLogo/Group%2040ICON.png",
                    logoRight: "现结"
                },
                {
                    logo: "/payLogo/Group%2041ICON.png",
                    logoRight: "先卖货后付款"
                },
                {
                    icon: "zhuanzhang",
                    logoRight: "付部分款"
                }
            ],
            conditionList: [
                {
                    logoRight: "需支付首单进货款",
                },
                {
                    logoRight: "需支付保证金",
                }
            ],
            radioValue: "金额",
            isSampleOrder: false,//是否开启样品订单
            isFirstOrder: false,//是否开启首单进货设置
            isReturnCommission: false,//是否开启返佣设置
            isAppraise: false,//是否开启品鉴会设置
            stepIndex: 0,//步骤索引
            baseInfo: [
                {
                    cuIcon: "check",
                    name: "代理级别"
                },
                {
                    cuIcon: "taoxiaopu",
                    name: "合同内容"
                },
                {
                    cuIcon: "card",
                    name: "结算方式"
                }
            ],
            //代理级别配置
            agentLevelSetting: null,
            //第一步存的数据
            stepOneFormData: {
                // agentPeopleCount:[],//代理省份及代理人数
                commodityId: "", //"商品ID",
                policyName: "",//政策名称
                agentLevels: {}, // 代理级别,
                agentsProvinces: [],
                retailPrice: "",//零售价
                agencyPrice: "",//代理价
                minGuidePrice: "",//指导价最小
                maxGuidePrice: "",//指导价最大
                enterpriseGroupPurchasePrice: "",  // "企业团购价"
                samplesNum: "",                    // "样品数量"
                samplesPrice: ""                  // "样品单价"
            },

            //第二步存的数据
            stepTwoFormData: {
                commodityQuantity: "", // '合同商品数量'
                contractPrice: 0,     // "合同总金额"
                contractTerm: "",//合同年限
                firstOrderNum: "",//首单进货量
                firstOrderPrice: 0, //"首单合计金额",
                shippedSupport: "",//随货支持
                supportNum: "",//支持商品数量
                discountAmount: "",// "优惠金额（首单进货设置）",
                completeTaskType: 0,//完成任务量设置
                totalTaskCommodities: "",//任务商品总量
                rakeBack: [  //返佣方式
                    {
                        rakeTypeName: "",
                        isChecked: "",
                        placeholder: "",
                        commodityNum: "",
                        unit: "",
                        totalAmount: ""
                    },
                    {
                        "rakeTypeName": "",
                        "isChecked": "",
                        "placeholder": "",
                        "rakePrice": "",
                        "unit": ""
                    },
                    {
                        "rakeTypeName": "",
                        "isChecked": "",
                        "placeholder": "",
                        "integralNum": "",
                        "unit": "",
                        "total": "",
                        "integralPrice": ""
                    }
                ],
                singleSupportAmount: "",//单场支持金额
                singleSupportDrinks: ""//单场支持酒水
            },

            //第三步存的数据
            stepThreeFormData: {
                stagesNum: 0,//分期数
                stagesPrice: "",
                settlementType: "",     //  '结算类型0全额支付1现结2先卖货后付款3分期付款',
                effectiveCondition: [] // '生效条件',
            },

            street: [],//代理地区数据
            pickerType: "",
            pickerShow: false,
            pickerArr: [],
            contractTerm: [["2023", "2024", "2025", "2026", "2027"]],//选择合同年限
            stagesNum: [["三期", "六期", "十二期"]],//分期数
            returnCommission: [
                {
                    id: "10101",
                    title: "商品返佣",
                    count: "600瓶",
                    price: "156300.00"
                },
                {
                    id: "10102",
                    title: "现金返佣",
                    price: "156300.00"
                },
                {
                    id: "10103",
                    title: "积分返佣",
                    count: "15630000分",
                    price: "156300.00"
                }
            ]

        };
    },
    computed: {
        ...mapState("policy", ["agentLvInfo", "rakeBack"]),
        contractPrice() {
            const res = this.stepOneFormData.agencyPrice * this.stepTwoFormData.commodityQuantity;
            this.stepTwoFormData.contractPrice = res;
            return res;
        },
        firstOrderPrice() {
            const res = this.stepOneFormData.agencyPrice * this.stepTwoFormData.firstOrderNum;
            this.stepTwoFormData.firstOrderPrice = res;
            return res;
        },
        supportNum() {
            const res = Math.round(this.stepTwoFormData.firstOrderNum * this.stepTwoFormData.shippedSupport / 100);
            this.stepTwoFormData.supportNum = res;
            return res;
        },
        discountAmount() {
            const res = this.stepOneFormData.agencyPrice * this.stepTwoFormData.supportNum;
            this.stepTwoFormData.discountAmount = res;
            return res;
        },
        stagesPrice() {
            let stagesNum = 0;
            if (this.stepThreeFormData.stagesNum === 0) {
                stagesNum = 1;
            } else if (this.stepThreeFormData.stagesNum === "三期") {
                stagesNum = 3;
            } else if (this.stepThreeFormData.stagesNum === "六期") {
                stagesNum = 6;
            } else if (this.stepThreeFormData.stagesNum === "十二期") {
                stagesNum = 12;
            }
            const res = +(this.stepTwoFormData.contractPrice / stagesNum).toFixed(2);
            this.stepThreeFormData.stagesPrice = res;
            return res;
        }

    },
    watch: {
        // province(newVal, oldVal) {
        //     console.log(newVal, oldVal);
        // }
    },
    onLoad(event) {
        console.log(event.goodsId);
        this.stepOneFormData.commodityId = + event.goodsId;
    },
    onShow() {
        // this.stepOneFormData.agentPeopleCount = this.$store.state.policy.agentPeople
        this.agentLevelSetting = JSON.stringify(this.$store.state.policy.agentLvInfo)==='{}'?null:this.$store.state.policy.agentLvInfo;
        this.stepOneFormData.agentLevels = this.agentLvInfo;
        this.stepTwoFormData.rakeBack = this.rakeBack.filter(item => item.isChecked);
    },
    methods: {
        ...mapMutations("policy", ["setAgentPrice", "setAgentLvInfo", "setRakeBack"]),
        //跳转代理人数设置
        agentPeopleCount() {
            uni.navigateTo({
                url: "/pages/admin/policyAgency/settingAgentPeopleCount?street=" + JSON.stringify(this.street)
            });
        },
        //选择省份监听
        selectProvinceChange(event) {
            this.stepOneFormData.agentsProvinces = event.map(item => {
                return { provinceName: item };
            });
        },
        selectProvince() {
            this.street = this.province;
            this.$refs.popup.close();
        },
        checkboxChange(event) {
            console.log(event);
        },
        gotoCommission() {
            this.setAgentPrice(this.stepOneFormData.agencyPrice);
            uni.navigateTo({ url: "/pages/admin/policyAgency/addCommission" });
        },
        convertCurrency,//价格小写数字转大写
        //代理级别配置编辑
        agentEdit() {
            uni.navigateTo({
                url: "/pages/admin/policyAgency/addAgentLevel?id=" + 1
            });
        },
        addAgentRegion() {
            // const agentLevels = this.stepOneFormData.agentLevels;
            // console.log(agentLevels.agentLevel);
            // let lv = 0;
            // if (!agentLevels.agentLevel) {
            //     uni.showToast({
            //         title: "请先配置代理级别",
            //         icon: "none"
            //     });
            // } else if (agentLevels.agentLevel === "一级") {
            //     uni.showToast({
            //         title: "一级为国代,无需选择地址",
            //         icon: "none"
            //     });
            // } else if (agentLevels.agentLevel === "二级") {
            //     uni.showToast({
            //         title: "二级省代直接选择",
            //         icon: "none"
            //     });
            // } else if (agentLevels.agentLevel === "三级") {
            //     lv = 1;
            //     uni.navigateTo({
            //         url: "/pages/appCenter/selectCity/selectArea?level=" + lv
            //     });
            // } else if (agentLevels.agentLevel === "四级") {
            //     lv = 2;
            //     uni.navigateTo({
            //         url: "/pages/appCenter/selectCity/selectArea?level=" + lv
            //     });
            // } else if (agentLevels.agentLevel === "五级") {
            //     lv = 3;
            //     uni.navigateTo({
            //         url: "/pages/appCenter/selectCity/selectArea?level=" + lv
            //     });
            // }
            this.popupIndex = 0;
            this.$refs.popup.open();
        },
        //添加返佣方式返回的值
        getAddCommission(data) {
            console.log("返佣方式", data);
        },
        resetVuex() {
            // this.submitData = {};
            this.setAgentPrice("");
            this.setAgentLvInfo({});
            this.setRakeBack("");
        },
        //下一步
        clickNext() {
            let isStepOneFormData = false,isStepTwoFormData = false,isStepThreeFormData = false,arr = [];
            arr = [
                {
                    name:"policyName",
                    tips:"请输入政策名称"
                },
                {
                    name:"agentLevels",
                    tips:"请配置代理级别"
                },
                {
                    name:"agentsProvinces",
                    tips:"请添加代理地区"
                },
                {
                    name:"retailPrice",
                    tips:"请输入零售价"
                },
                {
                    name:"agencyPrice",
                    tips:"请输入代理价"
                },
                {
                    name:"minGuidePrice",
                    tips:"请输入指导价最小"
                },
                {
                    name:"maxGuidePrice",
                    tips:"请输入指导价最大"
                },
                {
                    name:"enterpriseGroupPurchasePrice",
                    tips:"请输入企业团购价"
                }
            ]
            isStepOneFormData = this.$util.verification(this.stepOneFormData,arr)
            if (isStepOneFormData){
                this.stepIndex++;
            }
            if (this.stepIndex > 2) {
                console.log(this.stepOneFormData);
                console.log(this.stepTwoFormData);
                console.log(this.stepThreeFormData);
                const submitData = this.stepOneFormData;
                submitData.commodityId = this.stepOneFormData.commodityId;
                submitData.agentLevels = this.stepOneFormData.agentLevels;
                // submitData.agentsProvinces = []; // 地区先为空
                submitData.agencyContract = this.stepTwoFormData;
                submitData.rakeBack = this.stepTwoFormData.rakeBack;
                submitData.settlementMethod = this.stepThreeFormData;
                const res = this.$http.addPolicy(submitData);
                this.resetVuex();
                setTimeout(() => {
                    uni.navigateBack({ delta: 1 });
                }, 500);
            }
        },
        //上一步
        clickBack() {
            if (this.stepIndex > 0) {
                this.stepIndex--;
            }
        },
        switchChange(e) {

        },
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        },
        //删除区级代理
        deleteRegion(index) {
            this.region.splice(index, 1);
        },
        //删除街道级代理
        deleteCity(childIndex) {
            this.province.splice(childIndex, 1);
        },
        closePicker() {
            this.pickerShow = false;
        },
        selectPicker(e) {
            this.$set((this.stepIndex == 0 ? this.stepOneFormData : this.stepIndex == 1 ? this.stepTwoFormData : this.stepThreeFormData), this.pickerType, e.value[0]);
            this.pickerShow = false;
        },
        selectPickerFun(name) {
            this.pickerArr = this[name];
            this.pickerType = name;
            this.pickerShow = true;
        },
        //添加控件
        addControl() {
            this.popupIndex = 1;
            this.$refs.popup.open();
        }
    }

};
</script>

<style lang="scss" scoped>
.uni-input-placeholder, input {
    font-size: 28rpx;
}

.bg-transparent {
    background-color: rgba(255, 0, 0, 0.2)
}

.cityBox {
    position: relative;
}

.close {
    position: absolute;
    right: 0;
    top: 0;
    width: 28rpx;
    height: 28rpx;
}


</style>
