export default {
    namespaced: true,
    state: {
        agentLvInfo: {},
        agentPrice: "",
        rakeBack: [
            {
                rakeTypeName: "商品返佣",
                isChecked: 0,
                placeholder: "请输入返佣商品数量",
                commodityNum: "",
                unit: "瓶",
                totalAmount: 0
            },
            {
                rakeTypeName: "现金返佣",
                isChecked: 0,
                placeholder: "请输入金额",
                rakePrice: ""
            },
            {
                rakeTypeName: "积分返佣",
                isChecked: 0,
                placeholder: "请输入返佣积分数量",
                integralNum: "",
                unit: "分",
                integralPrice: ""

            }
        ],
        agentPeople:[],//代理地区及代理人数
    },
    mutations: {
        setAgentLvInfo(state, val) {
            state.agentLvInfo = val;
        },
        setAgentPrice(state, val) {
            state.agentPrice = val;
        },
        setRakeBack(state, val) {
            state.rakeBack = val;
        },
        setAgentPeople(state, val) {
            state.agentPeople = val;
            console.log(state.agentPeople);
        },
    },
    actions: {},
    getters: {}
};
