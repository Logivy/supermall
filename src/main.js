/*
 * @Descripttion: 
 * @version: 
 * @Author: Logivy
 * @Date: 2021-05-09 19:02:46
 * @LastEditors: Logivy
 * @LastEditTime: 2021-07-25 19:19:56
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false
Vue.config.devtools = true;


Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
