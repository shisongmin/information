import Vue from 'vue'
import ElementUI from 'element-ui'

import App from './App'
import router from './router'
//import {Menu,Submenu, MenuItem} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
// Vue.use(Menu,Submenu,MenuItem)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
