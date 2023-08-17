<template>
    <div class="main-body" id="onboardingScreen">
        <div class="image-banner"> 
    </div>
    <div class="page-content py-3" align="center">
      <img src="../assets/images/logomin.png" class="formlogo" alt=""> 
      <div class="form-bx w-50 mx-auto mt-5 py-3" align="left">

        <div class="form-bx-header py-2 d-flex flex-column gap-1">
          <span class="fs-2 title fw-bold txt-dark">Let's get started !</span>
          <span class="fs-6 text fw-light txt-dark-light">Create a new group or join one to start chatting with friends around the world !</span>
        </div>

        <button class="btn btn-default py-2 my-2 btn-outlined w-100 d-flex justify-content-between align-items-center rounded-2" @click="toggleCreateGroup()">
        <span class="fs-6 fw-semibold text txt-dark">Create a new chat group</span>
        <span class="btn-icon nowrap fs-5 title"><i class="bi bi-plus-square-fill"></i></span>
        </button>

        
        <div class="w-100 group-suggestions mt-5">
        <h4 class="fs-6 text fw-light txt-dark my-3">Or join atleast one group</h4>

        <div class="chatgroup-item cursor-p d-flex justify-content-between align-items-center w-100 gap-3 p-2 rounded-2 my-2">
           <img src="../assets/cdn/ironman.jpg" class="rounded-3" alt="" />
           <div class="group-info d-flex flex-column justify-content-center align-items-start w-100">
             <span class="fs-6 fw-semibold text txt-dark">Group name</span>
             <span class="fs-7 fw-medium text txt-dark-light">235 Members</span>
           </div>
           <div class="nowrap">
            <button class="btn btn-default btn-active w-100">Join</button>
           </div>
        </div>

        </div>
         
        <button class="mt-5 fs-6 btn btn-default py-2 btn-active w-100 d-flex justify-content-center align-items-center gap-3 rounded-3">
          <span class="fw-medium text">Continue</span> 
          <span class="btn-icon"><i class="bi bi-arrow-right"></i></span>
        </button>
     
      </div>
    </div>
    </div>
  <CreateGroupComponent :isActive="newGroupPopupState" @toggle-popup="toggleCreateGroup" />  
  <SplashScreen v-if="splashScreen.show" :settings="splashScreen" />
</template>

<script>
import SplashScreen from "../components/SplashScreen.vue";
import CreateGroupComponent from "../components/actioncomponents/CreateGroupComponent.vue";

export default {
    name: "OnboardingView",
    data(){
        return {
            splashScreen: { show: false, autoHide: true },
            viewtitle: "Welcome !",
            newGroupPopupState: false
        }
    },
    components: {
        SplashScreen,
        CreateGroupComponent
    },
    methods: {
      toggleCreateGroup(nState = !this.newGroupPopupState){
           this.newGroupPopupState = nState;
      } 
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

.chatgroup-item{
    width:100%; 
    border: 1px solid var(--bd-light);
}

.chatgroup-item img{
    width:50px;
    height:50px;
    object-fit: cover;
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