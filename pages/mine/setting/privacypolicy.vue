<template>
  <view class="privacy-container">
    <!-- iOS状态栏空白区域 -->
    <view class="status-bar-height"></view>
    
    <!-- 顶部栏 -->
    <view class="header">
      <view class="back-icon" @click="goBack">
        <image src="/static/back.png" mode="aspectFit"></image>
      </view>
      <view class="title">TopBox平台隐私政策</view>
      <view class="placeholder"></view>
    </view>
    
    <!-- 内容区域 -->
    <view class="content">
      <view class="privacy-content">
        <view class="section">
          <text class="greeting">尊敬的用户，您好：</text>
          <text class="company-intro">霍尔斯链腾科技有限公司（下文称"iBox"或"我们"）深知隐私对您的重要性，并会尽全力保护您的隐私。请在向iBox提交个人信息之前，阅读、了解本《iBox平台隐私政策》（下文简称"本政策"）。本政策适用于显示本隐私政策、或链接至本隐私政策的所有iBox官网和产品、服务。</text>
        </view>

        <view class="section">
          <text class="description">本政策阐述了iBox如何处理您的个人信息，但本政策可能并不涉及所有可能的信息处理情境。有关收集产品或服务特定数据的信息可能由iBox在补充政策中，或者在收集信息时提供的通知，或在不定期更新的本政策中即时发布。</text>
        </view>

        <view class="section">
          <text class="purpose">我们制定本政策的目的在于帮助您了解以下内容：</text>
          <view class="policy-items">
            <text>1. 如何收集和使用您的个人信息</text>
            <text>2. 如何使用Cookie和同类技术</text>
            <text>3. 如何披露您的个人信息</text>
            <text>4. 如何保护您的个人信息</text>
            <text>5. 如何存储您的个人信息</text>
            <text>6. 如何查看、更新和删除您的个人信息</text>
            <text>7. 第三方服务提供商</text>
            <text>8. 您的个人信息如何在全球范围转移</text>
            <text>9. 未成年人保护</text>
            <text>10. 本政策如何更新</text>
            <text>11. 如何联系我们</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goBack() {
      uni.navigateBack()
    }
  }
}
</script>

<style lang="scss">
.privacy-container {
  min-height: 100vh;
  background-color: #fff;
  
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
  
  .content {
    margin-top: 0;
    padding: 20px;
    
    .privacy-content {
      .section {
        margin-bottom: 20px;
        
        .greeting {
          display: block;
          font-size: 16px;
          color: #333;
          margin-bottom: 10px;
        }
        
        .company-intro,
        .description {
          display: block;
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        
        .purpose {
          display: block;
          font-size: 16px;
          color: #333;
          margin-bottom: 10px;
        }
        
        .policy-items {
          text {
            display: block;
            font-size: 14px;
            color: #666;
            line-height: 2;
          }
        }
      }
    }
  }
}
</style> 