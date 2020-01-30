// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import router from './router'

Vue.prototype.$http = axios
// 原生ajax、axios请求时，如果不显示的设置Content-Type，那么默认是text/plain，这时服务器就不知道怎么解析数据了，所以才只能通过获取原始数据流的方式来进行解析请求数据。
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.use(ElementUI)

Vue.config.productionTip = false

// 登陆拦截
router.beforeEach((to, from, next) => {
    if (to.path === '/') {
        sessionStorage.removeItem('user')
    }
    let user = JSON.parse(sessionStorage.getItem('user'))
    console.log(user)
    if (!user && to.path !== '/') {
        next({path: '/'})
    } else {
        next()
    }
})

// router.beforeEach((to, from, next) => {
//     console.log(to)
//     console.log(from)
//     if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//         if (localStorage.getItem('access_token')) { // 判断本地是否存在access_token
//             next()
//         } else {
//             if (to.path === '/') {
//                 next()
//             } else {
//                 next({
//                     path: '/'
//                 })
//             }
//         }
//     } else {
//         next()
//     }
//     /* 如果本地 存在 token 则 不允许直接跳转到 登录页面 */
//     if (to.fullPath === '/') {
//         if (localStorage.getItem('access_token')) {
//             next({
//                 path: from.fullPath
//             })
//         } else {
//             next()
//         }
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
