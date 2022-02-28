import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
import './style/base.less'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app')
