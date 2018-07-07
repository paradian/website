import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Apply from '@/components/Apply'
import About from '@/components/About'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/apply',
      name:'Apply',
      component:Apply
    },
    {
      path:'/about',
      name:'About',
      component:About
    },
    {
      path:'/product',
      component:Product
    }
  ]
})
