<template>
     <div class="msg-item py-3 list-group-item-action bg-transparent px-4 d-flex gap-3 align-items-center list-group-item border-0 rounded-0 cursor-p">
          <img src="../assets/cdn/rickandmorty.png" alt="" class="rounded-circle flex-shrink-0" width="40" height="40">
          <div class="d-flex gap-2 w-100 justify-content-between">
             <div class="d-flex flex-column justify-content-between align-items-start">
            <span class="contactname fs-6 title txt-dark fw-light">Rick Sanchez</span>
            <span class="contactphone fs-7 txt-dark-lighter fw-light text mt-1">(+237) 695 236 349</span>
             </div>
             <div class="text-nowrap mt-2">
               <div class="">
               <i class="bi bi-three-dots-vertical fs-6 me-2"></i> 
               </div>
               <div align="right"> 
               </div>
             </div>
          </div>
  </div>
</template>

<script>
export default {
    name: "ContactItem"
}
</script>