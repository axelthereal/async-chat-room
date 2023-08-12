<template> 
    <div class="main-body container p-5" id="mainview">
    <h1 class="title-b">Big title</h1>
    <h3 class="title-smb">Middle title</h3>
    <h5 class="title">Last text title</h5>
    <p class="fs-6 text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Labore tenetur blanditiis at ad ut commodi pariatur? Eum quos tempore ut 
    accusantium eius rerum necessitatibus, veniam harum, maiores.</p>
    <p class="fs-6 text-smb">Open Chat <router-link to="/chat">here</router-link></p>
    <p class="fs-6 text-smb">Create your account <router-link to="/signup">here</router-link></p>
    <p class="fs-6 text-b">Another text goes here</p>
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
     async created(){
       // Set view title
       document.title = "Blox | " + this.viewtitle;
     } 
  }
</script>

<style scoped>

</style>