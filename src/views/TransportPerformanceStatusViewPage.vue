<template>
  <div class="h-100" style="overflow-x: hidden">
    <div class="d-flex justify-content-between mb-1 mx-3  ">
      <FieldSelector @fieldChange="handleFieldChanged" />
      <DateRangePicker />
    </div>
    <TransportPerformanceContainer v-loading="loading" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TransportPerformanceContainer from '../components/TransportPerformanceStatus/TransportPerformanceContainer.vue'
import FieldSelector from '../components/common/FieldSelector.vue';
import DateRangePicker from '../components/common/DateRangePicker.vue';
const loading = ref(false);
const handleFieldChanged = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 400);
}
</script>

<style lang="scss" scoped>
</style>