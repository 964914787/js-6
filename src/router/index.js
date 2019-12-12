import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import loginpage from '@/components/loginpage'    //登录页
import backstage from '@/components/backstage'   //后台页
import articlelist from '@/components/articlelist'  //列表
import Newlyadded from '@/components/Newlyadded' //新增



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{　title: '首页'}
    },
    {
      path: '/loginpage',
      name: 'loginpage',
      component: loginpage,
      meta: {
        title: '登录页'  //此处为要修改的 title 名称，浏览器目前的标题显示：Home
      }
    },
    {
      path: '/backstage',
      name: 'backstage',
      component: backstage,
      meta: {
        title: '后台页'  //此处为要修改的 title 名称，浏览器目前的标题显示：Home
      }
    },
    {
      path: '/articlelist',
      name: 'articlelist',
      component: articlelist,
      meta: {
        title: 'Article列表'  //此处为要修改的 title 名称，浏览器目前的标题显示：Home
      }
    },
    {
      path: '/Newlyadded',
      name: 'Newlyadded',
      component: Newlyadded,
      meta: {
        title: 'Article新增'  //此处为要修改的 title 名称，浏览器目前的标题显示：Home
      }
    },
  ]
})
