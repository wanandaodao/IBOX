<template>
  <view class="about-container">
    <!-- 顶部栏 -->
    <view class="header">
      <view class="back-icon" @click="goBack">
        <image src="/static/back.png" mode="aspectFit"></image>
      </view>
      <view class="title">关于我们</view>
      <view class="placeholder"></view>
    </view>
    
    <!-- 内容区域 -->
    <view class="content">
      <view class="about-content">
        <view class="section">
          <view class="title">企业介绍</view>
          <view class="text">iBox链盒（霍尔斯链腾科技有限公司）是国内领先的数字藏品生态平台。</view>
        </view>

        <view class="section">
          <view class="title">全价值链服务提供者</view>
          <view class="text">与文旅、非遗、体育等多领域800+头部IP建立合作，完成传统IP从挖掘、二次创作、藏品发行到价值实现的全过程。</view>
        </view>

        <view class="section">
          <view class="title">赋能产业发展先行者</view>
          <view class="text">积极探索数字藏品与实体产业深度融合的新模式，与各领域共建新消费生态，为整个实体产业发展赋能。</view>
        </view>

        <view class="section">
          <view class="title">行业安全标准引领者</view>
          <view class="text">构建全方位安全技术体系、完善的风险管控体系和以安全为基础的合规生态体系，为整个行业的安全发展保驾护航。</view>
        </view>

        <view class="section">
          <view class="title">业务领域</view>
          <view class="text">依靠创新的业务模式，实现了数字藏品从发行、购买、收藏到使用的完整闭环，赋能数字藏品多元化应用场景，通过联动线下权益，进一步完善数字藏品的价值体系构建，为用户带来具有艺术性、文化性、使用性的数字生活体验。</view>
        </view>

        <view class="section">
          <view class="title">传统IP的数字藏品化</view>
          <view class="text">传统IP具有极大的文化价值和收藏价值，深受平台用户喜爱。iBox助力国内非遗、文旅、体育、艺术等高价值IP数字藏品化，并协助相关机构、艺术家等构建传统IP数字藏品化的供应链体系。</view>
        </view>

        <view class="section">
          <view class="title">数字IP运营及管理服务</view>
          <view class="text">在IP数字藏品化的基础上，iBox通过自营及跨界等多种合作模式，为数字IP提供运营营销及管理服务，包括新营销、IP授权管理、价值挖掘、应用场景拓展等多种赋能，全力打造面向Web3.0时代的内容基础设施。</view>
        </view>

        <view class="section">
          <view class="title">打造元宇宙全场景生态体系</view>
          <view class="text">不断挖掘与提高IP价值，促进数字技术与各产业的深度融合，同全球用户共同打造元宇宙全场景生态体系，实现数字经济规模化发展。</view>
        </view>

        <view class="section">
          <view class="title">让"国潮"走向世界</view>
          <view class="text">iBox是年轻人喜爱的数字藏品平台，数字藏品成为年轻一代释放"文化自信"的重要通道。通过将"国潮"与科技结合，让"国潮"在"文化+数字技术+高质量平台"的支持下，更好地走向全世界。</view>
        </view>

        <view class="section">
          <view class="title">公司使命</view>
          <view class="text">用数字收藏美好生活</view>
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
.about-container {
  min-height: 100vh;
  background-color: #fff;
  
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
  
  .content {
    margin-top: 80px;
    padding: 20px;
    
    .about-content {
      .section {
        margin-bottom: 25px;
        
        .title {
          font-size: 16px;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }
        
        .text {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
        }
      }
    }
  }
}
</style> 