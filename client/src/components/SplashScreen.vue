<template>
    <div class="loader" id="AppLoader" :style="{'display': getDisplayState }">
    <div class="page-loader d-flex flex-column justify-content-between align-items-center">
        <img src="../assets/images/logo_min.png" width="75" class="loader-icon" alt="page-loader-icon">
        <span class="loader-title fs-3 fw-bold txt-dark-light mt-2">blox Messenger</span>
        <span class="loader-bar d-block rounded-4 mt-4"><span class="bar d-block rounded-4"></span></span>
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
 .page-loader .loader-bar{
    width:75%;
    height:6px;
    background-color: #f5f5f5f1;
    overflow: hidden;
    opacity: 0;
    animation: loader-bar-show 0.2s ease-in 2.2s 1 normal forwards;
    position: relative;
    z-index: 3;
 }
 .page-loader .loader-bar .bar{
    width:10%;
    height:100%;
    left:0%;
    position: absolute;
    z-index: 1;
    background-color: #673ab7; 
    animation: loader-bar-item-show 1s ease-in 2.3s infinite normal forwards;
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
 @keyframes loader-bar-show {
    0%{opacity: 0;} 
    100%{opacity: 1;}
 }
 @keyframes loader-bar-item-show {
    0%{left:0%;} 
    100%{left:99%;}
 }
</style>

<script>

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
             }, 4500);
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