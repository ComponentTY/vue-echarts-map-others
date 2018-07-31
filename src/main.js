// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import './style/style.css'
import VueResource from 'vue-resource'
import vuex from 'vuex'
import store from './vuex/store.js'
import VueAMap from 'vue-amap'
import Echarts from 'echarts'
import { lazyAMapApiLoaderInstance } from 'vue-amap'

Vue.prototype.$echarts = Echarts
Vue.prototype.http = VueResource
// Vue.propertype.$echarts = Echarts
Vue.use(VueAMap)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(vuex)

VueAMap.initAMapApiLoader({
  key: '24a46db0f0ad7ae41de54a8179cecd28',
  plugin: ['AMap.Autocomplete', 'AMap.AMapManager', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geocoder','Geolocation','AMap.MapType', 'AMap.DistrictSearch'],
  uiVersion: '1.0', // ui库 不配置不加载
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})
/* lazyAMapApiLoaderInstance.load().then(() => {
  // your code ...
  this.map = new AMap.Map('amapContainer', {
    center: new AMap.LngLat(121.59996, 31.197646)
  });
}) */
/* eslint-disable no-new */

// 路由拦截器
router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if(localStorage.getItem('access_token')){ //判断本地是否存在access_token
      next()
    }else {
      next({
        path:'/login'
      })
    }
  }
  else {
    next()
  }
  /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
  if(to.fullPath == "/login"){
    if (localStorage.getItem('access_token')) {
      next({
        path:from.fullPath
      })
    }else {
      next()
    }
  }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
