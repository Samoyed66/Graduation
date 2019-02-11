import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/lzd/Home'
import Registered from '@/components/lzd/Registered'
import Login from '@/components/lzd/Login'
import Selection from '@/components/lzd/Selection'
import OrderSure from '@/components/lzd/OrderSure'
import List from '@/components/zb/List'
import Details from '@/components/zb/Details'
import Children from '@/components/fzy/Children'
import Dance from '@/components/fzy/Dance'
import Drama from '@/components/fzy/Drama'
Vue.use(Router)
var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        // 设置头部是否显示
        headShow: true,
        // 设置底部是否显示
        footShow: true
      }
    },
    {
      path: '/registered',
      name: 'Registered',
      component: Registered,
      meta: {
        // 设置头部是否显示
        headShow: false,
        // 设置底部是否显示
        footShow: false
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        // 设置头部是否显示
        headShow: false,
        // 设置底部是否显示
        footShow: false
      }
    },
    {
      path: '/list/:val?',
      name: 'List',
      component: List,
      meta: {
        // 设置头部是否显示
        headShow: true,
        // 设置底部是否显示
        footShow: true
      }
    },
    {
      path: '/details/:id?',
      name: 'Details',
      component: Details,
      meta: {
        // 设置头部是否显示
        headShow: true,
        // 设置底部是否显示
        footShow: true
      }
    },
    {
      path: '/children',
      name: 'Children',
      component: Children,
      meta: {
        // 设置头部是否显示
        headShow: true,
        // 设置底部是否显示
        footShow: true
      }
    },
    {
      path: '/dance',
      name: 'Dance',
      component: Dance,
      meta: {
        // 设置头部是否显示
        headShow: true,
        // 设置底部是否显示
        footShow: true
      }
    },
    {
      path: '/drama',
      name: 'Drama',
      component: Drama,
      meta: {
        // 设置头部是否显示
        headShow: true,
        // 设置底部是否显示
        footShow: true
      }
    },
    {
      path: '/selection',
      name: 'Selection',
      component: Selection,
      meta: {
        // 设置头部是否显示
        headShow: true,
        // 设置底部是否显示
        footShow: true
      }
    },
    {
      path: '/orderSure',
      name: 'OrderSure',
      component: OrderSure,
      meta: {
        // 设置头部是否显示
        headShow: false,
        // 设置底部是否显示
        footShow: false
      }
    }
  ]
})
export default router
