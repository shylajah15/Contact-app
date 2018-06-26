import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: MainView
    }
  ]
})
