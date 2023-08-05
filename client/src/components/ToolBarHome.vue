<template>
    <div class="homeview"> 
       <div class="viewheader py-1 px-4">
         <h1 class="fs-5 fw-semibold txt-dark title-smb">Messages</h1>
       </div>
       <div class="viewcontent list-group mx-0 px-0">
        
        <div class="msg-item py-3 list-group-item-action bg-light px-4 d-flex gap-3 align-items-center list-group-item border-0 rounded-1 cursor-p">
          <img src="../assets/cdn/rickandmorty.png" alt="" class="rounded-circle flex-shrink-0" width="47" height="47">
          <div class="d-flex gap-2 w-100 justify-content-between">
             <div class="d-flex flex-column justify-content-between align-items-start">
            <span class="groupname fs-5 fw-bold txt-black title-smb">Rick and morty</span>
            <span class="msgcontent fs-6 txt-dark-light fw-medium text-smb">hey man</span>
             </div>
             <div class="text-nowrap mt-2">
               <div class="">
               <i class="bi bi-bell fs-8 me-2"></i>
               <span class="msgtime fw-medium text-b txt-dark-lighter">12:30</span>
               </div>
               <div align="right">
                <i class="bi bi-check-all"></i>
               </div>
             </div>
          </div>
        </div>

       </div>
    </div>
</template>

<script> 
export default {
     name: "BarHome",  
}
</script>

<style scope>
  .viewcontent{
     position:static;
     overflow-y: scroll;
     width: 100%;
     height: 100vh;
  }
  .viewcontent::-webkit-scrollbar {
    display: none !important;
  }
  .viewcontent{
  -ms-overflow-style: none;
  }
</style>