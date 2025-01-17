<template>
  <div class="transfer-stats-by-tow-ports w-100 d-flex flex-column">
    <div class="source-dest-select-container mb-2 d-flex flex-row justify-content-between">
      <span>起點</span>
      <el-select size="large" v-model="selectedFromTo" placeholder="選擇起點設備" class="w-100">
        <el-option v-for="item in fromToOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <span> 終點</span>
      <el-select size="large" v-model="selectedFromTo" placeholder="選擇終點設備" class="w-100" @change="HandleFromToSelected">
        <el-option v-for="item in fromToOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <div class="chart-components-container" v-loading="loading">
      <StackBarChart title="每日任務統計" :series="dailyTransferStats" xAxisName="日期" yAxisName="數量" />
      <TrendChart title="任務執行時間" :dailyStats="dailyTransferAvgTime" lineColor="rgb(32, 160, 255)" normalBarColor="rgb(22, 112, 178)" alarmBarColor="rgb(250, 27, 73)" type="line-bar" yAxisName="執行花費時間" :isExceedThreshold="alarmCompare" />
      <BoxPlatChart title="路徑花費時間 Box Plot" :data="boxPlotData" xAxisName="時間" yAxisName="任務成功率" />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import TrendChart from '../common/ChartComponents/TrendChart.vue';
import BoxPlatChart from '../common/ChartComponents/BoxPlatChart.vue';
import StackBarChart from '../common/ChartComponents/StackBarChart.vue';
const loading = ref(false);
const selectedFromTo = ref('')
const fromToOptions = ref([
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' }
])
const boxPlotData = [
  {
    date: 'A->B',
    min: 10,    // 最小值
    q1: 20,     // 第一四分位數 (25th percentile)
    median: 25, // 中位數
    q3: 30,     // 第三四分位數 (75th percentile)
    max: 40     // 最大值
  },
  {
    date: '2024-03-02',
    min: 15,
    q1: 22,
    median: 28,
    q3: 35,
    max: 45
  },
  {
    date: '2024-03-03',
    min: 12,
    q1: 18,
    median: 24,
    q3: 32,
    max: 42
  },
  {
    date: '2024-03-04',
    min: 8,
    q1: 16,
    median: 22,
    q3: 28,
    max: 38
  },
  {
    date: '2024-03-05',
    min: 13,
    q1: 21,
    median: 27,
    q3: 33,
    max: 43
  }
]
const dailyTransferAvgTime = ref([
  {
    date: '2024-03-01',
    value: 10
  },
  {
    date: '2024-03-02',
    value: 15
  },
  {
    date: '2024-03-03',
    value: 12
  }
])

const dailyTransferStats = [
  {
    name: '完成數',
    data: [
      { date: '2024-03-01', value: 185 },
      { date: '2024-03-02', value: 92 },
      { date: '2024-03-03', value: 88 },
    ],
    color: '#67C23A'  // 綠色
  },
  {
    name: '失敗數',
    data: [
      { date: '2024-03-01', value: 85 },
      { date: '2024-03-02', value: 92 },
      { date: '2024-03-03', value: 88 },
    ],
    color: '#F56C6C'  // 紅色
  },
  {
    name: '取消數',
    data: [
      { date: '2024-03-01', value: 85 },
      { date: '2024-03-02', value: 92 },
      { date: '2024-03-03', value: 88 },
    ],
    color: '#E6A23C'  // 黃色
  }
]
const HandleFromToSelected = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 500);
}
</script>

<style lang="scss" scoped>
.transfer-stats-by-tow-ports {
  .source-dest-select-container {
    width: 50%;
    span {
      color: #b3b3b3;
      width: 100px;
      align-self: center;
    }
  }
  .chart-components {
    border-radius: 8px;
    padding: 1rem;
    border: 1px solid #363636;
    margin-bottom: 10px;
  }
}
</style>