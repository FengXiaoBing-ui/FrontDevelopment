<template>
    <view class="bg-white">
        <u-navbar :autoBack="true" rightText="切换城市" title="选择地区" @rightClick="switchCity"></u-navbar>
        <view :style="`margin-top:${CustomBar}px;height:calc(100vh - ${CustomBar}px)`">
            <threeStageSelector v-if="false"></threeStageSelector>
            <view class="w100 flex">
                <view class="w25 bg-gray">
                    <scroll-view scroll-y style="height: 88vh">
                        <view v-for="(item,index) in china" :key="item.code"
                              :class="activeCode==item.code?'bg-white':''" class="padding-tb text-center"
                              @click="selectProvince(item.code,item.name)">
                            <text>{{ item.name }}</text>
                        </view>
                    </scroll-view>
                </view>
                <view v-if="city.length>0" class="w25">
                    <scroll-view scroll-y style="height: 88vh">
                        <u-checkbox-group v-model="cityData" iconPlacement="right" placement="column"
                                          @change="checkboxChange">
                            <view v-for="(item,index) in city" :key="item.code"
                                  class="padding-tb padding-left-xs flex flex-direction">
                                <text v-if="level>1" @click="selectCity(item.code,item.name)">{{ item.name }}</text>
                                <u-checkbox v-else :label="item.name" :name="item.name" activeColor="red"
                                            shape="square">
                                </u-checkbox>
                            </view>
                        </u-checkbox-group>
                    </scroll-view>
                </view>
                <view v-if="region.length>0" class="w25">
                    <scroll-view scroll-y style="height: 88vh">
                        <u-checkbox-group v-model="cityData" iconPlacement="right" placement="column"
                                          @change="checkboxChange">
                            <view v-for="(item,index) in region" :key="item.code"
                                  class="padding-tb padding-left-xs flex flex-direction">
                                <text v-if="level>2" @click="selectRegion(item.code,item.name)">{{ item.name }}</text>
                                <u-checkbox v-else :label="item.name" :name="item.name" activeColor="red"
                                            shape="square">
                                </u-checkbox>
                            </view>
                        </u-checkbox-group>
                    </scroll-view>
                </view>
                <view v-if="street.length>0" class="w25">
                    <scroll-view scroll-y style="height: 88vh">
                        <u-checkbox-group v-model="cityData" iconPlacement="right" placement="column"
                                          @change="checkboxChange">
                            <view v-for="(item,index) in street" :key="item.code"
                                  class="padding-tb padding-lr-xs flex flex-direction">
                                <text v-if="level>3">{{ item.name }}</text>
                                <u-checkbox v-else :label="item.name" :name="item.name" activeColor="red"
                                            shape="square">
                                </u-checkbox>
                            </view>
                        </u-checkbox-group>
                    </scroll-view>
                </view>
            </view>
            <view class="botBtn padding-xs bg-white">
                <button class="cu-btn bg-red radius w30" @click="sure">确定</button>
            </view>
        </view>

    </view>
</template>
<script>
import china from "/src/utils/china.json";
import threeStageSelector from "/src/components/common/threeStageSelector";

export default {
    components: { threeStageSelector },
    data() {
        return {
            provinceStr: "",
            cityStr: "",
            regionStr: "",
            streetStr: "",
            activeCode: null,
            level: null,
            province: [],//省
            city: [],//市
            region: [],//区
            street: [],//街道
            depositCity: [],
            cityObj: {},
            cityData: [],
            china,
            submitData:[],
            tempOneAdd: "",
            tempTwoAddList: [],
            myArr: [],
        };
    },
    onLoad(options) {
        this.level = options.level;
        this.initData();
    },
    computed: {},
    methods: {
        switchCity() {
            uni.navigateTo({
                url: "pages/appCenter/selectCity/selectCity"
            });
        },
        //数据初始化
        initData() {
            this.provinceStr = this.china[0].name;
            this.city = this.china[0].children;
            this.cityStr = this.city[0].name;
            this.activeCode = this.china[0].code;
        },
        //选择区
        selectRegion(code, name) {
            this.regionStr = name;
            this.activeCode = code;
            let different = true;
            for (let i = 0; i < this.depositCity.length; i++) {
                if (this.depositCity[i].code == this.cityObj.code) {
                    different = false;
                    this.depositCity[i] = this.cityObj;
                }
            }
            if (different && this.cityObj.children) {
                this.depositCity.push(this.cityObj);
            }
            this.depositCity.forEach(e => {
                if (e.code == code) {
                    let arr = [];
                    e.children.forEach(item => {
                        let arrList = item.name.split(",");
                        arr.push(arrList[arrList.length - 1]);
                    });
                    this.cityData = arr;
                }
            });
            this.region.forEach(ele => {
                if (ele.code === code) {
                    this.street = ele.children;
                    this.streetStr = this.street[0].name;
                }
            });
        },
        //选择市
        selectCity(code, name) {
            console.log(code, name);
            this.cityStr = name;
            this.activeCode = code;
            let different = true;
            for (let i = 0; i < this.depositCity.length; i++) {
                if (this.depositCity[i].code == this.cityObj.code) {
                    different = false;
                    this.depositCity[i] = this.cityObj;
                }
            }
            if (different && this.cityObj.children) {
                this.depositCity.push(this.cityObj);
            }
            this.depositCity.forEach(e => {
                if (e.code == code) {
                    let arr = [];
                    e.children.forEach(item => {
                        let arrList = item.name.split(",");
                        arr.push(arrList[arrList.length - 1]);
                    });
                    this.cityData = arr;
                }
            });
            this.street = [];
            this.city.forEach(ele => {
                if (ele.code === code) {
                    this.region = ele.children;
                    this.regionStr = ele.children[0].name;
                }
            });
        },
        //选择省
        selectProvince(code, name) {


            this.provinceStr = name;
            this.activeCode = code;
            let different = true;
            for (let i = 0; i < this.depositCity.length; i++) {
                if (this.depositCity[i].code == this.cityObj.code) {
                    different = false;
                    this.depositCity[i] = this.cityObj;
                }
            }
            if (different && this.cityObj.children) {
                this.depositCity.push(this.cityObj);
            }
            this.depositCity.forEach(e => {
                if (e.code == code) {
                    let arr = [];
                    e.children.forEach(item => {
                        let arrList = item.name.split(",");
                        arr.push(arrList[arrList.length - 1]);
                    });
                    this.cityData = arr;
                }
            });
            this.region = [];
            this.street = [];
            this.china.forEach(ele => {
                if (ele.code === code) {
                    this.city = ele.children;
                    this.cityStr = ele.children[0].name;
                }
            });
        },
        checkboxChange(event) {
            let arr = [];
            event.forEach(item => {
                let objs = {
                    name: this.level == 1 ? this.provinceStr + "," + item : this.level == 2 ? this.provinceStr + "," + this.cityStr + "," + item : this.provinceStr + "," + this.cityStr + "," + this.regionStr + "," + item
                };
                arr.push(objs);
            });
            let obj = {
                code: this.activeCode,
                children: arr
            };
            this.cityObj = obj;
        },
        sure() {
            let dif = true;
            let _this = this;
            let different = true;
            for (let i = 0; i < this.depositCity.length; i++) {
                if (this.depositCity[i].code == this.cityObj.code) {
                    different = false;
                    this.depositCity[i] = this.cityObj;
                }
            }
            if (different && this.cityObj.children) {
                this.depositCity.push(this.cityObj);
            }
            this.depositCity.forEach(ele => {
                ele.children.forEach(item => {
                    let res = item.name.split(",");
                    _this.myArr.forEach(list => {
                        if (list.name===res[0]){
                            dif = false
                            list.children.push(res[1])
                        }
                    })
                    if (dif){
                        _this.myArr.push({
                            name:res[0]
                        })
                    }

                });
            });
            console.log(_this.myArr);
        }
    }

};
</script>

<style lang="scss" scoped>
.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-shadow: 10rpx 10rpx 20rpx #bdbdbd;
}
</style>
