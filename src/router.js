import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Users from './views/Users.vue'
import Login from './views/Login.vue'
import CreateUser from './views/CreateUser.vue'
import UserEdit from './components/UserEdit.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/users',
            name: 'users',
            component: Users
        },
        {
            path: '/create-user',
            name: 'create-user',
            component: CreateUser
        },
        {
            path: '/user/:user_id/edit',
            component: UserEdit,
            name: 'user-edit'},
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})
