/**
 * mutations
 */
export const INCREMENT_STEP = 'a/INCREMENT_STEP'
export const INCREMENT = 'a/INCREMENT'
export const START_LOADING = 'a/START_LOADING';
export const END_LOADING = 'b/END_LOADING';

export const SET_SRCHTML = "b/SET_SRCHTML"

export const SUCCESS_GET_ALL_VALUES = "c/SUCCESS_GET_ALL_VALUES";
export const FAILURE_GET_ALL_VALUES = "c/FAILURE_GET_ALL_VALUES";

/**
 * getters 添加派出来的状态时使用
 */
export const DONE_TODOS = "a/DONE_TODOS"
export const DONE_TODOS_COUNT = "a/DONE_TODOS_COUNT"

/**
 * actions
 * https://vuex.vuejs.org/zh-cn/actions.html
 */
export const INCRMENT_ASYNC = "a/INCRMENT_ASYNC"
export const INCRMENT_ASYNC_CHILD = "a/INCRMENT_ASYNC_CHILD"

export const GET_ALL_VALUES = "c/GET_ALL_VALUES";