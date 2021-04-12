<template>
    <div class="box">

        这是主应用,实现了嵌套路由
        <router-view />
    </div>
</template>

<script>
    // import {start} from "qiankun";

    export default {
        name: "pagecom2",
        // mounted() {
        //     if (!window.qiankunStarted) {
        //         window.qiankunStarted = true;
        //         start();
        //     }
        // },
    }
</script>

<style scoped>
    .box{
        width: 100vw;
        height: 100vh;
        background: #42b983;
    }
</style>