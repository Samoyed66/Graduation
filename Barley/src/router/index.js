import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/lzd/Home'
import Registered from '@/components/lzd/Registered'
import Login from '@/components/lzd/Login'
import List from '@/components/zb/List'
import Details from '@/components/zb/Details'
import Children from '@/components/fzy/Children'
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
      path: '/list',
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
    }
  ]
})
export default router
