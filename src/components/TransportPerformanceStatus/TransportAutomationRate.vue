<template>
  <div class="w-100 d-flex flex-row justify-content-center">
    <RatioDisplay :percentage="percentage" label="自動化率" />
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import RatioDisplay from '../common/RatioDisplay.vue'

const props = defineProps({
  /** 手動任務次數 */
  manualTasksNum: {
    type: Number,
    default: 10
  },
  /** 主機任務次數 */
  hostTasksNum: {
    type: Number,
    default: 10
  }
})

const totalTasksNum = computed(() => {
  return props.manualTasksNum + props.hostTasksNum
})

const percentage = computed(() => {
  return (props.hostTasksNum / totalTasksNum.value) * 100
})

</script>

<style lang="scss" scoped>
.percentage-value {
  font-size: 44px;
  font-weight: bold;
  color: white;
  letter-spacing: 3px;
}
.percentage-label {
  font-size: 22px;
}
</style>