/*
 * @Author: fengjun fengjun@shgbit.com
 * @Date: 2022-08-01 16:09:19
 * @LastEditors: fengjun fengjun@shgbit.com
 * @LastEditTime: 2022-08-01 16:10:00
 * @FilePath: \vite-vue3\src\router\index.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by fengjun fengjun@shgbit.com, All Rights Reserved. 
 */
import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'
import Home from '@/views/home.vue'
import Vuex from '@/views/vuex.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios.vue') // 懒加载组件
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router