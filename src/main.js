import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'// 引入
Vue.prototype.$axios = axios // 挂载
axios.defaults.baseURL = '/api'
Vue.config.productionTip = false



new Vue({
    el: "#app",
    render: h => h(App)
})