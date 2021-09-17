import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueLazyload from 'vue-lazyload'
import store from './store';
import toast from 'components/common/toast';

var FastClick = require('fastclick');
FastClick.attach(document.body);

Vue.config.productionTip = false
Vue.config.devtools = true;


Vue.use(VueLazyload, {
  preLoad: 1,
  loading: require('assets/img/common/placeholder.png')
})

Vue.use(toast)

Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
