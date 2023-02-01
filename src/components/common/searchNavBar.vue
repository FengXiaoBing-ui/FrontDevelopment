<template>
    <view>
        <u-navbar :border="false" :fixed="true"
                  :safeAreaInsetTop="false"
                  :style="{ '--CustomBar': CustomBar + 'px', '--StatusBar': StatusBar + 'px'}">
            <view slot="left" class="u-nav-slot text-white">
                <view class="flex align-center" @click="pageTo('/pages/appCenter/selectCity/selectArea')">
                    <view>观山湖区</view>
                    <view class="cuIcon-triangledownfill" style="font-size: 24px"></view>
                </view>
            </view>
            <view slot="center" class="u-nav-slot text-white text-xl">
                <view>好酒选</view>
            </view>
            <view slot="right" class="u-nav-slot text-white">
                <view class="addView">
                    <view class="cuIcon-add" style="font-size: 24px" @click="showMenu"></view>
                    <view class="addInfo">
                        <u-transition :show="viewMenu" mode="fade-down">
                            <view class="transition">
                                <view class="padding-sm margin-top-sm bg-white flex justify-around align-center triangle" v-for="(item,index) in  menuList"  :key="index" @click="$emit(item.event)">
                                    <view class=" text-bold" :class="item.icon"></view>
                                    <view>{{ item.text }}</view>
                                </view>
                            </view>
                        </u-transition>
                    </view>
                </view>
            </view>
        </u-navbar>
        <view v-if="viewMenu" class="clickBackground" @click="viewMenu=false" ></view>
    </view>
</template>

<script>
export default {
    name: "mainNavBar",
    props:{
        title:{
            default:'好酒选',
            type:String
        },
        menuList:{
            default:()=>{
                return  [
                    {icon:'cuIcon-scan',text:'扫一扫',event:'Scan'}
                ]
            },
            type:Array
        },
    },
    data(){
        return{
            viewMenu:false,
        }
    },
    methods:{
        showMenu(){
            this.viewMenu = !this.viewMenu
        },
        pageTo(url){
            uni.navigateTo({
                url
            })
        }
    }
};
</script>

<style scoped lang="scss">
.clickBackground{
    width: 100vw;
    height: 100vh;
    background: red;
    opacity: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
}
.addView {
    position: relative;
}

.addInfo {
    position: absolute;
    width: 25vw;
    right: 0;
    /*border-radius: 0.3rem;*/
    overflow: hidden;
}

.triangle::before {
    position: absolute;
    right: 0.2rem;
    top: -0.35rem;
    content: "";
    height: 0;
    width: 0;
    border-radius: 0.1rem;
    border: 0.5rem solid transparent;
    border-bottom-color: white;
}
/deep/ .u-navbar {
    .u-navbar__content {
        background-image: url('/static/images/nava-BG.png');
        background-repeat: no-repeat;
        background-size: 750 rpx 400 rpx;
        background-position: 0 0;
        height: var(--CustomBar) !important;
        padding-top: var(--StatusBar);
        border-bottom: 0;


        .u-navbar__content__left,
        .u-navbar__content__right {
            margin-top: var(--StatusBar);
        }

    }
}
</style>