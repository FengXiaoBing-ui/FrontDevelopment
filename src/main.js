import Vue from "vue";

import App from "./App";
import { router } from "/src/router/index";
import store from "/src/store/index.js";
import cuCustom from "/src/plugins/colorui/components/cu-custom.vue";
import uView from "uview-ui";
import tool from "/src/utils/tool";
import util from "/src/utils/util";
import config from "/src/config/index";
import http from "/src/api/index";

Vue.use(router);

Vue.prototype.$util = util;
Vue.prototype.$config = config;
Vue.prototype.$store = store;
Vue.prototype.$http = http;
Vue.prototype.setStorage = util.setStorage;
Vue.prototype.getStorage = util.getStorage;
tool.setCustomBar(Vue);

Vue.component("cu-custom", cuCustom);

Vue.use(uView);

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
    store,
    ...App
});
app.$mount();
