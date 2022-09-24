import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'

createApp(App)
.use(router)
.use(vuetify)
.use(axios)
.mount('#app')
