import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/global.css'

Vue.config.productionTip = false
// 入口文件作用：导入其他依赖
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
