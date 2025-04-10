<template>
	<view class="wrap">
		<view class="side-bars"></view>
		<view class="head">
			bobo有话说
		</view>
		<scroll-view scroll-y="true" :style="{ height: `${scrollViewHeight}px` }" class="box-content"
			:show-scrollbar="false">
			<view v-for="i in 5" class="card">
				<view class="left">
					<image src="/static/avatar.png" />
				</view>
				<view class="right">
					<view class="text-title1">
						<text>
							针对部分直播团体警告
						</text>
					</view>
					<view class="text-content">
						<text>
							针对恶意使用平台相关运营人员信息，以平台的名义进行承诺收益、承诺回购、非法集资、非法吸收公共存款；为了非法目的的进行拉人头，要求缴纳awdadaw
						</text>
					</view>
					<image src="/static/board.png"></image>
					<view class="right-bottom">
						<text>昨天 20:19</text>
						<view>
							<!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7765 3.10223C17.1761 2.67341 15.531 3.62316 15.1022 5.22356L14.7423 6.56695L9.95409 9.30305C9.22264 8.50232 8.16998 8 7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16C8.16998 16 9.22264 15.4977 9.95409 14.697L14.7423 17.4331L15.1022 18.7764C15.531 20.3768 17.1761 21.3266 18.7765 20.8978C20.3769 20.4689 21.3266 18.8239 20.8978 17.2235C20.469 15.6231 18.8239 14.6734 17.2235 15.1022L15.5018 15.5636L10.8915 12.9291C10.9625 12.631 11 12.3199 11 12C11 11.6801 10.9625 11.369 10.8915 11.0709L15.5018 8.43644L17.2235 8.89779C18.8239 9.32661 20.469 8.37687 20.8978 6.77647C21.3266 5.17607 20.3769 3.53106 18.7765 3.10223ZM16.7753 6.70712L17.7412 6.96594C18.2746 7.10888 18.823 6.7923 18.9659 6.25883C19.1089 5.72537 18.7923 5.17703 18.2588 5.03409C17.7254 4.89114 17.177 5.20773 17.0341 5.74119L16.7753 6.70712ZM5 12C5 13.1046 5.89543 14 7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12ZM17.7412 17.0341L16.7753 17.2929L17.0341 18.2588C17.177 18.7923 17.7254 19.1089 18.2588 18.9659C18.7923 18.823 19.1089 18.2746 18.9659 17.7412C18.823 17.2077 18.2746 16.8911 17.7412 17.0341Z" fill="#444"/>
							</svg> -->
							<image src="/static/share.png" mode="" />
							<text>分享</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
const scrollViewHeight = ref(0)
// 在组件准备好时执行计算
onBeforeMount(() => {
	const systemInfo = uni.getSystemInfoSync()
	const windowHeight = systemInfo.windowHeight
	const subtractHeight = uni.upx2px(336)
	const other = uni.upx2px(325)
	scrollViewHeight.value = windowHeight - subtractHeight
})
</script>

<style lang="scss" scoped>
.wrap {
	display: flex;
	flex-direction: column;

	.side-bars {
		width: 100%;
		height: 88rpx;
	}

	.head {
		width: 100%;
		height: 88rpx;
		background-color: #fff;
		text-align: center;
		line-height: 88rpx;
		font-weight: bold;
	}

	.box-content {
		width: 100%;
		background-color: rgb(245, 245, 245);
		box-sizing: border-box;
		padding: 20rpx 20rpx 0 20rpx;

		.card:last-child {
			border-radius: 20rpx 20rpx 0 0;
		}

		.card {
			background-color: #fff;
			width: 100%;
			border-radius: 20rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 20rpx;
			margin-bottom: 20rpx;

			.left {
				width: 10%;
				display: flex;
				justify-content: center;

				image {
					width: 50rpx;
					height: 50rpx;
				}
			}

			;

			.right {
				width: 85%;

				image {
					width: 170rpx;
					height: 170rpx;
					border-radius: 10rpx;
					margin-bottom: 10rpx;
				}

				.text-title1 {
					height: 50rpx;

					text {
						height: 50rpx;
						font-weight: bold;
						font-size: 25rpx;
					}
				}

				.text-content {
					max-height: 130rpx;
					margin-bottom: 20rpx;

					text {
						display: -webkit-box;
						-webkit-line-clamp: 3;
						-webkit-box-orient: vertical;
						overflow: hidden;
						text-overflow: ellipsis;
						font-size: 25rpx;
						color: rgb(125, 125, 125)
					}
				}

				.right-bottom {
					width: 100%;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;

					text {
						font-size: 20rpx;
						color: #999
					}
					view {
						display: flex;
						flex-direction: row;
						align-items: center;
						gap: 5rpx;
						
						image {
							width: 30rpx;
							height: 30rpx;
							transform: translateY(6rpx);
						}
						text {
							color: #444
						}
					}
				}
			}
		}
	}
}
</style>