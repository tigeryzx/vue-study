/**
 * 模块C
 */

import * as types from '../types'
import api from '../../api/index'
import arryExt from '../../utils/arrayExt'

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
    },
    [types.REMOVE_VALUE_ITEM](state, payload) {
        if (state.valueList == null || state.valueList.length <= 0) {
            return;
        }

        arryExt.deleteItem(state.valueList, item => { item.id == payload.id });
    },
    [types.UPDATE_VALUE_ITEM](state, payload) {
        var item = state.valueList.filter(item => item.id == payload.id)[0];
        item.value = payload.value;
    }
}

const actions = {
    [types.GET_ALL_VALUES]({ commit }) {
        api.getAllValues().then(res => {
            if (!res.ok) {
                commit(types.FAILURE_GET_ALL_VALUES);
            }
            commit(types.SUCCESS_GET_ALL_VALUES, res.data);
        }, res => {
            commit(types.FAILURE_GET_ALL_VALUES);
        });
    },
    [types.SAVE_VALUE]({ commit, dispatch }, payload) {
        api.saveValue(payload).then(res => {
            // 刷新列表
            // 可以选择动态只添加一项，这样效率会更高，但因此可能出现列表数据跟服务器不一致的情况
            dispatch(types.GET_ALL_VALUES);
        }, res => {

        });
    },
    [types.DELETE_VALUE]({ commit, dispatch }, payload) {
        api.deleteValue(payload.id).then(res => {
            //删除元素
            commit(types.REMOVE_VALUE_ITEM, payload);
            //刷新列表
            dispatch(types.GET_ALL_VALUES);
        }, res => {

        });
    },
    [types.UPDATE_VALUE]({ commit, dispatch }, payload) {
        // 需要保证为同步
        return new Promise((resolve, reject) => {
            api.updateValue(payload).then(res => {
                commit(types.UPDATE_VALUE_ITEM, payload);
                resolve();
            }, res => {

            });
        })
    }
}

export default {
    state, mutations, actions
}