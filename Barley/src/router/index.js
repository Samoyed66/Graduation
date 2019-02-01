import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/zb/List'
import Details from '@/components/zb/Details'

Vue.use(Router)
var router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        // 设置头部是否显示
        headShow: true,
        // 设置底部是否显示
        footShow: true
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
      path: '/details',
      name: 'Details',
      component: Details,
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
