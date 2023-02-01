export default {
    namespaced: true,
    state: {
        busId: 1,
        mainPhotoList: [{url:null},{url:null},{url:null},{url:null},{url:null}],
        brand: "",
        commodityParameters: {
            // productBarCode:"",//商品条码
            controBrandId: "", // 品牌
            // todo:后端商品品牌授权书字段
            commodityAuthorization: [], // 授权书图片
            controAromaticType: "", // 香型
            controAlcohol: "", // 酒精度
            controNetContent: "",//净含量
            controSpecifications: {
                count:null,
                unit:''
            }, // 规格
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
        foodSafety: {},
        isSubmit:false,//商品参数
    },
    mutations: {
        setBusId(state, val) {
            state.busId = val;
        },
        setMainPhotoList(state, val) {
            state.mainPhotoList = val;
        },
        addProductSetBrand(state, val) {
            state.brand = val;
        },
        setCommodityParameters(state, val) {
            state.commodityParameters = val;
        },
        setFoodSafety(state, val) {
            state.foodSafety = val;
        },
        setIsSubmit(state, val) {
            state.isSubmit = val;
        }
    },
    actions: {},
    getters: {}
};
