<template>
  <div class="date-range-picker">
    <el-date-picker size="large" v-model="dateRange" type="daterange" range-separator="至" start-placeholder="開始日期" end-placeholder="結束日期" :shortcuts="shortcuts" @change="handleDateChange" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import dayjs from 'dayjs'

const dateRange = ref([])

const shortcuts = [
  {
    text: '最近一週',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: '最近一個月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: '最近三個月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]

const emit = defineEmits(['update:dateRange'])

const handleDateChange = (val) => {
  if (val) {
    const [startDate, endDate] = val
    emit('update:dateRange', {
      startDate: dayjs(startDate).format('YYYY-MM-DD'),
      endDate: dayjs(endDate).format('YYYY-MM-DD')
    })
  } else {
    emit('update:dateRange', null)
  }
}
</script>

<style lang="scss" scoped>
.date-range-picker {
  display: inline-block;
  ::v-deep(.el-range-editor.el-input__wrapper) {
    background-color: #1a1a1a;
  }
  ::v-deep(.el-range-separator) {
    color: #ffffff;
  }
  ::v-deep(.el-range-input) {
    color: #ffffff;
  }
}
</style>