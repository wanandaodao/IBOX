<template>
  <view class="wallet-container">
    <view class="wallet-header">
      <view class="back-btn" @click="goBack">
        <text class="iconfont">←</text>
      </view>
      <text class="title">我的钱包</text>
    </view>
    
    <view class="wallet-content">
      <!-- 钱包内容将在后续添加 -->
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    goBack() {
      uni.navigateBack()
    }
  }
}
</script>

<style lang="scss">
.wallet-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  
  .wallet-header {
    position: relative;
    height: 88rpx;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30rpx;
    
    .back-btn {
      position: absolute;
      left: 30rpx;
      font-size: 36rpx;
      color: #333;
    }
    
    .title {
      font-size: 32rpx;
      font-weight: bold;
      color: #333;
    }
  }
  
  .wallet-content {
    padding: 20rpx;
  }
}
</style> 