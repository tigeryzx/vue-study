/**
 * 模块A
 */

import * as types from '../types'

const state = {
    count: 1,
    todos: [{
        id: 1, text: 'item1', done: true
    }, {
        id: 2, text: 'item2', done: false
    }, {
        id: 3, text: 'item3', done: true
    }]
}

const mutations = {
    [types.INCREMENT_STEP](state) {
        state.count++
    },
    [types.INCREMENT](state, payload) {
        state.count += payload.n
    }
}

const getters = {
    [types.DONE_TODOS]: state => {
        return state.todos.filter(todo => todo.done)
    },
    [types.DONE_TODOS_COUNT]: (state, getters) => {
        var c = getters[types.DONE_TODOS].length
        return c;
    }
}

const actions = {
    [types.INCRMENT_ASYNC]({ commit }) {

        // 外面一层是为了作为子调用时保证执行顺序，如果只可能作为单独调用可以不需要外面一层
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit(types.INCREMENT_STEP);
                console.log(types.INCRMENT_ASYNC + ".begin..");
                resolve(2);
                console.log(types.INCRMENT_ASYNC + ".end..");
            }, 1000);
        });
    },
    /**
     * 调用子action
     */
    [types.INCRMENT_ASYNC_CHILD]({ dispatch, commit }) {
        // 当需要调用完成另一方法后再执行一些操作
        dispatch(types.INCRMENT_ASYNC).then((p) => {
            console.log('child action.' + p);
        });
    }
}

export default {
    state, mutations, getters, actions
}