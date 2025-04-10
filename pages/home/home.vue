<template>
	<view class="content">
		
		<view class="home" v-if="tabbarIndex == 0">
			<homeHomeVue ></homeHomeVue>
		</view>
		<view class="box" v-if="tabbarIndex == 1">
			<homeBoxVue ></homeBoxVue>
		</view>
		
		<view class="tabbar">
			<view @click="tabbarIndex = 0">
				<image v-if="tabbarIndex != 0" src="/static/home.png" mode="" />
				<image v-if="tabbarIndex == 0" src="/static/home-choose.png" mode="" />
		
				<text v-if="tabbarIndex != 0">Home</text>
				<text style="color:black" v-if="tabbarIndex == 0">Home</text>
			</view>

			<view @click="tabbarIndex = 1">

				<image v-if="tabbarIndex != 1" src="/static/Category.png" mode="" />
				
				<image v-if="tabbarIndex == 1" src="/static/Category-choose.png" mode="" />
		
		
				<text v-if="tabbarIndex != 1">Box超话</text>
				<text style="color:black" v-if="tabbarIndex == 1">Box超话</text>
			</view>
			<view @click="toProfile">
				<image  src="/static/profile.png" mode="" />
				<text>Profile</text>
			</view>
		</view>
	</view>
</template>

<script setup >
import homeHomeVue from '../../components/home-home.vue';
import homeBoxVue from '../../components/home-Box.vue';
import {ref} from 'vue'
import {onShow} from '@dcloudio/uni-app'
const tabbarIndex = ref(0)
const toProfile = () =>{
	console.log(111)
	uni.navigateTo({
		 url:'/pages/profile/profile',
		 animationType: 'none',
		 animationDuration: 0
	});
}

onShow(() => {
  // 检查是否来自导航跳转
  const isFromNavigation = uni.getStorageSync('isFromNavigation')
  if (isFromNavigation) {
    // 如果是来自导航跳转，获取存储的index值
    const index = uni.getStorageSync('tabbarIndex')
    if (index !== undefined && index !== null) {
      tabbarIndex.value = index
    }
    // 清除存储的值
    uni.removeStorageSync('tabbarIndex')
    uni.removeStorageSync('isFromNavigation')
  } else {
    // 如果不是来自导航跳转，且是首次加载，设置为默认值0
    if (tabbarIndex.value === undefined) {
      tabbarIndex.value = 0
    }
  }
})
</script>

<style lang="scss" scoped>
.content{
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	.status_bar {
	    height: 88rpx;
	    width: 100%;
	}
	.home,.box,.profile{
		flex: 1;
		width: 100%;
	}
	.tabbar{
		width: 100%;
		height: 160rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding: 0 60rpx;

		view{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 128rpx;
			height: 104rpx;
			image{
				width: 40rpx;
				height: 40rpx;
			}
			text{
				color:#565656;
				font-size: 20rpx;
				line-height: 32rpx;
			}
		};
	}
}
</style>
