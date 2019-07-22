import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'

import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

const PanelRouter = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{title:'Welcome'},
      component: Home
    },
    {
      path: '/about',
      meta:{title:'About me'},
      name: 'about',
      component: About
    }
  ]
})

PanelRouter.beforeEach((to, from, next) => {
  document.title = to.meta.title // Set <title> for every components
  NProgress.start()
  NProgress.set(0.5)
  next()
})
PanelRouter.afterEach(() => {
  setTimeout(() => NProgress.done(), 20)
})

export default PanelRouter
