<template>
  <a-config-provider :locale="zhCN">
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
          <a-menu-item key="2"><router-link to="/category">全部商品</router-link></a-menu-item>
          <a-menu-item >
            <a-input-search v-model:value="search" placeholder="请输入搜索关键词" loading />
          </a-menu-item>
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
const search = ref<string>("")
const selectedKeys = ref<string[]>([String(router.currentRoute.value.meta.key) as string]);


</script>
<style scoped lang="scss">
.container {
  min-height: 100vh;
  

}



</style>
