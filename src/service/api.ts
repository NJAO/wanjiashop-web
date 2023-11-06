export const api = {
  // 登录
  AuthLoginByWeixin: "auth/loginByWeixin", //微信登录
  // 首页
  IndexUrl: "index/appInfo", //首页数据接口
  // 分类
  CatalogList: "catalog/index", //分类目录全部分类数据接口
  CatalogCurrent: "catalog/current", //分类目录当前分类数据接口
  GetCurrentList: "catalog/currentlist", // 当前分类商品数据
  // 购物车
  CartAdd: "cart/add", // 添加商品到购物车
  CartList: "cart/index", //获取购物车的数据
  CartUpdate: "cart/update", // 更新购物车的商品
  CartDelete: "cart/delete", // 删除购物车的商品
  CartChecked: "cart/checked", // 选择或取消选择商品
  CartGoodsCount: "cart/goodsCount", // 获取购物车商品件数
  CartCheckout: "cart/checkout", // 下单前信息确认
  // 商品
  GoodsCount: "goods/count", //统计商品总数
  GoodsDetail: "goods/detail", //获得商品的详情
  GoodsList: "goods/list", //获得商品列表
  GoodsShare: "goods/goodsShare", //获得商品的详情
  GoodsComment: "goods/comment", //获得商品评价
  SaveUserId: "goods/saveUserId",
  // 收货地址
  AddressDetail: "address/addressDetail", //收货地址详情
  DeleteAddress: "address/deleteAddress", //保存收货地址
  SaveAddress: "address/saveAddress", //保存收货地址
  GetAddresses: "address/getAddresses",
  RegionList: "region/list", //获取区域列表
  PayPrepayId: "pay/preWeixinPay", //获取微信统一下单prepay_id
  OrderSubmit: "order/submit", // 提交订单
  OrderList: "order/list", //订单列表
  OrderDetail: "order/detail", //订单详情
  OrderDelete: "order/delete", //订单删除
  OrderCancel: "order/cancel", //取消订单
  OrderConfirm: "order/confirm", //物流详情
  OrderCount: "order/count", // 获取订单数
  OrderCountInfo: "order/orderCount", // 我的页面获取订单数状态
  OrderExpressInfo: "order/express", //物流信息
  OrderGoods: "order/orderGoods", // 获取checkout页面的商品列表
  // 足迹
  FootprintList: "footprint/list", //足迹列表
  FootprintDelete: "footprint/delete", //删除足迹
  // 搜索
  SearchIndex: "search/index", //搜索页面数据
  SearchHelper: "search/helper", //搜索帮助
  SearchClearHistory: "search/clearHistory", //搜索帮助
  ShowSettings: "settings/showSettings",
  SaveSettings: "settings/save",
  SettingsDetail: "settings/userDetail",
  GetBase64: "qrcode/getBase64", //获取商品详情二维码
}
