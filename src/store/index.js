import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import index from "./indexModule";
import product from "./product";
import explore from "./explore";
import policy from "./policy";
import { navigateBack } from "@dcloudio/uni-h5/src/platforms/app-plus/view/api";

const store = new Vuex.Store({
    modules: {
        index,
        product,
        explore,
        policy
    },
    state: {
        hasLogin: false,
        userInfo: {},
        userName: "test",
        userName1: 123
    },
    mutations: {
        getUserName1: state => {
            state.userName1++;
        },
        login(state, provider) {
            state.hasLogin = true;
            state.userInfo = provider;
            uni.setStorage({ //缓存用户登陆状态
                key: "userInfo",
                data: provider
            });
        },
        logout(state) {
            state.hasLogin = false;
            state.userInfo = {};
            uni.removeStorage({
                key: "userInfo"
            });
        }
    },
    actions: {}
});

export default store;
