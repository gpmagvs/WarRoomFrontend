<template>
  <div class="h-100">
    <div class="d-flex justify-content-between mb-1 mx-3 border-bottom pb-2 ">
      <FieldSelector />
      <DateRangePicker />
    </div>
    <TransportPerformanceContainer />
  </div>
</template>

<script setup>
import TransportPerformanceContainer from '../components/TransportPerformanceStatus/TransportPerformanceContainer.vue'
import FieldSelector from '../components/common/FieldSelector.vue';
import DateRangePicker from '../components/common/DateRangePicker.vue';

</script>

<style lang="scss" scoped>
</style>