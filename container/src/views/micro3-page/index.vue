<template>
<!--    这是主应用的pagecom页面 用来展示微前端的页面-->
    <div id="app4"  ref="app3=4">

<!--        <router-view></router-view>-->

    </div>
</template>

<script>
    import { start } from 'qiankun';
    export default {
        name: "pagecom",
        mounted() {
            if (!window.qiankunStarted) {
                window.qiankunStarted = true;
                start();
            }

        },

    }
</script>

<style scoped>

</style>