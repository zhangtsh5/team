import Vue from 'vue'
import Router from 'vue-router'
import MyPro from '../components/myPro/MyPro' // 我的项目
import NewPro from '../components/newPro/NewPro' // 新建列表
import ProList from '../components/proList/ProList' // 项目列表
import Home from '../components/Home'
import Login from '../components/Login'

Vue.use(Router)

export default new Router({
    mode: 'hash', // 去掉url中的#
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: '/home/MyPro',
                    name: 'MyPro',
                    component: MyPro
                },
                {
                    path: '/home/NewPro',
                    name: 'NewPro',
                    component: NewPro
                },
                {
                    path: '/home/ProList',
                    name: 'ProList',
                    component: ProList
                }
            ]
        }
    ]
})
