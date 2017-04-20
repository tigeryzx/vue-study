/**
 * 模块B
 */

import * as types from '../types'

const state = {
    srcHtml: ''
}

const mutations = {
    [types.SET_SRCHTML](state, payload) {
        state.srcHtml = payload.html;
    }
}

export default {
    state, mutations
}