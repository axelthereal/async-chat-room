<template>
    <div class="main-body" id="onboardingScreen">
        <div class="image-banner"> 
    </div>
    <div class="page-content py-3" align="center">
      <img src="../assets/images/logomin.png" class="formlogo" alt=""> 
      <div class="form-bx w-50 mx-auto mt-5 py-3">

        <div class="form-bx-header py-2 d-flex flex-column gap-1" align="left">
          <span class="fs-2 title fw-bold txt-dark">Let's get started !</span>
          <span class="fs-6 text fw-light txt-dark-light">Create a new group or join one to start chatting with friends around the world !</span>
        </div>
     
      </div>
    </div>
    </div>
  <SplashScreen v-if="splashScreen.show" :settings="splashScreen" />
</template>

<script>
import SplashScreen from "../components/SplashScreen.vue";

export default {
    name: "OnboardingView",
    data(){
        return {
            splashScreen: { show: true, autoHide: true },
            viewtitle: "Welcome !",
        }
    },
    components: {
        SplashScreen
    },
  created() {
    // Set view title
    document.title = "blox | " + this.viewtitle;
  },
}
</script>

<style scoped>
.main-body{
    display: flex;
    justify-content: space-evenly;
}
.main-body .page-content {
  position: fixed;
  right: 0;
  overflow-y: scroll;
}
.main-body .image-banner, .main-body .page-content {
    width: 50%;
    height:100vh !important;  
    z-index: 1;
}
.main-body .image-banner{ 
  left: 0; 
  position:fixed !important;
  background-image: url("../assets/cdn/23985384_6894915.jpg");
  background-position: center;
  background-size: cover;
}
.main-body a{
  color: var(--tc-active);
}
.main-body a:hover {
  color: var(--tc-active-dark);
}
.main-body .page-content .form-control:focus {
  border:1px solid var(--bd-active) !important;
}
.main-body .page-content .btn-default{
  background-color: var(--bg-active);
  border:none !important;
}
.main-body .page-content .btn-default:hover{
  background-color: var(--bg-active-darker); 
}
.main-body .page-content .btn-default:active{
  background-color: var(--bg-active-dark); 
}
.main-body form{
  text-align: start !important;
}


.load-spinner{
  display: none;
  width: 20px;
  height: 20px;
  background-color:transparent;
  border:2px solid var(--bd-light);
  border-radius: 50%;
  border-top-color: transparent;
  animation: spinning 0.7s ease-in 0.0s infinite normal; 
}
[btn-state="pending"] .load-spinner{
  display: block;
}
@keyframes spinning {
    0%{ transform: initial;}  
    100%{ transform: rotate(360deg); }
}
</style>