import axios from "axios";
import Vue from 'vue';
import {
    Toast
} from 'vant';

import store from '../store'

let config = {
    timeout: 20000, //超时
    // 代理
    //   baseURL: process.env.VUE_APP_INTERFACE_PATH
}

// 创建axios实例
const _axios = axios.create(config);
// axios默认是发送请求的时候不会带上cookie的，需要通过设置withCredentials: true来解决
_axios.defaults.withCredentials = true

// loading框设置局部刷新，且所有请求完成后关闭loading框
let needLoadingRequestCount = 0 // 声明一个对象用于存储请求个数
function startLoading() {
    store.dispatch('SET_LOAD_MUTATIONS', {
        loading: true
    })
}

function endLoading() {
    store.dispatch('SET_LOAD_MUTATIONS', {
        loading: false
    })
}

function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading()
    }
    needLoadingRequestCount++
}

function hideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        endLoading()
    }
}

//请求拦截
_axios.interceptors.request.use(
    (config) => {

        showFullScreenLoading()

        return config;
    },
    (err) => {
        hideFullScreenLoading()
        // ////console.log("err:" + err);
        return Promise.reject(err);
    }
);

// 响应拦截
_axios.interceptors.response.use(
    (response) => {
        hideFullScreenLoading()
        // debugger
        if (response.status != 200) {
            return Promise.reject("error");
        } else {
            // console.log(response.data)
            return response.data;
        }
    },
    (err) => {
        hideFullScreenLoading()
        // ////console.log(err, err.response.status);
        let {
            status
        } = err.response;
        if (err && status) {
            let errMsg = {
                400: "请求出错",
                401: "登录失效，请重新登录",
                403: "拒绝访问",
                408: "请求超时",
                500: "服务器内部错误",
                501: "服务未实现",
                502: "网关错误",
                503: "服务不可用",
                504: "网关超时",
                505: "http版本不受支持"
            };
            // ////console.log(errMsg, err.response.status);
            // ////console.log("err:" + );
            Toast.fail(errMsg[status]);
            // if (status == 401) {
            //   setTimeout(() => {
            //     localStorage.removeItem("spmsToken");
            //     router.push("./login");
            //   }, 2000);
            // }
        }

        return Promise.reject(err);
    }
);

export default _axios;