import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Index',
      components: {
        'index': Index,
        'header': Header,
        'footer': Footer
      }
    }
  ]
})
