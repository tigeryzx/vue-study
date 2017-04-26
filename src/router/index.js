import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/views/Home'
import About from '@/views/About'
import Editor from '@/views/Editor'
import Res from '@/views/Res'
import TRoute from '@/views/TRoute'
import SubRoute from '@/views/SubRoute'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }, {
      path: '/About',
      name: 'About',
      component: About
    }, {
      path: '/Editor',
      name: 'Editor',
      component: Editor
    }, {
      path: '/Res',
      name: 'Res',
      component: Res
    }, {
      path: '/TRoute',
      name: 'TRoute',
      component: TRoute,
      children: [{
        path: 'SubRoute',
        component: SubRoute
      }]
    }
  ]
})
