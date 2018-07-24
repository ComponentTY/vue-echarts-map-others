import Vue from 'vue'
import store from '../vuex/store.js'
import Router from 'vue-router'
import Register from '@/page/Register.vue'
import Login from '@/page/Login.vue'
import Index from '@/page/Index.vue'
import Charts from '@/page/charts.vue'
import Map from '@/page/map'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: '',
      redirect:{
        path: '/login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/index',
      meta: {
        requireAuth: true
      },
      component: Index,
      children: [
        {
          path: '/charts',
          component: Charts,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/map',
          component: Map,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/vue',
          component: Charts,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/others',
          component: Charts,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if(store.state.token){
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router