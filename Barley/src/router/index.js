import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

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
    }
  ]
})
export default router
