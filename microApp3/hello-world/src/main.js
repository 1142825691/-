import '../public-path';
import { createApp } from 'vue'
import App from './App.vue'
import routers from "./routers";
let instance = null;

function render(props = {}) {
    const { container } = props;
    // console.log(12313);
    instance = createApp(App);
    instance.use(routers);
    instance.mount(container ? container.querySelector("#app") : "#app");
    // instance=createApp(App).use(routers).mount(container ? container.querySelector("#app") : "#app")
    // instance.abccba='112233'
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {

}

export async function mount(props) {
    render(props);
    console.log(instance);
}

export async function unmount() {
    // console.log(instance.unmount);
    // debugger
    instance.unmount();
    instance._container.innerHTML = "";
    instance = null;
}