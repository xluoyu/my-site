import { createApp } from 'vue'
import contextmenu from 'v-contextmenu'
import App from './App.vue'
import 'virtual:windi.css'
import './style/base.less'
import 'v-contextmenu/dist/themes/default.css'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(contextmenu)
app.mount('#app')
