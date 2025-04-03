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
		
		<view class="phone-box">
			13541245612
		</view>
		
		<view class="use-other-phone" @click="toLoginElse">其他手机登录</view>
		
		<button class="login-button">登录</button>
		
		<view class="notice">未注册号码将自动注册账号</view>
		
		<view class="confirm-box">
			<checkbox></checkbox>
			<view>
				<span>登录即同意</span>
				<span class="constract">《中国移动认证服务条款》和《用户协议》、《隐私政策》</span>
				<span>并使用本机号码登录</span>
			</view>
		</view>
	</view>
</template>

<script setup>
const toLoginElse = () =>{
	uni.navigateTo({
		url:'/pages/register/register'
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
	.phone-box{
		position: absolute;
		height: 40rpx;
		top: 768rpx;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 500;
		font-size: 48rpx;
		line-height: 40rpx;
		background: linear-gradient(259.45deg, #57E4FF -4.54%, #8B95F2 26.9%, #8B72EE 49.6%, #8556EA 68.49%, #4138E5 116.24%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}
	.use-other-phone{
		/* 其他手机号登录 */
		position:absolute;
		top: 872rpx;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
		width: 196rpx;
		height: 40rpx;
		/* Body/2/Medium */
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 500;
		font-size: 28rpx;
		line-height: 40rpx;
		/* identical to box height, or 143% */
		/* Primary */
		background: linear-gradient(259.45deg, #57E4FF -4.54%, #8B95F2 26.9%, #8B72EE 49.6%, #8556EA 68.49%, #4138E5 116.24%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
		/* Inside auto layout */
		flex: none;
		order: 0;
		flex-grow: 0;
	}
	.login-button{
		position:absolute;
		top: 982rpx;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 24rpx 40rpx;
		gap: 20rpx;
		
		width: 638rpx;
		height: 112rpx;

		background: linear-gradient(259.45deg, #57E4FF -4.54%, #8B95F2 26.9%, #8B72EE 49.6%, #8556EA 68.49%, #4138E5 116.24%);
		border-radius: 40rpx;
		color:white;
		flex: none;
		order: 0;
		flex-grow: 0;

	}
	.notice{
		padding: 0px;
		gap: 40rpx;
		position: absolute;
		width: 336rpx;
		height: 40rpx;
		left: 208rpx;
		top: 1146rpx;
		white-space: nowrap;	
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 500;
		font-size: 28rpx;
		line-height: 40rpx;
		background: linear-gradient(259.45deg, #57E4FF -4.54%, #8B95F2 26.9%, #8B72EE 49.6%, #8556EA 68.49%, #4138E5 116.24%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;

	}
	.confirm-box{
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		padding: 0px;
		gap: 12px;
		
		position: absolute;
		width: 646rpx;
		height: 80rpx;
		left: 48rpx;
		top: 1316rpx;
		view{
			span{
				font-size:22rpx;
				color:#565656;
				line-height: 40rpx;
		
			
				font-weight: 400;
				
				
			}
			.constract{
				/* Primary */
				background: linear-gradient(259.45deg, #57E4FF -4.54%, #8B95F2 26.9%, #8B72EE 49.6%, #8556EA 68.49%, #4138E5 116.24%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				background-clip: text;
				text-fill-color: transparent;
				
			}
		};
	}
}

::v-deep .uni-checkbox-input{ width: 30rpx !important; height: 30rpx !important; }
</style>
