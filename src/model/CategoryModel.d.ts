export interface CategoryList {
  id: number
  name: string
  keywords: string
  front_desc: string
  parent_id: number
  sort_order: number
  show_index: number
  is_show: number
  icon_url: string
  img_url: string
  level: string
  front_name: string
  p_height: number
  is_category: number
  is_channel: number
}

export interface CurrentCategoryGoodsInfo {
  count: number
  totalPages: number
  pageSize: number
  currentPage: number
  data: GoodInfo[]
}

export interface GoodsDetail {
  info: Info
  gallery: Gallery[]
  specificationList: SpecificationList
  productList: ProductList[]
}

interface ProductList {
  id: number
  goods_id: number
  goods_specification_ids: string
  goods_sn: string
  goods_number: number
  retail_price: number
  cost: number
  goods_weight: number
  has_change: number
  goods_name: string
  is_on_sale: number
  is_delete: number
}

interface SpecificationList {
  specification_id: number
  name: string
  valueList: ValueList[]
}

interface ValueList {
  id: number
  goods_id: number
  specification_id: number
  value: string
  pic_url: string
  is_delete: number
  goods_number: number
}

interface Gallery {
  id: number
  goods_id: number
  img_url: string
  img_desc: string
  sort_order: number
  is_delete: number
}

interface Info {
  id: number
  category_id: number
  is_on_sale: number
  name: string
  goods_number: number
  sell_volume: number
  keywords: string
  retail_price: string
  min_retail_price: number
  cost_price: string
  min_cost_price: number
  goods_brief: string
  goods_desc: string
  sort_order: number
  is_index: number
  is_new: number
  goods_unit: string
  https_pic_url: string
  list_pic_url: string
  freight_template_id: number
  freight_type: number
  is_delete: number
}

interface GoodInfo {
  name: string
  id: number
  goods_brief: string
  min_retail_price: number
  list_pic_url: string
  goods_number: number
}
