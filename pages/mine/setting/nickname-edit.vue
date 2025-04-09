<template>
  <view class="nickname-edit-container">
    <!-- 顶部栏 -->
    <view class="header">
      <view class="back-icon" @click="goBack">
        <image src="/static/back.png" mode="aspectFit"></image>
      </view>
      <view class="title">修改昵称</view>
      <view class="save-btn" @click="saveNickname">保存</view>
    </view>

    <!-- 昵称输入框 -->
    <view class="input-container">
      <input 
        type="text"
        v-model="nickname"
        placeholder="请输入昵称"
        maxlength="20"
        class="nickname-input"
      />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      nickname: 'bs3dq3z6' // 默认显示当前昵称
    }
  },
  methods: {
    goBack() {
      uni.navigateBack()
    },
    saveNickname() {
      if (!this.nickname.trim()) {
        uni.showToast({
          title: '昵称不能为空',
          icon: 'none'
        })
        return
      }
      
      // 这里应该调用API保存昵称
      // 模拟保存成功
      uni.showToast({
        title: '保存成功',
        icon: 'success',
        duration: 1500,
        success: () => {
          setTimeout(() => {
            uni.navigateBack()
          }, 1500)
        }
      })
    }
  }
}
</script>

<style lang="scss">
.nickname-edit-container {
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
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

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
	  padding-left: 25px;
    }

    .save-btn {
      font-size: 16px;
      color: #4b6cff;
      padding: 5px 10px;
      
      &:active {
        opacity: 0.8;
      }
    }
  }

  .input-container {
    margin-top: 80px;
    padding: 20px;
    background-color: #fff;

    .nickname-input {
      width: 100%;
      height: 25px;
      padding: 0 15px;
      font-size: 16px;
      color: #333;
      border: none;
      background: none;
      
      &::placeholder {
        color: #999;
      }
    }
  }
}
</style> 