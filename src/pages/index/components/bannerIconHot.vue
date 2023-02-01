<template>
    <view>
        <!--        <win-index-grid :cuIconList="cuIconList"></win-index-grid>-->

        <!--    swiper-->
        <win-index-swiper :swiperList="swiperList"></win-index-swiper>

        <view class="grid col-4 margin-bottom bg-white padding-tb">
            <view class="flex flex-direction align-center">
                <view class="t-icon t-icon-a-zu736"
                      style="background-repeat: no-repeat;width: 40rpx;height: 40rpx"></view>
                <text class="margin-top-xs text-sm">品牌加盟</text>
            </view>
            <view class="flex flex-direction align-center" @click="goTender(2)">
                <view class="t-icon t-icon-a-zu738"
                      style="background-repeat: no-repeat;width: 40rpx;height: 40rpx"></view>
                <text class="margin-top-xs text-sm">条码招商</text>
            </view>
            <view class="flex flex-direction align-center">
                <view class="t-icon t-icon-a-zu742"
                      style="background-repeat: no-repeat;width: 40rpx;height: 40rpx"></view>
                <text class="margin-top-xs text-sm">资源代理</text>
            </view>
            <view @click="gotoPath" class="flex flex-direction align-center">
                <view class="t-icon t-icon-a-zu741"
                      style="background-repeat: no-repeat;width: 40rpx;height: 40rpx"></view>
                <text class="margin-top-xs text-sm">酒数据云</text>
            </view>
        </view>
        <!--    头条-->
        <view class="flex bg-white u-border align-center justify-start boxBorder margin-top-xs">
            <image class="hotBar" src="/static/images/hot.png" style="height:70rpx" mode="heightFix" lazy-load="false"
                   binderror="" bindload="">
                <text class="haojiuxuan text-sm">
                    好酒选头条
                </text>
            </image>
            <view class="margin-left-xs textover text-sm text-gray" @click="jumpAgent">中意好酒选特价招代理，明日10点准时开枪！</view>
            <!-- <view class="cuIcon-right padding-right"></view> -->
        </view>

        <view class="flex justify-between align-center flex-wrap moduleBlock w100 margin-top">
            <view class="flex flex-direction align-center basis-xs padding-tb" v-for="(item,index) in cuIconList"
                  :key="item.url" @click="pageTo(index)">
                <image :src="item.url" style="width: 80rpx;height: 80rpx" mode="widthFix"></image>
                <view class="margin-top-sm">{{ item.name }}</view>
            </view>
        </view>
    </view>
</template>
<script>
import winIndexSwiper from "/src/components/win/win-index-swiper";
import winIndexGrid from "../../../components/win/win-index-grid";
import config from "/src/config/index";
export default {
    name: "bannerIconHot",
    components: {
        winIndexSwiper,
        winIndexGrid
    },
    data: function() {
        return {
            swiperList: [{
                id: 0,
                type: "image",
                url: "/img/index/banner.png"
            }, {
                id: 1,
                type: "image",
                url: "/img/index/banner.png"
            }, {
                id: 2,
                type: "image",
                url: "/img/index/banner.png"
            }, {
                id: 3,
                type: "image",
                url: "/img/index/banner.png"
            }, {
                id: 4,
                type: "image",
                url: "/img/index/banner.png"
            }, {
                id: 5,
                type: "image",
                url: "/img/index/banner.png"
            }, {
                id: 6,
                type: "image",
                url: "/img/index/banner.png"
            }],
            // 宫格列表
            cuIconList: [
                {
                    cuIcon: "cardboardfill",
                    color: "red",
                    badge: 120,
                    name: "口碑测评",
                    url: config.IMG_SERVER + "/img/index/icon_12x.png "
                }, {
                    cuIcon: "recordfill",
                    color: "orange",
                    badge: 1,
                    name: "帮我选酒",
                    url: config.IMG_SERVER + "/img/index/icon_22x.png"
                }, {
                    cuIcon: "picfill",
                    color: "yellow",
                    badge: 0,
                    name: "收藏酒",
                    url: config.IMG_SERVER + "/img/index/icon_32x.png"
                }, {
                    cuIcon: "noticefill",
                    color: "olive",
                    badge: 22,
                    name: "酒类测评",
                    url: config.IMG_SERVER + "/img/index/icon_42x.png"
                }, {
                    cuIcon: "upstagefill",
                    color: "cyan",
                    badge: 0,
                    name: "积分兑换",
                    url: config.IMG_SERVER + "/img/index/icon_52x.png"
                }]
        };
    },
    methods: {
        jumpAgent() {
            uni.navigateTo({
                url: "/pages/agentProducts/agentProducts"
            });
        },
        pageTo(index) {
            if (index === 2) {
                uni.navigateTo({
                    url: "/pages/systemRecommend/systemRecommend"
                });
            } else {
                uni.navigateTo({
                    url: `/pages/agent/commodityList?index=${index}`
                });

            }

        },
      goTender(type){
          uni.navigateTo({
            url:"/pages/admin/tender/attractInvestment"
          })
      },
        gotoPath(){
            uni.navigateTo({
                url:"/pages/index/wineDataCloud/wineDataCloud"
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.hotBar {
    position: relative;
}

.haojiuxuan {
    position: absolute;
    left: 3rem;
    font-style: italic;
    font-weight: 800;
    color: white;
    height: 60rpx;
    line-height: 60rpx;
}

.moduleBlock {
    background: white;
    border-radius: 0.3rem;
    height: 180rpx;
}

.marginTop {
    margin-top: 20rpx;
}

.boxBorder {
    border-radius: .3rem;
    overflow: hidden;
}

.nowarp {
    white-space: nowrap;
}
</style>
