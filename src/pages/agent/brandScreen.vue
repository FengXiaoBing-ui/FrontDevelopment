<template>
    <view class="content">
        <u-navbar title="品牌" :autoBack="true" rightText="全部品牌"></u-navbar>
        <view class="bg-white" :style="'margin-top:' + (CustomBar + 4) + 'px'">
            <u-index-list :index-list="indexList">
                <view class="hotBrand">
                    <view class="hotBrandText flex text-bold align-center">热门品牌</view>
                    <view class="flex flex-wrap padding-tb-sm bg-white">
                        <view v-for="(item,index) in brandtList" :key="index"
                              class="flex flex-direction align-center justify-center margin-tb-sm w25 "
                              @click="handleChoose(item)">
                            <fxbImage class="imageSize bg-gray" :src="item.imgUrl" mode="aspectFill"></fxbImage>
                            <text class="margin-top-sm">{{ item.brand }}</text>
                        </view>
                    </view>
                </view>
                <view v-for="(item, index) in itemArr" :key="index">
                    <!-- #ifdef APP-NVUE -->
                    <u-index-anchor :text="indexList[index]"></u-index-anchor>
                    <!-- #endif -->
                    <u-index-item>
                        <!-- #ifndef APP-NVUE -->
                        <u-index-anchor :text="indexList[index]"></u-index-anchor>
                        <!-- #endif -->
                        <view class="list-cell" v-for="(cell, index) in item" :key="index">
                            <view class="flex align-center" @click="handleChoose(cell)">
                                <fxbImage class="imageSize margin-sm" :src="cell.imgUrl"></fxbImage>
                                <text class="margin-left">{{ cell.brand }}</text>
                            </view>
                        </view>
                    </u-index-item>
                </view>
            </u-index-list>
        </view>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
import { mapMutations } from "vuex";

export default {
    name: "brandScreen",
    components:{
        fxbImage
    },
    data() {
        return {
            brandtList: [
                {
                    id:'1',
                    brand: "五粮液",
                    imgUrl: "/productDetails/logo/logo_10%402x.png"
                },
                {
                    id:'2',
                    brand: "泸州老窖",
                    imgUrl: "/productDetails/logo/logo_1%402x.png"
                },
                {
                    id:'3',
                    brand: "牛栏山",
                    imgUrl: "/productDetails/logo/logo_2%402x.png"
                },
                {
                    id:'4',
                    brand: "汾酒",
                    imgUrl: "/productDetails/logo/logo_3%402x.png"
                },
                {
                    id:'5',
                    brand: "茅台酒",
                    imgUrl: "/productDetails/logo/logo_4%402x.png"
                },
                {
                    id:'6',
                    brand: "洋河",
                    imgUrl: "/productDetails/logo/logo_5%402x.png"
                },
                {
                    id:'7',
                    brand: "西风",
                    imgUrl: "/productDetails/logo/logo_6%402x.png"
                },
                {
                    id:'8',
                    brand: "茅台酒",
                    imgUrl: "/productDetails/logo/logo_7%402x.png"
                },
                {
                    id:'9',
                    brand: "洋河",
                    imgUrl: "/productDetails/logo/logo_8%402x.png"
                },
                {
                    id:'10',
                    brand: "西风",
                    imgUrl: "/productDetails/logo/logo_9%402x.png"
                }
            ],
            imageUrl: require("/src/static/bottle/10.jpeg"),
            indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"],
            itemArr: [
                [
                    {
                        brand: "五粮液",
                        imgUrl: "/productDetails/logo/logo_10%402x.png"
                    },
                    {
                        brand: "泸州老窖",
                        imgUrl: "/productDetails/logo/logo_1%402x.png"
                    },
                    {
                        brand: "牛栏山",
                        imgUrl: "/productDetails/logo/logo_2%402x.png"
                    },
                    {
                        brand: "汾酒",
                        imgUrl: "/productDetails/logo/logo_3%402x.png"
                    },
                    {
                        brand: "茅台酒",
                        imgUrl: "/productDetails/logo/logo_4%402x.png"
                    }
                ],
                [
                    {
                        brand: "茅台酒",
                        imgUrl: "/productDetails/logo/logo_4%402x.png"
                    },
                    {
                        brand: "洋河",
                        imgUrl: "/productDetails/logo/logo_5%402x.png"
                    },
                    {
                        brand: "西风",
                        imgUrl: "/productDetails/logo/logo_6%402x.png"
                    },
                    {
                        brand: "茅台酒",
                        imgUrl: "/productDetails/logo/logo_7%402x.png"
                    },
                    {
                        brand: "洋河",
                        imgUrl: "/productDetails/logo/logo_8%402x.png"
                    },
                    {
                        brand: "西风",
                        imgUrl: "/productDetails/logo/logo_9%402x.png"
                    }
                ],
                [
                    {
                        brand: "五粮液",
                        imgUrl: "/productDetails/logo/logo_10%402x.png"
                    },
                    {
                        brand: "泸州老窖",
                        imgUrl: "/productDetails/logo/logo_1%402x.png"
                    },
                    {
                        brand: "洋河",
                        imgUrl: "/productDetails/logo/logo_5%402x.png"
                    },
                    {
                        brand: "西风",
                        imgUrl: "/productDetails/logo/logo_6%402x.png"
                    },
                    {
                        brand: "茅台酒",
                        imgUrl: "/productDetails/logo/logo_7%402x.png"
                    },
                    {
                        brand: "西风",
                        imgUrl: "/productDetails/logo/logo_9%402x.png"
                    }
                ],
                [
                    {
                        brand: "五粮液",
                        imgUrl: "/productDetails/logo/logo_10%402x.png"
                    },
                    {
                        brand: "泸州老窖",
                        imgUrl: "/productDetails/logo/logo_1%402x.png"
                    }
                ],
                [
                    {
                        brand: "茅台酒",
                        imgUrl: "/productDetails/logo/logo_7%402x.png"
                    },
                    {
                        brand: "洋河",
                        imgUrl: "/productDetails/logo/logo_8%402x.png"
                    },
                    {
                        brand: "西风",
                        imgUrl: "/productDetails/logo/logo_9%402x.png"
                    }
                ],
                [
                    {
                        brand: "五粮液",
                        imgUrl: "/productDetails/logo/logo_10%402x.png"
                    },
                    {
                        brand: "泸州老窖",
                        imgUrl: "/productDetails/logo/logo_1%402x.png"
                    },
                    {
                        brand: "牛栏山",
                        imgUrl: "/productDetails/logo/logo_2%402x.png"
                    },
                    {
                        brand: "汾酒",
                        imgUrl: "/productDetails/logo/logo_3%402x.png"
                    }
                ]
            ]
        };
    },
    methods: {
        ...mapMutations("product", ["addProductSetBrand"]),
        handleChoose(item) {
            this.addProductSetBrand(item.brand);
            uni.navigateBack({ delta: 1 });
        }
    }
};
</script>

<style lang="scss" scoped>
/deep/ .u-index-anchor {
    background-color: #f5f5f5 !important;
    border: none;
}

.imageSize {
    width: 100rpx;
    height: 100rpx;
    object-fit: cover;
    border-radius: 50%;
}

.hotBrandText {
    height: 64rpx;
    background-color: #f5f5f5;
    padding-left: 30rpx;
}
</style>
