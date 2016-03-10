import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'

import hdExample from './demo/header.vue'
import ListExample from './demo/list.vue'
import badgeExample from './demo/badge.vue'
import btnExample from './demo/btn.vue'
import iconExample from './demo/icon.vue'
import tabExample from './demo/tabs.vue'
import formExample from './demo/forms.vue'

// import './common/normalize.scss'
// import './styles.scss'

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueRouter)

const router = new VueRouter()
router.map({
  '/header': {
    component: hdExample
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
  }
})

const App = Vue.extend(app)

router.start(App, 'body')
