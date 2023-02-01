<template>
	<view class="flex justify-between align-center text-bold text-lg margin-bottom">
		<view class="flex flex-twice align-center">
			<view class="border" :style="'background:' + borderColor"></view>
			<view class="flex align-center">
				<view v-if="leftInLeftIcon" :class="'cuIcon-'+leftInLeftIcon"></view>
				<view class="text-cut" :class="leftTextClass">{{ title }}</view>
                <slot name="titleRight"></slot>
				<view v-if="leftIcon" :class="'cuIcon-'+leftIcon"></view>
			</view>
		</view>
		<view @click="change" class="flex justify-end align-center" :class="rightClass">
			<view v-if="rightInLeftIcon" :class="'cuIcon-'+rightInLeftIcon"></view>
			<view class="text-sm text-cut" :class="rightTextClass">{{ rightText }}</view>
			<view v-if="rightIcon" style="font-size: 30rpx;line-height: 26rpx" class="margin-left-sm" :class="'cuIcon-'+rightIcon"></view>
		</view>
        <slot name="switch"></slot>
        <slot name="right"></slot>
	</view>
</template>

<script>
	export default {
		name: "fxb-boxTitle",
		props: {
			title: {
				type: String,
				default: '标题'
			},
			rightText: {
				type: String,
				default: null
			},
			rightTextClass: {
				type: String,
				default: null
			},
			rightIcon: {
				type: String,
				default: null
			},
			rightClass: {
				type: String,
				default: null
			},
			rightInLeftIcon: {
				type: String,
				default: null
			},
			leftTextClass: {
				type: String,
				default: null
			},
			leftIcon: {
				type: String,
				default: null
			},
			leftClass: {
				type: String,
				default: null
			},
			leftInLeftIcon: {
				type: String,
				default: null
			},
            borderColor: {
                type: String,
                default: '#E54D42'
            }
		},
        data(){
		    return{

            }
        },
        methods: {
			change(e) {
				this.$emit('change', e)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.border {
		width: 5px;
		height: 18px;
		border-radius: 4px;
		margin-right: 6px;
	}
    /deep/ .u-switch {
        width: 70px !important;

        &:before {
            content: '关闭';
            line-height: 50rpx;
            font-size: 28rpx;
            color: white;
            margin-right: 14rpx;
        }

        .u-switch__bg {
            width: 90rpx !important;

            &:before {
                content: '开启';
                line-height: 50rpx;
                font-size: 28rpx;
                margin-left: 16rpx;
                color: gray;
            }
        }

        .u-switch__node {
            transform: translateX(-42px) !important;
        }

        .u-switch__node--on {
            transform: translateX(0) !important;
        }
    }
</style>
