<template>
  <div>
    <CardContainer>
      <template #header>
        <div>{{ title }}</div>
      </template>
      <div class="d-flex align-items-center gap-4">
        <div>
          <span class="me-2">操作模式</span>
          <el-tag effect="dark">?</el-tag>
        </div>
        <div>
          <span class="me-2">上層連線</span>
          <el-tag effect="dark" type="warning">?</el-tag>
        </div>
        <div>
          <span class="me-2">派工模式</span>
          <el-tag effect="dark" type="warning">?</el-tag>
        </div>
      </div>
    </CardContainer>
  </div>
</template>

<script setup>
import CardContainer from '../common/CardContainer.vue'
import { defineProps } from 'vue'
import { Cpu } from '@element-plus/icons-vue'

const props = defineProps({
  title: {
    type: String,
    default: '系統運轉狀態'
  },
  fieldInfo: {
    type: Object,
    required: true
  }
})

</script>

<style lang="scss" scoped>
</style>