<template>
    <view
        class="filter-wrapper"
        :style="{ height: height + 'rpx', top: top, 'border-top': border ? '1rpx solid #f2f2f2' : 'none' }"
        @touchmove.stop.prevent="discard"
    >
        <view class="inner-wrapper ">
            <view class="mask" :class="showMask ? 'show' : 'hide'" @tap="tapMask"></view>
            <view class="navs ">
                <view
                    class="c-flex-align text-gray"
                    :class="{ 'c-flex-center': index > 0, actNav: index === actNav }"
                    v-for="(item, index) in navData"
                    :key="index"
                    @click="navClick(index)"
                >
                    <view style="white-space: nowrap" v-for="(child, childx) in item" :key="childx" v-if="child.select">

                        <text v-show="index === actNav" :class="child.text == '筛选' ? 'cuIcon-filter' : 'cuIcon-triangleupfill'"></text>
                        <text v-show="index !== actNav" :class="child.text == '筛选' ? 'cuIcon-filter' : 'cuIcon-triangledownfill'"></text>
                        {{ child.text }}
                    </view>
                </view>
                <!--                    <image src="https://i.loli.net/2020/07/15/QsHxlr1gbSImvWt.png" mode="" class="icon-triangle" v-if="index === actNav"></image>-->
                <!--                    <image src="https://i.loli.net/2020/07/15/xjVSvzWcH9NO7al.png" mode="" class="icon-triangle" v-else></image>-->
            </view>

            <!--                <view class="date-wrapper">-->
            <!--                    <picker mode="date" @change="handleDate">-->
            <!--                        <view class="date c-flex-align" :style="{ height: height + 'rpx' }" @click="dateClick">-->
            <!--                            <view>{{ selDate }}</view>-->
            <!--&lt;!&ndash;                            <image src="https://i.loli.net/2020/07/15/xjVSvzWcH9NO7al.png" mode="" class="icon-triangle"></image>&ndash;&gt;-->
            <!--                        </view>-->
            <!--                    </picker>-->
            <!--                </view>-->
        </view>
        <scroll-view scroll-y="true" class="popup" :class="scrollPopupShow ? 'popupShow' : ''">
            <view
                class="item-opt c-flex-align"
                :class="item.select ? 'actOpt' : ''"
                v-for="(item, index) in navData[actNav]"
                :key="index"
                @click="handleOpt(index)"
            >
                {{ item.text }}
            </view>
        </scroll-view>
        <view class="popup" :class="popupShow ? 'popupShow' : ''">
            <view class="flex flex-wrap bg-white padding">
                <view
                    v-for="(item, index) in returnArr(navData[actNav])"
                    :key="index"
                    @click="selectType(index)"
                    style="width: 30%; margin: 5px 10px 5px 0"
                    :class="item.select ? 'bg-red light' : 'bg-gray'"
                    class="text-sm radius text-cut padding-tb-sm flex justify-center align-center"
                >
                    {{ item.text }}
                </view>
            </view>
        </view>
        <u-popup :show="show" mode="right" @close="close" @open="open">
            <view class="scrollViewBox" :style="'padding-top: ' + (CustomBar+StatusBar) + 'px;transform:rotate(360deg);'">
                <scroll-view @touchmove.stop class="scrollView" scroll-y="true" :style="{ '--ScreenHeight': (ScreenHeight-(CustomBar+StatusBar)) + 'px' }">
                    <ScreenAlcohol title="品牌" text="不限" :disabled="true"></ScreenAlcohol>
                    <ScreenAlcohol title="价格" @getInfo="screenData.price = $event" :alcoholList="priceList"></ScreenAlcohol>
                    <ScreenAlcohol title="香型" @getInfo="screenData.scent = $event" :alcoholList="fragranceList"></ScreenAlcohol>
                    <ScreenAlcohol title="产地" @getInfo="screenData.place = $event" :alcoholList="placeList"></ScreenAlcohol>
                    <ScreenAlcohol title="度数" @getInfo="screenData.degrees = $event" :alcoholList="degreesList"></ScreenAlcohol>
                </scroll-view>
                <view class="botBtn bg-white padding-sm flex align-center justify-between">
                    <text>已选(1)</text>
                    <view class="flex align-center">
                        <button class="cu-btn u-border bg-white radius margin-right-sm">清空</button>
                        <button class="cu-btn bg-red radius" @click="sure">确定</button>
                    </view>
                </view>
            </view>
        </u-popup>
    </view>
</template>

<script>
import ScreenAlcohol from '/src/pages/agent/components/fxb-screen-alcohol'
// import { getCurDateTime } from '@/libs/utils.js';
export default {
    props: {
        height: {
            type: Number,
            default: 108,
        },
        top: {
            type: String,
            default: "calc(var(--window-statsu-bar) + 44px)",
        },
        border: {
            type: Boolean,
            default: false,
        },
        filterData: {
            //必填
            type: Array,
            default: () => {
                return [];
            },
        },
        defaultIndex: {
            //默认选中条件索引,超出一类时必填
            type: Array,
            default: () => {
                return [0];
            },
        },
    },
    components:{
        ScreenAlcohol
    },
    data() {
        return {
            //筛选后的数据key
            screenData:{
                price:"",
                scent:"",
                place:"",
                degrees:""
            },
            navData: [],
            popupShow: false,
            scrollPopupShow: false,
            showMask: false,
            actNav: null,
            selDate: "选择日期",
            selIndex: [], //选中条件索引
            show:false,
            priceList: [
                '不限', '0~99元', '100~299元', '300~599元', '600~999元', '1000~1999元', '2000元以上'
            ],
            fragranceList: [
                '不限', '酱香型', '浓香型', '清香型', '馥郁香型', '兼香型', '凤香型', '老白干香型'
            ],
            placeList: [
                '不限', '四川省', '陕西省', '云南省', '山东省', '北京市'
            ],
            degreesList: [
                '不限', '35°以下', '35°~39°', '40°~49°', '50°以上'
            ],
        };
    },
    created() {
        this.navData = this.filterData;
        this.selIndex = this.defaultIndex;
        this.keepStatus();
    },
    mounted() {
        // this.selDate = getCurDateTime().formatDate;
    },
    methods: {
        returnArr(arr){
            if (arr==undefined){
                return arr
            }
            let arrTo = []
            arr.forEach( e => {
                if (e.text!=="价格"&&e.text!=="香型"&&e.text!=="商品分类"){
                    arrTo.push(e);
                }
            })
            return arrTo
        },
        selectType(index) {
            this.selIndex[this.actNav] = index+1;
            this.keepStatus();
            setTimeout(() => {
                this.tapMask();
            }, 100);
            let data = [];
            this.navData.forEach(item => {
                let sel = item.filter(child => child.select);
                data.push(sel);
            });
            this.$emit("onSelected", data);
        },
        keepStatus() {
            this.navData.forEach(itemnavData => {
                itemnavData.map(child => {
                    child.select = false;
                });
                return itemnavData;
            });
            for (let i = 0; i < this.selIndex.length; i++) {
                let selindex = this.selIndex[i];
                this.navData[i][selindex].select = true;
            }
        },
        navClick(index) {
            this.tapMask();
            if (this.filterData[index][0].text === "筛选") {
                this.open();
                // uni.navigateTo({
                //     url: "pages/agent/commodityListScreen",
                // });
                return;
            }
            if (this.filterData[index][0].text === "品牌") {
                uni.navigateTo({
                    url: "pages/agent/brandScreen",
                });
                return;
            }
            if (this.filterData[index][0].text === "智能排序") {
                this.scrollPopupShow = true;
                this.showMask = true;
                this.actNav = index;
                return;
            }
            if (index === this.actNav) {
                this.tapMask();
                return;
            }
            this.popupShow = true;
            this.showMask = true;
            this.actNav = index;
        },
        handleOpt(index) {
            this.selIndex[this.actNav] = index;
            this.keepStatus();
            setTimeout(() => {
                this.tapMask();
            }, 100);
            let data = [];
            this.navData.forEach(item => {
                let sel = item.filter(child => child.select);
                data.push(sel);
            });
            this.$emit("onSelected", data);
        },
        dateClick() {
            this.tapMask();
        },
        tapMask() {
            this.showMask = false;
            this.scrollPopupShow = false;
            this.popupShow = false;
            this.actNav = null;
        },
        handleDate(e) {
            let d = e.detail.value;
            this.selDate = d;
            this.$emit("dateChange", d);
        },
        discard() {},
        open() {
            // console.log('open');
            this.show = true
        },
        close(){
            // console.log('close');
            this.show = false
        },
        sure() {
            this.show = false;
            this.$emit('screenChange',this.screenData)
        }
    },
};
</script>

<style lang="scss" scoped>
page {
    font-size: 28rpx;
}
.scrollViewBox{
    width: 600rpx;
    box-sizing: border-box;
    .scrollView{
        height: var(--ScreenHeight) !important;
        padding-bottom: 104rpx;
    }
    .botBtn{
        width: 100%;
        position: fixed;
        bottom: 0;
        right: 0;
    }
}

.c-flex-align {
    display: flex;
    align-items: center;
}

.c-flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.filter-wrapper {
    position: fixed;
    left: 0;
    width: 750rpx;
    z-index: 999;

    .inner-wrapper {
        // position: relative;
        .navs {
            position: relative;
            height: 80rpx;
            padding: 0 40rpx;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #fff;
            border-bottom: 2rpx solid #f5f6f9;
            color: #000000;
            z-index: 999;
            box-sizing: border-box;

            & > view {
                flex: 1;
                height: 100%;
                flex-direction: row;
                z-index: 999;
            }

            .date {
                justify-content: flex-end;
            }

            .actNav {
                color: #ff0000;
                font-weight: bold;
            }
        }

        .mask {
            z-index: 666;
            position: fixed;
            top: calc(var(--status-bar-height) + 160px);
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0);
            transition: background-color 0.15s linear;

            &.show {
                background-color: rgba(0, 0, 0, 0.4);
            }

            &.hide {
                display: none;
            }
        }
    }

    .popup {
        position: relative;
        max-height: 500rpx;
        background-color: #fff;
        border-bottom-left-radius: 20rpx;
        border-bottom-right-radius: 20rpx;
        overflow: scroll;
        z-index: 999;
        transition: all 1s linear;
        opacity: 0;
        display: none;

        .item-opt {
            height: 100rpx;
            padding: 0 40rpx;
            color: #8b9aae;
            border-bottom: 2rpx solid #f5f6f9;
        }

        .actOpt {
            color: #ff0000;
            font-weight: bold;
            position: relative;
            //&::after {
            //    content: '✓';
            //    font-weight: bold;
            //    font-size: 36rpx;
            //    position: absolute;
            //    right: 40rpx;
            //}
        }
    }

    .popupShow {
        display: block;
        opacity: 1;
    }

    .icon-triangle {
        width: 16rpx;
        height: 16rpx;
        margin-left: 10rpx;
    }
}
</style>
