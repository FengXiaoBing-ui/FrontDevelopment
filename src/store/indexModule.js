export default {
    namespaced: true,
    state: {
        bottomBarIndex: 0, // tabBar下标
        productListNavIndex: 0, // 好酒列表页导航栏下标
        agentAndService: 1,//服务商和代理商的状态和个人合作伙伴 0:服务商,1:代理商,2:个人合作伙伴
        payResultType:"",//支付结果类型
    },
    mutations: {
        setBottomBarIndex(state, val) {
            state.bottomBarIndex = val;
        },
        setProductListNavIndex(state, val) {
            state.productListNavIndex = val;
        },
        setAgentAndService(state, val) {
            state.agentAndService = val;
        },
        setPayResultType(state, val) {
            state.payResultType = val;
        },
        // setCurrentPage(state, val) {
        // 	// 在线商城列表页
        // 	if (val === 'pages_business/shop/index') state.currentPage = 0
        // 	// 商家首页列表页
        // 	if (val === 'pages_business/index') state.currentPage = 1
        // 	// console.log('11111' + val)
        // },
    },
    actions: {},
    getters: {}
}
