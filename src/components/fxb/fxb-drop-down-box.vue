<template>
    <view class="dropBox bg-white" :style="'top:'+top+'px'" @touchmove.stop.prevent="discard">
        <view class="fatherBox flex justify-between align-center bg-white u-border-bottom">
            <view class="flex-sub text-center padding-sm flex align-center justify-center" @click="openList(item,index)"
                  v-for="(item,index) in copyFilterData" :key="index+'a'">
                <text class="text-cut" :class="titleIndex===index?'text-red':''">{{ item.name }}</text>
                <u-icon style="transition: 0.3s;transform: scale(0.7,0.5)" size="8" :color="titleIndex===index?'#e54d42':'#686868'"
                        :style="titleIndex===index?'transform: rotateZ(180deg);':''" name="arrow-down-fill"></u-icon>
            </view>
        </view>
        <view :style="{ '--CustomBar': (top+35) + 'px'}"
              class="bg-white dropDownBoxTop"
              :class="isDrop?'dropDownBox':''">
            <scroll-view v-if="type==='hierarchy-column'" scroll-y style="height: 600rpx">
                <view v-for="(item,index) in submenu" :key="index+'e'"
                      @click="hierarchyColumn(index,item)" class="padding list"
                      :class="{'listDrop':isDrop,'text-red':item.name===titleName}" :style="'--delay:'+((index+1)/submenu.length)+'s'">{{ item.name }}
                </view>
            </scroll-view>

            <view v-if="type==='china'">
                <view class="flex justify-between">
                    <scroll-view class="flex-sub" scroll-y style="height: 600rpx">
                        <view class="flex flex-direction">
                            <view @click="selectProvince(item.children,item.code)" class="padding" :class="provinceCode==item.code?'text-red':''" v-for="(item,indexCode) in chinaJson" :key="item.code">
                                {{ item.name }}
                            </view>
                        </view>
                    </scroll-view>
                    <scroll-view  class="flex-sub" v-if="province.length" scroll-y style="height: 600rpx">
                        <view class="flex flex-direction">
                            <view @click="selectCity(item.children,item.code)" class="padding" :class="cityCode==item.code?'text-red':''" v-for="(item,indexCode) in province" :key="item.code">
                                {{ item.name }}
                            </view>
                        </view>
                    </scroll-view>
                    <scroll-view  class="flex-sub" scroll-y style="height: 600rpx">
                        <view class="flex flex-direction">
                            <view v-if="city.length" @click="selectArea(item.children,item.code)" class="padding" :class="areaCode==item.code?'text-red':''" v-for="(item,indexCode) in city" :key="item.code">
                                {{ item.name }}
                            </view>
                        </view>
                    </scroll-view>
                    <scroll-view  class="flex-sub" scroll-y style="height: 600rpx">
                        <view class="flex flex-direction">
                            <view v-if="area.length" @click="selectStreet(item,item.code)" class="padding" :class="streetCode==item.code?'text-red':''" v-for="(item,indexCode) in area" :key="item.code">
                                {{ item.name }}
                            </view>
                        </view>
                    </scroll-view>
                </view>
            </view>

            <view v-if="type==='radio'" class="padding-sm">
                <view v-for="(item,index) in submenu" :key="index+'c'" class="list" :class="isDrop?'listDrop':''"
                      :style="'--delay:'+((index+1)/submenu.length)+'s'">
                    <view class="margin-top-sm">{{ item.name }}</view>
                    <view class="flex flex-wrap">
                        <view @click.stop="choice(index,indexChild,itemChild.name)"
                              class="padding-sm radius  margin-lr-xs margin-top-sm"
                              v-for="(itemChild,indexChild) in item.submenu"
                              :class="item.submenu[indexChild].value === itemChild.name?'bg-red':'bg-gray'">
                            {{ itemChild.name }}
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view v-show="isMask" @click="init" class="mask" :style="'height:'+(ScreenHeight-(top+35+50))+'px'"></view>
    </view>
</template>

<script>
import chinaJson from '/src/utils/china.json'
export default {
    name: "fxb-drop-down-box",
    props: {
        top: {
            type: String | Number,
            default: 44
        },
        filterData: {
            type: Array,
            default: function() {
                return [];
            }
        }
    },
    data() {
        return {
            chinaJson,
            province:[],
            city:[],
            area:[],
            street:[],
            provinceCode:"",
            cityCode:"",
            areaCode:"",
            streetCode:"",
            cityResult:"",
            titleName:"",
            titleIndex: -1,
            activeIndex: 0,
            isDrop: false,
            isMask: false,
            copyFilterData:this.filterData,
            submenu: [],
            type: null,
            choiceArr: [],
            filterArr:[],
            implementCount:0,
        };
    },
    mounted() {
        this.selectProvince(this.chinaJson[0].children,this.chinaJson[0].code)
        this.filterData.forEach(e => {
            this.filterArr.push({})
        })
    },
    methods: {
        init(){
            this.titleIndex = -1;
            this.isMask = false;
            this.isDrop = false;
        },
        discard(){

        },
        openList(item, index) {
            this.type = item.type;
            this.submenu = item.submenu;
            this.choiceArr = [];
            if (item.type === "radio") {
                for (let i = 0; i < this.submenu.length; i++) {
                    this.choiceArr.push(this.submenu[i].submenu[0].name);
                }
            }
            setTimeout(() => {
                if (this.titleIndex === index) {
                    this.init()
                } else {
                    this.titleIndex = index;
                    this.isDrop = true;
                    this.isMask = true;
                }
            }, 100);
        },
        choice(index, indexChild, name) {
            this.choiceArr[index] = name;
            console.log(this.choiceArr);
            this.activeIndex = indexChild;
            this.submenu[index].submenu.forEach(e => {
                e.value = "";
            });
            this.submenu[index].submenu[indexChild].value = name;
        },
        hierarchyColumn(index, item) {
            this.copyFilterData[this.titleIndex].name = item.name
            this.titleName = item.name
            for (let i = 0; i < this.copyFilterData.length; i++){
                if (i !== 1){
                    this.filterArr[i] = {
                        id:this.copyFilterData[i].id,
                        value:this.copyFilterData[i].name
                    }
                }

            }
            this.$emit('change',this.filterArr)
            this.init()
        },
        selectProvince(province,code){
            this.province = province
            this.provinceCode = code
            this.selectCity(this.province[0].children,this.province[0].code)
        },
        selectCity(city,code){
            this.city = city
            this.cityCode = code
            this.selectArea(this.city[0].children,this.city[0].code)
        },
        selectArea(area,code){
            this.areaCode = code
            this.area = area
            this.selectStreet(this.area[0].children,this.area[0].code)
        },
        selectStreet(item,code){
            this.cityResult = ""
            this.streetCode = code
            let obj = {
                p:"",
                c:"",
                a:"",
                s:""
            }
            this.chinaJson.forEach( p => {
                if (this.provinceCode === p.code){
                    obj.p = p.name
                }
                p.children.forEach( c => {
                    if (this.cityCode === c.code){
                        obj.c = c.name
                    }
                    c.children.forEach( a => {
                        if (this.areaCode === a.code){
                            obj.a = a.name
                        }
                        a.children.forEach( s => {
                            if (this.streetCode === s.code){
                                obj.s = s.name
                            }
                        })
                    })
                })
            })
            for (const objKey in obj) {
                this.cityResult+=(obj[objKey]+'-')
            }
            let randomCity = ['贵州省', '湖南省', '四川省', '云南省', '河北省']
            let random = Math.floor(Math.random()*4)
            if (this.implementCount>0){
                this.filterArr[1] = {
                    id:"102",
                    value:randomCity[random]
                }
                this.$emit('change',this.filterArr)
            }
            this.init()
            this.implementCount ++
        }
    }
};
</script>

<style lang="scss" scoped>
.dropBox {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;

}

.fatherBox {
    position: relative;
    z-index: 9999999;
}

.dropDownBoxTop {
    position: fixed;
    width: 750rpx;
    min-height: 100rpx;
    max-height: 600rpx;
    top: var(--CustomBar);
    opacity: 0;
    transform: scale(1, 0);
    transform-origin: top;
    overflow: hidden;
    left: 0;
    transition: all 0.3s;
    z-index: 1;
    .list {
        transition: var(--delay);
        transform: translateX(-100%);
    }

    .listDrop {
        transform: translateX(0);
    }
}

.dropBox .dropDownBox {
    transform: scale(1);
    opacity: 1;
    border-radius: 0 0 20rpx 20rpx;
}
.mask{
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4);
}
</style>