import { createRouter, createWebHistory } from 'vue-router'//nouvelle facon

const routes = [
    { path: '/', component: () => import('../pages/HelloWorld.vue') },
    { path: '/test', component: () => import('../pages/test.vue') }
    //{ path: '/insérerNom', component: () => import('../insérer/chemin.vue') }
  ]

const router = createRouter({
  history: createWebHistory('/base-directory/'),
  routes: routes,
})

export default router