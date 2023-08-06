<template>
    <div class="chatbox card border-0" id="chatBoxVue">
        <div class="card-header border-0 bg-white"><h1>Chat header</h1></div>
        <div class="card-body border-0"> Messages here...</div>
        <div class="card-footer border-0"><h1>Chat Footer</h1></div>
    </div>
</template>


<script>
 export default {
     name: "ChatBox"
 }
</script>


<style>
  #chatBoxVue{
    position: relative;
    min-width:100px; 
    width:70%;  
    height: 100%;  
    background-color: transparent; 
  }
</style>