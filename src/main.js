
// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App'

// 按需引入
import {Button, Select, Row} from 'element-ui'

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Row.name, Row)
Vue.config.productionTip = false
// elementUI
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// 应用elementUI
// Vue.use(ElementUI)
// 创建vm
new Vue({
  el:'#app',
  render: h => h(App),
})
