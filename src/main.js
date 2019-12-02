import '../node_modules/@babel/polyfill'
import './services/serviceWorker'

import Vue from 'vue'

import VueHead from 'vue-head'
Vue.use(VueHead, {
  separator: '-',
  complement: 'Sitename'
});

import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.http.options.root = process.env.VUE_APP_API_ENDPOINT;

import VueFormGenerator from 'vue-form-generator'
Vue.use(VueFormGenerator);
Vue.mixin(Dictionary);

import BrowserDetect from '../node_modules/@metabolism/framework/browser'
BrowserDetect();

import OnScroll from '../node_modules/@metabolism/framework/vuejs/on-scroll'
Vue.use(OnScroll);

import App from './App.vue'
import router from './services/router'
import store from './services/store'

import media from './components/media'
Vue.component('media', media);

import VueCookieAcceptDecline from 'vue-cookie-accept-decline'
Vue.component('vue-cookie-accept-decline', VueCookieAcceptDecline);

/*
Vue.use(VueAnalytics, {
  id: 'UA-137979384-1',
  router,
  batch: {
    enabled: true,
    amount: 5,
    delay: 5000
  },
  autoTracking: {
    exception: true
  }
});
*/

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  mounted(){
    store.dispatch('config').then(function(data){

    });
  }
}).$mount('#app');
