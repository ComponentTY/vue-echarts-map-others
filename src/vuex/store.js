import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

const store = new vuex.Store({
    state: {
      token: false
    },
    mutations: {
      setToken (state,val) {
        state.token = val
      }
    }
})

export default store