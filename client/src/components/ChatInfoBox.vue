<template>
    <div class="chatboxinfo card border-0 bg-white" id="chatboxinfo">
        <!-- Info Box Header -->
        <div class="card-header py-2 border-0 bg-white  px-4">
            <div class="cb-info py-2 d-flex justify-content-between align-items-center gap-1">
              <div class="cb-data cursor-p w-100 px-2 d-flex flex-column">
                <span class="cb-title fs-6 text txt-dark-light fw-medium">Group Info</span> 
              </div>
              <div class="icons nowrap"> 
                <div class="txt-dark-lighter fs-5 w-100"> 
                <i class="cursor-p bi bi-x-circle"></i>
                </div> 
              </div>
           </div>
        </div>

         <!-- Info Box Content -->
        <div class="card-body infobox-content border-0 p-4"> 
        </div>
    </div>
</template>

<script>
  export default {
      name: "ChatBoxInfo"
  }
</script>

<style scoped>
  #chatboxinfo{
    position: relative;
    min-width:100px; 
    width:25%;  
    height: 100%;  
    background-color: transparent; 
  } 
</style>