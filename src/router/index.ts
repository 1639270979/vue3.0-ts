/*
 * @Autor: yong.zhu
 * @Date: 2021-10-08 17:55:55
 * @LastEditors: yong.zhu
 * @LastEditTime: 2021-11-10 16:48:00
 * @Description: 路由
 * @Version: 1.0
 */
import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
  RouterOptions,
} from "vue-router";
import Layout from "@/layout/index.vue";
import permissionStore from "@/store/permission";

const defaultList = [
  {
    path: "/index",
    component: () => import("@/views/base/index.vue"),
    name: "index",
    meta: {
      title: "首页",
      icon: "dashboard",
      noCache: true,
      affix: true,
    },
  },
];

export const routes: RouteRecordRaw[] = [
  {
    path: "/redirect",
    component: Layout,
    meta: {
      hidden: true,
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/base/redirect.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/base/login.vue"),
    meta: {
      hidden: true,
      noCache: true,
    },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/base/error/404.vue"),
    meta: {
      hidden: true,
      noCache: true,
    },
  },
  {
    path: "/401",
    name: "401",
    component: () => import("@/views/base/error/401.vue"),
    meta: {
      hidden: true,
      noCache: true,
    },
  },
  {
    path: "/main",
    component: () => import("@/views/base/main/index.vue"),
    name: "main",
    meta: {
      title: "首页",
      icon: "dashboard",
      noCache: true,
      affix: true,
      hidden: true,
    },
  },
  {
    path: "/lotseting",
    component: () => import("@/views/lottSetting/lotList/index.vue"),
    name: "lotseting",
    meta: {
      title: "摇号设置",
      icon: "dashboard",
      noCache: true,
      affix: true,
      hidden: true,
    },
  },
  {
    path: "/",
    component: Layout,
    redirect: "index",
    meta: {
      hidden: false,
      title: "主页",
    },
    children: defaultList,
  },
];
permissionStore.setSidebarRouters([]);

const routerParams: RouterOptions = {
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
};

const router = createRouter(routerParams);

// 去除重复路由报错的问题
const originalPush = router.push;
router.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export function resetRouter() {
  const newRouter = createRouter(routerParams);
  router.resolve = newRouter.resolve;
}

export default router;
