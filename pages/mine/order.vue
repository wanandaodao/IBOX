<template>
	<view class="order-container">
		<!-- 顶部返回按钮和搜索框 -->
		<view class="header">
			<view class="back-icon" @click="goBack">
				<image src="/static/back.png" mode="aspectFit"></image>
			</view>
			<view class="search-box" @click="goSearch">
				<image src="/static/Search.png" mode="aspectFit"></image>
				<text>搜索</text>
			</view>
		</view>
		
		<!-- 顶部主要分类导航 -->
		<scroll-view class="main-nav" scroll-x="true" show-scrollbar="false">
			<view class="nav-content">
				<view class="nav-item" 
					v-for="(item, index) in mainNavItems" 
					:key="index"
					:class="{'active': currentMainNav === index}"
					@click="switchMainNav(index)">
					{{item}}
				</view>
			</view>
		</scroll-view>
		
		<!-- 二级状态分类导航 -->
		<scroll-view class="sub-nav" scroll-x="true" show-scrollbar="false">
			<view class="nav-content">
				<view class="nav-item" 
					v-for="(item, index) in subNavItems" 
					:key="index"
					:class="{'active': currentSubNav === index}"
					@click="switchSubNav(index)">
					{{item}}
				</view>
			</view>
		</scroll-view>
		
		<!-- 空状态展示 -->
		<view class="empty-state" v-if="!hasOrders">
			<image src="/static/images/empty-box.png" mode="aspectFit"></image>
			<text>暂无订单</text>
			<text>目前没有任何数据</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			currentMainNav: 0,
			currentSubNav: 0,
			mainNavItems: ['藏品', '盲盒', '合成', '空投', '寄售', '求购','求购寄售'],
			subNavItems: ['全部', '待支付', '藏品转入', '已完成', '退款'],
			hasOrders: false
		}
	},
	methods: {
		goBack() {
			uni.navigateTo({
				url: '/pages/profile/index'
			})
		},
		goSearch() {
			uni.navigateTo({
				url: '/pages/mine/order-search'
			})
		},
		switchMainNav(index) {
			this.currentMainNav = index
			// 这里可以根据选中的主导航加载相应的订单数据
		},
		switchSubNav(index) {
			this.currentSubNav = index
			// 这里可以根据选中的子导航筛选订单数据
		}
	}
}
</script>

<style lang="scss">
.order-container {
	min-height: 100vh;
	background-color: #f8f8f8;
	
	.header {
		display: flex;
		align-items: center;
		padding: 25px 15px 15px;
		background-color: #fff;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		
		.back-icon {
			width: 24px;
			height: 24px;
			flex-shrink: 0;
			
			image {
				width: 100%;
				height: 100%;
			}
		}
		
		.search-box {
			flex: 1;
			display: flex;
			align-items: center;
			margin-left: 15px;
			padding: 8px 15px;
			background-color: #f5f5f5;
			border-radius: 20px;
			
			image {
				width: 16px;
				height: 16px;
				margin-right: 8px;
			}
			
			text {
				color: #999;
				font-size: 14px;
			}
		}
	}
	
	.main-nav, .sub-nav {
		background-color: #fff;
		margin-top: 65px;
		
		.nav-content {
			padding: 0 15px;
			white-space: nowrap;
			display: flex;
			
			.nav-item {
				display: inline-block;
				padding: 15px 20px;
				font-size: 14px;
				color: #666;
				position: relative;
				flex-shrink: 0;
				
				&.active {
					color: #2b65ff;
					font-weight: bold;
					
					&::after {
						content: '';
						position: absolute;
						bottom: 0;
						left: 20px;
						right: 20px;
						height: 2px;
						background-color: #2b65ff;
						border-radius: 1px;
					}
				}
			}
		}
	}
	
	.main-nav {
		border-bottom: 1px solid #f5f5f5;
		margin-top: 65px;
		
		::-webkit-scrollbar {
			display: none;
		}
	}
	
	.sub-nav {
		margin-top: 0;
		
		::-webkit-scrollbar {
			display: none;
		}
	}
	
	.empty-state {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 100px;
		
		image {
			width: 120px;
			height: 120px;
			margin-bottom: 20px;
		}
		
		text {
			color: #999;
			font-size: 14px;
			line-height: 1.5;
			
			&:last-child {
				margin-top: 5px;
				font-size: 12px;
			}
		}
	}
}
</style> 