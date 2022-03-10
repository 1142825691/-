import '../public-path';
import { createApp } from 'vue'
import uiTestNpm from 'ui-test-npm'
import App from './App.vue'
import routers from "./routers";
import 'ui-test-npm/dist/ui-test-npm.css'
let instance = null;
console.log(uiTestNpm);
function render(props = {}) {
    const { container } = props;
    instance = createApp(App);
    instance.use(routers);
    instance.use(uiTestNpm);
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