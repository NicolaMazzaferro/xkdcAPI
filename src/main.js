import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './assets/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(VueAxios, axios)

app.mount('#app')