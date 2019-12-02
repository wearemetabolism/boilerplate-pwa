import Vue from 'vue'
import Router from 'vue-router'
import { EventBus } from './event-bus'

import Page from '@/views/Page.vue'
import store from '@/services/store'

Vue.use(Router);

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Page
    },
    {
      path: '/:page',
      component: Page
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 800)
    })
  }
});

router.beforeEach((to, from, next) => {
  store.dispatch('load', to.path).then(() => {

    EventBus.$emit('change-route');
    next();
  })
});

export default router;