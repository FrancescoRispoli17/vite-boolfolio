import { createApp } from 'vue'
import './assets/scss/main.scss'
import { router } from './router';
import App from './App.vue'
import * as bootstrap from 'bootstrap'

createApp(App).use(router).mount('#app')
