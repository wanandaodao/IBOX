<template>
  <view class="box-record-container">
    <!-- iOS状态栏空白区域 -->
    <view class="status-bar-height"></view>
    
    <!-- 顶部栏 -->
    <view class="header">
      <view class="back-icon" @click="goBack">
        <image src="/static/back.png" mode="aspectFit"></image>
      </view>
      <view class="title">开盒记录</view>
      <view class="filter-btn" @click="showFilterOptions">
        <text>{{filterText}}</text>
        <image src="/static/dropdown.png" mode="aspectFit"></image>
      </view>
    </view>
    
    <!-- 空状态展示 -->
    <view class="empty-state" v-if="!hasRecords">
      <image src="/static/empty-box.svg" mode="aspectFit"></image>
      <text>暂无数据</text>
      <text>目前没有任何数据</text>
    </view>
    
    <!-- 过滤选项弹出菜单 -->
    <view class="filter-options" v-if="showFilter" @click.stop="hideFilterOptions">
      <view class="filter-option-item" @click.stop="selectFilter('all')">
        <text>全部订单</text>
      </view>
      <view class="filter-option-item" @click.stop="selectFilter('custom')">
        <text>自定义时间</text>
      </view>
    </view>
    
    <!-- 时间选择器弹出层 -->
    <view class="picker-popup" v-if="showDatePicker">
      <view class="picker-mask" @click="cancelDatePicker"></view>
      <view class="picker-content">
        <view class="picker-header">
          <text @click="cancelDatePicker">取消</text>
          <text @click="confirmDatePicker">确定</text>
        </view>
        <picker-view class="time-picker" :value="datePickerValue" @change="handleDateChange">
          <picker-view-column>
            <view class="picker-item" v-for="(item, index) in years" :key="index">{{item}}年</view>
          </picker-view-column>
          <picker-view-column>
            <view class="picker-item" v-for="(item, index) in months" :key="index">{{item}}月</view>
          </picker-view-column>
        </picker-view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    const currentYear = new Date().getFullYear()
    const years = []
    for (let i = currentYear - 5; i <= currentYear; i++) {
      years.push(i)
    }
    
    const months = []
    for (let i = 1; i <= 12; i++) {
      months.push(i)
    }
    
    return {
      hasRecords: false,
      showFilter: false,
      filterType: 'all',
      filterText: '全部订单',
      showDatePicker: false,
      years,
      months,
      datePickerValue: [5, new Date().getMonth()], // 默认选中当前年和月
      selectedDate: {
        year: currentYear,
        month: new Date().getMonth() + 1
      }
    }
  },
  methods: {
    goBack() {
      uni.navigateBack()
    },
    showFilterOptions() {
      this.showFilter = true
      // 点击其他地方关闭下拉菜单
      setTimeout(() => {
        document.addEventListener('click', this.hideFilterOptions, { once: true })
      }, 0)
    },
    hideFilterOptions() {
      this.showFilter = false
    },
    selectFilter(type) {
      this.filterType = type
      this.hideFilterOptions()
      
      if (type === 'all') {
        this.filterText = '全部订单'
      } else if (type === 'custom') {
        this.showDatePicker = true
        this.filterText = `${this.selectedDate.year}年${this.selectedDate.month}月`
      }
    },
    handleDateChange(e) {
      const values = e.detail.value
      this.datePickerValue = values
      this.selectedDate = {
        year: this.years[values[0]],
        month: this.months[values[1]]
      }
    },
    cancelDatePicker() {
      this.showDatePicker = false
      if (this.filterType === 'custom' && !this.selectedDate) {
        this.filterType = 'all'
        this.filterText = '全部订单'
      }
    },
    confirmDatePicker() {
      this.showDatePicker = false
      this.filterText = `${this.selectedDate.year}年${this.selectedDate.month}月`
      
      // 这里可以添加根据选定日期筛选数据的逻辑
      console.log('Filter by date:', this.selectedDate)
    }
  }
}
</script>

<style lang="scss">
.box-record-container {
  min-height: 100vh;
  background-color: #f8f8f8;
  position: relative;
  
  .status-bar-height {
    height: 44px; /* iOS状态栏高度 */
    width: 100%;
    background-color: #fff;
  }
  
  .header {
    display: flex;
    align-items: center;
    padding: 15px;
    background-color: #fff;
    position: relative;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    
    .back-icon {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      
      image {
        width: 100%;
        height: 100%;
      }
    }
    
    .title {
      flex: 1;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      color: #333;
      padding-right: 40px;
    }
    
    .filter-btn {
      position: absolute;
      right: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 15px;
      background-color: #f5f5f5;
      border-radius: 15px;
      transition: all 0.3s ease;
      width: 90px;
      
      &.active {
        background-color: #4B6CFF;
        
        text {
          color: #fff;
        }
      }
      
      text {
        font-size: 14px;
        color: #4B6CFF;
        margin-right: 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      image {
        width: 12px;
        height: 12px;
        flex-shrink: 0;
      }
    }
  }
  
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;
    
    image {
      width: 120px;
      height: 120px;
      margin-bottom: 20px;
    }
    
    text {
      color: #999;
      font-size: 14px;
      line-height: 1.5;
      text-align: center;
      width: 100%;
      
      &:last-child {
        margin-top: 5px;
        font-size: 12px;
      }
    }
  }
  
  .filter-options {
    position: absolute;
    top: 70px;
    right: 15px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 101;
    overflow: hidden;
    width: 100px;
    
    .filter-option-item {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px 12px;
      min-width: auto;
      
      &:not(:last-child) {
        border-bottom: 1px solid #f5f5f5;
      }
      
      text {
        font-size: 13px;
        color: #333;
        text-align: center;
        white-space: nowrap;
      }
    }
  }
  
  .picker-popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    
    .picker-mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
    
    .picker-content {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
      border-radius: 12px 12px 0 0;
      overflow: hidden;
      
      .picker-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        border-bottom: 1px solid #f0f0f0;
        
        text {
          font-size: 16px;
          
          &:first-child {
            color: #999;
          }
          
          &:last-child {
            color: #2b65ff;
            font-weight: bold;
          }
        }
      }
      
      .time-picker {
        height: 240px;
        
        .picker-item {
          line-height: 40px;
          text-align: center;
        }
      }
    }
  }
}
</style>