<template>
	<view class="content">
		<!-- 导航条 -->
		<view class="side-bars"></view>

		<view class="nav-bar">
			<view class="back-icon" @click="goBack">
				<!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M14.1424 18.5863C14.5028 19.0909 15.2014 19.142 15.6241 18.6947L15.7116 18.602C16.0519 18.2418 16.0964 17.6739 15.8166 17.2593L11.4882 11.9671L15.8165 6.74074C16.0963 6.32615 16.0519 5.75822 15.7115 5.39795L15.624 5.30529C15.2014 4.85796 14.5028 4.90906 14.1423 5.41367L9.19925 11.3385C8.93359 11.7104 8.93358 12.2239 9.19925 12.5958L14.1424 18.5863Z"
						fill="#171718" />
				</svg> -->
				<image src="/static/arrow-left.png" mode="" />
			</view>
			<view class="title">消息</view>
		</view>

		<!-- 消息列表 -->
		<view class="message-list">
			<!-- 系统消息 -->
			<view @click="toMessageInfo('系统消息')" class="message-item">
				<view class="message-icon">
					<image src="/static/avatar.png" mode="aspectFill"></image>
				</view>
				<view class="message-content">
					<text  class="message-title">系统消息</text>
				</view>
				<view class="message-arrow">
					<!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M10.8576 18.5863C10.4972 19.0909 9.79856 19.142 9.37595 18.6947L9.28841 18.602C8.94805 18.2418 8.90365 17.6739 9.18342 17.2593L13.5118 11.9671L9.1835 6.74074C8.90373 6.32615 8.94813 5.75822 9.28849 5.39795L9.37603 5.30529C9.79864 4.85796 10.4972 4.90906 10.8577 5.41367L15.8008 11.3385C16.0664 11.7104 16.0664 12.2239 15.8008 12.5958L10.8576 18.5863Z"
							fill="#171718" />
					</svg> -->
					<image src="/static/arrow-right.png" mode="" />
				</view>
			</view>

			<!-- 平台消息 -->
			<view @click="toMessageInfo('平台消息')"  class="message-item">
				<view class="message-icon">
					<image src="/static/activity.png" mode="aspectFill"></image>
				</view>
				<view class="message-content">
					<text class="message-title">平台消息</text>
				</view>
				<view class="message-arrow">
					<!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M10.8576 18.5863C10.4972 19.0909 9.79856 19.142 9.37595 18.6947L9.28841 18.602C8.94805 18.2418 8.90365 17.6739 9.18342 17.2593L13.5118 11.9671L9.1835 6.74074C8.90373 6.32615 8.94813 5.75822 9.28849 5.39795L9.37603 5.30529C9.79864 4.85796 10.4972 4.90906 10.8577 5.41367L15.8008 11.3385C16.0664 11.7104 16.0664 12.2239 15.8008 12.5958L10.8576 18.5863Z"
							fill="#171718" />
					</svg> -->
					<image src="/static/arrow-right.png" mode="" />
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
const toMessageInfo = (title) => {
	uni.navigateTo({
		url: `/pages/messageInfo/messageInfo?title=${title}`
	})
}
const goBack = () => {
	uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.content {
	width: 100%;
	height: 100vh;
	background-color: #fff;

	.side-bars {
		width: 100%;
		height: 88rpx;
	}

	.nav-bar {
		width: 100%;
		height: 88rpx;
		display: flex;
		align-items: center;
		position: relative;
		
		.back-icon {
			width: 24px;
			position: absolute;
			left: 30rpx;
			z-index: 1;
			image{
				width: 48rpx;
				height: 48rpx;
			}
		}
		
		.title {
			position: absolute;
			left: 0;
			right: 0;
			text-align: center;
			font-size: 32rpx;
			font-weight: bold;
			color: #333;
		}
	}

	.message-list {
		padding: 20rpx;

		.message-item {
			padding: 30rpx;
			display: flex;
			align-items: center;
			margin-bottom: 20rpx;

			.message-icon {
				width: 80rpx;
				height: 80rpx;
				border-radius: 40rpx;
				overflow: hidden;
				margin-right: 20rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.message-content {
				flex: 1;

				.message-title {
					font-size: 28rpx;
					color: #333;
					font-weight: bold;
				}
			}

			.message-arrow {
				.iconfont {
					font-size: 32rpx;
					color: #999;
				}
				image{
					width: 48rpx;
					height: 48rpx;
				}
			}
		}
	}
}
</style>
