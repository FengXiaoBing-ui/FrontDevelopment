<template>
    <view class="head-box">
        <view class="">
            <view v-if="false" class="content-box bg-white flex flex-direction justify-around margin-top">
                <!--功能-->
                <view class="flex justify-around align-center padding-sm  text-center " @click="gotoPath('pages/appCenter/attestation/basicInfo')">
                    <view class=" text-center" style="width: 25%;" v-for="(item) in  iconList" :key="item.value">
                        <image class="radius" style="height:40rpx" mode="heightFix" :src="item.imgUrl"></image>
                        <view class="margin-top-sm ">{{ item.title }}</view>
                    </view>
                </view>
                <!-- 数据-->
                <view class="flex justify-around align-center padding-sm text-center">
                    <view style="width: 25%;" v-for="item in headInfo" :key="item.value">
                        <view>
                            <text class="text-bold text-xl" style="color:#F37B1D ">{{ item.number }}</text>
                            <text class="text-gray" v-if="item.unit">{{ item.unit }}</text>
                        </view>
                        <view class="text-gray">{{ item.title }}</view>
                    </view>
                </view>
            </view>

            <!-- 图标列表+热点头条+轮播图-->
            <bannerIconHot></bannerIconHot>
        </view>
    </view>
</template>

<script>
import bannerIconHot from "/src/pages/index/components/bannerIconHot";
export default {
    name: "topSearchNav",
    components:{
        bannerIconHot
    },
    data: function() {
        return {
            list: [
                "飞天 53%vol 500ml 贵州茅台",
                "国酱1925 贵州茅台镇酱香型白酒53度粮",
                "汾酒 黄盖玻汾 53度 475ml*6",
                "琅琊台52度海派香型固态法白酒山东名酒",
                "赖醉君贵州茅台镇酱香型白酒53度国酱",
                "茅台集团贵州老窖酒53度柔和酱香型粮食",
                "金门高粱酒 台商精选 清香型 白酒 50度",
                "贵州茅台集团贵州老窖 柔和酱香型白酒",
                "茅台 茅台王子酒 金王子 酱香",
                "茅台 茅台王子酒 珍品王子 酱",
                "贵州茅台集团贵州老窖 柔和酱香型白酒"
            ],
            timeIndex:0,
            placeholderAnime: 0,
            placeholderText: "飞天 53%vol 500ml 贵州茅台",
            timeout:null,
            headInfo: [{
                title: "当前库存",
                value: "kucun",
                unit: "瓶",
                number: 1998
            },
                {
                    title: "当前合同",
                    value: "hetong",
                    unit: "份",
                    number: 8
                },
                {
                    title: "订货统计",
                    value: "dinghuotongji",
                    unit: "件",
                    number: 2298
                },
                {
                    title: "我的积分",
                    value: "jifen",
                    number: 3998
                }
            ],
            iconList: [{
                imgUrl: "/static/Icon/index/ziyuandaili.png",
                icon: 'cuIcon-skinfill',
                title: '资源代理',
                value: "/pages/xxx1"
            },
                {
                    imgUrl: "/static/Icon/index/pinpairenzheng.png",
                    icon: 'cuIcon-redpacket_fill',
                    title: '品牌认证',
                    value: "/pages/xxx2"
                },
                {
                    imgUrl: "/static/Icon/index/pinpaijiameng.png",
                    icon: 'cuIcon-evaluate_fill',
                    title: '品牌加盟',
                    value: "/pages/xxx3"
                },
                {
                    imgUrl: "/static/Icon/index/zhaoxinpin.png",
                    icon: 'cuIcon-notice_forbid_fill',
                    title: '找新品',
                    value: "/pages/xxx4"
                }
            ]
        }
    },
    mounted() {
        clearInterval(this.timeout)
        this.rollText()
    },
    methods: {
        gotoPath(path) {
            uni.navigateTo({
                url: path+`?placeholderText=${this.placeholderText}`
            })
        },
        rollText() {
            this.timeout = setInterval(() => {
                this.placeholderAnime = 1
                // this.placeholderAnime ? this.placeholderAnime = 0 : this.placeholderAnime = 1;
                this.timeIndex++;
                if (this.timeIndex >= this.list.length) {
                    this.timeIndex = 0;
                }
                setTimeout(()=>{
                    this.placeholderText = this.list[this.timeIndex];
                    this.placeholderAnime = 0
                },300)
            }, 3000);
        },
    }
}
</script>

<style lang="scss" scoped>
.searchInput {
    width: 100%;
    height: 68rpx;
    background-color: white;
    border: 2rpx solid #F37B1D;
    border-radius: 34rpx;
    padding: 0 110rpx 0 32rpx;
}
.placeholderClass {
    color: white;
    transition: all 0.3s;
    transform: translateY(0);
    opacity: 1;
}

.placeholderRollClass {
    opacity: 0;
    transform: translateY(-50rpx);
}
.searchBtn {
    position: absolute;
    right: 5rpx;
    width: 100rpx;
    height: 60rpx;
    border-radius: 30rpx;
    text-align: center;
    line-height: 60rpx;
    top: 50%;
    color: white;
    transform: translateY(-50%);
    background-image: linear-gradient(45deg, #FF5A4E, #FF8321);
}
.head-box {
    background-image: url('http://124.220.219.72:8084/static/img/index/pic_bg.png');
    background-size: 750rpx 400rpx;
    background-repeat: no-repeat;
    background-position: 0 0;
    /* border-radius: 0 0 10% 10%; */
    position: relative;
    width: 100%;
}

.content-box {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 0.3rem;
    top: 120rpx;
    height: 350rpx;
}

.placeholder {
    color: white !important;
    opacity: 1;
    font-size: 0.5;
    bottom: 0;
    left: 0;
}

.searchBox {
    border-radius: 0.5rem;
    padding: 0.3rem 0;
    border: white 1.5px solid;
    opacity: 0.8;
}
</style>
