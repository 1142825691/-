// import Vue from 'vue'
// import Router from 'vue-router'

//组件模块
// import pagecom from './view/pagecom'

// Vue.use(Router)

const routes = [

    {
        path: '/pagecom2',
        name: 'pagecom2',
        component: () => import('./views/pagecom2'),
        children: [
            {
                path: '/child',
                name: 'child',
                component: () => import('./views/pagecom2/child')
            },
            //每个微应用至少要有一个views来装载
            //每个微应用直接不可以有重复的id
            {
                path: '/micro1/page1',
                name: 'pagecom-micro1',
                component: () => import('./views/micro1-page'),
            },
            //micro2的页面
            {
                path: '/micro2/page1',
                name: 'pagecom-micro2',
                component: () => import('./views/pagecom-micro2'),
            },
        ]
    },
    //微应用独占一个主应用路由 放在路由的最后
    {
        path: '/micro1/*',
        name: 'micro1-page',
        component: () => import('./views/micro1-page'),
    },
    // {
    //     path:'/pagecom',
    //     name:'pagecom',
    //     component: () => import('./views/pagecom'),
    // }
]


export default routes