<template>
    <u-index-list :index-list="indexList">
        <view v-for="(item, index) in itemArr" :key="index">
            <!-- #ifdef APP-NVUE -->
            <!-- <u-index-anchor :text="indexList[index]" bgColor="#fff"></u-index-anchor>-->
            <!-- #endif -->
            <u-index-item>
                <!-- #ifndef APP-NVUE -->
                <u-index-anchor :text="indexList[index]" bgColor="#fff" style="width: 100%"></u-index-anchor>
                <!-- #endif -->
                <view class="list-cell" v-for="(cell, index) in item" :key="index">
                    {{ cell }}
                </view>
            </u-index-item>
        </view>
    </u-index-list>
</template>
<script>
import cityList from "/src/plugins/qqmap/cityList.json";
import strUtil from "/src/utils/strUtil";

export default {
    data() {
        return {
            cityList,
            indexList: ["A", "B", "C", "D", "E"],
            itemArr: [
                ["列表A1", "列表A2", "列表A3"],
                ["列表B1", "列表B2", "列表B3"],
                ["列表C1", "列表C2", "列表C3"],
            ],
        };
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            this.initIndexList();
        },
        initIndexList() {
            this.indexList = strUtil.generateArrayUpper();
            for (let i = 0; i < 26; i++) {
                this.itemArr[i] = [];
            }
            const municipalityList = cityList.result[0].filter(city => {
                city.fullname.lastIndexOf("市") !== -1;
            });
            const tempCityList = cityList.result[1].filter((city, index) => index <= 457);
            const localCityList = [...municipalityList, ...tempCityList];
            localCityList.forEach(city => {
                const initial = city.pinyin[0][0].toUpperCase();
                this.indexList.map((item, index) => {
                    if (item === initial) {
                        const label = city.fullname;
                        this.itemArr[index].push(label);
                    }
                });
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.u-index-item {
    flex-wrap: wrap;
    flex-direction: row;
}

.list-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 210rpx;
    height: 100rpx;
    padding: 8rpx;
    margin: 10rpx;
    color: #323233;
    text-align: center;
    font-size: 14px;
    background-color: #eee;
    box-sizing: border-box;
    border-radius: 3px;
}
</style>
