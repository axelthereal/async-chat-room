<template>
    <div class="mainbody d-flex" id="mainView">
      <div class="image-banner w-50">
        <img src="../assets/images/user4.png" alt="" />
      </div>
      <div class="page-content w-50">
        <h1>Hello world</h1>
      </div>
    </div>
    <SplashScreen v-if="splashScreen.show" :settings="splashScreen" />
</template>

<script>
import SplashScreen from '../components/SplashScreen.vue';

export default{
    name: "SignupView",
    data(){
        return { 
            splashScreen: {show:true, autoHide:true},
            viewtitle: "Sign up",
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