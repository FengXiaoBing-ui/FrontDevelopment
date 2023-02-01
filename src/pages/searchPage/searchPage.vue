<template>
    <view>
        <u-navbar :autoBack="true">
            <view slot="right">
                <view style="width: 650rpx;position: relative" class="margin-right-sm">
                    <input v-model="keyWord" @focus="inputFocus" @blur="inputBlur" class="searchInput text-sm" type="text"
                           :placeholder="placeholderText"
                           placeholder-class="placeholderClass text-df text-gray">
                    <view @click="search($event)" class="searchBtn">搜索</view>
                </view>
            </view>
        </u-navbar>
        <view :style="`margin-top:${CustomBar}px`">
            <view v-show="showResult" class="padding-top-sm">
                <!--        图片商品盒子-->
                <view class="flex flex-wrap justify-between align-center margin-sm">
                    <platformRecommend :horizontal="false" :recommendList="recommendList"></platformRecommend>
                </view>
            </view>

            <view v-show="!showResult" class="flex flex-direction padding-lr-sm">
                <view @click="search($event,item.name)" v-for="(item,index) in searchList" :key="index+'a'"
                      style="border-color: #f1f1f1 !important;" class="flex align-center padding-tb u-border-bottom">
                    <!--                    <text style="font-size: 32rpx" class="cuIcon-search margin-right-sm text-gray"></text>-->
                    <view class="flex align-center">
                        <text v-for="(child,index) in item.keyWordArr" :key="index+'p'" :class="child===keyWord?'text-red':''"> {{ child }} </text>
                    </view>
                </view>
            </view>

            <view v-show="searchList.length<=0&&!showResult">
                <!--    历史搜索-->
                <view>
                    <view class="flex justify-between align-center padding-lr">
                        <view class="text-bold  margin-tb-sm ">历史搜索</view>
                        <view class="cuIcon-delete" @click="delSearchAll"></view>
                    </view>
                    <view class="flex justify-between align-end">
                        <view class="flex flex-wrap justify-start margin-left align-center">
                            <view @click="keyWord = item.title;search($event,item.title)"
                                  v-for="(item,index) in  searchHistory" :key="index"
                                  class="bg-white u-border radius margin-top-sm margin-right-xs padding-tb-xs padding-lr-sm flex justify-around align-center"
                                  style="border-radius: 31rpx">
                                {{ item.title }}
                                <view class="cuIcon-close text-xl icon" @click.stop="delItem(index,item.value)"></view>
                            </view>
                        </view>
                        <view ref="moreHistoryIcon" :class="moreHistory==true?'cuIcon-fold':'cuIcon-unfold'"
                              class="bg-white padding-xs round u-border cuIcon-unfold margin-right-sm"
                              @click="showMore('history')"></view>
                    </view>
                </view>
                <!--    热门搜索-->
                <view class="padding-top-xs">
                    <view class="text-bold  margin-tb-sm margin-left">热门搜索</view>
                </view>
                <view class="flex justify-between align-end">
                    <view class="flex flex-wrap justify-start margin-lr align-center basis-xl">
                        <view @click="keyWord = item.title;search($event,item.title)"
                              v-for="(item,index) in  searchRecommend" :key="index"
                              class="bg-white u-border radius margin-top-sm margin-right-xs padding-tb-xs padding-lr-sm flex justify-around align-center"
                              style="border-radius: 31rpx">
                            {{ item.title }}
                        </view>
                    </view>
                    <view ref="moreHistoryIcon" :class="moreRecommend==true?'cuIcon-fold':'cuIcon-unfold'"
                          class="bg-white padding-xs round u-border cuIcon-unfold margin-right-sm"
                          @click="showMore('hot')"></view>
                </view>
            </view>

        </view>
    </view>
</template>
<script>
import platformRecommend from "/src/pages/index/components/platformRecommend";

export default {
    name: "searchPage",
    components: {
        platformRecommend
    },
    data: function() {
        return {
            placeholderText: "",
            keyWord: "",
            showResult: false,
            recommendList: [],
            searchText: "",
            searchList: [],
            placeholder: "茅台1983",
            searchHistory: [
                { title: "茅台", value: "a" },
                { title: "五粮液1987精酿", value: "b" },
                { title: "茅台1983", value: "c" },
                { title: "酱香", value: "d" },
                { title: "推荐", value: "e" },
                { title: "生效酒", value: "f" }
            ],
            moreHistory: false,
            searchRecommend: [
                { title: "茅台", value: "a" },
                { title: "五粮液", value: "b" },
                { title: "茅台1983", value: "c" },
                { title: "酱香", value: "d" },
                { title: "推荐", value: "e" },
                { title: "生效酒", value: "f" }
            ],
            moreRecommend: false,
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
        };
    },
    watch: {
        keyWord() {
            let debounce = this.$util.debounce(this.getSearchList, 500)
            if (this.keyWord === "") {
                this.showResult = false;
            }
            debounce();
        }
    },
    onLoad(options){
        this.placeholderText = options.placeholderText
    },
    methods: {
        delSearchAll() {
            this.searchHistory = [];
        },
        showMore(type) {
            let str;
            if (type == "history") {
                str = "History";
            } else {
                str = "Recommend";
            }
            this["more" + str] = !this["more" + str];
            if (this["more" + str] == true) {
                let newArray = this["search" + str].map((item, index) => {
                    item.id = item?.id + index + "lishi";
                    return item;
                });
                this["search" + str] = this["search" + str].concat(newArray);
            } else {
                this["search" + str] = this["search" + str].slice(0, 6);
            }
        },
        delItem(index, value) {
            this.searchHistory.splice(index, 1);
        },
        search(e, name = null) {
            if (this.keyWord === "" && this.placeholderText === "") {
                this.searchList = [];
                return;
            }
            if (this.keyWord === ""){
                if (this.placeholderText){
                    this.keyWord = this.placeholderText;
                }
            }
            if (name) {
                this.keyWord = name;
            }
            this.showResult = true;
            this.getRecommendList();
        },
        async getRecommendList() {
            let res = await this.$http.getGoodList();
            if (res) {
                this.isLoading = false;
                this.recommendList = res.data;
            }
        },
        back() {
            uni.navigateBack({
                delta: 1
            });
        },
        inputFocus() {
            this.showResult = false;
        },
        inputBlur(){
        },
        inputChange() {
            console.log("change");
        },
        getSearchList() {
            if (this.keyWord === "") {
                this.searchList = [];
                return;
            }
            this.searchList = [];
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].indexOf(this.keyWord) !== -1) {
                    // /()/g
                    let test = new RegExp("\(" + this.keyWord + ")","g")
                    let arr = this.list[i].split(test)
                    // let keyWordIndex = this.list[i].indexOf(this.keyWord)
                    // let start = this.list[i].slice(0,keyWordIndex)
                    // let text = this.list[i].slice(keyWordIndex,keyWordIndex+this.keyWord.length)
                    // let end = this.list[i].slice(keyWordIndex+this.keyWord.length,this.list[i].length)
                    // console.log(start+','+text+','+end);
                    this.searchList.push({
                        keyWordArr: arr,
                        name:this.list[i]
                    });
                }
            }
        },
    }

};
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

.searchBox {
    background: #F2F2F2;
    color: black;
    height: 100%;
    border-radius: 1rem;
    padding: .2rem;
    position: relative;
}

.screen-nav {
    width: 100vw;
    height: 80rpx;
    position: fixed;
    left: 0;
    top: var(--CustomBar) !important;
    z-index: 9999;
}

.iconRadius {
    text-align: center;
    border-radius: .5rem;
    font-size: 18px;
}

.toDown {
}

.toUP {
    transform: rotate(180deg);
    transition: all .4s;
}

.icon {
    background: #F2F2F2;
    border-radius: 50%;
    margin-left: .5rem;
}

/deep/ .u-navbar__content__right {
    padding: 0;
}
</style>
