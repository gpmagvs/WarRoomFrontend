<template>
  <CardContainer>
    <template #header>
      <span>當日任務執行狀態統計</span>
    </template>

    <div class="d-flex w-100 justify-content-between ms-5">
      <div class="info-container">
        <span class="info-label">成功率</span>
        <el-progress :percentage="dailyTaskStatistics.SuccessRate" type="circle" width="100" />
      </div>
      <div class="w-100 justify-content-between ms-5">
        <div class="d-flex w-100">
          <div class="info-container">
            <span class="info-label">總任務數</span>
            <span class="info-value">{{ dailyTaskStatistics.TotalTaskNum }}</span>
          </div>
          <div class="info-container">
            <span class="info-label">搬運任務數</span>
            <span class="info-value">{{ dailyTaskStatistics.TransferTaskNum }}</span>
          </div>
          <div class="info-container">
            <span class="info-label">充電任務數</span>
            <span class="info-value">{{ dailyTaskStatistics.ChargeTaskNum }}</span>
          </div>
        </div>
        <div class="d-flex w-100 mt-2">
          <div class="info-container">
            <span class="info-label">成功</span>
            <span class="info-value">{{ dailyTaskStatistics.TotalSuccessNum }}</span>
          </div>
          <div class="info-container">
            <span class="info-label">失敗</span>
            <span class="info-value">{{ dailyTaskStatistics.TotalFailureNum }}</span>
          </div>
        </div>
      </div>
    </div>
  </CardContainer>
</template>

<script setup>
import CardContainer from '../common/CardContainer.vue';
import { DailyTaskStatistics } from '../../models/VehicleRealTimeData';
const props = defineProps({
  dailyTaskStatistics: {
    type: DailyTaskStatistics,
    required: true,
    default: () => new DailyTaskStatistics(),
  }
});
</script>

<style lang="scss" scoped>
.info-container {
  width: 100px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info-value {
  width: 80px;
  background-color: #606060;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
}
</style>