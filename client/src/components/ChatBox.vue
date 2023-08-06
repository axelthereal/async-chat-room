<template>
    <div class="chatbox card border-0" id="chatBoxVue">
        <!-- Message Box Header -->
        <div class="card-header py-2 border-0 bg-white px-4">
           <div class="cb-info py-1 d-flex justify-content-between align-items-center gap-1">
              <img src="../assets/cdn/rickandmorty.png" alt="" class="rounded-circle cursor-p" width="43" height="43" />
              <div class="cb-data cursor-p w-100 px-2 d-flex flex-column">
                <span class="cb-title fs-6 title-b txt-dark fw-medium">Rick and Morty</span>
                <span class="cb-status fs-7 txt-dark-lighter fw-normal text">Sanchez is typing...</span>
              </div>
              <div class="icons nowrap"> 
                <div class="d-flex txt-dark-light gap-4 fs-5 w-100">
                <i class="cursor-p bi bi-search"></i> 
                <i class="cursor-p bi bi-camera-video"></i> 
                <i class="cursor-p bi bi-telephone-plus"></i>
                <i class="cursor-p bi bi-layout-split"></i> 
                <i class="cursor-p bi bi-three-dots"></i>
                </div> 
              </div>
           </div>
        </div>
        <!-- Message-Box-Header -->

        <!-- Message Chat Content -->
        <div class="card-body border-0"> Messages here...</div>
        <!-- */Message-Chat-Content -->

        <!-- Message Box Form -->
        <div class="card-footer py-2 border-0 bg-white px-4">
           <form class="chat-from my-2 formbx d-flex gap-3 align-items-center" action="" method="POST"> 
              <span class="icon-toggle cursor-p fs-4 bi bi-emoji-smile"></span>
              <span class="icon-toggle cursor-p fs-4 bi bi-file-plus"></span> 
             <div class="form-group w-100">
               <input type="text" placeholder="Type your message..." class="form-control fs-6 py-2 rounded-3 border-0 shadow-none" />
             </div>
             <div class="nowrap">
               <span class="icon-toggle cursor-p fs-4 bi bi-mic"></span> 
             </div>
           </form>
        </div>
        <!-- */Message-Box-Form -->
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
  #chatBoxVue .card-footer .form-control{
       background-color: var(--bg-light-dark);
       border:1px solid var(--bg-light-darker) !important;
  }
  #chatBoxVue .bi:hover{
     color: var(--tc-active) !important;
  }
</style>