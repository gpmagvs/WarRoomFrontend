<template>
  <div id="transportPerformanceContainer" class="transport-performance-container p-3 rounded-3 d-flex ">
    <div class="w-100">
      <el-row class=" h-100" :gutter="10">
        <el-col :lg="9" :md="24">
          <el-row :gutter="5">
            <el-col :lg="8" :xl="8" class="d-flex justify-content-center">
              <CardContainer class="w-100">
                <template #header>
                  <h6>自動化率</h6>
                </template>
                <TransportAutomationRate :manualTasksNum="30" :hostTasksNum="10" />
              </CardContainer>
            </el-col>
            <el-col :lg="8" :xl="8" class="d-flex justify-content-center">
              <CardContainer class="w-100">
                <template #header>
                  <h6>自動化率</h6>
                </template>
                <TransportAutomationRate :manualTasksNum="30" :hostTasksNum="10" />
              </CardContainer>
            </el-col>
            <el-col :lg="8" :xl="8" class="d-flex justify-content-center">
              <CardContainer class="w-100">
                <template #header>
                  <h6>自動化率</h6>
                </template>
                <TransportAutomationRate :manualTasksNum="30" :hostTasksNum="120" />
              </CardContainer>
            </el-col>
          </el-row>
          <CardContainer class="w-100 my-1">
            <template #header>
              <h6>任務成功率</h6>
            </template>
            <TaskSuccessRateTrendChart :dailyStats="dailyStats" />
          </CardContainer>

          <CardContainer class="w-100">
            <template #header>
              <h6>EQP卸載等待時間</h6>
            </template>
            <EQPUnloadWaitingTimeTrendChart />
          </CardContainer>
        </el-col>
        <el-col :lg="15" :md="24" class="">
          <CardContainer class="w-100 h-100">
            <template #header>
              <h6>From-To 搬運狀態統計</h6>
            </template>
            <SourceDetineRouteStatusContainer class="h-100" />
          </CardContainer>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import TransportAutomationRate from './TransportAutomationRate.vue'
import TaskSuccessRateTrendChart from './TaskSuccessRateTrendChart.vue'
import SourceDetineRouteStatusContainer from './TransferStatsByTowPortsContainer.vue'
import EQPUnloadWaitingTimeTrendChart from './EQPUnloadWaitingTimeTrendChart.vue'
import CardContainer from '../common/CardContainer.vue'

const dailyStats = ref([
  {
    date: '2024-02-20',
    value: 91.2
  },
  {
    date: '2024-02-21',
    value: 89.5
  },
  {
    date: '2024-02-22',
    value: 93.8
  },
  {
    date: '2024-02-23',
    value: 75
  },
  {
    date: '2024-02-24',
    value: 71
  },
  {
    date: '2024-02-25',
    value: 94.7
  },
  {
    date: '2024-02-26',
    value: 88.9
  },
  {
    date: '2024-02-27',
    value: 90.3
  },
  {
    date: '2024-02-28',
    value: 86.5
  },
  {
    date: '2024-02-29',
    value: 93.4
  },
  {
    date: '2024-03-01',
    value: 95.5
  },
  {
    date: '2024-03-02',
    value: 88.2
  },
  {
    date: '2024-03-03',
    value: 92.7
  },
  {
    date: '2024-03-04',
    value: 79.0
  },
  {
    date: '2024-03-05',
    value: 94.3
  }
])

</script>

<style lang="scss" scoped>
.transport-performance-container {
  .page-1-on-page-2-active {
    position: fixed;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out, left 0.3s ease-in-out;
    left: 0;
    z-index: 0;
  }
}
</style>