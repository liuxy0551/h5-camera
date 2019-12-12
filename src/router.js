import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../src/pages/layout/layout'
Vue.use(Router);

export const routerMap = [
  { path: '/', redirect: '/home' },

  {
    path: '/home',
    component: Layout,
    children: [
      { path: '', name: 'Home', meta: { title: 'Home' }, component: () => import('../src/pages/home') }
    ]
  },
  {
    path: '/camera',
    component: Layout,
    children: [
      { path: '', name: 'Camera', meta: { title: 'Camera' }, component: () => import('../src/pages/camera') }
    ]
  }
];

let router = new Router({
  // mode: 'hash',
  routes: routerMap
})

export default router

