<template>
  <div class="d-flex">
    <FieldSelector @fieldChange="onFieldChange" />
    <el-select
      class="selector mx-2"
      v-model="selectedEquipment"
      placeholder="選擇設備"
      @change="onEquipmentChange"
    >
      <el-option
        v-for="equipment in equipments"
        :key="equipment.Name"
        :label="equipment.Name"
        :value="equipment.Name"
      />
    </el-select>
  </div>
</template>

<script setup>
import { reactive, ref, defineEmits } from 'vue';
import FieldSelector from './FieldSelector.vue';
import { fieldStore } from '../../stores/Field.js'

const emit = defineEmits(['equipmentSelected']);

const _fieldStore = fieldStore();
const selectedEQInfo = reactive({
  Floor: 0,
  Name: '',
  Type: '',
  EquipmentName: ''
});

const selectedEquipment = ref('');

let equipments = reactive({});

const onFieldChange = (field) => {
  selectedEquipment.value = '';
  selectedEQInfo.Floor = field.Floor;
  selectedEQInfo.Name = field.Name;
  equipments = _fieldStore.getEquipmentByField(selectedEQInfo);
  console.log(equipments);

}

const onEquipmentChange = (equipmentName) => {
  selectedEQInfo.EquipmentName = equipmentName;
  emit('equipmentSelected', selectedEQInfo);

}
</script>

<style lang="scss" scoped>
.selector {
  width: var(--field-eq-selector-width);
}
::v-deep .el-select__wrapper {
  background-color: #000000;
}
</style>