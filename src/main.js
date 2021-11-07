import {createApp} from 'vue';
import App from './App.vue'
import router from './router'
import Vue3Storage from "vue3-storage";
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'

createApp(App).component('Datepicker', Datepicker).use(Vue3Storage)
.use(router).mount('#app')