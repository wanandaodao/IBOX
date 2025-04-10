<template>
	<view class="content">
		<view class="status_bar">
		    <!-- 这里是状态栏 -->
		</view>
		<view class="login-img-box">
			<view class="login-img1"></view>
			<view class="login-img2"></view>
		</view>
		
		<view class="welcome-box">
			<view class="title-box">
				<text>Welcome To</text>
				<text class="box">BOX</text>
				<text>Create and Sell your NTFs in 1 seconds</text>
			</view>
		</view>
		<button @click="toLogin">开始</button>
	</view>
</template>

<script setup>
const toLogin = () =>{
	uni.reLaunch({
		url:'/pages/login/login'
	})
}
</script>

<style lang="scss" scoped>
.content{
	width: 100%;
	height: 100vh;
	.status_bar {
	    height: 88rpx;
	    width: 100%;
	}
	.login-img-box{
		position: relative;
		width: 100%;
		height: 888rpx;
		.login-img1{
			position: absolute;
			width: 579.84rpx;
			height: 564.24rpx;
			left: 50%;
			top: 128rpx;
			transform:translateX(-50%) rotate(22.26deg) ;
			background-image: url('/static/login-img1.png');
			background-size: cover;
		}
		.login-img2{
			position: absolute;
			width: 220.34rpx;
			height: 244.82rpx;
			background: url('/static/login-img-2.png');
			transform: rotate(-156.63deg);
			background-size: cover;
			bottom: 0;
			right: 70rpx;
		}
	}
	.welcome-box{
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		width: 612rpx;
		height: 272rpx;
		left: 68rpx;
		top: 1040rpx;
		.title-box{
			width: 402rpx;
			height: 208rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.box{
				/* BOX */
				width: 136rpx;
				height: 104rpx;
				font-family: 'Poppins';
				font-style: normal;
				font-weight: 600;
				font-size: 64rpx;
				line-height: 104rpx;
				text-transform: capitalize;
				background: linear-gradient(264.93deg, #38DCFC -8.23%, #9F72EE 33.86%, #A956EA 53.75%, #9C4EE9 72.09%, #4138E5 114.85%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
			text:first-of-type{
				font-weight: 600;
				font-size:64rpx;
				line-height: 104rpx;
				display: block;
			}
			text:last-of-type{
				font-size:32rpx;
				color: #565656;
				white-space: nowrap;
				line-height: 48rpx;
				font-weight: 400;
				height: 48rpx;		
				width: 612rpx;
				font-family: 'Poppins';
				font-style: normal;
				text-align: center;
				flex: none;
				order: 1;
				flex-grow: 0;
			}
		}
	}
	button{
		/* Button */
		
		/* Auto layout */
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 24rpx 40rpx;
		gap: 20rpx;
		position: absolute;
		width: 638rpx;
		height: 112rpx;
		top: 1424rpx;
		left: 50%;
		transform: translateX(-50%);
		/* Primary */
		background: linear-gradient(259.45deg, #57E4FF -4.54%, #8B95F2 26.9%, #8B72EE 49.6%, #8556EA 68.49%, #4138E5 116.24%);
		border-radius: 40rpx;
		color: white;
		font-weight: 600;
	}
}
</style>
