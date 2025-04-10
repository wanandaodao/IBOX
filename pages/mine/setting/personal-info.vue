<template>
      <view class="personal-info-container">
        <!-- iOS状态栏空白区域 -->
        <view class="status-bar-height"></view>
        
        <!-- 顶部栏 -->
        <view class="header">
          <view class="back-icon" @click="goBack">
            <image src="/static/back.png" mode="aspectFit"></image>
          </view>
          <view class="title">个人信息</view>
          <view class="placeholder"></view>
        </view>

        <!-- 信息列表 -->
        <view class="info-list">
          <view class="info-item avatar-item" @click="changeAvatar">
            <text class="label">头像</text>
            <view class="item-right">
              <image class="avatar-img" :src="avatarUrl" mode="aspectFill"></image>
              <view class="arrow"></view>
            </view>
          </view>

          <view class="info-item" @click="navigateToNickname">
            <text class="label">昵称</text>
            <view class="item-right">
              <text class="value">{{nickname}}</text>
              <view class="arrow"></view>
            </view>
          </view>

          <view class="info-item">
            <text class="label">手机号</text>
            <view class="item-right">
              <text class="value">180****5508</text>
              <!-- 手机号通常不可直接修改 -->
            </view>
          </view>

          <view class="info-item">
            <text class="label">钱包地址</text>
            <view class="item-right" @click="copyWalletAddress">
              <text class="value">0x30ad****b1c0</text>
              <view class="copy-icon"></view>
            </view>
          </view>
          
          <view class="info-item address-item" @click="navigateToAddress">
            <text class="label">收货地址</text>
            <view class="item-right">
              <text class="value placeholder-text">{{addressInfo}}</text>
              <view class="arrow"></view>
            </view>
          </view>
        </view>
        
        <!-- 分隔线 -->
         <view class="divider-line"></view>

      </view>
    </template>

    <script>
    export default {
      data() {
        return {
          // 默认头像或从用户信息获取
          avatarUrl: '/static/avatar.png', 
          walletAddress: '0x30ad1234567890abcdef18bb1c0', // 完整地址用于复制
          nickname: 'bs3dq3z6', // 默认昵称
          addressInfo: '这里是实物收货地址' // 默认地址信息
        }
      },
      // 每次页面显示时执行
      onShow() {
        // 从本地缓存获取更新后的昵称
        const updatedNickname = uni.getStorageSync('updatedNickname');
        if (updatedNickname) {
          this.nickname = updatedNickname;
        }
        
        // 从本地缓存获取更新后的地址信息
        const updatedAddress = uni.getStorageSync('updatedAddress');
        if (updatedAddress) {
          this.addressInfo = updatedAddress;
        }
      },
      methods: {
        goBack() {
          uni.navigateBack()
        },
        changeAvatar() {
          uni.showActionSheet({
            itemList: ['从相册中选择', '相机'],
            success: (res) => {
              console.log('选择的按钮索引：' + res.tapIndex);
              let sourceType = [];
              if (res.tapIndex === 0) {
                sourceType = ['album']; // 从相册选择
              } else if (res.tapIndex === 1) {
                sourceType = ['camera']; // 使用相机
              }
              
              if (sourceType.length > 0) {
                uni.chooseImage({
                  count: 1, // 默认9
                  sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                  sourceType: sourceType, 
                  success: (chooseRes) => {
                    const tempFilePaths = chooseRes.tempFilePaths;
                    console.log('选择的图片:', tempFilePaths[0]);
                    // 更新头像显示（实际应用中需要上传到服务器）
                    this.avatarUrl = tempFilePaths[0];
                    uni.showToast({
                      title: '头像更换成功(模拟)',
                      icon: 'success'
                    });
                  },
                  fail: (err) => {
                    console.log('选择图片失败:', err);
                    uni.showToast({
                      title: '选择图片失败',
                      icon: 'none'
                    });
                  }
                });
              }
            },
            fail: (res) => {
              console.log(res.errMsg);
            }
          });
        },
        copyWalletAddress() {
           uni.setClipboardData({
              data: this.walletAddress,
              success: () => {
                uni.showToast({
                  title: '复制成功',
                  icon: 'success'
                })
              },
              fail: () => {
                 uni.showToast({
                  title: '复制失败',
                  icon: 'none'
                })
              }
            })
        },
        navigateToAddress() {
          // 跳转到收货地址管理页面
          uni.navigateTo({ 
            url: '/pages/mine/setting/address-edit' 
          });
        },
        navigateToNickname() {
          // 跳转到昵称修改页面
          uni.navigateTo({
            url: '/pages/mine/setting/nickname-edit'
          });
        }
      }
    }
    </script>

    <style lang="scss">
    .personal-info-container {
      min-height: 100vh;
      background-color: #f6f6f6;
      display: flex;
      flex-direction: column;

      .status-bar-height {
        height: 44px; /* iOS状态栏高度 */
        width: 100%;
        background-color: #fff;
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        background-color: #fff;
        position: relative;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

        .back-icon {
          width: 24px;
          height: 24px;
          image { width: 100%; height: 100%; }
        }
        .title { font-size: 18px; font-weight: bold; color: #333; }
        .placeholder { width: 24px; height: 24px; }
      }

      .info-list {
        background-color: #fff;
        
        .info-item {
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
            transform: scaleY(0.5);
          }

          .label {
            font-size: 28rpx;
            color: #333;
          }

          .item-right {
            display: flex;
            align-items: center;
            
            .value {
              font-size: 28rpx;
              color: #666;
              margin-right: 15rpx;
            }

            .placeholder-text {
              color: #bbb;
            }

            .avatar-img {
              width: 80rpx;
              height: 80rpx;
              border-radius: 50%;
              margin-right: 15rpx;
              background-color: #eee; // 占位背景
            }

            .arrow {
              width: 16rpx;
              height: 16rpx;
              border-top: 2rpx solid #ccc;
              border-right: 2rpx solid #ccc;
              transform: rotate(45deg);
            }
            
            .copy-icon {
              width: 32rpx;
              height: 32rpx;
              background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>');
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center;
              opacity: 0.6;
            }
          }
          
          // 特殊项增加点击效果
          &.avatar-item, &.address-item {
             &:active {
               background-color: #f9f9f9;
             }
          }
        }
      }
      
      .divider-line {
        margin-top: 20rpx;
        height: 10rpx;
        background: linear-gradient(to right, #ff5a5a 50%, #4b6cff 50%);
        background-size: 20rpx 10rpx;
      }
    }
    </style> 