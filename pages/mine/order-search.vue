<template>
	<view class="search-container">
		<!-- iOS状态栏空白区域 -->
		<view class="status-bar-height"></view>
		
		<!-- 顶部搜索栏 -->
		<view class="header">
			<view class="back-icon" @click="goBack">
				<image src="/static/back.png" mode="aspectFit"></image>
			</view>
			<view class="search-box">
				<image src="/static/Search.png" mode="aspectFit"></image>
				<input 
					type="text" 
					v-model="searchKeyword"
					placeholder="搜索订单"
					@input="onSearch"
					focus
				/>
				<view class="clear-icon" v-if="searchKeyword" @click="clearSearch">
					<image src="/static/images/clear.png" mode="aspectFit"></image>
				</view>
			</view>
		</view>
		
		<!-- 搜索类型切换 -->
		<view class="search-type">
			<view 
				class="type-item" 
				v-for="(item, index) in searchTypes" 
				:key="index"
				:class="{'active': currentType === index}"
				@click="switchType(index)"
			>
				{{item}}
			</view>
		</view>
		
		<!-- 搜索结果为空的状态 -->
		<view class="empty-state" v-if="!hasResults">
			<image src="/static/images/empty-search.png" mode="aspectFit"></image>
			<text>暂无搜索结果</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			searchKeyword: '',
			currentType: 0,
			searchTypes: ['普通订单', '求购/寄售'],
			hasResults: false
		}
	},
	methods: {
		goBack() {
			uni.navigateBack({
				delta: 1
			})
		},
		clearSearch() {
			this.searchKeyword = ''
			this.hasResults = false
		},
		onSearch(e) {
			// 这里实现搜索逻辑
			this.hasResults = false
		},
		switchType(index) {
			this.currentType = index
			// 根据类型切换搜索结果
			this.onSearch()
		}
	}
}
</script>

<style lang="scss">
.search-container {
	min-height: 100vh;
	background-color: #f8f8f8;
	
	.status-bar-height {
		height: 44px; /* iOS状态栏高度 */
		width: 100%;
		background-color: #fff;
	}
	
	.header {
		display: flex;
		align-items: center;
		padding: 15px;
		background-color: #fff;
		position: relative;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
		
		.back-icon {
			width: 24px;
			height: 24px;
			flex-shrink: 0;
			margin-right: 15px;
			
			image {
				width: 100%;
				height: 100%;
			}
		}
		
		.search-box {
			flex: 1;
			display: flex;
			align-items: center;
			padding: 8px 15px;
			background-color: #f5f5f5;
			border-radius: 20px;
			
			image {
				width: 16px;
				height: 16px;
				margin-right: 8px;
			}
			
			input {
				flex: 1;
				font-size: 14px;
				color: #333;
			}
			
			.clear-icon {
				width: 16px;
				height: 16px;
				
				image {
					width: 100%;
					height: 100%;
					margin: 0;
				}
			}
		}
	}
	
	.search-type {
		display: flex;
		background-color: #fff;
		padding: 0 15px;
		margin-top: 0;
		
		.type-item {
			padding: 15px 20px;
			font-size: 14px;
			color: #666;
			position: relative;
			margin-right: 20px;
			
			&.active {
				color: #2b65ff;
				font-weight: bold;
				
				&::after {
					content: '';
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					height: 2px;
					background-color: #2b65ff;
					border-radius: 1px;
				}
			}
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
		}
	}
}
</style> 