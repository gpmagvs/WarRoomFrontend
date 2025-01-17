<template>
  <CardContainer>
    <template #header>
      <span>馬達狀態</span>
    </template>
    <div class="align-items-center p-2">
      <el-row class="d-flex align-items-center">
        <el-col :span="8">
          <div class="info-container">
            <span class="info-label">[右輪]電壓</span>
            <span class="info-value">{{ motorsStatus.motorRightVoltage }}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="info-container">
            <span class="info-label">[右輪]電流</span>
            <span class="info-value">{{ motorsStatus.motorRightCurrent }}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="info-container">
            <span class="info-label">[右輪]異常碼</span>
            <span class="info-value">{{ motorsStatus.motorRightAlarmCode }}</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="d-flex align-items-center mt-3">
        <el-col :span="8">
          <div class="info-container">
            <span class="info-label">[左輪]電壓</span>
            <span class="info-value">{{ motorsStatus.motorLeftVoltage }}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="info-container">
            <span class="info-label">[左輪]電流</span>
            <span class="info-value">{{ motorsStatus.motorLeftCurrent }}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="info-container">
            <span class="info-label">[左輪]異常碼</span>
            <span class="info-value">{{ motorsStatus.motorLeftAlarmCode }}</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </CardContainer>
</template>

<script setup>
import CardContainer from '../common/CardContainer.vue';

const props = defineProps({
  motorsStatus: {
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
    width: 100px;
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