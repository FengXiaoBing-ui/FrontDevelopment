<template>
    <view>
        <u-navbar
            title="品牌详情"
            :autoBack="true"
        >
        </u-navbar>
        <view :style="`margin-top:${CustomBar*2}rpx`">
            <u-swiper :list="list" @change="change" :autoplay="false" indicatorStyle="right: 20px">
                <view slot="indicator" class="indicator-num">
                    <text class="indicator-num__text">{{ count + 1 }}/{{ list.length }}</text>
                </view>
            </u-swiper>
        </view>
        <view class="padding-sm">
            <view class="more flex justify-end align-center margin-bottom-sm">
                查看全部茅台商品
                <text class="cuIcon-right text-bold"></text>
            </view>
            <platformRecommend :recommendList="recommendList.slice(0,2)" :horizontal="true"></platformRecommend>
            <platformRecommend :recommendList="recommendList.slice(2,4)" :horizontal="false"></platformRecommend>
            <platformRecommend :recommendList="recommendList.slice(4,recommendList.length)"
                               :horizontal="true"></platformRecommend>
            <u-loadmore :status="status" />
        </view>
    </view>
</template>

<script>
import platformRecommend from "/src/pages/index/components/platformRecommend";
export default {
    name: "brandDetails",
    components: {
        platformRecommend,
    },
    data() {
        return {
            status: "nomoreText",
            count: 0,
            list: [
                this.$config.IMG_SERVER+"/productDetails/Slice%201.png",
                this.$config.IMG_SERVER+"/productDetails/Slice%202.png",
                this.$config.IMG_SERVER+"/productDetails/Slice%203.png"
            ],
            recommendList: [
                {
                    id: "1",
                    goodsName:"东方国宾·尊致酒53°瓶装500ml",
                    goodsInfo:{},
                    goodsRetailPrice:"999",
                    agencyPrice:"888",
                    image:["/productDetails/Slice%201.png"],
                    rank: 1,
                },
                {
                    id: "2",
                    goodsName:"东方国宾·尊致酒53°瓶装500ml",
                    goodsInfo:{},
                    goodsRetailPrice:"888",
                    agencyPrice:"999",
                    image:["/productDetails/Slice%201.png"],
                    rank: 2,
                },
                {
                    id: "3",
                    goodsName:"东方国宾·尊致酒53°瓶装500ml",
                    goodsInfo:{},
                    goodsRetailPrice:"499",
                    agencyPrice:"399",
                    image:["/productDetails/Slice%201.png"],
                    rank: 3,
                },
                {
                    id: "4",
                    goodsName:"东方国宾·尊致酒53°瓶装500ml",
                    goodsInfo:{},
                    goodsRetailPrice:"1299",
                    agencyPrice:"999",
                    image:["/productDetails/Slice%201.png"],
                    rank: 4,
                },
                {
                    id: "5",
                    goodsName:"东方国宾·尊致酒53°瓶装500ml",
                    goodsInfo:{},
                    goodsRetailPrice:"9",
                    agencyPrice:"99",
                    image:["/productDetails/Slice%201.png"],
                    rank: 5,
                },
            ]
        };
    },
    methods: {
        change(e) {
            this.count = e.current;
        },
    },
};
</script>

<style lang="scss" scoped>
/deep/.u-swiper {
    height: 500rpx !important;
    .u-swiper__wrapper {
        height: 100% !important;
        .u-swiper__wrapper__item__wrapper__image {
            height: 100% !important;
        }
    }
}

.indicator-num {
    padding: 2px 0;
    background-color: rgba(0, 0, 0, 0.35);
    border-radius: 100px;
    width: 35px;
    @include flex;
    justify-content: center;

    &__text {
        color: #ffffff;
        font-size: 12px;
    }
}
</style>
