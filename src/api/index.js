import request from "/src/utils/uniRequest";

export default {
    /**
     * 登录接口
     * @param {string} data.userName
     */
    login(data) {
        return request.post("/api/login", data, true);
    },
    /**
     * 添加商品
     */
    addGoods(data) {
        return request.post("/goods/add", data, true);
    },
    /**
     * 删除商品
     */
    deleteGoods(id) {
        return request.get(`/goods/delete/${id}`);
    },

    /**
     * 获取商品详情
     */
    getGoodDetails(id) {
        return request.get(`/goods/${id}`, "", false);
    },
    /**
     * 商品列表
     */
    getGoodList(data) {
        return request.get("/goods/goodsList", data, false);
    },

    /**
     * 发布代理政策
     */
    addPolicy(data) {
        request.post("/policy/add", data, true).then();
    },
    /**
     * 上传图片
     */
    uploadFile(data) {
        return request.post("/goods/upload/file", { data, type }, true);
    },
    /**
     * 代理政策列表
     */
    getListByStatus(data) {
        return request.get("/policy/listByStatus", data, false);
    },
    getPolicyListByCommodityId(data) {
        return request.get("/policy/listByCommodityId", data, false);
    },
    /**
     * 代理政策详情
     */
    getPolicyDetail(data) {
        return request.get(`/policy/${data}`, false);
    },
    /**
     * 分类-推荐品牌信息列表
     */
    getRecommendBrandZone() {
        return request.get(`/commodity/brand/list_by_category`, false);
    },
    /**
     * 获取品牌信息列表
     */
    getBrandZoneInfoList(data) {
        return request.get(`/commodity/brand/page`,data, false);
    }
};
