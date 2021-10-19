//import Vue from 'vue'
//import {createApp} from 'vue';
import VueRouter from 'vue-router'
//import App from '../App.vue'

//App.use(VueRouter)

/*const routes = [
  { path: '/HelloWorld', name: 'HelloWorld', component: () => import('../components/HelloWorld.vue') }
]*/
const routes = [
    { path: '/HelloWorld', component: () => import('../pages/HelloWorld.vue') },
    //{ path: '/baseheader', component: () => import('../components/baseheader.vue') }
  ]

const router = new VueRouter({/*
  mode: 'history',
  base: process.env.BASE_URL,*/
  routes: routes
})

export default router