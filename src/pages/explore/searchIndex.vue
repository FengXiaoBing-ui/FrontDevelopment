<template>
    <view  class="searchbox"   >
        <u-navbar :autoBack="true"   title="" >
            <view slot="center" >
                <u-search v-model="searchWord" :focus="false" placeholder="国酒茅台1937" shape="square" @custom="search"
                          @search="search">
                </u-search>
            </view>
        </u-navbar>
        <view :style="`margin-top:${CustomBar}px;`"  class="padding-sm" >
            <view v-if="searchStatus == false"  >
            <view class="flex justify-between padding-xs">
                <view class="text-bold ">猜你想搜</view>
                <view class="flex align-end text-gray"> 换一换
                    <view class="cuIcon-refresh margin-left-sm"></view>
                </view>
            </view>
            <view class="flex padding-xs justify-between align-center flex-wrap">
                <view v-for="(item, index) in guessList" :key="index" class="margin-top-sm " style="width: 50%;">
                    <view :class="index == 1 || index == 0 ? 'text-red' : ''"> {{ item }}</view>
                </view>
            </view>
            <view class="flex justify-between padding-xs margin-top">
                <view class="text-bold ">大家都在看</view>
            </view>
            <view class="padding-xs ">
                <view v-for="(item, index) in seeRankList" :key="index" class="margin-top-sm">
                    <view :class="index < 3 ? 'text-red' : ''"> {{ index + 1 + "." + item }}</view>
                </view>
            </view>
        </view>
            <view v-else >
                <view v-for="item in list" :key="item.id"
                      class="bg-white padding margin-xs margin-bottom border-radius">
                    <view class="flex align-start">
                        <view class="basis-xs text-bold text-xl" style="width: 20%;">
                            <image mode="heightFix" src="/static/Icon/head.png" style="height: 100rpx;"></image>
                        </view>
                        <view class="basis-xl" style="width: 80%;">
                            <view class="text-xl" style="font-weight: 800;"> 我是大酒蛊</view>
                            <view style="">{{ item.content }}</view>
                            <view
                                class="flex align-center bg-gray  padding-xs border-radius "
                                @click="pageTo('pages/hotActivity/activityDetails')"
                            >
                                <view class="cuIcon-goodsfill margin-right text-orange" style="font-size:50rpx;"></view>
                                商品&nbsp;&nbsp;|&nbsp;&nbsp;{{ item.goods }}
                            </view>
                            <nineGridImage :list="item.imageList"></nineGridImage>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
import nineGridImage from "/src/components/common/nineGridImage.vue";

export default {
    name: "searchbox",
    components: {
        nineGridImage
    },
    data() {
        return {
            searchStatus: false,
            searchWord: "",
            guessList: ["国酒茅台1937酱香白酒...", "国酒茅台1937酱香白酒...", "国酒茅台1937酱香白酒...", "国酒茅台1937酱香白酒..."],
            seeRankList: [
                "国酒茅台1937酱香白酒...",
                "国酒茅台1937酱香白酒...",
                "国酒茅台1937酱香白酒...",
                "国酒茅台1937酱香白酒...",
                "国酒茅台1937酱香白酒...",
                "国酒茅台1937酱香白酒国酒茅台1937酱香白酒...",
                "国酒茅台1937酱香白酒...",
                "国酒茅台1937酱香白酒...",
                "国酒茅台1937酱香白酒...国酒茅台1937酱香白酒..."
            ],
            list: [
                {
                    id: "5w45",
                    date: "今天",
                    cheack: "发布内容未通过审核..",
                    imageList: [
                        {
                            src: "/static/bottle/22.jpeg"
                        },
                        {
                            src: "/static/bottle/22.jpeg"
                        },
                        {
                            src: "/static/bottle/22.jpeg"
                        },
                        {
                            src: "/static/bottle/22.jpeg"
                        },
                        {
                            src: "/static/bottle/22.jpeg"
                        },
                        {
                            src: "/static/bottle/22.jpeg"
                        },
                        {
                            src: "/static/bottle/22.jpeg"
                        },
                        {
                            src: "/static/bottle/10.jpeg"
                        },
                        {
                            src: "/static/bottle/66.jpeg"
                        }
                    ],
                    content: "贺喜贺喜，下午在花溪区成交了一笔订单，这个代理商很给力，说我们家的这款酒真的好喝很不错。",
                    goods: "茅台1937瓶装酱香酒..."
                },
                {
                    id: "545w",
                    date: "今天",
                    cheack: "正在审核中..",
                    imageList: [
                        {
                            src: "/static/bottle/22.jpeg"
                        },
                        {
                            src: "/static/bottle/10.jpeg"
                        },
                        {
                            src: "/static/bottle/66.jpeg"
                        }
                    ],
                    content: "贺喜贺喜，下午在花溪区成交了一笔订单，这个代理商很给力，说我们家的这款酒真的好喝很不错。",
                    goods: "茅台1937瓶装酱香酒..."
                },
                {
                    id: "545a",
                    date: "9月5日",
                    cheack: "",
                    imageList: [
                        {
                            src: "/static/bottle/22.jpeg"
                        },
                        {
                            src: "/static/bottle/22.jpeg"
                        },
                        {
                            src: "/static/bottle/22.jpeg"
                        },
                        {
                            src: "/static/bottle/22.jpeg"
                        },
                        {
                            src: "/static/bottle/22.jpeg"
                        },
                        {
                            src: "/static/bottle/22.jpeg"
                        },
                        {
                            src: "/static/bottle/22.jpeg"
                        },
                        {
                            src: "/static/bottle/10.jpeg"
                        },
                        {
                            src: "/static/bottle/66.jpeg"
                        }
                    ],
                    content: "贺喜贺喜，下午在花溪区成交了一笔订单，这个代理商很给力，说我们家的这款酒真的好喝很不错。",
                    goods: "茅台1937瓶装酱香酒..."
                }
            ]
        };
    },


    methods: {
        search() {
            this.searchStatus = true;
        },
    }
};
</script>

<style lang="scss" scoped>
.searchbox {
    min-height: 100vh;
    width: 100vw ;
    background: white;
}


</style>
