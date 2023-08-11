<template>
  <div class="main-body" id="mainView">
    <div class="image-banner"> 
    </div>
    <div class="page-content py-5">
      <div class="form-bx w-50 mx-auto mt-5 py-5">
        <div class="form-bx-header d-flex flex-column">
          <span>Open an account</span>
          <span>Create a new account to start chatting</span>
        </div>
        <form action="" method="POST">
          <div class="form-group py-2">
          <label for="" class="py-1">Name </label>
          <input 
            type="text" 
            name="" 
            id="" 
            class="form-control shadow-none" 
            placeholder="name" />
          </div>

          <div class="form-group py-2">
          <label for="" class="py-1">Email </label>
            <input
              type="email"
              name=""
              id=""
              class="form-control shadow-none"
              placeholder="you@example.com"
            />
          </div>

          <div class="form-group py-2">
          <label for="" class="py-1">Password </label>
            <input
              type="password"
              name=""
              id=""
              class="form-control shadow-none"
              placeholder="password"
            />
          </div>

          <div class="form-group py-2">
            <label for="" class="py-1">Password Confirmation </label>
            <input
              type="password"
              name=""
              id=""
              class="form-control shadow-none"
              placeholder="confirm password"
            />
          </div>
        </form>
        <div class="form-bx-footer">
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
      splashScreen: { show: false, autoHide: true },
      viewtitle: "Sign up",
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
