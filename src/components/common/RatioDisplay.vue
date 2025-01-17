<template>
  <div class="w-100 d-flex flex-row   justify-content-center">
    <el-progress type="circle" :percentage="props.percentage" stroke-width="15" width="180">
      <template #default="{ percentage }">
        <div class="d-flex flex-column">
          <span class="percentage-value ">{{ percentage }}%</span>
          <span class="percentage-label my-2">{{ props.label }}</span>
        </div>
      </template>
    </el-progress>

  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  percentage: {
    type: Number,
    default: 10
  },
  /** 標籤 */
  label: {
    type: String,
    default: '自動化率'
  }
})

const totalTasksNum = computed(() => {
  return props.manualTasksNum + props.hostTasksNum
})

</script>

<style lang="scss" scoped>
.percentage-value {
  font-size: 35px;
  font-weight: bold;
  color: white;
  letter-spacing: 3px;
}
.percentage-label {
  font-size: 15px;
}
</style>