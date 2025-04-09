<template>
  <view class="privacy-container">
    <!-- 顶部栏 -->
    <view class="header">
      <view class="back-icon" @click="goBack">
        <image src="/static/back.png" mode="aspectFit"></image>
      </view>
      <view class="title">隐私设置</view>
      <view class="placeholder"></view>
    </view>
    
    <!-- 隐私设置列表 -->
    <view class="privacy-list">
      <view class="privacy-item">
        <text>我拥有的仅自己可见</text>
        <switch :checked="ownPrivacy" @change="handleOwnPrivacyChange" color="#4B6CFF" />
      </view>
      
      <view class="privacy-item">
        <text>我卖出的仅自己可见</text>
        <switch :checked="sellPrivacy" @change="handleSellPrivacyChange" color="#4B6CFF" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      ownPrivacy: false,
      sellPrivacy: false
    }
  },
  methods: {
    goBack() {
      uni.navigateBack()
    },
    handleOwnPrivacyChange(e) {
      this.ownPrivacy = e.detail.value
      // 这里可以添加保存设置的逻辑
    },
    handleSellPrivacyChange(e) {
      this.sellPrivacy = e.detail.value
      // 这里可以添加保存设置的逻辑
    }
  }
}
</script>

<style lang="scss">
.privacy-container {
  min-height: 100vh;
  background-color: #f6f6f6;
  
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
      
      image {
        width: 100%;
        height: 100%;
      }
    }
    
    .title {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
    
    .placeholder {
      width: 24px;
      height: 24px;
    }
  }
  
  .privacy-list {
    margin-top: 80px;
    background-color: #fff;
    
    .privacy-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30rpx;
      border-bottom: 1px solid #f0f0f0;
      
      text {
        font-size: 28rpx;
        color: #333;
      }
    }
  }
}
</style> 