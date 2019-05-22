import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/pages/Default'
import echarts from 'echarts'
import Blank from '@/pages/Blank'
import DashBoard from '@/pages/Dashboard'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Default',
      redirect: '/dashboard',
      component: Default,
      children: [
        {
        path: 'dashboard',
        name: 'Dashboard',
        component: DashBoard
      },
      {
        path: ':route',
        name: 'Blank',
        component: Blank
      }]
    }
  ]
})
export default router