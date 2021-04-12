<template>
    <div class="box">
        这是微前端1 的page1页面
        传入图片
        <img src="../../../src/assets/logo.png" alt="">
        <p class="aaa">微应用跳转自己路由</p>
        <div @click="toRouterText">跳转到routerText</div>
    </div>
</template>

<script>

    export default {
        name: "page1",
        created() {

        },
        methods:{
            toRouterText(){
                this.$router.push('/routerText')
            }
        }
    }
</script>

<style scoped>
    .box{
        width: 50vw;
        height: 50vh;
        margin-left: 25vw;
        margin-top: 25vh;
        background: #2c3e50;
        color: aliceblue;
    }
</style>