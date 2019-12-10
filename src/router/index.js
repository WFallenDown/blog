import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Journal from '@/components/Journal'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Index',
      component:Index
    },
    {
      path: '/Index',
      name:'Index',
      component:Index
    },
    {
      path:'/Journal',
      name:'Journal',
      component:Journal
    },
    {
      path:'/About',
      name:'About',
      component:About
    }
  ]
})
