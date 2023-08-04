<template>
    <div class="toolbar toggle">
     <!-- Toolbar-Header -->
       <div class="toolbar-header py-2" align="center">
       <img src="../assets/images/logo.png" class="cursor-p" alt="toolbar-logo">
       </div>

     <!-- Toolbar-Menu -->  
     <div class="toolbar-menu list-group w-100 mt-4">
       <div class="list-group-item rounded-0 cursor-p txt-dark-light d-flex justify-content-center align-items-center flex-column border-0 my-1">
        <span class="item-icon title-b bi bi-house fs-5"></span>
        <span class="item-label text fw-medium fs-8  mt-1">Home</span>
       </div>
       <div class="list-group-item rounded-0 cursor-p txt-dark-light d-flex justify-content-center align-items-center flex-column border-0 my-1">
        <span class="item-icon title-b bi bi-search fs-5"></span>
        <span class="item-label text fw-medium fs-8  mt-1">Search</span>
       </div>
       <div class="list-group-item rounded-0 cursor-p txt-dark-light d-flex justify-content-center align-items-center flex-column border-0 my-1">
        <span class="item-icon title-b bi bi-chat-right-dots fs-5"></span>
        <span class="item-label text fw-medium fs-8  mt-1">Groups</span>
       </div>
       <div class="list-group-item rounded-0 cursor-p txt-dark-light d-flex justify-content-center align-items-center flex-column border-0 my-1">
        <span class="item-icon title-b bi bi-bookmark fs-5"></span>
        <span class="item-label text fw-medium fs-8  mt-1">Saved</span>
       </div> 
       <div class="list-group-item rounded-0 cursor-p txt-dark-light d-flex justify-content-center align-items-center flex-column border-0 my-1">
        <span class="item-icon title-b bi bi-archive fs-5"></span>
        <span class="item-label text fw-medium fs-8  mt-1">Achived</span>
       </div>
     </div>

     <!-- Toolbar-foopter -->
     <div class="toolbar-footer list-group w-100 mt-4 py-2">
       <div class="list-group-item mx-auto py-2 px-1 list-group-item-toggle rounded-pill cursor-p txt-dark-light d-flex justify-content-center align-items-center flex-column gap-2 border-0 my-1">
        <span class="item-icon rounded-circle item-icon-btn item-icon-btn-active  d-flex justify-content-center align-items-center title-b bi bi-sun fs-6"></span> 
        <span class="item-icon rounded-circle item-icon-btn d-flex justify-content-center align-items-center title-b bi bi-moon fs-6"></span> 
       </div>
       <div class="list-group-item rounded-0 cursor-p txt-dark-light d-flex justify-content-center align-items-center flex-column border-0 my-3">
        <img src="../assets/images/user1.png" alt="user-profile-img">
       </div> 
     </div>

    </div>
</template>

<script>
export default {
    name: "ToolBar",
    data(){
      return { 
      }
    } 
}
</script>


<style scoped>
  .toolbar{ 
    position: relative;
    min-width: 78px; 
    width:5%;  
    height: 100%;  
    background-color: var(--bg-light);
    border-right: 1px solid var(--bd-light);
  }
 .toolbar .toolbar-header img{
   max-width: 75%;
   height: auto;
 }
 .toolbar .list-group-item-toggle{
     background-color: var(--bg-light-dark);
 }
 .toolbar .list-group-item-toggle{
    max-width: 50px;
 }
 .toolbar .list-group-item-toggle .item-icon-btn{
   width: 35px;
   height: 35px;
   color: var(--tc-dark-light);
 }
 .toolbar .list-group-item-toggle .item-icon-btn:not(.item-icon-btn-active):hover {
    color: var(--tc-active);
 }
 .toolbar .list-group-item-toggle .item-icon-btn-active{
   background-color: var(--bg-light);
   color:var(--tc-active);
   box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.13); 
 }
 .toolbar .toolbar-footer{
    position: absolute;
    bottom: 0;
 }
 .toolbar .toolbar-footer img{
    max-width:100%;
    height:auto;
    border-radius: 50% !important;
    border: 2px solid var(--bd-light-dark);
 }
</style>