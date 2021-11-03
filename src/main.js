import {createApp} from 'vue';
import App from './App.vue'
import router from './router'
//import VueSession from 'vue-session'
//import VueSessionStorage from "vue-sessionstorage";
import Vue3Storage from "vue3-storage";

//Vue.use(VueSession)
createApp(App).use(Vue3Storage)
.use(router).mount('#app')

/*new Vue({
  router,
  render: h => h(App)
}).$mount('#app')*/