import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/***** npm i vant -S   ******/
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);



/***** px自动转换rem   ******/
/***** npm install lib-flexible --save ******/
/***** npm install postcss-px2rem-exclude --save ******/
import 'lib-flexible'

/***** 封装的请求方法 ******/
/***** npm install axios   ******/
// import axios from 'axios' //
// Vue.prototype.axios = axios;
import axios from '@/api/axios'
Vue.prototype.$request = axios

// router.beforeEach((to, from, next) => {
  // 路由发生变化修改页面title
  // if (to.meta.title) {
  //   document.title = to.meta.title
  // }
// })


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')