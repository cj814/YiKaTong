import axios from 'axios'
import vue from 'vue'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
})
// 响应拦截器
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
})

// 封装axios的post请求
export function fetch(url, method, params) {
    return new Promise((resolve, reject) => {
        if(method === 'get') {
            axios.get(url, params)
                .then(response => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                })
        }
        if (method === 'post') {
            axios.post(url, params)
                .then(response => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                })
        }
    })
}