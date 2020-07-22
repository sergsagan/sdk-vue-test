import Vue from 'vue';
import Router from 'vue-router';
import PaymentsMethods from '@/components/PaymentsMethods';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: PaymentsMethods
    }
  ]
})