<template>
  <div class="common-layout">
    <Header @toggleCollapse="isCollapse = $event" />
    <el-container>
      <el-container>
        <el-aside class width="fit-content">
          <SideMenu :isCollapse="isCollapse" />
        </el-aside>
        <el-main class="main-container rounded-1">
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import SideMenu from "./components/layout/SideMenu.vue";
import { ref } from "vue";
import Header from "./components/layout/Header.vue";

const isCollapse = ref(false);
</script>

<style scoped>
.common-layout {
  height: calc(100vh - 40px);
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.main-container {
  padding: 0.1rem;
  height: calc(100vh - 55px);
  /* border: 1px solid red; */
  background-color: #181818;
}
</style>
