<template>
    <view class="content">
        <u-radio-group v-if="radioAndCheck" v-model="radio" @change="radioChange" placement="column">
            <view v-for="(item, index) in dataList" :key="index" class="paySelect flex justify-between padding-tb u-border-bottom">
                <view class="flex align-center">
                    <text v-if="item.logoLeft" class="margin-right-sm">{{ item.logoLeft }}</text>
                    <view v-if="item.icon" style="width: 50rpx;height: 50rpx;background-repeat: no-repeat" class="t-icon margin-right-xs" :class="'t-icon-'+item.icon"></view>
                    <fxbImage v-if="item.logo" class="margin-right-sm" mode="widthFix" width="40" style="width: 40rpx;max-height: 60rpx" :src="item.logo"></fxbImage>
                    <text>{{ item.logoRight }}</text>
                </view>
                <view @click="instalments" class="flex align-center">
                    <text class="margin-right-lg">{{ item.radioName }}</text>
                    <view style="width: 50rpx">
                        <text v-if="item.instalments" style="font-size: 34rpx" class="cuIcon-right text-gray"></text>
                        <u-radio
                            v-else
                            activeColor="red"
                            :name="item.radioName?item.radioName:item.logoRight"
                        ></u-radio>
                    </view>
                </view>
            </view>
        </u-radio-group>
        <u-checkbox-group v-else v-model="checkValue" @change="checkChange" placement="column">
            <view v-for="(item, index) in dataList" :key="index" class="paySelect flex justify-between padding-tb u-border-bottom">
                <view class="flex align-center">
                    <text v-if="item.logoLeft" class="margin-right-sm">{{ item.logoLeft }}</text>
                    <view v-if="item.icon" style="width: 50rpx;height: 50rpx;background-repeat: no-repeat" class="t-icon margin-right-xs" :class="'t-icon-'+item.icon"></view>
                    <fxbImage v-if="item.logo" class="margin-right-sm" mode="widthFix" style="width: 40rpx;max-height: 60rpx" :src="item.logo"></fxbImage>
                    <text>{{ item.logoRight }}</text>
                </view>
                <view class="flex align-center">
                    <text v-if="item.radioName" class="margin-right-lg">{{ item.radioName }}</text>
                    <view style="width: 50rpx">
                        <u-checkbox
                            activeColor="red"
                            :name="item.radioName?item.radioName:item.logoRight"
                        ></u-checkbox>
                    </view>
                </view>
            </view>
        </u-checkbox-group>
    </view>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
export default {
    name: "paySelect",
    components:{
        fxbImage
    },
    props: {
        //{ logo:"",logoLeft:"",logoRight:"",radioName:"" }
        dataList: {
            type: Array,
            default: () => {
                return [];
            },
        },
        radioValue :{
            type: String,
            defaults: ""
        },
        radioAndCheck:{
            type: Boolean,
            default:true
        },
    },
    data() {
        return {
            radio: this.radioValue,
            checkValue:[]
        };
    },
    methods: {
        instalments(){
          uni.redirectTo({
              url:"/pages/admin/adminContract/instalments"
          })
        },
        radioChange(n) {
            console.log("radioChange", n);
            this.$emit("radioChange", n);
        },
        checkChange(e){
            console.log(e);
            this.$emit("checkChange", e);
        }
    },
};
</script>

<style lang="scss" scoped>
.paySelect {
    &:last-child {
        border: none;
    }
}
</style>
