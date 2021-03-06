<template>
    <div>
        这是主应用的pagecom页面

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