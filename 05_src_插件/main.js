
// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App'

// 引入插件
import pluins from './plugins'

Vue.config.productionTip = false

// 使用插件
Vue.use(pluins)

new Vue({
  el:'#app',
  render: h => h(App)
})
