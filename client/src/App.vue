<template>  
  <main id="main">
    <HomeView />
  </main> 
</template>

<script> 
import HomeView from "./components/HomeView";

export default {
     name:"App",
     components:{
        HomeView, 
     }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
}
</style>
