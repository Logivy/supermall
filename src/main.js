/*
 * @Descripttion: 
 * @version: 
 * @Author: Logivy
 * @Date: 2021-05-09 19:02:46
 * @LastEditors: Logivy
 * @LastEditTime: 2021-08-26 15:14:37
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.config.devtools = true;


Vue.use(VueLazyload, {
  preLoad: 1,
  loading: require('assets/img/common/placeholder.png')
})

Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
