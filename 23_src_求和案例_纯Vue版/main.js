
// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App'

Vue.config.productionTip = false
new Vue({
  el:'#app',
  render: h => h(App),
  // 安装全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
})
