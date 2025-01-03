import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'element-plus/dist/index.css'
import App from './App.vue'

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'

import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(BootstrapVue3)
app.use(ElementPlus)
app.use(router)
app.mount('#app')