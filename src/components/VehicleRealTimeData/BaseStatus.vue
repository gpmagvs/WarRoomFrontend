<template>
  <div class="vehicle-base-status">
    <CardContainer>
      <template #header>
        <span>Info</span>
      </template>
      <div>
        <el-row>
          <el-col :lg="8">
            <div class="info-container">
              <span class="info-label">Name</span>
              <span class="info-value">{{ baseStatus.name }}</span>
            </div>
          </el-col>
          <el-col :lg="8">
            <div class="info-container">
              <span class="info-label">主狀態</span>
              <span class="info-value">{{ baseStatus.onlineState }}</span>
            </div>
          </el-col>
          <el-col :lg="8">
            <div class="info-container">
              <span class="info-label">上線狀態</span>
              <span class="info-value">{{ baseStatus.onlineState }}</span>
            </div>
          </el-col>
        </el-row>
        <el-row class="mt-2">
          <el-col :lg="8">
            <div class="info-container">
              <span class="info-label">當前任務ID</span>
              <span class="info-value text-truncate">{{ baseStatus.runningTask.TaskID }}</span>
            </div>
          </el-col>
          <el-col :lg="8">
            <div class="info-container">
              <span class="info-label">任務起點</span>
              <span class="info-value text-truncate">{{ baseStatus.runningTask.FromStationName }}</span>
            </div>
          </el-col>
          <el-col :lg="8">
            <div class="info-container">
              <span class="info-label">任務終點</span>
              <span class="info-value text-truncate">{{ baseStatus.runningTask.ToStationName }}</span>
            </div>
          </el-col>
        </el-row>
        <!-- <pre class="border-top text-info">{{ baseStatus }}</pre> -->
      </div>
    </CardContainer>
  </div>
</template>

<script setup>
import CardContainer from '../common/CardContainer.vue';

const props = defineProps({
  baseStatus: {
    type: Object,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.vehicle-base-status {
  .info-container {
    display: flex;
    flex-direction: column;
    .info-label {
      color: grey;
    }
    .info-value {
      font-weight: bold;
      font-weight: normal;
    }
  }
}
</style>