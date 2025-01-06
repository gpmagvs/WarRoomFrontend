<template>
  <div class="field-selector mx-1 d-flex gap-2">
    <el-select class="selector" v-model="selectedField" placeholder="選擇樓層">
      <el-option v-for="field in fields" :key="field.id" :label="field.name" :value="field.id" />
    </el-select>
    <el-select class="selector" v-model="selectedField" placeholder="選擇場域">
      <el-option v-for="field in fields" :key="field.id" :label="field.name" :value="field.id" />
    </el-select>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
const selectedField = ref('');
const props = defineProps({
  fields: {
    type: Array,
    default: [{
      id: 1,
      name: '場域1'
    }, {
      id: 2,
      name: '場域2'
    }],
  },
});
</script>

<style lang="scss" scoped>
.field-selector {
  .selector {
    width: var(--field-eq-selector-width);
  }
  ::v-deep .el-select__wrapper {
    background-color: #000000;
  }
}
</style>
