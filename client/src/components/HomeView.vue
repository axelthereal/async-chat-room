<template>
    <div id="mainview">
    <h1>Home App</h1>
    </div>
    <SplashScreen v-if="splashScreen.show" :settings="splashScreen" />
</template>

<script>
  import SplashScreen from './SplashScreen.vue';
  export default {
     name: "HomeView",
     data(){
      return {  
          splashScreen: {show:true, autoHide:true},
          viewtitle: "Home",
      }
     },
     components: {
      SplashScreen
     },
     created(){
       document.title = "ChatRoom | Home";
     } 
  }
</script>

<style scoped>
</style>