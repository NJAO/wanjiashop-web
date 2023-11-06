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

interface GoodInfo {
  name: string
  id: number
  goods_brief: string
  min_retail_price: number
  list_pic_url: string
  goods_number: number
}
