<!--
 * @Author: fengjun fengjun@shgbit.com
 * @Date: 2022-08-01 16:03:32
 * @LastEditors: fengjun fengjun@shgbit.com
 * @LastEditTime: 2022-08-01 16:22:44
 * @FilePath: \vite-vue3\src\components\HelloWorld.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by fengjun fengjun@shgbit.com, All Rights Reserved. 
-->
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style lang="less" scoped>
.read-the-docs {
  color: #888;
}
</style>
