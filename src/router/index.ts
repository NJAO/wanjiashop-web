import AppVue from "@/App.vue";
import { RouteLocationNormalized, RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes:[RouteRecordRaw] = [
  {
    path:'/',
    name:'Index',
    component:AppVue
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((_to:RouteLocationNormalized, _from:RouteLocationNormalized) => {
  
})

export default router