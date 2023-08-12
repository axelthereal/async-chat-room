<template>
  <div class="main-body" id="mainView">
    <div class="image-banner"> 
    </div>
    <div class="page-content py-3" align="center">
      <img src="../assets/images/logomin.png" class="formlogo" alt=""> 
      <div class="form-bx w-50 mx-auto mt-5 py-3" align="start">

        <div class="form-bx-header py-2 d-flex flex-column gap-1" align="center">
          <span class="fs-2 title fw-bold txt-dark">Welcome back</span>
          <span class="fs-6 text fw-light txt-dark-light">Sign in to your blox account to start chatting</span>
        </div>
        <form action="" method="POST"> 
          <div class="form-group py-2">
          <label for="" class="py-1 fs-7 fw-medium text txt-dark-light">Email </label>
            <input
              type="email"
              name=""
              id=""
              class="form-control shadow-none fs-6 text py-2 rounded-3"
              placeholder="you@example.com"
            />
          </div>

          <div class="form-group py-2">
          <label for="" class="py-1 fs-7 fw-medium text txt-dark-light">Password </label>
            <input
              type="password"
              name=""
              id=""
              class="form-control shadow-none fs-6 text py-2 rounded-3"
              placeholder="password"
            />
          </div>

           
          <button type="button" class="btn btn-default text-white w-100 my-2 py-2 fs-6 text rounded-3 d-flex justify-content-center gap-3 align-items-center" btn-state="pending"> Sign in <span class="load-spinner"></span></button>
        </form>
        <div class="form-bx-footer py-3 mt-2" align="center">
          <p class="fs-6 text fw-light txt-dark-light">Don't have an account ? <router-link to="/signup">Sign Up Now</router-link></p> 
        </div>
      </div>
    </div>
  </div>
  <SplashScreen v-if="splashScreen.show" :settings="splashScreen" />
</template>

<script>
import SplashScreen from "../components/SplashScreen.vue";

export default {
  name: "SigninView",
  data() {
    return {
      splashScreen: { show: true, autoHide: true },
      viewtitle: "Sign in",
    };
  },
  components: {
    SplashScreen,
  },
  created() {
    // Set view title
    document.title = "blox | " + this.viewtitle;
  },
};
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
