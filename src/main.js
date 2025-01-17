import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import App from './App.vue'
import { fieldStore } from './stores/Field.js'
// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'leaflet/dist/leaflet.css'
import './style.css'

import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(BootstrapVue3)
app.use(ElementPlus)
app.use(router)


const _fieldStore = fieldStore()
_fieldStore.fetchFields().then(() => {
    app.mount('#app')
})
