
// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App'

// 全局引入混合
import {mixin1, mixin2} from './mixin'
Vue.config.productionTip = false
Vue.mixin(mixin1)
Vue.mixin(mixin2)

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App)
})
