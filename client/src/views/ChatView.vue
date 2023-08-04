<template>
    <div class="mainApp d-flex justify-content-start align-items-center"> 
          <ToolBar />  
    </div>
    <SplashScreen v-if="splashScreen.show" :settings="splashScreen" />
</template>


<script>
import SplashScreen from '@/components/SplashScreen.vue';
import ToolBar from '@/components/ToolsBar.vue';

   export default {
      name: "ChatView",
      data(){
        return {
               viewtitle: "Chat",
               splashScreen: {show:true, autoHide:true},
        }
      },
      components: {
          SplashScreen,
          ToolBar
      },
      created (){
        // Set view title
        document.title = "Blox | " + this.viewtitle;
      }
   }
</script>

<style scoped>
   .mainApp{ 
    position: fixed;
    width: 100%;
    height: 100vh; 
    padding:0;
    margin: 0; 
    background-color: var(--bg-light-dark); 
   } 
</style>