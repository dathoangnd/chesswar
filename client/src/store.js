import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "",
    secret: "",
    code: ""
  },
  mutations: {
    changeName(state, name) {
      state.name = name
    },
    changeSecret(state, secret) {
      state.secret = secret
    },
    changeCode(state, code) {
      state.code = code
    }
  },
  actions: {

  }
})
