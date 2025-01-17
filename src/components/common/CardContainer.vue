<template>
  <el-card class="my-card">
    <template #header>
      <div class="card-header d-flex align-items-center">
        <el-icon class="me-2">
          <Postcard />
        </el-icon>
        <slot name="header">Header</slot>
      </div>
    </template>
    <div class="card-body w-100 h-100 p-2">
      <slot>Default card body</slot>
    </div>
  </el-card>
</template>

<script setup>
import { Postcard } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.my-card {
  border: 1px solid #656565;
  border-radius: 5px;
  margin: 1px;
  ::v-deep .el-card__header {
    background-color: var(--card-header-bg-color);
    font-weight: bold;
    letter-spacing: 1px;
    padding: 5px 10px;
    border-bottom: 1px solid #656565;
  }
  ::v-deep .el-card__body {
    padding: 1px;
    height: 100%;
    color: white;
    background-color: var(--card-body-bg-color);
  }

  .card-header {
    color: var(--card-header-text-color);
    font-size: 16px;
    height: 30px;
    text-align: left;
  }
  .card-body {
    background-color: var(--card-body-bg-color);
  }
}
</style>
