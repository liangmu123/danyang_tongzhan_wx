import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
// 浏览统计
import postView from '@api/postView'
Vue.use(VueRouter)

const routes = [
  // 模块1
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/layout.vue"),
    hidden: true,
    redirect: "/Home",
    children: [{

        path: "/home",
        name: "home",
        component: () => import("@/views/Home.vue"),
        meta: {
          title: "丹阳智慧统战平台",
        },
      },
      {

        path: "/InformationList",
        name: "InformationList",
        component: () => import("@/views/InformationList.vue"),
        meta: {
          title: "丹阳智慧统战平台",
          // keepAlive: true,
        },
      },
      {

        path: "/tabinformationList",
        name: "tabinformationList",
        component: () => import("@/views/tabinformationList.vue"),
        meta: {
          title: "丹阳智慧统战平台",
          // keepAlive: true,
        },
      },
      {
        path: "/articleDetails",
        name: "articleDetails",
        component: () => import("@/views/articleDetails.vue"),
        meta: {
          title: "资讯详情",
          // keepAlive: true,
        },
      },
      {
        path: "/videoDetails",
        name: "videoDetails",
        component: () => import("@/views/videoDetails.vue"),
        meta: {
          title: "资讯详情",
          // keepAlive: true,
        },
      },

    ],
  },
  // 模块2
  {
    path: "/wenjuanList",
    name: "wenjuanList",
    component: () => import("@/views/layout.vue"),
    hidden: true,
    redirect: "/wenjuanList",
    children: [{
        path: "/wenjuanList",
        name: "wenjuanList",
        component: () => import("@/views/wenjuan/wenjuanList.vue"),
        meta: {
          title: "问卷调查",
        },
      },
      {
        path: "/questionDetail",
        name: "questionDetail",
        component: () => import("@/views/wenjuan/questionDetail.vue"),
        meta: {
          title: "问卷调查",
        },
      },

    ],
  },
  // 模块3
  {
    path: "/",
    name: "center",
    component: () => import("@/views/layout.vue"),
    hidden: true,
    redirect: "/center",
    children: [{
        path: "/center",
        name: "center",
        component: () => import("@/views/center/center.vue"),
        meta: {
          title: "个人中心",
        },
      },
      {
        path: "/myinfo",
        name: "myinfo",
        component: () => import("@/views/center/myinfo.vue"),
        meta: {
          title: "个人资料",
        },
      },
    ],
  },

  {
    path: "/bindInfo",
    name: "bindInfo",
    component: () => import("@/views/bindInfo.vue"),
    meta: {
      title: "成为统战人士",
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import('@/views/About.vue'),
    meta: {
      title: '关于',
      keepAlive: true
    }
  },
  {
    path: '*', // 未匹配到路由时重定向
    redirect: '/',
    meta: {
      // keepAlive: true
    }
  }
]

const router = new VueRouter({
  routes
})

// 全局路由钩子函数 对全局有效
router.beforeEach((to, from, next) => {
  // 路由发生变化修改页面title
  if (to.meta.title) {

    document.title = to.meta.title
  }
  // 获取token
  /****注释掉就可以跳过只能在微信打开****/
  if (!store.state.user.token) {
    store.dispatch('getToken', {
        access_token: to.query.access_token,
        route: to
      })
      .then(function () {
        // getuserinfo()
        next()
      })
  } else {
    next()
  }
})

router.afterEach((to) => {
  // 浏览统计
  postView(to);
  // console.log(window.location.port) 
});
export default router