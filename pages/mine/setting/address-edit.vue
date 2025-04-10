<template>
  <view class="address-edit-container">
    <!-- iOS状态栏空白区域 -->
    <view class="status-bar-height"></view>
    
    <!-- 顶部栏 -->
    <view class="header">
      <view class="back-icon" @click="goBack">
        <image src="/static/back.png" mode="aspectFit"></image>
      </view>
      <view class="title">收货地址</view>
      <view class="save-btn" @click="saveAddress">保存</view>
    </view>
    
    <!-- 地址表单 -->
    <view class="address-form">
      <view class="form-item">
        <view class="label">收货人</view>
        <input type="text" v-model="addressData.name" placeholder="请输入收货人姓名" class="input" />
      </view>
      
      <view class="form-item">
        <view class="label">手机号码</view>
        <input type="number" v-model="addressData.phone" placeholder="请输入手机号码" class="input" maxlength="11" />
      </view>
      
      <view class="form-item" @click="showRegionPicker">
        <view class="label">所在地区</view>
        <view class="region-picker">
          <text class="region-text" :class="{ 'placeholder': !addressData.region }">{{ addressData.region || '请选择省/市/区' }}</text>
          <view class="arrow"></view>
        </view>
      </view>
      
      <view class="form-item">
        <view class="label">详细地址</view>
        <textarea v-model="addressData.address" placeholder="请输入详细地址，如街道名称、门牌号等" class="textarea" />
      </view>
      
      <view class="form-item switch-item">
        <view class="label">设为默认地址</view>
        <switch :checked="addressData.isDefault" @change="toggleDefault" color="#4B6CFF" />
      </view>
    </view>
    
    <!-- 底部操作区 -->
    <view class="bottom-actions" v-if="isEdit">
      <view class="delete-btn" @click="deleteAddress">删除收货地址</view>
    </view>
    
    <!-- 省市区选择器弹出层 -->
    <view class="picker-popup" v-if="showPicker">
      <view class="picker-mask" @click="hideRegionPicker"></view>
      <view class="picker-content">
        <view class="picker-header">
          <text @click="hideRegionPicker">取消</text>
          <text>所在地区</text>
          <text @click="confirmRegion">确定</text>
        </view>
        <picker-view class="region-picker-view" :value="regionIndexes" @change="handleRegionChange">
          <picker-view-column>
            <view class="picker-item" v-for="(item, index) in provinces" :key="index">{{item.name}}</view>
          </picker-view-column>
          <picker-view-column>
            <view class="picker-item" v-for="(item, index) in cities" :key="index">{{item.name}}</view>
          </picker-view-column>
          <picker-view-column>
            <view class="picker-item" v-for="(item, index) in districts" :key="index">{{item.name}}</view>
          </picker-view-column>
        </picker-view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isEdit: false, // 是否编辑已有地址
      addressData: {
        id: '',
        name: '',
        phone: '',
        region: '',
        address: '',
        isDefault: false
      },
      // 省市区选择器相关数据
      showPicker: false,
      provinces: [], // 省份数据
      cities: [], // 城市数据
      districts: [], // 区县数据
      regionIndexes: [0, 0, 0], // 选择的省市区索引
      selectedRegion: {
        province: '',
        city: '',
        district: ''
      },
      // 模拟省市区数据
      mockRegionData: [
        {
          name: '北京市',
          children: [
            {
              name: '北京市',
              children: [
                { name: '东城区' },
                { name: '西城区' },
                { name: '朝阳区' },
                { name: '海淀区' },
                { name: '丰台区' }
              ]
            }
          ]
        },
        {
          name: '上海市',
          children: [
            {
              name: '上海市',
              children: [
                { name: '黄浦区' },
                { name: '徐汇区' },
                { name: '长宁区' },
                { name: '静安区' },
                { name: '普陀区' }
              ]
            }
          ]
        },
        {
          name: '广东省',
          children: [
            {
              name: '广州市',
              children: [
                { name: '越秀区' },
                { name: '海珠区' },
                { name: '荔湾区' },
                { name: '天河区' },
                { name: '白云区' }
              ]
            },
            {
              name: '深圳市',
              children: [
                { name: '福田区' },
                { name: '罗湖区' },
                { name: '南山区' },
                { name: '宝安区' },
                { name: '龙岗区' }
              ]
            }
          ]
        },
        {
          name: '江苏省',
          children: [
            {
              name: '南京市',
              children: [
                { name: '玄武区' },
                { name: '秦淮区' },
                { name: '建邺区' },
                { name: '鼓楼区' },
                { name: '浦口区' }
              ]
            },
            {
              name: '苏州市',
              children: [
                { name: '姑苏区' },
                { name: '虎丘区' },
                { name: '吴中区' },
                { name: '相城区' },
                { name: '吴江区' }
              ]
            }
          ]
        }
      ]
    }
  },
  created() {
    // 初始化省市区数据
    this.provinces = this.mockRegionData;
    this.cities = this.provinces[0]?.children || [];
    this.districts = this.cities[0]?.children || [];
    
    // 先从缓存中获取之前保存过的地址数据
    const savedAddressData = uni.getStorageSync('savedAddressData');
    
    // 检查是否有要编辑的地址
    const addressId = this.$route?.query?.id;
    if (addressId) {
      this.isEdit = true;
      // 这里应该从API获取地址数据，这里用模拟数据
      this.addressData = {
        id: addressId,
        name: '张三',
        phone: '13800138000',
        region: '广东省 深圳市 南山区',
        address: '科技园南路XX号XX室',
        isDefault: true
      };
    } else if (savedAddressData) {
      // 如果没有指定编辑ID但存在缓存数据，使用缓存数据
      this.addressData = JSON.parse(savedAddressData);
    }
    
    // 处理地区数据
    if (this.addressData.region) {
      const regions = this.addressData.region.split(' ');
      if (regions.length === 3) {
        this.selectedRegion.province = regions[0];
        this.selectedRegion.city = regions[1];
        this.selectedRegion.district = regions[2];
        
        // 设置索引
        this.setRegionIndexes();
      }
    }
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    showRegionPicker() {
      this.showPicker = true;
    },
    hideRegionPicker() {
      this.showPicker = false;
    },
    setRegionIndexes() {
      // 根据选择的地区名称设置对应的索引
      const provinceIndex = this.provinces.findIndex(p => p.name === this.selectedRegion.province);
      if (provinceIndex > -1) {
        this.regionIndexes[0] = provinceIndex;
        this.cities = this.provinces[provinceIndex].children || [];
        
        const cityIndex = this.cities.findIndex(c => c.name === this.selectedRegion.city);
        if (cityIndex > -1) {
          this.regionIndexes[1] = cityIndex;
          this.districts = this.cities[cityIndex].children || [];
          
          const districtIndex = this.districts.findIndex(d => d.name === this.selectedRegion.district);
          if (districtIndex > -1) {
            this.regionIndexes[2] = districtIndex;
          } else {
            this.regionIndexes[2] = 0;
          }
        } else {
          this.regionIndexes[1] = 0;
          this.regionIndexes[2] = 0;
        }
      } else {
        this.regionIndexes = [0, 0, 0];
      }
    },
    handleRegionChange(e) {
      const values = e.detail.value;
      
      // 检查省份是否变化
      if (values[0] !== this.regionIndexes[0]) {
        this.cities = this.provinces[values[0]].children || [];
        this.districts = this.cities[0]?.children || [];
        values[1] = 0;
        values[2] = 0;
      }
      
      // 检查城市是否变化
      if (values[1] !== this.regionIndexes[1]) {
        this.districts = this.cities[values[1]]?.children || [];
        values[2] = 0;
      }
      
      this.regionIndexes = values;
      
      // 更新选中的省市区
      this.selectedRegion = {
        province: this.provinces[values[0]]?.name || '',
        city: this.cities[values[1]]?.name || '',
        district: this.districts[values[2]]?.name || ''
      };
      
      // 实时更新地址数据中的地区字段，强制刷新视图
      this.$nextTick(() => {
        this.addressData.region = `${this.selectedRegion.province} ${this.selectedRegion.city} ${this.selectedRegion.district}`;
      });
    },
    confirmRegion() {
      // 确保所有地区值都存在
      if (!this.selectedRegion.province || !this.selectedRegion.city || !this.selectedRegion.district) {
        uni.showToast({
          title: '请选择完整的地区信息',
          icon: 'none'
        });
        return;
      }
      
      // 更新地址数据中的地区字段
      this.addressData.region = `${this.selectedRegion.province} ${this.selectedRegion.city} ${this.selectedRegion.district}`;
      console.log('已选择地区：', this.addressData.region);
      this.hideRegionPicker();
    },
    toggleDefault(e) {
      this.addressData.isDefault = e.detail.value;
    },
    saveAddress() {
      // 表单验证
      if (!this.addressData.name) {
        return uni.showToast({ title: '请输入收货人姓名', icon: 'none' });
      }
      if (!this.addressData.phone) {
        return uni.showToast({ title: '请输入手机号码', icon: 'none' });
      }
      if (!/^1\d{10}$/.test(this.addressData.phone)) {
        return uni.showToast({ title: '手机号码格式不正确', icon: 'none' });
      }
      if (!this.addressData.region) {
        return uni.showToast({ title: '请选择所在地区', icon: 'none' });
      }
      if (!this.addressData.address) {
        return uni.showToast({ title: '请输入详细地址', icon: 'none' });
      }
      
      // 构建完整地址信息用于显示
      const fullAddress = `${this.addressData.region} ${this.addressData.address}`;
      
      // 保存地址信息到缓存中，供personal-info页面获取
      uni.setStorageSync('updatedAddress', fullAddress);
      
      // 保存完整地址对象到缓存中，供下次编辑使用
      uni.setStorageSync('savedAddressData', JSON.stringify(this.addressData));
      
      // 显示保存中提示
      uni.showLoading({ title: '保存中...' });
      
      // 模拟保存操作
      setTimeout(() => {
        uni.hideLoading();
        uni.showToast({ 
          title: '保存成功', 
          icon: 'success',
          success: () => {
            setTimeout(() => {
              uni.navigateBack();
            }, 1500);
          }
        });
      }, 500);
    },
    deleteAddress() {
      uni.showModal({
        title: '提示',
        content: '确定要删除该收货地址吗？',
        success: (res) => {
          if (res.confirm) {
            // 清除地址相关缓存
            uni.removeStorageSync('savedAddressData');
            uni.setStorageSync('updatedAddress', '');
            
            // 显示删除中提示
            uni.showLoading({ title: '删除中...' });
            
            // 模拟删除操作
            setTimeout(() => {
              uni.hideLoading();
              uni.showToast({ 
                title: '删除成功', 
                icon: 'success',
                success: () => {
                  setTimeout(() => {
                    uni.navigateBack();
                  }, 1500);
                }
              });
            }, 500);
          }
        }
      });
    }
  }
}
</script>

<style lang="scss">
.address-edit-container {
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
    
    .title {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
    
    .save-btn {
      font-size: 16px;
      color: #4B6CFF;
    }
  }
  
  .address-form {
    margin-top: 0;
    background-color: #fff;
    
    .form-item {
      display: flex;
      position: relative;
      padding: 20rpx 30rpx;
      
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
        width: 180rpx;
        font-size: 28rpx;
        color: #333;
        padding: 20rpx 20rpx 20rpx 0;
      }
      
      .input, .textarea {
        flex: 1;
        height: 60rpx;
        line-height: 60rpx;
        font-size: 28rpx;
        color: #333;
        padding: 0;
        background-color: transparent;
      }
      
      .textarea {
        height: 120rpx;
        line-height: 40rpx;
        padding-top: 10rpx;
      }
      
      .region-picker {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        .region-text {
          font-size: 28rpx;
          color: #000;
          
          &.placeholder {
            color: #999;
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
      
      &.switch-item {
        justify-content: space-between;
      }
    }
  }
  
  .bottom-actions {
    margin-top: 30rpx;
    padding: 0 30rpx;
    
    .delete-btn {
      width: 100%;
      height: 90rpx;
      line-height: 90rpx;
      background-color: #fff;
      color: #ff5a5a;
      font-size: 30rpx;
      text-align: center;
      border-radius: 8rpx;
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
            padding: 5px 10px;
          }
          
          &:last-child {
            color: #4b6cff;
            font-weight: bold;
            padding: 5px 10px;
            border-radius: 4px;
            
            &:active {
              background-color: rgba(75, 108, 255, 0.1);
            }
          }
        }
      }
      
      .region-picker-view {
        height: 260px;
        
        .picker-item {
          line-height: 40px;
          text-align: center;
          font-size: 14px;
        }
      }
    }
  }
}
</style> 