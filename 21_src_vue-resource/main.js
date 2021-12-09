
// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App'

// 引入插件
import vueResource from 'vue-resource'

Vue.config.productionTip = false
// 使用插件
Vue.use(vueResource)
new Vue({
  el:'#app',
  render: h => h(App),
  // 安装全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
})
