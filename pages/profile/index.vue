<template>
  <view class="profile-container">
    <view class="status-bars"></view>
    <!-- 顶部用户信息区域 -->
    <view class="user-info">

      <view class="avatar-section">
        <image class="avatar" src="/static/avatar.png" mode="aspectFill"></image>
        <view class="user-detail">
          <text class="username">bs3dq3z6</text>
          <view class="wallet-address">
            <text>0x30ad...18bb1c0</text>
            <view class="copy-btn" @click="copyWalletAddress">
              <text class="copy-icon">复制</text>
            </view>
          </view>
        </view>
      </view>
      <view class="action-buttons">
        <view class="action-btn" @click="navigateTo('/pages/orders/index')">
          <image src="/static/order.png" mode="aspectFit"></image>
          <text>我的订单</text>
        </view>
        <view class="action-btn" @click="navigateTo('/pages/wallet/index')">
          <image src="/static/wallet.png" mode="aspectFit"></image>
          <text>我的钱包</text>
        </view>
        <view class="action-btn" @click="navigateTo('/pages/settings/index')">
          <image src="/static/settings.png" mode="aspectFit"></image>
          <text>设置中心</text>
        </view>
      </view>
    </view>

    <!-- 资产切换区域 -->
    <view class="assets-section">
      <view class="assets-header">
        <view 
          :class="['header-tab', { active: currentAssetTab === 0 }]"
          @click="switchAssetTab(0)"
        >
          持有资产
        </view>
        <view 
          :class="['header-tab', { active: currentAssetTab === 1 }]"
          @click="switchAssetTab(1)"
        >
          售出资产
        </view>
      </view>

      <swiper class="assets-swiper" :current="currentAssetTab" @change="handleSwiperChange">
        <!-- 持有资产 -->
        <swiper-item>
          <view class="assets-content">
            <view class="sub-tabs">
              <view 
                v-for="(tab, index) in assetTabs" 
                :key="index"
                :class="['sub-tab', { active: currentSubTab === index }]"
                @click="switchSubTab(index)"
              >
                {{ tab }}
              </view>
            </view>
            <view class="empty-box">
              <image src="/static/empty-box.svg" mode="aspectFit"></image>
              <text>暂无数据</text>
            </view>
          </view>
        </swiper-item>
        
        <!-- 售出资产 -->
        <swiper-item>
          <view class="assets-content">
            <view class="empty-box">
              <image src="/static/empty-box.svg" mode="aspectFit"></image>
              <text>暂无数据</text>
            </view>
          </view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      currentAssetTab: 0,
      currentSubTab: 0,
      assetTabs: ['藏品', '盲盒', '元宇宙']
    }
  },
  methods: {
    copyWalletAddress() {
      const walletAddress = '0x30ad...18bb1c0'
      uni.setClipboardData({
        data: walletAddress,
        success: () => {
          uni.showToast({
            title: '复制成功',
            icon: 'success'
          })
        }
      })
    },
    navigateTo(url) {
      uni.navigateTo({
        url
      })
    },
    handleSwiperChange(e) {
      this.currentAssetTab = e.detail.current
    },
    switchAssetTab(index) {
      this.currentAssetTab = index
    },
    switchSubTab(index) {
      this.currentSubTab = index
    }
  }
}
</script>

<style lang="scss">
.profile-container {
  min-height: 100vh;
  background: linear-gradient(180deg, #4B6CFF 0%, #4B6CFF 30%, #F5F5F5 30%);
  .status-bars{
    height: 88rpx;
    width: 100%;
  }
  .user-info {
    padding: 20rpx;
    .avatar-section {
      display: flex;
      align-items: center;
      margin-bottom: 30rpx;
      
      .avatar {
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
        margin-right: 20rpx;
        border: 4rpx solid #FFFFFF;
      }
      
      .user-detail {
        .username {
          font-size: 36rpx;
          color: #FFFFFF;
          font-weight: bold;
          margin-bottom: 10rpx;
        }
        
        .wallet-address {
          display: flex;
          align-items: center;
          
          text {
            color: rgba(255, 255, 255, 0.8);
            font-size: 28rpx;
          }
          
          .copy-btn {
            margin-left: 20rpx;
            padding: 4rpx 12rpx;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4rpx;
            
            .copy-icon {
              font-size: 24rpx;
              color: #FFFFFF;
            }
          }
        }
      }
    }
    
    .action-buttons {
      display: flex;
      justify-content: space-around;
      background: #FFFFFF;
      border-radius: 12rpx;
      padding: 20rpx 0;
      
      .action-btn {
        text-align: center;
        
        image {
          width: 48rpx;
          height: 48rpx;
          margin-bottom: 8rpx;
        }
        
        text {
          font-size: 28rpx;
          color: #333;
          display: block;
        }
      }
    }
  }
  
  .assets-section {
    margin-top: 20rpx;
    background: #FFFFFF;
    border-radius: 12rpx;
    
    .assets-header {
      display: flex;
      border-bottom: 1rpx solid #EEEEEE;
      
      .header-tab {
        flex: 1;
        text-align: center;
        padding: 20rpx 0;
        font-size: 28rpx;
        color: #666;
        position: relative;
        
        &.active {
          color: #4B6CFF;
          font-weight: bold;
          
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 40rpx;
            height: 4rpx;
            background: #4B6CFF;
            border-radius: 2rpx;
          }
        }
      }
    }
    
    .assets-swiper {
      height: 800rpx;
      
      .assets-content {
        padding: 20rpx;
        
        .sub-tabs {
          display: flex;
          margin-bottom: 30rpx;
          
          .sub-tab {
            padding: 10rpx 30rpx;
            font-size: 28rpx;
            color: #666;
            background: #F5F5F5;
            border-radius: 30rpx;
            margin-right: 20rpx;
            
            &.active {
              color: #FFFFFF;
              background: #4B6CFF;
            }
          }
        }
        
        .empty-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 100rpx;
          
          image {
            width: 200rpx;
            height: 200rpx;
            margin-bottom: 20rpx;
          }
          
          text {
            font-size: 28rpx;
            color: #999;
          }
        }
      }
    }
  }
}
</style> 