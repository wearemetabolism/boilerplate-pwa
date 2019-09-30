import Vue from 'vue'
import VueResource from 'vue-resource'
import VueFormGenerator from 'vue-form-generator'
//import VueAnalytics from 'vue-analytics'

import App from './App.vue'

import router from './services/router'
import store from './services/store'
import {Dictionary} from './services/mixins'

import './services/serviceWorker'

Vue.use(VueResource);
Vue.use(VueFormGenerator);
Vue.mixin(Dictionary);
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
Vue.http.options.root = 'http://api.mutuelle.preview-dev.fr/';

new Vue({
  router,
  store,
  render: h => h(App),
  mounted(){
    store.dispatch('loadConfig');
  }
}).$mount('#app');
