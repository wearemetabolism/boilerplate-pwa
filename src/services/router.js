import Vue from 'vue'
import Router from 'vue-router'

import Step1 from '@/views/Step1.vue'
import Step2 from '@/views/Step2.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'step-1',
      component: Step1
    },
    {
      path: '/step-2',
      name: 'step-2',
      component: Step2
    }
  ]
})
