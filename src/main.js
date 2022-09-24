import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
<<<<<<< Updated upstream

loadFonts()

createApp(App).use(router).use(vuetify).mount('#app')
=======
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



createApp(App).use(router).use(vuetify).use(FontAwesomeIcon).use(loadFonts).use(faPhone).use(library).mount('#app')
>>>>>>> Stashed changes
