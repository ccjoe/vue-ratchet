import Vue from 'vue'
import app from './app.vue'
import Router from 'vue-router'

import hdExample from './demo/header.vue'
import ListDataExample from './demo/listdata.vue'
import ListExample from './demo/list.vue'
import badgeExample from './demo/badge.vue'
import btnExample from './demo/btn.vue'
import iconExample from './demo/icon.vue'
import tabExample from './demo/tabs.vue'
import formExample from './demo/forms.vue'
import modalExample from './demo/modal.vue'
import scrollExample from './demo/scroll.vue'
import voptionExample from './demo/voption.vue'
// import weixinExample from './demo/weixin.vue'
import datepickerExample from './demo/datepicker.vue'
import navsExample from './demo/navs.vue'

// import './common/normalize.scss'
import './styles.scss'

Vue.use(Router)
/*
 Router() */

var router = new Router({
  // history: false, //html5模式 去掉锚点
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }, //记住页面的滚动位置 html5模式适用
  routes: [
    {
      path: '/',
      component: navsExample
    },
    {
      path: '/header',
      component: hdExample
    },
    {
      path: '/listdata',
      component: ListDataExample
    },
    {
      path: '/list',
      component: ListExample
    },
    {
      path: '/badge',
      component: badgeExample
    },
    {
      path: '/btn',
      component: btnExample
    },
    {
      path: '/icon',
      component: iconExample
    },
    {
      path: '/tabs',
      component: tabExample
    },
    {
      path: '/form',
      component: formExample
    },
    {
      path: '/modal',
      component: modalExample
    },
    {
      path: '/scroll',
      component: scrollExample
    },
    {
      path: '/option',
      component: voptionExample
    },
    {
      path: '/datepicker',
      component: datepickerExample
    } /* ,{
    path: 'weixin',
    component: weixinExample
  } */
  ]
})

const App = Vue.extend(app)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
