<template>
  <div class="task-success-rate-trend">
    <TrendChart title="任務成功率" :dailyStats="dailyStats" lineColor="rgb(32, 160, 255)" normalBarColor="rgb(22, 112, 178)" alarmBarColor="rgb(250, 27, 73)" type="line-bar" :isExceedThreshold="alarmCompare" />
  </div>
</template>

<script setup>
import TrendChart from '../common/ChartComponents/TrendChart.vue'

const props = defineProps({
  dailyStats: {
    type: Array,
    default: () => []
  }
})

const alarmCompare = (value) => {
  return value < 90
}

</script>

<style lang="scss" scoped>
.task-success-rate-trend {
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1rem;

  h6 {
    color: #ffffff;
    margin-bottom: 1rem;
  }
}
</style>
