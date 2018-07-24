import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [{
        path: '/one',
        components: Index
    }]
})

export default router