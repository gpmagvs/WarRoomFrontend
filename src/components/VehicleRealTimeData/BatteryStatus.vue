<template>
  <CardContainer>
    <template #header>
      <span>電池狀態</span>
    </template>
    <div class="d-flex p-2 align-items-center">
      <div class="info-container">
        <el-progress :percentage="batteryStatus.batLevel" type="circle" width="90" />
      </div>
      <div class="w-100 ms-4 ps-2">
        <el-row class="h-50 d-flex align-items-center">
          <el-col :span="12">
            <div class="info-container">
              <span class="info-label">電壓</span>
              <span class="info-value">{{ batteryStatus.batVoltage }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="info-container">
              <span class="info-label">溫度</span>
              <span class="info-value">-</span>
            </div>
          </el-col>
        </el-row>
        <el-row class="h-50 d-flex align-items-center">
          <el-col :span="12">
            <div class="info-container">
              <span class="info-label">放電電流</span>
              <span class="info-value">{{ batteryStatus.batDisChargeCurrent }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="info-container">
              <span class="info-label">充電電流</span>
              <span class="info-value">{{ batteryStatus.batChargeCurrent }}</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </CardContainer>
</template>

<script setup>
import CardContainer from '../common/CardContainer.vue';


const props = defineProps({
  batteryStatus: {
    type: Object,
    required: true
  }
});

</script>

<style lang="scss" scoped>
.info-container {
  display: flex;
  flex-direction: row;
  align-items: center;

  .info-label {
    width: 40px;
    text-align: left;
  }
  .info-value {
    width: 80px;
    background-color: #606060;
    border-radius: 5px;
    padding: 5px;
  }
}
</style>