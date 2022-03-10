
import LButton from '@/components/button';
import LInput from "@/components/input";
const component={
    LButton,
    LInput
}
function install(Vue) {
    const keys = Object.keys(component);
    keys.forEach((name) => {
        const components = component[name];
        Vue.component(components.name || name, components);
    });
}
export default {
    install,
    ...component
};