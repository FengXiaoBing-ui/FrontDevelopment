<template>
	<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			:autoplay="true" interval="5000" duration="500">
		<swiper-item v-for="(item,index) in swiperList" :key="index" @click="pageTo()">
			<fxbImage :src="item.url" mode="aspectFill" v-if="item.type=='image'"></fxbImage>
			<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover"
				   v-if="item.type=='video'"></video>
		</swiper-item>
	</swiper>
</template>

<script>
import fxbImage from "/src/components/fxb/fxb-image"
export default {
	name: "win-index-swiper",
    components:{
        fxbImage
    },
	props: {
		swiperList: {
			type: Array,
			default: () => {
				return []
			}
		}
	},
	data() {
		return {
			dotStyle: false,
		}
	},
	methods: {
	    pageTo(){
	        uni.navigateTo({
                url:'pages/hotActivity/activityDetails'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.screen-swiper {
    height: 660rpx !important;
}
image {
    overflow: hidden;
}
</style>
