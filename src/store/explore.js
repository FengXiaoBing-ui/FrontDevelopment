export default {
    namespaced: true,
    state: {
        selectType: "2"//0=》圈子  1=》同城 2=推荐
    },
    mutations: {
        changeSelectType(state, val) {
            let value = val.val||val
            const url = value == "0" ? "/pages/explore/exploreIndexAppRecommend" : value == "1"? "/pages/explore/friendsCircle":"/pages/explore/business";
            if (typeof val === 'object'){
                state.selectType = val.val;
            }else {
                state.selectType = val;
            }
            const pages = getCurrentPages();
            let detal = false;
            pages.forEach((item, index) => {
                if (("/" + item.route) == url) {
                    this.detal = index;
                }
            });
            if (detal) {
                uni.navigateBack({
                    delta
                });
            } else {
                if (typeof val === 'object'){
                    uni.navigateTo({
                        url
                        // animationType:"slide-in-left",
                        // animationDuration: 100
                    });
                }

            }
        }
    },
    actions: {},
    getters: {}
};
