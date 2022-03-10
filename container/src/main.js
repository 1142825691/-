import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from "./router";
Vue.config.productionTip = false
Vue.use(VueRouter);
import { registerMicroApps } from 'qiankun';

registerMicroApps([
  {
    name: 'wei1',
    //微前端地址
    entry: '//localhost:8081',
    //container 是容器的id 在拥有这个ID的时候会将子应用擦入到这个ip下面
    container: '#app3',
    //与微前端base相同
    activeRule: '/micro1/',
  },
  // {
  //   name: 'wei2',
  //   //微前端地址
  //   entry: '//localhost:8082',
  //   container: '#micro2',
  //   //与微前端base相同
  //   activeRule: '/micro2/',
  // },
  {
    name: 'wei3',
    //微前端地址
    entry: '//localhost:8082',
    container: '#app4',
    //与微前端base相同
    activeRule: '/micro3/',
  },
  // {
  //   name: 'vueApp',
  //   entry: '//localhost:8080',
  //   container: '#container',
  //   activeRule: '/app-vue',
  // },
]);
// 启动 qiankun
// start();

let router = new VueRouter({
  mode: 'history',
  routes,
});



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
