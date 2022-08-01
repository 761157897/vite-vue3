/*
 * @Author: fengjun fengjun@shgbit.com
 * @Date: 2022-08-01 16:03:32
 * @LastEditors: fengjun fengjun@shgbit.com
 * @LastEditTime: 2022-08-01 16:48:00
 * @FilePath: \vite-vue3\src\main.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by fengjun fengjun@shgbit.com, All Rights Reserved. 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router/index'
import store from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router, store, ElementPlus).mount('#app')
