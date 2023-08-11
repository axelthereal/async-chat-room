<template>
  <div class="main-body" id="mainView">
    <div class="image-banner"> 
    </div>
    <div class="page-content py-3">
      <div class="form-bx w-50 mx-auto mt-5 py-3">
        <div class="form-bx-header py-2 d-flex flex-column">
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
          <button type="button" class="btn btn-primary w-100 my-2 py-2 fs-6 text rounded-3"> Sign in </button>
        </form>
        <div class="form-bx-footer py-3 mt-2" align="center">
          <p class="fs-6 text fw-light txt-dark-light">Already have an account ? <a href="">Sign Up Now</a></p> 
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
      splashScreen: { show: false, autoHide: true },
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
  background-image: url("../assets/cdn/ironman.jpg");
  background-position: center;
  background-size: cover;
}


</style>
