<template>
  <div class="transport-performance-container p-3 rounded-3 h-100">
    <div class="w-100" v-bind:class="isPage2 ? 'page-1-on-page-2-active' : 'page-1-on-page-2-inactive'">
      <el-row class=" h-100" :gutter="10">
        <el-col :lg="10" :md="24" :xl="10">
          <el-row>
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
          <CardContainer class="w-100">
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
        <el-col :lg="14" :md="24" :xl="14">
          <CardContainer class="w-100">
            <template #header>
              <h6>來源定義路徑狀態</h6>
            </template>
            <SourceDetineRouteStatusContainer />
          </CardContainer>
        </el-col>
      </el-row>
    </div>
    <div class="move-to-page-2" v-bind:class="isPage2 ? 'move-to-page-2-active' : 'move-to-page-2-inactive'">
      <el-button v-if="!isPage2" circle :size="30" :icon="ArrowRight" @click="isPage2 = !isPage2" />
      <el-button v-else circle :size="30" :icon="ArrowLeft" @click="isPage2 = !isPage2" />
    </div>
    <div class="w-100 border bg-warning " v-bind:class="isPage2 ? 'page-2-active' : 'page-2-inactive'">
      page 2
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TransportAutomationRate from './TransportAutomationRate.vue'
import TaskSuccessRateTrendChart from './TaskSuccessRateTrendChart.vue'
import SourceDetineRouteStatusContainer from './TransferStatsByTowPortsContainer.vue'
import EQPUnloadWaitingTimeTrendChart from './EQPUnloadWaitingTimeTrendChart.vue'
import CardContainer from '../common/CardContainer.vue'
import { ArrowRight, ArrowLeft } from '@element-plus/icons-vue'

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
    value: 87.4
  },
  {
    date: '2024-02-24',
    value: 92.1
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
const isPage2 = ref(false)


</script>

<style lang="scss" scoped>
.transport-performance-container {
  position: relative;
  overflow: hidden;
  .page-1-on-page-2-active {
    position: fixed;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out, left 0.3s ease-in-out;
    left: 0;
    z-index: 0;
  }
  .page-1-on-page-2-inactive {
    transition: transform 0.3s ease-in-out;
    z-index: 1;
  }
  .move-to-page-2 {
    position: fixed;
    right: 20px;
    top: 96%;
    transform: translateY(-50%);
    cursor: pointer;
    button {
      transform: scale(1.2);
      transition: all 0.3s ease-in-out;
    }
    button:hover {
      color: black;
      background-color: #cacaca;
      transform: scale(2);
    }
    button:active {
      transform: scale(1.4);
    }
  }
  .move-to-page-2-active {
    left: -90%;
  }

  .page-2 {
    position: fixed;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }
  .page-2-active {
    transform: translateX(0);
    transition: transform 0.3s ease-in-out, left 0.3s ease-in-out;
  }
  .page-2-inactive {
    position: fixed;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out, right 0.3s ease-in-out;
  }
}
</style>