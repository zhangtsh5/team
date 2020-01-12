// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
Vue.prototype.$http = axios
// 原生ajax、axios请求时，如果不显示的设置Content-Type，那么默认是text/plain，这时服务器就不知道怎么解析数据了，所以才只能通过获取原始数据流的方式来进行解析请求数据。
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.use(ElementUI)
Vue.config.productionTip = false

// 登陆拦截
// router.beforeEach((to, from, next) => {
//     if (to.path === '/') {
//         sessionStorage.removeItem('user')
//     }
//     let user = JSON.parse(sessionStorage.getItem('user'))
//     console.log(user)
//     if (!user && to.path !== '/') {
//         next({path: '/'})
//     } else {
//         next()
//     }
// })

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    // SIdentify,
    components: {App},
    template: '<App/>'
})
