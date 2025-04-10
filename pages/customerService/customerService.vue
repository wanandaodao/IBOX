<template>
	<view class="content">
		<view class="status_bar" style="background-color: #fff;"></view>
		<!-- 顶部导航栏 -->
		<view class="nav-bar">
			<view class="back-btn" @click="goBack">
				<image src="/static/arrow-left.png" mode="aspectFit" class="back-icon"></image>
			</view>
			<view class="title">在线客服</view>
		</view>
		
		<!-- 聊天内容区域 -->
		<scroll-view 
			scroll-y 
			class="chat-container" 
			:scroll-top="scrollTopValue" 
			scroll-with-animation 
			id="chatContainer"
			:style="{ height: chatContainerHeight + 'px' }"
			:scroll-into-view="scrollIntoView"
			:show-scrollbar="false"
		>
			<!-- 蓝色标题区 -->
			<view class="blue-header">在线客服</view>
			
			<!-- 时间戳 -->
			<view class="timestamp">今天 {{currentTime}}</view>
			
			<!-- 聊天消息区域 -->
			<block v-for="(item, index) in messages" :key="index">
				<!-- 客服消息 -->
				<view class="message service-message" v-if="item.type === 'service'" :id="'msg-'+index">
					<image src="/static/avatar.png" class="avatar"></image>
					<view class="message-content">
						{{ item.content }}
					</view>
				</view>
				
				<!-- 用户消息 -->
				<view class="message user-message" v-if="item.type === 'user'" :id="'msg-'+index">
					<view class="message-content">
						{{ item.content }}
					</view>
				</view>
			</block>
			
			<!-- 滚动锚点 -->
			<view id="msg-bottom" style="height: 2rpx;"></view>
			
			<!-- 猜你想问区域 -->
			<view class="guess-questions">
				<view class="guess-title">
					<view class="question-icon">?</view>
					猜你想问
				</view>
				<view class="question-list">
					<view class="question-item" v-for="(question, index) in commonQuestions" :key="index" @click="sendQuestion(question)">
						{{question}}
					</view>
				</view>
			</view>
			
			<!-- 社区投诉 -->
			<view class="complaint">
				<image src="/static/complaint.png" class="mail-icon"></image>
				<view class="complaint-text">社区投诉</view>
			</view>
		</scroll-view>
		
		<!-- 底部输入区域 -->
		<view class="input-area">
			<view class="input-box">
				<input type="text" placeholder="请简短描述您的问题" v-model="inputMessage" @confirm="sendMessage" />
			</view>
			<view class="add-btn" @click="sendMessage">
				<view class="add-icon"></view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

// 返回首页
const goBack = () => {
	uni.navigateBack()
}

// 当前时间
const currentTime = ref('11:44:07');
// 输入框消息
const inputMessage = ref('');
// 聊天消息列表
const messages = ref([
	{
		type: 'service',
		content: '我什么都不懂不要问我'
	}
]);
// 常见问题列表
const commonQuestions = ref([
	'提现什么时候到/提现未到账/提现被冻结?',
	'钱包C开户被驳回/开户意愿确认失败?',
	'无法购买/购买提示"暂无资格，请联系在线..."',
	'怎么下载? 怎么邀请别人? 邀请码在哪?',
	'怎么加群? 微信群? QQ群?',
	'为什么一直提示操作频繁?'
]);
// 滚动位置
const scrollTopValue = ref(0);
// 聊天容器高度
const chatContainerHeight = ref(0);
// 滚动到指定视图
const scrollIntoView = ref('');

// 发送消息
const sendMessage = () => {
	if (!inputMessage.value.trim()) return;
	
	// 添加用户消息
	messages.value.push({
		type: 'user',
		content: inputMessage.value
	});
	
	// 清空输入框
	const sentMessage = inputMessage.value;
	inputMessage.value = '';
	
	// 客服自动回复
	setTimeout(() => {
		messages.value.push({
			type: 'service',
			content: '我什么都不懂不要问我'
		});
		
		// 仅在客服回复后滚动到底部
		scrollTopValue.value+=9999;
	}, 500);
}

// 发送预设问题
const sendQuestion = (question) => {
	inputMessage.value = question;
	sendMessage();
}


// 计算聊天容器高度
const calculateChatContainerHeight = () => {
	const systemInfo = uni.getSystemInfoSync();
	const windowHeight = systemInfo.windowHeight;
	// 状态栏高度(px) + 导航栏高度(90rpx转px) + 输入区域高度(120rpx转px)
	const statusBarHeight = systemInfo.statusBarHeight;
	const navBarHeight = 90 * (systemInfo.windowWidth / 750); // 将rpx转换为px
	const inputAreaHeight = 120 * (systemInfo.windowWidth / 750); // 将rpx转换为px
	
	// 计算聊天区域高度
	chatContainerHeight.value = windowHeight - statusBarHeight - navBarHeight - inputAreaHeight;
}

// 生命周期钩子
onMounted(() => {
	// 获取当前时间
	const now = new Date();
	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');
	const seconds = now.getSeconds().toString().padStart(2, '0');
	currentTime.value = `${hours}:${minutes}:${seconds}`;
	
	// 计算聊天容器高度
	calculateChatContainerHeight();
	
	// 监听窗口大小变化，重新计算高度
	window.addEventListener('resize', calculateChatContainerHeight);
})
</script>

<style lang="scss" scoped>
.content{
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: #f5f5f5;
	position: relative;
	
	.status_bar{
		width: 100%;
		height: 88rpx;
		background-color: #fff;
	}
	
	// 顶部导航栏
	.nav-bar {
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: center;
		height: 90rpx;
		width: 100%;
		background-color: #ffffff;

		
		.back-btn {
			width: 60rpx;
			height: 60rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			left: 20rpx;
			
			.back-icon {
				width: 40rpx;
				height: 40rpx;
			}
		}
		
		.title {
			
			font-size: 36rpx;
			font-weight: bold;
		}
	}
	
	// 聊天内容区域
	.chat-container {
		width: 100%;
		// 高度现在通过:style动态绑定
		
		// 蓝色标题区
		.blue-header {
			width: 100%;
			height: 100rpx;
			background-color: #4e74f7;
			color: #ffffff;
			font-size: 30rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: bold;
		}
		
		// 时间戳
		.timestamp {
			width: 100%;
			text-align: center;
			padding: 20rpx 0;
			font-size: 24rpx;
			color: #999999;
		}
		
		// 消息公共样式
		.message {
			display: flex;
			margin-bottom: 30rpx;
			padding: 0 30rpx;
		}
		
		// 客服消息样式
		.service-message {
			.avatar {
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				margin-right: 20rpx;
			}
			
			.message-content {
				max-width: 70%;
				background-color: #ffffff;
				border-radius: 20rpx;
				padding: 20rpx;
				font-size: 25rpx;
				position: relative;
				color:#666;
			}
		}
		
		// 用户消息样式
		.user-message {
			justify-content: flex-end;
			
			.message-content {
				max-width: 70%;
				background-color: #4e74f7;
				border-radius: 20rpx;
				padding: 20rpx;
				font-size: 25rpx;
				position: relative;
				color: #ffffff;
			}
		}
		
		// 猜你想问区域
		.guess-questions {
			margin: 20rpx 30rpx;
			background-color: #ffffff;
			border-radius: 10rpx;
			overflow: hidden;
			
			.guess-title {
				display: flex;
				align-items: center;
				padding: 20rpx;
				font-size: 30rpx;
				color: #333333;
				font-weight: bold;
				
				.question-icon {
					width: 40rpx;
					height: 40rpx;
					background-color: #4e74f7;
					border-radius: 6rpx;
					color: #ffffff;
					font-weight: bold;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-right: 10rpx;
					position: relative;
					
					&:after {
						content: '';
						position: absolute;
						bottom: -8rpx;
						left: 50%;
						transform: translateX(-50%);
						width: 0;
						height: 0;
						border-left: 8rpx solid transparent;
						border-right: 8rpx solid transparent;
						border-top: 8rpx solid #4e74f7;
					}
				}
			}
			
			.question-list {
				.question-item {
					padding: 20rpx;
					font-size: 28rpx;
					color: #666666;
					border-bottom: 1px solid #f0f0f0;
					
					&:last-child {
						border-bottom: none;
					}
				}
			}
		}
		
		// 社区投诉
		.complaint {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin: 30rpx 0 30rpx 30rpx;
			background-color: #ffffff;
			border-radius: 10rpx;
			padding: 10rpx;
			width: 100rpx;
			margin-right: auto;
			
			.mail-icon {
				width: 60rpx;
				height: 60rpx;
				margin-bottom: 10rpx;
			}
			
			.complaint-text {
				font-size: 20rpx;
				color: #666;
				font-weight: 400;
			}
		}
	}
	
	// 底部输入区域
	.input-area {
		width: 100%;
		height: 120rpx;
		background-color: #ffffff;
		border-top: 1px solid #e5e5e5;
		display: flex;
		align-items: center;
		padding: 10rpx 30rpx;
		box-sizing: border-box;
		position: relative;
		
		.input-box {
			flex: 1;
			height: 60rpx;
			background-color: #f5f5f5;
			border-radius: 40rpx;
			padding: 0 20rpx;
			display: flex;
			align-items: center;
			margin-right: 20rpx;
			
			input {
				width: 100%;
				height: 100%;
				font-size: 28rpx;
			}
		}
		
		.add-btn {
			width: 50rpx;
			height: 50rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			
			.add-icon {
				width: 50rpx;
				height: 50rpx;
				border-radius: 50%;
				border: 2rpx solid #cccccc;
				position: relative;
				
				&:before, &:after {
					content: '';
					position: absolute;
					background-color: #cccccc;
				}
				
				&:before {
					width: 60%;
					height: 2rpx;
					top: 50%;
					left: 20%;
					transform: translateY(-50%);
				}
				
				&:after {
					width: 2rpx;
					height: 60%;
					left: 50%;
					top: 20%;
					transform: translateX(-50%);
				}
			}
		}
	}
}
</style>
