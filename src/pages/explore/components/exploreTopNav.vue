<template>
    <view class="">
        <u-navbar
            id="nav"
            ref="nav"
            :border="false"
            :fixed="true"
            :safeAreaInsetTop="true"
            :bgColor="bgcolor"
            :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px'}"
        >
            <view slot="left" class="left flex align-center flex-nowrap ">
                <!--                <image :src="selectType== '1' ? back2 : back1"-->
                <!--                       style="width:24px;"-->
                <!--                       mode="widthFix"-->
                <!--                       @click="backHome"></image>-->
                <image
                    class="margin-left"
                    :src="(selectType == '1'||selectType == '2') ? user2 : user1"
                    style="width:24px;"
                    mode="widthFix"
                    @click="pageTo('pages/explore/profileIndex')"
                ></image>

            </view>
            <view slot="center" class="u-nav-slot text-black text-xl">
                <view class="center">
                    <text
                        class="centerItem"
                        :style="`${selectType == '2' ? 'font-weight: 700;color:black;opacity: 1;font-size:22px' : selectType == '1' ? 'color:black' : 'color:white;opacity: 0.6;'}`"
                        @click="changeSelectType({val:'2',jump:true})"
                    >交易
                    </text>
                    <text
                        class="centerItem"
                        :class="selectType == '0' ? 'text-white' : 'text-black' "
                        :style="`${selectType == '0' ? 'font-weight: 700;opacity: 1;font-size:22px' : ''}`"
                        @click="changeSelectType({val:'0',jump:true})"
                    >推荐
                    </text>
                    <text class="centerItem"
                          :style="`${selectType == '1' ? 'font-weight: 700;color:black;opacity: 1;font-size:22px' : selectType == '2' ? 'color:black' : 'color:white;opacity: 0.6;'}`"
                          @click="changeSelectType({val:'1',jump:true})"
                    >圈子
                    </text>
                </view>
            </view>
            <view slot="right" class="u-nav-slot text-black">
                <view style="position: relative" class="right ml20 align-center flex flex-nowrap">
                    <image
                        :src="(selectType == '1'||selectType == '2')  ? search2 : search1"
                        style="width:24px;"
                        mode="widthFix"
                        @click="pageTo('pages/explore/searchIndex')"
                    ></image>
                    <image
                        class="margin-left"
                        :src="(selectType == '1'||selectType == '2') ? add2 : add1"
                        style="width:24px;"
                        mode="widthFix"
                        @click="addContent"
                    ></image>
                    <view class="card" :class="cardShow?'cardShow':'cardHide'">
                        <view @click="pageTo('pages/explore/editorIndex')"
                              style="display: flex;flex-direction: row;align-items: center;margin: 13px 0 0 16px">
                            <u-icon name="bag" size="18"></u-icon>
                            <text style="font-size: 30rpx;margin-left: 6px">发布商品</text>
                        </view>
                        <view @click="pageTo('/pages/explore/take')"
                              style="display: flex;flex-direction: row;align-items: center;margin: 13px 0 13px 16px">
                            <u-icon name="camera" size="18"></u-icon>
                            <text style="font-size: 30rpx;margin-left: 6px">拍日常</text>
                        </view>
                    </view>
                </view>
            </view>
        </u-navbar>
    </view>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import config from "/src/config/index";

export default {
    name: "exploreTopNav",

    data() {
        return {
            cardShow: false,
            //图片，设置nvue中无法使用colorui
            back1: config.IMG_SERVER + "/img/explore/icon003.png",
            back2: config.IMG_SERVER + "/img/explore/icon004.png",
            add1: config.IMG_SERVER + "/img/explore/icon001.png",
            add2: config.IMG_SERVER + "/img/explore/icon002.png",
            search1: config.IMG_SERVER + "/img/explore/icon006.png",
            search2: config.IMG_SERVER + "/img/explore/icon005.png",
            user1: config.IMG_SERVER + "/img/explore/icon008.png",
            user2: config.IMG_SERVER + "/img/explore/icon007.png",
            goods1: config.IMG_SERVER + "/img/explore/icon009.png",
            address1: config.IMG_SERVER + "/img/explore/icon010.png",
            address2: config.IMG_SERVER + "/img/explore/icon011.png"
        };
    },
    computed: {
        ...mapState("explore", ["selectType"]),
        bgcolor() {
            if (this.selectType == 1 || this.selectType == 2) {
                return "#fff";
            } else {
                return "transparent";
            }
        }
    },
    methods: {
        ...mapMutations("explore", ["changeSelectType"]),
        backHome() {
            uni.reLaunch({ url: "pages/index/index" });
        },
        showSearchFun() {
            this.showSearch = true;
        },
        hiddenSearch() {
            this.showSearch = false;
        },
        pageTo(url) {
            this.cardShow = false;
            uni.navigateTo({ url });
        },
        addContent() {
            this.cardShow = !this.cardShow;
        }
    }
};
</script>

<style lang="scss" scoped>
.center {
    display: flex;
    align-items: center;
    flex-direction: row;
}

.centerItem {
    padding-left: 10rpx;
    padding-right: 10rpx;
    opacity: 0.6;
}


.ml20 {
    margin-left: 20rpx;
}

.full {
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 2022;
}

.margin-left {
    margin-left: 20rpx;
}

.flex {
    display: flex;
    flex-direction: row;
}

.flex-nowrap {
    flex-wrap: nowrap;
}

.padding-sm {
    padding: 20rpx;
}

.text-black {
    color: black;
}

.text-white {
    color: #fff;
}

.card {
    position: fixed;
    top: 80px;
    right: 40rpx;
    z-index: 999;
    width: 114px;
    background: #D9D9D9;
    border-radius: 7px 7px 7px 7px;
    transform-origin: right top;
    transition-property: transform, opacity;
    transition-duration: 0.3s;
}

.cardShow {
    transform: scale(1);
    opacity: 1;
}

.cardHide {
    transform: scale(0);
    opacity: 0;
}
</style>
