<template>
	<view class="content">
		<!-- 头部区域 -->
		<view class="header">
			<view class="back-btn" @click="goBack">
				<image src="/static/arrow-left.png" mode="aspectFit" class="back-icon"></image>
			</view>
			<view class="record-btn" @click="goRecord">
				<text>中奖记录</text>
			</view>
		</view>
		
		<!-- 标题区域 -->
		<view class="title-container">
			<text class="title-text">抽奖</text>
			<text class="title-text">活动</text>
		</view>
		
		<!-- 右侧边栏 -->
		<view class="sidebar">
			<view class="sidebar-btn">
				<text class="sidebar-text">活动规则</text>
			</view>
		</view>
		
		<!-- 抽奖区域 -->
		<view class="lottery-container">
			<iliya-capsule-toys
				:giftRes="giftRes"
				:resBallImg="resBallImg"
				:disabled="disabled"
				:resLv="2"
				@start="start"
				@canNotStart="canNotStart"
				@ok="ok"
			/>
		</view>

		<!-- 信息区域 -->
		<view class="info-container">
			<view class="draw-info">
				<view class="draw-count">
					<text class="draw-text">当前已抽</text>
					<text class="count-num">{{ drawCount }}</text>
					<text class="draw-text">次</text>
				</view>
				<view class="refresh-icon">
					<text class="iconfont icon-refresh">↻</text>
				</view>
			</view>
			
			<view class="prize-table">
				<view class="table-header">
					<text class="header-item">名称</text>
					<text class="header-item">已中/总数</text>
					<text class="header-item">对应奖品</text>
				</view>
				<view v-for="(prize, index) in prizeList" :key="index" class="prize-item">
					<text class="prize-name">{{ prize.name }}</text>
					<text class="prize-count">{{ prize.count }}/{{ prize.total }}</text>
					<text class="prize-product">{{ prize.product }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import iliyaCapsuleToys from '@/uni_modules/iliya-capsule-toys/components/iliya-capsule-toys/iliya-capsule-toys.vue';
import { ref } from 'vue';

const giftRes = ref({
	giftName: null,
	url: ""
});
const giftImgList = ref(Array(10).fill('/static/egg1.png'));
const resBallImg = ref('');
const disabled = ref(false);
const resLv = ref(1);
const drawCount = ref(4000);
const prizeList = ref([
	{ name: '一等奖', count: 168, total: 188, product: '万能卡-第12日' }
]);

const start = (fn) => {
	giftRes.value.giftName = '预制菜';
	giftRes.value.url = '/static/egg1.png';
	fn();
};

const canNotStart = () => {
	uni.showModal({
		title: '提示',
		content: '余额不足'
	});
};

const ok = () => {
	console.log('确认中奖信息');
};

// 返回上一页
const goBack = () => {
	uni.navigateTo({
		url: '/pages/home/home'
	});
};

// 跳转到中奖记录
const goRecord = () => {
	uni.navigateTo({
		url: '/pages/lottery/record'
	});
};
</script>

<style lang="scss" scoped>
.content {
	width: 100%;
	height: 100vh;
	background: linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4);
	display: flex;
	flex-direction: column;
	position: relative;
	
	// 头部区域
	.header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		margin-top: 50rpx;
		
		.back-btn {
			width: 80rpx;
			height: 80rpx;
			background-color: rgba(0, 0, 0, 0.5);
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
			
			.back-icon {
				width: 40rpx;
				height: 40rpx;
				filter: brightness(100);
			}
		}
		
		.record-btn {
			background-color: rgba(0, 0, 0, 0.5);
			color: white;
			padding: 15rpx 30rpx;
			border-radius: 50rpx;
			font-size: 28rpx;
		}
	}
	
	// 标题区域
	.title-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20rpx;
		margin-bottom: 30rpx;
		
		.title-text {
			font-size: 70rpx;
			font-weight: 900;
			color: white;
			font-family: "Microsoft YaHei", sans-serif;
			text-shadow: 
				0 2rpx 0 #cef, 
				0 4rpx 0 #bcf, 
				0 6rpx 0 #acf,
				0 8rpx 8rpx rgba(61, 110, 255, 0.6),
				0 12rpx 10rpx rgba(0, 72, 255, 0.4),
				0 15rpx 15rpx rgba(0, 51, 255, 0.2);
			letter-spacing: 4rpx;
			background: linear-gradient(to bottom, #ffffff, #a0c4ff);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			transform: perspective(500rpx) rotateX(5deg);
			filter: drop-shadow(0 4rpx 6rpx rgba(50, 120, 255, 0.7));
		}
		
		.mascot-img {
			width: 100rpx;
			height: 100rpx;
			margin: 0 20rpx;
		}
	}
	
	// 右侧边栏
	.sidebar {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;
		
		.sidebar-btn {
			background-color: #4e7cff;
			border-radius: 20rpx 0 0 20rpx;
			padding: 30rpx 15rpx;
			writing-mode: vertical-rl;
			text-orientation: upright;
			color: white;
			font-size: 32rpx;
			font-weight: bold;
			box-shadow: -2rpx 4rpx 8rpx rgba(0, 0, 0, 0.2);
		}
	}
	
	.status-bar {
		width: 100%;
		height: 88rpx;
	}
	
	.lottery-container {
		width: 100%;
		position: relative;
		z-index: 5;
	}
	
	.info-container {
		width: 100%;
		padding: 0 40rpx;
		box-sizing: border-box;
		margin-top: 50rpx;
	}
	
	.draw-info {
		background: linear-gradient(to right, #f0f6ff, #e6eeff);
		border-radius: 20rpx 20rpx 0 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
		box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
		border-bottom: 2rpx solid #e0e0e0;
		
		.draw-count {
			display: flex;
			align-items: center;
			
			.draw-text {
				color: #335eea;
				font-size: 28rpx;
			}
			
			.count-num {
				margin: 0 10rpx;
				background-color: #335eea;
				color: white;
				padding: 4rpx 12rpx;
				border-radius: 8rpx;
				font-size: 28rpx;
				font-weight: bold;
			}
		}
		
		.refresh-icon {
			color: #335eea;
			font-size: 36rpx;
		}
	}
	
	.prize-table {
		background: linear-gradient(to right, #f0f6ff, #e6eeff);
		border-radius: 0 0 20rpx 20rpx;
		overflow: hidden;
		box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
		margin-bottom: 20rpx;
		
		.table-header {
			display: flex;
			justify-content: space-between;
			padding: 20rpx;
			border-bottom: 2rpx solid #e0e0e0;
			background-color: rgba(230, 238, 255, 0.6);
			
			.header-item {
				flex: 1;
				text-align: center;
				color: #335eea;
				font-size: 26rpx;
			}
		}
		
		.prize-item {
			display: flex;
			justify-content: space-between;
			padding: 20rpx;
			
			.prize-name, .prize-count, .prize-product {
				flex: 1;
				text-align: center;
				font-size: 26rpx;
				color: #333;
			}
		}
	}
}
</style>
