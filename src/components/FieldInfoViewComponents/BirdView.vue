<template>
  <div>
    <CardContainer>
      <template #header>
        <div>BirdView</div>
      </template>
      <Map v-if="showMap" :mapHeight="mapHeight + 'px'" />
    </CardContainer>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue'
import CardContainer from '../common/CardContainer.vue'
import Map from '../common/Map.vue'
const mapHeight = ref(100)
const showMap = ref(false)
onMounted(() => {
  const birdViewColHeight = document.getElementById('bird-view-col').getAttribute('bird-view-col-height')
  mapHeight.value = birdViewColHeight * 0.9;
  showMap.value = true
})
</script>

<style lang="scss" scoped>
</style>