<template>
    <view>
        <view class="flex justify-start threebox overhidde">
            <view class="padding-sm bg-white textover" @click="leaveOne()">
                <view class="padding-xs" style="color: red">{{ city.name }}</view>
            </view>
            <view v-if="leave==2||leave==3" class="padding-sm bg-white textover" mode="fade-lef">
                <u-transition :show="leave==2||leave==3">
                    <view v-for="item in twoList" :key="item.code" :style="item.code==twoCode?'color: red':''"
                          class="padding-xs" @click="leaveTwo(item)">
                        {{ item.name }}
                    </view>
                </u-transition>
            </view>
            <view v-if="leave==3" :show="leave==3" class="padding-sm bg-white textover" mode="fade-lef">
                <view v-for="item in threeList" :key="item.code" :style="item.code==threeCode?'color: red':''"
                      class="padding-xs"
                      @click="leaveThree(item)">
                    {{ item.name }}
                </view>
            </view>

        </view>
        <view class="bottontar">
            <view class="text-black">当前地址：{{ address }}</view>
            <button class="cu-btn round bg-red " @click="confirm">确认地址</button>
        </view>
    </view>
</template>

<script>
import china from "/src/utils/china.json";

export default {
    name: "threeStageSelector",
    computed: {
        address() {
            return this.city.name + this.area.name + this.street.name;
        }
    },
    data: function() {
        return {
            china,
            city: {
                code: "",
                name: ""
            },
            area: {
                code: "",
                name: ""
            },
            street: {
                code: "",
                name: ""
            },
            cityCode: "11",
            leave: 2,
            twoList: [],
            twoCode: "",
            threeList: [],
            threeCode: ""
        };
    },
    created() {
        this.getCity();
    },
    methods: {
        confirm(){

            if(this.area.name=''){
                uni.showToast({
                    title:'请选择区域',
                    icon:'error'
                })
                return
            }
            if(  this.street.name===''){
                uni.showToast({
                    title:'请选择街道',
                    icon:'error'
                })
                return
            }
            // let pages = getCurrentPages()
            // console.log(pages);
            // let prevPage = pages[0]
            // console.log( prevPage);
            // prevPage.$vm.getAddressValue(this.safetyForm)
            uni.navigateBack({
                delta: 1 // 返回的页面数
            })
        },
        getCity() {
            for (let i = 0; i < china.length; i++) {
                if (china[i].code == this.cityCode) {
                    this.city = china[i];
                    this.twoList = china[i].children[0].name == "市辖区" ? china[i].children[0].children : china[i].children;
                    return;
                }
            }
        },
        leaveOne() {
            this.leave = 2;
        },
        leaveTwo(value) {
            this.twoList.forEach((el) => {
                if (el.code == value.code) {
                    this.threeList = el.children;
                }
            });
            this.street.name=""
            this.twoCode = value.code;
            this.area = value;
            this.leave = 3;
        },
        leaveThree(value) {
            this.threeCode = value.code;
            this.street = value;
        }
    }
};
</script>

<style lang="scss" scoped>
.threebox {
    overflow: hidden;

    view {
        width: calc(100% / 3);
        height: auto;
    }
}

.bottontar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 1rem;
    width: 100%;
    background: white;
}
</style>
