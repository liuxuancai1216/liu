import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const profile = r => require.ensure([], () => r(require('../page/profile/profile')), 'profile')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const info = r => require.ensure([], () => r(require('../page/profile/children/info')), 'info')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        //首页城市列表页
        {
            path: '/home',
            component: home
        },
        {
            path: '/city/:cityid',
            component: city
        },
        //登录注册页
        {
            path: '/login',
            component: login
        },
        {
            path: '/profile',
            component: profile,
            children:[{
                path: 'info', //个人信息详情页
                component: info,
            }]
        },
    ]
}]
