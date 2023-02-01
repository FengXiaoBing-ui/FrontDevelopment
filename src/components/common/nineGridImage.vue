<template>
    <view class="padding">
        <view class="box">
            <image @click="imageVuew" v-for="(item,index) in list" :key="index" class="item" style="width:100%;"
                   :src="item.src" mode="widthFix"></image>
        </view>
    </view>
</template>

<script>
export default {
    name: "SongList",
    props: ["list"],
    data() {
        return {};
    },
    methods: {
        imageVuew() {
            let urls = [];
            this.list.forEach(el => {
                urls.push(el.src);
            });
            uni.previewImage({
                urls,
                longPressActions: {
                    // itemList: ['发送给朋友', '保存图片', '收藏'],
                    success: function(data) {
                        // console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
                    },
                    fail: function(err) {
                        console.log(err.errMsg);
                    }
                }
            });
        }
    }
};
</script>
<style scoped lang="scss">
// #ifndef APP-NVUE
.box {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.item {
    padding: .2rem;
    margin: 0.2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    &:last-child:first-child {
        width: calc(100% - 0.4rem);
    }

    // 两个元素
    &:nth-last-child(2):first-child ~ &:nth-last-child(1), &:nth-last-child(2):first-child {
        width: calc(50% - 0.2rem * 3) !important;
    }

    // 三个元素
    &:nth-child(1):nth-last-child(3),
    &:nth-child(2):nth-last-child(2),
    &:nth-child(3):nth-last-child(1) {
        width: calc(100% / 3 - 0.2rem * 4) !important;
    }

    // 四个元素
    &:nth-child(1):nth-last-child(4),
    &:nth-child(2):nth-last-child(3),
    &:nth-child(3):nth-last-child(2),
    &:nth-child(4):nth-last-child(1) {
        width: calc(100% / 2 - 0.2rem * 4) !important;
    }

    // 5 9 元素
    &:nth-child(1):nth-last-child(n + 5),
    &:nth-child(1):nth-last-child(n + 5) ~ image {
        width: calc(100% / 3 - 0.2rem * 4) !important;
    }
}

// #endif
</style>
