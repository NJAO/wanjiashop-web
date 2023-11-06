import AppVue from "@/App.vue"

import {
  RouteLocationNormalized,
  RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router"

const routes: [RouteRecordRaw] = [
  {
    path: "/",
    name: "Index",
    component: AppVue,
    meta: {
      key: 1,
    },
    children: [
      {
        path: "/category",
        name: "Category",
        component: () => import("@/components/Category.vue"),
        meta: {
          key: 2,
        },
      },
    ],
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
