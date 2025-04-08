<template>
	<view class="content">
		<view class="side-bars"></view>
		<!-- 顶部导航区域 -->
		<view class="nav-section">
			<view class="back-btn" @click="goBack">
				<!-- <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M14.1424 18.5863C14.5028 19.0909 15.2014 19.142 15.6241 18.6947L15.7116 18.602C16.0519 18.2418 16.0964 17.6739 15.8166 17.2593L11.4882 11.9671L15.8165 6.74074C16.0963 6.32615 16.0519 5.75822 15.7115 5.39795L15.624 5.30529C15.2014 4.85796 14.5028 4.90906 14.1423 5.41367L9.19925 11.3385C8.93359 11.7104 8.93358 12.2239 9.19925 12.5958L14.1424 18.5863Z"
						fill="#171718" />
				</svg> -->
				<image src="/static/arrow-left.png" mode="aspectFit" />
			</view>
			<view class="breadcrumb">
				<text class="breadcrumb-link" @click="goToAnnouncement">公告</text>
				<view class="breadcrumb-arrow">
					<!-- <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M10.8576 18.5863C10.4972 19.0909 9.79856 19.142 9.37595 18.6947L9.28841 18.602C8.94805 18.2418 8.90365 17.6739 9.18342 17.2593L13.5118 11.9671L9.1835 6.74074C8.90373 6.32615 8.94813 5.75822 9.28849 5.39795L9.37603 5.30529C9.79864 4.85796 10.4972 4.90906 10.8577 5.41367L15.8008 11.3385C16.0664 11.7104 16.0664 12.2239 15.8008 12.5958L10.8576 18.5863Z"
							fill="#999" />
					</svg> -->
					<image src="/static/arrow-right.png" mode="aspectFit" />
				</view>
				<text class="breadcrumb-current">{{announcementType}}</text>
			</view>
		</view>
		
		<!-- 公告内容区域 -->
		<view class="announcement-content">
			<view class="announcement-header">
				<text class="announcement-title">【iBox上新公告】「猪猪侠超能宝箱」今日上线！</text>
				<text class="announcement-time">2025-03-26 09:58:58</text>
			</view>
			
			<view class="announcement-image">
				<image src="/static/board.png" mode="aspectFill"></image>
			</view>
			
			<view class="announcement-text">
				<text class="greeting bold">亲爱的iBox用户：</text>
				<view class="letter-content">
					<text class="text-content bold">您好！</text>
					<text class="text-content">iBox平台<text class="highlight-red">《猪猪侠超能宝箱》</text>将于<text class="highlight-red">2025年3月26日16:00</text>正式开始采集，详情如下，敬请广大用户知悉！</text>
				</view>
				<view class="highlight-box">
					<text class="highlight-text">⭐藏品《猪猪侠超能宝箱》首发首创认证⭐</text>
				</view>
				<view class="info-list">
					<view class="info-item">
						<text class="dot">•</text>
						<text class="item-label">总发行数：</text>
						<text class="item-value highlight-red">26,000份</text>
					</view>
					<view class="info-item">
						<text class="dot">•</text>
						<text class="item-label">发行单价：</text>
						<text class="item-value highlight-red">99元</text>
					</view>
					<view class="info-item">
						<text class="dot">•</text>
						<text class="item-label">藏品名称：</text>
						<text class="item-value highlight-red">《猪猪侠超能宝箱》</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const announcementType = ref('')

onMounted(() => {
	const pages = getCurrentPages()
	const currentPage = pages[pages.length - 1]
	const options = currentPage.$page?.options
	
	if (options) {
		announcementType.value = options.tagName || '公告'
	}
})

const goToAnnouncement = () => {
	uni.navigateTo({
		url:'/pages/announcement/announcement'
	})
}

const goBack = () =>{
	uni.navigateBack()
}
</script>

<style>
.content {
	width: 100%;
	min-height: 100vh;
	background-color: #fff;
}

.side-bars {
	width: 100%;
	height: 88rpx;
}

.nav-section {
	width: 100%;
	padding: 0 30rpx;
	box-sizing: border-box;
}

.back-btn {
	margin-bottom: 20rpx;
	image{
		width: 48rpx;
		height: 48rpx;
	}
}

.breadcrumb {
	display: flex;
	align-items: center;
	margin-bottom: 30rpx;
}

.breadcrumb-link {
	font-size: 24rpx;
	color: #333;
}

.breadcrumb-arrow {
	margin: 0 8rpx;
	display: flex;
	align-items: center;
	image{
		width: 30rpx;
		height: 30rpx;
	}
}

.breadcrumb-current {
	font-size: 24rpx;
	color: #2F7CFF;
}

.announcement-content {
	padding: 0 30rpx 40rpx;
}

.announcement-header {
	margin-bottom: 30rpx;
}

.announcement-title {
	font-size: 36rpx;
	font-weight: bold;
	color: #333;
	display: block;
	margin-bottom: 16rpx;
	line-height: 1.4;
}

.announcement-time {
	font-size: 24rpx;
	color: #999;
}

.announcement-image {
	width: 100%;
	height: 220rpx;
	margin-bottom: 30rpx;
	border-radius: 12rpx;
	overflow: hidden;
}

.announcement-image image {
	width: 100%;
	height: 100%;
}

.announcement-text {
	font-size: 28rpx;
	color: #666;
	line-height: 1.6;
}

.greeting {
	display: block;
	margin-bottom: 20rpx;
	color: #333;
}

.text-content {
	display: block;
	margin-bottom: 20rpx;
}

.bold {
	font-weight: bold;
	color: #333;
}

.highlight-box {
	background-color: rgb(151, 57, 254);

	box-sizing: border-box;
	border-radius: 8rpx;
	margin: 60rpx 0;
	text-align: center;
}

.highlight-text {
	color: white;
	font-weight: bold;
}

.info-list {
	margin-top: 30rpx;
}

.info-item {
	display: flex;
	align-items: flex-start;
	margin-bottom: 50rpx;
}

.dot {
	color: #111;
	margin-right: 8rpx;
	
}

.item-label {
	color: #111;
}

.item-value {
	color: rgb(200, 72, 80);
	font-weight: bold;
}

.letter-content {
	padding-left: 48rpx;
}

.highlight-red {
	color: rgb(200, 72, 80);
	font-weight: bold;
}
</style>
