import Vue from 'vue'
import Vuex from 'Vuex'
import a from './modules/a'
import b from './modules/b'
import c from './modules/c'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    a, b, c
  }
})