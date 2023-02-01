<template>
    <view :class="pickerShow===true?'noScroll':''" class="content">
        <u-navbar :autoBack="true" title="参数"></u-navbar>

        <view :style="`margin-top:${CustomBar}px;`" class="padding-lr-sm padding-tb">
<!--            <view class="whiteBoxShadow margin-bottom">-->
<!--                <boxTitle title="商品条码"></boxTitle>-->
<!--                <view class="flex justify-between">-->
<!--                    <view>-->
<!--                        <text class="text-red">*</text>-->
<!--                        商品条码-->
<!--                        <text class="text-gray margin-left-sm">可扫码进行添加</text>-->
<!--                    </view>-->
<!--                    <view @click="scan">-->
<!--                        <text class="text-orange cuIcon-scan" style="font-size: 36rpx"></text>-->
<!--                    </view>-->
<!--                </view>-->
<!--                <w-barcode v-if="options" ref="barcode" :options="options"></w-barcode>-->
<!--            </view>-->
            <template v-if="false">
                <view class="whiteBoxShadow margin-bottom">
                    <boxTitle title="详情信息"></boxTitle>
                    <inputCell :text="subForm.controBrandId||'请选择'" icon="cuIcon-right" label="品牌"
                               @iconEvent="selectBrand"></inputCell>
                    <inputCell label="商品品牌授权书" type="upload"
                               @uploadImg="subForm.commodityAuthorization = [$event.data[0]]">
                    </inputCell>
                    <inputCell v-if="goodsType==='yellowWine'"
                               :text="subForm.fragrantType||'请选择'"
                               icon="cuIcon-right" label="酒品类型"
                               @iconEvent="selectPickerFun('fragrantType')">
                    </inputCell>
                    <inputCell v-if="goodsType==='importedWine'"
                               :text="subForm.beerType||'请选择'"
                               icon="cuIcon-right" label="类别"
                               @iconEvent="selectPickerFun('beerType')">
                    </inputCell>
                    <inputCell v-if="goodsType==='grapeWine'"
                               :text="subForm.grapeWineTastingType||'请选择'"
                               icon="cuIcon-right" label="酒品类型"
                               @iconEvent="selectPickerFun('grapeWineTastingType')">
                    </inputCell>
                    <inputCell v-if="goodsType==='beer'" :text="subForm.beerType||'请选择'"
                               icon="cuIcon-right" label="风格类型"
                               @iconEvent="selectPickerFun('beerType')">
                    </inputCell>

                    <inputCell v-if="goodsType==='liquor'||goodsType==='vintageWine'"
                               :text="subForm.controAromaticType||'请选择'"
                               icon="cuIcon-right" label="香型"
                               @iconEvent="selectPickerFun('controAromaticType')">
                    </inputCell>
                    <inputCell
                        v-if="goodsType==='liquor'||goodsType==='beer'||goodsType==='yellowWine'||goodsType==='grapeWine'||goodsType==='importedWine'||goodsType==='vintageWine'"
                        :text="subForm.controAlcohol||'请选择'"
                        icon="cuIcon-right" label="酒精度"
                        @iconEvent="selectPickerFun('controAlcohol')">
                    </inputCell>
                    <inputCell v-if="goodsType==='beer'" :input-value.sync="formData.maltose" label="麦芽糖"
                               placeholder="请输入麦芽糖" type="input"></inputCell>
                    <inputCell v-if="goodsType==='beer'" :input-value.sync="formData.characteristic" label="特点"
                               placeholder="请输入特点" type="input"></inputCell>
                    <inputCell v-if="goodsType==='grapeWine'" :input-value.sync="formData.acidity" label="酸度"
                               placeholder="请输入酸度" type="input"></inputCell>
                    <inputCell v-if="goodsType==='grapeWine'" :input-value.sync="formData.sweetness" label="甜度"
                               placeholder="请输入甜度" type="input"></inputCell>
                    <inputCell v-if="goodsType==='grapeWine'" :input-value.sync="formData.tannin" label="单宁强度"
                               placeholder="请输入单宁强度" type="input"></inputCell>
                    <inputCell :text="subForm.controNetContent||'请选择'"
                               icon="cuIcon-right" label="净含量"
                               @iconEvent="selectPickerFun('controNetContent')">
                    </inputCell>
                    <!--                <inputCell v-if="goodsType==='grapeWine'" label="规格" placeholder="如1kg/瓶"-->
                    <!--                           type="input">-->
                    <!--                    <view class=""></view>-->
                    <!--                </inputCell>-->
                    <inputCell
                        v-if="goodsType==='liquor'||goodsType==='beer'||goodsType==='importedWine'||goodsType==='importedWine'"
                        :input-value.sync="formData.specificationsValue"
                        :text="formData.specificationsUnit||'瓶/箱'"
                        icon="cuIcon-right"
                        input-end
                        label="规格"
                        placeholder="请输入数量并选择规格单位"
                        type="input"
                        @iconEvent="selectPickerFun('specificationsUnit')"></inputCell>
                    <inputCell
                        v-if="goodsType==='vintageWine'"
                        :text="subForm.qualityType||'请选择'"
                        icon="cuIcon-right"
                        label="质量等级"
                        @iconEvent="selectPickerFun('qualityType')"></inputCell>
                    <inputCell v-if="goodsType==='liquor'||goodsType==='vintageWine'"
                               :text="subForm.controMaterialQuality||'请选择'"
                               icon="cuIcon-right"
                               label="酒瓶材质"
                               @iconEvent="selectPickerFun('controMaterialQuality')">
                    </inputCell>
                    <inputCell v-if="goodsType==='yellowWine'" :text="subForm.flavorType.split('（')[0]||'请选择'"
                               icon="cuIcon-right"
                               label="选择口味"
                               @iconEvent="selectPickerFun('flavorType')"></inputCell>
                    <inputCell v-if="goodsType==='yellowWine'"
                               :text="subForm.flavorType.split('：')[1]||''"
                               label="总糖"
                    ></inputCell>
                    <inputCell v-if="goodsType==='beer'||goodsType=='importedWine'" :text="subForm.areaType||'请选择'"
                               icon="cuIcon-right"
                               label="国产/进口"
                               @iconEvent="selectPickerFun('areaType')"></inputCell>
                    <inputCell v-if="goodsType==='liquor'||goodsType==='beer'"
                               :input-value.sync="subForm.controManufactor"
                               label="厂家" type="input">
                    </inputCell>
                    <inputCell
                        v-if="goodsType==='liquor'||goodsType==='beer'||goodsType==='yellowWine'||goodsType==='vintageWine'"
                        :input-value.sync="subForm.controPlaceOfOrigin"
                        label="产地" type="input">
                    </inputCell>
                    <inputCell v-if="goodsType==='grapeWine'||goodsType=='importedWine'" icon="cuIcon-right"
                               label="原产国"
                               text="请选择产地"></inputCell>
                    <!--                <inputCell v-if="goodsType==='liquor'||goodsType=='importedWine'"-->
                    <!--                           :text="subForm.controPackagingForm||'请选择'"-->
                    <!--                           icon="cuIcon-right"-->
                    <!--                           label="包装种类"-->
                    <!--                           @iconEvent="selectPacking">-->
                    <!--                </inputCell>-->
                    <inputCell
                        v-if="goodsType==='beer'||goodsType=='importedWine'||goodsType==='vintageWine'||goodsType==='liquor'"
                        :label-require="false"
                        disabled label="食品安全"
                        placeholder="未填写"
                        text-button="去填写"
                        text-button-style="bg-blue"
                        type="input"
                        @textBtnEvent="gotoSafety"></inputCell>
                    <inputCell :inputValue.sync="subForm.controRawMaterial"
                               border="none" label="原材料" placeholder="请输入原材料"
                               type="input">
                    </inputCell>
                    <inputCell v-if="goodsType==='liquor'||goodsType==='yellowWine'||goodsType==='vintageWine'"
                               :inputValue.sync="subForm.controExecutiveStandards" border="none"
                               label="执行标准"
                               placeholder="请输入执行标准"
                               type="input"></inputCell>
                </view>
                <view class="whiteBoxShadow">
                    <boxTitle title="规格参数"></boxTitle>
                    <inputCell
                        v-if="goodsType==='liquor'||goodsType==='beer'||goodsType==='yellowWine'||goodsType==='grapeWine'||goodsType=='importedWine'||goodsType==='vintageWine'"
                        :input-value.sync="subForm.controArticleNo"
                        label="商品编号"
                        placeholder="请输入商品编号"
                        type="input">
                    </inputCell>
                    <view class="margin-tb-sm text-bold">主体</view>
                    <inputCell
                        v-if="goodsType==='liquor'||goodsType==='beer'||goodsType==='yellowWine'||goodsType==='grapeWine'||goodsType=='importedWine'"
                        :text="subForm.controQualityGuaranteePeriod||'见瓶身/见标签喷码'"
                        icon="cuIcon-right"
                        label="保质期"
                        @iconEvent="selectSellByDate">
                    </inputCell>
                    <inputCell v-if="goodsType==='grapeWine'" :input-value.sync="formData.soberTime"
                               label="醒酒时间"
                               placeholder="请输入醒酒时间"
                               type="input"></inputCell>
                    <inputCell v-if="goodsType==='vintageWine'" :text="formData.exFactoryTime||'请选择'"
                               icon="cuIcon-right"
                               label="出厂年份" @iconEvent="selectExTime"
                    ></inputCell>
                    <u-datetime-picker
                        v-model="formData.exFactoryTime"
                        :maxDate="1786778555000"
                        :minDate="1587524800000"
                        :show="showTimePicker"
                        mode="year-month"
                        @close="showTimePicker=false"
                        @confirm="showTimePicker=false"
                    ></u-datetime-picker>
                    <inputCell
                        v-if="goodsType==='liquor'||goodsType==='beer'||goodsType==='yellowWine'||goodsType==='grapeWine'||goodsType=='importedWine'"
                        :input-value.sync="formData.controStorageMode"
                        label="储存方式"
                        placeholder="密闭，放置于阴凉处、干燥处、避免阳 光直射"
                        type="input"></inputCell>
                    <inputCell
                        v-if="goodsType==='liquor'||goodsType==='beer'||goodsType==='yellowWine'||goodsType==='grapeWine'||goodsType=='importedWine'"
                        :input-value.sync="formData.controDateOfManufacture"
                        label="生产日期"
                        placeholder="见瓶身/见标签喷码"
                        type="input"></inputCell>

                    <view class="margin-tb-sm text-bold">参数</view>
                    <inputCell v-if="goodsType==='vintageWine'" :input-value.sync="formData.year" :label-require="false"
                               label="年代（选填）"
                               type="input"></inputCell>
                    <inputCell
                        v-if="goodsType==='grapeWine'"
                        :input-value.sync="formData.newOrderTime"
                        label="新/旧时间"
                        type="input"
                    ></inputCell>
                    <inputCell
                        v-if="goodsType==='grapeWine'"
                        :text="subForm.cupType||'请选择瓶塞类型'"
                        icon="cuIcon-right"
                        label="瓶塞类型"
                        @iconEvent="selectPickerFun('cupType')"></inputCell>
                    <inputCell
                        v-if="goodsType==='liquor'||goodsType==='beer'||goodsType==='yellowWine'||goodsType==='grapeWine'||goodsType=='importedWine'||goodsType==='vintageWine'"
                        :text="subForm.controApplicableScenarios||'请选择试用场景'"
                        icon="cuIcon-right"
                        label="适用场景"
                        @iconEvent="selectPickerFun('controApplicableScenarios')"></inputCell>
                    <inputCell
                        v-if="goodsType==='liquor'||goodsType==='beer'||goodsType==='yellowWine'||goodsType==='grapeWine'||goodsType=='importedWine'||goodsType==='vintageWine'"
                        :text="subForm.controPackagingForm||'请选择试用包装形式'"
                        icon="cuIcon-right"
                        label="包装形式"
                        @iconEvent="selectPickerFun('controPackagingForm')"></inputCell>
                    <inputCell
                        v-if="goodsType==='grapeWine'"
                        :input-value.sync="formData.texture"
                        label="口感"
                        placeholder="请输入口感"
                        type="input"></inputCell>
                    <inputCell
                        v-if="goodsType==='grapeWine'"
                        :input-value.sync="formData.grapeWineColor"
                        label="颜色"
                        placeholder="请输入颜色"
                        type="input"></inputCell>
                    <inputCell v-if="goodsType==='grapeWine'" :text="subForm.grapeFragrance||'请选择'" icon="cuIcon-right"
                               label="香型"
                               @iconEvent="selectPickerFun('grapeFragrance')"></inputCell>
                    <inputCell
                        v-if="goodsType==='grapeWine'"
                        :input-value.sync="formData.grapeVariety"
                        label="葡萄品种"
                        placeholder="请输入葡萄品种"
                        type="input"></inputCell>
                </view>
            </template>
            <template>
                <view class="whiteBoxShadow">
                    <boxTitle title="详情信息"></boxTitle>
                    <fxbForm @onChange="subForm = $event" ref="fxbForm" :rules="rules" :key="JSON.stringify([subForm.controBrandId,subForm.commodityAuthorization])" :form-desc="formDesc" :model="subForm"></fxbForm>
                </view>
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="规格参数"></boxTitle>
                    <fxbForm ref="fxbFormTwo" :rules="rulesTwo" :key="JSON.stringify(subForm.commodityAuthorization)" :form-desc="formDescTwo" :model="subForm"></fxbForm>
                </view>
            </template>
            <view class="padding-sm margin-top-sm bg-white flex justify-around">
                <button class="w50 cu-btn bg-gray radius" @click="cancel">取消</button>
                <button class="w50 cu-btn bg-red radius margin-left-sm" @click="confirm">确定</button>
            </view>
        </view>
        <u-picker :columns="pickerArr" :show="pickerShow" keyName="label" @cancel="closePicker" @close="closePicker" @confirm="selectPicker"></u-picker>
    </view>
</template>

<script>
import fxbForm from "/src/components/fxb/fxb-form";
import inputCell from "/src/components/common/form/inputCell";
import fxbUForm from "/src/pages/admin/adminProduct/components/fxb-u-form";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbImage from "/src/components/fxb/fxb-image";
import { mapMutations, mapState } from "vuex";

export default {
    name: "productParameter",
    components: {
        boxTitle,
        fxbUForm,
        inputCell,
        fxbImage,
        fxbForm
    },
    data() {
        return {
            options: null,
            goodsType: "vintageWine",//白酒liquor 啤酒beer 黄酒yellowWine 葡萄酒 grapeWine 洋酒importedWine 收藏酒vintageWine
            pickerShow: false,
            showTimePicker: false,
            showPopup: true,
            rulesTwo:{
                "controArticleNo": {
                    type: "string",
                    required: true,
                    min:1,
                    message: "请输入商品编号",
                    trigger: ["blur", "change"]
                },
                "controQualityGuaranteePeriod": {
                    type: "string",
                    required: true,
                    message: "请选择保质期",
                    trigger: ["blur", "change"]
                },
                "controStorageMode": {
                    type: "string",
                    required: true,
                    message: "请输入储存方式",
                    trigger: ["blur", "change"]
                },
                "controDateOfManufacture": {
                    type: "string",
                    required: true,
                    message: "请输入生产日期",
                    trigger: ["blur", "change"]
                },
                "controApplicableScenarios": {
                    type: "string",
                    required: true,
                    message: "请选择适用场景",
                    trigger: ["blur", "change"]
                },
                "controPackagingForm": {
                    type: "string",
                    required: true,
                    message: "请选择包装形式",
                    trigger: ["blur", "change"]
                },
            },
            formDescTwo:[
                {
                    keyName: "controArticleNo",
                    type: "input",
                    required: true,
                    label: "商品编号",
                    borderBottom: true,
                    placeholder: "请输入商品编号",
                },
                {
                    keyName: "controQualityGuaranteePeriod",
                    type: "classify",
                    required: true,
                    title:"主体",
                    label: "保质期",
                    placeholder: this.$config.SELL_BY_DATE[0][0].label,
                    column: this.$config.SELL_BY_DATE
                },
                {
                    keyName: "controStorageMode",
                    type: "input",
                    required: true,
                    label: "储存方式",
                    borderBottom: true,
                    placeholder: "密闭，放置于阴凉处、干燥处、避免阳 光直射",
                },
                {
                    keyName: "controDateOfManufacture",
                    type: "input",
                    required: true,
                    label: "生产日期",
                    borderBottom: true,
                    placeholder: "见瓶身/见标签喷码",
                },
                {
                    keyName: "controApplicableScenarios",
                    type: "classify",
                    required: true,
                    title:"参数",
                    label: "适用场景",
                    placeholder: '请选择适用场景',
                    column: this.$config.SCENE_TYPE
                },
                {
                    keyName: "controPackagingForm",
                    type: "classify",
                    required: true,
                    label: "包装类型",
                    placeholder: '请选择包装形式',
                    column: this.$config.PACKING_TYPE
                },
            ],
            rules:{
                "controBrandId": {
                    type: "string",
                    required: true,
                    min:1,
                    message: "请选择品牌",
                    trigger: ["blur", "change"]
                },
                "commodityAuthorization": {
                    type: "array",
                    required: true,
                    min:1,
                    message: "请上传商品品牌授权书",
                    trigger: ["blur", "change"]
                },
                "controAromaticType": {
                    type: "string",
                    required: true,
                    min:1,
                    message: "请选择香型",
                    trigger: ["blur", "change"]
                },
                "controAlcohol": {
                    type: "string",
                    required: true,
                    message: "请选择香型",
                    trigger: ["blur", "change"]
                },
                "controNetContent": {
                    type: "string",
                    required: true,
                    message: "请输入单瓶净含量",
                    trigger: ["blur", "change"]
                },
                "controSpecifications": {
                    type: "object",
                    required: true,
                    validator: (rule, value, callback) => {
                        // 上面有说，返回true表示校验通过，返回false表示不通过
                        // uni.$u.test.mobile()就是返回true或者false的
                        let isValidator = false;
                        for (const ruleKey in this.subForm.controSpecifications) {
                            if (this.subForm.controSpecifications.count!==''){
                                isValidator = true
                            }
                        }
                        return isValidator;
                    },
                    message: "请输入规格",
                    trigger: ["blur", "change"]
                },
                "controMaterialQuality": {
                    type: "string",
                    required: true,
                    min:1,
                    message: "请选择酒瓶材质",
                    trigger: ["blur", "change"]
                },
                "controManufactor": {
                    type: "string",
                    required: true,
                    message: "请输入厂家",
                    trigger: ["blur", "change"]
                },
                "controPlaceOfOrigin": {
                    type: "string",
                    required: true,
                    message: "请输入产地",
                    trigger: ["blur", "change"]
                },
                "controRawMaterial": {
                    type: "string",
                    required: true,
                    message: "请输入原材料",
                    trigger: ["blur", "change"]
                },
                "controExecutiveStandards": {
                    type: "string",
                    required: true,
                    message: "请输入执行标准",
                    trigger: ["blur", "change"]
                },
            },
            formDesc: [
                {
                    keyName: "controBrandId",
                    type: "classify",
                    required: true,
                    label: "品牌",
                    path:"/pages/agent/brandScreen",
                    placeholder: "请选择",
                },
                {
                    keyName: "commodityAuthorization",
                    type: "image",
                    required: true,
                    label: "商品品牌授权书",
                    labelWidth:120,
                    borderBottom: true,
                },
                {
                    keyName: "controAromaticType",
                    type: "classify",
                    required: true,
                    label: "香型",
                    borderBottom: true,
                    placeholder: "请选择",
                    column: this.$config.FRAGRANT_TYPE
                },
                {
                    keyName: "controAlcohol",
                    type: "classify",
                    required: true,
                    label: "酒精度",
                    borderBottom: true,
                    placeholder: "请选择",
                    column: this.$config.VOL_TYPE
                },
                {
                    keyName: "controNetContent",
                    type: "classify",
                    required: true,
                    label: "单瓶净含量",
                    borderBottom: true,
                    placeholder: "请选择",
                    column: this.$config.NET_CONTENT_TYPE
                },
                {
                    keyName: "controSpecifications",
                    type: "inputAndClassify",
                    required: true,
                    label: "规格",
                    borderBottom: true,
                    placeholder: "请输入数量并选择规格单位",
                    column:this.$config.SPECS_TYPE
                },
                {
                    keyName: "controMaterialQuality",
                    type: "classify",
                    required: true,
                    label: "酒瓶材质",
                    borderBottom: true,
                    placeholder: "请选择",
                    column:this.$config.BOTTLE_TYPE
                },
                {
                    keyName: "controManufactor",
                    type: "input",
                    required: true,
                    borderBottom: true,
                    label: "厂家",
                    placeholder: "请输入内容",
                },
                {
                    keyName: "controPlaceOfOrigin",
                    type: "input",
                    required: true,
                    borderBottom: true,
                    label: "产地",
                    placeholder: "请输入内容",
                },
                {
                    keyName: "importedWine",
                    type: "button",
                    buttonText:"去填写",
                    required: true,
                    label: "食品安全",
                    placeholder: "未填写",
                    borderBottom: true,
                    path:"/pages/admin/adminProduct/foodSafety"
                },
                {
                    keyName: "controRawMaterial",
                    type: "input",
                    required: true,
                    borderBottom: true,
                    label: "原材料",
                    placeholder: "请输入内容",
                },
                {
                    keyName: "controExecutiveStandards",
                    type: "input",
                    required: true,
                    label: "执行标准",
                    placeholder: "请输入内容",
                }
            ],
            formData: {
                texture: "",//口感
                soberTime: "",//醒酒时间
                grapeVariety: "",//葡萄品种
                grapeWineColor: "",//葡萄酒颜色
                yellowWineType: "",//黄酒产品类型
                authorizationImg: "",//授权书
                brandType: "",//品牌
                beerType: "",//啤酒类型
                fragrantType: "",//白酒香型
                controPackagingForm: "",//包装类型
                controQualityGuaranteePeriod: "",//保质期
                controApplicableScenarios: "",//试用场景
                volType: "",//酒精度
                controNetContent: "",//净含量,
                controMaterialQuality: "",//酒瓶类型
                controDateOfManufacture: "",        // '生产日期',
                flavorType: "",//口味`
                grapeWineTastingType: "",//葡萄酒品酒类型
                grapeFragrance: "",//葡萄酒
                qualityType: "",//质量等级
                rawMaterial: "",//原材料
                standards: "",//执行标准
                controStorageMode: "",
                goodsNo: "",//商品编号
                year: "",//年代选填
                specificationsUnit: "瓶/箱",//规格单位
                specificationsValue: "",//规格数量
                factor: "",//厂家
                storageMode: "",//储存方式,
                maltose: "",//啤酒麦芽糖
                characteristic: "",//特点
                acidity: "",//酸度
                sweetness: "",//甜度
                tannin: "",//单宁强度
                newOrderTime: "",//新旧时间
                areaType: "",//国产进口
                exFactoryTime: ""//出厂年份
            },
            subForm: {
                // productBarCode:"",//商品条码
                controBrandId: "", // 品牌
                // todo:后端商品品牌授权书字段
                commodityAuthorization: [], // 授权书图片
                controAromaticType: "", // 香型
                controAlcohol: "", // 酒精度
                controNetContent: "",//净含量
                controSpecifications: {}, // 规格
                controMaterialQuality: "", // 酒瓶材质
                controManufactor: "", // 厂家
                controPlaceOfOrigin: "", // 产地
                controRawMaterial: "", // 原材料
                controExecutiveStandards: "", // 执行标准
                controArticleNo: "", // 商品编号
                controQualityGuaranteePeriod: "见瓶身/见标签喷码", // 保质期
                controStorageMode: "密闭，放置于阴凉处、干燥处、避免阳 光直射", // 储存方式,
                controDateOfManufacture: "见瓶身/见标签喷码",        // '生产日期',
                controApplicableScenarios: "",      // '适用场景',
                controPackagingForm: ""//包装类型
            },
            testFormOne: {
                "controBrandId": "茅台酒",
                "commodityAuthorization": "['http://124.220.219.72:8085/img/5081323baab446d6a977313eaaae3331-50.png']",
                "controAromaticType": "酱香型",
                "controAlcohol": "39%Vol.",
                "controNetContent": "375ml",
                "controSpecifications": "12瓶/箱",
                "controMaterialQuality": "玻璃瓶",
                "controManufactor": "贵州茅台酒厂",
                "controPlaceOfOrigin": "贵州仁怀",
                "controRawMaterial": "高粱,小麦",
                "controExecutiveStandards": "GB-2012",
                "controArticleNo": "1234567",
                "controQualityGuaranteePeriod": "见瓶身/见标签喷码",
                "controStorageMode": "密闭，放置于阴凉处、干燥处、避免阳 光直射",
                "controDateOfManufacture": "见瓶身/见标签喷码",
                "controApplicableScenarios": "纪念日",
                "controPackagingForm": "礼盒装"
            },
            testFormTwo: {
                "controBrandId": "东方国宾",
                "authorizationImg": "http://124.220.219.72:8085/img/6fe6c545cfcb4f958b346a3780f97af8-(东方国宾)商品主图-1.jpg",
                "controAromaticType": "酱香型白酒",
                "controAlcohol": "53%Vol.",
                "controNetContent": "500ml",
                "controSpecifications": "6瓶/箱",
                "controMaterialQuality": "玻璃瓶",
                "controManufactor": "贵州茅台酒厂",
                "controPlaceOfOrigin": "贵州遵义仁怀市茅台镇",
                "controRawMaterial": "小麦、高粱、水",
                "controExecutiveStandards": "GB/T26760-2011(优级)",
                "controArticleNo": "100021346412",
                "controQualityGuaranteePeriod": "见瓶身/见标签喷码",
                "controStorageMode": "在通风、阴凉、赶在、清洁的条件下保存",
                "controDateOfManufacture": "见瓶身/见标签喷码",
                "controApplicableScenarios": "婚宴，纪念日，聚会，喜宴，宴请，礼节礼拜、自饮",
                "controPackagingForm": "瓶装"
            },
            testFormThree: {
                "controBrandId": "金沙回沙酒",
                "authorizationImg": "http://124.220.219.72:8085/img/3351bc0441804836b5cb173733c247a6-主图4.jpg",
                "controAromaticType": "酱香型白酒",
                "controAlcohol": "53%Vol.",
                "controNetContent": "500ml",
                "controSpecifications": "6瓶/箱",
                "controMaterialQuality": "玻璃瓶",
                "controManufactor": "贵州茅台酒厂",
                "controPlaceOfOrigin": "贵州省毕节市金沙县大水",
                "controRawMaterial": "小麦、高粱、水",
                "controExecutiveStandards": "DB52/T1217",
                "controArticleNo": "1000213464",
                "controQualityGuaranteePeriod": "见瓶身/见标签喷码",
                "controStorageMode": "干燥、通风、避免强光照射",
                "controDateOfManufacture": "见瓶身/见标签喷码",
                "controApplicableScenarios": "婚宴，纪念日，聚会，喜宴，宴请，礼节礼拜、自饮",
                "controPackagingForm": "瓶装"
            },
            testFormFour: {
                "controBrandId": "贵州茅台",
                "authorizationImg": "http://124.220.219.72:8085/img/6a33a333b3184cdb87e2d2ad0fcdcbe9-主图1.jpg",
                "controAromaticType": "酱香型白酒",
                "controAlcohol": "53%Vol.",
                "controNetContent": "500ml",
                "controSpecifications": "6瓶/箱",
                "controMaterialQuality": "玻璃瓶",
                "controManufactor": "贵州茅台酒厂",
                "controPlaceOfOrigin": "贵州省遵义市",
                "controRawMaterial": "小麦、高粱、水",
                "controExecutiveStandards": "GB/T26760(优级)",
                "controArticleNo": "100009838065",
                "controQualityGuaranteePeriod": "见瓶身/见标签喷码",
                "controStorageMode": "阴凉、干燥、密封保存",
                "controDateOfManufacture": "见瓶身/见标签喷码",
                "controApplicableScenarios": "婚宴，纪念日，聚会，喜宴，宴请，礼节礼拜、自饮",
                "controPackagingForm": "瓶装"
            },
            testFormFive: {
                "controBrandId": "五粮液",
                "authorizationImg": "http://124.220.219.72:8085/img/3382fe103f6b43bda64aa433172aa42f-主图1.jpg",
                "controAromaticType": "酱香型白酒",
                "controAlcohol": "52%Vol.",
                "controNetContent": "500ml",
                "controSpecifications": "6瓶/件",
                "controMaterialQuality": "玻璃瓶",
                "controManufactor": "贵州茅台酒厂",
                "controPlaceOfOrigin": "四川省宜宾市",
                "controRawMaterial": "小麦、高粱、水",
                "controExecutiveStandards": "GB/T10781.1(优级)",
                "controArticleNo": "100021346443",
                "controQualityGuaranteePeriod": "见瓶身/见标签喷码",
                "controStorageMode": "干燥、通风、阴凉和清洁处保存，宜15℃~25℃",
                "controDateOfManufacture": "见瓶身/见标签喷码",
                "controApplicableScenarios": "婚宴，纪念日，聚会，喜宴，宴请，礼节礼拜、自饮",
                "controPackagingForm": "瓶装"
            },
            testFormSix: {
                "controBrandId": "国台",
                "authorizationImg": "http://124.220.219.72:8085/img/6a33a333b3184cdb87e2d2ad0fcdcbe9-主图1.jpg",
                "controAromaticType": "酱香型白酒",
                "controAlcohol": "53%Vol.",
                "controNetContent": "500ml",
                "controSpecifications": "6瓶/箱",
                "controMaterialQuality": "玻璃瓶",
                "controManufactor": "贵州茅台酒厂",
                "controPlaceOfOrigin": "贵州遵义仁怀市茅台镇",
                "controRawMaterial": "小麦、高粱、水",
                "controExecutiveStandards": "GB/T26760(优级)",
                "controArticleNo": "5876239",
                "controQualityGuaranteePeriod": "见瓶身/见标签喷码",
                "controStorageMode": "阴凉、干燥、通风、常温下贮存",
                "controDateOfManufacture": "见瓶身/见标签喷码",
                "controApplicableScenarios": "婚宴，纪念日，聚会，喜宴，宴请，礼节礼拜、自饮",
                "controPackagingForm": "瓶装"
            },

            qualityType: this.$config.QUALITY_TYPE,
            grapeWineTastingType: this.$config.GRAPE_WINE_TASTING_TYPE,
            grapeWineType: this.$config.GRAPE_WINE_TYPE,
            beerType: this.$config.BEER_TYPE,
            importedWineType: this.$config.IMPORTED_WINE_TYPE,
            flavorType: this.$config.FLAVOR_TYPE,
            controAlcohol: this.$config.VOL_TYPE,
            cupType: this.$config.CUP_TYPE,
            grapeFragrance: this.$config.GRAPE_FRAGRANCE,
            specificationsUnit: this.$config.SPECS_TYPE,
            controAromaticType: this.$config.FRAGRANT_TYPE,
            controPackagingForm: this.$config.PACKING_TYPE,
            controMaterialQuality: this.$config.BOTTLE_TYPE,
            controApplicableScenarios: this.$config.SCENE_TYPE,
            controQualityGuaranteePeriod: this.$config.SELL_BY_DATE,
            controNetContent: this.$config.NET_CONTENT_TYPE,
            areaType: this.$config.AREA_TYPE,
            pickerArr: []//用来存放每次选择picker的选择类型
        };
    },
    onLoad(option) {

        this.goodsType = option.goodsType === "1" ? "liquor"
            : option.goodsType === "2" ? "beer"
                : option.goodsType === "3" ? "yellowWine"
                    : option.goodsType === "4" ? "grapeWine"
                        : option.goodsType === "5" ? "importedWine" : "vintageWine";
    },
    onShow() {
        console.log(this.commodityParameters, this.brand);
        const controBrandId = this.brand;
        let controSpecifications = {
            count:'',
            unit:this.$config.SPECS_TYPE[0][0].label
        }
        this.subForm = { ...this.commodityParameters, controSpecifications };
        this.subForm.controBrandId = controBrandId;

        // this.subForm = this.commodityParameters;

        // 无法使用解构
        Object.keys(this.foodSafety).forEach(key => {
            this.testForm[key] = this.foodSafety[key];
        });
        console.log(this.subForm);
        // console.log(...this.foodSafety);
        // Object.assign(this.subForm, ...this.foodSafety);
        // this.addProductSetBrand("");
        // this.setFoodSafety("");
    },
    computed: {
        ...mapState("product", ["brand", "foodSafety", "commodityParameters"])
    },
    watch: {
        "formData.controDateOfManufacture"(newVal, oldVal) {
            this.subForm.controDateOfManufacture = newVal;
        },
        "formData.controStorageMode"(newVal, oldVal) {
            this.subForm.controStorageMode = newVal;
        },
        "formData.specificationsValue"(newVal, oldVal) {
            this.subForm.controSpecifications = newVal + this.formData.specificationsUnit;
        },
        "formData.specificationsUnit": {
            handler(newVal, oldVal) {
                this.subForm.controSpecifications = this.formData.specificationsValue + newVal;
            },
            immediate: true
        }
    },
    methods: {
        ...mapMutations("product", [
            "addProductSetBrand",
            "setCommodityParameters",
            "setFoodSafety",
            "setIsSubmit"
        ]),
        cancel() {
            this.subForm = {};
            uni.navigateBack({ delta: 1 });
        },
        async confirm() {
            let isSubmit = await this.$refs.fxbForm.submit();
            let isSubmitTwo = await this.$refs.fxbFormTwo.submit()
            console.log(isSubmitTwo);
            // return
            // let isSubmit = true;
            // let arr = [];
            // for (const arrKey in this.subForm) {
            //     arr.push({
            //         name: arrKey,
            //         tips: ""
            //     });
            // }
            // arr[0].tips = "请选择品牌";
            // arr[1].tips = "请上传商品授权书";
            // arr[2].tips = "请选择香型";
            // arr[3].tips = "请选择酒精度";
            // arr[4].tips = "请选择净含量";
            // arr[5].tips = "请输入规格";
            // arr[6].tips = "请选择酒瓶材质";
            // arr[7].tips = "请输入厂家";
            // arr[8].tips = "请输入产地";
            // arr[9].tips = "请输入原材料";
            // arr[10].tips = "请输入执行标准";
            // arr[11].tips = "请输入商品编号";
            // arr[12].tips = "请选择保质期";
            // arr[13].tips = "请输入储存方式";
            // arr[14].tips = "请输入生产日期";
            // arr[15].tips = "请选择适用场景";
            // arr[16].tips = "请选择包装形式";
            // isSubmit = this.$util.verification(this.subForm, arr);
            if (isSubmit) {
                console.log("ok");
                this.setIsSubmit(isSubmit)
                this.setCommodityParameters(this.subForm);
                uni.navigateBack({ delta: 1 });
            }
        },
        getSafetyValue(form) {
            this.formData = { ...this.formData, ...form };
            console.log(this.formData);
        },
        closePicker() {
            this.pickerShow = false;
        },
        selectExTime() {
            this.showTimePicker = true;
        },
        selectPicker(e) {

            this.$set(this.formData, this.pickerType, e.value[0].label);
            if (this.pickerType !== "specificationsUnit") {
                this.$set(this.subForm, this.pickerType, e.value[0].label);
            }
            this.pickerShow = false;
        },
        selectPickerFun(name) {
            this.pickerArr = this[name];
            this.pickerType = name;
            this.pickerShow = true;
        },
        selectBeerType() {
            this.pickerArr = this.beerType;
            this.pickerType = "beerType";
            this.pickerShow = true;
        },
        selectSellByDate() {
            this.pickerArr = this.controQualityGuaranteePeriod;
            this.pickerType = "controQualityGuaranteePeriod";
            this.pickerShow = true;
        },
        selectSceneType() {
            this.pickerArr = this.controApplicableScenarios;
            this.pickerType = "controApplicableScenarios";
            this.pickerShow = true;
        },
        selectBrand() {
            this.setCommodityParameters(this.subForm);
            uni.navigateTo({
                url: "/pages/agent/brandScreen"
            });
        },
        selectPacking() {
            this.pickerArr = this.controPackagingForm;
            this.pickerType = "controPackagingForm";
            this.pickerShow = true;
        },

        gotoSafety() {
            this.setCommodityParameters(this.subForm);
            uni.navigateTo({
                url: "/pages/admin/adminProduct/foodSafety"
            });
        },
        async scan() {
            let res = await this.$util.scanCode("barCode");
            this.subForm.productBarCode = res.result;
            this.options = {
                width: 660, // 宽度 单位rpx
                height: 120, // 高度 单位rpx
                code: res.result,// 生成条形码的值
                color:['#000'],
                text: {
                    content: res.result,
                    color:['#000'],
                    position: 'bottom' ,//bottom
                    size: 40,
                    padding: 5
                }
            }
        },
    }
};
</script>

<style lang="scss" scoped>

.noScroll {

}

.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 12rpx 0;
    width: 100%;

    button {
        width: 45%;
    }
}

.placeholderStyle {
    font-size: 28rpx;
}

///deep/ .u-picker{
//    position: fixed;
//    bottom: 0;
//    right: 0;
//    left: 0;
//    background-color: white;
//    height: 50vh !important;
//}
///deep/ .u-picker__view{
//    height: 50vh;
//}
///deep/ ..u-picker__view__column[data-v-d45639b2]{
//    height: 50vh !important;
//}
</style>
