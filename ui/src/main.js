import {createApp} from 'vue'
import App from './App.vue'
import routers from "./routers";
// import LButton from '@/components/button';
// import LInput from "@/components/input";
// const component = {
//     LButton,
//     LInput
// }
import L from './components/index';
const instance=createApp(App);
instance.use(routers).use(L).mount( "#app");
// Object.keys(component).forEach(name => {
//     instance.component(name, component[name])
// })

