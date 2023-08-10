<template>
    <div class="main-body d-flex" id="mainView">
      <div class="image-banner w-50">
        <img src="../assets/cdn/ironman.jpg" alt="" />
      </div>
      <div class="page-content w-50">

        <form action="" method="POST">
          <div class="form-group">
            <input type="text" name="" id="" class="form-control" placeholder="name" />
          </div>

          <div class="form-group">
            <input type="email" name="" id="" class="form-control" placeholder="you@example.com" />
          </div>

          <div class="form-group">
            <input type="password" name="" id="" class="form-control" placeholder="password" />
          </div>
          
        </form>

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
            splashScreen: {show:false, autoHide:true},
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

<style scoped>
  .main-body .image-banner{
    overflow: hidden;
    position: relative;
    height: 100vh;  
  }
  .main-body .image-banner img{
      top: 0;
      left: 0;
      min-width: 100%;
      height: 100%;
      object-fit:fill;
      position: absolute;
  }
  .main-body .page-content{
    
  }

</style>