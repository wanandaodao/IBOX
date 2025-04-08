<template>
	<view class="content">
		<view class="side-bars"></view>
		<view class="nav-bar">
			<view class="back-icon" @click="goBack">
				<!-- 返回按钮SVG将在后续添加 -->
				<!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M14.1424 18.5863C14.5028 19.0909 15.2014 19.142 15.6241 18.6947L15.7116 18.602C16.0519 18.2418 16.0964 17.6739 15.8166 17.2593L11.4882 11.9671L15.8165 6.74074C16.0963 6.32615 16.0519 5.75822 15.7115 5.39795L15.624 5.30529C15.2014 4.85796 14.5028 4.90906 14.1423 5.41367L9.19925 11.3385C8.93359 11.7104 8.93358 12.2239 9.19925 12.5958L14.1424 18.5863Z"
						fill="#171718" />
				</svg> -->
				<image src="/static/arrow-left.png" mode="" />
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
		
		<view class="search-box" v-if="activeTab !== 'update'">
			<input type="text" placeholder="请输入搜索关键词" class="search-input" />
		</view>
		
		<view class="tab-content">
			<template v-if="activeTab !== 'update'">
				<scroll-view class="category-tabs" scroll-x="true" :scroll-left="scrollLeft" :show-scrollbar="false" scroll-with-animation>
					<view class="category-tabs-content">
						<view class="category-item" 
							v-for="(item, index) in currentCategories" 
							:key="index"
							:class="{ active: activeCategory === item.id }" 
							:id="'category-' + item.id"
							@click="switchCategory(item.id, index)">
							{{item.name}}
						</view>
					</view>
				</scroll-view>
				
				<swiper class="announcement-swiper" 
					:style="{ height: scrollHeight }"
					:current="currentCategoryIndex" 
					@change="onSwiperChange"
					@transition="onSwiperTransition">
					<swiper-item v-for="(category, index) in currentCategories" :key="index">
						<scroll-view class="announcement-scroll" scroll-y="true" :show-scrollbar="false">
							<view :style="{ height: scrollHeight }" class="announcement-list">
								<template v-if="activeTab === 'official'">
									<view class="announcement-item" v-for="(item, itemIndex) in getAnnouncementsByCategory(category.id)" :key="itemIndex" @click="goToAnnouncementInfo(item)">
										<view class="announcement-content">{{item.title}}</view>
										<view class="announcement-info">
											<view class="announcement-tag" :class="item.type">{{item.tagName}}</view>
											<view class="announcement-time">{{item.time}}</view>
										</view>
									</view>
								</template>
								<template v-else-if="activeTab === 'news'">
									<view class="news-item" v-for="(item, itemIndex) in getNewsByCategory(category.id)" :key="itemIndex">
										<view class="news-left">
											<view class="news-title">{{item.title}}</view>
											<view class="news-info">
												<view class="news-tag" :class="item.type">{{item.tagName}}</view>
												<view class="news-time">{{item.time}}</view>
											</view>
										</view>
										<image class="news-image" :src="item.image" mode="aspectFill"></image>
									</view>
								</template>
							</view>
						</scroll-view>
					</swiper-item>
				</swiper>
			</template>
			
			<template v-else>
				<scroll-view :style="{ height: scrollHeight2  }" class="exposure-scroll" scroll-y="true">
					<view  class="exposure-list">
						<view class="exposure-item" v-for="(item, index) in exposureList" :key="index">
							<view class="status-tag" :class="{ 'status-resolved': item.isResolved }">
								{{ item.isResolved ? '已辟谣' : '未辟谣' }}
							</view>
							<view class="user-info">
								<image class="user-avatar" :src="item.avatar" mode="aspectFill"></image>
								<view class="user-detail">
									<view class="user-name">{{item.userName}}</view>
									<view class="exposure-time">{{item.time}}</view>
								</view>
							</view>
							<view class="exposure-content">
								<view class="exposure-title">
									<text class="title-prefix">用户投稿：</text>
									<text class="title-content">{{item.title}}</text>
								</view>
								<image v-if="item.image" class="exposure-image" :src="item.image" mode="aspectFill"></image>
							</view>
							<view class="exposure-actions">
								<view class="share-btn">
									<!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7765 3.10223C17.1761 2.67341 15.531 3.62316 15.1022 5.22356L14.7423 6.56695L9.95409 9.30305C9.22264 8.50232 8.16998 8 7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16C8.16998 16 9.22264 15.4977 9.95409 14.697L14.7423 17.4331L15.1022 18.7764C15.531 20.3768 17.1761 21.3266 18.7765 20.8978C20.3769 20.4689 21.3266 18.8239 20.8978 17.2235C20.469 15.6231 18.8239 14.6734 17.2235 15.1022L15.5018 15.5636L10.8915 12.9291C10.9625 12.631 11 12.3199 11 12C11 11.6801 10.9625 11.369 10.8915 11.0709L15.5018 8.43644L17.2235 8.89779C18.8239 9.32661 20.469 8.37687 20.8978 6.77647C21.3266 5.17607 20.3769 3.53106 18.7765 3.10223ZM16.7753 6.70712L17.7412 6.96594C18.2746 7.10888 18.823 6.7923 18.9659 6.25883C19.1089 5.72537 18.7923 5.17703 18.2588 5.03409C17.7254 4.89114 17.177 5.20773 17.0341 5.74119L16.7753 6.70712ZM5 12C5 13.1046 5.89543 14 7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12ZM17.7412 17.0341L16.7753 17.2929L17.0341 18.2588C17.177 18.7923 17.7254 19.1089 18.2588 18.9659C18.7923 18.823 19.1089 18.2746 18.9659 17.7412C18.823 17.2077 18.2746 16.8911 17.7412 17.0341Z" fill="#333"/>
									</svg> -->
									<image src="/static/share.png" mode="" />
									<text>分享</text>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
				<view class="add-button" @click="handleAddExposure">
					<text>+</text>
				</view>
			</template>
		</view>
	</view>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const activeTab = ref('official')
const activeCategory = ref('all')
const currentCategoryIndex = ref(0)
const scrollLeft = ref(0)

// scroll-view的高度
const scrollHeight = ref('0px')
const scrollHeight2 = ref('0px')
// 计算scroll-view高度的方法
const calculateScrollHeight = () => {
	const systemInfo = uni.getSystemInfoSync()
	const windowHeight = systemInfo.windowHeight
	// 计算高度：屏幕高度 - 状态栏高度 - 导航栏高度(88rpx) - 搜索框高度(112rpx) - 分类标签高度(88rpx)
	const height = windowHeight - systemInfo.statusBarHeight - uni.upx2px(380)
	scrollHeight.value = height + 'px'
	scrollHeight2.value = height + 112 + 'px'
}

onMounted(() => {
	calculateScrollHeight()
})

// 公告分类数据
const announcementCategories = ref([
	{ id: 'all', name: '全部' },
	{ id: 'up', name: '上新公告' },
	{ id: 'synthesis', name: '合成公告' },
	{ id: 'retail', name: '零售公告' },
	{ id: 'airdrop', name: '空投公告' },
	{ id: 'activity', name: '活动公告' }
])

// 新闻分类数据
const newsCategories = ref([
	{ id: 'company', name: '公司新闻' },
	{ id: 'industry', name: '行业资讯' },
])

// 计算当前应该显示的分类
const currentCategories = computed(() => {
	return activeTab.value === 'official' ? announcementCategories.value : newsCategories.value
})

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
	{
		type: 'activity',
		tagName: '活动公告',
		title: '[IBox官方公告] 商品《近排铁衣娃雪色》开启发售',
		time: '2025-04-07 21:45:22',
		category: 'activity'
	},
	{
		type: 'activity',
		tagName: '活动公告',
		title: '[IBox官方公告] 商品《近排铁衣娃雪色》开启发售',
		time: '2025-04-07 21:45:22',
		category: 'activity'
	},
	{
		type: 'activity',
		tagName: '活动公告',
		title: '[IBox官方公告] 商品《近排铁衣娃雪色》开启发售',
		time: '2025-04-07 21:45:22',
		category: 'activity'
	},
	{
		type: 'activity',
		tagName: '活动公告',
		title: '[IBox官方公告] 商品《近排铁衣娃雪色》开启发售',
		time: '2025-04-07 21:45:22',
		category: 'activity'
	},{
		type: 'activity',
		tagName: '活动公告',
		title: '[IBox官方公告] 商品《近排铁衣娃雪色》开启发售',
		time: '2025-04-07 21:45:22',
		category: 'activity'
	},{
		type: 'activity',
		tagName: '活动公告',
		title: '[IBox官方公告] 商品《近排铁衣娃雪色》开启发售',
		time: '2025-04-07 21:45:22',
		category: 'activity'
	},{
		type: 'activity',
		tagName: '活动公告',
		title: '[IBox官方公告] 商品《近排铁衣娃雪色》开启发售',
		time: '2025-04-07 21:45:22',
		category: 'activity'
	},
	// 可以添加更多公告数据
])

// 新闻数据
const news = ref([
	{
		type: 'industry',
		tagName: '行业资讯',
		title: 'IBox链盒获得数字藏品经营批准证书，探索数字藏品拍卖新模式',
		time: '2025-03-10 16:00:48',
		category: 'industry',
		image: '/static/board.png'
	},
	{
		type: 'company',
		tagName: '公司新闻',
		title: 'IBox链盒手手画艺术家张若桥，带你领略千年古都长安的...',
		time: '2025-03-08 11:10:03',
		category: 'company',
		image: '/static/board.png'
	},
	{
		type: 'industry',
		tagName: '行业资讯',
		title: '知名街道艺术家齐兴华力作《猛虎回头》上线IBox链盒，深受用户...',
		time: '2025-03-04 10:48:36',
		category: 'industry',
		image: '/static/board.png'
	},
	{
		type: 'company',
		tagName: '公司新闻',
		title: 'IBox链盒推出《精锐侠》，开启数字藏品新玩法！',
		time: '2025-03-02 17:24:31',
		category: 'company',
		image: '/static/board.png'
	},
	{
		type: 'industry',
		tagName: '行业资讯',
		title: 'IBox链盒获得数字藏品经营批准证书，探索数字藏品拍卖新模式',
		time: '2025-03-10 16:00:48',
		category: 'industry',
		image: '/static/board.png'
	},
	{
		type: 'company',
		tagName: '公司新闻',
		title: 'IBox链盒手手画艺术家张若桥，带你领略千年古都长安的...',
		time: '2025-03-08 11:10:03',
		category: 'company',
		image: '/static/board.png'
	},
	{
		type: 'industry',
		tagName: '行业资讯',
		title: '知名街道艺术家齐兴华力作《猛虎回头》上线IBox链盒，深受用户...',
		time: '2025-03-04 10:48:36',
		category: 'industry',
		image: '/static/board.png'
	},
	{
		type: 'company',
		tagName: '公司新闻',
		title: 'IBox链盒推出《精锐侠》，开启数字藏品新玩法！',
		time: '2025-03-02 17:24:31',
		category: 'company',
		image: '/static/board.png'
	},
	{
		type: 'industry',
		tagName: '行业资讯',
		title: 'IBox链盒获得数字藏品经营批准证书，探索数字藏品拍卖新模式',
		time: '2025-03-10 16:00:48',
		category: 'industry',
		image: '/static/board.png'
	},
	{
		type: 'company',
		tagName: '公司新闻',
		title: 'IBox链盒手手画艺术家张若桥，带你领略千年古都长安的...',
		time: '2025-03-08 11:10:03',
		category: 'company',
		image: '/static/board.png'
	},
	{
		type: 'industry',
		tagName: '行业资讯',
		title: '知名街道艺术家齐兴华力作《猛虎回头》上线IBox链盒，深受用户...',
		time: '2025-03-04 10:48:36',
		category: 'industry',
		image: '/static/board.png'
	},
	{
		type: 'company',
		tagName: '公司新闻',
		title: 'IBox链盒推出《精锐侠》，开启数字藏品新玩法！',
		time: '2025-03-02 17:24:31',
		category: 'company',
		image: '/static/board.png'
	},
	{
		type: 'industry',
		tagName: '行业资讯',
		title: 'IBox链盒获得数字藏品经营批准证书，探索数字藏品拍卖新模式',
		time: '2025-03-10 16:00:48',
		category: 'industry',
		image: '/static/board.png'
	},
	{
		type: 'company',
		tagName: '公司新闻',
		title: 'IBox链盒手手画艺术家张若桥，带你领略千年古都长安的...',
		time: '2025-03-08 11:10:03',
		category: 'company',
		image: '/static/board.png'
	},
	{
		type: 'industry',
		tagName: '行业资讯',
		title: '知名街道艺术家齐兴华力作《猛虎回头》上线IBox链盒，深受用户...',
		time: '2025-03-04 10:48:36',
		category: 'industry',
		image: '/static/board.png'
	},
	{
		type: 'company',
		tagName: '公司新闻',
		title: 'IBox链盒推出《精锐侠》，开启数字藏品新玩法！',
		time: '2025-03-02 17:24:31',
		category: 'company',
		image: '/static/board.png'
	}
])

// 根据分类获取公告
const getAnnouncementsByCategory = (category) => {
	if (category === 'all') {
		return announcements.value
	}
	return announcements.value.filter(item => item.category === category)
}

// 根据分类获取新闻
const getNewsByCategory = (category) => {
	if (category === 'all') {
		return news.value
	}
	return news.value.filter(item => item.category === category)
}

// 切换顶部标签
const switchTab = (tab) => {
	activeTab.value = tab
	// 根据不同的标签设置默认分类
	if (tab === 'news') {
		activeCategory.value = 'company'
		currentCategoryIndex.value = 0
	} else if (tab === 'official') {
		activeCategory.value = 'all'
		currentCategoryIndex.value = 0
	} else {
		activeCategory.value = 'all'
		currentCategoryIndex.value = 0
	}
	scrollLeft.value = 0
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
	const category = currentCategories.value[index]
	if (category) {
		activeCategory.value = category.id
		switchCategory(category.id, index)
	}
}

// 滑动过程中的回调
const onSwiperTransition = (e) => {
	// 可以添加过渡动画效果
}

const goBack = () =>{
	uni.navigateTo({
		 url: '/pages/home/home'
	});
}

// 运营曝光数据
const exposureList = ref([
	{
		userName: '匿名用户',
		avatar: '/static/avatar.png',
		time: '2025-04-01 10:23',
		title: '选通投诉格式如图',
		image: '/static/board.png',
		isResolved: true
	},
	{
		userName: '人心不足老爷',
		avatar: '/static/avatar.png',
		time: '2025-03-28 23:04',
		title: '热狗来也当初切?',
		image: '/static/board.png',
		isResolved: false
	},
	{
		userName: '人心不足老爷',
		avatar: '/static/avatar.png',
		time: '2025-03-28 23:04',
		title: '热狗来也当初切?',
		image: '/static/board.png',
		isResolved: false
	},
	{
		userName: '人心不足老爷',
		avatar: '/static/avatar.png',
		time: '2025-03-28 23:04',
		title: '热狗来也当初切?',
		image: '/static/board.png',
		isResolved: false
	},
	{
		userName: '人心不足老爷',
		avatar: '/static/avatar.png',
		time: '2025-03-28 23:04',
		title: '热狗来也当初切?',
		image: '/static/board.png',
		isResolved: false
	},
])

const handleAddExposure = () => {
	// 处理添加曝光的逻辑
	console.log('添加曝光')
}

const goToAnnouncementInfo = (item) => {
	uni.navigateTo({
		url: `/pages/announcementInfo/announcementInfo?type=${item.type}&tagName=${item.tagName}`
	});
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
.side-bars{
	width: 100%;
	height: 88rpx;
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
		image{
			width: 48rpx;
			height: 48rpx;
		}
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
		width: 100%;
	}
	
	
	.announcement-list {
		padding: 20rpx 30rpx 100rpx 30rpx;
		box-sizing: border-box;
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

.news-item {
	display: flex;
	justify-content: space-between;
	padding: 20rpx 0;
	border-bottom: 1rpx solid #EEEEEE;
	
	.news-left {
		flex: 1;
		margin-right: 20rpx;
		
		.news-title {
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
		
		.news-info {
			display: flex;
			align-items: center;
			justify-content: space-between;
			
			.news-tag {
				padding: 4rpx 12rpx;
				border-radius: 4rpx;
				font-size: 24rpx;
				
				&.industry {
					color: #2B9939;
					background-color: rgba(43, 153, 57, 0.1);
				}
				
				&.company {
					color: #1890FF;
					background-color: rgba(24, 144, 255, 0.1);
				}
				
			}
			
			.news-time {
				font-size: 24rpx;
				color: #999;
			}
		}
	}
	
	.news-image {
		width: 160rpx;
		height: 160rpx;
		border-radius: 8rpx;
		object-fit: cover;
	}
}

.exposure-scroll {
	box-sizing: border-box;
}

.exposure-list {
	padding: 20rpx 30rpx;
	box-sizing: border-box;
	height: 100%;

}

.exposure-item {
	background: #FFFFFF;
	border-radius: 12rpx;
	padding: 20rpx;
	margin-bottom: 20rpx;
	box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);
	position: relative;
	overflow: hidden;
	
	.status-tag {
		position: absolute;
		right: -50rpx;
		top: 20rpx;
		width: 160rpx;
		height: 40rpx;
		transform: rotate(45deg);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20rpx;
		background-color: #FF4D4F;
		color: #FFFFFF;
		transform-origin: center;
		text-align: center;
		line-height: 40rpx;
		
		&.status-resolved {
			background-color: #52C41A;
		}
	}
	
	.user-info {
		display: flex;
		align-items: flex-start;
		margin-bottom: 16rpx;
		padding-right: 40rpx;
		
		.user-avatar {
			width: 64rpx;
			height: 64rpx;
			border-radius: 32rpx;
			margin-right: 12rpx;
		}
		
		.user-detail {
			flex: 1;
			
			.user-name {
				font-size: 28rpx;
				color: #333;
				font-weight: 500;
				margin-bottom: 4rpx;
			}
			
			.exposure-time {
				font-size: 24rpx;
				color: #999;
			}
		}
		
		.status-tag {
			position: absolute;
			right: 0;
			top: 0;
			font-size: 24rpx;
			padding: 4rpx 12rpx;
			border-radius: 4rpx;
			color: #FF4D4F;
			background-color: rgba(255, 77, 79, 0.1);
			
			&.status-resolved {
				color: #52C41A;
				background-color: rgba(82, 196, 26, 0.1);
			}
		}
	}
	
	.exposure-content {
		.exposure-title {
			font-size: 28rpx;
			line-height: 1.5;
			margin-bottom: 16rpx;
			
			.title-prefix {
				color: #1890FF;
			}
			
			.title-content {
				color: #333;
			}
		}
		
		.exposure-image {
			width: 200rpx;
			height: 200rpx;
			border-radius: 8rpx;
			margin-bottom: 16rpx;
		}
	}
	
	.exposure-actions {
		display: flex;
		justify-content: flex-end;
		padding-top: 16rpx;
		
		.share-btn {
			display: flex;
			align-items: center;
			padding: 8rpx 20rpx;
			image{
				width: 40rpx;
				height: 40rpx;
				margin-right: 8rpx;
			}
			.share-icon {
				width: 32rpx;
				height: 32rpx;
				margin-right: 8rpx;
			}
			
			text {
				font-size: 24rpx;
				color: #666;
			}
		}
	}
}

.add-button {
	position: fixed;
	right: 40rpx;
	bottom: 40rpx;
	width: 100rpx;
	height: 100rpx;
	background: #1890FF;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 4rpx 12rpx rgba(24, 144, 255, 0.3);
	z-index: 100;
	text{
		font-size: 60rpx;
		color:white;
		transform: translateY(-4rpx);
	}
}
</style>
