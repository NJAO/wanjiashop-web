<script setup lang='ts'>
  import { CategoryList } from '@/model/CategoryModel';
  import {get} from '@/service/request'
  const categoryInfo = ref<CategoryList[]>([])
  const res = await get<{categoryList:CategoryList[]}>('CatalogList')
  if (res.errno === 0) {
    categoryInfo.value = res.data.categoryList
  }
</script>
<template>
  <div v-for="item in categoryInfo" :key="item.id">
    <div>{{ item.name }}</div>
  </div>
</template>


<style scoped>
</style>