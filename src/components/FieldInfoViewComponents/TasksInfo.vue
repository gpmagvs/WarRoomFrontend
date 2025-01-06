<template>
  <div>
    <CardContainer>
      <template #header>
        <div>任務資訊</div>
      </template>
      <el-table
        height="240"
        :data="tableData"
        :header-cell-style="tableHeaderStyle"
        :cell-style="tableCellStyle"
      >
        <el-table-column prop="name" label="設備名稱" />
        <el-table-column prop="status" label="狀態" />
      </el-table>
    </CardContainer>
  </div>
</template>

<script setup>
import CardContainer from '../common/CardContainer.vue'
import { ref, reactive } from 'vue'
import { tableHeaderStyle, tableCellStyle } from '../common/tableStyle'

const tableData = ref([
  { name: '設備1', status: '運轉中' },
  { name: '設備1', status: '運轉中' },
  { name: '設備1', status: '運轉中' },
  { name: '設備1', status: '運轉中' },
  { name: '設備1', status: '運轉中' },
  { name: '設備1', status: '運轉中' },
  { name: '設備1', status: '運轉中' },
  { name: '設備1', status: '運轉中' },
  { name: '設備2', status: '運轉中' }
])
</script>

<style lang="scss" scoped>
</style>