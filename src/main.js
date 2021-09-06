import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueLazyload from 'vue-lazyload'
import store from './store';

Vue.config.productionTip = false
Vue.config.devtools = true;


Vue.use(VueLazyload, {
  preLoad: 1,
  loading: require('assets/img/common/placeholder.png')
})

Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
