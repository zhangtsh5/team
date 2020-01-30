import Vue from 'vue'
import Router from 'vue-router'
import MyGroup from '../components/myGroup/MyGroup' // 我的项目
import NewGroup from '../components/newGroup/NewGroup' // 新建列表
import GroupList from '../components/groupList/GroupList' // 项目列表
// import Join from '../components/dialog/Join' // 项目列表

import Home from '../view/Home'
import Login from '../view/Login'
import Tasks from '../view/Tasks'
import Regist from '../view/Regist'

Vue.use(Router)

export default new Router({
    mode: 'hash', // 去掉url中的#
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        // {
        //     path: '/join',
        //     name: 'Join',
        //     component: Join
        // },
        {
            path: '/tasks',
            name: 'Tasks',
            component: Tasks,
            meta: {
                requireAuth: true
            }
        },
        // {
        //     path: '*', // 其他没有的页面都重定向到 home页面去
        //     redirect: '/login'
        // },
        {
            path: '/regist',
            name: 'Regist',
            component: Regist
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: '/home/myGroup',
                    name: 'MyGroup',
                    component: MyGroup,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/home/newGroup',
                    name: 'NewGroup',
                    component: NewGroup,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/home/groupList',
                    name: 'GroupList',
                    component: GroupList,
                    meta: {
                        requireAuth: true
                    }
                }
            ],
            meta: {
                requireAuth: true
            }
        }
    ]
})
