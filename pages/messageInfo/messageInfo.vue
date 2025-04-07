<template>
	<view class="content">
		<view class="header">
			<view class="left">
				<view class="back-icon" @click="goBack">
					<!-- 这里预留svg图标位置 -->
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M14.1424 18.5863C14.5028 19.0909 15.2014 19.142 15.6241 18.6947L15.7116 18.602C16.0519 18.2418 16.0964 17.6739 15.8166 17.2593L11.4882 11.9671L15.8165 6.74074C16.0963 6.32615 16.0519 5.75822 15.7115 5.39795L15.624 5.30529C15.2014 4.85796 14.5028 4.90906 14.1423 5.41367L9.19925 11.3385C8.93359 11.7104 8.93358 12.2239 9.19925 12.5958L14.1424 18.5863Z"
							fill="#171718" />
					</svg>
				</view>
			</view>
			<view class="center">
				<text class="title">{{ messageTitle }}</text>
			</view>
			<view class="right">
				<text class="read-all">一键已读</text>
			</view>
		</view>
		<view class="empty-container">
			<image class="empty-image" src="/static/message-empty.png" mode="aspectFit"></image>
			<text class="empty-text">暂无消息</text>
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const messageTitle = ref('')

onMounted(() => {
	const pages = getCurrentPages()
	const currentPage = pages[pages.length - 1]
	const options = currentPage.$page.options
	messageTitle.value = options.title || '消息'
})

const goBack = () => {
	uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.content {
	width: 100%;
	height: 100vh;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	
	.header {
		width: 100%;
		height: 88rpx;
		display: flex;
		align-items: center;
		padding: 0 32rpx;
		box-sizing: border-box;
		
		.left {
			flex: 1;
			display: flex;
			align-items: center;
			
			.back-icon {
				width: 48rpx;
				height: 48rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		
		.center {
			flex: 2;
			display: flex;
			justify-content: center;
			align-items: center;
			
			.title {
				font-size: 32rpx;
				font-weight: bold;
				color: #333;
			}
		}
		
		.right {
			flex: 1;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			
			.read-all {
				font-size: 28rpx;
				color: rgb(47, 86, 217);
			}
		}
	}
	
	.empty-container {
		flex: 1;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		
		.empty-image {
			width: 320rpx;
			height: 320rpx;
			margin-bottom: 32rpx;
		}
		
		.empty-text {
			font-size: 28rpx;
			color: #999;
		}
	}
}
</style>
