import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

const store = new vuex.Store({
    state: {
      // token: false,
      activeMenu: '/',
      user: {
        userName: '',
        id: null
      }
    },
    mutations: {
      // setToken (state,val) {
      //   state.token = val
      // },
      setUser (state, val) {
        state.user = val
      },
      setActiveMenu (state, val) {
        state.activeMenu = val
      }
    }
})

export default store