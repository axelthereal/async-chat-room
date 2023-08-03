<template>
    <div class="container p-5" id="mainView">
        <h1>Sign up</h1>
        <hr>
        <p><i class="bi bi-arrow-left ms-2"></i> Go back <a href="/signup">here</a></p>
        <SplashScreen v-if="splashScreen.show" :settings="splashScreen" />
    </div>
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