<template>
  <div class="main-body" id="mainView">
    <div class="image-banner"> 
    </div>
    <div class="page-content py-3" align="center">
      <img src="../assets/images/logomin.png" class="formlogo" alt=""> 
      <div class="form-bx w-50 mx-auto mt-3 py-3" align="start">

        <div class="form-bx-header py-2 d-flex flex-column gap-1" align="center">
          <span class="fs-2 title fw-bold txt-dark">Open an account</span>
          <span class="fs-6 text fw-light txt-dark-light">Create a new account to start chatting with friends all around the world !</span>
        </div>
        <form action="" method="POST">
          <div class="form-group py-2">
          <label for="" class="py-1 fs-7 fw-medium text txt-dark-light">Name </label>
          <input 
            type="text" 
            name="" 
            id="" 
            class="form-control shadow-none fs-6 text py-2 rounded-3" 
            placeholder="name" />
          </div>

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

          <div class="form-group py-2">
            <label for="" class="py-1 fs-7 fw-medium text txt-dark-light">Password Confirmation </label>
            <input
              type="password"
              name=""
              id=""
              class="form-control shadow-none fs-6 text py-2 rounded-3"
              placeholder="confirm password"
            />
          </div>
          <button type="button" @click="redirectTemp()" class="btn btn-default text-white w-100 my-2 py-2 fs-6 text rounded-3 d-flex justify-content-center gap-3 align-items-center" btn-state="pending"> Sign up <span class="load-spinner"></span></button>
        </form>
        <div class="form-bx-footer py-3 mt-2" align="center">
          <p class="fs-6 text fw-light txt-dark-light">Already have an account ? <router-link to="/signin">Sign Up Now</router-link></p> 
        </div>
      </div>
    </div>
  </div>
  <SplashScreen v-if="splashScreen.show" :settings="splashScreen" />
</template>

<script>
import SplashScreen from "../components/SplashScreen.vue";

export default {
  name: "SignupView",
  data() {
    return {
      splashScreen: { show: true, autoHide: true },
      viewtitle: "Open a new account",
    };
  },
  components: {
    SplashScreen,
  },
  created() {
    // Set view title
    document.title = "blox | " + this.viewtitle;
  },
  methods: {
      redirectTemp(){
        location.href = "/chat";
      }
  }
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