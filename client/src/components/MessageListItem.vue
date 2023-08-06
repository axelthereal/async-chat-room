<template>
    <div class="msg-item py-3 list-group-item-action bg-light px-4 d-flex gap-3 align-items-center list-group-item border-0 rounded-1 cursor-p">
          <img src="../assets/cdn/rickandmorty.png" alt="" class="rounded-circle flex-shrink-0" width="42" height="42">
          <div class="d-flex gap-2 w-100 justify-content-between">
             <div class="d-flex flex-column justify-content-between align-items-start">
            <span class="groupname fs-6 text txt-darkgrey fw-semibold">Rick and morty</span>
            <span class="msgcontent fs-7 txt-dark-lighter fw-semibold text-smb">hey man</span>
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
</template>

<script>
  export default {
     name: "MessageListItem"
  }
</script>

<style scoped>

</style>