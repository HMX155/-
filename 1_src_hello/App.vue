<template>
  <div>
    <h1 class="welcome">欢迎学习Vue脚手架</h1>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  components:{
    HelloWorld
  }
}
</script>

<style>
  .welcome{
    background-color: pink;
  }
</style>