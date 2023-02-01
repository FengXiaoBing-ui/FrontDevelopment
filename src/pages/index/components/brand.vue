<template>
    <view class="moduleBlock margin-top-sm padding-sm overhidde">
        <view class="flex align-end justify-between  " @click="goto('pages/brandZone/brandZone')">
            <image :src="pinpaizhuanqu" style="height:50rpx;max-width:280rpx" mode="heightFix"></image>
<!--            <view class="flex align-center justify-end flex-sub margin-right-xs">-->
<!--                <image class="margin-left-sm" v-for="item in iconList" :key="item.url" :src="item.img"-->
<!--                       style="width:40rpx" mode="widthFix">-->
<!--                </image>-->
<!--            </view>-->
<!--            <view class="flex align-end text-gray margin-left-sm text-sm text-cut" >-->
<!--                查看更多-->
<!--                <view class="cuIcon-right"></view>-->
<!--            </view>-->
            <view class="flex align-center"> <text class="text-gray text-sm text-cut">查看更多</text> <u-icon style="transform: translateY(-1px)" name="arrow-right-double" color="#777777" size="18"></u-icon></view>
        </view>
        <view style="height:450rpx;overflow: hidden;"  @click="goto('pages/brandZone/brandDetails')"
              class="flex justify-between align-center margin-top padding-tb-sm">
            <image class="basis-df padding-right-sm" style="height:450rpx;" src="/static/images/img_12x.png"
                   mode="heightFix"></image>
            <view style="height:450rpx" class="basis-df flex flex-direction justify-between  ">
                <image style="width:100%" mode="widthFix" src="/static/images/img_22x.png"></image>
                <image style="width:100%" mode="widthFix" src="/static/images/img_32x.png"></image>
            </view>
        </view>


<!--        <view class="flex align-center justify-around margin-top-sm padding-xs">-->
<!--            <view class="shadow margin-xs padding-lr-sm " v-for="item in cloumList" :key="item.value"-->
<!--                  @click="goto('/pages/brandZone/brandDetails')">-->
<!--                <image :src="item.img" style="width: 200upx; height: 200upx"></image>-->
<!--                <view class="text-center">{{ item.title }}</view>-->
<!--            </view>-->
<!--        </view>-->

        <view class="flex justify-between align-center margin-top-lg" @click="goto('pages/hotActivity/hotActivity?type=1')">
            <fxbImage src="/img/index/pingjianhui.png" width="280" height="50" mode="heightFix"></fxbImage>
            <view class="flex align-center"> <text class="text-gray text-sm text-cut">查看更多</text> <u-icon style="transform: translateY(-1px)" name="arrow-right-double" color="#777777" size="18"></u-icon></view>
        </view>
        <view class="flex flex-wrap justify-between">
            <fxbImage class="margin-top-sm" width="344" height="180" src="/img/index/pingjianhui1.png"></fxbImage>
            <fxbImage class="margin-top-sm" width="344" height="180" src="/img/index/pingjianhui2.png"></fxbImage>
            <fxbImage class="margin-top-sm" width="344" height="180" src="/img/index/pingjianhui3.png"></fxbImage>
            <fxbImage class="margin-top-sm" width="344" height="180" src="/img/index/pingjianhui4.png"></fxbImage>
        </view>
    </view>
</template>
<script>
import fxbImage from "/src/components/fxb/fxb-image"
import config from "/src/config/index";

export default {
    name: "brand",
    components: {
        fxbImage
    },
    data: function() {
        return {
            pinpaizhuanqu: config.IMG_SERVER + "/img/index/pinpaizhuanqu.png",
            iconList: [{
                url: "1",
                img: "/static/images/logo (1).png"
            },
                {
                    url: "2",
                    img: "/static/images/logo (2).png"
                },
                {
                    url: "3",
                    img: "/static/images/logo (3).png"
                },
                {
                    url: "4",
                    img: "/static/images/logo (4).png"
                },
                {
                    url: "5",
                    img: "/static/images/logo (5).png"
                }
            ],
            minInfoList: [{
                title: "茅台专区",
                path: "/pages/brandZone/brandDetails",
                text: "国酒茅台，玉液之冠",
                imageUrl: [
                    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.leadip.com%2Fd%2Ffile%2Fp%2F2021%2F05-18%2F1621335682512_1.png&refer=http%3A%2F%2Fwww.leadip.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664080359&t=cc7f53e47a1f55477865ef4dcee97014",
                    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F011adf5c35a5d7a80121fbb029df56.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664080359&t=6aa0eea0e24fb4dcff6db735c469bf13"
                ]
            },
                {
                    title: "酱酒专区",
                    path: "/pages/brandZone/brandDetails",
                    text: "国酒茅台，玉液之冠",
                    imageUrl: [
                        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c6615b04d742a801209a85167311.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664080691&t=fad3ba98b3d7f4e3d3a296b38905fad7",
                        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdrdbsz.oss-cn-shenzhen.aliyuncs.com%2F2110281616071599365123.jpeg&refer=http%3A%2F%2Fdrdbsz.oss-cn-shenzhen.aliyuncs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664080691&t=00c853499e70eefe132661b9fc6dd69c"
                    ]
                }
            ],
            cloumList: [{
                title: "茅台专区",
                value: "maota",
                img: "/static/images/img_62x.png"
            },
                {
                    title: "酱酒专区",
                    value: "jiangjiu",
                    img: "/static/images/img_42x.png"
                },
                {
                    title: "茅台专区",
                    value: "xxxx",
                    img: "/static/images/img_52x.png"
                }
            ]
        };
    },
    methods: {
        goto(path) {
            uni.navigateTo({
                url: path
            });
        }
    }
};
</script>
<style scoped>
.moduleBlock {
    border-radius: 0.3rem;

}

.leftImage {
    height: 50px;
    width: 100%;
    background-position: left top;
    background-image: url("/static/images/img_12x.png");
    background-size: cover;
}

.shadow {
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

}
</style>
