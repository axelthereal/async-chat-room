<template>
    <div class="chatbox card border-0" id="chatBoxVue">
        <div class="card-header border-0 bg-white">
           <div class="cb-info d-flex justify-content-between align-items-center gap-1">
              <img src="../assets/images/user3.png" alt="" class="rounded-circle cursor-p" width="43" height="43" />
              <div class="cb-data  w-100 bg-primary">info</div>
              <div class="icons nowrap  bg-danger">icons</div>
           </div>
        </div>
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