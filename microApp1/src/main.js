import '../public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';

Vue.use(VueRouter);
Vue.config.productionTip = false;

let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/micro1/' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    // store,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
  instance.abccba=112233;
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {

  console.log('bootstrap');
}
export async function mount(props) {
  console.log('mount', props);
  render(props);
  console.log(instance);
}
export async function unmount() {
  console.log('unmount');
  // instance.$destroy();
  // instance.$el.innerHTML = '';
  // instance = null;
  // router = null;
}