import HelloWorld from "./components/HelloWorld.vue";
import Page1 from "./views/page1/index.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
    { path: "/", component: HelloWorld },
    { path: "/page1", component: Page1 },
];
const router = createRouter({
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? "/micro3" : "/"),
    routes,
});
export default router;