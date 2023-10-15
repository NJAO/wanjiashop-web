<template>
  <a-layout class="container">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        mode="horizontal"
        theme="dark"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1"><router-link to="/">首页</router-link></a-menu-item>
        <a-menu-item key="2"><router-link to="/category">分类</router-link></a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }" class="content">
     <Suspense>
      <router-view />
     </Suspense>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      ©2023 Created by WanjiaShop
    </a-layout-footer>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const selectedKeys = ref<string[]>(['1']);
</script>
<style scoped lang="scss">
.container {
  min-height: 100vh;


}



</style>
