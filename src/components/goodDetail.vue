<template>
  <div class="container">
    <a-image root-class-name="image" max-width: :src="goodInfo.info.list_pic_url"></a-image>
  </div>

</template>

<script lang="ts" setup>
import { GoodsDetail } from '@/model/CategoryModel';
import { get } from '@/service/request';

const { currentRoute } = useRouter()

const goodInfo = ref<GoodsDetail>({
  info: {
    id: 0,
    category_id: 0,
    is_on_sale: 0,
    name: '',
    goods_number: 0,
    sell_volume: 0,
    keywords: '',
    retail_price: '',
    min_retail_price: 0,
    cost_price: '',
    min_cost_price: 0,
    goods_brief: '',
    goods_desc: '',
    sort_order: 0,
    is_index: 0,
    is_new: 0,
    goods_unit: '',
    https_pic_url: '',
    list_pic_url: '',
    freight_template_id: 0,
    freight_type: 0,
    is_delete: 0
  },
  gallery: [],
  specificationList: {
    specification_id: 0,
    name: '',
    valueList: []
  },
  productList: []
})

onMounted(async () => {
  getGoodInfo()
})

/**
 * 获取商品详情信息
 */
const getGoodInfo = async () => {
  const categoryGoodsInfoRes = await get<GoodsDetail>('GoodsDetail', { id: currentRoute.value.params.id })
  const { errno, data } = categoryGoodsInfoRes
  if (errno === 0) {
    goodInfo.value = data
    setTimeout(() => {

    }, 200);
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  min-height: 100vh;

  .image {
    width: 100%;
    max-width: 350px;
  }

}
</style>
