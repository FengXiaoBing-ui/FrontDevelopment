<template>
    <u-tabbar :value="bottomBarIndex" @change="change" :fixed="true" :placeholder="true"
              :activeColor=" bottomBarIndex!==3?`#F26561`:`#FFF`"
              :safeAreaInsetBottom="true">
        <u-tabbar-item v-for="(item, index) in tabBarItemList" :key="index" :text="item.text" @click="click">
            <image class="u-page__item__slot-icon" slot="active-icon"
                   :src="item.activeIcon"></image>
            <image v-if="bottomBarIndex!==3" class="u-page__item__slot-icon" slot="inactive-icon"
                   :src="item.inactiveIcon"></image>
            <image v-else class="u-page__item__slot-icon" slot="inactive-icon" :src="item.exploreInactiveIcon"></image>
        </u-tabbar-item>
    </u-tabbar>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "win-tab-bar",
    data() {
        return {
            tabBarItemList: [
                {
                    text: "推荐",
                    activeIcon: require(`/src/static/tabbar-icon/activeIcon1.png`),
                    inactiveIcon: require(`/src/static/tabbar-icon/inactiveIcon1.png`),
                    exploreInactiveIcon: require(`/src/static/tabbar-icon/exploreInactiveIcon1.png`)
                },
                {
                    text: "功能",
                    activeIcon: require(`/src/static/tabbar-icon/activeIcon2.png`),
                    inactiveIcon: require(`/src/static/tabbar-icon/inactiveIcon2.png`),
                    exploreInactiveIcon: require(`/src/static/tabbar-icon/exploreInactiveIcon2.png`)
                },
                {
                    text: "选好酒",
                    activeIcon: require(`/src/static/tabbar-icon/activeIcon3.png`),
                    inactiveIcon: require(`/src/static/tabbar-icon/inactiveIcon3.png`),
                    exploreInactiveIcon: require(`/src/static/tabbar-icon/exploreInactiveIcon3.png`)
                },
                {
                    text: "探索",
                    activeIcon: require(`/src/static/tabbar-icon/activeIcon4.png`),
                    inactiveIcon: require(`/src/static/tabbar-icon/inactiveIcon4.png`),
                    exploreInactiveIcon: require(`/src/static/tabbar-icon/exploreInactiveIcon4.png`)
                },
                {
                    text: "账户",
                    activeIcon: require(`/src/static/tabbar-icon/activeIcon5.png`),
                    inactiveIcon: require(`/src/static/tabbar-icon/inactiveIcon5.png`),
                    exploreInactiveIcon: require(`/src/static/tabbar-icon/exploreInactiveIcon5.png`)
                }
            ],
            pathList: [
                // "/pages/messageCenter/messageIndex",//自定义
                "/pages/index/index",
                "/pages/admin/administrationIndex",
                "/pages/recommend/recommend",
                "/pages/explore/exploreIndexH5",
                "/pages/my/myIndex"
            ]
        };
    },
    computed: {
        ...mapState("index", ["bottomBarIndex"])
    },
    methods: {
        click(e) {
            // #ifdef APP-PLUS
            this.pathList[3] = "/pages/explore/exploreIndexAppRecommend";
            // #endif
            // 不能跳当前页
            if (this.bottomBarIndex === e) return;
            if (this.pathList[e]) {
                uni.navigateTo({ url: this.pathList[e] });
            } else {
                uni.showToast({ title: "暂未开放", icon: "none" });
            }
        },
        // TODO
        change(e) {
        }
    }
};
</script>

<style scoped>
.u-page__item__slot-icon {
    width: 26px;
    height: 26px;
}
/* #ifndef APP-NVUE */
/deep/ .u-tabbar__content {
    background-color: #FFFFFF;
}
/* #endif */
</style>
