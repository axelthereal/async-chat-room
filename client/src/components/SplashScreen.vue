<template>
    <div class="loader" id="AppLoader" :style="{'display': getDisplayState }">
    <div class="page-loader d-flex flex-column justify-content-between align-items-center">
        <img src="../assets/images/logo.png" width="145" height="145" class="loader-icon" alt="page-loader-icon">
        <span class="loader-title fs-2 fw-bold title-b mt-3">Blox Messenger</span>
    </div> 
    </div>
</template>

<style scoped>
.txt-dark{
  color: #000;
 } 
 .txt-dark-light{
  color:#0c1427;
 } 
 .txt-grey{
  color:#838693;
 } 
 .loader{
   top: 0;
   left: 0;
   position: absolute;
   background-color: #ffffff;
   width: 100%;
   height: 100%;
   z-index: 99999;
 }
 .loader .page-loader{ 
    width:30%;
    min-width:300px;
    max-width: 450px;
    top: 50%; 
    left:50%;
    transform: translate(-50%, -70%); 
    position:absolute;    
 }
 .page-loader .loader-icon{
    opacity: 0;
    margin-bottom:-50px;
    animation: loader-icon-show 1s ease-in .3s 1 normal forwards;
 }
 .page-loader .loader-title{
    opacity: 0; 
    transform: scale(0.9);
    animation: loader-title-show 0.2s ease-in 1.5s 1 normal forwards;
 }  

 @keyframes loader-icon-show {
    0%{opacity: 0;margin-bottom:-50px;}
    80%{opacity: 1;margin-bottom:-50px;}
    100%{opacity: 1;margin-bottom:0px;}
 }
 @keyframes loader-title-show {
    0%{opacity: 0;transform: scale(0.9);} 
    100%{opacity: 1;transform: scale(1);}
 } 
</style>

<script>
/*
  .Documentation
   add default settings in view data
   splashScreen: {show:true, autoHide:true},
*/
export default {
      name: "SplashScreen",
      data(){
        return {
           splashSettings: {
            autoHide: true,
            show: true
           }
        }
      },
      props: { 
         settings: Object
       },
      async created() {
        await this.updateSettings(); 
        if(this.splashSettings.autoHide == true){
            setTimeout(()=>{ 
                this.splashSettings.show = 'none';
             }, 2800);
          }
      },
      methods: {
         async updateSettings(){ 
            this.splashSettings.autoHide = this.settings.autoHide != undefined ? this.settings.autoHide : this.splashSettings.autoHide;
            this.splashSettings.show = this.settings.show != undefined ? this.settings.show : this.splashSettings.show;
         }
      },
      computed: {
           getDisplayState(){
               return this.splashSettings.show == true ? 'block' : 'none';
           }
      }
}

</script>