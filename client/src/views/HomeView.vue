<template>
    <div class="container p-5" id="mainview">
    <h1>Home App</h1>
    <p>Create your account <a href="/signup">here</a></p>
    </div>
    <SplashScreen v-if="splashScreen.show" :settings="splashScreen" />
</template>

<script>
  import SplashScreen from '../components/SplashScreen.vue';
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
       // Set view title
       document.title = "blox | " + this.viewtitle;
     } 
  }
</script>

<style scoped>
</style>