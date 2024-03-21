<template>
  <div class="container">

    <a-menu @update:selected-keys="changeCategory" v-model:selected-keys="currentCategoryId"
      :disabled="categoryInfoLoading" class="menu">

      <template v-if="categoryInfoLoading">
        <a-menu-item v-for="item in 10" :key="item">
          <a-skeleton :title="true" :paragraph="false" loading active class="category_skeleton" />
        </a-menu-item>
      </template>
      <template v-else>
        <a-menu-item :key="0">全部</a-menu-item>
        <a-menu-item v-for="item in categoryInfo" :key="item.id">{{ item.name }}</a-menu-item>
      </template>

    </a-menu>
    <div class="goods_container">
      <a-list :loading="initLoading" :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4 }"
        :data-source="categoryGoodsInfo">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-card hoverable @click="">
              <template #cover>
                <a-image :src="item.list_pic_url" :alt="item.name"
                  fallback="data:image/png;base64,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" />
              </template>
              <template #actions>
                <a-card-meta @click="toGoodsDetail(item.id)">
                  <template #title>
                    <span :title="item.name">{{ item.name }}</span>
                  </template>
                  <template #description>
                    <div class="good_detail">
                      <span>价格：</span>
                      <span class="description">{{ `R$${item.min_retail_price}` }}</span>
                    </div>
                  </template>
                </a-card-meta>
              </template>
            </a-card>
          </a-list-item>
        </template>

        <template #loadMore>
          <div v-if="!loadingMore && !isLastPage"
            :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
            <a-button @click="onLoadMore">加载更多</a-button>
          </div>
          <div v-if="isLastPage"></div>
        </template>
      </a-list>
    </div>
  </div>
</template>


<script setup lang='ts'>
import { CategoryList, CurrentCategoryGoodsInfo, GoodInfo } from '@/model/CategoryModel';
import { get, post } from '@/service/request'
import { useScroll } from '@vueuse/core';

const htmlRef = ref<HTMLElement | null>(null)
const { y } = useScroll(htmlRef, { behavior: "smooth" })
const router = useRouter()
const categoryInfo = ref<CategoryList[]>([])
const categoryInfoLoading = ref<boolean>(true)
const currentCategoryId = ref<number[]>([0])
const categoryGoodsInfo = ref<GoodInfo[]>([])
const initLoading = ref<boolean>(true)
const loadingMore = ref<boolean>(false)
const currentPage = ref<number>(1)
const isLastPage = ref<boolean>(false)

onMounted(() => {
  htmlRef.value = document.documentElement;
})


/**
 * 切换分类
 * @param key 切换分类的KEY
 */
const changeCategory = (key: (string | number)[]) => {
  currentPage.value = 1;
  currentCategoryId.value = [Number(key[0])]
  y.value = 0;
}

/**
 * 查看货品详情
 * @param goodsId 商品id
 */
const toGoodsDetail = (goodsId: number) => {
  router.push(`/good/${goodsId}`)
}

/**
 * 加载更多
 */
const onLoadMore = async () => {
  currentPage.value++
  loadingMore.value = true
  const categoryGoodsInfoRes = await post<CurrentCategoryGoodsInfo>('GetCurrentList', { id: unref(currentCategoryId)[0], page: currentPage.value, size: 10 })
  const { errno, data } = categoryGoodsInfoRes
  if (errno === 0) {

    categoryGoodsInfo.value = categoryGoodsInfo.value.concat(data.data)

    setTimeout(() => {
      loadingMore.value = false
    }, 200);
  }
}

// 切换分类后加载分类商品
watch(currentCategoryId, async () => {
  initLoading.value = true
  const categoryGoodsInfoRes = await post<CurrentCategoryGoodsInfo>('GetCurrentList', { id: unref(currentCategoryId)[0], page: 1, size: 10 })
  const { errno, data } = categoryGoodsInfoRes
  if (errno === 0) {
    categoryGoodsInfo.value = data.data
    initLoading.value = false
  }
}, { immediate: true })

// 分类列表信息
const categoryInfoRes = await get<{ categoryList: CategoryList[] }>('CatalogList')
if (categoryInfoRes.errno === 0) {
  categoryInfo.value = categoryInfoRes.data.categoryList
  setTimeout(() => {
    categoryInfoLoading.value = false
  }, 200);
}


</script>


<style lang="scss" scoped>
.container {
  display: flex;
  position: relative;

  .menu {
    position: fixed;
    top: 64px;
    height: calc(100vh - 64px);
    min-width: 100px;

    .category_skeleton {
      :deep(.ant-skeleton-content .ant-skeleton-title) {
        height: 14px;
      }

    }
  }

  .goods_container {
    margin-left: 100px;
    padding: 16px;
    flex: 1;

    .good_detail {
      width: 100%;

      .description {
        color: #f40;
        font-size: 16px;
      }
    }
  }
}
</style>