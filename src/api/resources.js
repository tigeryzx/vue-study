import Vue from 'vue'
import VueResource from 'vue-resource'
import store from '../vuex/store'
import * as types from '../vuex/types'

Vue.use(VueResource);

// 设置为允许跨域
Vue.http.options.crossOrigin = true
Vue.http.options.credentials = false

//注入处理
Vue.http.interceptors.push((request, next)=>{
    // 这里对请求体进行处理
    //   request.headers = request.headers || {}
    //   if (getCookie('token')) {
    //     request.headers.Authorization = 'Bearer ' + getCookie('token').replace(/(^\")|(\"$)/g, '')
    //   }

    //显示加载中
    store.commit(types.START_LOADING);

  next((response) => {
    // 这里可以对响应的结果进行处理
    if (response.status === 401) {
      signOut()
      window.location.pathname = '/login'
    }

    //隐藏加载中
    store.commit(types.END_LOADING);
  })
})

const API_ROOT = 'http://localhost:4635/api/';

export const ValuesResource = Vue.resource(API_ROOT + 'values{/id}');