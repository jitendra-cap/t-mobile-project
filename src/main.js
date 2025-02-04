import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faClock,
  faPhone,
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faClock, faPhone, faChevronLeft, faChevronRight, faChevronDown, faArrowRight)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
