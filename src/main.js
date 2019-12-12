// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//npm配置axios
import Axios from 'axios'
Vue.prototype.$axios = Axios
// Axios.defaults.baseURL = '/carrots-admin-ajax/'  //拦截名！
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

//npm安装qs
import Qs from 'qs'
Vue.prototype.$qs = Qs
//定义全局变量


//npm安装element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)



Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
