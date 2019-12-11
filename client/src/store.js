import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "",
    secret: "",
    code: "",
    battle: false
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
    },
    changeBattle(state, isBattle) {
      state.battle = isBattle
    }
  },
  actions: {

  }
})
