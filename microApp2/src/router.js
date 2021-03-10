
// import Vue from 'vue'
// import Router from 'vue-router'

//组件模块
// import page1 from './views/microapp2-page1'

// Vue.use(Router)

const routes=[
    {path:'/page1',name:'micro2-page1',component:()=>import('./views/microapp2-page1')},
]


export default routes