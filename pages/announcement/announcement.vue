<template>
	<view class="content">
		<view class="nav-bar">
			<view class="back-icon">
				<!-- 返回按钮SVG将在后续添加 -->
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M14.1424 18.5863C14.5028 19.0909 15.2014 19.142 15.6241 18.6947L15.7116 18.602C16.0519 18.2418 16.0964 17.6739 15.8166 17.2593L11.4882 11.9671L15.8165 6.74074C16.0963 6.32615 16.0519 5.75822 15.7115 5.39795L15.624 5.30529C15.2014 4.85796 14.5028 4.90906 14.1423 5.41367L9.19925 11.3385C8.93359 11.7104 8.93358 12.2239 9.19925 12.5958L14.1424 18.5863Z"
						fill="#171718" />
				</svg>
			</view>
			<view class="tab-container">
				<view class="tab-item" :class="{ active: activeTab === 'official' }" @click="switchTab('official')">
					官方公告
				</view>
				<view class="tab-item" :class="{ active: activeTab === 'news' }" @click="switchTab('news')">
					新闻中心
				</view>
				<view class="tab-item" :class="{ active: activeTab === 'update' }" @click="switchTab('update')">
					运营爆光
				</view>
			</view>
		</view>
		
		<view class="search-box">
			<input type="text" placeholder="请输入搜索关键词" class="search-input" />
		</view>
		
		<view class="tab-content">
			<scroll-view class="category-tabs" scroll-x="true" :scroll-left="scrollLeft" show-scrollbar="false" scroll-with-animation>
				<view class="category-tabs-content">
					<view class="category-item" 
						v-for="(item, index) in categories" 
						:key="index"
						:class="{ active: activeCategory === item.id }" 
						:id="'category-' + item.id"
						@click="switchCategory(item.id, index)">
						{{item.name}}
					</view>
				</view>
			</scroll-view>
			
			<swiper class="announcement-swiper" 
				:current="currentCategoryIndex" 
				@change="onSwiperChange"
				@transition="onSwiperTransition">
				<swiper-item v-for="(category, index) in categories" :key="index">
					<scroll-view class="announcement-scroll" scroll-y="true">
						<view class="announcement-list">
							<view class="announcement-item" v-for="(item, itemIndex) in getAnnouncementsByCategory(category.id)" :key="itemIndex">
								<view class="announcement-content">{{item.title}}</view>
								<view class="announcement-info">
									<view class="announcement-tag" :class="item.type">{{item.tagName}}</view>
									<view class="announcement-time">{{item.time}}</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('official')
const activeCategory = ref('all')
const currentCategoryIndex = ref(0)
const scrollLeft = ref(0)

// 分类数据
const categories = ref([
	{ id: 'all', name: '全部' },
	{ id: 'up', name: '上新公告' },
	{ id: 'synthesis', name: '合成公告' },
	{ id: 'retail', name: '零售公告' },
	{ id: 'airdrop', name: '空投公告' },
	{ id: 'activity', name: '活动公告' }
])


// 公告数据
const announcements = ref([
	{
		type: 'up',
		tagName: '上新公告',
		title: '[IBox官方公告] 商品《近排铁衣娃雪色》开启发售',
		time: '2025-04-07 21:45:22',
		category: 'up'
	},
	{
		type: 'synthesis',
		tagName: '合成公告',
		title: '[IBox官方公告] 商品《近排铁衣娃雪色》开启发售',
		time: '2025-04-07 21:45:22',
		category: 'synthesis'
	},
	{
		type: 'retail',
		tagName: '零售公告',
		title: '[IBox官方公告] 商品《近排铁衣娃雪色》开启发售',
		time: '2025-04-07 21:45:22',
		category: 'retail'
	},
	{
		type: 'airdrop',
		tagName: '空投公告',
		title: '[IBox官方公告] 商品《近排铁衣娃雪色》开启发售',
		time: '2025-04-07 21:45:22',
		category: 'airdrop'
	},
	{
		type: 'activity',
		tagName: '活动公告',
		title: '[IBox官方公告] 商品《近排铁衣娃雪色》开启发售',
		time: '2025-04-07 21:45:22',
		category: 'activity'
	},
	// 可以添加更多公告数据
])

// 根据分类获取公告
const getAnnouncementsByCategory = (category) => {
	if (category === 'all') {
		return announcements.value
	}
	return announcements.value.filter(item => item.category === category)
}

// 切换顶部标签
const switchTab = (tab) => {
	activeTab.value = tab
}

// 切换分类
const switchCategory = (category, index) => {
	activeCategory.value = category
	currentCategoryIndex.value = index
	// 计算滚动位置，使选中项居中
	const categoryElement = document.getElementById('category-' + category)
	if (categoryElement) {
		const offsetLeft = categoryElement.offsetLeft
		const elementWidth = categoryElement.offsetWidth
		const scrollViewWidth = 375 // 假设屏幕宽度为375px
		scrollLeft.value = offsetLeft - (scrollViewWidth / 2) + (elementWidth / 2)
	}
}

// 滑动切换回调
const onSwiperChange = (e) => {
	const index = e.detail.current
	const category = categories.value[index]
	if (category) {
		activeCategory.value = category.id
		switchCategory(category.id, index)
	}
}

// 滑动过程中的回调
const onSwiperTransition = (e) => {
	// 可以添加过渡动画效果
}
</script>

<style lang="scss" scoped>
.content {
	width: 100%;
	min-height: 100vh;
	background-color: #fff;
	display: flex;
	flex-direction: column;
}

.nav-bar {
	width: 100%;
	height: 88rpx;
	display: flex;
	align-items: center;
	padding: 0 30rpx;
	box-sizing: border-box;
	position: relative;
	
	.back-icon {
		width: 44rpx;
		height: 44rpx;
	}
	
	.tab-container {
		flex: 1;
		display: flex;
		justify-content: center;
		gap: 40rpx;
		
		.tab-item {
			font-size: 28rpx;
			color: #666;
			padding: 0 10rpx;
			position: relative;
			
			&.active {
				color: #333;
				font-weight: bold;
				
				&::after {
					content: '';
					position: absolute;
					bottom: -10rpx;
					left: 50%;
					transform: translateX(-50%);
					width: 40rpx;
					height: 4rpx;
					background-color: #007AFF;
					border-radius: 2rpx;
				}
			}
		}
	}
}

.search-box {
	width: 100%;
	padding: 20rpx 30rpx;
	box-sizing: border-box;
	
	.search-input {
		width: 100%;
		height: 72rpx;
		background-color: #F5F5F5;
		border-radius: 36rpx;
		padding: 0 30rpx;
		font-size: 28rpx;
		color: #333;
		box-sizing: border-box;
		&::placeholder {
			color: #999;
		}
	}
}

.tab-content {
	flex: 1;
	display: flex;
	flex-direction: column;
	
	.category-tabs {
		width: 100%;
		height: 88rpx;
		white-space: nowrap;
		border-bottom: 1rpx solid #EEEEEE;
		
		/* 隐藏滚动条 */
		::-webkit-scrollbar {
			display: none;
			width: 0 !important;
			height: 0 !important;
			-webkit-appearance: none;
			background: transparent;
		}
		
		/* 兼容Firefox */
		scrollbar-width: none;
		
		/* 兼容IE */
		-ms-overflow-style: none;
		
		.category-tabs-content {
			display: inline-flex;
			padding: 0 30rpx;
			height: 100%;
			align-items: center;
			
			.category-item {
				padding: 0 20rpx;
				font-size: 28rpx;
				color: #666;
				position: relative;
				flex-shrink: 0;
				
				&.active {
					color: #333;
					font-weight: bold;
					
					&::after {
						content: '';
						position: absolute;
						bottom: -20rpx;
						left: 50%;
						transform: translateX(-50%);
						width: 40rpx;
						height: 4rpx;
						background-color: #007AFF;
						border-radius: 2rpx;
					}
				}
			}
		}
	}
	
	.announcement-swiper {
		flex: 1;
		width: 100%;
	}
	
	.announcement-scroll {
		height: 100%;
	}
	
	.announcement-list {
		padding: 20rpx 30rpx;
		
		.announcement-item {
			display: flex;
			flex-direction: column;
			padding: 20rpx 0;
			border-bottom: 1rpx solid #EEEEEE;
			
			.announcement-content {
				font-size: 28rpx;
				color: #333;
				line-height: 1.5;
				max-height: 84rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				margin-bottom: 12rpx;
				font-weight: bold;
			}
			
			.announcement-info {
				display: flex;
				align-items: center;
				justify-content: space-between;
				
				.announcement-tag {
					padding: 4rpx 12rpx;
					border-radius: 4rpx;
					font-size: 24rpx;
					
					&.up {
						color: #2B9939;
						background-color: rgba(43, 153, 57, 0.1);
					}
					
					&.synthesis {
						color: #722ED1;
						background-color: rgba(114, 46, 209, 0.1);
					}
					
					&.retail {
						color: #1890FF;
						background-color: rgba(24, 144, 255, 0.1);
					}
					
					&.airdrop {
						color: #13C2C2;
						background-color: rgba(19, 194, 194, 0.1);
					}
					
					&.activity {
						color: #FF6B00;
						background-color: rgba(255, 107, 0, 0.1);
					}
				}
				
				.announcement-time {
					font-size: 24rpx;
					color: #999;
				}
			}
		}
	}
}
</style>
