import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/layout.vue"),
    hidden: true,
    redirect: "/Home",
    meta: {
      title: "首页",
      icon: '',
      iconActive: '',
    },
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import('@/views/About.vue'),
    meta: {
      title: '关于',
      auth: false,
      keepAlive: true
    }
  },
  {
    path: '*', // 未匹配到路由时重定向
    redirect: '/',
    meta: {
      // auth: true,
      // keepAlive: true
    }
  }
]

const router = new VueRouter({
  routes
})

// 全局路由钩子函数 对全局有效
router.beforeEach((to, from, next) => {
  let auth = to.meta.auth
  // 路由发生变化修改页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }

  if (auth) { // 需要登录
    // if (token) {
    //   next()
    // } else {
    //   next({
    //     path: '/about',
    //     query: {
    //       redirect: to.fullPath
    //     }
    //   })
    // }
  } else {
    next()
  }
})

router.afterEach((to) => {});
export default router