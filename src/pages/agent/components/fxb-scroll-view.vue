<template>
    <view>
        <scroll-view scroll-x :scroll-left="productListNavIndex*60"
                     :scroll-with-animation="true" class="bg-white nav">
            <view class="flex text-center">
                <view class="cu-item flex-sub flex flex-direction u-flex-column align-center text-black"
                      :class="index===productListNavIndex?'active':''"
                      v-for="(item,index) in activityList"
                      :key="index" @tap="tabSelect" :data-id="index">
                    <!--          <image style="width: 50rpx;height: 50rpx;border-radius: 50%" src="https://picsum.photos/seed/picsum/200"></image>-->
                    <text>{{ item.title }}</text>
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    name: "scroll_View",
    props: {
        name: {
            type: String,
            default: ""
        },
        activityList: {
            type: Array,
            default:() => {
                return []
            }
        }
    },
    data() {
        return {
        };
    },
    computed: {
        ...mapState("index", ["productListNavIndex"])
    },
    methods: {
        ...mapMutations("index", ["setProductListNavIndex"]),
        tabSelect(e) {
            console.log(e.currentTarget.dataset.id);
            const tabCurrent = e.currentTarget.dataset.id;
            this.setProductListNavIndex(tabCurrent);
            // this.TabCur = e.currentTarget.dataset.id;
            // this.$emit("tabSelect", e);
        }
    }
};
</script>

<style lang="scss" scoped>
.cu-item {
    height: auto;
    display: flex;
    margin: 0 10rpx 0 0;
    padding: 0 22rpx 0 22rpx;
}
.active{
    font-size: 32rpx;
    color: #ff0000;
    font-weight: bold;
    border-bottom: 2px #ff0000 solid;
}
</style>
