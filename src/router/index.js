import { createRouter, createWebHistory } from 'vue-router'//nouvelle facon

const routes = [
    { path: '/', component: () => import('../pages/Login.vue') },
    { path: '/Login', component: () => import('../pages/Login.vue') },
    { path: '/Produits', component: () => import('../pages/Produits.vue') },
    { path: '/CreerCompte', component: () => import('../pages/CreerCompte.vue') },
    { path: '/Montage', component: () => import('../pages/Montage.vue') },
    { path: '/DemandeMonteur', component: () => import('../pages/DemandeMonteur.vue') },
  ]

const router = createRouter({
  history: createWebHistory('/base-directory/'),
  routes: routes,
})

export default router