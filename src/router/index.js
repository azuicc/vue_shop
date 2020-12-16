import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home }

  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
// to 你访问的页面
// from 代表你从那个路径而来
// 就是一个函数可以直接fangxing
  if (to.path === '/login') return next()

  const tokenStr = window.sessionStorage.getItem('token')

  if (!tokenStr) return next('/login')
  next()
})

export default router
