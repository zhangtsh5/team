// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Api from './api/index.js'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$api = Api

// 在需要调用的地方调用
// this.$api.post('user/login.do(地址)', {
//     "参数名": "参数值"
// }, response => {
//     if (response.status >= 200 && response.status < 300) {
//         console.log(response.data);\\请求成功，response为成功信息参数
//     } else {
//         console.log(response.message);\\请求失败，response为失败信息
//     }
// });

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    // SIdentify,
    components: {App},
    template: '<App/>'
})
