import { createRouter, createWebHistory } from 'vue-router'//nouvelle facon

const routes = [
    { path: '/', component: () => import('../pages/HelloWorld.vue') },
    { path: '/test', component: () => import('../pages/test.vue') },
    { path: '/Login', component: () => import('../pages/Login.vue') },
    { path: '/Produits', component: () => import('../pages/Produits.vue') },
    { path: '/CreerCompte', component: () => import('../pages/CreerCompte.vue') },
    //{ path: '/insérerNom', component: () => import('../insérer/chemin.vue') }
  ]

const router = createRouter({
  history: createWebHistory('/base-directory/'),
  routes: routes,
})

export default router