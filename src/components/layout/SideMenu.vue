<template>
  <el-menu
    :default-active="activeMenu"
    class="el-menu-vertical-demo"
    active-text-color="#ffd04b"
    background-color="rgb(15, 15, 15)"
    text-color="#fff"
    :collapse="isCollapse"
    router
    @open="handleOpen"
    @close="handleClose"
    style="border: none"
  >
    <!-- 遞迴渲染選單 -->
    <template v-for="route in menuRoutes" :key="route.path">
      <!-- 有子選單的情況 -->
      <el-sub-menu v-if="route.children?.length" :index="route.path">
        <template #title>
          <el-icon>
            <component :is="route.meta?.icon" />
          </el-icon>
          <span>{{ route.meta?.title }}</span>
        </template>

        <template v-for="child in route.children" :key="child.path">
          <el-menu-item v-if="child.meta?.showInMenu" :index="`${route.path}/${child.path}`">
            <el-icon>
              <component :is="child.meta?.icon" />
            </el-icon>
            <template #title>{{ child.meta?.title }}</template>
          </el-menu-item>
        </template>
      </el-sub-menu>

      <!-- 無子選單的情況 -->
      <el-menu-item v-else-if="route.meta?.showInMenu" :index="route.path">
        <el-icon>
          <component :is="route.meta?.icon" />
        </el-icon>
        <template #title>{{ route.meta?.title }}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>
  <script lang="ts" setup>
import { ref, defineProps, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  HomeFilled,
} from "@element-plus/icons-vue";

const props = defineProps({
  isCollapse: {
    type: Boolean,
    default: true,
  },
});

const router = useRouter();
const route = useRoute();

// 獲取要顯示在選單中的路由
const menuRoutes = computed(() => {
  return router.options.routes.filter((route) => route.meta?.showInMenu);
});

// 當前活動的選單項
const activeMenu = computed(() => {
  return route.path;
});

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
  
  <style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>