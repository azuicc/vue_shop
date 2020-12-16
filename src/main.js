import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入element ui
// import ElementUi from 'element-ui'

import './plugins/element.js'
// 导入全局样式表ui
import '../src/assets/css/global.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://119.23.53.78:8888/api/private/v1/'
Vue.prototype.$http = axios

// Vue.use(ElementUi)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
