import { createApp } from 'vue'
import App from './App.vue'

import store from './assets/js/store.js'
import './assets/css/tailwind.css'
import './assets/css/tt-norms.css'

createApp(App).use(store).mount('#app')
