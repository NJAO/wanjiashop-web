export interface SearchIndex {
  defaultKeyword: DefaultKeyword
  historyKeywordList: string[]
  hotKeywordList: any[]
}

export interface SearchGoodsList {
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
