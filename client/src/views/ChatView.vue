<template>
    <div>
        
    </div>
    <SplashScreen v-if="splashScreen.show" :settings="splashScreen" />
</template>


<script>
import SplashScreen from '@/components/SplashScreen.vue';
   export default {
      name: "ChatView",
      data(){
        return {
               viewtitle: "Chat",
               splashScreen: {show:true, autoHide:true},
        }
      },
      components: {
          SplashScreen
      },
      created (){
        // Set view title
        document.title = "Blox | " + this.viewtitle;
      }
   }
</script>

<style scoped>

</style>