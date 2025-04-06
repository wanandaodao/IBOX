<template>
  <view class="orders-container">
    <view class="orders-header">
      <view class="back-btn" @click="goBack">
        <text class="iconfont">←</text>
      </view>
      <text class="title">我的订单</text>
    </view>
    
    <view class="orders-content">
      <!-- 订单内容将在后续添加 -->
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
.orders-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  
  .orders-header {
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
  
  .orders-content {
    padding: 20rpx;
  }
}
</style> 