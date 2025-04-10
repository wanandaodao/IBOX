<template>
	<view class="content">
		<!-- 安全中心主页面 -->
		<view v-if="!showPasswordPage">
			<view class="status_bar"></view>
			<view class="nav_bar">
				<view class="back_icon" @click="navigateBack">
					<image src="/static/arrow-left.png" mode="aspectFit"></image>
				</view>
				<view class="title">安全中心</view>
			</view>
			
			<view class="menu_list">
				<view class="menu_item" @click="showSetPassword">
					<view class="item_left">设置等级密码</view>
					<view class="item_right">
						<image src="/static/arrow-right.png" mode="aspectFit"></image>
					</view>
				</view>
				
				<view class="menu_item">
					<view class="item_left">匿名寄售</view>
					<view class="item_right">
						<switch :checked="false" color="#4e6ef2" />
					</view>
				</view>
			</view>
			
			<view class="token_section">
				<view class="token_info">
					<view class="token_text">本账号持仓信息口令</view>
					<view class="copy_btn_wrap">
						<button class="copy_btn" @click="copyToken">复制</button>
					</view>
				</view>
				<view class="token_warning">口令中包含个人持仓信息，请谨慎操作！</view>
				
				<button class="generate_btn" @click="generateIdentityCode">生成身份识别码</button>
			</view>
		</view>
		
		<!-- 修改寄售密码页面 -->
		<view v-else class="password_page">
			<view class="status_bar"></view>
			<view class="password_nav_bar">
				<view class="nav_left">
					<view class="back_icon" @click="hideSetPassword">
						<image src="/static/arrow-left.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="title">修改寄售密码</view>
				<view class="nav_right">
				</view>
			</view>
			
			<view class="password_form">
				<view class="form_item">
					<view class="form_label">设置新寄售密码</view>
					<view class="form_input">
						<input type="password" password maxlength="6" placeholder="请输入6位数字密码" placeholder-class="input_placeholder" v-model="newPassword"/>

					</view>
				</view>
				
				<view class="form_item">
					<view class="form_label">确认寄售密码</view>
					<view class="form_input">
						<input type="password" password maxlength="6" placeholder="请输入6位数字密码" placeholder-class="input_placeholder" v-model="confirmPassword"/>

					</view>
				</view>
				
				<button class="confirm_btn" @click="confirmSetPassword">确认</button>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	
	const showPasswordPage = ref(false);
	const newPassword = ref('');
	const confirmPassword = ref('');
	
	const navigateBack = () => {
		uni.navigateBack();
	}
	
	const showSetPassword = () => {
		showPasswordPage.value = true;
		// 清空密码输入
		newPassword.value = '';
		confirmPassword.value = '';
	}
	
	const hideSetPassword = () => {
		showPasswordPage.value = false;
	}
	
	const confirmSetPassword = () => {
		// 判断两次密码是否一致
		if (newPassword.value !== confirmPassword.value) {
			uni.showToast({
				title: '两次密码不一致',
				icon: 'none'
			});
			return;
		}
		
		// 判断密码是否为空
		if (!newPassword.value || !confirmPassword.value) {
			uni.showToast({
				title: '密码不能为空',
				icon: 'none'
			});
			return;
		}
		
		// 判断密码是否为6位数字
		if (!/^\d{6}$/.test(newPassword.value)) {
			uni.showToast({
				title: '请输入6位数字密码',
				icon: 'none'
			});
			return;
		}
		
		// 密码一致且验证通过，设置成功
		uni.showToast({
			title: '密码设置成功',
			icon: 'none'
		});
		showPasswordPage.value = false;
	}
	
	const copyToken = () => {
		uni.showToast({
			title: '复制成功',
			icon: 'none'
		});
	}
	
	const generateIdentityCode = () => {
		uni.showToast({
			title: '已生成身份识别码',
			icon: 'none'
		});
	}
</script>

<style lang="scss" scoped>
	.content{
		width: 100%;
		height: 100vh;
		background-color: rgb(245, 245, 245);
		
		.status_bar{
			width: 100%;
			height: 88rpx;
			background-color: #fff;
		}
		
		.nav_bar {
			display: flex;
			align-items: center;
			flex-direction: row;
			justify-content: center;
			height: 88rpx;
			padding: 0 30rpx;
			background-color: #fff;
			
			.back_icon {
				width: 60rpx;
				height: 60rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				position: absolute;
				left: 30rpx;
				image {
					width: 40rpx;
					height: 40rpx;
				}
			}
			
			.title {
				font-size: 36rpx;
				font-weight: 500;
			}
		}
		
		.menu_list {
			background-color: #fff;
			
			.menu_item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 30rpx;
				border-bottom: 2rpx solid #f5f5f5;
				
				.item_left {
					font-size: 30rpx;
				}
				
				.item_right {
					color: #999;
					
					image {
						width: 32rpx;
						height: 32rpx;
					}
				}
			}
		}
		
		.token_section {
			margin-top: 20rpx;
			padding: 20rpx 30rpx;
			background-color: #fff;
			
			.token_info {
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				.token_text {
					font-size: 30rpx;
					color: #333;
				}
				
				.copy_btn_wrap {
					display: flex;
					align-items: center;
				}
				
				.copy_btn {
					font-size: 26rpx;
					color: #fff;
					background-color: #4e6ef2;
					height: 60rpx;
					line-height: 60rpx;
					padding: 0 30rpx;
					border-radius: 30rpx;
					margin: 0;
				}
			}
			
			.token_warning {
				font-size: 26rpx;
				color: #ff6b6b;
				margin: 10rpx 0 40rpx;
			}
			
			.generate_btn {
				width: 100%;
				height: 90rpx;
				line-height: 90rpx;
				background-color: #4e6ef2;
				color: #fff;
				font-size: 32rpx;
				border-radius: 45rpx;
				margin-top: 40rpx;
			}
		}
		
		.password_page {
			background-color: #fff;
			min-height: 100vh;
			
			.password_nav_bar {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 88rpx;
				padding: 0 30rpx;
				background-color: #fff;
				position: relative;
				
				.nav_left {
					display: flex;
					align-items: center;
					position: absolute;
					left: 30rpx;
					z-index: 10;
					
					.back_icon {
						width: 60rpx;
						height: 60rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						image {
							width: 40rpx;
							height: 40rpx;
						}
					}
				}
				
				.nav_right {
					position: absolute;
					right: 30rpx;
					z-index: 10;
				}
				
				.title {
					position: absolute;
					left: 0;
					right: 0;
					text-align: center;
					font-size: 36rpx;
					font-weight: 500;
				}
			}
			
			.password_form {
				padding: 40rpx 30rpx;
				
				.form_item {
					margin-bottom: 40rpx;
					
					.form_label {
						font-size: 30rpx;
						font-weight: 500;
						color: #333;

					}
					
					.form_input {
						position: relative;
						border-bottom: 2rpx solid #eee;
						padding-bottom: 20rpx;
						
						input {
							width: 100%;
							height: 80rpx;
							font-size: 28rpx;
						}
						
						.input_placeholder {
							color: #ccc;
							font-size: 28rpx;
						}
						
						.eye_icon {
							position: absolute;
							right: 20rpx;
							top: 20rpx;
							color: #999;
						}
					}
				}
				
				.confirm_btn {
					width: 100%;
					height: 90rpx;
					line-height: 90rpx;
					background-color: #4e6ef2;
					color: #fff;
					font-size: 32rpx;
					border-radius: 45rpx;
					margin-top: 120rpx;
				}
			}
		}
	}
</style>
