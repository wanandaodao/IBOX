<template>
	<view class="content">
		<view class="status_bar">
		    <!-- 这里是状态栏 -->
		</view>
		
		<view class="head-img">
			<image src="/static/login-img3.png" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.content{
	width: 100%;
	height: 100vh;
	.status_bar{
		width: 100%;
		height: 88rpx;
	}
	.head-img{
		width: 544rpx;
		height: 448rpx;
		position: absolute;
		left:50%;
		transform: translateX(-50%);
		image{
			height: 350rpx;
		}
	}
}
</style>
