<template>
  <div>Home</div>
  <div>{{ t }}</div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
var t = ref(0)
onMounted(() => {
  setInterval(() => {
    t.value++
  }, 1000)
})
</script>
