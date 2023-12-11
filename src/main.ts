import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Sidebar from 'primevue/sidebar';
import App from './App.vue'
const pinia = createPinia()
const app = createApp(App);
app.component('Sidebar', Sidebar);
app.use(pinia)
app.use(PrimeVue)
app.mount('#app')
