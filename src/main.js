// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Layout from './views/layout'
import router from './router'
import Mock from './mock'
import 'lib-flexible'
import './assets/css/mui.css'
import './assets/css/tool.css'
import './assets/css/common.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
