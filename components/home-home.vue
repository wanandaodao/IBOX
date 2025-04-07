<template>
	<view class="wrap">
		<view class="status_bar"></view>
		<view class="head">
			<view class="left">
				<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M13.7602 13.9982C12.5645 15.1354 10.9471 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667C15.8333 10.9471 15.1354 12.5645 13.9982 13.7602C14.7077 13.8187 15.3767 14.1267 15.8839 14.6339L17.2727 16.0227C17.4182 16.1682 17.5 16.3656 17.5 16.5714V16.6161C17.5 16.6631 17.5 16.6865 17.4991 16.7064C17.4786 17.1354 17.1354 17.4786 16.7064 17.4991C16.6865 17.5 16.6631 17.5 16.6161 17.5H16.5714C16.3656 17.5 16.1682 17.4182 16.0227 17.2727L14.6339 15.8839C14.1267 15.3767 13.8187 14.7077 13.7602 13.9982ZM14.1667 9.16667C14.1667 11.9281 11.9281 14.1667 9.16667 14.1667C6.40524 14.1667 4.16667 11.9281 4.16667 9.16667C4.16667 6.40524 6.40524 4.16667 9.16667 4.16667C11.9281 4.16667 14.1667 6.40524 14.1667 9.16667Z"
						fill="#C7C7C7" />
				</svg>
				<input type="text" placeholder="搜索商品" />
			</view>
			<view @click="toMessage" class="right">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M20.8018 17.1316C20.6104 17.6724 20.1395 18.0868 19.5483 18.2096C18.3079 18.4675 17.0563 18.661 15.7992 18.7902C15.1017 20.1005 13.6624 21 12 21C10.3377 21 8.89837 20.1005 8.20088 18.7902C6.94368 18.661 5.69209 18.4675 4.45169 18.2096C3.86056 18.0868 3.38965 17.6724 3.19822 17.1316C2.73584 15.8252 3.09686 14.3849 4.13077 13.4112L4.74318 12.8344C5.29501 12.3147 5.52549 11.5605 5.3562 10.8431C4.41055 6.83532 7.64077 2.99997 12 2.99997C16.3593 2.99997 19.5895 6.83532 18.6438 10.8431C18.4745 11.5605 18.705 12.3147 19.2568 12.8344L19.8693 13.4112C20.9032 14.3849 21.2642 15.8252 20.8018 17.1316ZM17.7552 14.2486L18.3676 14.8254C18.7827 15.2163 18.9567 15.7743 18.8416 16.3075C14.3311 17.2106 9.66898 17.2106 5.15845 16.3075C5.04333 15.7743 5.21735 15.2163 5.63239 14.8254L6.2448 14.2486C7.31393 13.2417 7.75484 11.7891 7.42924 10.4092C6.77477 7.6355 9.0156 4.99997 12 4.99997C14.9844 4.99997 17.2253 7.6355 16.5708 10.4092C16.2452 11.7891 16.6861 13.2417 17.7552 14.2486Z"
						fill="#171718" />
				</svg>
			</view>
		</view>
		<scroll-view @scroll="scrollHandler" :scroll-into-view="targetId" scroll-with-animation="true"
			:style="{ height: `${scrollViewHeight}px` }" :scroll-y="scrollY" class="wrap-content">
			<view class="board-box-wrap">
				<view class="board-box">
					<image src="/static/board.png" mode="aspectFill"></image>
					<view class="text-box">
						<view class="left">
							<text>公告</text>
							<text>携手iZen数字原生，共赴蛇年数藏新盛宴！</text>
						</view>
						<view class="right">

							<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M9 8C10.6569 8 11 7.55228 11 7C11 6.44772 10.6569 6 9 6L5 6C3.34315 6 3 6.44772 3 7C3 7.55228 3.34315 8 5 8L9 8Z"
									fill="#171718" />
								<path
									d="M13 13C14.6569 13 15 12.5523 15 12C15 11.4477 14.6569 11 13 11H5C3.34315 11 3 11.4477 3 12C3 12.5523 3.34315 13 5 13H13Z"
									fill="#171718" />
								<path
									d="M21 17C21 17.5523 20.6569 18 19 18L5 18C3.34315 18 3 17.5523 3 17C3 16.4477 3.34315 16 5 16L19 16C20.6569 16 21 16.4477 21 17Z"
									fill="#171718" />
							</svg>

						</view>
					</view>
				</view>
			</view>

			<view class="activity-box">
				<view class="activity-box-wrap">
					<view class="activity-list">
						<image src="/static/activity.png"></image>
						<view>合成中心</view>
					</view>
					<view class="activity-list">
						<image src="/static/activity.png"></image>
						<view>抽奖活动</view>
					</view>
					<view class="activity-list">
						<image src="/static/activity.png"></image>
						<view>龙晶</view>
					</view>
					<view class="activity-list">
						<image src="/static/activity.png"></image>
						<view>在线客服</view>
					</view>
					<view class="activity-list">
						<image src="/static/activity.png"></image>
						<view>识别码</view>
					</view>
				</view>
			</view>

			<view class="activity-box1">
				<view class="left">
					<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
						<swiper-item>
							<image src="/static/board.png" mode="aspectFill"></image>
						</swiper-item>
						<swiper-item>
							<image src="/static/board.png" mode="aspectFill"></image>
						</swiper-item>
						<swiper-item>
							<image src="/static/board.png" mode="aspectFill"></image>
						</swiper-item>
					</swiper>
				</view>
				<view class="right">

					<view>
						<text>市场</text>
						<text>板块涨幅一览无余</text>
					</view>

					<view>
						<text>今日热榜</text>
						<text>每天24点更新</text>
					</view>

					<view>
						<text>数字原生</text>
						<text>下载链接</text>
					</view>
				</view>
			</view>

			<view :id="sellBoxId" class="sell-box">
				<text style="font-size:24rpx;height:48rpx;display: block;">发售记录</text>

				<view class="sort-box">
					<view class="left">
						<view :class="{ choose: sortIndex == 0 }" @click="toSellBox" class="sort-icon-container">
							<text>类别</text>
							<view class="sort-icon-down"></view>
						</view>
						<view @click="toStatusBox" :class="{ choose: sortIndex == 1 }" class="sort-icon-container">
							<text>售卖状态</text>
							<view class="sort-icon-down"></view>
						</view>
					</view>

					<view class="right">
						<view style="background-color: #fff;" class="sort-icon-container"
							@click="toggleSortIcon('price')">
							<text>价格排序</text>
							<view class="sort-icon-box">
								<view @click="selectedSortIcon = 0"
									:style="{ borderBottom: selectedSortIcon == 0 ? 'rgb(161, 184, 243) solid 8rpx' : 'rgb(218, 218, 218) solid 8rpx' }"
									class="sort-icon-up"></view>
								<view @click="selectedSortIcon = 1"
									:style="{ borderTop: selectedSortIcon == 1 ? 'rgb(161, 184, 243) solid 8rpx' : 'rgb(218, 218, 218) solid 8rpx' }"
									class="sort-icon-down"></view>
							</view>
						</view>
						<view style="background-color: #fff;" class="sort-icon-container"
							@click="toggleSortIcon('status')">
							<text>售卖状态</text>
							<view class="sort-icon-box">
								<view @click="selectedSortIcon = 2"
									:style="{ borderBottom: selectedSortIcon == 2 ? 'rgb(161, 184, 243) solid 8rpx' : 'rgb(218, 218, 218) solid 8rpx' }"
									class="sort-icon-up"></view>
								<view @click="selectedSortIcon = 3"
									:style="{ borderTop: selectedSortIcon == 3 ? 'rgb(161, 184, 243) solid 8rpx' : 'rgb(218, 218, 218) solid 8rpx' }"
									class="sort-icon-down"></view>
							</view>
						</view>
					</view>
				</view>

				<view class="commodity-box">
					<view v-for="i in 5" class="commodity-card">
						<view class="commodity-status">
							暂停售卖
						</view>
						<image src="/static/commodity.png"></image>
						<text style="font-weight: bole;font-size: 28rpx;">猪猪侠超能宝箱</text>
						<view class="commodity-info-box">
							<view>
								发行20000
							</view>
							<view>
								流通6712
							</view>
						</view>
						<text style="font-weight: bold;font-size: 12rpx;">￥</text>
						<text style="font-weight: bold;font-size: 30rpx;">99</text>
					</view>
				</view>

			</view>
		</scroll-view>

		<view v-if="showProp" :style="{ height: `${propHeight}px` }" class="prop">
			<view class="propBox">
				<template v-if="popupType === 'category'">
					<view @click="typeIndex = 0" :class="{ choose: typeIndex == 0 }">
						全部
					</view>
					<view @click="typeIndex = 1" :class="{ choose: typeIndex == 1 }">
						盲盒
					</view>
					<view @click="typeIndex = 2" :class="{ choose: typeIndex == 2 }">
						藏品
					</view>
				</template>
				<template v-else>
					<view @click="typeIndex = 0" :class="{ choose: typeIndex == 0 }">
						全部
					</view>
					<view @click="typeIndex = 1" :class="{ choose: typeIndex == 1 }">
						即将开售
					</view>
					<view @click="typeIndex = 2" :class="{ choose: typeIndex == 2 }">
						售卖中
					</view>
					<view @click="typeIndex = 3" :class="{ choose: typeIndex == 3 }">
						暂停售卖
					</view>
					<view @click="typeIndex = 4" :class="{ choose: typeIndex == 4 }">
						已售罄
					</view>
				</template>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { onReady } from '@dcloudio/uni-app'

const sellBoxId = ref('sellBox')
const targetId = ref(null)
const scrollY = ref(true)
// 响应式高度变量
const scrollViewHeight = ref(0)
const propHeight = ref(0)
const showProp = ref(false)
const typeIndex = ref(0)
const sortIndex = ref(-1)
const selectedSortIcon = ref(-1)
const popupType = ref('category')

// 在组件准备好时执行计算
onBeforeMount(() => {
	const systemInfo = uni.getSystemInfoSync()
	const windowHeight = systemInfo.windowHeight
	const subtractHeight = uni.upx2px(376)
	const other = uni.upx2px(325)
	scrollViewHeight.value = windowHeight - subtractHeight
	propHeight.value = windowHeight - other
})

const toSellBox = () => {
	sortIndex.value = 0
	popupType.value = 'category'
	//关闭弹出层的时候不需要滚动
	if (!showProp.value) {
		targetId.value = sellBoxId.value
	}
	// 2. 重置（可选：确保下次点击仍能触发）
	setTimeout(() => {
		targetId.value = null
	}, 300);
	if (!showProp.value) {
		setTimeout(() => {
			showProp.value = true
			scrollY.value = false
		}, 300);
	}
	else {
		showProp.value = false;
		scrollY.value = true;
		sortIndex.value = -1
	}
}

const toStatusBox = () => {
	sortIndex.value = 1
	popupType.value = 'status'
	if (!showProp.value) {
		targetId.value = sellBoxId.value
	}
	setTimeout(() => {
		targetId.value = null
	}, 300);
	if (!showProp.value) {
		setTimeout(() => {
			showProp.value = true
			scrollY.value = false
		}, 300);
	}
	else {
		showProp.value = false;
		scrollY.value = true;
		sortIndex.value = -1
	}
}

const toMessage = () => {
	uni.navigateTo({
		url: '/pages/message/message'
	})
}
</script>

<style lang="scss" scoped>
.wrap {
	display: flex;
	flex-direction: column;

	.status_bar {
		width: 100%;
		height: 88rpx;
	}

	.prop {
		width: 100%;
		position: absolute;
		top: 325rpx;
		background-color: rgba(0, 0, 0, .5);
		z-index: 100;

		.propBox {
			width: 100%;
			top: 325rpx;
			border-radius: 0 0 40rpx 40rpx;
			background-color: rgb(250, 247, 250);
			z-index: 1000;
			overflow: hidden;

			.choose {
				background-color: #fff;
				color: rgb(161, 184, 243);
				font-weight: bold;
			}

			view {
				width: 100%;
				height: 70rpx;
				line-height: 70rpx;
				box-sizing: border-box;
				padding: 0 40rpx;
				font-size: 24rpx
			}
		}
	}

	.head {
		width: 100%;
		height: 128rpx;
		box-sizing: border-box;
		padding: 0 50rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.left {
			height: 96rpx;
			width: 506rpx;
			border: 1px solid #eae9e9;
			box-sizing: border-box;
			border-radius: 20px;
			display: flex;
			align-items: center;
			padding: 0 40rpx;
			svg {
				width: 40rpx;
				height: 40rpx;
				margin-right: 40rpx;
			}
		}

		.right {
			width: 96rpx;
			height: 96rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 1px solid #eae9e9;
			border-radius: 50%;
		}
	}

	.wrap-content {
		width: 100%;
		background-color: rgb(240, 240, 241);
		box-sizing: border-box;

		.sell-box {
			background-color: #FFFFFF;
			width: 100%;
			box-sizing: border-box;
			padding: 10rpx 40rpx;
			border-radius: 20px 20px 0px 0px;
			margin-top: 30rpx;

			.commodity-box {
				width: 100%;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: space-between;
				margin-top: 20rpx;

				.commodity-card {
					position: relative;
					width: 322rpx;
					border-radius: 40rpx;
					margin-bottom: 20rpx;

					image {
						width: 322rpx;
						height: 322rpx;
						border-radius: 20rpx;
					}

					.commodity-info-box {
						display: flex;
						gap: 10rpx;

						view {
							background-color: rgb(253, 253, 253);
							font-size: 12rpx;
							box-sizing: border-box;
							padding: 10rpx;
							color: #999
						}

						;
					}

					.commodity-status {
						position: absolute;
						background-color: rgb(130, 126, 117);
						box-sizing: border-box;
						padding: 10rpx 20rpx;
						border-radius: 500rpx;
						left: 20rpx;
						top: 20rpx;
						z-index: 100;
						font-size: 12rpx;
						color: #FFFFFF
					}
				}
			}

			.sort-box {
				height: 40rpx;
				width: 100%;
				display: flex;
				justify-content: space-between;

				.sort-icon-down {
					width: 0;
					height: 0;
					border-top: #565656 solid 8rpx;
					border-left: transparent solid 6rpx;
					border-right: transparent solid 6rpx;
					border-bottom: transparent solid 0rpx;
				}

				.sort-icon-up {
					width: 0;
					height: 0;
					border-top: transparent solid 0rpx;
					border-left: transparent solid 6rpx;
					border-right: transparent solid 6rpx;
					border-bottom: #565656 solid 8rpx;
				}

				.sort-icon-container {
					height: 100%;
					box-sizing: border-box;
					padding: 0 16rpx;
					background-color: rgb(244, 244, 244);
					display: flex;
					align-items: center;
					flex-direction: row;
					justify-content: space-between;
					border-radius: 20rpx;
					gap: 10rpx;

					text {
						font-size: 14rpx;
						color: #565656
					}
				}

				.choose {
					background-color: rgb(231, 233, 254);

					text {
						font-weight: bold;
						color: rgb(161, 184, 243)
					}

					.sort-icon-down {
						width: 0;
						height: 0;
						border-top: rgb(161, 184, 243) solid 8rpx;
						border-left: transparent solid 6rpx;
						border-right: transparent solid 6rpx;
						border-bottom: transparent solid 0rpx;
					}
				}

				.left {
					height: 100%;
					display: flex;
					gap: 20rpx;
				}

				.right {
					height: 100%;
					display: flex;
					gap: 20rpx;

					.sort-icon-box {
						display: flex;
						flex-direction: column;
						gap: 2rpx;
					}
				}
			}
		}

		.activity-box1 {
			height: 352rpx;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 22rpx;
			box-sizing: border-box;
			padding: 0 18rpx;

			.left {
				width: 292rpx;
				height: 100%;
				border-radius: 40rpx;
				overflow: hidden;

				swiper {
					width: 100%;
					height: 100%;

					:deep(.uni-swiper-dot) {
						width: 8rpx;
						height: 8rpx;
						background-color: #FFFFFF;
						opacity: 0.5;
					}

					:deep(.uni-swiper-dot-active) {
						width: 20rpx;
						height: 8rpx;
						background-color: rgb(25, 246, 160);
						opacity: 1;
						border-radius: 4rpx;
					}

					swiper-item {
						width: 100%;
						height: 100%;

						image {
							width: 100%;
							height: 100%;
						}
					}
				}
			}

			.right {
				display: flex;
				flex-direction: column;
				gap: 12rpx;

				view {
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;
					padding: 30rpx 40rpx;
					gap: 10rpx;
					width: 398rpx;
					height: 110rpx;
					background: #FFFFFF;
					/* Border/5 */
					border: 2rpx solid #EAE9E9;
					border-radius: 40rpx;

					text:first-child {
						font-size: 20rpx;
						font-weight: 400;
					}

					text:last-child {
						font-size: 16rpx;
						color: #c7c7c7;
						font-weight: 400;
					}
				}
			}
		}

		.activity-box {
			width: 100%;
			box-sizing: border-box;
			padding: 0 18rpx;
			margin-top: 20rpx;

			.activity-box-wrap {
				width: 100%;
				height: 160rpx;
				background: #FFFFFF;
				border-radius: 40rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				box-sizing: border-box;
				padding: 0 30rpx;
			}

			.activity-list {
				width: 90rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				gap: 10rpx;

				image {
					width: 60rpx;
					height: 60rpx;
					border-radius: 50%;
				}

				view {
					width: 90rpx;
					height: 35rpx;
					font-family: 'Poppins';
					font-style: normal;
					font-weight: 400;
					font-size: 16rpx;
					line-height: 35rpx;
					color: #C7C7C7;
					text-align: center;
					gap: 10rpx;

				}
			}
		}

		.board-box-wrap {
			width: 100%;
			box-sizing: border-box;
			padding: 0 18rpx;

			.board-box {
				width: 100%;
				background: #FFFFFF;
				/* Card */
				box-shadow: 10rpx 12rpx 48rpx rgba(126, 132, 161, 0.1);
				border-radius: 0px 0px 40rpx 40rpx;
				height: 376rpx;
				box-sizing: border-box;
				padding: 24rpx 32rpx 0 32rpx;

				image {
					width: 648rpx;
					height: 286rpx;
					border-radius: 32rpx;
				}

				.text-box {
					display: flex;
					height: 48rpx;
					align-items: center;
					justify-content: space-between;

					.left {
						display: flex;
						align-items: center;
						gap: 10rpx;
						text:first-child {
							background-color: rgb(40, 85, 255);
							box-sizing: border-box;
							padding: 5rpx 7rpx;
							font-size: 12rpx;
							color:#fff;
							border-radius: 10rpx;
							text-align: center;
						}

						text:last-child {
							font-weight: 700;
							font-size: 24rpx;
							line-height: 48rpx;
							color: #171718;
						}
					}

					.right {
						width: 48rpx;
						height: 48rpx;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}

			}
		}
	}
}
</style>