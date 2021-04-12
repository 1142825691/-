
// import Vue from 'vue'
// import Router from 'vue-router'

//组件模块
import page1 from './view/page1'

// Vue.use(Router)

const routes=[
    {path:'/page1',component:page1},
    {path:'/micro1-2',component:()=>import('./view/micro1-2')},
    {path:'/routerTest',component:()=>import('./view/page1/routerTest')},
]


export default routes