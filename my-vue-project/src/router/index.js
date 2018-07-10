import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Apply from '@/components/Apply'
import About from '@/components/About'
import Product from '@/components/Product'
import  News from  '@/components/News'
import Partner from '@/components/Partner'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',
    redirect:'/home'},
    {
      path: '/home',
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
    },
    {
      path:'/news',
      component:News
    },
    {path:'/partner',
      component:Partner
    }
  ]
})
