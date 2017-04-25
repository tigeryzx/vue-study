/**
 * 模块C
 */

import * as types from '../types'
import api from '../../api/index'

const state = {
    valueList: []
}

const mutations = {
    [types.SUCCESS_GET_ALL_VALUES](state, payload) {
        state.valueList = [];
        state.valueList = payload;
    },
    [types.FAILURE_GET_ALL_VALUES](state) {
        //显示错误信息
    }
}

const actions = {
    [types.GET_ALL_VALUES]({ commit }) {
        api.getAllValues().then(res => {
            if (!res.ok) {
                commit(types.FAILURE_GET_ALL_VALUES);
            }
            commit(types.SUCCESS_GET_ALL_VALUES,res.data);
        }, res => {
            commit(types.FAILURE_GET_ALL_VALUES);
        });
    }
}

export default {
    state, mutations, actions
}