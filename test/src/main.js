import Vue from 'vue'
import ElementUI from 'element-ui'

import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/reset.css'
import '../static/js/rem'
Vue.config.productionTip = false
Vue.use(ElementUI);
// Vue.use(Menu,Submenu,MenuItem)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
