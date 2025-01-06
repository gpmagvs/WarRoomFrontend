<template>
  <el-header height="48px" class="d-flex align-items-center justify-content-start px-3 p-1">
    <el-button text circle @click="toggleCollapse">
      <el-icon color="white" size="20">
        <Menu />
      </el-icon>
    </el-button>
    <span class="mx-1">WAR ROOM</span>
    <div class="flex-fill w-50 d-flex align-items-center justify-content-end">
      <el-button circle color="white" :size="30" :icon="UserFilled"></el-button>
    </div>
  </el-header>
</template>

<script setup>
import { ref } from "vue";
import { Menu, UserFilled } from "@element-plus/icons-vue";
const emit = defineEmits(["toggleCollapse"]);
const isCollapse = ref(true);
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value;
  emit("toggleCollapse", isCollapse.value);
};
</script>

<style scoped>
span {
  font-size: 1.2rem;
  font-weight: 900;
  padding-top: 3px;
}
</style>
