import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
// import HelloWorld from '@/components/HelloWorld'
import pic from '@/components/pic'
import homePage from '@/components/homePage'
import phoneList from '@/components/phoneList'
import notice from '@/components/notice'
import setting from '@/components/setting'

export default new Router({
  linkActiveClass:'mui-active',//改变路由激活时的class名称
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name:'pic',
      component:pic
    },{
      path: '/homePage',
      name:'homePage',
      component:homePage
    },{
      path: '/notice',
      name:'notice',
      component:notice
    },{
      path: '/phoneList',
      name:'phoneList',
      component:phoneList
    },{
      path: '/setting',
      name:'setting',
      component:setting
    }
  ]
})
