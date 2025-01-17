<template>
  <CardContainer>
    <template #header>
      <span>里程狀態</span>
    </template>
    <div class="align-items-center pt-2">
      <span class="mileage-value">113.2</span>
      <span class="mileage-unit">km</span>
    </div>
  </CardContainer>
</template>

<script setup>
import CardContainer from '../common/CardContainer.vue';
</script>

<style lang="scss" scoped>
.mileage-value {
  font-size: 54px;
  font-weight: bold;
}
.mileage-unit {
  font-size: 16px;
}
</style>