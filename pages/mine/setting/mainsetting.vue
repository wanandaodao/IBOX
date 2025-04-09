<template>
  <view class="setting-container">
    <!-- 顶部栏 -->
    <view class="header">
      <view class="back-icon" @click="goBack">
        <image src="/static/back.png" mode="aspectFit"></image>
      </view>
      <view class="title">设置中心</view>
      <view class="placeholder"></view>
    </view>
    
    <!-- 设置项列表 -->
    <view class="setting-list">
      <!-- 第一组 -->
      <view class="setting-group">
        <view class="setting-item" @click="navigateTo('/pages/mine/setting/personal-info')">
          <view class="item-left">
            <view class="icon-box profile-icon"></view>
            <text>个人信息</text>
          </view>
          <view class="arrow"></view>
        </view>
        
        <view class="setting-item" @click="navigateTo('/pages/mine/verify')">
          <view class="item-left">
            <view class="icon-box verify-icon"></view>
            <text>实名认证</text>
          </view>
          <view class="item-right">
            <text class="status-text unverified">未实名</text>
            <view class="arrow"></view>
          </view>
        </view>
        
        <view class="setting-item" @click="navigateTo('/pages/mine/setting/privacy')">
          <view class="item-left">
            <view class="icon-box privacy-icon"></view>
            <text>隐私设置</text>
          </view>
          <view class="arrow"></view>
        </view>
        
        <view class="setting-item" @click="navigateTo('/pages/mine/security')">
          <view class="item-left">
            <view class="icon-box security-icon"></view>
            <text>安全中心</text>
          </view>
          <view class="arrow"></view>
        </view>
        
        <view class="setting-item" @click="navigateTo('/pages/mine/invoice')">
          <view class="item-left">
            <view class="icon-box invoice-icon"></view>
            <text>开具发票</text>
          </view>
          <view class="arrow"></view>
        </view>
      </view>
      
      <!-- 第二组 -->
      <view class="setting-group">
        <view class="setting-item" @click="navigateTo('/pages/mine/help')">
          <view class="item-left">
            <view class="icon-box help-icon"></view>
            <text>帮助中心</text>
          </view>
          <view class="arrow"></view>
        </view>
        
        <view class="setting-item" @click="checkUpdate">
          <view class="item-left">
            <view class="icon-box update-icon"></view>
            <text>版本更新</text>
          </view>
          <view class="item-right">
            <text class="version-text">1.0.0</text>
            <view class="arrow"></view>
          </view>
        </view>
        
        <view class="setting-item" @click="navigateTo('/pages/mine/setting/about')">
          <view class="item-left">
            <view class="icon-box about-icon"></view>
            <text>关于我们</text>
          </view>
          <view class="arrow"></view>
        </view>
        
        <view class="setting-item" @click="navigateTo('/pages/mine/setting/privacypolicy')">
          <view class="item-left">
            <view class="icon-box privacy-policy-icon"></view>
            <text>隐私政策</text>
          </view>
          <view class="arrow"></view>
        </view>
      </view>
      
      <!-- 第三组 -->
      <view class="setting-group">
        <view class="setting-item" @click="deactivateAccount">
          <view class="item-left">
            <view class="icon-box deactivate-icon"></view>
            <text>注销账号</text>
          </view>
          <view class="arrow"></view>
        </view>
        
        <view class="setting-item" @click="logout">
          <view class="item-left">
            <view class="icon-box logout-icon"></view>
            <text>退出登录</text>
          </view>
          <view class="arrow"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      version: '2.1.01'
    }
  },
  methods: {
    goBack() {
      uni.navigateBack()
    },
    navigateTo(url) {
      uni.navigateTo({
        url
      })
    },
    checkUpdate() {
      uni.showToast({
        title: '已是最新版本',
        icon: 'none'
      })
    },
    deactivateAccount() {
      uni.showModal({
        title: '注销账号',
        content: '确定要注销您的账号吗？此操作不可恢复。',
        confirmText: '确定',
        cancelText: '取消',
        success: (res) => {
          if (res.confirm) {
            // 这里添加注销账号逻辑
            uni.showToast({
              title: '账号注销申请已提交',
              icon: 'none'
            })
          }
        }
      })
    },
    logout() {
      uni.showModal({
        title: '退出登录',
        content: '确定要退出登录吗？',
        confirmText: '确定',
        cancelText: '取消',
        success: (res) => {
          if (res.confirm) {
            // 这里添加退出登录逻辑
            uni.clearStorageSync()
            uni.reLaunch({
              url: '/pages/index/index'
            })
          }
        }
      })
    }
  }
}
</script>

<style lang="scss">
.setting-container {
  min-height: 100vh;
  background-color: #f6f6f6;
  padding-bottom: 30rpx;
  
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
  
  .setting-list {
    margin-top: 80px;
    
    .setting-group {
      background-color: #fff;
      border-radius: 10px;
      margin: 20rpx;
      overflow: hidden;
      
      & + .setting-group {
        margin-top: 20rpx;
      }
    }
    
    .setting-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30rpx;
      position: relative;
      
      &:not(:last-child)::after {
        content: '';
        position: absolute;
        left: 30rpx;
        right: 0;
        bottom: 0;
        height: 1px;
        background-color: #f0f0f0;
      }
      
      .item-left {
        display: flex;
        align-items: center;
        
        .icon-box {
          width: 40rpx;
          height: 40rpx;
          margin-right: 20rpx;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22rpx;
          color: #4B6CFF;
          background: rgba(75, 108, 255, 0.1);
          border-radius: 50%;
        }
        
        text {
          font-size: 28rpx;
          color: #333;
        }
      }
      
      .item-right {
        display: flex;
        align-items: center;
        
        .status-text {
          font-size: 24rpx;
          margin-right: 10rpx;
          
          &.unverified {
            color: #ff5a5a;
          }
        }
        
        .version-text {
          font-size: 24rpx;
          color: #999;
          margin-right: 10rpx;
        }
      }
      
      .arrow {
        width: 16rpx;
        height: 16rpx;
        border-top: 2rpx solid #ccc;
        border-right: 2rpx solid #ccc;
        transform: rotate(45deg);
      }
    }
  }
  
  // 图标样式
  .profile-icon::before {
    content: "👤";
  }
  
  .verify-icon::before {
    content: "✓";
  }
  
  .privacy-icon::before {
    content: "🔒";
  }
  
  .security-icon::before {
    content: "🛡️";
  }
  
  .invoice-icon::before {
    content: "📄";
  }
  
  .help-icon::before {
    content: "❓";
  }
  
  .update-icon::before {
    content: "↻";
  }
  
  .about-icon::before {
    content: "ℹ️";
  }
  
  .privacy-policy-icon::before {
    content: "📋";
  }
  
  .deactivate-icon::before {
    content: "⛔";
  }
  
  .logout-icon::before {
    content: "↪";
  }
}
</style> 