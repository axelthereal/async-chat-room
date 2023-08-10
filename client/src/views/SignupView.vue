<template>
    <div class="mainbody" id="mainView">
      
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