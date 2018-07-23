import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'

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

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueRouter)

const router = new VueRouter({
   history: false, //html5模式 去掉锚点
   saveScrollPosition: true //记住页面的滚动位置 html5模式适用
})
router.map({
  '/':{
    component: navsExample
  },
  '/header': {
    component: hdExample
  },
  '/listdata': {
    component: ListDataExample
  },
  '/list': {
    component: ListExample
  },
  'badge':{
  	component: badgeExample
  },
  'btn':{
  	component: btnExample
  },
  'icon':{
  	component: iconExample
  },
  'tabs':{
  	component: tabExample
  },
  'form':{
    component: formExample
  },
  'modal':{
    component: modalExample
  },
  'scroll':{
  	component: scrollExample
  },
  'option':{
    component: voptionExample
  },
  'datepicker':{
    component: datepickerExample
  },
  /*'weixin':{
    component: weixinExample
  }*/
})

const App = Vue.extend(app)

router.start(App, 'body')
