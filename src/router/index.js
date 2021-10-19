//import Vue from 'vue'
//import {createApp} from 'vue';
//import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'//nouvelle facon
//import App from '../App.vue'

//App.use(VueRouter)

/*const routes = [
  { path: '/HelloWorld', name: 'HelloWorld', component: () => import('../components/HelloWorld.vue') }
]*/
const routes = [
    { path: '/', component: () => import('../pages/HelloWorld.vue') },
    { path: '/test', component: () => import('../pages/test.vue') }
    //{ path: '/insérerNom', component: () => import('../insérer/chemin.vue') }
  ]

const router = createRouter({
  history: createWebHistory('/base-directory/'),
  routes: routes,
})
/*
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})*/



export default router