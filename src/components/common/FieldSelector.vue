<template>
  <div class="field-selector mx-1 d-flex gap-2">
    <el-select size="large" class="selector" v-model="selectedFloor" placeholder="選擇樓層">
      <el-option v-for="floor in floors" :key="floor" :label="`${floor}F`" :value="floor" />
    </el-select>
    <el-select size="large" class="selector" v-model="selectedField" placeholder="選擇場域" @change="onFieldChange">
      <el-option v-for="field in fields" :key="field.id" :label="field.Name" :value="field.Name" />
    </el-select>
  </div>
</template>

<script setup>
import { ref, reactive, computed, defineEmits } from 'vue';
import { fieldStore } from '../../stores/Field.js'
import { FieldInfo } from '../../models/Field.js';

const emit = defineEmits(['fieldChange']);

const selectedField = ref('');
const selectedFloor = ref(0);
const _fieldStore = fieldStore();

const floors = computed(() => _fieldStore.getFloors);
const fields = computed(() => _fieldStore.getFieldByFloor(selectedFloor.value));

const onFieldChange = (field) => {
  emit('fieldChange', { Floor: selectedFloor.value, Name: selectedField.value });
}




</script>

<style lang="scss" scoped>
.field-selector {
  .selector {
    width: var(--field-eq-selector-width);
  }
  ::v-deep .el-select__wrapper {
    background-color: #000000;
  }
  ::v-deep .el-select__placeholder {
    color: #ffffff;
  }
}
</style>
