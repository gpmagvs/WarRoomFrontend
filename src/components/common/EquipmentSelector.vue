<template>
  <div class="d-flex">
    <FieldSelector />
    <el-select class="selector mx-2" v-model="selectedField" placeholder="選擇設備"></el-select>
  </div>
</template>

<script setup>
import FieldSelector from './FieldSelector.vue';
</script>

<style lang="scss" scoped>
.selector {
  width: var(--field-eq-selector-width);
}
::v-deep .el-select__wrapper {
  background-color: #000000;
}
</style>