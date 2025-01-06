<template>
  <l-map
    class="leaflet-map"
    :style="mapStyle"
    :key="mapKey"
    :zoom="13"
    :center="[0, 0]"
    :crs="L.CRS.Simple"
    :options="mapOptions"
  >
    <l-marker :lat-lng="[0, 0]"></l-marker>
    <l-marker :lat-lng="[10, 10]"></l-marker>
    <l-marker :lat-lng="[20, 20]"></l-marker>
  </l-map>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue'
import L from 'leaflet'
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'

const props = defineProps({
  mapHeight: {
    type: String,
    default: '600px',
  },
})

const map = ref(null)
const mapKey = ref(0)
const mapOptions = ref({})

const mapStyle = computed(() => {
  return {
    height: props.mapHeight,
  }
})

</script>

<style lang="scss" scoped>
.leaflet-map {
  width: 100% !important;
  background-color: rgb(0, 15, 33);
}
</style>