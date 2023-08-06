<template>
    <div class="chatbox card border-0" id="chatBoxVue">
        <div class="card-header py-2 border-0 bg-white px-4">
           <div class="cb-info py-1 d-flex justify-content-between align-items-center gap-1">
              <img src="../assets/cdn/rickandmorty.png" alt="" class="rounded-circle cursor-p" width="43" height="43" />
              <div class="cb-data cursor-p w-100 px-2 d-flex flex-column">
                <span class="cb-title fs-6 title-b txt-dark fw-medium">Rick and Morty</span>
                <span class="cb-status fs-7 txt-dark-lighter fw-normal text">Sanchez is typing...</span>
              </div>
              <div class="icons nowrap"> 
                <div class="d-flex gap-4 fs-5 w-100">
                <i class="cursor-p bi bi-camera-video"></i> 
                <i class="cursor-p bi bi-telephone-plus"></i>
                <i class="cursor-p bi bi-layout-split"></i> 
                <i class="cursor-p bi bi-three-dots"></i>
                </div> 
              </div>
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
    width:74%;  
    height: 100%;  
    background-color: transparent; 
  }
  #chatBoxVue .card-header{
     border-bottom:1px solid var(--bg-light-darker) !important;
  }
</style>