<template>
  <a-config-provider :locale="zhCN">
    <a-layout class="container">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" mode="horizontal" theme="dark" :style="{ lineHeight: '64px' }">
          <a-menu-item key="1"><router-link to="/">全部商品</router-link></a-menu-item>
          <a-menu-item key="2"><router-link to="/search">搜索</router-link></a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content :style="{ marginTop: '64px' }" class="content">
        <Suspense>
          <router-view />
        </Suspense>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        ©2023 Created by WanjiaShop
      </a-layout-footer>
    </a-layout>
  </a-config-provider>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

import zhCN from 'ant-design-vue/es/locale/zh_CN';
const router = useRouter()
const selectedKeys = ref<string[]>([String(router.currentRoute.value.meta.key) as string]);


</script>
<style scoped lang="scss">
.container {
  min-height: 100vh;

  .content {
    // min-height: calc(100vh - 69px);
  }

}
</style>
