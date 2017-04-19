import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex);

const state = {
  count: 1,
  todos: [{
    id: 1, text: 'item1', done: true
  }, {
    id: 2, text: 'item2', done: false
  }]
}

const mutations = {
  incrementStep(state) {
    state.count++
  },
  increment(state, payload) {
    state.count += payload.n
  }
}

const getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  doneTodosCount: (state, getters) => {
    var c = getters.doneTodos.length
    return c;
  }
}

const actions = {
  incrmentAsync({ commit }) {
    setTimeout(() => {
      commit('incrementStep');
    }, 1000)
  }
}

export default new Vuex.Store({
  state, mutations, getters, actions
})