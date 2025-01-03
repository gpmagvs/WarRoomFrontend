<script setup>
</script>

<template>
  <div class="w-100 h-100">
    <el-menu class="el-menu-vertical" :collapse="false" router>
      <el-menu-item index="/">
        <el-icon>
          <House />
        </el-icon>
        <span>Home</span>
      </el-menu-item>

      <el-menu-item index="/about">
        <el-icon>
          <InfoFilled />
        </el-icon>
        <span>About</span>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.container {
  padding: 0;
  margin: 0;
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
</style>
