import AppVue from "@/App.vue"
import CategoryVue from "@/components/Category.vue"

import {
  RouteLocationNormalized,
  RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Index",
    component: AppVue,
    meta: {
      key: 1,
    },
    children: [
      {
        path: "/",
        name: "Category",
        component: CategoryVue,
        meta: {
          key: 1,
        },
      },
      {
        path: "/search",
        name: "Search",
        component: () => import("@/components/Search.vue"),
        meta: {
          key: 2,
        },
      },
    ],
  },
  {
    path: "/:path(.*)",
    name: "404",
    component: () => import("@/components/404.vue"),
  },
  {
    path: "/good/:id",
    name: "goodDetail",
    component: () => import("@/components/goodDetail.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(
  (_to: RouteLocationNormalized, _from: RouteLocationNormalized) => {}
)

export default router
