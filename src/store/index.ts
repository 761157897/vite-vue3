/*
 * @Author: fengjun fengjun@shgbit.com
 * @Date: 2022-08-01 16:16:54
 * @LastEditors: fengjun fengjun@shgbit.com
 * @LastEditTime: 2022-08-01 16:17:06
 * @FilePath: \vite-vue3\src\store\index.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by fengjun fengjun@shgbit.com, All Rights Reserved. 
 */
import { createStore } from 'vuex'

const defaultState = {
  count: 0
}

// Create a new store instance.
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})