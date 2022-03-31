import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'virtual:windi.css'
import './style/base.less'

const app = createApp(App)
app.use(router)
app.mount('#app')
