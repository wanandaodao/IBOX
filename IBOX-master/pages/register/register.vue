<template>
	<view class="content">
		<view class="status_bar">
		    <!-- 这里是状态栏 -->
		</view>
		
		<view class="img-box">
			<view class="img1"></view>
			<view class="img2"></view>
			<view class="img3"></view>
		</view>
		
		<view class="register-box">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M3.01732 8C3.01732 8 3.0037 8.16614 3.01098 8.24824C3 8.76331 3 9.34357 3 10V14C3 16.8284 3 18.2426 3.87868 19.1213C4.75736 20 6.17157 20 9 20H15C17.8284 20 19.2426 20 20.1213 19.1213C21 18.2426 21 16.8284 21 14V10C21 9.34357 21 8.76331 20.989 8.24824C20.9963 8.16614 20.9827 8 20.9827 8C20.9359 6.44655 20.7626 5.51998 20.1213 4.87868C19.2426 4 17.8284 4 15 4H9C6.17157 4 4.75736 4 3.87868 4.87868C3.23738 5.51998 3.06413 6.44655 3.01732 8ZM9 6H15C16.4708 6 17.3726 6.00425 18.0253 6.092C18.599 6.16913 18.6948 6.27883 18.7062 6.29185L18.7071 6.29289L18.7082 6.29383C18.7212 6.3052 18.8309 6.40098 18.908 6.97468C18.9509 7.29398 18.9739 7.67291 18.9861 8.1489C18.945 8.36744 18.8144 8.56178 18.622 8.682L14.65 11.1645C13.8592 11.6587 13.3301 11.988 12.8935 12.2015C12.4778 12.4047 12.2242 12.4623 12 12.4623C11.7758 12.4623 11.5222 12.4047 11.1065 12.2015C10.6699 11.988 10.1408 11.6587 9.35001 11.1645L5.378 8.682C5.18564 8.56178 5.05505 8.36744 5.01389 8.1489C5.02613 7.67291 5.04907 7.29398 5.092 6.97468C5.16913 6.40099 5.27883 6.3052 5.29185 6.29383L5.29289 6.29289L5.29383 6.29185C5.3052 6.27883 5.40099 6.16913 5.97468 6.092C6.62738 6.00425 7.52925 6 9 6ZM19 10.8042V14C19 15.4708 18.9958 16.3726 18.908 17.0253C18.8309 17.599 18.7212 17.6948 18.7082 17.7062L18.7071 17.7071L18.7062 17.7082C18.6948 17.7212 18.599 17.8309 18.0253 17.908C17.3726 17.9958 16.4708 18 15 18H9C7.52925 18 6.62738 17.9958 5.97468 17.908C5.40098 17.8309 5.3052 17.7212 5.29383 17.7082L5.29289 17.7071L5.29185 17.7062C5.27883 17.6948 5.16913 17.599 5.092 17.0253C5.00425 16.3726 5 15.4708 5 14V10.8042L8.33294 12.8873C9.06958 13.3478 9.68679 13.7335 10.228 13.9982C10.8007 14.2782 11.3638 14.4623 12 14.4623C12.6362 14.4623 13.1993 14.2782 13.772 13.9982C14.3132 13.7335 14.9304 13.3478 15.6671 12.8873L19 10.8042Z" fill="#EAE9E9"/>
			</svg>
			<input type="number" placeholder="电话号码"/>
		</view>
		
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.content{
	width: 100%;
	height: 100vh;
	.status_bar {
	    height: 88rpx;
	    width: 100%;
	}
	.img-box{
		position: absolute;
		width: 638rpx;
		height: 524rpx;
		left: 56rpx;
		top: 140rpx;
		.img1{
			position: absolute;
			width: 154rpx;
			height: 168rpx;
			background-image: url('/static/login-img3.png');
			background-size: cover;
			top: 245rpx;
			left: 30rpx;
			transform: matrix(-0.93, 0.36, 0.36, 0.93, 0, 0);
		}
		.img2{	
			position: absolute;
			width: 358rpx;
			height: 415.28rpx;
			top:53rpx;
			left: 150rpx;
			background-image: url('/static/login-img4.png');
			background-size: cover;
			transform: matrix(0.92, -0.4, 0.41, 0.91, 0, 0);
	
		}
		.img3{
			
			position: absolute;
			width: 108.22rpx;
			height: 77.84rpx;
			top: 60rpx;
			left: 520rpx;
			background: url('/static/login-img5.png');
			background-size: cover;
			transform: matrix(-1, 0.08, 0.08, 1, 0, 0);
	
		}
	}
	.register-box{
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 30rpx 40rpx;
		gap: 20rpx;
		position: absolute;
		width: 638rpx;
		height: 108rpx;
		left: 42rpx;
		top: 774rpx;
		border: 2rpx solid #EAE9E9;
		border-radius: 40rpx;
	}
}
</style>
