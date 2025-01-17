<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <h1 class="error-code">404</h1>
      <div class="error-text">
        <h2>Oops! Page Not Found</h2>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      </div>
      <el-button type="primary" @click="$router.push('/')" class="home-button">Return Home</el-button>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.not-found-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #181818;
  color: #fff;
}

.not-found-content {
  text-align: center;
  padding: 2rem;
}

.error-code {
  font-size: 8rem;
  font-weight: bold;
  margin: 0;
  background: linear-gradient(45deg, #409eff, #67c23a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: float 6s ease-in-out infinite;
}

.error-text {
  margin: 2rem 0;
}

.error-text h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #409eff;
}

.error-text p {
  font-size: 1.2rem;
  color: #909399;
  max-width: 600px;
  margin: 0 auto;
}

.home-button {
  margin-top: 2rem;
  padding: 12px 24px;
  font-size: 1.1rem;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
