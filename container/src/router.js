
// import Vue from 'vue'
// import Router from 'vue-router'

//组件模块
// import pagecom from './view/pagecom'

// Vue.use(Router)

const routes=[
    {
        path: '/app-vue/*',
        name: 'pagecom',
        component: () => import('./views/pagecom'),
    },
    {
        path:'/pagecom2',
        component:()=>import('./views/pagecom2')
    }
]


export default routes