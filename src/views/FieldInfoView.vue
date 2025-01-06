<template>
  <div class="field-info-view-container d-flex flex-column h-100 py-1">
    <FieldSelector />
    <el-row class="flex-fill h-50">
      <el-col class="left-col" :lg="12">
        <FieldOperationStatus title="系統運轉狀態" />
        <RackStatus />
      </el-col>
      <el-col id="bird-view-col" class="right-col" :lg="12">
        <BirdView v-if="showBirdView" />
      </el-col>
    </el-row>
    <el-row id="secondary-row" class="mt-2">
      <el-col :lg="12">
        <EquipmentStatus />
      </el-col>
      <el-col :lg="12">
        <TasksInfo />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import FieldSelector from '../components/common/FieldSelector.vue';
import FieldOperationStatus from '../components/FieldInfoViewComponents/FieldOperationStatus.vue'
import TasksInfo from '../components/FieldInfoViewComponents/TasksInfo.vue'
import BirdView from '../components/FieldInfoViewComponents/BirdView.vue'
import EquipmentStatus from '../components/FieldInfoViewComponents/EquipmentStatus.vue'
import RackStatus from '../components/FieldInfoViewComponents/RackStatus.vue'

const birdViewColHeight = ref(300)
const showBirdView = ref(false)
onMounted(() => {
  setTimeout(() => {
    const birdViewCol = document.getElementById('bird-view-col')
    const birdViewColHeight = birdViewCol.clientHeight
    birdViewCol.setAttribute('bird-view-col-height', birdViewColHeight)
    showBirdView.value = true
  }, 120)
})

</script>

<style lang="scss" scoped>
.field-info-view-container {
  .left-col {
  }
}
</style>
