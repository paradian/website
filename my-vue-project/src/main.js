// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Footerbar from './components/component-detail/Footer';
import Carousel from  './components/component-detail/Carousel';
Vue.component('Footerbar',Footerbar)
Vue.component('Carousel',Carousel)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
