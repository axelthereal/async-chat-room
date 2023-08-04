<template>
    <div class="container p-5" id="mainview">
    <h1>Big title</h1>
    <h3>Middle title</h3>
    <h5>Last text title</h5>
    <p class="fs-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Labore tenetur blanditiis at ad ut commodi pariatur? Eum quos tempore ut 
    accusantium eius rerum necessitatibus, veniam harum, maiores.</p>
    <p>Create your account <router-link to="/signup">here</router-link></p>
    </div>
    <SplashScreen v-if="splashScreen.show" :settings="splashScreen" />
</template>

<script>
  import SplashScreen from '../components/SplashScreen.vue';
  export default {
     name: "HomeView",
     data(){
      return {  
          splashScreen: {show:false, autoHide:true},
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