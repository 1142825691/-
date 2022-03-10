<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <p>这是子应用3</p>
<!--  <li class="item_tip"-->
<!--      @click="goto()">跳转</li>-->
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {onBeforeUnmount} from 'vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  setup(){
    let a=()=>{
      const aaaa='12344321';
      console.log(111);
      return ()=>{
        return aaaa
      }
    }
    a();
    const seta= setInterval(()=>{
        const aabb='112233';
    },1000)
    const goto=()=> {
      history.pushState(null, '', '/');
    }
    onBeforeUnmount(()=>{
      console.log(123131313131313);
      a=null
      clearInterval(seta);
    })
    return {
      a,
      goto
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
