<template>
  <div class="container1">
    <a-input-search class="search" v-model:value="search" placeholder="搜索，共200款商品" @search="() => { searchHistories.push(search)}" />

    <div v-for="(item, index) in searchHistories" :key="index">{{ item }}</div>
  </div>
</template>
  
<script setup lang='ts'>
  import { useAsyncState, useLocalStorage } from '@vueuse/core'
  // import { get } from '@/service/request'
  // import type { SearchGoodsList } from '@/model/Search'
  const search = ref<string>("")
  const searchHistories = useLocalStorage<string[]>('searchHistories', [])
</script>
  
<style scoped lang="scss">
  .container1 {
    padding: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .search {
      height: 32px;
    }
  }
</style>