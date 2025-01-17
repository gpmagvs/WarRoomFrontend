<template>
  <div class="eqp-unload-waiting-time-trend">
    <el-select size="large" v-model="selectedEqp" placeholder="選擇設備" class="mb-2">
      <el-option v-for="eqp in eqpList" :key="eqp.value" :label="eqp.label" :value="eqp.value" />
    </el-select>
    <TrendChart :dailyStats="dailyStats" lineColor="rgb(32, 160, 255)" normalBarColor="rgb(103, 194, 58)" alarmBarColor="rgb(250, 27, 73)" type="line-bar" :alarmValue="90" yAxisName="等待時間" :isExceedThreshold="alarmCompare" :title="title" />
  </div>
</template>

<script setup>
import TrendChart from '../common/ChartComponents/TrendChart.vue'
import { ref, watch } from 'vue'
const alarmCompare = (value) => {
  return value > 190
}

const dailyStats = ref([
  {
    date: '2024-02-20',
    value: 185.2
  },
  {
    date: '2024-02-21',
    value: 189.5
  },
  {
    date: '2024-02-22',
    value: 193.8
  },
  {
    date: '2024-02-23',
    value: 187.4
  },
  {
    date: '2024-02-24',
    value: 192.1
  },
  {
    date: '2024-02-25',
    value: 194.7
  },
  {
    date: '2024-02-26',
    value: 188.9
  },
  {
    date: '2024-02-27',
    value: 190.3
  },
  {
    date: '2024-02-28',
    value: 186.5
  },
  {
    date: '2024-02-29',
    value: 193.4
  },
  {
    date: '2024-03-01',
    value: 195.5
  },
  {
    date: '2024-03-02',
    value: 188.2
  },
  {
    date: '2024-03-03',
    value: 192.7
  },
  {
    date: '2024-03-04',
    value: 182.0
  },
  {
    date: '2024-03-05',
    value: 194.3
  }
])

const eqpList = ref([
  { value: 'eqp1', label: '設備1' },
  { value: 'eqp2', label: '設備2' },
  { value: 'eqp3', label: '設備3' }
])

const selectedEqp = ref(undefined)
const title = ref('標題')
watch(selectedEqp, (newVal) => {
  title.value = `Unload 平均等待時間 - ${newVal}`
})

</script>

<style lang="scss" scoped>
.eqp-unload-waiting-time-trend {
}
</style>