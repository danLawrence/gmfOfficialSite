import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import compA from '@/components/comp-a'
import compB from '@/components/comp-b'
import compC from '@/components/comp-c'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }, {
      path: '/compA',
      name: 'compA',
      component: compA
    }, {
      path: '/compB',
      name: 'compB',
      component: compB
    }, {
      path: '/compC',
      name: 'compC',
      component: compC
    }, {
      path: '/',
      redirect: {
        name: 'Hello'
      }
    }
  ]
})
