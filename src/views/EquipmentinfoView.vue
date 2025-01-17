<template>
  <div>
    <EquipmentSelector class="border-bottom pb-2" @equipmentSelected="onEquipmentSelected"></EquipmentSelector>
    <VehicleRealTimeData v-if="subscribingVehicleData" :vehicleData="subscribingVehicleData" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import EquipmentSelector from '../components/common/EquipmentSelector.vue';
import { realTimeEquipmentDataStore } from '../stores/RealTimeEquipmentDataStore.js'
const _realTimeEquipmentDataStore = realTimeEquipmentDataStore();
import VehicleRealTimeData from '../components/VehicleRealTimeData/index.vue';

const onEquipmentSelected = (eqInfo) => {
  console.log(eqInfo);
  _realTimeEquipmentDataStore.subscribeEquipmentData(eqInfo);
}

const subscribingVehicleData = computed(() => _realTimeEquipmentDataStore.subscribingVehicleData);

</script>

<style lang="scss" scoped>
</style>